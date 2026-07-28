> **⚠ START AT `RESUME-HERE.md` INSTEAD.** That file is the live entry point and holds the
> current state, the last thing he said, and what he is waiting on. This document is the
> deeper history behind it — read it second, for the reasoning.

# HANDOFF — BURN THE BOATS · THE GOAL SYSTEM

**Written 2026-07-26, end of session.** Read this top to bottom before touching anything. It is the
single place that knows where we are.

---

## 0 · SAY THIS TO PICK UP

> **"Continue the Burn the Boats goal system — read HANDOFF-GOALS.md first."**

---

## 1 · WHAT THIS PROJECT IS

A single-file PWA that is Jasper's daily operating system for a **110-weekday run, Mon 2026-07-27 →
Fri 2026-12-25.** (Extended from Dec 1 on his call, 2026-07-26 — see §7 and §11.2.) Installed on his
iPhone home screen. Four tabs: **Today · Goals · Bank · Record.**

- **Live:** https://jasper4-web.github.io/shared-pages/burn-the-boats/
- **Everything we've built (index):** https://jasper4-web.github.io/shared-pages/burn-the-boats/work.html
- **Source:** `~/Documents/burn-the-boats/index.html` (single file, ~180KB)
- **Deploy target:** the `jasper4-web/shared-pages` repo, folder `burn-the-boats/`
- **Who he is:** `PROFILE.md` — read it, it is the source of truth for anything about him

---

## 2 · THE RULES THAT ARE NOT NEGOTIABLE

1. **A change is not done until it is LIVE and verified.** Never ask "want me to deploy?" He reviews
   on his phone; a local edit is an invisible edit. He has told me this angrily. See
   `~/.claude/.../memory/deploy_every_change.md`.
2. **Bump `const CACHE` in `sw.js` every single deploy.** Currently **btb-v9**. Miss it and his
   installed app serves the old copy and the fix looks like it did nothing.
3. **Verify the LIVE url, not the local file.** Poll it — GitHub Pages takes ~30–40s. Then actually
   run the page and look at a screenshot.
4. **Never render a wall of failure.** His stated failure mode: when behind, he stops opening the app.
   Every design decision is subordinate to this.
5. **He plugs in his own goals.** Do not author his content. Build the machine.
6. **Craft floor:** no text under 11px · every tap target ≥44px · no horizontal overflow at 390px ·
   nothing shifts between states.

---

## 3 · WHERE WE ARE RIGHT NOW

### Shipped and live in the app

| | Status |
|---|---|
| Sabbath screen can be dismissed | **live** — the button was a no-op; `render()` re-added it in the same tick |
| "Push" tab renamed **Goals** | **live** (route id is still `push` internally, on purpose) |
| **Block knows its goal** — `THIS BLOCK IS FOR` on the live block card | **live** |
| **XP attributed** — `award(key,n,label,goalId)` → `S.xpByGoal` | **live** |
| **Vault shows "What bought this shelf"** by area | **live** |
| Goal defaults from the week's business theme (so it works with zero setup) | **live** |
| Goals page: crumb bar no longer covers content; 0 sub-11px; all taps ≥44 | **live** |

**Stress tested:** 6 phone widths (375→440) × 5 day/time states × 4 views × 3 Goals states × top and
bottom scroll = **360 checks, 0 failures.** Harness: `scratchpad/stress.js`.

### Built, published as design, NOT in the app

All on `work.html`:

- **`rend-goal-builder.html`** — a *working* prototype of user-authored areas/dates/goals/commitments,
  saves to localStorage. **He has been asked to put his real goals in it and has not reported back.**
- **`rend-goals-system.html`** — 12 screens of the proposed system
- **`rend-one-machine.html`** — "call ten owners" traced end to end, 8 steps + the weekly challenge
- **`docs/goals-audit.html`** · **`docs/goals-structure-plan.html`** · **`docs/goals-mentor-review.html`**

---

## 4 · WHAT WE ARE ACTUALLY TRYING TO BUILD

The app's goal model is **hardcoded** and that is the whole problem:

