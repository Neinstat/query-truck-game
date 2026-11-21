# Art status

Which parts of the game's look are final and which are still placeholders.

All models are built in code from boxes, cylinders and spheres (`src/game/truck/build.ts`) in the
palette (`src/game/art/riso.ts`), flat-shaded, then drawn through a thin outline pass
(`src/game/truck/lookPass.ts`). Final models are planned to come from CC0 3D packs (for example
Kenney, Quaternius or Poly Pizza), recoloured to the palette and recorded in `CREDITS.md`
with their source and licence. Earlier 2D art lives only in git history (see `docs/JOURNEY.md`).

| Part | Status | Notes for the final version |
|---|---|---|
| Low-poly neon look: flat shading, thin ink outlines, bloom glow, vignette, a smoggy sky over the day (cyberpunk since 21 Nov 2026) | 🟨 Style chosen | Tune glow strength and sky colours once final models are in |
| Truck interior: walls, serving window, counters, tablet, tip jar, plant | 🟥 Placeholder | A CC0 kitchen / food-truck kit |
| Fridge with bottles, stock shelves with boxes and coffee sacks | 🟥 Placeholder | |
| Red espresso machine, wall clock, menu board, recipe binders | 🟥 Placeholder | Clock hands should follow the time of day |
| Back door, spare apron | 🟥 Placeholder | |
| Guide book on the back counter, "GUIDE ?" sign (text drawn in a canvas) | 🟥 Placeholder | |
| Neon street (`city.ts`): wet asphalt, sidewalk and guide lights, benches, standing tables with neon umbrellas, street lamps, string lights, holo pylons, raised walkway, shop fronts, towers with lit windows (canvas textures), neon signs (canvas text), flying cars, fake neon reflections | 🟥 Placeholder | Seats fill with visitors when business is good (Phase 7); a CC0 city kit could replace the boxes |
| Rain (`rain.ts`): GPU streaks and splash rings, lightning flashes | 🟨 Style chosen | Drops on the serving window could come later |
| Sound (`src/audio/sound.ts`): all synthesized — city hum, rain, roof drops, thunder, flying cars, sirens, till, chimes, knocks, footsteps, UI clicks | 🟨 Style chosen | Could be replaced by CC0 recordings; mixing levels to tune in a playtest |
| Customers (blocky people with swinging limbs, 5 looks in `looks.ts`) | 🟥 Placeholder | CC0 animated low-poly characters (walk, idle, happy, annoyed) |
| The Manager (suit, red tie, glasses, report tablet) | 🟥 Placeholder | |
| Crosshair, aim label, speech bubble (HTML) | 🟨 Style chosen | |
| Data Lens: cyan hologram mode in the shader, table cards (HTML) | 🟨 Style chosen | Cards may need a smarter layout when several overlap |
| Title screen, pause menu, how-to-play guide (HTML) | 🟨 Style chosen | |

Legend: 🟥 placeholder · 🟨 style chosen, may be polished · 🟩 final · ⬜ not made yet
