# Art status

Which parts of the game's look are final and which are still placeholders.

All models are built in code from boxes, cylinders and spheres (`src/game/truck/build.ts`) in the
palette (`src/game/art/riso.ts`), flat-shaded, then drawn through a thin outline pass
(`src/game/truck/lookPass.ts`). Final models are planned to come from CC0 3D packs (for example
Kenney, Quaternius or Poly Pizza), recoloured to the palette and recorded in `CREDITS.md`
with their source and licence. Earlier 2D art lives only in git history (see `docs/JOURNEY.md`).

| Part | Status | Notes for the final version |
|---|---|---|
| Low-poly look: flat shading, thin ink outlines, sky over the day (the riso dither was dropped 21 Nov 2026) | 🟨 Style chosen | Tune outline strength and sky colours once final models are in |
| Truck interior: walls, serving window, counters, tablet, tip jar, plant | 🟥 Placeholder | A CC0 kitchen / food-truck kit |
| Fridge with bottles, stock shelves with boxes and coffee sacks | 🟥 Placeholder | |
| Red espresso machine, wall clock, menu board, recipe binders | 🟥 Placeholder | Clock hands should follow the time of day |
| Back door, spare apron | 🟥 Placeholder | |
| Truck exterior (`exterior.ts`): mustard body, cab, wheels, roof, name board, coffee cup on the roof | 🟨 Style chosen | |
| Guide book on the back counter, "GUIDE ?" sign (text drawn in a canvas) | 🟥 Placeholder | |
| Places (`scenery.ts`): park, skatepark under the overpass, behind the school, harbour pier, town square — ground, props, backdrops, moving cars, skater, ball, boats, gulls, fountain | 🟥 Placeholder | Seats fill with visitors when business is good (Phase 7); CC0 city/props kits later |
| Rain (`rain.ts`): streaks, splash rings, lightning flashes | 🟨 Style chosen | |
| Sound (`src/audio/sound.ts`): all synthesized | 🟨 Style chosen | Mixing levels to tune in a playtest; could be swapped for CC0 recordings |
| Customers (`character.ts`: faceted heads, open jackets, hands; 5 looks in `looks.ts`) | 🟨 Style chosen | CC0 animated low-poly characters (walk, idle, happy, annoyed) |
| The Manager (suit, red tie, glasses, report tablet) | 🟥 Placeholder | |
| Crosshair, aim label, speech bubble (HTML) | 🟨 Style chosen | |
| Data Lens: blueprint mode in the shader, table cards (HTML) | 🟨 Style chosen | Cards may need a smarter layout when several overlap |
| Title screen, pause menu, how-to-play guide (HTML) | 🟨 Style chosen | |

Legend: 🟥 placeholder · 🟨 style chosen, may be polished · 🟩 final · ⬜ not made yet
