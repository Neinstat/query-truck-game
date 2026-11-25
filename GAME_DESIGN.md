# Query Truck — Game Design Document

> A first-person 3D web game for learning SQL while learning to **think like a Business Intelligence (BI) analyst**. You run a coffee food truck parked in a city park; customers at the window bring requests you answer with SQL on the truck's tablet, and a bossy manager knocks on the back door with business questions.
>
> **Status:** 🚚 Version 2 (3D food truck) was locked in on 17 Nov 2026. Phases 1–5 are done except the owner's 5.3 playtest; **Phase 6 (the six-week curriculum) is in progress, built by a scheduled agent.** Target: **released on 9 Dec 2026** (see *Scope & goals*). Version 1 (a top-down 2D café, MVP finished 16 Nov 2026) has been removed from the code; it lives in git tag `v1-cafe-mvp`. How the design got here, with screenshots: [`docs/JOURNEY.md`](docs/JOURNEY.md).
>
> This document is the single source of truth for design decisions. Update it whenever a new decision is made.
>
> **Language:** the game's main language is **English**, with **Bahasa Indonesia** as a player option for story and UI text. SQL keywords, table and column names, data values and PostgreSQL error messages always stay in English.

---

## Scope & goals (decided 24 Nov 2026)

**Why this project exists** (owner's words, 24 Nov 2026): a **portfolio** project, **released for free**, and the owner's first project for **learning to work with AI agents** in Claude Code (an agent builds, the owner reviews — see [`docs/AUTOMATION.md`](docs/AUTOMATION.md)). After December the owner moves on to other projects, so the game must be **finished, not endless**.

**What a player should get out of it:** after the six weeks they can do **junior BI analyst interview SQL** — filtering, aggregation, `JOIN`s, and a simple analysis case. At the very least, every player learns something new. Beyond syntax, the game teaches the **analyst's way of thinking** that the owner sees in BI work:

1. **Start from the business question** ("sales dropped", "we sell lots of lattes").
2. **Pick the metric** that answers it (revenue, orders, average order value, share of sales).
3. **Find the pattern in the data** (when, what, who).
4. **Spot the opportunity** — e.g. *what else could we sell to people who buy this one item?* (cross-selling, items bought together).
5. **Recommend an action** and back it with evidence.

The Manager's cases follow these five steps (6.7, 6.8, 6.9).

**Names:** *v1* was the old top-down café (removed); *v2* is this game, the 3D Query Truck. The public release is **Query Truck 1.0**.

**In 1.0:** the six-week curriculum with a backstory and a difficulty choice (Phase 6), stars flying into XP, coins and truck upgrades from a plain start, badges, credits and easter eggs (Phase 7), and a release on GitHub Pages for **desktop browsers** (Phase 8).

**Not in 1.0** (decided 24 Nov 2026): the Skill Check and Lunch Rush (cut in the fast plan; the truck shop came back on 25 Nov as 7.2, at the owner's request); phone controls (only after release, and only if there is time — maybe never); teaching `INSERT`/`UPDATE`; different data per location (places are visual); final art beyond what exists; advanced topics (subqueries, CTEs, window functions).

**Timeline — the fast plan** (owner, 24 Nov 2026). The owner's Claude subscription ends on **11 Dec 2026**, so everything is done before then. The owner reviews **twice a day, at 12:00 and 20:00 WIB**, and the agent starts **as soon as a pull request is merged** (plus runs at 12:30, 20:30 and 02:30 WIB as a backup). Each run builds a **batch** of up to about five light iterations in one pull request (owner, 24 Nov 2026: progress every day must be felt, not one small commit and a wait), so the dates below are the latest they should happen; earlier is better:

| When | What |
|---|---|
| 25 Nov – 2 Dec 2026 | Phase 6, iterations 6.1–6.9 |
| 3 Dec | Phase 7 (7.1–7.3) and Phase 8 (8.1); the owner invites 1–2 friends who don't know SQL (reminder set) |
| 4 Dec | 8.2 |
| 5–7 Dec | 6.10 owner playtest, 6.11 friends' playtest, fixes |
| 8 Dec | 8.3 final playtest |
| **9 Dec 2026** | **Query Truck 1.0 released** |
| 10 Dec | Buffer |

**If we fall behind:** on 3 Dec, if Phase 6 is not done, 7.2 shrinks to paint colours and three equipment tiers, and 7.3 to credits and easter eggs (no badges). Phase 6 and Phase 8 are never cut: a finished curriculum matters more than extras. After 11 Dec the game stays live and free on GitHub Pages; only the agent and the reminders stop.

**Personality:** the owner loves games full of **easter eggs** and little surprises, including credit to the developer. Hidden jokes, secret queries and small discoveries are welcome everywhere (7.3), as long as they never get in the way of learning.

---

## 1. Vision

Most SQL resources only teach **syntax**:

- **SQLBolt** has a gentle, easy-to-follow learning curve, but it is not very interactive or fun.
- **LeetCode** is interactive, but its case studies often jump too far in difficulty for beginners.

**Query Truck** keeps SQLBolt's gentle curve, wraps it in game mechanics that make players want to keep going, and ends with the skill real data jobs need: **answering business questions with data** — all the way to "sales dropped last month, why?".

## 2. Players

| Player | Path |
|---|---|
| **Complete beginners** (never written SQL) | Start at week 1 |
| **Players who know the basics** | Pick an easier input level (*Cards* or *Fill in*, 6.3) and move quickly through the early weeks. (The Skill Check that skipped ahead was cut from 1.0 on 24 Nov 2026) |

Every player also picks **how** they answer — word cards, fill in the blanks, or writing every query themselves — after a short backstory on the first start (planned in iteration 6.3, owner's request 24 Nov 2026), so the game works both for someone learning SQL from zero and for someone who only wants a quick review.

**Skill Check** (built in v1, `src/sql-core/skillCheck.ts`): adaptive, two free-typing questions per chapter, stopping at the first chapter the player fails. Skipped content stays open (without stars) so it can be played later. In v2 it decides the starting week.

The end goal: people who want a career as a **data / BI analyst**, who need both SQL and business context. The market is global, so the game is in English with an Indonesian option so beginners in Indonesia can get in easily.

## 3. Concept & story

### Why a food truck (decided 16 Nov 2026)
- **Focus on SQL, not walking.** In v1 the player walked to a station first. In v2 tasks come to the player through customers at the truck window.
- **Natural repetition.** Similar orders come back on later days with different details, so queries are practised again without feeling like repeated exercises.
- **A stronger analyst feel.** The player's own sales go into the database, and the manager asks about that data, so BI questions feel personal.

### Story and characters
A **completely fresh start** (owner's decision, 16 Nov 2026): v1's story (Grandma's café) and its characters are not used.

- The player is the **new hire** at **Query Truck**, a coffee food truck owned by a small company, **Query Truck Co.** The truck is parked in a city park and opens **10:00–17:00**.
- **The Manager** — a boss in a sharp suit and tie, carrying a report tablet. Now and then they knock on the truck's back door and ask for numbers: sales, revenue, what keeps selling out, this month's target. They are **bossy**: short, demanding, no small talk ("Numbers. Now.", "I don't want feelings, I want revenue by day."). A right answer earns a small, stiff compliment.
- **Customers** queue at the window: new faces, each with their own way of talking. Some become regulars who come back on other days.
- **A supplier's courier** delivers stock in the morning and brings tasks about `inventory`.
- The menu is still coffee and snacks (v1's `menu_items` data), so the SQL content of v1's levels still fits. Story text that mentions Grandma or the café is rewritten when it moves over in Phase 6.

## 4. Core loop: one working day

1. **Morning (before opening):** today's summary, a stock check (sometimes a task from the courier), and a lesson card when there is a new concept.
2. **Open at 10:00:** customers arrive one by one and queue (2–3 visible).
3. **An order is an SQL task.** The customer at the window says what they want in a speech bubble. The player uses the tablet and answers with SQL. Examples:
   - "Anything under $4?" → `SELECT … WHERE price < 4;`
   - "Do you still have oat milk?" → check `inventory` (at the fridge)
   - "Which drinks have no milk? I'm lactose intolerant." → `JOIN recipes` (at the recipe binders)
   - "What's my usual?" → `sales` + `customers`
4. **A correct answer serves the order.** The game records the sale in the database (`INSERT` into `sales`, stock goes down); the player does not write `INSERT` (that is taught later, if at all).
5. **The manager knocks 🚪** (once a day, at a random time): BI questions about today's or this week's sales, what sells out, and so on. This replaces v1's "So what?" questions and Mini Cases.
6. **Close at 17:00 → end-of-day summary:** revenue, tips, happy customers, concepts practised, stars for the day.

**Time and pressure (decided):**
- **The clock stops while the tablet is open.** Writing SQL is never timed.
- A customer's patience only drops while they wait in the queue, and **only affects the tip**. There is no losing. A customer who waits too long leaves without tipping, but their task comes back on another day.
- One day takes about 5–8 real minutes (7 orders + 1 manager case, plus time spent writing SQL). The clock runs at **1.2 game minutes per real second** (≈ 6 minutes for 10:00–17:00; it was 0.7 ≈ 10 minutes until the 21 Nov 2026 playtest found it too long), and **4× faster while nobody is waiting**, so there is no idle waiting.
- **The sky follows the clock** (`src/game/truck/sky.ts`, tested): the working day is shown as a whole day — a pale morning at 10:00, a bright noon, a warm afternoon, a sunset around 16:00 and night at 17:00. The sun crosses the sky, the light changes colour, and at dusk the park's lamps, the string lights and a warm light inside the truck come on.
- Customers arrive **spread over the day** (prototype: 10:00, 10:35, 11:15, 12:00, 12:50, 13:50, 15:00). Patience is **60 game minutes** in the line; their mood shows in the speech bubble (😊 / 😐 / 😠 with a patience bar), and the tip is **$1.00 / $0.50 / $0** by mood when the order is handed over.
- v1's Rush Hour becomes **"Lunch Rush"**: an optional event from 12:00 to 13:00 with quick orders and a running clock, from week 3.

## 5. Tasks: order templates and repetition

- An **order template** is one kind of request with randomised parameters (seeded per day), e.g. `price_under(max)`, `items_in_category(category)`, `stock_of(ingredient)`. Each template has a `concept` (e.g. `where-compare`, `group-by`), EN/ID dialogue with slots like `{max}`, a parameterised solution query, and three hints.
- **Answers are graded on results, as in v1:** the player's result is compared with the solution's result **on the data as it is right now** (including today's sales).
- **Simple spaced repetition:** each concept has a mastery level from 0 to 5. Right without hints → it goes up and comes back less often (1 → 2 → 4 → 7 days). Wrong, or with hints → it goes down and comes back tomorrow. Each day's orders are picked from this week's new concepts + concepts that are "due" + a little randomness.
- **Difficulty rises week by week** (§6). Customers never ask for a concept that has not been taught yet.
- **Manager cases** use v1's case engine (📌 pinned evidence + conclusion questions). Daily cases are small (1–2 queries); end-of-week cases are bigger; the Analysis Case "October sales dropped 18%" closes week 6.

### Kinds of tasks (from v1, still used)

| Kind | What it is |
|---|---|
| **Request** | One question, one correct result (customer orders) |
| **Report** | A result with specific columns (top-N, KPIs) |
| **Case** 🔍 | An investigation: run any queries, **pin** 📌 the results that prove each answer, then answer 2–3 conclusion questions. Evidence counts when its result contains the key rows. ⭐ solved · ⭐⭐ no hints · ⭐⭐⭐ no unsupported conclusion |
| **Analysis Case** 🎯 | The big open investigation: "October sales dropped 18%. What happened?", with step-by-step conclusions, each backed by pinned evidence |

### Input: the player's choice (6.3, 25 Nov 2026)

The fixed rule below ("Input grows with the player") is now only the fourth option. On the first start a new player picks one of four **difficulties**, saved in this browser and changeable from the pause menu:

| Difficulty | How an order is answered |
|---|---|
| **Cards** | Word blocks for every order, in every week (the solution's words, plus the decoys week 1 has) |
| **Fill in** | The query is partly written: the gaps the template gives (week 2 on), or the columns / table name in week 1 |
| **Write it yourself** | Free typing from `SELECT * FROM ` in the editor, for every order |
| **Grow with me** | The rule below: input rises with mastery of each concept. The default for saves from before 6.3 |

#### Grow with me: input grows with the player

| Stage | When | How |
|---|---|---|
| Word blocks | Week 1 | Build the query from given blocks, like a puzzle |
| Fill in the blanks | Week 2 | The query is partly written; the player fills the gaps |
| Free typing | Week 3 on (from the first time a concept appears) | A full SQL editor with highlighting and **autocomplete** for table and column names |

## 6. Curriculum: six weeks

One week = five working days. v1's chapters map onto weeks:

| Week | SQL (from v1 chapter) | Example order | Manager case at the end of the week | Input |
|---|---|---|---|---|
| 1. Opening Week | `SELECT`, `FROM` (Ch0) | "What's on the menu?" | — (tutorial) | Blocks |
| 2. Picky Customers | `WHERE`, `AND`/`OR`, `IN`, `LIKE`, `IS NULL` (Ch1) | "Vegan and under $5?" | The Menu Audit | Fill in the blanks |
| 3. Daily Specials | `ORDER BY`, `LIMIT`, `DISTINCT`, aliases, computed columns (Ch2) | "Your 3 cheapest snacks?" | What Should We Promote? | Free |
| 4. Counting the Till | Aggregates, `GROUP BY`, `HAVING`, dates (Ch3) | "How many lattes sold today?" | The Quiet Day | Free |
| 5. Regulars & Recipes | `JOIN`, `LEFT JOIN` (Ch4) | "Which drinks have no milk?" | Where Did the Regulars Go? | Free |
| 6. The Big Question | Everything | A mix of all concepts | Analysis Case: October Sales Dropped | Free |

After week 6: an **endless free mode**. Days keep coming with spaced repetition; new locations and advanced topics (subqueries, CTEs, window functions, month-over-month analysis) can be added later.

### Existing level content (v1, 34 levels in `src/sql-core/levels/`)

These become order templates and manager cases in Phase 6.

- **Chapter 0 · First Day** (4 levels): what a table is, `SELECT`, `FROM`.
- **Chapter 1 · Cleaning Up the Menu** (6 + case): `WHERE`, `AND`/`OR`, `IN`, `LIKE`, `IS NULL`; case *The Menu Audit* (which items are not ready to print?).
- **Chapter 2 · First Reports** (5 + case): the most expensive sandwich (`ORDER BY … DESC`) · the three cheapest desserts (`LIMIT`) · categories (`DISTINCT`) · margin per item (`price - cost AS margin`) · the five biggest margins — **a deliberate trap:** with `DESC`, PostgreSQL puts `NULL` first, so it must be filtered (`IS NOT NULL` or `NULLS LAST`); case *What Should We Promote?* Sorted results are chosen without ties so the expected order is always certain.
- **Chapter 3 · Numbers Talk** (6 + case): `COUNT(*)` + `WHERE` · total revenue `SUM(quantity * unit_price)` · orders and average order value (`COUNT(DISTINCT order_id)`, `ROUND`; why not `AVG` per row) · revenue per channel (`GROUP BY`) · revenue per month (`DATE_TRUNC`; October drops → first hint of the Analysis Case) · items with more than 400 portions sold (`HAVING`; one item is exactly 400 → `>` vs `>=`); case *The Quiet Day* (`EXTRACT(DOW …)`).
- **Chapter 4 · Connecting the Dots** (6 + case): items that use milk (`JOIN … ON`, table aliases) · items with no recipe (`LEFT JOIN … IS NULL` → Secret Cake) · portions per category (`JOIN` + `GROUP BY`) · top five items by revenue (Avocado Toast earns most per portion, but Latte wins on volume) · the most loyal customer (`LIMIT 1`; top-5 avoided because of ties) · customers who signed up but never bought (`LEFT JOIN`); case *Where Did the Regulars Go?* Answers with tables in another order, without aliases, or with `NOT EXISTS` are accepted too (tested).
- **Chapter 5 · The Analysis Case** (2 + case): suppliers, earliest delivery first (the 12:00 delivery is already a clue) · monthly revenue and orders (October: far fewer orders, order value only slightly lower) · the **Analysis Case** with five steps: how much did it drop (number, tolerance ±0.6 → 18 / 18.4 / 18.36% accepted) → which item (Latte) → when (mornings) → why (milk runs out in the morning because the new supplier delivers at noon) → what to do (get milk delivered in the morning again). A conclusion may accept several kinds of evidence; one is enough.

## 7. Look and feel (locked in 17 Nov 2026)

The look was found through six prototypes (see [`docs/JOURNEY.md`](docs/JOURNEY.md)). The one **locked in** is the last:

- **First-person 3D** with **Three.js**. The player stands inside the truck: **WASD / arrow keys** to walk, the **mouse** to look (captured automatically, no click needed; Esc frees it and pauses), aim the **crosshair** at something and press **E** or click. Movement stays inside the truck so the focus stays on SQL.
- **The truck** (6 × 2.4 × 2.4 m): serving window + counter + tablet in the front wall; **fridge & stock shelves** at the left end (`inventory`); a **back counter** with a red espresso machine, a clock, the **menu board** (`menu_items`) and the **recipe binders** (`recipes`); the **back door** at the right end (The Manager).
- **A new place every day** (owner's idea, 21 Nov 2026, so the view never gets boring): the truck parks somewhere else each day, in turns — **City Park** (lawn, picnic tables, string lights, trees), a **Skatepark under the Overpass** (concrete, quarter pipes, a fun box and a rail, graffiti pillars, traffic crossing overhead, a skater rolling past), **Behind the School** (a basketball court with a bouncing ball, bike racks, a flag pole, the two-storey school with its clock), the **Harbour Pier** (wooden boards over the sea, bobbing boats, circling gulls, a lighthouse, cranes and containers) and the **Town Square** (market stalls, a fountain, bunting, colourful shophouses and a clock tower). Day 1 is the park; the order repeats every five days. Names (EN/ID) and the rotation: `src/sql-core/truck/places.ts`; what stands near the truck at each place is data (`PLACE_PROPS` in `world.ts`), tested to stay off the customers' path and apart; `src/game/truck/scenery.ts` builds it. The title screen and the clock card show today's place; `?place=harbour` in the address picks one for testing. Customers queue straight out from the window (each place has its own way in and out, `PLACE_ROUTES`); the ground is 0.35 m lower than the truck floor so heads sit in the window. Some served customers **eat in** on the seats (row 5.2n, `dineIn.ts`); seats filling with extra visitors when business is good stays for Phase 7.
- **Weather** (`weather.ts`, `rain.ts`): about 7 days in 10 bring one or two showers (40–110 game minutes, light to heavy, soft start and end), planned from the day's orders so a reload brings the same weather. Rain falls as streaks with splash rings (never inside the truck); the sky greys, the haze comes closer, the truck's light comes on, and in heavy rain lightning flashes. The clock card shows 🌧 *Rain*. `?rain` forces a downpour from opening time.
- **Sound design** (`src/audio/sound.ts`): every sound is **synthesized** with the Web Audio API — no audio files, nothing to license. **The radio** (`radio.ts`, 22 Nov 2026, owner's request to replace the noisy ambience): a retro radio on the back counter (aim + E) plays music made on the fly — *Lo-fi 88.1* (warm ii–V–I–vi keys, lazy swing, vinyl crackle), *Café Bossa 94.5* (syncopated guitar stabs, walking bass), *Pixel Pop 101.3* (chiptune arpeggios) — or off, with static between stations; the choice is saved. Ambience stays quiet: a low city rumble, the place's own sounds now and then (birds; skateboards and traffic; the school bell and a basketball; waves, gulls and a ship's horn; a market crowd), and rain as a soft, muffled patter through the roof with a few drops (the bright hiss was dropped: too noisy), thunder after lightning. Effects: a chime when a customer arrives, the till when an order is served, a rising arpeggio for a right answer and a buzz for a wrong one, the Manager's knock, the door, footsteps, the tablet, the Data Lens, the end of the day, clicks on buttons. Menus and consoles muffle the outside, not the radio. **Sound menu** (title screen and pause menu): sound on/off and the main volume, and under *Mix* separate sliders for **radio music**, **ambience & rain** and **clicks & effects** (all saved). The app plays sounds from bridge events (`src/app/useSound.ts`), so the 3D code stays free of audio.
- **People** (`character.ts`, `looks.ts`; 21–22 Nov 2026, after an owner's reference picture and "don't make them all the same template"): every customer is put together at random from their order (the same order always brings the same person) — height and build, skin, ten hair styles and hats (short, long, bun, ponytail, spiky, curly, bald, sides, cap, beanie), plain, wide or sleepy eyes, sometimes glasses or sunglasses, a jacket, hoodie, tee or sweater, trousers, shorts or a skirt, and extras (backpack, scarf, headphones, lanyard, necklace, bag, paint, beard, moustache, brows, blush), leaning on their kind. The low-poly look: a big, round, faceted head with no mouth or nose, chunky hands and shoes. **About one in eight customers is a flat 2D cartoon** of our own (a blob, a noodle-limbed kid, a ghost, a robot, a cat in a hoodie; thick outlines, a card that always faces the player, two walking frames) and **about one in eight a shiny brick toy figure** (astronaut, knight, chef, pirate, a masked hero of our own, a robot, plain outfits). Characters from other people's shows, films or toys (the owner suggested Adventure Time and a LEGO Spider-Man) are not used: they belong to others (see `.claude/CLAUDE.md`), so the cartoons and toys are original. The Manager is a low-poly person in a suit and red tie with a report tablet.
- **A clean low-poly style** (changed 21 Nov 2026): flat-shaded shapes in a small palette (`src/game/art/riso.ts`), drawn at full screen resolution, with a thin, soft ink outline where depth jumps (`src/game/truck/lookPass.ts`). Until then the game used a "risograph print" look (low resolution, a 4×4 Bayer dither onto a few inks, a mis-registered red outline); the owner found the dither tiring to look at while playing, so it was dropped. Colours are used exactly as written (no sRGB → linear conversion), and lights are neutral × π (Three.js uses physical light units).
- **Signature feature: the "Data Lens"** (built in 4.8) — **L** or the 🔍 button fades the world into a teal blueprint on paper with a grid, and a card floats over every object with its tables (row counts, columns, two sample rows). The tables the current order needs are starred in mustard, so the lens also hints where to look. The world and the database feel like one. **With the lens on, E opens the object's data** (22 Nov 2026, owner's request, even on the object where the current order is answered): the first table is shown straight away (`SELECT * FROM … LIMIT 10;` runs by itself), a button per table switches tables, and a box explains each line of that query for beginners — `SELECT *` (every column), `FROM` (which table), `LIMIT 10;` (only the first ten rows, with how many the table has, and that `;` ends the query) — with a suggestion to try changing it. Every look-around console opens this way.
- **Placeholder models** made from basic shapes (boxes, cylinders, spheres). Final models will come from **CC0** 3D packs (Kenney, Quaternius, Poly Pizza), recoloured to the palette. The status of every part is in [`docs/ASSETS.md`](docs/ASSETS.md); sources and licences go in `CREDITS.md`.
- React draws the overlays (the SQL tablet, the speech bubble that follows the customer's head, the crosshair, the HUD). The 3D code never imports React; the two only talk through `src/game/truck/bridge.ts`.
- Size: the 3D code (Three.js + game) is about 128 KB gzipped and loads after the page appears.
- Not yet: phone controls (see §13).

## 8. Data

- A realistic database: `menu_items` (category, price and cost), `sales` per line item (date and time, channel), `customers`, `recipes`, `inventory`, `suppliers`. Names are English `snake_case`.
- **Dirty data on purpose** (empty values, missing prices) in some levels, because that is real work.
- **Sales data** (`src/sql-core/data/sales.ts`): made by a generator with a **fixed seed** (always the same, so answers are stable and testable), 1 August – 31 October 2026, 07:00–17:59, about 4,600 orders and 7,700 rows. `customers`: 60 people — 16 regulars, 39 occasional, 5 who signed up but never bought (for `LEFT JOIN`). Dates and times are returned as text exactly as PostgreSQL writes them.
- **Hidden patterns** (locked by tests):
  - **The Quiet Day:** Tuesday is market day → the lowest revenue, because of **fewer orders** (about 40% fewer), not smaller ones.
  - **Where Did the Regulars Go?:** four regulars came for *Grandma's Secret Cake*; it was dropped after August and they never came back. *(Item names from v1 stay until the data is rewritten.)*
  - **The Analysis Case:** in October milk often ran out in the morning (`inventory.sold_out_at`), because the new cheaper supplier delivers at 12:00 instead of 06:00. Milk drinks fell, some customers switched to black coffee, some left; October revenue is **18% below September**, and Latte dropped the most.
- **v2 additions (Phase 4–5):** this history becomes the truck's **past**, so the manager can still ask about it. **Play days** start on 1 November 2026: the player's sales are added to `sales` with `channel = 'truck'`, and daily stock to `inventory`. Progress stores a **day log** per day (its planned orders, orders served and missed); on load, the data is rebuilt from the seed and every saved day is replayed (past days, then today), so it is exactly the same every time and stays testable.
- Player queries are **always read-only** and rolled back. Only the game writes to the database.
- Each part of the truck sees its own tables (like v1's stations): the tablet sees `menu_items`, `sales` and `customers`; the fridge sees `inventory` and `suppliers`; the menu board sees `menu_items`; the recipe binders see `recipes` + `menu_items`; the manager's cases see everything. This keeps the lesson "company data lives in many systems".

## 9. Answer checking and level format

### Answer checking
- The **result** is graded, not the query text — there are many right ways to write SQL.
- Row order only counts when the task asks for it (`ORDER BY` in the solution).
- Column names and aliases are graded loosely, unless the level teaches aliases.
- **A query must end with `;`** — a habit from day one. It is checked after the result is right, with a friendly message ("your result is right, just end it with `;`").
- The player's query and the official solution run on the same database; their **results** are compared.
- Every player query runs in a **READ ONLY** transaction that is always rolled back; transaction commands (`BEGIN`/`COMMIT`/…) are refused.
- **Per-area tables:** one PostgreSQL role per area with `GRANT SELECT` on its tables only, then `SET LOCAL ROLE` inside the transaction. `permission denied for table …` becomes a friendly message naming where that table lives. `SET`/`RESET`/`DO` are refused and `set_config` is revoked, so a player cannot switch back to the all-seeing role (tested).
- The database runs in a **Web Worker**: a running query shows a **■ Stop** button that ends the worker and starts a fresh one (about 1 s; the data is rebuilt exactly the same).
- Result tables show the **first 200 rows**; the checker always uses every row.
- Hints: up to three per task, from general direction → the clause needed → nearly there. Hints lower the stars; they never block progress.

### Level format
Each level is a TypeScript object (`src/sql-core/levels/`, one file per chapter):
- `id` (e.g. `ch0-1`; saved in progress, so never renamed after release), `title`, `character`
- `lesson` (optional): a short lesson card for a new concept
- `dialogue` and `task` (one clear sentence, always visible while working)
- `input`: `blocks` (may include decoys), `fill-blank` (a template with `___`), or `free`
- `solution` (only its result is compared), `check` (checker options), `hints` (exactly 3), `success`
- `soWhat` (optional): a short multiple-choice "what does this mean?" question
- **Cases**: `kind: 'case'`, with `starters` (editable starting queries) and `questions`, each with an `answer` (`number` or `choice`) and `evidence` — reference queries whose rows must all appear in a pinned result. Columns match by name, or by **value** when the name differs; `exact: true` means the row count must match; otherwise at most `maxRows` rows, so "the whole table" never counts as evidence.

Indonesian text lives in `src/sql-core/levels/locales/id/` (text only — SQL, blocks and answers are never translated). Checker feedback comes back as structured codes and becomes EN/ID sentences in `formatFeedback`. Tests check that every level runs, that blocks are enough to build the answer, that cases' evidence passes its own check, and that every level has a translation with the same structure.

**Orders** (Phase 5): an order is an **order template** + one **variant** of its parameters (`src/sql-core/truck/templates.ts`, Indonesian in `locales/id/templates.ts`). Its id, `template:variant` (e.g. `price-under:3.5`), is all that is saved: it rebuilds the task, the SQL, the hints and what the customer buys. The customer's look and which line they say come from the day's seed (`orders.ts`). Template and variant ids are saved in progress, so they are never renamed.

## 10. Rewards (rules kept from v1)

- **Stars per task:** ⭐ correct · ⭐⭐ correct with no hints · ⭐⭐⭐ no hints and no wrong runs (cases: no unsupported conclusions).
- **Coins:** 10 per star for a request, 20 per star for a case; a replay only pays the difference to the best result (`src/app/rewards.ts`, tested).
- In v2, stars and coins are counted per day in the end-of-day summary; coins buy **truck upgrades** (decorations, a bigger fridge, new menu items) and **new locations** in Phase 7. A **daily streak** 🔥 and **badges** 🏅 return in the per-day form.

## 11. Technical decisions

| Topic | Decision | Why |
|---|---|---|
| Platform | **Web app** in the browser | Easy to reach and to share |
| Game world | **Three.js** (first-person 3D, low-poly with an outline pass) | Chosen after the 3D prototype (17 Nov 2026); small, flexible, and lots of CC0 3D assets |
| SQL tablet | **HTML overlay over the canvas** (React, CodeMirror 6) | Editors, autocomplete and result tables are far easier in HTML than inside a canvas |
| Architecture | **SQL core separate from the game world** | The SQL core was built and tested first; the world could be replaced several times without touching it |
| Backend | **None** for now | Free to host, quick to build; progress is saved in the browser |
| SQL engine | **PostgreSQL in the browser via PGlite**, in a Web Worker | Closest dialect to real BI work (Postgres, Redshift, BigQuery, Snowflake); a slow query can be stopped |
| Languages | **English (main) + Bahasa Indonesia** for story and UI; SQL, tables, columns, data and PostgreSQL errors always English | A global audience; Indonesian makes it easy for local beginners. Translations live in separate files (`locales/id/`) and fall back to English |
| Build / language / tests | **Vite**, **TypeScript**, **Vitest** | Fast dev server and static builds; field-name mistakes caught before running; the SQL core is tested automatically |
| Currency | **$ (USD)** | Generic and widely understood |
| Developer mode | **A developer panel** (`src/app/DevPanel.tsx`), **F2** or **`**, while developing (`npm run dev`); on a built copy only after opening it once with `?dev` (`?dev=off` hides it) | Testing a day by hand takes minutes. The panel moves the clock on (+30 min, +1 h, to the knock, to closing) or speeds it up (stop, 1×, 4×, 16×), calls the next customer, serves the current order with ⭐⭐⭐ without SQL, makes the Manager knock, forces the weather (the day's own, dry, light rain, storm), switches the place, lets you walk anywhere (out of the truck, twice as fast), restarts or skips the day, and wipes all progress (asks first). It shows the state (day, date, place, clock, orders served/missed/to come, queue, Manager, rain, radio, position, saved keys, each concept's mastery, today's orders) and performance (fps, draw calls, triangles, geometries, textures, JS memory). The game keeps running behind it, with the mouse free for the panel. It talks to the game only through `bridge.ts` (`dev` / `devStats`). Added 22 Nov 2026 (owner's request) |
| Size check | **`npm run size`** (`scripts/size-report.mjs`): builds, then prints lines of code per area (SQL core, 3D world, app, console, sound), test lines, and every built file's size gzipped | To see whether the game is still easy to grow. On 22 Nov 2026: about 19,300 lines in 114 files (2,400 of them tests, 731 tests), a download of about 6.1 MB gzipped, of which 5.4 MB is PostgreSQL itself (PGlite, cached by the browser after the first visit); the app is ~420 KB and the 3D world ~150 KB gzipped; a truck view is ~210 draw calls and ~4,000 triangles. Plenty of room. Later: split CodeMirror and PGlite's JavaScript out of the first bundle |

### Code structure
- `src/sql-core/` — database (PGlite), answer checker, cases, levels, data, orders. **Must not** import React or Three.js.
- `src/console/` — the SQL console (React): blocks, fill-in-the-blank, editor, result table, case notes.
- `src/game/` — the 3D world (Three.js). **Must not** import React.
  - `art/riso.ts` — the palette (named after the old riso look).
  - `truck/world.ts` — sizes, layout, walking, aiming, the queue path (pure logic, tested).
  - `truck/build.ts` — low-poly models; `truck/looks.ts` — customers' looks.
  - `truck/lookPass.ts` — the outline pass and the Data Lens; `truck/sky.ts` — the sky over the day; `truck/colour.ts` — exact colours.
  - `truck/queue.ts` — the customer queue (pure logic, tested).
- `src/sql-core/truck/` — the truck's rules: `objects.ts` (what each object sees), `templates.ts` + `orders.ts` (orders), `concepts.ts` + `repetition.ts` (mastery and day planning), `day.ts` (the clock, the day log, sales), `manager.ts` (the Manager's case).
  - `truck/TruckGame.ts` — the game loop, input, customers.
  - `truck/bridge.ts` — the only link between the game and React (events).
- `src/app/` — the page: `TruckApp.tsx` (HUD, crosshair, bubble), `useTruckShift.tsx` (the shift's logic: database, orders, tablet), `ConsoleOverlay.tsx`, the database worker, `rewards.ts`.
- `src/i18n.ts` — UI text in both languages.

## 12. Roadmap

Built in phases; every phase produces something playable. Every iteration: build → check in the browser → commit and push.

| Phase | Contents | Done when… |
|---|---|---|
| **1. SQL core** ✅ | PGlite + data, checker, level format, console (blocks → fill-in → free), Chapters 0–1, EN/ID | Done 13 Nov 2026 |
| **2. First world** ✅ | v1's top-down café world (Phaser) | Done; replaced by v2 |
| **3. The café grows** ✅ | Chapters 2–5, cases, Analysis Case, stars/coins/upgrades, Skill Check, Rush Hour | v1 MVP done 16 Nov 2026; its SQL content is kept |
| **4. One-day prototype** ✅ | The look (✅ 3D), the 3D truck, customers with hand-written orders (week 2), the tablet, using the truck's objects, the Data Lens, sales into the database, the clock and end-of-day summary, one manager knock | The owner plays a full day and finds the concept fun |
| **5. Order generator & repetition** 🚧 | Parameterised order templates, concept mastery + spaced repetition, patience & tips, the day log saved and replayed | Day 2, day 3… feel different but still practise what needs practice |
| **6. Six-week curriculum** 🚧 | Chapters 0–5 become templates + manager cases, lesson cards per week, a backstory and difficulty choice, the Analysis Case in week 6 | A new player can go from week 1 to the Analysis Case, EN/ID |
| **7. The truck grows** | Stars into XP, coins and truck upgrades from a plain start, badges & streak, credits & easter eggs (the five places came early, in 5.2c; Lunch Rush and final art are not in 1.0) | XP grows, coins buy upgrades that visibly change the truck, and the credits roll |
| **8. Release** | First-time polish, the release page and portfolio write-up, hosting on GitHub Pages (desktop only) | The owner approves → **Query Truck 1.0** on 9 Dec 2026 |

### Phase 4 plan — one-day prototype

| # | Iteration | Done when… |
|---|---|---|
| 4.1–4.5 ✅ | **Finding the look** with 2D prototypes: a static truck, the queue + tablet, a side-view truck to walk around, a first-person panorama in the riso style. Replaced by 4.6; code removed (git tag `v2-prototypes`). Details and screenshots in `docs/JOURNEY.md` | The order → tablet → SQL → served loop works; the riso style is born |
| 4.6 ✅ | **3D prototype** (Three.js): low-poly truck and park, WASD + mouse, E/click to use, 3D customers queueing, the order tablet, the riso shader → **locked in**; v1 and 2D code removed, `/` opens the 3D truck | The owner tried it and chose 3D ✅ |
| 4.7 ✅ | **Using the truck's objects:** the menu board, fridge and recipe binders open the console with their own tables; an order may need checking another object first | Each object opens its tables; one order uses the fridge (`inventory`) |
| 4.8 ✅ | **Data Lens** (signature feature): a button that shows tables over every object | The Data Lens works on every side of the truck |
| 4.9 ✅ | **Sales into the database** (`INSERT` by the game, `channel = 'truck'`) + the day log in progress, replayed on load | After serving, a `sales` query shows today's sales, also after reloading the page |
| 4.10 ✅ | **The clock** 10:00–17:00, patience → tips, closing time + end-of-day summary | A day can be played from opening to the summary |
| 4.11 ✅ | **The manager's knock:** The Manager (suit) at the back door, one small case using the case engine on today's data | The manager's case can be solved with 📌 evidence |
| 4.12 ✅ | Owner playtest + fixes | The owner chose to go on to Phase 5 (20 Nov 2026) |

**4.12 playtest fixes so far (18 Nov 2026):** the park's furniture now lives in `PARK` (`world.ts`), and tests keep every bench, picnic table, lamp and tree off the path customers walk (in and out) and apart from each other — a bench had been standing right on the path, and a lamp post on the exit route. Picnic tables got legs under both seats and low cross-bars, so the seats no longer float. The order bubble and the Data Lens cards keep a **fixed width** and slide to stay on screen (`src/app/overlayLayout.ts`, tested) — near the right edge the bubble had squeezed to 76 px and grown 422 px tall; its tail still points at the customer. Lens cards no longer let long values spill out (cut with "…"), cards that would overlap move up out of each other's way, and the order bubble hides while the lens is on.

**4.12 additions from the playtest (18 Nov 2026):**
- **Data Lens cards are clickable** *(replaced on 21 Nov 2026: aim + E, no cursor — see the Phase 5 notes)*. Turning the lens on frees the mouse (pointer lock off; dragging still looks around, and clicking the 3D view does not capture the mouse again while the lens is on). Every table name on a card is a button that opens a look-around console on that table, with the object that holds it (cards carry their `object`; the customer's card opens the tablet). A hint at the bottom says so.
- **The Manager talks first.** Opening the back door starts a **talk** (`src/app/TalkBox.tsx`): the Manager's lines one by one (click, Space, Enter or E), then the player picks one of three replies (click or 1–3) and hears an answer in the Manager's bossy voice, then *Open the case 📋*. The script is `MANAGER_INTRO` in `manager.ts` (Indonesian in `locales/id/manager.ts`, tested). The case console then only shows a one-line reminder. Walking away (Esc or ✕) closes the door; the Manager keeps knocking. Coming back to a case already opened skips the talk.
- Opening the back door while the records are still loading (just after a reload) now says so ("Still opening the records — try again in a moment.") instead of showing the plain door message.

**4.6 as built (17 Nov 2026):**
- `src/game/truck/world.ts` (tested, no Three.js): the truck in metres, where things are (`LAYOUT`), where the player may walk (`WALK`), `walkStep` (WASD relative to the view; diagonals are not faster), `rayBox` / `aimedInteractable` (the thing under the crosshair within 1.7 m), and `queuePosition` (the queue path in the park).
- `src/game/truck/build.ts`: the truck (a wall with the window cut out, counters, a tilted tablet, a fridge full of bottles, stock shelves, a red espresso machine, the menu board, recipe binders, a clock, the back door), the park (striped lawn, path, benches, picnic tables with umbrellas, lamps and string lights, trees, skyline, sun, the truck's awning), and blocky 1.75 m customers with swinging arms and legs.
- `src/game/truck/risoPass.ts`: the low-resolution render, ink mapping with dither, depth outlines and the red misprint. Without exact ink colours and lights × π, everything turns dark green.
- `src/game/truck/TruckGame.ts`: WASD/arrows, mouse look (pointer lock; dragging works too), click/E on the thing under the crosshair, head bob, customers turning to walk and then facing the truck, and the front customer's head position sent to React (`anchor`) for the speech bubble. Time stops while the tablet is open (keyboard and pointer lock released).
- Not yet: phone controls.

**4.7 as built (17 Nov 2026):**
- `src/sql-core/truck/objects.ts` is the source of truth for the truck's objects: which tables each one sees (`OBJECT_STATION`: tablet → `sales`, `customers`, `menu_items`; fridge → `inventory`, `suppliers`; menu board → `menu_items`; recipe binders → `recipes`, `menu_items`; back door → nothing yet) and where an order is answered (`objectForStation`: menu and sales questions on the tablet, stock at the fridge, recipes at the recipe binders).
- Using the object an order needs opens the order's console; any other object with data opens a **look-around console** (`src/console/ExploreConsole.tsx`): any query on its own tables, run as its PostgreSQL role, ungraded. Its header says where the current order is answered. The back door shows a short message until The Manager arrives (4.11).
- The speech bubble says where to answer ("Answer at the fridge (aim + E)").
- Feedback names the truck's objects: "You can't see `sales` from here — that table is at the tablet." (`STATION_NAMES` now holds object names.)
- Two new requests written for the truck (`src/sql-core/truck/levels.ts`, Indonesian in `locales/id/levels.ts`), week 2 concepts with fill-in-the-blank input: *Who Brings the Milk?* at the fridge (`suppliers`, `WHERE … AND until IS NULL` → Highland Dairy at 12:00, a first clue for the Analysis Case) and *How Much Milk?* at the recipe binders (`recipes`, `WHERE ingredient = 'milk'`). The prototype day now has seven orders; looks are ordered so no two identical customers stand in the queue together (tested).
- `findOrderLevel` finds an order's level among the chapters and the truck's own levels, translated, with English as the fallback.

**4.8 as built (17 Nov 2026):**
- `LENS_SPOTS` in `world.ts` (tested): one card per spot with its tables — the tablet (`sales`, `menu_items`), the fridge (`inventory`), the stock shelves (`suppliers`), the menu board (`menu_items`) and the recipe binders (`recipes`, `menu_items`); the `customers` card follows the customer at the window. Tests check that each card only lists tables its object can see, that every table appears somewhere, and that every table an order needs is on the card of the object where it is answered.
- `risoPass.ts`: a `lens` uniform (0–1). Pixels switch to the blueprint when their Bayer value is below it, so the lens dissolves in over 0.45 s; edges turn teal and the misprint turns mustard. It keeps animating while time is stopped.
- `TruckGame.ts`: **L** sends `lensKey`; React owns the on/off state and sends `lens`; the game projects each card's point to the screen (`lensCards`, hidden beyond 6 m or off screen).
- `src/app/DataLens.tsx`: loads each table's row count and first two rows once (read-only, as the database owner), and draws the cards; nearer cards are larger. Cards hide while a console is open.

**4.9 as built (17 Nov 2026):**
- Every order says what the customer **buys** (`buys` in `orders.ts`: item ids and quantities; tested to be items on sale).
- `src/sql-core/truck/day.ts`: the **day log** (`{ date, served: [{ orderId, at }] }`, first play day 2026-11-01), `serveOrder`, `parseDayLog` (broken or unknown entries are dropped), and `saleSql`: one `sales` row per item at the menu price, with the next `sale_id`s and one new `order_id`, `channel = 'truck'`, built only from the game's own data (dates and times are checked). Until the clock (4.10), orders are served 12 minutes apart from 10:00.
- `CafeDatabase.write(sql)`: game-only writes, never player SQL; players stay read-only (tested). `LocalCafeDatabase` now runs requests **one at a time**, so a write or a second query can never land between `BEGIN READ ONLY` and `ROLLBACK` (tested with concurrent requests).
- The worker database remembers every write and replays it after **■ Stop** restarts the worker.
- The day log is saved in the browser (`query-truck.truck-day`). On load, `getDayDatabase` replays it **before** anyone can query; the game skips customers already served. The HUD shows "📅 Nov 1 · 3/7 served"; after the last order a card suggests `SELECT * FROM sales WHERE channel = 'truck';` and offers to start the day again. Data Lens cards reload after each sale.
- Checked in the browser: one sale takes `sales` from 7,694 to 7,695 rows, a reload keeps it (and the next customer is the second one), and a full day gives 7,703 rows.
- ⚠ For Phase 6: v1 questions over *all* sales now include the truck's sales. Answers are still graded fairly (same data), but teaching traps can break — e.g. Chapter 3's "item 6 sold exactly 400 portions" (`>` vs `>=`) becomes 401 after the *How Much Milk?* customer buys a Flat White. Moved questions should be limited to the history (August–October) or rewritten.

**4.10 as built (17 Nov 2026):**
- `src/sql-core/truck/day.ts` (tested): the day rules — `OPENING`/`CLOSING`, `GAME_MINUTES_PER_SECOND`, `QUIET_SPEEDUP`, `PATIENCE_MINUTES`, `arrivalTime`, `moodFor`, `TIPS`, `formatClock`, `isDayOver` — and a richer day log: `{ date, clock, served: [{ orderId, at, tip, stars }], missed }`. A log saved by 4.9 (times as text) is read as a fresh day without crashing. `revenueSql(date)` is the summary's query.
- `queue.ts`: `giveUp(customer)` — anyone in the line can leave; they walk back down the path and the others close the gap (tested).
- `TruckGame.ts`: owns the clock (stops while a console is open, ×4 when the line is empty, stops at 17:00), moves the wall clock's hands, lets customers arrive at their time, counts their patience, sends `clock`, `patience`, `gaveUp` and `closed` (closing time or nobody else to come, and the line empty). A reload carries on from the saved clock and skips orders already served or missed.
- `useTruckShift.tsx`: saves the clock as it moves (never backwards), records missed customers, and on hand-over records the time, the tip (from the mood) and the stars (`starsFor`: hints and wrong runs).
- `src/app/DaySummary.tsx`: the **end-of-day summary** — orders served, customers who left, revenue, tips and stars. Revenue comes from running `revenueSql` on the tablet's role, and the query is shown: *"How the revenue was counted — you can run this on the tablet too."*
- HUD: 🕙 clock (red "closed" after closing) next to the day's date and orders served.
- Checked in the browser: the clock runs and stops while the tablet is open; an ignored customer turns 😐, then leaves at 11:00 (60 minutes); a served customer at 11:14 gets a $0.50 tip and ⭐⭐⭐; at the end the summary shows revenue $6.00 from the query (2 × Americano); a reload mid-afternoon carries on at the saved time.

**4.11 as built (17 Nov 2026):** The Manager knocks at 13:30 (`KNOCK_TIME`), or as soon as every customer has been handled; the back door rattles and a "Knock knock!" alert shows. Using the door swings it open (the end wall now has a real opening) and shows the Manager (suit, red tie, glasses, report tablet) on a step outside. `src/sql-core/truck/manager.ts` builds the case when the door opens, working out today's answers from the database: today's orders, today's revenue, and October's best channel, each backed by pinned evidence (tested on a played day and on an empty day; Indonesian in `locales/id/manager.ts`). The console shows the Manager's lines above the task. Answering records `manager: { stars }` in the day log; the summary shows it. The day only closes once the Manager has been answered (or at 17:00). Checked in the browser end to end: knock at 13:30, three answers backed by data (2 orders, $8.75, dine-in), the Manager leaves, stars saved.

**Cleanup (17 Nov 2026):** v1's code (Phaser, the top-down café, Journal, shop, quests, `progress.ts`), the 2D truck prototypes, 72 unused UI strings, 112 unused CSS rules and the Phaser dependency were removed. `src/sql-core/` stays whole because its content is reused in Phase 6. Documents were moved to English for a global audience.

### Phase 5 plan — order generator & repetition

Patience & tips (4.10) and the saved, replayed day log (4.9) were already built in Phase 4.

| # | Iteration | Done when… |
|---|---|---|
| 5.1 ✅ | **Order templates, mastery and days that follow:** templates with variants replace the hand-written orders; concept mastery + spaced repetition plan each day; "Open the next day" | Day 2, day 3… bring different orders, and weak concepts come back sooner |
| 5.2 ✅ | **Input grows with mastery:** a well-known concept gets more blanks (a whole condition), then free typing | A level-4 concept is answered without a template |
| 5.2b ✅ | **A proper game shell** (owner's request before 5.3): title + loading screen, Esc pause menu, how-to-play guide (also a book on the back counter), a calmer low-poly look, the sun from morning to night, a shorter day | A new player can start, pause and learn the controls and the truck without help |
| 5.2c ✅ | **Query Truck, places, weather, sound, people** (owner's requests, 21 Nov 2026): the game is renamed; a different place each day; rain; synthesized sound; upgraded low-poly people. (A cyberpunk restyle was tried first and reverted: low-poly felt too plain for cyberpunk.) | Every place, the rain and the new people checked in the browser |
| 5.2d ✅ | **Radio, sound mix, varied customers, Esc** (owner's requests, 22 Nov 2026): the truck radio, softer rain, separate volume sliders, every customer different, 2D cartoon and brick toy customers, and Esc closes whatever is open | Checked in the browser |
| 5.2e ✅ | **A guided Manager case, a centred truck tour** (owner's feedback, 22 Nov 2026: the case was unclear — what to do, what *Load query* was for): one question at a time with a goal in plain words, the query already in the editor with one `___`, a run → read → answer checklist, three hints per question (the last shows the whole query), the Manager's reply, and the last result as proof (no pinning). The tour camera now looks straight at each object. A mouse capture still on its way when a console opens is let go, so the cursor is always there in a console | Checked in the browser |
| 5.2f ✅ | **Data Lens shows the data** (owner's request, 22 Nov 2026): lens + E opens the object's tables already shown, with the query that shows them explained line by line | Checked in the browser |
| 5.2g ✅ | **Developer mode and a size check** (owner's request, 22 Nov 2026): the F2 developer panel and `npm run size` | Checked in the browser |
| 5.2h ✅ | **A readable wall clock** (owner's request, 22 Nov 2026): a dot for every hour (red at 12, 3, 6, 9), a rim and a cap; looking at the clock from anywhere in the truck shows "It's 13:49" under the crosshair (`lookClock` on the bridge) | Checked in the browser |
| 5.2i ✅ | **Tidier people, a proper brick toy, a real food truck outside** (owner's feedback, 22 Nov 2026): faces sit on the head's curve and hair is centred; the brick toy has a rounded cylinder head with a stud and a printed face, a neck, a torso narrower at the shoulders, arms bending at the elbow with C-shaped hands, a hip block and legs with feet; the truck has a mustard body with a cab, windscreen, lights, grille, bumpers, four wheels, a white roof and skirt, a teal stripe, a QUERY TRUCK board, *SELECT * FROM coffee;* on the side and a giant steaming coffee cup on the roof (`exterior.ts`); the title screen circles the truck from outside | Checked in the browser |
| 5.2j ✅ | **Places polished, buttons that look like buttons** (owner's feedback, 22 Nov 2026): every tree is different (round, lumpy or pine; colour, height, lean); string lights and bunting hang on wires (the square's bunting runs to the shophouses); the skatepark mixes light and dark grey tiles with painted stripes and a ring, coloured ramps, cones, a graffiti container, a vending machine, a boombox on a crate stage, benches, planters, pennants and three skaters; the school's hoops face the court and have nets; the harbour has a container terminal on a concrete quay (stacks, two gantry cranes, a moored container ship), a lighthouse on rocks, a warehouse, a fish stall, a harbour office, crates and lamps along the pier. Every text-only button is now a real button (border, fill, press), and the guide's and tour's Back/Next are big buttons. Ending the tour on the title screen goes straight back to the view outside | Checked in the browser |
| 5.2k ✅ | **No more flickering faces** (owner's bug reports, 22 Nov 2026: jagged edges on the window, the boats): `overlaps.ts` finds box faces that share a plane and face the same way (z-fighting), also for turned groups such as boats; `overlaps.test.ts` builds the truck (inside and out) and every place and fails on any visible one. Rule for models: never let two faces of different colours lie in the same plane — move one a few millimetres out (the window frame sticks 1 cm into the opening, stripes sit just proud, decorations end just short) | Tested; checked in the browser |
| 5.2l ✅ | **A real food-truck queue** (owner's feedback, 22 Nov 2026: the slanted painted path wasn't natural, and people always came the same way): no path is painted any more; people queue in a straight line out from the serving window, the same everywhere, and each place has its own way in and out (`PLACE_ROUTES` in `world.ts`): from the left across the lawn, from the right past the fun box, out of the school gate (the fence now has one), along the pier, across the square. Tests keep every route clear of the props and out of the truck and its cab, and the line straight. A folding A-frame chalkboard (OPEN and the menu) stands by the line at every place, and an OPEN sign beside the window turns to CLOSED at closing time. People walk at about 1.7 m/s | Tested; checked in the browser |
| 5.2m ✅ | **Places polished from the owner's notes** (22 Nov 2026): the skatepark lost the confusing paint on its ground; the town square got an asphalt road under the truck (edge line, centre dashes, a kerb), grey paving with lighter bands instead of cream tiles, lawns with kerbs, hedges, trees and flowers, and a ring of grass and flowers round the fountain | Tested; checked in the browser |
| 5.2n ✅ | **Eating in** (owner's idea, 23 Nov 2026): after being served, about 6 in 10 customers with legs sit down for a while if a seat is free — on the place's benches and picnic tables, or at the truck's own folding bistro sets (a round table and two stools; two at every place). They walk off along the way out as far as the first step past the window, then to the side of their seat (never through a table, the line or the truck: `dineIn.ts`, tested), sit for 18–40 game minutes with a paper cup on the table, lifting it now and then, then walk back and off. Flat cartoons take their order away. The A-frame menu shows the real prices and stands where it can be seen from the window | Tested; checked in the browser |
| 5.2o ✅ | **Ghost mode for developers** (owner's request, 23 Nov 2026): the developer panel's 👻 Ghost button lets you fly anywhere (WASD, Space up, Shift down) with no duties — customers take their orders by themselves (not saved as the player's), nobody runs out of patience, the Manager doesn't knock and nothing in the truck can be used. Turn it off to play again | Checked in the browser |
| 5.2p ✅ | **A white step-van truck and a title film** (owner's request with a reference picture, 23 Nov 2026): the truck is now white, after classic step vans (our own design): a tall flat-fronted cab with a two-pane windscreen, big door windows, mirrors and amber marker lights; a short nose with a coral grille panel, round headlights and a grey bumper; rounded roof edges; a coral band round the bottom painted with white flowers and a mustard pinstripe; wheels with red hubs; a teal-and-white scalloped awning with bunting; a wooden counter on brackets; a flower box beside the giant coffee cup on the roof; *SELECT * FROM coffee;* in white on the band (`exterior.ts`). The title screen now plays a **film** instead of circling the truck: seven slow shots in a loop — the whole truck, the awning and name board, inside at the counter, the place from high up, the cab and front wheel, the roof, and the seats — each a gentle move with a fade to dark between them, framed to the right of the title card on wide screens (`cinematic.ts`, tested) | Tested; checked in the browser |
| 5.2q ✅ | **The official logo** (the owner's artwork, 23 Nov 2026, `src/assets/query-truck-logo.webp`): it replaces the typed name everywhere the name is a title — the title screen and the loading screen (`Logo.tsx`), the truck's roof signs over the serving window and on the back (`exterior.ts`, cropped to the artwork), and the README. The name stays as plain text in sentences (the guide, dialogue) and in the page title | Checked in the browser |
| 5.2r ✅ | **A cleaner truck and no empty view behind it** (owner's feedback, 23 Nov 2026): the flowers on the coral band, the painted *SELECT * FROM coffee;*, the bunting under the awning, the counter brackets, the roof's flower box and the giant cup with its steam (it read as a chimney) are gone. The roof now carries the logo on a **framed 3D sign board** (cream board, coral frame, the artwork on both faces) on two braced posts in a base plate. Behind the truck (+z) every place has its own scenery so the title film and the view past the truck are never bare: a path with lamps, hedges and trees in the park; a graffiti wall and the overpass ramp at the skatepark; a fence, trees, a street and houses behind the school; a quay with containers, cranes, a ferry and warehouses across the harbour; trees, benches and shophouses on the square; and a far skyline (`behindTheTruck` in `scenery.ts`) | Tested; checked in the browser |
| 5.2s ✅ | **Wooden game-board menus** (owner's feedback with a reference of wooden game UI, 23 Nov 2026): the title, loading and pause cards are a wooden sign board (planks, grain, a gold inner frame) with chunky buttons — glossy gold for the main one, wood for the others — that rise on hover and press down on click; today's place and the controls sit on parchment notes; the sound keys, a gold slider and the language switch match. CSS only, our own design; menu lettering in Fredoka (OFL, CREDITS.md). The line above the logo is gone, and *Continue day N* no longer shows the time | Checked in the browser |
| 5.2t ✅ | **The staff handbook** (owner's feedback, 23 Nov 2026: simple UI, but personal, not empty): *How to play* is now the new hire's handbook — a ruled notebook with a red margin and binding holes, coloured index tabs (the open one joins the page), masking tape with *Query Truck · staff handbook*, page titles under a highlighter stroke, and on every page a **sticky note from Mira**, who worked the window before you, with a tip in her own words (in handwriting, Caveat; EN and ID in `guide.ts`). The truck tour's fridge stop now stands back across the truck so the fridge and the stock shelves both show | Tested; checked in the browser |
| 5.2u ✅ | **Days and practice runs** (owner's idea, 23 Nov 2026: a query is learnt by doing it again and again): the pause menu's *Play this day again* became **Days** — every day so far (newest first) with where the truck stood, the SQL topics it practised, orders served and stars. Any earlier day can be played again with **the same orders**, and any day (today too) with **the same topics, new cases** (`practiceOrders` in `repetition.ts`: another template or variant of each order's concept). A practice run is saved apart (`query-truck.practice`), happens where that day was, has no Manager, shows *Practice* on the clock card, and never changes levels or saved days; its summary offers *Back to day N* or *Practise again*. *Start today again* (for real, after a confirm) moved here too. The pause menu lost the controls list (the guide has them) and the Data Lens button (the L key; a tutorial will teach it when needed), and buttons keep only the icons that matter (▶ on the main one, the sound icon) | Tested; checked in the browser |
| 5.3 | Owner playtest of several days + fixes | The owner plays three days and they feel different |

**5.1 as built (20 Nov 2026):**
- `concepts.ts`: the six week-2 concepts in teaching order (`where-compare`, `where-text`, `and`, `in`, `like`, `is-null`), their names (EN/ID) and their lesson cards (taken from the Chapter 1 levels).
- `templates.ts`: 11 templates with 2–5 variants each (36 orders): under/at least a price, a category, available items, a category under a price, two categories (`IN`), name and description patterns (`LIKE`), missing values and the current supplier (`IS NULL`, at the fridge), and recipe ingredients (at the recipe binders). Price limits are always an exact price of some item, so `<=` instead of `<` shows extra rows. Tests run every variant: its solution returns rows on its own station, the blanks filled with the reference answers are graded correct, it buys only items on sale, and its Indonesian text has the same shape.
- `repetition.ts`: **mastery** per concept (level 0–5, due day, times practised), never saved but **worked out again from the saved day logs**, so playing a day again never counts twice. ⭐⭐⭐ → up one level, back in 1/2/4/7/14 days; hints or wrong runs → down one, back tomorrow; a customer who gave up → same level, back tomorrow. **Planning a day** (seeded by the date): due concepts first (weakest first), then up to 3 new concepts, then a draw where weaker concepts are more likely; 7 orders, at most 3 per concept, never the same order twice in a day, yesterday's orders avoided when possible. A day with new concepts opens with the first of them, and an order of a concept met for the first time opens its lesson card.
- The day log now holds the day's planned `orders`; logs saved before templates start a fresh Day 1. Finished days are kept in `query-truck.truck-past`.
- The end-of-day summary shows **Practised today**: each concept with its level (●●○○○, ▲/▼ or *new*) and when it comes back, then **Open the next day →** (or play the same day again). The HUD shows "Day 2 · Nov 2 · 0/7 served".
- Checked in the browser: Day 1 plans 7 orders from the first three concepts and opens the lesson card; a served order is saved; a finished day shows the summary; the next day is Nov 2 with the weak concepts and three new ones, also in Indonesian.
- Not yet: weekends and weeks (every calendar day is a working day for now; weeks come with the curriculum in Phase 6).

**5.2 as built (21 Nov 2026):** how much of the query the player writes follows their mastery of the order's concept **before today** (so it stays the same all day and after a reload): level 0–1 → fill in one word or value (the template's own gap); level 2–3 → fill in **the whole condition** after `WHERE` (a wider gap); level 4–5 → **free typing** in the editor with autocomplete. `inputStage` and `stagedInput` in `orders.ts`; every order's solution has the form `SELECT … FROM … WHERE condition;`, so one rule builds the condition gap for all templates (tested: every variant is solvable at every stage). A short note under the task says why ("You know this one well: write the whole condition after WHERE."). Checked in the browser with a made-up history: a level-4 concept opened the editor and was served, a level-2 concept asked for the whole condition, and a new concept kept its one-word gap and lesson card.

**5.2b as built (21 Nov 2026) — the game shell:**
- **Title screen** (`src/app/Menus.tsx`): the truck renders softly behind a card with the title, a tagline, *▶ Start day N* (or *Continue day N (13:20)* mid-day), *How to play* and the language. It is also the **loading screen**: until the 3D truck and the records (database) are ready it shows a bar and what is loading. After *Open the next day* or *Play this day again* the page reloads straight into the truck with a short loading screen (`sessionStorage`), not the title.
- **Pause menu**: **Esc** (or the Menu chip) pauses, and **Esc again carries on** (22 Nov 2026, owner's request: Esc closes whatever is open — the menu, a console, the guide, the tour, the Data Lens). Browsers never count Esc as a click, so they may refuse to capture the mouse right after it (or after a console closes). Then the game goes straight back to first person anyway: the cursor is hidden and moving the mouse looks around, and the next key (W/A/S/D/E…) or click captures the mouse properly — that click only captures it, it never uses anything (owner's bug report, 22 Nov 2026: after closing anything the cursor stayed and the camera would not move). Previously: — time stops, the player can't move — with *Carry on*, *How to play*, *Play this day again* (asks first), *Title screen* and the language. When the mouse is captured, the browser frees it on Esc; losing the mouse that way also opens the menu (unless a console, the Data Lens or the guide took it). Esc while a console is open only closes the console; Esc with the Data Lens on turns it off.
- **How to play** (`src/app/guide.ts`, Indonesian in `src/app/locales/id/guide.ts`, tested to match): six pages — your job, controls, the truck (every object, its tables and what it is for, including the fridge and The Manager at the back door), the Data Lens, writing SQL (input stages, `;`, hints and stars), days & practice. Opened from the title screen, the pause menu, or the **guide book** on the back counter: an open red book with a "GUIDE ?" sign (`guide-book` object, aim + E).
- **The HUD is only what matters** (owner's request): the brown top bar is gone. Top left, a **clock card**: a sky icon (🌤 ☀️ 🌇 🌙), the time, a bar for how far through the day it is, the day and date, and the orders served (and a *closed* / *Data Lens* tag). Top right, an **Esc · Menu** chip. The Data Lens switch, the language and the list of controls moved into the pause menu. The knock alert sits at the top centre.
- **Never a loose cursor** (owner's bug report: after Esc → pause → back, a cursor showed and moved the camera). Browsers only capture the mouse right after a click or a key that counts as the player's action, and **Esc does not count** — so leaving the pause menu with Esc could never capture the mouse. Now: Esc does not leave the pause menu; **Enter**, Space or a click on *Carry on* does. If the browser still refuses (e.g. Esc closed a console), the game shows the pause menu instead (`lockFailed` from the game). Looking with a free mouse is only used where the mouse can't be captured at all (an embedded preview).
- **The Data Lens without a cursor**: the mouse stays captured with the lens on. The card of the object under the crosshair lights up with "E · open these tables", and E opens that object's tables, as without the lens. Cards are no longer clickable.
- **The truck page and the truck tour** (owner's feedback: the truck page didn't say what each object is for, and emoji alone didn't show it): each object now has a **picture taken in the game** (`snapshots()` in `TruckGame.ts`, from its tour stop, so the guide always matches the look), where it is, its tables, what it is for in plain words, and an example question. **🎥 Truck tour** (from the title screen, the pause menu or the guide) flies the camera to each object in turn (`TOUR_STOPS` in `world.ts`, tested: nothing blocks the view of the object) with a card at the bottom saying the same things; ←/→ or Enter step through it, Esc ends it, and the camera flies back.
- **No click to start looking around** (owner's request): the "Click to look around" card is gone. The game captures the mouse by itself whenever play resumes — after *Start*, closing a console or a menu (just after the player's click or key, so the browser allows it). Esc is the only way to free the mouse, and it pauses the game.
- Time also stops while any menu is open. The bridge now remembers the last value of each event, so the game, created after the app, starts paused when the title screen is up.

### Phase 6 plan — six-week curriculum

From 24 Nov 2026 Phase 6 is built by a **scheduled agent** (see [`docs/AUTOMATION.md`](docs/AUTOMATION.md)): each run it takes the first open iteration below, builds it on its own branch and opens a pull request with a playable preview; the owner reviews, comments and merges. Iterations marked 👤 are the owner's. Owner's decision (24 Nov 2026): Phase 6 may start before the 5.3 playtest; what the playtest finds comes back as review comments and fixes. **Fast plan** (owner, 24 Nov 2026, to finish before 11 Dec): the Skill Check iteration was cut, and translations are no longer an iteration of their own — **every iteration ships its `id` text** (tests compare the shapes).

| # | Iteration | Done when… |
|---|---|---|
| 6.1 ✅ | **Weeks:** five working days a week (weekends skipped on the calendar), every concept belongs to a week (`week` in `concepts.ts`), the day planner only uses concepts of this week and earlier weeks, a **week card** on the first morning of a week (the week's name, what it teaches, the Manager's case to come), "Week 2 · Day 3" on the clock card and in the summary. Existing saves carry on in week 2 | Tested; a week turns over after day 5 and the week card shows; checked in the browser |
| 6.2 ✅ | **Week 1 · Opening Week:** concepts and order templates for `SELECT *`, chosen columns and `FROM` at each object (menu board, fridge, recipe binders), lesson cards taken from Chapter 0, and **word blocks** on the truck tablet for week-1 orders (reusing `BlockInput`, with a decoy or two). A brand-new player starts in week 1 | Tested (every variant solvable with its blocks); a new save starts with week 1 blocks; checked in the browser |
| 6.3 ✅ | **First start: backstory and difficulty** (owner's request, 24 Nov 2026). Today a new player is dropped straight into orders like `price <= 5.50` without being asked who they are. Before the first day, add: **(a) a short backstory** — 3–5 simple cards or lines, skippable: what Query Truck is and what it sells, why it moves around the city, who the player is (the new hire who answers orders on the tablet), who The Manager is; **(b) a difficulty choice** with three levels, each shown as a card with a short description, **the benefit** of that level, and **a small example of what an order looks like** in it (a rendered mini-preview of the input, not a screenshot of text): **Cards** (build the query from word blocks, Duolingo-style — for a quick, light review; fastest, least typing), **Fill in** (the query is partly written, fill the gaps — for players who know the shape and want to practise the key parts), **Write it yourself** (free typing from an empty editor, starting from `SELECT * FROM` — for complete beginners who want to really learn; say plainly that writing every query yourself, again and again, is what builds the skill of writing SQL without help from AI, and that this level is slower at first but sticks best). The choice sets the input mode for all orders (replacing §5's fixed "input grows with the week" rule, or making it the default of a fourth *Grow with me* option — the agent decides and records it in §5), is saved, and can be changed later from the pause menu / Days screen. Existing saves skip the backstory and keep today's behaviour as their default. EN first + `id` translations | Tested (every level's input works for every week-1 and week-2 template; the choice is saved and survives reload); a new save shows the backstory and the choice; checked in the browser |
| 6.4 ✅ | **Week 3 · Daily Specials:** templates for `ORDER BY` (`ASC`/`DESC`), `LIMIT`, `DISTINCT`, aliases and computed columns (`price - cost AS margin`) from Chapter 2, including the `NULL`-first trap with `DESC`; sorted answers without ties. From week 3 a new concept starts with free typing (§5 input table) | Tested; checked in the browser |
| 6.5 ✅ | **Week 4 · Counting the Till:** templates for `COUNT`, `SUM`, `AVG`/`ROUND`, `GROUP BY`, `HAVING` and dates (`DATE_TRUNC`, `EXTRACT`) from Chapter 3, on `sales`, so answers include today's own sales (graded on the data as it is right now) | Tested; checked in the browser |
| 6.6 ✅ | **Week 5 · Regulars & Recipes:** templates for `JOIN … ON`, table aliases and `LEFT JOIN … IS NULL` from Chapter 4; **regulars** who come back on other days and ask "What's my usual?" (`sales` + `customers`) | Tested; checked in the browser |
| 6.7 ✅ | **The Manager follows the week:** the daily knock picks a small guided case (1–2 questions) that uses this week's and earlier weeks' concepts, from a pool per week. Cases follow the analyst's five steps (*Scope & goals*): the business question, the metric, the pattern, the opportunity, the action — the last question is often "so what should we do?" (a choice backed by the result). From week 5 the pool includes **cross-selling**: "Lots of people buy lattes. What else do latte buyers take?" (items in the same `order_id`, a `JOIN` of `sales` with itself) and "Which snack should we offer with it?" | Tested; every week has at least three daily cases, and at least one in weeks 4–6 ends with a recommendation; checked in the browser |
| 6.8 | **End-of-week cases:** on the fifth day of weeks 2–5 the Manager brings the big case — *The Menu Audit*, *What Should We Promote?*, *The Quiet Day*, *Where Did the Regulars Go?* — moved from v1 into the guided case format, the story rewritten for the truck (no Grandma, no café) | Tested; each case solvable with its hints; checked in the browser |
| 6.9 | **Week 6 · The Big Question and free mode:** days mix every concept; on the last day the Manager brings the **Analysis Case** *October Sales Dropped* (five steps, from Chapter 5); after it, days go on in an endless free mode with spaced repetition. The staff handbook gets a page on weeks and the difficulty choice | Tested; checked in the browser |
| 6.10 👤 | **Owner playtest** from week 1 to the Analysis Case, in English and Indonesian, + fixes | The owner can go from week 1 to the Analysis Case |
| 6.11 👤 | **Friends' playtest:** 1–2 friends who don't know SQL play the first week without help while the owner watches and notes where they get stuck; the fixes come back as review comments | Two beginners finish week 1 |

**6.1 as built (25 Nov 2026):**
- `src/sql-core/truck/weeks.ts` (tested): `weekOfDay(n)` turns the player's day number into a week and a day of the week (5 working days per week; after week 6 it stays "week 6", the free mode), `WEEKS` holds each week's name, what it teaches and the Manager's end-of-week case (Indonesian in `locales/id/weeks.ts`), and `nextWorkday` skips Saturdays and Sundays. Every concept has a week (`CONCEPT_WEEK` in `concepts.ts`); `planDay` only uses concepts of this week and earlier weeks, and `nextDay` passes the current week.
- **Week 1 had no orders yet** (6.2), so `FIRST_WEEK` was 2 until 6.2 (see below).
- The first play day stays 1 Nov 2026 (the Manager's case fills in that date); from then on the calendar skips weekends (Mon 2 Nov – Fri 6 Nov, then Mon 9 Nov…). Mastery due dates still count plain calendar days.
- **Week card** (`src/app/WeekCard.tsx`): on the first morning of a week, before anything has happened (not on later reloads, not in practice runs), a card shows the week's name, what it teaches and the Manager's case to come. Time stands still while it is up; Enter, Space, Esc or the button closes it. The clock card says "Week 2 · Day 3 · Nov 4" and the summary title carries "· Week 2 · Day 3".

**6.7 as built (25 Nov 2026):**
- `src/sql-core/truck/managerCases.ts` (tested; Indonesian text sits next to the English in the same step): a **pool of 11 daily cases** of one or two guided questions, each brought from the week whose SQL it needs. Week 1: *How big is the menu?*, *Who brings the stock?*, *Recipes and regulars* (just `SELECT * FROM ___` and reading the table); week 2: *Cheap and sold out* (`WHERE`); week 3: *What should we push?* (margin, `ORDER BY`, ends with a recommendation); week 4: the original *Numbers. Now.* and *The quiet hour* (orders per hour, then "when should we run an offer?"); week 5: *What goes with an Espresso?* (**cross-selling**: `sales` joined with itself on `order_id`, then the item that travels with it) and *Regulars and strangers* (`JOIN`, `LEFT JOIN … IS NULL`); week 6: *The milk mystery* (a pattern in `inventory`, then the action). On day N of week W the Manager brings a case of weeks 1…W — one of this week's own two days in three, otherwise any earlier one so old SQL comes back (`pickDailyCase`, the same date always gives the same case). Every week has 3+ cases to draw from and the pool of weeks 4–6 includes recommendations.
- The answers are worked out from the database when the Manager knocks; choice options can come from a query too. Cases that end with "so what?" are choices backed by the result (the analyst's fifth step).
- The talk at the back door now follows the case (`managerIntroFor(lang, caseId)`): the Manager's ask is the case's own. The cross-selling case uses Espresso (its best partner, Croissant, wins clearly); the first idea, the Latte, tied for first place with the Chocolate Croissant, so it was not used (tested).
- The original case moved into the pool from week 4 (it needs `COUNT`, `SUM` and `GROUP BY`); `managerCaseFor` without a week still gives it.

**6.6 as built (25 Nov 2026):**
- Four week-5 concepts (`join`, `left-join`, `join-group`, `regulars`; lesson cards from Chapter 4, levels `ch4-1`, `ch4-2`, `ch4-3`; *regulars* reuses the `ch4-3` card) with ten order templates in `src/sql-core/truck/templates.week5.ts` (Indonesian in `locales/id/templates.week5.ts`): at the **recipe binders** "which items use milk / butter / eggs / cinnamon?", "how much milk goes in each?", "what is in the Latte?" (`JOIN … ON`, table aliases) and "which items have no recipe?" (`LEFT JOIN … IS NULL`); at the **tablet** "which items were never sold?", "which customers never came?", units / revenue / lines per category and per item name (`JOIN` + `GROUP BY`), regulars with N+ visits by name, and **"What's my usual?"** — a named regular asks for their most-bought item (`sales` + `customers` + `menu_items`).
- **Regulars:** the four people who ask "my usual" are real customers of the till data (Ava Brooks, Ben Carter, Henry Irwin, Grace Hughes), each with a clear top item (no tie for first, tested). Today's own sales are walk-ins with no `customer_id`, so they never change a regular's usual.
- Only the "usual" order sorts; every other week-5 answer ignores row order, as in week 4.
- Free typing from the first time a week-5 concept is seen (§5); *Fill in* gives one gap each (`JOIN`, the `ON` clause, `LEFT`, `IS`, `GROUP BY` column, `DESC`, a limit).
- The data lens test now counts the `customers` card (it follows the customer at the window, and the tablet opens it) as shown on the tablet.

**6.5 as built (25 Nov 2026):**
- Six week-4 concepts (`count`, `sum`, `avg-round`, `group-by`, `having`, `dates`; lesson cards from Chapter 3, levels `ch3-1` to `ch3-6`) with eleven order templates in `src/sql-core/truck/templates.week4.ts` (Indonesian in `locales/id/templates.week4.ts`), all at the **tablet** on `sales`: counts per channel or item, revenue per channel, units per item, average order value (`ROUND(SUM(quantity * unit_price) / COUNT(DISTINCT order_id), 2)`), one row per group, `HAVING` for big sellers and for regulars with many visits, and dates (`DATE_TRUNC('month', …)`, a month's revenue with `sold_at >= … AND sold_at < …`, and orders per weekday with `EXTRACT(DOW FROM …)`).
- **Graded on live data:** the solution and the player's query both run on `sales` as it is right now, today's own sales included. So no week-4 template uses `ORDER BY` (the checker then ignores row order and no tie can make an answer flaky). `HAVING` limits are chosen so some, but not all, groups pass.
- Each concept's customers start with free typing (§5). *Fill in* gives one gap per order (`COUNT(*)`, `SUM`, `ROUND`, the `GROUP BY` column, `HAVING`, `'month'`, `<`, `DOW`).
- Only the three month totals August–October are asked by name; the month-revenue template ends each month before the next, as the lesson teaches.

**6.4 as built (25 Nov 2026):**
- Five week-3 concepts (`order-by`, `limit`, `distinct`, `alias`, `sort-nulls`; lesson cards from Chapter 2, levels `ch2-1` to `ch2-5`) with ten order templates in `src/sql-core/truck/templates.week3.ts` (Indonesian in `locales/id/templates.week3.ts`): sorting by price and by name, top-N lists, `DISTINCT` at the menu board, the recipe binders and the fridge, `price - cost AS margin` and a happy-hour price, and the **`NULL`-first trap**: "the priciest / costliest items" only works with `WHERE … IS NOT NULL` because `DESC` puts the empty price (Hot Chocolate) or cost (Banana Bread) first.
- **No ties:** every sorted answer has a sort column that is unique among the rows shown, and a `LIMIT` never cuts through two equal values (tested), so there is exactly one right order.
- **Free typing from week 3** (*Grow with me*): `stageFor` returns `free` for every week-3+ concept from the first time it is seen, as §5 says. *Fill in* still uses each template's gaps (the direction, the limit, `AS`, `IS NOT NULL`), and *Cards* uses the solution's words.
- Column names are not enforced for aliases (the checker compares values), so `AS margin` is taught but a different alias is accepted.

**6.3 as built (25 Nov 2026):**
- `src/sql-core/truck/difficulty.ts` (tested): `Difficulty` = `cards | fill | write | grow` and `inputFor(template, variant, difficulty, level)`, which every order uses (`orderLevel` takes it as its input). Tests cover every variant of every template at every difficulty (cards and fill are solvable, fill gaps filled give the solution).
- **First start** (`src/app/StartFlow.tsx`): a new player (no saved days, no served customers) sees a skippable backstory of four cards (the truck, a new place every day, the new hire, The Manager), then the **difficulty choice**: four cards, each with who it is for, its benefit, and a small drawn example of an order (blocks, a gap, a blinking caret). The *Write it yourself* card says plainly that writing every query again and again builds the skill of writing SQL without help from AI, and that it is slower at first. Existing saves skip all of it and get **Grow with me**.
- The choice is saved under `query-truck.difficulty` and changed from the pause menu (*Difficulty*), with the same cards; progress is kept. With any choice other than *Grow with me* the "you know this one well" note is not shown.
- **Owner feedback (24 Nov 2026) — the story plays over the live game:** the backstory and the first difficulty choice no longer sit on a flat dark blur. The title card is hidden while they are open, the shade is light and only on the card side (`.menu-screen-film`), and the title film is held on one shot per page (`filmShot` bridge event, `shotSpan` in `cinematic.ts`): the truck, the place from above, inside at the window, the roof. The difficulty picker opened from the pause menu keeps its normal look.
- Decision: *Grow with me* is a fourth option (not a replacement), so nothing changes for people who already play. In *Cards* mode, weeks 2+ blocks have no decoys (the order has only the solution's words); only week 1's own decoys remain.

**6.2 as built (25 Nov 2026):**
- Three week-1 concepts (`select-all`, `select-column`, `select-columns`; lesson cards from Chapter 0, levels `ch0-1` to `ch0-3`) with nine order templates in `src/sql-core/truck/templates.week1.ts` (Indonesian in `locales/id/templates.week1.ts`): **`SELECT *`**, **one column** and **several columns**, each asked at all three objects — the menu board (`menu_items`), the recipe binders (`recipes`) and the fridge (`suppliers`). That is 3 + 8 + 9 = 20 order variants. Customers are plain people at the window (the v1 Grandma is not used).
- **Word blocks** (`BlockInput`, as in Chapter 0): the blocks are the solution's words plus a decoy or two (another column, another table, or a spare comma), in a fixed scrambled order that is never the answer order (`blocksFor`). Mastery still raises the input: from level 4 the player types freely. Week 1 has no `WHERE`, so there is no "whole condition" step (`stageFor` keeps level 2–3 on blocks).
- **`FIRST_WEEK = 1`:** a new player starts in Opening Week, day 1 with the three concepts, then week 2 from day 6. Existing saves count from week 1 too: a save with 8 days now shows "Week 2 · Day 3" instead of "Week 3 · Day 3"; mastery is kept, so the planner brings back what is due and introduces the three new week-1 concepts as fresh ones (they are the first in teaching order).
- Week 1 on its own gives only 3 concepts and 20 variants for 5 days; orders repeat across days (avoiding yesterday's where possible). That is on purpose: repetition is the point of a tutorial week.

### Phase 7 plan — the truck grows

Owner's requests (25 Nov 2026): a reward you can **see** for every right answer, and a truck that starts plain and is **earned** better. The feeling to aim for: grinding pays off — effort, then a visible achievement.

| # | Iteration | Done when… |
|---|---|---|
| 7.1 | **Stars and XP:** a right answer plays a short celebration — the order's stars (⭐–⭐⭐⭐, §10) pop out at the tablet and **fly to an XP counter in the top-left corner** of the HUD, which ticks up with a small sound (`src/audio/sound.ts`). XP = stars earned (a replay or practice run never pays twice; same rule as coins); saved, worked out from the day logs like mastery. **What XP is for is decided later** (§13); for now it only grows. Respects `prefers-reduced-motion` | Tested (XP from the logs, no double pay); checked in the browser |
| 7.2 | **Coins and truck upgrades:** every served order pays **coins** (price-based + tip, shown flying to a coin counter beside XP), saved. **The truck starts plain and a bit worn on purpose** — a dented old coffee machine, a basic grinder, a small humming fridge, faded paint, a plain awning — so upgrades feel earned. A **shop** (pause menu, and a catalogue on the back counter) sells upgrades in tiers that visibly change the truck: **style** (paint colours and patterns, awning colours, lights, plants, a sign frame) and **equipment** (old → better → modern espresso machine, grinder, fridge with a glass door, a tablet stand, a radio, a menu screen instead of chalk). Prices grow per tier so the top tiers take a few weeks of play; a little *new!* moment when an upgrade arrives. Bought items are saved and show at every place | Tested (prices, saving, no double pay); an upgrade can be bought and shows after a reload; checked in the browser |
| 7.3 | **Badges, credits and easter eggs** (owner's wish): 8–12 badges for learning milestones (first `JOIN`, a perfect week, every concept at level 3+, the Analysis Case solved, all easter eggs found, the first modern machine…) on a badge page in the pause menu and in the summary when earned, plus a day streak 🔥 (in-game days, never punishing); **credits roll** after the Analysis Case and from the title screen — the owner as developer, and every asset from `CREDITS.md`; **6–10 easter eggs** of our own, e.g. a secret table only found through `information_schema`, a hidden query that makes the radio play a special song, a rubber duck in the cab that says something when used, a note from the developer behind the fridge, Mira's last sticky note, the Manager's own coffee order on a rare day, a cat that visits the truck. They never block learning | Tested; every badge can be earned and every easter egg found; checked in the browser |

### Phase 8 plan — release

| # | Iteration | Done when… |
|---|---|---|
| 8.1 | **Polish for a first-time player:** go through the first 15 minutes as a new player (backstory, difficulty, week 1) and fix anything unclear; a settings page (sound, language, mouse sensitivity, reset progress); an *About* page (what the game teaches, the developer, the source on GitHub); a friendly message on phones and tablets ("Query Truck is made for a computer with a keyboard and mouse"); split CodeMirror and PGlite's JavaScript out of the first bundle (§11) if it is quick; a check in Chrome, Firefox, Safari and Edge | Checked in the browser as a new player |
| 8.2 | **Release page and portfolio write-up:** README with fresh screenshots and a short GIF, a version tag `v1.0.0`, and `docs/CASE_STUDY.md` — how the game was designed and built, including the owner's agent workflow (scheduled agent, pull requests, previews, twice-a-day reviews), for the owner's portfolio | Reviewed by the owner |
| 8.3 👤 | **Final playtest and release:** the owner plays it through once more, approves, and the 1.0 release is published | **Query Truck 1.0** is live |

## 13. Open questions

- [x] Game title and truck name: **Query Truck** (21 Nov 2026). Earlier working names are gone from the game; saves under the old `sql-valley.*` keys are moved to `query-truck.*` on load
- [ ] What is XP for? (7.1; owner, 25 Nov 2026: "we'll think about it later") — ideas: player levels with a title (New Hire → Barista → Analyst), unlocking places or radio stations, a rank on the badge page
- [x] Should `INSERT`/`UPDATE` be taught? **No** (owner, 24 Nov 2026): BI analysts rarely write them; not in 1.0
- [ ] The right length of a day (8–12 minutes) — decided by the 4.12 playtest
- [x] Locations: **only visual** in 1.0 (owner, 24 Nov 2026)
- [x] Phone controls: **not in 1.0** (owner, 24 Nov 2026); maybe after release if there is time, maybe never. 8.1 shows phone visitors a friendly message
- [x] Hosting: **GitHub Pages** for `main`, the pull request previews and the 1.0 release (24 Nov 2026, see `docs/AUTOMATION.md`)
- [x] Town setting: **generic and international, with small local touches** (e.g. *kopi susu* on the menu one day); the owner's wish is lots of easter eggs and surprises (7.3)

## History

- **v1 — Grandma's café** (Phases 1–3, 13–16 Nov 2026): a top-down 2D pixel-art café where the player walked to SQL stations. The full v1 design document (written in Indonesian at the time) and its code are in git tag `v1-cafe-mvp`.
- **v2 prototypes** (4.1–4.6, 16–17 Nov 2026): from a static 2D truck to the 3D first-person truck. Code in git tag `v2-prototypes`; the story with screenshots in [`docs/JOURNEY.md`](docs/JOURNEY.md).
