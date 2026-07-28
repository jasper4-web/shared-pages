# MENTOR VERDICT — why every change feels like a backtrack

**Written 2026-07-28, Fable review.** Analysis only; no app file modified.
Brief: `agent-briefs/MENTOR-REVIEW-BRIEF.md`. Prior analysis reviewed: `PLANNER-GAP-ANALYSIS.md`.
Every claim below was verified against the source at the stated line, or measured in a
rendered screenshot. Nothing is inherited on trust.

---

## 1 · THE ANSWER, IN PLAIN LANGUAGE

Your app doesn't have a planning problem. It has a **funerals problem.**

Every time a system got rebuilt better — and it happened four times — the old version was
never buried. It's still in the code: still being written to, still being read, still on
screen, in one case still **paying XP**. So the app is carrying four generations of answers
to the same question, and every new feature has to guess which generation to talk to. When
it guesses wrong, something you already fixed breaks somewhere else. That is the backtracking
you feel. It isn't bad luck, and it isn't because the features are hard — it's because
**nothing ever dies here.**

The fix is not another feature. The fix is a week of funerals, then one rule forever:
**a rebuild isn't done until the old version is deleted and a test fails if it comes back.**
After that, the planner you and Claude designed this morning is the right thing to build —
and it will be the first feature in months that lands on clean ground.

---

## 2 · THE PROOF — read off the screen, not the source

### Exhibit A · One card, two truths, right now

Seeded state: one goal ("Spanish an hour a day") committed to Wednesday's Block 1 through
THE WEEK — the current, correct model. Then look at Today
(`M-01-today-two-truths.png`):

> **Block 1 · SANO**
> THIS BLOCK IS FOR **Spanish an hour a day**

The same block, on the same card, claiming to be for two different things at once. The
headline comes from `bizFor()` → `S.week[k].theme` — a model from the era when weeks had
"business themes," seeded with your company names hardcoded (`index.html:1440`) — while the
"THIS BLOCK IS FOR" line reads `G.commits`, the truth. Nobody chose this. It's two
generations rendering side by side because neither was ever retired.

### Exhibit B · You have two weekly planners, and the wrong one pays

Open **Record on a Friday or Saturday** (`M-02-record-second-planner.png`): there is a card
called *"Set next week"* with a dropdown per block, offering exactly
`['SANO','TRADING','LA Edible','Admin + follow-ups']` — hardcoded (`:5253`) — and a button
reading **"Lock next week · +75 XP"** (`:5256`, paying at `:5271`).

Your locked decision (§4 of RESUME-HERE) says: *"The Friday planner is ONE screen and pays
ZERO XP — paying to plan is how the 08:30 composer became something he taps through."*
The new planner (THE WEEK) obeys that rule. The old one is still live, still limited to four
businesses that are now supposed to be free-form goals, and still pays 75 XP every week for
tapping a dropdown. **Both planners run today.** This is the single cleanest demonstration
of the disease.

---

## 3 · THE MECHANISM — why each addition breaks another spot

**"What is Block 1 for at 9am?" currently has five living answers:**

| Gen | Model | Status — all verified live |
|---|---|---|
| 0 | `WEEKDAY` const — b1's name/domain in code (`:1234`) | the only source `shape()` knows |
| 1 | `S.week[k].theme` — business names (`:1440`) | **seeded every new week**, rendered on Today (`:2373,:2435,:2505`), edited + paid on Record (`:5253–5271`) |
| 2 | `S.week[k].tactics` + `d.prio` — tactic text (`:1463–1470`) | read by the Today card, the run screen (`:2958`), notifications (`:3241`) |
| 3 | `d.goals` / `w.goals` — legacy goal maps | **still written on every composer save** (`:2836`) even though stage 1 guarded the read side; still a read-fallback (`:2801`) |
| 4 | `G.commits` — the truth (`:3506`) | what THE WEEK, capacity and scoring actually use |

The composer wipe that destroyed your week (F2-1, the worst bug of the audit) was **exactly
a seam between gen 3 and gen 4** — read from the abandoned maps, write to the new one.
It was not a one-off. It was this table expressing itself.

**The same stratigraphy repeats everywhere I looked:**

- **XP has four doors and no ledger.** `award()` with de-dup keys (`:1450`), `finishRun()`
  with its own inline copy of the same logic (`:2993`), `gainXP()` with **no record at all**
  (`:1447`), and `claim()` spending (`:2705`). Nine ad-hoc key families
  (`blk: win: boost: run: ship: close: setweek: trade: ch: clean:`). This is *why* your
  accidental-tap bug is unfixable today: XP is a running total, not a ledger, so there is
  nothing to reverse. Every undo path in the app says "Removed — XP kept" because that is
  the only thing it *can* say.
- **Content ownership is three different generations at once:** `boostDefs` fully yours,
  `rewards` yours, but `WINS` (`:1259`) and `QUOTAS` (`:1552`) are consts — the exact
  placeholder problem you pushed back on this morning.
- **Dead seeds:** `S.december` still ships in `DEFAULT` (`:1270`) for a model deleted in July.
- **Even the tests have strata:** `goals2.js` fails 3 asserting a WIG card that was
  deliberately replaced; `area.js` crashes on a selector for a strip that changed. The
  harness suite has its own unburied generations.

**Why it happens:** every migration here was additive — "keep the fallback so old saves
work" — and no fallback ever got a kill date. Fallbacks are load-bearing forever. In a
4,700-line single file with no module boundaries, an old model that is still written *is*
the architecture, whatever the comments say.

---

## 4 · WHERE THE PREVIOUS AGENT IS WRONG

The gap analysis is good work and mostly verified. Its central framing is off by one level:

