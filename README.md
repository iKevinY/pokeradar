# Pokéradar

Auto-refreshing feed of nearby Pokémon in Pokémon GO.


## Rationale

For several days now, Pokémon GO's "nearby tracker" has not been broken; all Pokémon are reported to be 3 footsteps away, regardless of where they are actually located. Around this time, the game's API had been reverse engineered, resulting in projects like `pgoapi`. While I personally feel like "mapping applications" detract from the spirit of the game, it was annoying that the nearby indicator was virtually useless. Because of this, I decided to write Pokéradar.


## Installation

```sh
$ make install
```


<img src="https://raw.githubusercontent.com/iKevinY/pokeradar/master/screenshot.png" height="600" align="right">


## Usage

**All API access is unofficial. Run at your own risk.**

```sh
$ make run
```


## Credits

- [pgoapi](https://github.com/tejado/pgoapi) for making this project possible.
- [PokéSprite](https://github.com/msikma/pokesprite) for easy-to-use sprites.

## License

Pokéradar is licensed under the [MIT License](/LICENSE).

> &copy; 2016 Niantic, Inc. &copy; 2016 Pokémon. &copy; 1995–2016 Nintendo / Creatures Inc. / GAME FREAK Inc.

> Pokémon and Pokémon character names are trademarks of Nintendo. No copyright or trademark infringement is intended in the use of Pokémon content in this project.