```js
S.december = { WORK:{...}, CAPITAL:{...}, BODY:{...}, FAITH:{...}, MIND:{...}, PEOPLE:{...} }
LANDMARKS  = computed in code from weeks 6/10/14/18
goals()    = returns a fixed array with id:'sano', id:'trade', id:'edible', id:'personal'
```

He cannot add a fifth business. He cannot add a two-month horizon. Every change is a code change.
**He wants to plug his own goals in and add/change/edit freely.**

### The target model

```
areas      id · name · colour · rank · quotas[] · archived      (never end)
horizons   id · label · date                                    (just named dates)
goals      id · areaId · horizonId? · parentId?
           title · kind(outcome|learning|habit)
           evidence? · obstacle? · lead{name,target}?
           wig · rank · state(active|parked|done|dropped) · history[]
commits    id · goalId · text · day · block · done
```

**The decision the whole thing turns on:** a horizon is an **attribute (a date)**, not a level in a
hierarchy. That is what makes "monthly, two-month, December, anything" data instead of code.
(Linear does exactly this — cycles cross the hierarchy rather than being part of it.)

### Other decisions already made

- **Three levels max** — Area → Goal → Commitment, plus an *optional* `parentId` for laddering that is
  **navigational only, never computed.** (Notion caps rollups at one hop; EOS says dated pictures.)
- **Areas ≠ Goals.** Areas never end and carry ongoing weekly standards. Goals end and carry evidence.
- **Editing stays free, but easing is recorded.** Harden = silent and instant. Ease (lower a target,
  push a date, park) = instant but leaves a one-line trail on the goal: *"target 12 → 8 · day 34"*.
  Adapted from Beeminder's akrasia horizon. **Nothing ever zeroes a counter.**
- **Goals do NOT auto-roll.** At each horizon turn: **carry / change / park / drop**, one at a time.
  Friction is the feature (bullet-journal migration).
- **Per-altitude cadence.** December goals are touched *monthly*, never in the weekly ritual. The
  Goals tab is **not a daily surface** — the block on Today is.

---

## 5 · THE MENTOR'S SEVEN OBJECTIONS — how many are fixed

He read these and said "I agree with the mentor let's do it."

| # | Objection | Status |
|---|---|---|
| 1 | Two machines bolted together — nothing paid XP for goal progress | **FIXED & LIVE** |
| 2 | The commitment and the block are the same object drawn twice | **FIXED & LIVE** (the block card now shows its goal) |
| 3 | Capped the wrong unit — 20 blocks capped, 9 live goals uncapped | **open** |
| 4 | Confidence collected and never used | **open** |
| 5 | Three mechanisms for recurring behaviour (habits / standards / vices) | **open** |
| 6 | Nothing says what dies when the week is short | **open** |
| 7 | The month turn is the best screen and it's buried | **open** |

---

## 6 · NEXT STEPS, IN ORDER

1. ~~**Make boosts user-authored + a suggestion pool.**~~ ✅ **DONE & LIVE 2026-07-26.** See §11.
2. **Migrate the goal model** — areas/horizons/goals as data. Write to a **new storage key**, keep the
   old one untouched, one-tap revert. Nothing destroyed until he says the shape is right.
3. **Typed commitments + the Friday ritual** (close out → confidence → next week pre-filled).
4. Collapse habits/standards/vices into one (recommend: **standards on an Area**, vices are standards
   with an inverted target).
5. Cap goals, not just blocks. Give confidence one job (two drops → early migration prompt).
6. Surface the month turn properly.

---

## 7 · HIS ANSWERS — given 2026-07-26

**The governing answer, in his words:** *"build a fluid system to where you can kind of customize it
in your own manners, but in consideration."* Read that as the constraint on every remaining decision:
**nothing is ironclad, everything is a setting — but the settings have guardrails.** Where he says
"it depends," the correct build is a control, not a default.