1. **"The day is source code" is an instance, not the root cause.** The root cause is that
   **no old truth is ever retired.** If you make the day data *without the funerals first*,
   you don't fix the disease — you add a **sixth** answer to "what happens at 9am" and
   guarantee a composer-wipe-class bug at larger scale. The build order in
   `PLANNER-GAP-ANALYSIS.md` starts with new stores; it must start with deletions.
2. **"The 25-XP constant is the load-bearing wall holding the economy up" — partly false.**
   The wall already has holes: `gainXP` pays with no record, `finishRun` bypasses `award`,
   and the +75 planner pays for tapping a dropdown. What actually guards the economy is the
   `credited`-key de-dup — which is per-day and survives day-as-data perfectly well.
3. **The transcription guess.** The brief guessed "track my devices" meant "track my days."
   Almost certainly it's **"track my vices"** — the app has a literal vices system
   (dishwasher, smoke). Small, but it changes what the sentence asks for: the vices tracker
   is part of the vision and should be treated as such.
4. **What it missed entirely:** the second planner on Record (Exhibit B — a live violation
   of a locked rule), the still-writing legacy maps at `:2836`, and the four-door XP economy.
   These are the strongest evidence for the owner's complaint, and none appear in it.
5. **What it got right, verified:** the const-day mechanics, the goal-attachment reading of
   THE WEEK, the id couplings, `recount()`'s denominator problem, the "editable default,
   never a blank canvas" caution, and everything on its do-not-build list (drag-and-drop
   grid, calendar sync, template library, multi-track days). The morning's agreed direction
   (palette as memory, make-it-count chips, planning pays nothing, correction window,
   250 cap on extras) also survives review intact.

---

## 5 · TARGET ARCHITECTURE — one question, one owner

The app needs an ownership table, enforced by tests, where **every question has exactly one
answer and everything else is derived or dead:**

| Question | The ONE owner | What must die |
|---|---|---|
| What is this block for? | `G.commits` (+ its `text` for the objective line) | `theme` rendering, `tactics`/`prio` reads, `d.goals`/`w.goals` writes + fallback, the Record planner |
| What does my day look like? | Day plan: defs → templates → per-date overrides (seeded from `WEEKDAY`/`SATURDAY`, same ids) | `shape()`'s hardcoded ternary, `dow()===0` Sabbath |
| What did I live? | `S.days[k]` + its stamp — already right, already sealed | nothing; this is the one clean layer |
| What is XP? | **A ledger**: `S.ledger` entries `{key, xp, date, goalId?}`; balance derived; one door (`award`) | `gainXP`, `finishRun`'s inline copy, the +75 |
| What counts / what are my standards? | `S.winDefs`, `S.quotaDefs` — owned, like `boostDefs` | the `WINS` / `QUOTAS` consts |
| What are my goals? | `G` — already right | `S.december` seed |

**The ledger is what makes your accidental-tap fix real:** while the day is unsealed, an
un-tap deletes the entry and the balance follows; at the seal, entries freeze. One rule,
every surface, and the 250/day extras cap becomes a query on today's entries instead of a
scattered check.

---

## 6 · THE MIGRATION — sequenced, each step shippable, no fresh start

**Phase 0 · THE FUNERALS (do first, ~invisible, each with a kill-test)**
1. Stop writing `d.goals`/`w.goals` (`:2836`); delete the fallback read (`:2801`).
2. Retire the Record planner: delete the "Set next week · +75 XP" card; Fri/Sat Record links
   to THE WEEK instead. (Tell him — it's the one visible change.)
3. Make Today read commits only: `bizFor`/`tacticFor` derive from the committed goal and its
   `text`; delete the `theme` seed and the `{b1:0,b2:1,b3:2,b4:3}` map (`:1464`).
4. Delete `S.december` from `DEFAULT`.
5. Fix or retire `goals2.js`'s three stale asserts and `area.js`'s selector — the test
   strata get buried too.
   **Kill-tests:** grep-level assertions in a new `funeral.js` — "`w.goals` is never written,"
   "no XP without a ledger entry," in the style of stage4's "`.g2wig` is out of the stylesheet."

**Phase 1 · ONE ECONOMY DOOR.** Introduce the ledger; route `finishRun` and `gainXP` through
`award`; ship the correction window app-wide (his bug, fixed by architecture rather than
patched per-screen); enforce the 250/day extras cap at the door.

**Phase 2 · OWNERSHIP.** `WINS`→`S.winDefs`, `QUOTAS`→`S.quotaDefs`, with editors in the
Bank (boostDefs pattern, seeds preserved).

**Phase 3 · DAY AS DATA (invisible).** Defs/templates/overrides seeded from the consts with
the same ids; `shape()` reads the plan; day one renders pixel-identical — assert it.

**Phase 4 · THE PLANNER.** Tap a day in THE WEEK → plan it morning to night; free-type
anything (pays nothing); "make it count" emoji chips + write-your-own; standards progress
("Bible 2 of 3 placed"). Everything agreed this morning — now on ground that holds it.

**Phase 5 · LIFE, NOT JUST DESK.** AWAY run mode + appointments (a class or a client call
currently *cannot be completed at all* — the investigation's finding stands). Then, last,
recurrence — after a week of living with the manual version.

**The standing rule, from Phase 0 forward:** a migration is not done until the old path is
deleted and a harness fails if it returns. That one sentence is the cure for the complaint
that opened this review.

---

## 7 · WHAT NOT TO BUILD

Unchanged from the gap analysis, all endorsed after review: no drag-and-drop calendar grid,
no external calendar sync, no template library (restore-a-lived-week replaces it, free), no
overlapping tracks. And one addition: **no third store.** The plan lives in `S` beside the
record it becomes; `G` stays intentions. Two stores, one boundary, no new key.
