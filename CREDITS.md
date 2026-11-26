# Credits

Third-party assets used in Query Truck, with their source and licence.

## Policy (decided 26 Nov 2026)

Query Truck is a free game and earns no money, so models, images, sounds and fonts made by other people may be used when their licence allows free use (CC0, CC-BY, CC-BY-SA, CC-BY-NC, SIL OFL, MIT and similar). Assets without a licence, or with an unclear one, are not used. Every asset is listed below in the same commit that adds it: **name, author, source link, licence** (and what was changed, if anything). If the game ever starts earning money, every CC-BY-NC asset must be replaced first.

| Asset | Author | Source | Licence | Used for |
|---|---|---|---|---|
| *(none added yet)* | | | | |

## Art

No third-party art yet. Everything in the game is original so far: the riso palette (`src/game/art/riso.ts`), the low-poly placeholder models (`src/game/truck/build.ts`) and the risograph shader (`src/game/truck/risoPass.ts`). Third-party models and images may now be added (see the policy above); each one is listed in the table above with its source and licence (see [docs/ASSETS.md](docs/ASSETS.md)).

## Logo

The Query Truck logo (`src/assets/query-truck-logo.webp`) is the project owner's own artwork, the game's official logo (23 Nov 2026). It is used on the title screen, the loading screen, the truck's 3D roof sign and in the README.

## Fonts

[Fredoka](https://fonts.google.com/specimen/Fredoka) by Milena Brandão and Hafontia, under the [SIL Open Font Licence 1.1](https://openfontlicense.org), loaded from Google Fonts for the menus' lettering (title, pause and loading screens). [Caveat](https://fonts.google.com/specimen/Caveat) by Impallari Type, under the same licence, for the handwriting in the staff handbook (Mira's notes). Without them the menus fall back to the system fonts.

## Sound

None. Every sound is synthesized in the browser with the Web Audio API (`src/audio/sound.ts`): no audio files are used.

## Earlier versions

The first version of the game (the top-down café, git tag `v1-cafe-mvp`) used furniture tiles from [Kenney's Roguelike Indoors](https://kenney.nl/assets/roguelike-indoors) (CC0 1.0). That code has been removed from the current game.