| # | Question | His answer | What it means for the build |
|---|---|---|---|
| 1 | Easing: visible trail or hard 7-day delay? | **Both.** "both options would be cool" | Per-goal setting. Trail is the default; the delay is opt-in armour he can switch on for a goal he knows he'll wobble on. Not either/or. |
| 2 | Do horizons run past Dec 1? | **Yes — to Dec 25.** "then once we get there, and maybe in like 3–4 weeks, we can worry about something else" | ✅ **DONE & LIVE.** Run is now 110 weekdays. Treat Dec 25 as a checkpoint he re-decides at, not a wall. |
| 3 | How many areas? | **Variable.** "more or less depending on what I have that week" | Area count is data, no cap either way. "By Area" must collapse gracefully at 3 and at 10. Areas can also be quiet for a week without being deleted. |
| 4 | Should an Area carry a weekly standard? | **Optional.** "they can carry weekly standards. They cannot. It just depends." | A standard is a nullable field on an Area, not a required one. An Area with no standard must look intentional, not unfinished. |
| 5 | Lead measure — 50 calls/day or 12 conversations/week? | **still unanswered** | Blocks costing the ladder properly. Ask again when the goal model lands — it will be concrete then. |
| 6 | Has he tried `rend-goal-builder.html`? | **still unanswered** | The whole model rests on this test. |

### The design rule this generates

He is telling us he does not know his own shape yet and does not want to be asked to commit to one.
So: **structure is per-week and re-arrangeable; the economy is not.** Anything about *what he is
working on* bends. Anything that decides *what something is worth* holds. The boost ceilings are the
first instance of that rule and the pattern to copy.

---

## 8 · KNOWN PROBLEMS AND TRAPS

- **The Bank tab is the round-4 concept**, not the finished `rend-bank-vault.html` build. The bullion
  shelf, key board, deposit boxes and register are **not** merged.
- **`claim()` deletes a reward instead of recording it** — `r.done=1` and nothing else. No history is
  possible until `r.claimedOn = dayNo()` exists. Every design depends on this.
- **Rewards are one-shot** for all 91 days. Almost certainly not what he meant.
- **`S.privileges` is a bare integer** with no way to spend one.
- **`dailyXp()` uses a lifetime average**, so every "~N days away" drifts optimistic. Wants a trailing
  7-day mean.
- **The Vault's bullion rack tops out at 10 bars = 5,000 XP.** By November he will carry 4–5× that and
  the shelf will read "full" for two months. Needs a second unit (ten bars → one crate).
- **The XP ladder in `S.rewards` is still the old costs** (1200/1500/2000/2500). The costed ladder is
  900 / 1,600 / 2,400 / 7,000 / 22,000 — see `docs/goals-structure-plan.html`.
- **`index.html` is nominally the GM's file** per the crew brief. He has asked me directly to edit it,
  which overrides that. Snapshots exist: `index.html.bak-*`.
- **Only `.tap` chips get a 44px box** in `#pushBody`. Any new chip that *does* something must get
  `class="chip tap"` or it ships at 26px.

---

## 9 · HOW TO VERIFY ANYTHING (the ritual that caught the real bugs)

```bash
# 1 · lint
node ~/build-arsenal/bin/arsenal-lint.js index.html

# 2 · the stress harness — 360 checks
cd <scratchpad>; node stress.js                       # local
node stress.js "https://jasper4-web.github.io/shared-pages/burn-the-boats/index.html"
```

`stress.js` sweeps **6 phone widths × 5 clocks × 4 views × 3 Goals states × top/bottom scroll** and
flags: horizontal overflow · content left unreachable under a bottom-anchored overlay · text under
11px · tap targets under 44px · JS errors. It fakes the clock with `evaluateOnNewDocument` so a
Monday morning can be tested on a Sunday, and clears localStorage so every run is a virgin install.

**Two lessons it taught, the hard way:**
- **Test at 430 and 440.** His phone is ~440 CSS px. I had only ever tested 390 and missed the bug he
  screenshotted.
- **A feature with no default is invisible.** I shipped the goal↔block link with `week.goals` empty,
  so it rendered nothing and he correctly said "it looks the same." Anything new needs a sensible
  default or it does not exist.

---

## 10 · WHAT I GOT WRONG THIS SESSION

Worth reading so it isn't repeated.

1. **Said "verified" when I had only verified the code was on GitHub**, not that he would see anything.
   Two different claims. Only the second one matters to him.
