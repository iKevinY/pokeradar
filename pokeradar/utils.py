# -*- coding: utf-8 -*-

"""
Utility functions for locating nearby Pokémon, based on @nletourneau's spiral_poi_search.py
https://github.com/tejado/pgoapi/blob/master/examples/spiral_poi_search.py
"""

import os
import sys
import random

from geopy import Point, distance
from google.protobuf.internal import encoder
from s2sphere import CellId, LatLng

# Add pgoapi submodule to path to allow for it to be imported
base_path = os.path.dirname(__file__)
sys.path.append(os.path.join(base_path, 'pgoapi'))
from pgoapi import PGoApi
from pgoapi.utilities import f2i


def get_key_from_pokemon(pokemon):
    return '{}-{}'.format(pokemon['spawnpoint_id'], pokemon['pokemon_data']['pokemon_id'])


def find_nearby_pokemon(api, lat, lng):
    step_size = 0.0015
    step_limit = 9
    coords = generate_spiral(lat, lng, step_size, step_limit)

    origin = Point(lat, lng)

    nearby_pokemon = {}

    for coord in coords:
        lat = coord['lat']
        lng = coord['lng']
        api.set_position(lat, lng, 0)

        cell_ids = get_cell_ids(lat, lng)
        timestamps = '\000' * 21
        api.get_map_objects(latitude=f2i(lat), longitude=f2i(lng), since_timestamp_ms=timestamps, cell_id=cell_ids)

        response_dict = api.call()

        if 'status' in response_dict['responses']['GET_MAP_OBJECTS']:
            if response_dict['responses']['GET_MAP_OBJECTS']['status'] == 1:
                for map_cell in response_dict['responses']['GET_MAP_OBJECTS']['map_cells']:
                    if 'wild_pokemons' in map_cell:
                        for pokemon in map_cell['wild_pokemons']:
                            key = get_key_from_pokemon(pokemon)
                            nearby_pokemon[key] = pokemon

                            p_lat = float(pokemon['latitude'])
                            p_lng = float(pokemon['longitude'])
                            loc = Point(p_lat, p_lng)
                            pokemon['distance'] = distance.distance(origin, loc).meters

    return nearby_pokemon


def get_cell_ids(lat, lng, radius=10):
    origin = CellId.from_lat_lng(LatLng.from_degrees(lat, lng)).parent(15)
    walk = [origin.id()]
    right = origin.next()
    left = origin.prev()

    # Search around provided radius
    for i in range(radius):
        walk.append(right.id())
        walk.append(left.id())
        right = right.next()
        left = left.prev()

    return ''.join(map(encode, sorted(walk)))


def encode(cellid):
    output = []
    encoder._VarintEncoder()(output.append, cellid)
    return ''.join(output)


def generate_spiral(starting_lat, starting_lng, step_size, step_limit):
    coords = [{'lat': starting_lat, 'lng': starting_lng}]
    steps, x, y, d, m = 1, 0, 0, 1, 1
    rlow = 0.0
    rhigh = 0.0005

    while steps < step_limit:
        while 2 * x * d < m and steps < step_limit:
            x = x + d
            steps += 1
            lat = x * step_size + starting_lat + random.uniform(rlow, rhigh)
            lng = y * step_size + starting_lng + random.uniform(rlow, rhigh)
            coords.append({'lat': lat, 'lng': lng})
        while 2 * y * d < m and steps < step_limit:
            y = y + d
            steps += 1
            lat = x * step_size + starting_lat + random.uniform(rlow, rhigh)
            lng = y * step_size + starting_lng + random.uniform(rlow, rhigh)
            coords.append({'lat': lat, 'lng': lng})

        d = -1 * d
        m = m + 1
    return coords
