# Credits

Third-party assets used in Query Truck, with their source and licence.

## Art

None yet. Everything in the game is original to Query Truck: the riso palette (`src/game/art/riso.ts`), the low-poly placeholder models (`src/game/truck/build.ts`) and the risograph shader (`src/game/truck/risoPass.ts`). Final 3D models are planned to come from CC0 packs; each one will be listed here with its source and licence (see [docs/ASSETS.md](docs/ASSETS.md)).

## Logo

The Query Truck logo (`src/assets/query-truck-logo.webp`) is the project owner's own artwork, the game's official logo (23 Nov 2026). It is used on the title screen, the loading screen, the truck's 3D roof sign and in the README.

## Fonts

[Fredoka](https://fonts.google.com/specimen/Fredoka) by Milena Brandão and Hafontia, under the [SIL Open Font Licence 1.1](https://openfontlicense.org), loaded from Google Fonts for the menus' lettering (title, pause and loading screens). [Caveat](https://fonts.google.com/specimen/Caveat) by Impallari Type, under the same licence, for the handwriting in the staff handbook (Mira's notes). Without them the menus fall back to the system fonts.

## Sound

None. Every sound is synthesized in the browser with the Web Audio API (`src/audio/sound.ts`): no audio files are used.

## Earlier versions

The first version of the game (the top-down café, git tag `v1-cafe-mvp`) used furniture tiles from [Kenney's Roguelike Indoors](https://kenney.nl/assets/roguelike-indoors) (CC0 1.0). That code has been removed from the current game.
