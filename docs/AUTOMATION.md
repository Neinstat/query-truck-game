# Automation

Since 24 Nov 2026 the game is built by a **scheduled agent**, and the owner reviews **twice a day, at 12:00 and 20:00 WIB** (the fast plan, see *Scope & goals* in `GAME_DESIGN.md`). This file is how it works and the rules the agent follows. The scheduled routine's own prompt only says to follow this file, so change the rules here.

## How it works

```
the owner merges a pull request or comments on one  →  the agent starts at once (GitHub triggers)
the agent builds as many iterations as it safely can (a batch)
   →  one pull request with a review list, one section per iteration, + preview link
the owner reviews (reminders at 12:00 and 20:00 WIB): merge, or comment
   →  comments: the agent fixes them on its next run; merge: the next batch starts
backup runs at 12:30, 20:30 and 02:30 WIB catch anything the trigger missed
```

| Piece | Where | What it does |
|---|---|---|
| **CI** | `.github/workflows/ci.yml` | On every pull request and every push to `main`: type-check, tests, build. A red ❌ means something is broken. |
| **Live game** | `.github/workflows/pages.yml` | Every push to `main` publishes the game to GitHub Pages: <https://neinstat.github.io/query-truck-game/> |
| **PR preview** | `.github/workflows/pr-preview.yml` | Every pull request is published under `/pr-preview/pr-N/` and the link is commented on the pull request. It is removed when the pull request closes. |
| **Agent** | a Claude Code routine (cloud): starts when a pull request is merged or closed, when someone comments or reviews, and at 12:30, 20:30 and 02:30 WIB | Builds the next batch of iterations and opens one pull request. Never merges. |
| **Reminders** | scheduled tasks in the owner's Claude desktop app, 12:00 and 20:00 | Tell the owner what is waiting for review and whether the timeline holds. |

Previews and the live game share one website, so they **share saved progress** in the browser. To test from a clean start, open the preview with `?dev`, press F2 and use *Reset all progress* (it asks first).

## For the owner: reviewing a pull request

1. Open the pull request when **the one review notification** comes from Claude on your phone ("Query Truck siap direview…"). If a review is forgotten for 4+ hours, the 12:00 / 20:00 check nudges you once. GitHub's own notifications are turned down to failures and mentions, so they stay quiet (see *Quiet GitHub* below).
2. Read the **Review list** at the top: one line per iteration in this batch.
3. Click the preview link in the bot's comment and go through each iteration's **Try it** steps.
4. All right: **Merge pull request** — the next batch starts by itself. Something to change: write a comment that names the iteration ("6.3: …"; Indonesian is fine), then click **Comment**. The agent starts on it right away. Several things wrong: one comment with a list is best.
5. Never use **Close pull request** unless you want to throw the whole batch away.

## For the agent: the rules for every run

One run = one unit of work, in this order of priority:

1. **Someone else is working.** If an open **draft** pull request on a `night/` branch got a commit in the last 3 hours, another run is building it: stop at once. If it is older, that run died: check out its branch and carry on with it (step 3).
2. **Feedback first.** If an open `night/` pull request has comments or change requests from the owner that are not answered yet, work on that pull request only: first **convert it to a draft** (`gh pr ready --undo`, or the GitHub tools) so other runs leave it alone, then check out its branch, make the changes, push, reply to each comment saying what changed (replies to the owner may be in Indonesian), mark it **ready for review** again, and stop.
   Comments and reviews start a run too, including your own replies and the preview bot's comments; those find nothing to do and stop at once. That is expected.
3. **Waiting for review.** If a `night/` pull request is open, ready for review and has no new feedback, only fix it if its CI is red; otherwise stop at once (this is normal and cheap).
4. **A batch closed without merging.** If the last closed `night/` pull request was closed without merging, read its comments: build only what the owner still wants, the way they asked. If it gives no reason, stop and say so.
5. **Next batch.** Otherwise build the next batch (below).

### Building a batch

The owner wants **real progress every day**: not one small iteration and a wait, but as much as can be built well in one run.

