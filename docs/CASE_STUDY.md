# Case study: building Query Truck with an AI agent

*A portfolio write-up. Query Truck is a first-person 3D game that teaches SQL by thinking like a Business Intelligence (BI) analyst. It was designed by its owner and built, from 13 Nov to early Dec 2026, together with Claude Code.*

## The problem

Beginner SQL tools tend to fall into two groups. **SQLBolt**-style sites are gentle but repetitive and stop at early intermediate level. **LeetCode**-style sites have real case studies but are hard to start with and do not feel interactive. Neither teaches what a BI job asks for: turning a *business question* into a *metric*, finding the *pattern*, spotting an *opportunity* and recommending an *action*.

## The idea

You work at a food truck that parks somewhere new every day. Customers queue with orders you answer in SQL on the truck's tablet; **The Manager** knocks on the back door with business questions. Six in-game weeks take a player from `SELECT *` to `JOIN`s and a closing analysis case (*October Sales Dropped*). The goal for a player: after six weeks, junior-BI-interview SQL. The goal for the project: a portfolio piece, released for free, and finished rather than endless.

## Design decisions that mattered

- **Results are graded, not text.** The checker compares the query's result with the solution, so any correct way of writing it counts, with specific feedback when it is wrong. Every query runs in a read-only transaction that is rolled back, under a PostgreSQL role that can only read its own tables.
- **Real PostgreSQL in the browser** (PGlite in a Web Worker) instead of a backend: free to host, the closest dialect to real BI work, and a slow query can be stopped.
- **The SQL core is separate from the game world.** The core (data, levels, checker) was built and tested first, so the world could be thrown away and rebuilt (a 2D café, then 2D truck prototypes, then 3D) without touching it. See [JOURNEY.md](JOURNEY.md).
- **Repetition instead of a fixed list of levels.** Orders come from parameterised templates; each SQL concept has a mastery level with spaced repetition, and the input grows from word blocks to free typing as mastery grows.
- **The input grows with the learner.** A new concept starts with blocks or fill-in-the-blank, then free typing.
- **A look that does not tire the eye.** A risograph dither shader was built, loved, and dropped after a few days because it was tiring to look at; a clean low-poly style with thin ink outlines replaced it.
- **English first, Indonesian as an option**, in separate files, with tests that check Indonesian text has the same shape as the English.
- **Scope was cut on purpose** to hit a date: no `INSERT`/`UPDATE`, no subqueries or window functions, no per-place data, desktop first (with simplified touch controls).

## The workflow: an agent builds, the owner reviews

The owner was new to Claude Code and git, so the process was designed to be easy to supervise. It is written down in [AUTOMATION.md](AUTOMATION.md).

1. **One source of truth.** `GAME_DESIGN.md` holds every design decision and the roadmap; `.claude/CLAUDE.md` holds the standing rules (English repository, SQL core separate from the game, original art, small iterations).
2. **A scheduled agent.** A Claude Code routine starts when a pull request is merged or commented on, and at fixed backup times. It reads the rules, claims work with a draft pull request, builds a *batch* of iterations, and opens one pull request with a review list. It never merges and never pushes to `main`.
3. **Every iteration is checked and committed on its own:** type-check, tests and a production build must pass, then the roadmap is updated with an "as built" note.
4. **CI and previews.** GitHub Actions run the checks on every pull request and publish a playable preview of it, so the owner can try a change without installing anything.
5. **Two reviews a day.** The owner plays the preview, then merges or comments; comments are fixed on the agent's next run. A single push notification means "time to review".

### What worked

- Small, separately committed iterations made reviewing cheap and mistakes easy to undo.
- Writing decisions down first meant a fresh agent run could continue without the earlier conversation.
- Tests as a safety net: every order-template variant is proven solvable, so new content could be added quickly without hand-checking.
- Previews turned "review the code" into "play the game".

### What was hard

- The look took the most iterations. Taste cannot be delegated: the owner's feedback ("the dither is tiring", "the credits roll looks bad") steered the result more than any specification.
- An agent will happily keep adding. A written scope, a date and an explicit "not in 1.0" list kept the project finishing.
- Some checks need a person: playing on real phones, in Firefox and Safari, and watching a beginner get stuck. These were left to the owner and to friends who do not know SQL.

## Numbers

About 30,900 lines of TypeScript and content in 186 files, with about 3,600 of those lines tests (`npm run size`). The first page is about 330 KB gzipped; PostgreSQL itself (about 5.4 MB gzipped) loads in a worker.

## Try it

Play at <https://neinstat.github.io/query-truck-game/>. Source and history are on GitHub; every design decision is in [GAME_DESIGN.md](../GAME_DESIGN.md).
