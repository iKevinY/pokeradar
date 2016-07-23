# -*- coding: utf-8 -*-

import os
import json
import logging

from apscheduler.schedulers.background import BackgroundScheduler

from utils import PGoApi, find_nearby_pokemon

class Pokeradar():
    def __init__(self):
        self.api = PGoApi()
        self.scheduler = BackgroundScheduler()
        self.logged_in = False
        self.nearby_pokemon = None

        self.latitude = None
        self.longitude = None

        with open(os.path.join(os.path.dirname(__file__), 'data/pokemon.json')) as f:
            self.pokemon_names = json.load(f)


    def login(self, form_data):
        username = form_data['username']
        password = form_data['password']
        latitude = form_data['latitude']
        longitude = form_data['longitude']

        if not self.logged_in:
            if not self.api.login('ptc', username, password):
                return 'Login failed (either servers are down or invalid credentials).', 401

            self.latitude = float(latitude)
            self.longitude = float(longitude)

            self.api.set_position(self.latitude, self.longitude, 0)
            self.api.get_player()

            if self.api.call() == False:
                logging.warning("Pokémon GO servers are currently down.")
                return 'Pokémon GO servers are currently down. Try again later.', 502

            self.scheduler.start()
            self.scheduler.add_job(self.update_nearby, 'interval', seconds=30)

            self.logged_in = True

        return 'Success!', 200


    def update_nearby(self):
        pokemon = find_nearby_pokemon(self.api, self.latitude, self.longitude)
        self.nearby_pokemon = []

        for key, poke in pokemon.items():
            dex_num = int(poke['pokemon_data']['pokemon_id'])
            name = self.pokemon_names[format(dex_num, '03')]
            time_til_hidden = poke['time_till_hidden_ms'] // 1000
            distance = poke['distance']

            if time_til_hidden > 0 and distance < 200:
                p = [dex_num, name, time_til_hidden, distance]
                self.nearby_pokemon.append(p)

        self.nearby_pokemon.sort(key=lambda x: x[2], reverse=True)