- Start from the latest `main`. Read `.claude/CLAUDE.md`, the whole of `GAME_DESIGN.md`, and this file first. Follow `.claude/CLAUDE.md` in everything (English repo, EN-first game text with `id` translations, the SQL core / game world split, original art, every query ending with `;`).
- **Claim the work first:** create the branch `night/<first iteration>` (e.g. `night/6.2`), make an empty commit `Start batch from 6.2`, push it, and open a **draft** pull request titled `6.2… — building`. This stops another run from building the same thing.
- Take the open iterations of the current phase plan in `GAME_DESIGN.md` §12 **in order** (skip ✅ and 👤). When the current phase only has 👤 iterations left, the next phase may start in the same batch.
- Build them one after another. **After each iteration:** `npm run typecheck`, `npm test` and `npm run build` must pass, then commit it as its own commit (`6.3 — <name>`), mark it ✅ with a short **"6.x as built"** note in `GAME_DESIGN.md`, and push.
- **Keep going while it is safe.** Stop starting new iterations when any of these is true: about **5 iterations** are in the batch; about **2 hours** of work have gone by; the next iteration is **large** (it changes many systems, needs a lot of new design, or would make the review hard — then it goes first in the next batch, alone); the next one is 👤; or an iteration cannot be made to pass its checks (then reset that iteration's changes, note it in the pull request, and stop). A light iteration can always join; a large one may be the only one in its batch.
- If an iteration is too big for one run, build a solid first part, split the row (6.2 → 6.2a ✅ + 6.2b) and say so in the pull request.
- Make design decisions yourself, the way the existing design does, and write them into `GAME_DESIGN.md`. Add tests for new logic, in the style of the existing tests (every template variant is solvable, Indonesian text has the same shape…). If a headless browser is available, load the built game and check that it starts with no console errors; if not, say so.
- **Finish the pull request:** rename the title to `6.2–6.5 — <short names>`, write the description below, and mark it ready for review (`gh pr ready`, or the GitHub tools). The branch name may stay `night/<first iteration>`.
- Commits and the pull request in English, small and clear. **No `Co-Authored-By` line and no Claude or "Generated with" attribution** anywhere. This includes the `_Generated by Claude Code_` footer that may be added to pull request descriptions: check the body after writing it and remove any such footer.
- Description:
  - **Review list** — a checklist at the top, one line per iteration: `- [ ] 6.3 — Backstory and difficulty: <one line on what to check>`.
  - Then one section per iteration with **What's new** (plain words, for a player), **Try it** (steps in the preview, e.g. "open with `?dev`, F2 → *⏭ Skip to the next day* five times"), **Look at** (what most needs the owner's eye) and **Decisions I made**.
  - **Not done / checked** at the end.
- Never merge, never push to `main`, never force-push a branch that is not your own `night/` branch, never change repository settings or secrets.

### Notifying the owner

The owner wants **one kind of sound: "it's time to review"**. Everything else stays silent (owner, 24 Nov 2026).

- Send **one** push notification (the `PushNotification` tool, under 200 characters, plain text, in Indonesian) only when:
  1. a batch pull request has just been **marked ready for review**;
  2. the owner's **requested changes are done** and pushed;
  3. you are **blocked** and only the owner can fix it (e.g. no write access).
- **Never** notify when a run starts, finds nothing to do, waits for review, opens the draft, or fixes CI by itself.
- Make it **meaningful**: what the player will notice, how big the review is, and the one thing to look at first. Shape: `Query Truck siap direview (PR #N): <what's new in player words>. <n> iterasi, ±<m> menit. Cek dulu: <the riskiest thing>.` For example: `Query Truck siap direview (PR #3): pemain baru sekarang mulai dari minggu 1 pakai kartu kata, plus pilih level. 3 iterasi, ±15 menit. Cek dulu: pilihan level.` For changes done: `Revisi PR #3 selesai: <what changed>. Cek lagi <iteration>.`
- Put the same plain-words summary as the first line of the pull request description, above the Review list.

### Quiet GitHub (for the owner)

Claude sends the one notification that matters, so GitHub can stay quiet (24 Nov 2026):

- Repository **Watch** → **Participating and @mentions** (not *All Activity*).
- github.com/settings/notifications → **Actions** → only **failed workflows** (or off), and turn off email for anything you don't read.
- GitHub mobile app → Settings → Notifications: keep push only for **Direct mentions** and **Review requested**.
