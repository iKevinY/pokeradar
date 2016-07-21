# -*- coding: utf-8 -*-

import logging

from flask import Flask, render_template, request

from pokeradar import Pokeradar


logging.basicConfig(level=logging.INFO, format='%(asctime)s [%(levelname).4s] %(message)s')

app = Flask("Pokéradar")
radar = Pokeradar()


@app.route('/')
def index():
    return render_template("index.html")

@app.route('/login', methods=['POST'])
def login():
    return radar.login(request.form)

@app.route('/logged-in')
def logged_in():
    if radar.logged_in:
        return '', 200
    else:
        return '', 401


@app.route('/nearby')
def nearby():
    if radar.nearby_pokemon is None:
        radar.update_nearby()

    feed_item = """
    <div class="feed-item">
        <div class="time">{0}</div>
        <div class="body">
            <span class="pkspr pkmn-{1:03d}"></span>
            <span class="text">
                A wild <strong><a href="http://bulbapedia.bulbagarden.net/wiki/{2}_(Pokémon)">{2}</a></strong>
                appeared <strong>{3}</strong>!
            </span>
        </div>
    </div>
    """

    nearby_feed = ""

    if not radar.nearby_pokemon:
        return "No Pokémon within the area."

    for (num, name, visible_for, metres_away) in radar.nearby_pokemon:
        seconds_ago = 900 - visible_for

        if seconds_ago < 60:
            time = "less than a minute ago"
        elif seconds_ago < 120:
            time = "1 minute ago"
        else:
            time = "%i minutes ago" % (seconds_ago // 60)


        footsteps = int(metres_away // 50)

        if footsteps == 1:
            distance = "1 footstep away"
        else:
            distance = "{} footsteps away".format(footsteps)

        nearby_feed += feed_item.format(time, num, name, distance)

    return nearby_feed