2. **Shipped a feature with no visible entry point** (see above).
3. **Authored his goals for four rounds** before he corrected me: build the machine, not the content.
4. **Drifted into refining my own test harness** instead of shipping the fixes it had already found —
   which is why this handoff exists. The fixes sat un-deployed while I polished the detector.

---

## 11 · SESSION 2026-07-26 (afternoon) — WHAT SHIPPED

Both changes are **live and verified on the public URL**, `sw.js` cache **btb-v8 → btb-v9**.
Commit `70608a4` on `jasper4-web/shared-pages`.

### 11.1 · Boosts are his now (next-step #1, closed)

`const BOOSTS=[...]` is gone. The list is `S.boostDefs` — add, rename, re-price, re-time, archive.

**Three sizes, and the ceiling is the whole point.**

| size | range | reads as | privilege token? |
|---|---|---|---|
| `gesture` — "Small act" | **5–30 XP** | minutes; costs attention not time | no |
| `session` — "A session" | **40–120 XP** | an hour or two of an evening | no |
| `event` — "A real day" | **130–250 XP** | half a day or more | **yes, +1** |

The four old hardcoded boosts seed the list at their exact old values (network 250 / golf 150 /
read 60 / money 90) so nothing he already knew changed. `read` and `money` moved from paying a
privilege token to not paying one — at once a day that was 91 tokens over the run, for a bare
integer with nothing to spend it on (§8).

- `boostClamp()` is the **single** choke point — the composer, the suggestion pool and any future
  import all pass through it. A 5000 typed into a `gesture` does not silently save as 30: the
  composer **refuses, corrects the field and says why**. (Silently rewriting his number was the
  first version and it was wrong.)
- `repeat`: `day` | `week` | `any`. Weekly is Monday-based, so a Friday tap still reads "done
  this week" on Saturday. `any` can pay more than once in a day.
- **Nothing is ever deleted.** `dropBoost()` archives; the log keeps pointing at it.
- **XP never goes backwards** — untapping a boost removes the log entry and keeps the XP, exactly
  as `tapWin()` does.
- Migration `v4 → v5` carries the old bare `S.boosts` `{k,date}` log onto the new defs and deletes
  the old key. Tested against a synthetic v4 save.

