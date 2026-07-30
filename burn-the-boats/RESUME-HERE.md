# RESUME HERE — BURN THE BOATS

**Updated 2026-07-29 (late). Current live build: sw `btb-v46` — Phase 2 verified, and the
two economy holes the verification found are closed.** Saturday is **settled** (he ruled:
it pays XP, not the 99). One number is still a guess: **`WAIT_FREE = 2`** — see below.
Read this top to bottom before
touching anything. It is the single entry point. `HANDOFF-GOALS.md` is the deeper history.

## ⭐ NEWEST — 2026-07-29: THE COFFEE FUNERAL (sw **btb-v41**, all 22 harnesses green vs LIVE)

He opened his list of pre-XP-session changes with a screenshot of the 08:30 sheet:
*"a bit of an overbuild. Instead of doing this while I have my coffee I would rather just
have the option to actually plan tomorrow or another day with one click."* Shipped same day:

- **The "THE COFFEE SHOP / Today's three" composer is BURIED** (openComposer/saveComposer/
  goalPicker/pickGoal/lastPrio/nextMondayISO all deleted, CSS too). Its Saturday twin
  "Setting Monday up" died with it. **Kill-tests: `funeral.js` §7 — funeral is now 47/47.**
- **The coffee block stays** (renamed seed: "Coffee & breakfast · Relax — plan ahead if you
  want"). Its card offers **Plan tomorrow → / Done — carry on**; tapping the block opens ONE
  door sheet (Plan tomorrow → · Another day — open the week · Done). **Done still pays the
  same 25 — the economy did not move** (asserted). Saturday's 'mon' block now offers
  **Set next week →** via the same `planTomorrow()` door.
- **The accusations died:** "No objective set — write it at 8:30a" (now-card) and
  "no objective set" (day list) are gone with their ember CSS. A block's purpose is the
  goal committed when planning; an empty block shows its name, clean.
- **`dayWord(date)` — one formatter** (t12's rule): planning sheets now say **TOMORROW ·
  YOUR NORMAL DAY / "Tomorrow — Thursday."**, the row editor says **TOMORROW · COFFEE &
  BREAKFAST** while he nudges times, the add sheet says **ADD TO TOMORROW**. `funeral.js` §8.
- **Migration v6** (`migrateCoffee`): renames only the untouched seed name (his own rename
  is his), on templates + future dayPlan days only (lived days keep history), scrubs
  `_composeFor/_composeMode`. `boosts.js` migration assertion updated to v6.
- **Harnesses:** stage1's F2-1 composer tests honestly retired → replaced with burial
  guards (stage1 is now **24/24**). Full suite run vs LIVE after deploy: funeral 47 ·
  stage1 24 · planner 41 · dayplan 20 · ledger 24 · owned 20 · qc3 51 · stage2 24 ·
  stage3 30 · stage4 52 · vanish 32 · tiers 28 · extras 33 · boosts 37 · rewardreq 31 ·
  backup 13 · area 11 · goals2 59 · full 126 · phase1 24 · profiles 320 · stress 360 —
  **all green**. Renders screenshotted from LIVE and read.
- **NORTH-STAR gained locked items 17–18** (the composer's death · sheets say the day in words).

**THE SESSION CONTEXT:** he has "a few things I want to change before we knock out the XP
system." This was the first. Phase 5 (the XP session) then OPENED — see below.

## ⭐⭐ 2026-07-29 · THE XP SESSION IS OPEN — the deep dive is DONE, HE DECIDES NEXT

His brief (verbatim on the page): XP is crucial, the 99 is the goal, but deep blocks must not
be the only real earner — chores/habits ("laundry often") should pay XP toward rewards AND
bring the 99 closer. He asked for many options, lived walkthroughs, stress tests. **Delivered,
NOT built:**

**LIVE: https://jasper4-web.github.io/shared-pages/burn-the-boats/renditions/rend-xp-system.html**
(source `renditions/rend-xp-system.html` · sim scripts were scratchpad-only; results on the page)

**Three engine facts unearthed (verified in source, load-bearing for any design):**
1. **The 99 is date-locked** — progress ÷ TOTAL_DAYS; perfection = 99 exactly on Dec 25,
   never sooner. "Sooner" today is impossible; the movable thing is the pace date (line ~2433).
2. **THE STANDARDS are already the life→99 door** (quotas add avail+earned to domains,
   grind-capped at n) — but ⚠ **`domainProgress()` applies TODAY'S quotaDefs to every past
   week**: adding/editing a standard retro-rescores history (adding one mid-run DROPS OVR).
   Forward-only violation, must be fixed regardless of chosen option (effective-from week).
3. **The knock-out ✓ pays 0 XP** (g2Done awards nothing). Strong day ≈445 · ladder 900→22k.

**The five systems, simulated (22 wks × 4 profiles vs the real weekly-ratio engine).**
Final OVRs (status-quo baseline: perfect 98 · real 83 · collapse 80 · grinder 81):
- **S1 Standards Door** (one-tap make-it-a-standard; XP stays money) — KEEP AS PLUMBING.
  Honest, grind-proof, but barely moves the number (83→83). Needs the retro-fix + "standards bend".
- **S2 XP IS the score** — **KILLED BY THE NUMBERS**: every profile incl. the grinder ends 99;
  he owns prices, so the 99 becomes self-priced. Shown dead on the page.
- **S3 The 70/30 day** — **THE STRONG CANDIDATE**: day scores /100, sacred+market=70, life
  fills a capped 30; cumulative ÷110 (never falls). Only option passing all three tests:
  real 83→**89**, collapse 80→**85**, grinder 81→**75**. Biggest build; needs HIS split + cap.
- **S4 Repair credit** (extras patch non-sacred misses, 1/dom/wk) — PARKED: kindest to
  collapse but the grinder pockets the most (+4); thinnest margins.
- **S5 Habit ladder** — KEEP THE GRADUATION ONLY (3 weeks of a chore → offered as a standard
  once); escalating XP culled (values that shrink = a fine).
- Culled in writing: multipliers · paying OVR in XP per domain · fines/negative XP · resetting streaks.

**THE FORK HE MUST CALL (on the page): Door A** — 99 stays date-locked, "sooner" = faster
mid-run climb + pace date healing (RECOMMENDED) — vs **Door B** — early 99 allowed (kills
Dec 25's meaning; honest version = a separate "days ahead of pace" number, not the OVR).

**The money side put to him:** knock-outs priced at creation 25–150 (default 50, via ledger,
refundable) · **250 cap = ADDED pool only** (boosts+invented wins+quick-logs share 250/day;
planned work uncapped → ladder unchanged) · custom band 5–100 stays · fix-first: retro-standard
trap + knock-out through award().

**Recommendation on the page (his to overrule): Door A, two phases** — Phase 1 plumbing
(retro-fix, one-tap standard, graduation, knock-out pricing, added-pool cap, pace date on
Today); Phase 2 the 70/30 day after he locks the split + the 30's cap, with its own harness
+ hostile QC before it ships.

**ROUND 2 (same day): HE ANSWERED — see NORTH-STAR items 19–23 (locked) and the new page:**
**https://jasper4-web.github.io/shared-pages/burn-the-boats/renditions/rend-xp-v2.html**

His verdicts: 70/30 core + habit graduation YES · ranks + level-up moments (one number) ·
the ceiling = his own version (flawless above-and-beyond run may land 99 ~Dec 1, never
earlier; Dec 25 = human target) · knock-outs 40 auto (25–50 nudge) · 250 cap = my call
(added pool) · pace date on Today · repair stays parked · **and the big one: THE VICES
must be a main road to 99** ("you cannot get to 99 if you're falling through on your
vices") — verified in source: vices currently pay +40 XP and the OVR cannot see them at
all. He also wants the app to feel like a video game (Solo Leveling is his reference —
take the System/status-window/quest FEEL, refuse the penalty mechanic), and flagged that
the small-things list is "the magic that kept me from my vices" → needs a real designed
home. **He talks as idea-guy/partner, NOT a builder — read his words as direction, not spec.**

rend-xp-v2.html draws: the sliced day (60 WORK / 25 LIFE / 15 CLEAN + overflow lane to
120, no overflow on slip days, make-up wins back part of the clean slice, streak
landmarks pay, rewards can carry clean-day terms) · the magic list three ways (C1 Shelf
in Bank / C2 Deck on Today ← my pick / C3 Board) · rank roads (R1 Hunter letters /
R2 HIS ROAD: ASHES→EMBER→FLAME→FORGE→STEEL→HIM ← my pick / R3 quiet tiers) · the
level-up moment + status window mocks.

**HE GAVE THE PICKS ("this looks good and I agree with your picks") → NORTH-STAR item 24:**
C2 Deck + C1 Shelf · R2 HIS ROAD (ASHES→EMBER→FLAME→FORGE→STEEL→HIM) · 60/25/15 as drawn.

## ✅ XP SESSION **PHASE 1 SHIPPED** — sw **btb-v42**, 2026-07-29, all 23 harnesses green vs LIVE

- **Forward-only standards** (the retro-trap is dead): quotaDefs carry `spans` (when live)
  + `hist` (what count, when); the engine scores each week by what was true THAT week.
  Every change lands NEXT MONDAY (mid-week changes would dip the number — first law).
  Helpers: `qActiveIn/qNAt/qHistSet/qRetire/qRevive/nextWeekKey`. Pre-fix archived defs
  grandfathered (spans:[]) so no old save re-scores. **Migration v7** (`migrateStandards`).
- **The graduation**: 3 weeks running of a win with no standard → offered ONCE
  (`gradCheck` in tapWin; `S.gradAsked` remembers declines). Accept = standard at his
  count, starts Monday.
- **Knock-outs pay**: `payKnock` — 40 default, `g.worth` nudge 25–50 via chips in the
  goal sheet ("WORTH WHEN YOU KNOCK IT OUT"); through award(), same-day wake refunds,
  sealed keeps, never double-pays (ledger is the guard), anchors pay 0.
- **The added pool**: `ADDED_DAY_CAP=250` shared by boosts + wins (`addedSpentToday`);
  partial pay at the rim; a pooled-out win STILL records (standards/quotas see it) —
  "Counted — today's side pocket is full."
- **The pace date is OUT from behind the door**: `.pace` line inside #ovrPeek, always
  visible ("AT THIS PACE · 99 ON …" / "99 BY DEC 25 — TODAY STARTS THE CLIMB").
- **`model/xp1.js` is new — 30 checks** over all five. boosts.js updated honestly
  (shared-pool reset + v7 assertion). Suite vs LIVE: xp1 30 · funeral 47 · stage1 24 ·
  planner 41 · dayplan 20 · ledger 24 · owned 20 · qc3 51 · stage2 24 · stage3 30 ·
  stage4 52 · vanish 32 · tiers 28 · extras 33 · boosts 37 · rewardreq 31 · backup 13 ·
  area 11 · goals2 59 · full 126 · phase1 24 · profiles 320 · stress 360 — **all green**.
  Renders read: pace line, graduation sheet, worth chips.

## ✅ XP SESSION **PHASE 2 IS VERIFIED AND LIVE** — shipped v43, verified in v44–v46, 2026-07-29 (late)

**The engine is real now.** Phase 2 had been written AND deployed as btb-v43 last session,
but a tool outage killed the test run — so it sat on his phone with **zero tests ever run
on it**. (The section this replaces said "live is still btb-v42 and untouched." That was
already false when it was written: commit `c17f700` shipped v43, and live `index.html` was
byte-identical to local.) Verified now, and **verification found four real defects in the
shipped build** — three of them invisible to all 24 harnesses.

### The four defects the verification found (all fixed, all guarded, all live)

1. **THE DENOMINATOR — Saturday was paying the 99.** `runPoints()` skipped only Sunday, but
   `TOTAL_DAYS` counts the **110 WEEKDAYS**. Saturday's shape holds **one** deep block, so a
   Saturday banked a full above-and-beyond **1.2 — the same as a four-block weekday** —
   against a denominator that never counted it. **Measured: a flawless run reached 99 on
   Nov 9 instead of the locked ~Dec 1.** Fixed with ONE door, `scoresOn(k)`, shared with the
   status window (which had the same filter copy-pasted). A flawless run now lands **Nov 30**
   — the locked ceiling, reproduced to the day. ⚠ **NEEDS HIS RATIFICATION — see below.**
   *Why nothing caught it: every harness skips Saturday when it builds days.*
2. **THE PACE DATE — three surfaces, three formatters.** The peek carried the year; the status
   window and the rank-up moment dropped it, so a projection **four months past the run** read
   as "Apr 19". Worse, the rank-up moment said **"pace holds <that date>"** — affirmative
   language over a miss, on a celebration screen. One `paceFmt()` door now, with `inRun`:
   a celebration only quotes a date when it is **inside** the run, otherwise it just says
   "Day 38 of 110." and celebrates.
3. **`hidden` LOST TO `display:flex`.** `#planTmr` is `.extras-line`, whose class rule outranks
   the UA `[hidden]` rule — so Today carried an **empty 48px bordered card every day until
   17:00** (page 1316 → 1261px). The same trap was armed on `#deckRow` for anyone with no
   wins. `[hidden]{display:none!important}` is the general form of a fix this codebase had
   **already made once**, for a single selector (`.gpick2 .gpk-kids[hidden]`).
4. **The line above THE DECK was lying.** It read *"The small stuff lives in the Bank"* — true
   when the extras had just LEFT Today (the X5 move), a contradiction once THE DECK put that
   exact list one row below it, tappable. It is the quick-log door now: *"Anything else — log it"*.

Plus one caught by **reading the live render**: the projected date wrapped mid-date as
**"Apr / 15 '27"** on the front page. `nowrap`; measured as one line box at 375/390/440.

### ✅ SATURDAY IS SETTLED — he ruled

*"We can stick with the Saturday only gives XP that's fine."* (2026-07-29) — **NORTH-STAR
item 25 is LOCKED.** He declined the alternative (counting Saturdays in `TOTAL_DAYS`,
110 → 131). Do not re-open it.

## 🔥 THEN THE BIGGEST HOLE IN THE ECONOMY — "Waiting on someone" (closed, sw btb-v46)

He said "go ahead with the rest", and the remaining flag turned out to be the worst defect
found in this project so far. **`markWait` was a one-tap path to 99.**

It removed a block from the **denominator** — unlimited and untracked, exactly as the
investigation (§7) described it: *"an unlimited, untracked erase button."* Harmless-ish while
it only hid a row; **once the sliced engine shipped it erased straight into the OVR.**

| the day | scored |
|---|---|
| all six work blocks done | **1.2** (with the overflow bonus) |
| **one block done + five marked "waiting"** | **1.2** — byte-identical, bonus included |
| one block done, nothing marked | 0.5 |

**Marking five waits every weekday reached OVR 99 — the same as a flawless run.** Honest
would have been 74.

**Fixed:** `WAIT_FREE = 2`. The first two waits a day are forgiven (a genuinely blocked
morning is real and the toast's promise should hold); past that the block counts as it was,
and **a day held up by someone else never opens the overflow lane** — "above and beyond"
has to describe a day that actually happened. The toast used to promise *"it won't score
against you"* unconditionally, which past the allowance was a lie worth 0.65 of a day; it
now says which case it is.

**After: flawless 99 · five-waits 77 · honest 74.** Waiting is still kinder than missing —
it just cannot buy the run. Guarded in `xp2.js` §11 (65 checks).

⚠ **THE 2 IS A GUESS I MADE TO CLOSE A LIVE HOLE — his number to set.** One named constant
(`WAIT_FREE`, above `slicesFor`), one edit. **Still open underneath:** waiting is *still
untracked* across the run, and it is still the only way to complete a block that happened
off-screen. The investigation's real fix for that is **AWAY mode**, still unbuilt.

### ✅ THE PEEK GOT ITS LAYOUT PASS (his call to overrule)

Measured at 390px: the label and the pace line each need **252px** and both were being
squeezed into **203px**, because `SEE THE RUN ▸` (106px) sat in the same band — so both
wrapped mid-phrase ("GAP TO / HIM 39", "99 ON / Apr 15 '27"). `#ovrPeek` is a **2-row grid**
now: the number spans both rows, the label owns row 1, the pace owns row 2, and each gets
its full 278px. **Every word of his copy is kept**; the door traded its words for a chevron
(▸ / ▾) with an aria-label. Guarded in `xp1.js` (34 checks — both rows single-line, and the
peek never widens the page).

### Verification, for the record

**24 harnesses green vs the LIVE url (~1,520 checks):** xp1 **34** (was 30) · xp2 **65** (was 43) ·
funeral 52 · stage1 24 · stage2 24 · stage3 30 · stage4 52 · planner 41 · dayplan 20 ·
ledger 24 · owned 20 · extras 33 · boosts 37 · qc3 51 · vanish 32 · tiers 28 · rewardreq 31 ·
backup 13 · area 11 · goals2 59 · full 126 · phase1 24 · profiles 320 · stress 360.
Harness changes were made **honestly**: `xp2.js` gained §9 (the denominator + the ceiling
date) and §10 (the `[hidden]` contract + empty-box sweep on Today); `xp1.js` gained the
no-break date; `boosts.js`'s "one line **to the Bank**" assertion was guarding the copy that
had become a lie, and now asserts the quick-log wording.
Renders read from LIVE at 390px: Today (deck, rank, pace, no blank card), Bank (shelf grid,
`OPENS AT STEEL`), the status window (rank road, three slices, pace with its year), the
rank-up moment. Rank-gated claim verified to **take nothing** (4200 → 4200).

**WHAT PHASE 2 SHIPPED (was "staged", now live and tested):**
- `slicesFor(k)` / `runPoints()` / `preFrac()` / `runFrac()` / new `ovr()` — the sliced day
  (60/25/15, overflow to 120 gated on work-full AND clean, waiting excluded, off/Sunday skipped)
- `S.engineSeam` + migration **v8** (`migrateEngine`: lived saves seam to next Monday; fresh
  = '0000-00-00'); `domainProgress(cutoff)` param (radar untouched, pre-seam share for ovr)
- `logSlip` now stamps `day().slip[vice]`; `clearPenance` heals half (`slipHealed`) — the
  make-up wired to the clean slice
- `RANKS`/`rankIdx`/`rankUpCheck` (+`S.rankSeen`, lazy init — updates never celebrate the
  status quo) + `#rankUp` overlay; rank name in `#ovrPeek`
- rank-gated rewards: `r.rank` + gate FIRST in `claim()` + "OPENS AT X" row + rank chips in
  `editRewardReq` (RWRANK)
- THE DECK `#deckRow`+`renderDeck()` on Today (tapWin door); THE SHELF: `.wins` grid +
  `.shcell` in `winsBankList`; STATUS WINDOW `#cvStatus` in `renderChar` (rank road + slices + pace)
- **Bug found in self-review and fixed: `restoreSave` now runs `migrate()`** (an old backup
  restored without it would re-slice its whole history) — guarded in funeral §9
- `projection()` now reads `runFrac()`

**NEXT — IN ORDER:**
1. **Confirm or change `WAIT_FREE` (currently 2)** — the only guessed number in the engine.
2. **He lives on it.** The engine is the whole scoring model now, and every hole found this
   round was found by *measuring a lived run*, not by reading code. A few real days with his
   own data will say more than another simulation. Watch the pace line and the rank road.
3. **AWAY mode + appointments** — this is now the top build, not just a roadmap item: it is
   the honest answer to the thing `WAIT_FREE` is only capping. §7's finding stands — a deep
   block can only be completed by the timer, so a class, a call or an appointment cannot be
   completed at all, and the design manufactures the lie that `markWait` then tells.
4. Then: recurrence ("every Tuesday") · reminders (needs a push server — parked honestly) ·
   the Record tab rebuilt in his words · make waiting **tracked** across the run.

## ⭐ WHERE WE ARE NOW (end of 2026-07-28, a huge day)

Phases 0–4 of the mentor plan are BUILT AND LIVE (see the phase log below), the planner
was redesigned to a THREE-JUDGE jury pass, and then a night of live use with him drove
seven more shipped rounds (v36→v40):

- **D2 EDITORIAL** is the control voice in every sheet (his pick from `renditions/rend-buttons.html`)
- **Alongside**: a row inside another block's window renders INSIDE that card ("Clean
  house · runs alongside" nested in Market open) — a feature, never a conflict
- **The knock-out ✓** on every working-goal row — his loop: December goals on top, quick
  goals under them, cleared constantly
- **Goal attachment everywhere**: any planned row asks "FOR — which goal does this serve?"
  · sacred Mon–Fri blocks write the REAL commitment (THE WEEK's store — one truth) · other
  rows carry goalId on the plan · the picker is a HIERARCHY (each project a drop-down:
  the project itself or its small goals) · linked small goals knock out from the row
- **The evening door**: from 5pm Today shows "Plan tomorrow →" (Sat: "Set next week →")
- **No military time on screen** (t12 — one door for every displayed clock; model stays 24h)
- **The tab guard**: running in a browser tab shows a kind warning + backup/install steps
  (his "updates keep deleting my goals" was the PRIVATE TAB wiping storage — never deploys)

**HIS SETUP:** he is moving to normal Safari → Add to Home Screen → Restore from Backup.
If he reports lost data, it's a tab-context issue — Backup/Restore is the fix, always.

**NEXT (in order):**
1. **Phase 5 · the XP design session — OWNER-GATED.** He lives one full planned day, hands
   it over (AirDrop the backup file if he wants data-informed pricing), THEN price
   everything together: day worth, custom wins, knocked-out goals, the 250 extras cap.
2. Then: AWAY mode + appointments · recurrence ("every Tuesday") · reminders (needs a push
   server — parked honestly) · the Record tab rebuilt in his words.

Housekeeping 2026-07-29: 19 old `index.html.bak-*` snapshots and 7 design-era html files
moved to `_archive/` (two newest snapshots kept in root). `NORTH-STAR.md` items 9–16 carry
every decision from the live-use night.

> ⭐ **READ `NORTH-STAR.md` FIRST — it outranks this file and every other document.**
> It is the owner's full vision in his own words (Q&A 2026-07-28). Then read
> `MENTOR-VERDICT.md` — the architecture verdict (the "funerals problem") and the phases.

## ✅ PHASES 0–4 ALL BUILT, LIVE AND GREEN (sw **btb-v34**). Phase 5 is OWNER-GATED.

**2026-07-28, one session.** Each phase shipped behind its own QC gate harness, and the
full suite (22 harnesses, ~1,290 checks) ran green against the LIVE url at the end.

| Phase | What | Gate |
|---|---|---|
| 1 · One economy door | `S.ledger`; award() in / refund() out; gainXP + finishRun's inline copy bricked; **every undo returns XP while the day is open, seals at midnight** (his accidental-tap bug, dead everywhere); spends are entries; old save opens with its balance | `ledger.js` 24/24 |
| 2 · Ownership | `WINS`→`S.winDefs`, `QUOTAS`→`S.quotaDefs` (seeds, like boostDefs); Bank editors: rename/re-price/retire/invent wins (5–100 band), THE STANDARDS with tap-to-cycle counts, standards on anything he invents | `owned.js` 20/20 |
| 3 · Day as data | `S.templates.{weekday,saturday}` + `S.dayPlan[date]`; shape(date); pixel-identical day one; forward-only proven under hostile template edits; `seedOwned()` runs at boot AND restore | `dayplan.js` 20/20 |
| 4 · The planner | THE WEEK: THIS/NEXT toggle, **PLAN ▸ doors on days ahead** (today locked by his own rule, Sunday Sabbath, **Saturday joined the week**); the day editor 06:00→bed (deep blocks SACRED, undeletable, survive hostile writes); free-type + emoji presets + memory chips; **★ Make it count**; Back-to-normal / Make-this-my-normal; Sabbath door lands on NEXT week; **the Today widget** (extras line → time-ranked quick-log, refundable) | `planner.js` 33/33 |

### ✅ PHASE 4.1 — the planner REDESIGN, jury-passed (sw **btb-v35**)

He rated the first planner sheets **2/10** and set the bar: **three independent design
agents must call it a vast improvement.** Four rounds of build→shoot→cold-jury:
r1 timeline grammar (7.5/8/7) → r2 unified rails (8/8/7) → **r3 THREE YES at 8/8/8**,
each with the required +4 delta → r4 applied the passing jury's own remaining notes.
What shipped: mono start/end time column + 3px category rules · DEEP/OPEN/ENDS stats ·
dashed **gap pills** ("+ fill this 45m opening") that open the add sheet pre-aimed ·
±15 nudge steppers + duration chip slate (15–120m + a visible *exactly…* slot) in BOTH
sheets · live end-time echo · presets carry default lengths · make-it-count has a real
checkbox above the CTA. Same model, no behavior change; `planner.js` 33/33 throughout.

### ✅ DECIDED — D2 EDITORIAL (he picked it 2026-07-28 night; applied app-wide in sheets, v36)
`renditions/rend-buttons.html` stays as the record of the five directions considered.

**NEXT — PHASE 5, and it starts with HIM, not code:** he lives one real planned day in the
new planner and hands it over; THEN the XP-system design session (his locked sequencing),
then AWAY mode + appointments, then recurrence. **Do not design the economy without him.**

Suite as of btb-v34 (all green vs live): planner 33 · dayplan 20 · owned 20 · ledger 24 ·
funeral 25 · stage1-4 29/24/30/52 · qc3 51 · full 126 · phase1 24 · extras 33 · boosts 37 ·
rewardreq 31 · backup 13 · vanish 32 · tiers 28 · goals2 59 · area 11 · profiles 320 ·
stress 360. Note: the week now has SIX day headers (Saturday) — full.js/stage4.js assert 6.

---

## ✅ PHASE 0 — THE FUNERALS: BUILT, LIVE AND GREEN (sw **btb-v30**, commit `92bf42d`)

He said "go" and it shipped 2026-07-28. Buried, each with a kill-test in **`model/funeral.js`
(25 checks — run it in every future session; it fails if a grave reopens):**

- **`d.goals`/`w.goals`** — composer no longer writes them, fallback read deleted. Commits only.
- **`S.week[].theme`** — block suffix is now the committed goal's AREA. "One card, two truths"
  is dead: commit Spanish → the card says Spanish, never SANO. Uncommitted → no suffix.
- **The Record second planner** ("Set next week · +75 XP") — deleted; Record links to THE WEEK.
- **`S.december` in DEFAULT** — fresh installs inherit no placeholder goals; old saves still
  import theirs (importFromOld reads storage, not the seed).
- **The day rail** — deleted (his call). Deep-work-left survives via `renderTimeLeft()`.
- **The confidence questions** — deleted (his call). **The correction list (g2Flip) survives** —
  it is the only way to fix a mis-recorded day after a week closes.
- **Opened:** the Sabbath screen carries **SET NEXT WEEK ▸** (Sunday is when he plans). Pays 0.

Harness strata buried too: **goals2 59/59** (was 56), **area 11/11** (was crashing),
full 126/126 with the review-questions test inverted. All verified against the LIVE url:
funeral 25 · stage1-4 · full · goals2 · qc3 · stress 360 — green.

**NEXT — PHASE 1 · ONE ECONOMY DOOR:** the XP ledger, route `finishRun`/`gainXP` through
`award()`, and the correction window app-wide (un-tap refunds while the day is open, seals at
close — his accidental-tap bug, fixed by architecture). Then Phase 2 (WINS/QUOTAS → owned
stores), Phase 3 (day as data), Phase 4 (the planner), Phase 5 (XP redesign WITH him).

---

## 0 · WHERE WE ARE — STAGES 1–4 ARE BUILT, LIVE AND GREEN. **Stage 5 is next.**

- **Live:** commit `34c9b4d`, service worker **btb-v29**.
- **Local `index.html` == live `index.html`** — verified by `cmp`, 317,637 bytes both sides.
- Pre-stage-4 snapshot: `index.html.bak-stage4-130541`.

### Verified against the LIVE url (2026-07-28, after the stage-4 deploy)

| harness | result |
|---|---|
| `stage4.js` | **52/52** — NEW. The aesthetics audit, guarded |
| `stage1.js` | **29/29** |
| `stage2.js` | **24/24** |
| `stage3.js` | **30/30** |
| `full.js` | **126/126** |
| `tiers.js` · `vanish.js` · `qc3.js` | 28/28 · 32/32 · 51/51 |
| `phase1` · `boosts` · `extras` · `rewardreq` · `backup` | 24/24 · 37/37 · 33/33 · 31/31 · 13/13 |
| `profiles.js` · `stress.js` | **320/320** · **360/360** |
| `goals2.js` | **56/59 — the SAME three pre-existing failures** (`WIG card rendered`, `capacity line sits above it`, `capacity goes amber`). Stale harness: the WIG card was replaced by the three-tier design. Still owed: fix or retire those three assertions. |
| `area.js` | **crashes** at `area.js:50` (`#pushStrip .ps-c` is null). **Pre-existing** — re-confirmed this session by running it against the pre-stage-4 build, where it crashes identically. That harness currently covers nothing. |

`full.js`, `goals2.js`, `tiers.js` and `stress.js` need `SP=<dir>` in the environment or they crash on
their final screenshot (`path: 'undefined/full-final.png'`). Not a product bug — a harness
requirement: `SP=/tmp/shots node full.js <url>`.

### What each stage actually shipped

- **Stage 1 · stop the damage** — F2-1 (composer wipe), F2-2 (commit born `done:1`), F3-1 (moving a
  goal re-scored lived days). Also fixed the two breaks a hostile verifier found afterwards:
  a **parked/dropped** goal is still drawn in the picker (it used to select nothing and wipe all
  four blocks for +25 XP), and `draftWeek()` no longer drafts onto days already lived.
- **Stage 2 · stop the accusations** — Monday no longer names the areas he is "neglecting" (it
  offers to place the first block instead); the return banner after a gap no longer stacks a column
  of "moved 21d ago"; eight overdue goals now read as **ONE DECISION** naming a single goal and
  counting the rest quietly.
- **Stage 3 · dates** — a date can now be **edited** (`g2EditDate` / `g2SaveEditDate`), deleting one
  asks first and says what happens to the goals, and **"Carry it" really moves the goal** to a date
  that exists in the future, creating one rather than lying. A pile-up converges (4 rounds → 0).
- **Stage 4 · the look** — lens 4's redesign, built. Detail below.

### Stage 4 in full — what changed and why (2026-07-28)

The verdict it answers: *"Today, Bank and Record are one app; Goals is a second app pasted into it."*
Almost none of it was new work — every component this tab needed already existed and was already
correct somewhere else; Goals had hand-rolled near-copies instead.

- **ONE lit object.** `.g2apex` takes `.nextup.live`'s glow. **`.g2wig` is deleted** — it was the only
  other gradient-and-glow in the stylesheet, and no renderer had emitted its markup since the tiers
  shipped.
- **The domain colour is a 3px left RULE, not an outline.** Bank's reward row and Today's `.blk .dom`
  in one declaration. Eight accent-bordered cards on one screen → **zero**.
- **The tier ramp is weight, not hue** (hue can't rank — six domains are peers by construction):
  Clash 27 / **Clash 19** / Satoshi 13.5 over glow / 3px @100% / 2px @40%, and tier 3's rule now
  inherits its parent's colour instead of a neutral. The December goal was the app's **only card
  headline in body type**, set below the capacity line above it.
- **Gold means "live, act on it" again.** It carried eight meanings on this tab. The view tabs take
  Bank's violet (`.chip.seg.on`), the footer's gold `+ Add a goal` becomes a ghost, and the one gold
  button moves **into the apex**.
- **THE SEAM** — the page finally has an entry point. The apex names the one that matters, names the
  next free block, and joins them in one tap. This is also where **`g.wig` finally goes**: "make this
  the one that matters" set the flag and *no renderer read it*, so choosing changed nothing anywhere.
  With nothing chosen it invites (`Nothing is first yet` + a ghost button) — no count, no colour.
- **The repeated string is gone.** `DECEMBER · Dec 25 · 150 days` rendered verbatim on every card.
  DECEMBER is implied by the tier; the shared date is hoisted **once** into the apex (label only —
  measured: a countdown there costs him a second line at 390px); a goal with its **own** date keeps
  the kicker, because that is the delta.
- **BY DATE is Record's QUOTA BOARD** — one `--panel` per date holding hairline rows, each row naming
  its area, the date said once in the header instead of on all six rows.
- **THE WEEK speaks Today's vocabulary** — a 2.5px domain bar and an 18px checkbox instead of the area
  written in amber caps (it was the *same* amber for Trading, Body and Faith). The days already lived
  go behind `.nu-door`. **They stay in the DOM** — the door hides them, it does not delete them, which
  is the same rule the extras move used. Day headers are `h2.sec` now.
- **A passed date is faint, never red.** Red stays with `.blk.miss`, where he actually skipped
  something.
- **Craft** — `+ Add one under this` is back inside the bezel (it ran 16px past it), a 90-char
  unbroken title no longer scrolls the page, and truncation says `…` instead of hard-cutting at three
  different lengths.

**Three things the tests would have passed and the screenshot caught** (§6's lesson, again):
his kicker wrapped to two lines once a date was hoisted next to it; the day-header date sat beside the
name on TODAY and jumped to the far edge on every other day (`h2.sec` is `space-between`, and TODAY has
a third child); and the new BY DATE board repeated `Dec 25 · 100 days` on every row **under a header
that already said it** — the same defect one level down.

**Deviation from the spec, deliberate:** lens 4 said the seam should *replace* `You get there by
clearing the N below`. That line is true, useful and asserted by `tiers.js`, and Today's own lit card
carries copy above its seam too — so it was **kept**, with the seam added beneath it.

### The two loose ends from the closed session

1. **`agent-briefs/goals-ux-2026-07-28/verify-stage-1.md` is STALE — read it as history, not status.**
   It says **FAIL**, but it measured the **12:14 live build** and says so itself
   (*"re-verify after the next deploy"*). Both breaks it reported are now fixed and guarded in
   `stage1.js`.
2. **A second verifier (V2) died mid-run when the window closed.** Its screenshots are on disk
   (`V2-c1-*` … `V2-c4-07`, 12:39–12:45) but **it never wrote its verdict file.** Nobody has read
   those 25 images. If a hostile re-verify of stages 1–3 matters, re-run it rather than trusting the
   green harnesses alone — §6's lesson.

---

## 0-NEW · THE PLANNER — decisions locked in conversation 2026-07-28. NOTHING BUILT YET.

He read the Goals-tab week view as a day planner and hit its ceiling: *"I can only schedule
my work blocks."* That opened the real product question, and this is where it landed.
**A mentor review is out with a Fable agent before any of it is built** —
`agent-briefs/MENTOR-REVIEW-BRIEF.md`. Do not start building until that verdict is back.

**His framing of the whole problem, verbatim:** *"I just wanna be able to plan my day. See my
day, track my days, create goal structures — but right now I feel like we're independently
doing something and every time we do it it's a backtrack of another spot."*
**That middle sentence is the brief.** He is not asking for a feature; he is saying the work
does not compound.

### LOCKED WITH HIM

1. **The day becomes data.** Every row his — per day, morning to night. `WEEKDAY`/`SATURDAY`
   become the *seed*, not the system. Day one looks identical because his current day IS the
   seed; nothing moves until he moves it.
2. **THE WEEK is the overview; A DAY is the thing you plan.** Tap Tuesday → plan Tuesday,
   06:00 to bed. Wednesday can look nothing like Tuesday without either being wrong.
3. **`WINS` and `QUOTAS` are placeholders, not law.** Both become user-owned, the same
   journey `boostDefs` already made. *"You're assuming you know, and these are the final
   standards — I'm telling you these are placeholders."*
4. **The palette is a MEMORY, not a MENU.** He types anything straight onto the day — no
   lookup, no category, no permission. It pays nothing and is just structure. The catalogue
   grows out of what he actually does instead of predicting it.
5. **"Make it count" is an optional follow-up**, after the thing is already placed: a row of
   **emoji quick-pick chips** (🧺 laundry, 🧹 cleaning) plus write-your-own for anything niche.
   His words: *"nice and simple in there, but also I could add something niche if I wanted."*
   **"Make it a standard"** sets n× a week on anything — including what he invented that morning.
6. **Planning pays nothing. Doing pays.** Consistent with the locked Friday-planner rule.
7. **Corrections are free while the day is open; once the day seals, XP is permanent.**
   See the bug below. The boundary already exists (`freezePast()` / `sealed`).
8. **250 XP/day ceiling on the ADDED/EXTRA stuff** — he approved a cap and named 250.
   ⚠ **Flagged to him, NOT yet confirmed:** 250 is currently the *boost* cap; a strong weekday
   already runs **~445 XP**, and the reward ladder (900→22,000) is priced against that. Capping
   *everything* at 250 would re-price the whole Bank. Proposal on the table: keep 250 on the
   added stuff — the surface being opened up is the surface that stays capped.

### THE BUG HE FOUND — systemic, not one screen

*"Whenever I click something to add XP I can't accidentally un-click it… it'll be an accident
but it'll still just give me the XP anyways."* **Confirmed.** `S.xp` only ever increases;
`d.credited[key]` is written at `:1453` and `:2994` and deleted **nowhere**. Every undo path
says the same thing — `tapWin` `:2608`, `undoBoost` `:5071` — *"Removed — XP kept."*
The intent was kindness; the effect is that it protects XP he never earned, and the toast
announces it. **The fix must go everywhere**, at his instruction: blocks, wins, boosts,
run-end question, Bank.

### WHAT THIS REMOVED FROM THE PLAN

The minutes-based economy re-pricing that `PLANNER-GAP-ANALYSIS.md` calls "the gate you must
decide before anything else" is **no longer needed**. His structure (nothing new is priced;
you only place things that already have a price; added stuff is capped) does that job.
That was the single largest piece of the original plan.

### ALREADY BUILT AND REUSABLE — do not rebuild these

- **`elseCands()` `:3025`** is already a time-of-day + domain suggestion engine with hard
  vetoes ("in bed on time" is never offered before 20:00). It only fires at run-end today.
  Point it at the planner and the morning→*Bible · text Kells* behaviour works on day one.
- **`QUOTAS` `:1552`** is already the one table spanning both halves of the app —
  `{src:'block', id:'bible'}` and `{src:'win', id:'cooked'}` in the same six rows. That is the
  palette's vocabulary; it does not need inventing.
- **`freezePast()` / `sealed`** is the correction-window boundary, already written and proven.
- **`boostDefs`** is the exact precedent for user-owned content with guarded ceilings.

### DEFERRED ON PURPOSE

Recurrence (*"every Tuesday from now on"*) — the one genuinely new engine, better designed
after he has used the manual version for a week.

---

### NEXT — stage 5, unless he re-picks

**Stage 5 · the long tail** is the last one in the plan he was given:
the **seventh vanish** (a sticky view hides parked goals), **no way to plan next week**, the
**anchor cannot be demoted**. *"The one that matters" doing nothing is now CLOSED by stage 4's seam.*

**Then, off the plan and still owed:** `goals2.js`'s three stale assertions and `area.js`'s crash —
two harnesses that currently guard less than they claim to. Worth clearing before the next structural
change, because this project's whole failure mode is green tests confirming the architecture back.

---

### 0-prev · The audit that produced those stages (2026-07-28 morning)

**2026-07-28.** He asked for three UX agents over the whole goal experience plus one fresh aesthetics
agent afterwards. Done. **44 findings, 112 screenshots**, all in
`agent-briefs/goals-ux-2026-07-28/` (`lens-1-first-run.md`, `lens-2-weekly-loop.md`,
`lens-3-change-and-delete.md`, `lens-4-aesthetics.md`).

**Consolidated for him, LIVE:**
https://jasper4-web.github.io/shared-pages/burn-the-boats/renditions/rend-goals-review.html
**The redesign (lens 4 drew it), LIVE:** `.../renditions/rend-goals-aesthetic.html`

### THE THREE I REPRODUCED MYSELF ON THE LIVE APP — do not take on trust, they are confirmed

1. **F2-1 BLOCKER — the 08:30 composer wipes every commit on today's four blocks and pays +25 XP.**
   Half-finished migration: line **2701** writes real commits, but the read at line **2672** still
   pre-selects from the abandoned `d.goals`/`w.goals`. Pickers show NONE → save writes `null` over all
   four. Measured: 4 commits → 0.
2. **F2-2 BLOCKER — a commit on a day already lived is born `done:1`.** Stamped by `setCommit` itself,
   not by `syncCommits` as first reported. Every past slot still offers "Open — tap to commit it".
3. **F3-1 HIGH — moving a goal to another area re-scores lived days, upward.** `blockDomains()`
   (line 1465) freezes the domain for **completed** blocks only; a **missed** block re-derives live from
   the goal's *current* area. Measured with 25 lived days: WORK 55 → 56 from one edit.
   **Needs accumulated history to show** — at 2 days it rounds away, so it would have surfaced in November.

### Also confirmed by me in source
- `importFromOld()` (line 3581) never calls `setAnchor`; `backfillAnchors` is load-only AND one-shot
  (`meta.anchored`). → import leaves every area anchor-less (F1-1).
- The auto-promotion toast can never fire — `const promoted` is block-scoped inside the `else`, and the
  toast tests `typeof promoted` outside it, which returns `'undefined'` instead of throwing (F1-4).
- `g2Week()` line **3868** renders the orphan-areas warning unconditionally → on Monday with nothing yet
  planned it names **every area he owns**, as the reward for a 100% week (F2-4).
- Lens 4's three structural claims all hold: `.g2apex` border is gold at **40%** while `.g2anc` is at
  **100%** (tier 2 out-shouts tier 1); `.g2anc .t` is the app's only card headline in body font;
  `--d-work` is literally the same hex as `--gold`.

### The staged plan put to him (he chooses)
1. **Stop the damage** — F2-1, F2-2, F3-1. Wiring, not design; all three small.
2. **Stop the accusations** — the four wall-of-failure screens (F1-2, F2-4, F2-5, F3-10).
3. **Dates** — a date cannot be *edited* at all; ✕ is 38px, unconfirmed, no undo; "Carry it" is a no-op
   with no later date and re-asks forever (F3-2/3/5).
4. **The look** — lens 4's redesign; fixes nine usability findings that were really drawing problems.
5. **The long tail** — the seventh vanish (sticky view hides parked goals), no way to plan next week,
   "the one that matters" doing nothing, anchor cannot be demoted, etc.

**Stages 1, 2 and 3 of that plan have since been BUILT AND SHIPPED — see §0 above.**
(This paragraph used to read "nothing has been built." That was true at 11:36 and is no longer.)

---

### 0-prev · The extras move + reward requirements (BUILT AND LIVE, sw btb-v23)

**2026-07-27, round 6.** He picked **X5 + X3, with X2's requirement-counts as the Bank's structure**:
*"a mix of them living in the bank under certain things I need to do… each one requires specific things
one to or however many times… and I wanted to pair that with the anything else happen in there idea on
direction three… the place that they would be living is on the bank."*

### BUILT AND LIVE — commit `d1e…`/`sw btb-v21`

- **Neither section is on Today any more.** `#extrasWrap` (Always counts) and `#boostCard` are
  `hidden`. The nodes stay in the DOM on purpose so every renderer and harness still addresses them.
  Today at 390px is now **1171px** (it was 2518px before this design cycle started).
- **In their place, ONE line**: `#extrasLine` → `renderExtrasLine()`. A total that only ever goes up
  ("+45 also today · 2 things →"), or, with nothing logged, "The small stuff lives in the Bank →".
  It navigates to the Bank. **It never renders a zero or a shortfall** — asserted by the harness.
- **The run-end question**: `elseStep()` / `elseCands()` / `elseTap()`. After the SHIP field (and after
  Skip), a focus run ends by asking **"Anything else happen in there?"** with **three** plausible
  options, scored on the finished block's domain and the time of day — *in bed on time* can never be
  offered in the morning, *cooked* not before 17:00. Tapping one banks it and re-asks with what's left.
- **ONE exit, never two.** Wording follows the truth: "Nothing · carry on" before anything is tapped,
  "Done" after. (First cut shipped two buttons that did the same thing — caught by looking at the
  screenshot, not by the tests.)
- **The Bank is the home**: a real "Always counts" section (`winsBankList()`, `winsPaidToday()`) —
  all six, tappable via the same `tapWin()`, each showing its **weekly standard** (3/4 this week).
  Boosts already lived there.
- `closeRun()` now hands `#runEnd` back to `runEndDefault` — the end-of-run steps rebind it, and
  without this the *next* run's End button was still wired to the last run's "carry on".

**Verified on the LIVE url:** **extras 33/33 (new)** · qc3 51/51 · vanish 32/32 · tiers 28/28 ·
full 124/124 · phase1 24/24 · boosts 37/37 · backup 13/13 · profiles 320/320 · **stress 360/360**.

**`model/extras.js` is new** — 33 checks over all three halves of this feature. **`boosts.js` changed:**
its "Today shows a boost card / card clears 44px" assertions were guarding a thing he deliberately
removed. They now assert the opposite (Today must NOT show it) plus the new line's floor and that it
never shows a shortfall. The 44px floor for boosts is still covered, in the Bank, at `boosts.js:56–60`.

### REWARD REQUIREMENTS — ASKED, ANSWERED, BUILT AND LIVE (`sw btb-v23`)

**His two answers, 2026-07-27 — treat as locked:**
1. **A requirement GATES the reward. The XP price still applies.** Both must be true.
2. **The window is THIS WEEK, resetting Monday.** A bad week costs nothing; it starts again.

Implemented:

- `req:[{src:'win'|'block', id, n}]` on every reward — **the same shape as `QUOTAS`**, so his existing
  weekly standards drop straight onto a reward. Wins *and* the two block standards (gym, bible).
- `reqHits()` walks Monday→Saturday of the current week. `reqState()` returns per-row hits/need/met.
- `claim()` checks requirements **first**, then XP. The toast names **whichever single thing is in the
  way** — never a list of everything undone.
- **`req` arrives EMPTY everywhere**, in `DEFAULT.rewards` *and* in `migrate()`. A reward with no
  requirements behaves exactly as it did before this existed, so **nothing on his ladder was re-priced
  or made harder by the update.** His written `condition` prose still shows on rewards with no terms.
- **The terms picker needs no keyboard**: tap a line to cycle — × → ×1 → ×2 … ×5 → cleared.
  Reachable from every reward row via **SET THE TERMS**.
- Row meta reads `900 · PAID FOR · 2 TO GO THIS WEEK` when the XP is there but the terms aren't.

**`model/rewardreq.js` is new — 31 checks.** Verified on the LIVE url alongside everything else:
rewardreq 31/31 · extras 33/33 · qc3 51/51 · vanish 32/32 · tiers 28/28 · full 124/124 · phase1 24/24 ·
boosts 37/37 · backup 13/13 · profiles 320/320 · **stress 360/360**.

**Three bugs this round were caught by LOOKING, not by tests** — the §6 lesson, again, three times:
1. A **fresh install** had rewards with **no `req` field at all** (only migrated saves got one) — the
   two code paths disagreed. Caught because the harness crashed on `r.req.length`.
2. The requirement **pips were invisible**: every `.pips` rule in the app is scoped to
   `.win` / `.quota` / `.confrow`, so the `<i>`s inside `.rq` had no size. The test counted four
   elements and passed. It now **measures** them.
3. **SET THE TERMS was clipped to "TER"** — it sat in `.blk`'s 20px last column and `.blk` is
   `overflow:hidden`. It now lives in the content cell, and the test asserts it isn't clipped.

---

### 0-prev · Round 5 — the extras diagnosis and the five directions

**2026-07-27, round 5.** *"There's just something about those two sections that I just feel like don't
fit on the page properly. They just feel like weird little afterthoughts… what are ways we could really
integrate this into the page that we're not thinking about."*

**LIVE:** https://jasper4-web.github.io/shared-pages/burn-the-boats/renditions/rend-extras.html
(source `renditions/rend-extras.html`, commit `53e503d`; clean at 375/390/440/1280)

### The finding that should drive this — read before proposing anything

**"Always counts" and "Something extra" are not extras. They are already load-bearing, and the screen
never says so.** The `QUOTAS` table (index.html, ~line 1119) holds six weekly standards. **Four are
wins**, each carrying a domain: *real time with someone* → PEOPLE 3×, *cooked* → BODY 4×,
*in bed on time* → BODY 4×, *a real conversation* → WORK 3×. PEOPLE's December goal
("Nobody got the leftovers") has **literally nothing else in the app feeding it.**
They are the lead measures for the half of his life deep blocks can't reach, presented as a strip of
nice-to-haves under the real work. **They're mislabelled, not misplaced.**

Diagnosis of why restyling keeps failing: they are the **only two things on Today not anchored to
anything** — no time, no owner, no consequence. Everything else is pinned to the clock.

### The five (each attaches them to something different)

- **X1** they're the standards for your areas — both sections replaced by areas + December goal + the lever under each
- **X2** they're what you're paying with — anchored to the named Bank reward, whose conditions already name the wins
- **X3** they belong to the block that just ended — **zero footprint**, one sheet at `finishRun()`
- **X4** "Something extra" **makes the day longer** — a boost becomes a real line in the shape, so the 250/day cap enforces itself
- **X5** not a Today feature at all — both move to the Bank; Today keeps one total at the foot

Six more were killed in writing on the page (hour-rows, close-of-day-only, margin/row/spine/seam as
"placements not integrations", a second header gauge, streaks, and a layout editor).

**My recommendation: X3 first, then X1 on the GOALS tab, not Today** — X3 is what he actually asked for
(the page stops having the problem) and is the smallest build; X1 is the true answer but makes them
*bigger*, so it belongs where "my areas and what feeds them" already lives. **X4 can ship on its own
regardless.** Argued against **X2** — it turns the day into a scoreboard.

---

### 0-prev · Round 4 — the seam is BUILT AND LIVE

**2026-07-27, round 4 — the first thing from this design cycle actually shipped.**
His push-back on the outside rendition: *"the thread shouldn't be so super long. I still like how on
the earlier renditions you could just see the one before and the one after and then if you wanted,
maybe there's an option to click to see the whole day at once… let's go ahead and build that and put
it in."*

**BUILT AND LIVE** — commit `485412f`, **sw `btb-v19`**:

- **The day now ships CLOSED.** `#dayWrap` (the "Today" heading + `#sched`) is `hidden` unless opened.
  Today page at 390px went **2518px → 1481px**. That was the whole complaint.
- **The live card carries its own two neighbours** — `seamLine()` / `seams()` render the item before
  and the item after *inside* `.nextup`. This also closes his ask #2 (merge the NOW card and the day):
  one component now, not two sections with things wedged between them.
- **The door toggles instead of scrolling.** `dayDoor()` → `toggleDay()`, label flips to "Hide the day ▴".
  `DAY_OPEN` is a **module variable, deliberately not persisted** — every fresh open of the app is short
  again. `openDay()` kept as an alias because the harnesses call it by name.
- A seam line for a block that didn't happen shows **nothing** — no cross, no "missed", no red.

**Verified on the LIVE url:** qc3 51/51 · vanish 32/32 · tiers 28/28 · full 124/124 · phase1 24/24 ·
boosts 34/34 · backup 13/13 · profiles 320/320 · **stress 360/360**. Screenshots read at 390 and 375.

**⚠ Two PRE-EXISTING harness problems, NOT caused by this change** (confirmed by running both against
`index.html.bak-seam-195451`, the pre-change snapshot) — §6's claim of "all green" is stale:
- `goals2.js` **56/59** — fails "WIG card rendered", "capacity line sits above it", "capacity goes amber".
- `area.js` **crashes**: `#pushStrip .ps-c` is null at `area.js:50` — a stale selector, so that whole
  harness currently covers nothing.

**⚠ Also spotted and deliberately NOT changed** (out of scope, needs his call): at 09:20 with a deep
block live and no objective, the card renders *"No objective set — write it at 08:30"* **in ember/red
italic on the daily surface**, and it names a time already past. That's the closest thing to a wall of
failure on the Today page.

**STILL OWED BY HIM: a merge + a strip from `rend-today-merge.html`.** The seam did NOT build the back
page, the per-block notes store, or the wins strip — those are the parts that need his pick.

---

### 0-prev · Round 3 — HE PICKED E + I. The merge renditions are live.

**2026-07-27, round 3.** From the five directions he chose **a mixture of E · The Notebook and
I · The Two-Sided Day**, in his words:

> "I specifically like the checklist style and the other few things on the side is cool. It's not all
> the way out but it's cool… and then also the two sided day again with this one I like seeing the back
> page of like a little bit more information and in depth stuff on what you're doing."

So: **checklist front + the side strip (liked but NOT resolved) + a back page holding the depth.**

**LIVE — five merges:** https://jasper4-web.github.io/shared-pages/burn-the-boats/renditions/rend-today-merge.html
(source `renditions/rend-today-merge.html`, commit `a60256d`; clean at 375/390/440/1280)

- **M1** every line has a back (per block, replaces the day) · strip = full margin
- **M2** one back for the whole day (DOING/WRITING switch) · strip = margin, front only
- **M3** the back comes up as a **drawer** over the day · strip = **one row under the day**
- **M4** the strip **is the door** — a working right-hand spine you pull · strip = the spine
- **M5** both halves always on — day on top, live block's depth below · strip = **on the seam**

Merge and strip are **independent choices** ("M1 with M3's strip"). The page also has a
"the side strip, five ways" table because he said the strip isn't all the way there yet.
**My recommendation: M3** (per-block depth, day never leaves the screen, full-width block names).

**LIVE — the outside take, "The Thread":**
https://jasper4-web.github.io/shared-pages/burn-the-boats/renditions/rend-today-outside.html
(source `renditions/rend-today-outside.html`; 6 boards; clean at 375/390/440/1280 on our own harness,
re-audited independently, on-screen totals check out)

An agent with **no prior exposure to this project**, briefed only on the product, the three problems,
everything he rejected, and the hard rules — not shown our directions or our recommendation.
It landed on: **the day is one written record and the block you're in is the only lit line in it.**
No checkbox anywhere, no x-of-y counter anywhere, past entries are his own prose rather than ticks,
wins offered once at the foot of the page the moment a block ends.

**The signal worth noting: it converged independently on writing-as-architecture** — the same thesis
as E · The Notebook, which is what he responded to. Two designers, no contact, same conclusion.
**Caveat: it is NOT a merge candidate** — it has no checklist and no two-sided back page, because it
was deliberately briefed cold. It's a second opinion, not a sixth option.
Its own stated risk: it can be dismissed on sight as "One Column with a keyboard."

**NEXT: he picks a merge + a strip.** Nothing goes into `index.html` until he does.

---

### 0a · Round 2 — the five directions (superseded but keep for context)

**Drawn, deployed and verified 2026-07-27.**

- **Live:** https://jasper4-web.github.io/shared-pages/burn-the-boats/renditions/rend-today-five.html
- **Source:** `renditions/rend-today-five.html` · commit `ec2ef8b`+ on `jasper4-web/shared-pages`
- Clean at 375 / 390 / 440 / 1280: no horizontal overflow, no text under 11px, every drawn tap ≥44px.

**The five, and where each puts wins** (all five keep his one liked idea — notes that belong to the block):

| | | |
|---|---|---|
| **E · The Notebook** | today is one page you write on; blocks are headings, notes are the page | ticks in the **margin** |
| **F · One Thing** | only the block you're in, full-bleed; the whole screen turns over for notes | **absent all day**, once at 21:30 |
| **G · The Log** | a thread; blocks post themselves, notes are replies | events that **post themselves** |
| **H · The Ledger** | today is an account; every line is a credit, notes are the memo | small credits in the **same column** |
| **I · The Two-Sided Day** | the page has a front (doing) and a back (writing) | a **footnote** at the foot of the back |

Four more were **killed in writing on the page itself** (his rule: show the cull) — The Clock (the rail
bent into a circle), The Filmstrip (the deck on its side), The Spine (One Column + a rail, the hybrid
he already passed on), The Room (hides the day behind gestures).

**My stated recommendation to him: E · The Notebook.** Flagged **H · The Ledger** as the one not to
ship — it's the most impressive and it turns the day into a scoreboard. Named **I** as the cheap win.

**NEXT: he picks.** Nothing goes into `index.html` until he does. He may also say
"E's page with F's block screen" — draw that hybrid properly before building.

---

### 0b · The message this was answering (keep for context)

He had just been shown four Today-page directions (`renditions/rend-today-options.html`).
His reply, verbatim:

> "OK, I'll be giving some feedback to be honest. The only one out of these that I like is
> direction B I like the you know cards on the back where I have more information I don't
> understand the winds as a card in the deck I feel like winds can just be a small little side
> section or I don't know. I just don't like the way that it's fit in right there, but I still
> don't even fully love the deck idea. It's just the one that I love the most so with that in
> mind, let's see another top five renditions."

("winds" is voice-transcription for **wins** — the "Always counts" row.)

**What he is asking for: FIVE NEW visual renditions of the Today page.** Not built — drawn.

**What that feedback means, decoded:**

| | |
|---|---|
| **KEEP** | The **back-of-the-card notes** idea from direction B. That is the one thing he liked. It is the confirmed keeper and should appear, in some form, in every new option. |
| **REJECT** | "Wins as a card in the deck." He didn't understand it and didn't like where it sat. His own instinct: *"wins can just be a small little side section or I don't know"* — he is unsure, so **at least one of the five should make wins genuinely minor or absent from the daily surface.** |
| **LUKEWARM** | The Deck itself. *"I still don't even fully love the deck idea. It's just the one that I love the most."* **Do not produce five deck variants.** |
| **ALSO DEAD** | A (The Rail), C (One Column), D (The Cockpit) — he said only B. Don't re-serve them. |

**This has been answered — see §0 above.** (The pre-draft list was Clock / Feed / One Thing /
Filmstrip / Spine; Clock, Filmstrip and Spine were interrogated and killed, Feed became **The Log**,
One Thing survived, and Notebook / Ledger / Two-Sided were added.)

---

## 1 · THE PROJECT

A single-file PWA that is Jasper's daily operating system for a **110-weekday run,
Mon 2026-07-27 → Fri 2026-12-25**. Installed on his iPhone home screen.
**The run started TODAY.** Four tabs: **Today · Goals · Bank · Record**.

- **Live:** https://jasper4-web.github.io/shared-pages/burn-the-boats/
- **Source:** `~/Documents/burn-the-boats/index.html` (one file, ~4,400 lines)
- **Deploy:** the `jasper4-web/shared-pages` repo, folder `burn-the-boats/`
- **Currently live:** service worker **btb-v46** (XP Phase 2, verified — see the top of this file)
- **Who he is:** `PROFILE.md`. Non-technical. 2–3 productive hours a day. **Pacific time.**

---

## 2 · RULES THAT ARE NOT NEGOTIABLE

1. **A change is not done until it is LIVE and verified.** Never ask "want me to deploy?"
   He reviews on his phone; a local edit is an invisible edit.
2. **Bump `const CACHE` in `sw.js` every single deploy.** Currently **btb-v46**.
3. **Verify the LIVE url, not the local file.** Poll it (~40–60s), then run the harnesses against it.
4. **Never render a wall of failure.** When he falls behind he stops opening it — that killed the
   previous version. Everything is subordinate to this.
5. **He plugs in his own content. Build the machine.**
6. **Craft floor:** no text under 11px · every tap target ≥44px · no horizontal overflow at 390px.
7. **Look at the render.** Screenshot it and read the image. Green tests have missed real bugs
   repeatedly this session — see §6.
8. **His stated working method: visuals first.** *"Starting from the visuals is the best way for me."*
   Draw it, deploy it, let him react, then build.

---

## 3 · WHAT SHIPPED TODAY (all live and verified)

| | |
|---|---|
| **Boosts are his** | `BOOSTS` const → `S.boostDefs`. Three sizes with real ceilings (5–30 / 40–120 / 130–250) plus a **250 XP daily cap**. Suggestion pool. One card on Today. |
| **The run goes to Dec 25** | 91 → **110 weekdays**. Every date label, the four landmarks and the OVR curve derive from `RUN_END`. |
| **Goals v2** | The hardcoded `S.december` model is **deleted**. AREA → GOAL → COMMIT as data under key `btb4`. `btb3` untouched by it. |
| **The week engine** | 20 slots (5 days × 4 deep blocks). **The week closes itself** and drafts the next one whether or not he shows up. Optional deep review. |
| **The return path** | After a gap: states what is *still true*, never counts days missed. |
| **Migration** | carry / change / park / drop, one at a time. |
| **Backup covers both stores** | It only ever saved `btb3`; goals had no backup at all. |
| **Phase 1 of the day system** | The shape is **stamped** each day; the **domain follows the work**; the daily page is **decluttered** (rating behind one tap); the live card has a **"See the whole day"** door. |
| **The three-tier goal hierarchy** | Apex (99 OVR) → one **December goal** per area (`anchor:1`) → working goals under it. The Goals page is now a **read posture** — every goal states blocks committed, blocks done, XP earned, when it last moved. |
| **Capacity counts committed blocks, not goals owned** | A list of goals is a menu; only blocks are a load. |

---

## 4 · DECISIONS LOCKED (do not re-open without him)

- **Structure bends, the economy doesn't.** His rule. Areas, dates, day shape are all settings.
  What something is *worth* is a guardrail.
- **The apex is the 99 OVR.** The December goals don't compete with it — they're how he reaches it.
  4DX's "1–2 WIGs" rule was misapplied by me at the wrong altitude; **a cascade is not fragmentation.**
- **Working goals are planning material, not contracts.** *"Almost a reminder so that I can look at
  them when I'm planning my weeks."* Easy in. They must not nag.
- **One anchor per area.** First goal in an area becomes it automatically. Promote/demote exists.
- **Deep blocks are sacred (4/day, 20/week)** — but what they're *for* and how they're *policed* is
  fluid. This is what makes capacity a constant and the economy safe.
- **Forward-only.** Editing the future must never re-score the past.
- **Both easing mechanisms** — visible trail by default, hard delay opt-in per goal.
- **Phone-allowed blocks pay the same XP**, but claimed *after* the block with one confirmation.
  His mechanic: *"if you're gonna try to finesse the system, at least think about what you're doing —
  and you have one chance."*
- **No arrangement library.** 1 of 22 apps ships one. Restore-a-past-week instead — free, because
  history already stores the shape lived.
- **The Friday planner is ONE screen and pays ZERO XP.** Paying to plan is how the 08:30 composer
  became something he taps through.
- **Run to Dec 25**, then he re-decides. Making the 99 honest is **deferred** — his call, structure first.

---

## 5 · WHAT IS NOT BUILT

- **Everything in `rend-day-system-v2.html` past phase 1** — the slot editor, the three run modes
  (Locked / Phone / Away), the one-screen Friday planner, elastic block lengths.
- **The three things from his texts** (§0) — block notes, merging NOW with the day, integrating wins.
- Weekly standards on areas are stored but have no editor.
- Something to **drain** the working-goal list. Flagged, deliberately not solved yet.
- **The 99 is not honest yet.** Deferred by him. It became load-bearing the moment the tiers shipped.

---

## 6 · HOW TO VERIFY — and why this matters more than usual

Everything lives in `~/Documents/burn-the-boats/model/`. Run against the **live URL** as the final gate.

```bash
cd ~/Documents/burn-the-boats/model
node profiles.js                    # 320 · the pure model, 16 profiles × 20 screens
node qc3.js      [url]              #  51 · scoring integrity, economy, worst-case renders
node vanish.js   [url]              #  32 · every way a goal could disappear
node tiers.js    [url]              #  28 · the three tiers
node full.js     [url]              # 124 · week engine, review, migration, return path
node goals2.js   [url]              #  59 · the Goals tab
node phase1.js   [url]              #  24 · shape stamp, domain-follows-work, declutter, door
node area.js     [url]              #  10 · area rename + the "Unsorted" placeholder
node boosts.js   [url]              #  34 · the boost economy and its ceilings
node backup.js   [url]              #  13 · backup/restore round trip, both stores
node extras.js   [url]              #  33 · the extras move: off Today, asked at run-end, home in the Bank
node rewardreq.js [url]             #  31 · reward requirements — the gate, the weekly window, the picker
node stage1.js   [url]              #  29 · stop the damage — the three blockers + the two V1 breaks
node stage2.js   [url]              #  24 · stop the accusations — the four wall-of-failure screens
node stage3.js   [url]              #  30 · dates — edit, confirmed delete, a carry that really moves
node stage4.js   [url]              #  52 · the look — one lit object, the tier ramp, the seam, the board
node stress.js   [url]              # 360 · 6 widths × 5 clocks × 4 views × 3 states
node funeral.js  [url]              #  52 · every buried thing — fails if a grave reopens
node ledger.js   [url]              #  24 · the one economy door: award() in, refund() out
node owned.js    [url]              #  20 · WINS/QUOTAS as his own stores
node dayplan.js  [url]              #  20 · the day as data (templates + dayPlan)
node planner.js  [url]              #  41 · THE WEEK and the day editor
node xp1.js      [url]              #  31 · Phase 1: forward-only standards, graduation,
                                    #       knock-outs, the added pool, the pace date
node xp2.js      [url]              #  55 · Phase 2: the sliced day, the ceiling, the ranks,
                                    #       the Deck, the Shelf, the status window,
                                    #       §9 the denominator · §10 `hidden` must win
```

⚠ **`full.js`, `goals2.js`, `tiers.js` and `stress.js` require `SP=<screenshot dir>`** or they crash
at the end on `undefined/full-final.png`. `SP=/tmp/shots node full.js <url>`.

**Green as of btb-v29**, except `goals2.js` 56/59 — three stale assertions, see §0. `arsenal-lint`: `node ~/build-arsenal/bin/arsenal-lint.js index.html`.

### The lesson this session keeps teaching

**Green tests confirm your architecture back to you.** Today, tests passed while:
- `autoCloseWeeks()` sat inside the Goals tab, so the week only closed if he opened one screen
- a goal rendered twice, and `1 clients` shipped
- the area import was invisible — 7 areas arrived and the screen looked identical
- **six separate ways existed for a goal he typed to vanish from every view**

**Three QC agents found 27 defects across two passes; ten were mine.** The third pass I ran myself
(the agent hit an API limit) found the worst one: **moving a goal to another area re-scored days
already lived.** Run a hostile QC pass on anything structural. Screenshot every screen and read it.

**2026-07-29 — the sharpest instance of this yet, and the one to remember.** `xp2.js` passed
**43/43 on its very first run** against the shipped Phase 2 engine. It looked like proof. It was
not: the harness **skips Saturday when it builds days**, and the bug was that **Saturday scored
a full day against a weekday-only denominator** — a flawless run hitting 99 on Nov 9 instead of
the locked ~Dec 1. A test cannot find what it never constructs. The other three defects that
round came from **reading the render** (an empty 48px card that `hidden` failed to hide, a line
telling him to go to the Bank for a list one row below it) and from **reading the copy in a state
the tests only pattern-matched** ("pace holds" printed over a date four months past the run).

**So: when a brand-new harness passes everything on the first attempt, distrust it and go
looking for the case it does not build.** Ask what the fixture skips. That is where the bug is.

**And the corollary, from the same day: MEASURE A LIVED RUN, don't read the code.** Both
economy holes closed that day — Saturday, and `markWait` — were invisible in the source and
obvious the moment a full 110-day run was simulated and the finishing OVR printed. Saturday
read as a harmless missing `&&`; waiting read as a kindness. Simulating said *99 on Nov 9*
and *99 from one block a day*. **Any change to `slicesFor`, `runPoints` or the day's shape
should be followed by simulating the whole run at three honesty levels (flawless / real /
cheating) and printing the finishing number.** The scratch harnesses that did it are trivial
to rewrite — the pattern is in `xp2.js` §9 and §11.

---

## 7 · THE INVESTIGATION (its findings still govern)

Six agents each walked ten days: four as Jasper (addition · collapse · success · drift), two as
strangers (a car-wash owner who trades; a clothing-startup owner with a food stand).

Things they converged on, unprompted, that are **not yet all fixed**:

- **A deep block must inherit its domain from what it points at.** ✅ done. It also revealed MIND,
  FAITH and PEOPLE were unreachable by any real work.
- **`markWait` ("Waiting on someone") is an unlimited, untracked erase button** — and the only way to
  complete a block that happened off-screen, so the design manufactures a lie. **Still open.**
- **A deep block can only be completed by the timer.** A class, a call, an appointment cannot be
  completed at all. The **AWAY** run mode is the fix. **Still open.**
- **Off-script is 1 per calendar month** and gets burned in week one. **Still open.**
- **No arrangement library, no pin-for-N-weeks, buffer as elastic length not empty slots.**
- **The Friday planner should be one screen and pay nothing.**
- Their verdict, three times independently: *the app's ethics are better than almost anything
  shipped; the model underneath contradicts them.* **Closing that gap is the actual project.**

---

## 8 · FILE MAP

```
index.html                     the app (one file)
sw.js                          service worker — BUMP CACHE EVERY DEPLOY
RESUME-HERE.md                 this file
HANDOFF-GOALS.md               deeper history: §12 decisions, §13 critique, §14–15 what shipped
PROFILE.md                     who he is — source of truth
WATCHTOWER.md                  the older design-crew role (mostly historical now)
model/                         the goal model + ALL harnesses (funeral · ledger · owned ·
                               dayplan · planner · stage1-4 · full · qc3 · vanish · tiers ·
                               phase1 · area · boosts · backup · extras · rewardreq ·
                               goals2 · profiles · stress)
renditions/
  rend-today-five.html         THE FIVE NEW DIRECTIONS — awaiting his pick
  rend-today-options.html      the four he rejected (only B, partially)
  rend-day-system-v2.html      the day-system proposal after the investigation
  rend-day-system.html         v1 of that proposal (superseded)
  rend-goals-system.html       the 13-screen goals design (built, shipped)
  rend-goal-builder.html       working prototype — he still hasn't used it
index.html.bak-*               the two NEWEST snapshots only — older ones live in
_archive/                      snapshots/ (19 superseded .baks) + design-era/ (old scratch pages)
```

---

## 9 · STILL OWED BY HIM

1. **The lead-measure number.** His SANO doctrine says **50 calls/day**; the app implies
   **12 conversations/week**. A 20× gap, unresolved since the start.
2. **Has he ever used `rend-goal-builder.html`?** Never answered.
3. He was told to open the app and **check the auto-promoted December goals picked the right one**
   per area, and rename the `Unsorted` area if it's still there.

---

## 10 · HOW TO PICK UP

**Ask him which of the five he wants** (§0), or read his answer if he already gave one. Then draw
*that* one properly — every screen, every state — before touching `index.html`. If he names a hybrid,
draw the hybrid first. **Do not build anything into `index.html` until he picks.**

If he's picked and the drawing is approved, the build order is: the notes store (per block, per day,
with the previous run reachable) → the new Today surface → wherever wins landed in his choice.
