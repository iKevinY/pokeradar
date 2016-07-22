# Pokéradar

Auto-refreshing feed of nearby Pokémon in Pokémon GO.

<img src="https://raw.githubusercontent.com/iKevinY/pokeradar/master/screenshot.png" height="600">


## Rationale

For several days now, Pokémon GO's "nearby tracker" has not been broken; all Pokémon are reported to be 3 footsteps away, regardless of where they are actually located. Around this time, the game's API had been reverse engineered, resulting in projects like `pgoapi`. While I personally feel like "mapping applications" detract from the spirit of the game, it was annoying that the nearby indicator was virtually useless. Because of this, I decided to write Pokéradar.


## Installation

```sh
$ make install
```


## Usage

**Third-party tools are not officially supported by Pokémon GO. Run this at your own risk.**

```sh
$ make run
```


## Credits

- [pgoapi](https://github.com/tejado/pgoapi) for providing a wrapper around Pokémon GO's API.
- [PokéSprite](https://github.com/msikma/pokesprite) for convenient Pokémon sprites.

## License

Pokéradar is licensed under the [MIT License](/LICENSE).

> &copy; 2016 Niantic, Inc. &copy; 2016 Pokémon. &copy; 1995–2016 Nintendo / Creatures Inc. / GAME FREAK Inc.

> Pokémon and Pokémon character names are trademarks of Nintendo. No copyright or trademark infringement is intended in the use of Pokémon content in this project.