**The Today card** (`renderBoostCard`) — one card, small sizes only, violet not gold, sitting under
the live block. Three states and **none of them is failure**: an open offer, a done tick ("Done. All
of it. Nothing owed here."), or — if he has written no gestures yet — a dashed **invitation** that
opens the composer. That last state exists because of §10.2: a feature with no default is invisible,
and all four seeded boosts are session/event, so without it the card would render nothing on day one.
It rotates by `dayNo()` so one boost never squats on the card.

**The suggestion pool** is eight generic acts that *prefill* the composer. Expanded the first time
(nothing of his own to copy), folded behind a button after. They are starting points, not his
content — rule §2.5 still holds.

### 11.2 · The run goes to Dec 25 (his answer to open question #2)

`RUN_END '2026-12-01' → '2026-12-26'` (the constant is **exclusive**; last counted weekday is Fri
Dec 25). **91 → 110 weekdays.**

Everything that used to be a written-down date now derives:
- `RUN_LAST` / `END_LABEL` / `END_LABEL_U` — every "DEC 1" on the furnace, the Goals header, the
  spine horizon and the end station reads these. Moving the finish line again is one character.
- `LANDMARKS` was the literal weeks `[6,10,14,18]`, which only made sense for an 18-week run —
  stretching to Christmas would have left the last checkpoint six weeks from the finish. Now
  `[.27,.45,.64,.82]` of `TOTAL_WEEKS` → **weeks 6 · 10 · 15 · 19** (Aug 31 · Sep 28 · Nov 2 ·
  Nov 30). Indices stay 0–3, so stored milestones are untouched.
- **The OVR curve re-tuned itself** — progress is `prog / TOTAL_DAYS`, so 99 still lands on the last
  day of the run. The cost: the same work now climbs **~17% slower per day**. This was the right
  trade (99 on Dec 1 with a three-week tail of nothing left to climb is worse), but it is a real
  change to how the app *feels* daily and he has not seen a week of it yet. **Watch for him saying
  the needle isn't moving.**

### 11.3 · Two latent craft bugs found and fixed

- **`.chip` had no background**, so every `<button class="chip">` inherited the browser's white
  ButtonFace. On a black app. It began life as a `<span>`, which is why nobody caught it.
- **`.chip.tap` was scoped to `#pushBody`** — exactly the trap logged in §8. Every tappable chip
  built anywhere else shipped at 26px. Now global.

### 11.4 · Verification

- `arsenal-lint` clean
- **32/32** new boost tests (`scratchpad/boosts.js`) — economy caps, the refusal path, dedupe,
  weekly-vs-daily windows, archiving, v4→v5 migration, privilege rules, JS errors
- **360/360** stress checks, run **against the live URL**, not the local file
- Screenshots read at 440px: Today card, Bank list, composer, Goals header

### 11.5 · What I owe him next

- **Next-step #2, the goal model** — and §7 now says how: structure bends per-week, the economy
  does not. Easing gets **both** mechanisms (trail default, hard delay opt-in per goal). Areas are
  uncapped and their weekly standard is nullable.
- Still unanswered: **the lead-measure number** (50 calls/day vs 12 conversations/week) and
  **whether he has tried `rend-goal-builder.html`**.

---

## 12 · THE GOAL MODEL — DECISIONS LOCKED 2026-07-26 (evening)

Six owner decisions, taken after he was shown the actual code. **Do not re-open these without him.**

| # | Decision | His call |
|---|---|---|
| 1 | Which rendition is the standard for the Goals page | **`rend-goals-system.html`** — the 13-screen design (13:35). Not one-machine (that is the argument, not the screen), not the builder alone. |
| 2 | What is an **Area** | **The projects layer only.** Areas replace SANO/TRADING/LA EDIBLE/PERSONAL. **The 6 DOMAINS and the radar/OVR are NOT touched.** Each area points at one domain so blocks still credit the right slice. |
| 3 | The PERSONAL knot | **Split into four areas** — Body · Faith · Mind · People. Each already matches a radar domain. |
| 4 | Day-1 state | **Empty, plus a one-tap import** of what is already in the app. Generic because it is an *import*, not a hardcode. |
| 5 | Take-over mechanism | **Same link. New storage key. Old key untouched. One-tap revert.** Explicitly NOT a second URL — a new origin is a second empty PWA and would split the run. |
| 6 | Record page bugs (red 0%, raw ids) | **Deferred until after the goal work.** His words: "we have a few other things that we need to tidy up." |

### 12.1 · The standing instruction that governs the whole build

> *"We should have a system that can handle anyone putting their goals in. The system shouldn't be
> dependent on working just off my goals."*

**He offered his real goals and I declined — correctly.** Fitting the model to his six areas would overfit
it. He additionally requires, before the structure is handed to him:

> *"It should be tested with 10 to 20 different personality types of goals, small to big, throughout
> this whole rendition — that way you actually know it's gonna work and it's been proven, you're not
> guessing on this machine."*

**That is a gate, not a nice-to-have.** 10–20 synthetic profiles driven through all 13 screens.

### 12.2 · Why the two-structure problem was the thing worth catching

The app does not have four goals. It has **two overlapping structures that do not line up**:

- **DOMAINS (6)** — `WORK · CAPITAL · BODY · FAITH · MIND · PEOPLE`. Drive the radar and OVR. **Every
  time block is tagged to one** (`b1→WORK`, `gym→BODY`, `bible→FAITH`, `life→PEOPLE`).
- **goals() (4)** — `SANO · TRADING · LA EDIBLE · PERSONAL`. Drive the spine, the block↔goal line and
  `S.xpByGoal`.

And the wiring is broken in two places:
- **LA EDIBLE reads nothing** — no december entry, no domain, no OVR path. That is why it renders dashed.
- **PERSONAL reads `december.BODY`** but its subtitle says "Body · faith · people · mind". Four domains
  in one goal, scored by one number (185 lbs).

Guessing that "Area" meant the DOMAINS would have meant rebuilding the radar, the OVR curve and all 20
block tags — the scoring engine. Decision #2 above avoids that entirely.

### 12.3 · A real bug the 10–20 test already justified

`at:177 → target:185`. **The app assumes progress goes UP.** Anyone tracking weight loss, debt paydown
or cutting hours renders every progress bar backwards. Goals need a `direction` field. Found in five
minutes of looking *because* he insisted on diverse profiles — exactly his point.

---

## 13 · THE PRODUCT CRITIQUE + THE MODEL — 2026-07-26 (night)

He asked for a full product/UX stress-test **before** any code, explicitly inviting me to overrule him.
That critique is summarised here because its conclusions changed the design.

### 13.1 · Three structural problems found in `rend-goals-system.html`

**A · The Friday ritual was a single point of failure.** Screens 6–8 gated next week's draft, the
confidence trend AND the migration. The weekly review is the most-abandoned ritual in the industry
(GTD, EOS L10, 4DX WIG sessions all collapse ~6 weeks in). Skipping it meant Monday arrived blank —
the exact thing screen 8 promised never happens. Screen 6 also asked him to **re-tap what the app had
already tracked all week**: double entry, and the fastest way to teach a user the system isn't watching.
→ **Fixed:** the week closes itself; the ritual became an optional richer *editor* of the same draft.
**One system, two doors.** He chose "both" — he genuinely likes reviewing his week — and this is the
version where that preference costs no fragility.

**B · The design demoed its own failure state as the happy path.** Every header read `9 LIVE · 5 AREAS`
against `14 OF 20` blocks — 1.5 blocks per goal per week. 4DX's finding across 1,500+ teams: 1–2 WIGs
≈ 80% achieved, 4–10 WIGs ≈ **zero**. The `wig` field rendered as a small grey tag; capacity — the only
honest scarcity in the whole app — was buried on the third tab.
→ **Fixed:** capacity is a permanent line at the top, the WIG *is* the top of the screen, and a
**soft cap** argues at ~6 goals without ever blocking a save (his call).

**C · The two most-used screens were not in the rendition.** All 13 screens were Goals-tab screens.
The **daily surface** (the block card he sees 110 times) and the **return-from-behind path** were both
absent — and the previous app died precisely at the second one. Both now in scope.

### 13.2 · Smaller changes made

- Onboarding no longer teaches a 4-object taxonomy before letting him type. **If a model needs a
  legend, it is leaking** (Notion's failure mode). Ask for one goal in plain words.
- `kind` defaults to outcome — nobody can classify a goal before living with it a week.
- **The `habit` kind is deleted.** An area standard IS the habit. Two names for one thing was mentor
  objection #5.
- **Confidence now has exactly one job** (objection #4): three states, not 1–5; only near-horizon
  goals; **two consecutive drops pulls a goal into migration EARLY**, which also drains the
  end-of-horizon pile-up.
- Obstacle/evidence asked at the **first weekly close**, not at creation — highest-value intervention
  in the literature (WOOP/Gollwitzer), worst possible moment to ask for it.
- **Import brings in AREAS only**, not goals. If he taps import and gets everything, he never
  exercises the authoring path — the one thing no human has tested.

### 13.3 · WHAT IS BUILT AND PROVEN — `model/`

`model/model.js` — the four objects (AREA · HORIZON · GOAL · COMMIT) under key **`btb4`**.
`btb3` is never read or written by it. **Nothing in `index.html` changed**, so the app he opens on
day 1 is exactly the one he already has. Deliberate.

`model/profiles.js` — **the proof gate he demanded.** 16 profiles × 20 screens = **320 checks, 0
failures.** Re-run with `cd ~/Documents/burn-the-boats/model && node profiles.js`.

Profiles: minimalist (1 goal) · balanced (3 areas) · sprawler (7) · maximalist (12 areas/30 goals) ·
day one (empty) · one-area dumping ground (40 goals) · standards-only · undated · **decreasing
targets** · extreme numbers · long text · all-done · **everything overdue** · sprinter (2-week
horizons) · the wreckage (parked/dropped/archived with history) · emoji + non-Latin.

**Three results worth keeping:**

| | |
|---|---|
| **Decreasing targets work.** `212 → 198 → 185 lbs` reads **52%**. The old app would have shown 198/185 = **107%** | storing a `start` baseline fixes both directions with one formula; no `direction` flag needed |
| **Day one is silent.** `blocksEach` null, execution null, cap says nothing | every "no data" path returns **null, never 0** — a 0% is a wall of failure drawn by accident |
| **The pile-up is prevented.** Profile 13: 6 overdue goals, **all 6 drained early** by confidence, **0 arrive at the horizon turn** | this is objection #4 and the migration pile-up solved by the same mechanism |

### 13.4 · The one thing the gate surfaced that the UI still has to answer

Profile 13 returns an **honest 0%** — 4 committed, 0 done. The model is right to say so. But 0% alone
on screen is a wall. The number needs its context beside it ("your confidence has said this for three
weeks — here is what to do"). **That is the recovery screen, and it is not built yet.**

### 13.5 · Next, in order

1. Goals tab UI rendering from `model.js`, behind `btb4` with one-tap revert
2. The week engine + self-closing week + the optional deep review
3. **The daily surface and the recovery path** — the two missing screens
4. Then the deferred Record fixes (red 0%, raw ids `bible`/`convo`/`bed`)

---

## 14 · GOALS v2 IS LIVE — 2026-07-26 (late)

Commit `1b3e75a`. `sw.js` **btb-v9 → btb-v10**. Verified **against the live URL**, not the local file:
**61/61** UI harness · **320/320** model profiles · **360/360** stress.

### 14.1 · How to get to it

Goals tab → scroll to the bottom → **"Open the new Goals"**. Inside, **"Back to the old Goals"**
returns instantly. The switch is `G.meta.active` in `btb4`; **`btb3` is never read or written by any
of this**, so reverting can't lose anything.

### 14.2 · What is actually built

- `GM` namespace + `G` store under `btb4` (`GKEY`). Ported from `model/model.js` — same functions,
  same guarantees, `DOMAIN_KEYS` now read off the live `DOMAINS`.
- **Empty state** asks *"What do you want to be true by Dec 25?"* — one input, plain words. If he has
  no areas it creates one called "Unsorted" so the first sentence is never blocked, and the first
  goal becomes the WIG automatically.
- **Capacity line** — `n goals · 20 deep blocks a week · x each` — first thing on the screen, never
  hidden. `WEEK_BLOCKS` is derived (`WEEKDAY` deep blocks × 5), not typed.
- **The WIG is the screen.** No WIG + >1 goal → it asks which one matters instead of guessing.
- Goals grouped by area; add/edit sheet; areas and dates manager (reorder, archive, delete a date).
- **Import brings AREAS ONLY** — 7 areas (PERSONAL split into Body/Faith/Mind/People) + 5 dates.
  Guarded by `meta.imported` so it cannot run twice.

### 14.3 · Two bugs the SCREENSHOT caught that the tests did not

Both found by rendering it and looking — the lesson from §10 holding up again:

1. **An undated goal rendered TWICE** — once under its area, once in a "No date yet" bucket. Reads as
   the app double-counting. Now every goal has exactly **one home** on the by-area screen; `g2Undated()`
   was deleted rather than left to rot. The date-first cut is a different *view*, not a second copy.
2. **`1 clients`.** The unit is his word and can never be safely singularised. Now `1 of 3 clients · 33%`
   for up-goals and `198 lbs · down to 185 lbs` for down-goals — the unit appears once, on the pair.

### 14.4 · One inconsistency the harness caught

The soft cap argued at **5** goals but the capacity line only went amber at **7** (it used a
`blocks < 3` threshold). Two different numbers for one idea reads as the app changing its mind about
what "too many" means. Both now key off `meta.softCap`.

### 14.5 · A trap for whoever is next

The OLD `renderPush()` declares `const G=goals()` — a **local that shadows the global `G`**. It is
legal (`gOn()` closes over the global) and there is a harness assertion pinning it, but do not add
code to old `renderPush` that expects `G` to be the goal store. Same for `weekFull(G)`.

### 14.6 · Next, in order

1. **The week engine** — commits as day×block, the self-closing week, the optional deep review.
   `GM.commit / capacity / closeWeek / draftWeek` are built and tested but **nothing writes commits
   yet**, so `capacity().committed` is always 0 and the capacity line shows only the goals/blocks maths.
2. **The daily surface** — the block card reading from `GM`, not `S.december`.
3. **The recovery path** — the return after a bad stretch. Still the biggest missing screen.
4. **BY DATE view** + the migration screen (`needsEarly` is wired in the model and shows
   "NEEDS A DECISION" on a row, but there is no migration flow yet).
5. Deferred: Record page red 0% + raw ids (`bible`/`convo`/`bed`).

---

## 15 · EVERYTHING ELSE SHIPPED — 2026-07-26 (late night)

Commit `25b41f4`. `sw.js` **btb-v10 → btb-v11**. Every list item from §14.6 is done.
Verified **against the live URL**: **121/121** full harness · **61/61** goals · **32/32** boosts ·
**320/320** model profiles · **360/360** stress.

All harnesses now live in `model/` so they survive the session:
`node model/profiles.js` (pure model) · `node model/full.js [url]` · `goals2.js` · `boosts.js` · `stress.js`.

### 15.1 · What shipped

**The week engine.** 20 slots — 5 days × 4 deep blocks. A commit IS a block (mentor objection #2).
`day` is an **offset 0–4, not a date**, so carrying work forward is a copy rather than a date rewrite.
**Done is never stored twice** — it is read from the day records the app already keeps, because asking
him to re-tick what the app watched him do all week is double entry.

**The week closes itself.** Next week drafts whether or not he shows up. The review is an *offer*.

**The review.** States what happened; he corrects it. Correcting a row **writes back to the day
record**, or the next `syncCommits` would silently revert him. Confidence is 3 states on ≤5 near-horizon
goals, not 1–5 on nine.

**The return path** — the screen the previous app died without. States what is **still true**; never
counts days missed; never red.

**Migration** — carry / change / park / drop, one at a time. Carry pushes to the next date, leaves a
trail, resets confidence.

**The daily surface** — `goalStrip2()`. An uncommitted block **offers to pick a goal** rather than
rendering nothing (§10.2 again).

**Record fixes** (the deferred ones) — real labels, and the % no longer paints a verdict too early.

### 15.2 · THE BUG WORTH REMEMBERING

`autoCloseWeeks()` was written **inside `renderGoals2()`**. It passed every test I had, because every
test opened the Goals tab. In real use that meant **the close, the carry and the away-clock all
silently depended on him opening one particular screen** — the exact fragility the whole redesign was
meant to remove, reintroduced in the implementation.

It now runs at the top of `render()`, **before the Sabbath early-return**, so even a Sunday-only visit
closes the week.

*A test that only exercises the happy path will confirm your architecture back to you.*

### 15.3 · Three things the SCREENSHOTS caught, not the tests

1. **Three banners stacked on a return.** "Nothing was lost" sat directly above "0%" and a queue of
   decisions — the reassurance undone in the same glance. The return card is now the **only** banner
   shown on a return; the others keep, and the tab badge stays lit.
2. **A passed horizon read "0 days"** (`daysTo` clamps at 0). All four date labels now route through
   one `hzWhen()` that says PASSED.
3. Earlier the same day: a goal rendered **twice**, and `1 clients`.

### 15.4 · A judgement call worth re-examining

The Record %: **nothing due → "—"; fewer than 5 due → the real number with no verdict colour; 5+ →
the verdict.** At 09:20 Monday two blocks have genuinely ended, so 0/2 is *honest* — the problem was
painting a full-week verdict in blood red off a three-hour sample. `EARLY=5` is a guess. If it feels
wrong to him in week one, that constant is the dial.

### 15.5 · What is left

- **Nothing from the original list.** All of §14.6 is shipped.
- Open by nature: he has not yet put his real goals in, and the **lead-measure number**
  (50 calls/day vs 12 conversations/week) is still unanswered.
- Possible next: standards on areas are stored but have no editing UI yet (`a.standards` renders on
  the by-area header count only). Weekly-standard authoring is the obvious next slice.
