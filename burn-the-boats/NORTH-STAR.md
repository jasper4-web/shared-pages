# NORTH STAR — the owner's vision, in his own words, locked 2026-07-28

**This file outranks every other document in this project.** When code, an audit, a plan or
an old decision disagrees with this file, this file wins. It was written from a full Q&A
with Jasper on 2026-07-28, after he said the disconnect all along was agents reading the
paperwork and the code instead of understanding what he wants. Update it only when HE
changes something.

He is not a developer. He leans on us to know how the processes work. Write everything —
docs, UI copy, questions — in his language.

---

## 1 · THE PRODUCT IN ONE PARAGRAPH

One place to run his whole life — not a work tracker. He wakes up, opens the app: vices at
the top (a day not smoking, the dishwasher handled — keep, he likes it), then **the day he
planned**, all of it: gym, work blocks, meals, errands, family, church, appointments. The
thing happening *now* is big; the rest of the day is small and expandable, with his notes
behind a tap — *"kind of how we have it set up already."* During the day he logs good
things in seconds from a widget that belongs on the page. He plans **only** in
Goals → THE WEEK — deliberately, so he can't negotiate with himself mid-day — usually on
Sunday. The XP game is **absolutely crucial**, and it gets rebuilt properly *after* the
planner exists and he has lived one real planned day in it.

> His sentence for the current gap: *"this app is for me getting better in all aspects of
> life, not just working more and tracking my work."*

---

## 2 · THE LOCKED ANSWERS (Q&A of 2026-07-28)

1. **Today's structure is right, its content is wrong.** Keep the shape (now-card big, day
   expandable, notes on tap). Fix: it must carry the WHOLE planned day, not four work
   blocks with voids between them.
2. **Planning happens ONLY in the week view. No editing today from Today.** His reason, his
   words: changing the day on the spot would be *"me trying to get out of my duties."* This
   is a self-binding rule — do not add an escape hatch later out of helpfulness.
3. **The four work blocks Mon–Fri are mandatory.** He proposed docking XP if they aren't
   planned. Resolution (see §3): they are **fixtures** — always present, cannot be deleted;
   planning means aiming them. Structure enforces what a fine would only punish.
4. **The week:** Mon–Fri normal days · Saturday its own half schedule (already exists) ·
   **Sunday stays Sabbath** — the screen can just say relax. Sunday is when he'll usually
   plan next week, so the Sabbath screen gets exactly one action: *Set next week*.
5. **Next week starts as a copy of this week** — never blank — but changing it must never
   be *"a bunch of extra muddy steps."* One tap starts a day fresh; one tap starts the
   whole week fresh.
6. **XP is absolutely crucial — and its redesign is deliberately SECOND.** His sequence:
   build the real planning system → he enters one full, real, detailed day → then he and
   the agent design the real XP system that *"rewards me for doing good in all different
   aspects of my life."* Until then: fix the plumbing (one door, reversible, honest),
   change no prices.
7. **Confirmed cuts:** the weekly review questions, and the day rail — the time bar between
   the OVR glance and the vice dials (`.rail-wrap`, index.html:1093). Everything else is
   *too early to cut* — he won't name more deletions until the real system exists.
8. **Logging good things — three doors, one system:** a widget ON the Today page (integrated
   and genuinely good-looking, not bolted on) · the end-of-block question (exists) · a
   quick mid-block log so a win isn't forgotten by the time the block ends.

**Plus, unprompted:** he does not know what the QUOTA BOARD is. He *guessed* it should be
him knocking out his weekly/monthly goals — which is nearly what it already is (his weekly
standards), meaning the concept is fine and the presentation failed. The whole Record tab
is unclear to him. **Record is FROZEN, not deleted** — rethought after the planner ships,
reframed around words he'd use ("my standards", "what came out of my weeks").

### Added from live use, 2026-07-28 evening (locked)

9. **D2 EDITORIAL is the control voice.** He picked it from `rend-buttons.html`: inside
   sheets, choices are words underlined in the selection color; inputs are ruled lines;
   the CTA speaks Clash. Applied app-wide to sheets, btb-v36.
10. **Two things in one slot is a FEATURE.** His words: *"market open 6:30–8, I also want
    to clean at the same time."* A row inside another renders nested "alongside X" —
    never a conflict warning.
11. **Quick goals under the December goals are his core loop.** *"I'm adding a bunch of
    goals that are much smaller under them so I can knock out goals in mind of the main
    overarching goal."* Working-goal rows carry a one-tap ✓ knock-out. What a finished
    goal is WORTH = the XP session.
12. **The evening door:** from 17:00 Today shows "Plan tomorrow →" (Saturday: "Set next
    week →").
13. **Reminders are wanted** — real push notifications are a genuine project (needs a push
    server; GitHub Pages can't). Parked, not forgotten.
14a. **Anything on the day can carry a goal.** His ask: attach a big or small goal when
    editing/adding any row. Sacred Mon–Fri blocks write the REAL commitment (THE WEEK's
    store — one truth); other rows carry `goalId` on the plan; a linked small goal can be
    knocked out from the row ("✓ This finished the goal"). Attaching pays nothing.
14b. **The goal picker mirrors the hierarchy.** Not a wall of buttons: each project
    (December goal) is a drop-down holding the project itself + its small goals;
    "nothing — it's just the day" stays a first-class first choice.
15. **No military time on screen.** 6:00a / 12:00p / 9:50p everywhere displayed; the
    model stays 24h underneath (one formatter, t12 — never format at more than one door).
16. **The app guards its own data.** In a browser tab it warns kindly and offers
    backup + install steps; installed to the home screen it never mentions it.
14. **His data lives on HIS phone.** Installed home-screen app = permanent; Backup weekly
    = insurance. Nothing syncs anywhere; agents cannot see his data unless he hands over
    a backup file.

### Added 2026-07-29 (locked)

17. **The 08:30 composer is DEAD — coffee is for relaxing.** His words: *"it feels like a
    bit of an overbuild. Instead of doing this while I have my coffee I would rather just
    have the option to actually plan tomorrow or another day with one click."* The coffee
    block stays a ritual (done still pays its 25); tapping it is ONE door: Plan tomorrow →
    (or open THE WEEK). A block's purpose comes from the goal attached when planning —
    the "No objective set" accusations died with the composer, and so did Saturday's
    "Setting Monday up" twin. Buried with kill-tests: `model/funeral.js` §7.
18. **A planning sheet says the day in words.** "TOMORROW · WEDNESDAY", never "07-30" —
    he must never do date math to know which day he is organizing. One formatter
    (`dayWord`, same one-door rule as t12) feeds the day sheet, the row editor and the
    add sheet. Guarded by `funeral.js` §8.

### Added 2026-07-29 — THE XP SESSION (locked in Q&A; drawings at renditions/rend-xp-system.html + rend-xp-v2.html)

19. **The XP system's shape: the sliced day.** Every day scores out of 100 — the work
    (sacred blocks + market rules) is the majority slice, the life (his catalogue +
    standards, capped ~4 things/day) is real but can never replace work, and **CLEAN —
    his vices — is its own slice.** His law, verbatim: *"you cannot get to 99 overall if
    you're falling through on all of your vices."* Perfect-everything-but-vices caps
    around 92 — below the top rank. XP stays the spend currency; the score is never
    purchasable ("XP is the score" was killed by simulation — every profile incl. a
    chore-grinder hit 99). The grinder must always lose to the realistic run.
20. **The ceiling (his fork answer).** Perfect work + fully clean days open an
    above-and-beyond lane (day banks up to ~120), so a flawless run can land 99 around
    **Dec 1 and never earlier**; Dec 25 stays the human target. The number still never
    falls — a bad stretch only climbs slower. No overflow on a day with a slip.
21. **The game layer: ranks + level-up moments, one number.** The 99 OVR stays THE
    number; the 50→99 road gets six rank bands, crossing one is a full-screen moment,
    and some Bank shelves unlock by rank (rank opens doors; XP + terms still pay).
    Solo Leveling is the reference for FEEL (status window, quests, visible growth) —
    its penalty mechanic is explicitly refused (first law).
22. **Money decisions:** knocked-out small goals pay **40 XP auto** (nudge 25–150 band
    → he said 25–50; sheet allows it), through the ledger, refundable while the day is
    open · the **250/day cap applies to the ADDED pool only** (boosts + invented wins +
    quick-logs; planned work never capped, Bank ladder never re-prices) · custom-win
    band 5–100 stays · an evening of 4–5 small things must read as ONE climbing total ·
    the pace date ("AT THIS PACE · 99 ON …") joins Today. Repair credit stays parked.
23. **The magic list (the catalogue) is load-bearing.** His words: the little things are
    *"the magic that helped me stay away from my vices."* It gets a real home — drawn
    three ways in rend-xp-v2.html; the list is 100% his (machine may notice habits,
    never write the list).
24. **His three picks, given 2026-07-29 ("this looks good and I agree with your picks"):**
    the catalogue = **C2 THE DECK on Today with C1 THE SHELF as its home in the Bank**
    (one list, two doors) · the ranks = **R2 HIS ROAD: ASHES → EMBER → FLAME → FORGE →
    STEEL → HIM** (50–57 / 58–65 / 66–73 / 74–81 / 82–90 / 91–99) · the day anatomy =
    **60 / 25 / 15 with the overflow lane and the vice rules as drawn.** These close the
    design session; Phase 2 builds exactly this.

### Added 2026-07-29 (late) — raised by the Phase 2 verification, **ANSWERED BY HIM**

25. **THE SATURDAY QUESTION — LOCKED: Saturday pays XP, it does not move the 99.**
    His word, 2026-07-29: *"We can stick with the Saturday only gives XP that's fine."*
    The detail below is kept because it is the reasoning behind a locked number.
    The verification found the shipped engine scoring Saturdays into a denominator that
    counts only the **110 weekdays**. Because Saturday's shape holds **one** deep block, a
    Saturday banked a **full above-and-beyond day (1.2)** — the same as a four-block
    weekday. Measured consequence: **a flawless run reached 99 on Nov 9**, breaking item 21's
    ceiling ("never earlier than ~Dec 1").
    **Shipped, conservatively, in btb-v45: Saturday pays XP but does not move the 99.**
    Weekday-only accrual reproduces the locked ~Dec 1 *exactly* (Nov 30), which is strong
    evidence it was the intent all along.
    It does rub against item 19–20's spirit — chores and habits should bring the 99 closer,
    and on Saturday they now bring only money. The alternative put to him was counting
    Saturdays in `TOTAL_DAYS` (110 → 131); **he declined it.** Do not re-open without him.

26. **WAITING HAS AN ALLOWANCE — `WAIT_FREE = 2` per day. Provisional number, his to set.**
    Also found by the Phase 2 verification, and the largest hole yet in the economy:
    `markWait` removed a block from the **denominator**, unlimited and untracked, so once
    the sliced engine shipped **one block done + five marked "waiting" scored 1.2 —
    byte-identical to a flawless six-block day, above-and-beyond bonus included** — and
    doing that every weekday reached **99**, the same as a perfect run (honest: 74).
    Locked in principle: **waiting must stay kinder than missing, and must never buy the
    run.** Shipped in btb-v46 — the first two waits a day are forgiven, past that the block
    counts as it was, and a day held up by someone else never opens the overflow lane.
    Result: flawless 99 · five-waits 77 · honest 74. **The number 2 is a guess made to close
    a live hole — one named constant, one edit. Confirm or change it.**
    Still open underneath: waiting is *still untracked* over the run, and it remains the
    only way to complete a block that happened off-screen — the investigation's real fix
    for that is **AWAY mode**, still unbuilt.

### Added 2026-07-29 (late) — THE TODAY SURFACE, his pick from five drawings (locked)

27. **THE DAY AND THE BLOCK ARE ONE COMPONENT — N3 THE FISHEYE.** His brief, verbatim:
    *"I want us to have the one block that we're on and the whole day kind of all in one…
    the block that you're on right now is just a bit larger, but you can also partly see
    the other parts of the day."* Drawn five ways in `renditions/rend-today-oneview.html`;
    he picked N3 with the recommended sub-decision — *"Your recommendation is perfect."*
    **The rule: one list, and the rows ramp by DISTANCE FROM NOW.** The live block is the
    full card; two rows either side keep their body; everything beyond compresses to a time
    and a name; the morning folds to a single line. The card is a **row in the list**, not a
    thing above it — there must never again be two places one block can be drawn.
    **A far row is display-only** (11px cannot be a 44px target): tapping the far zone opens
    the day out first, and then every row is a real target. His approved trade.
    Shipped btb-v47/48. Kills the SEAM, the day DOOR, `.blk.now` and the collapsing arcs
    (funeral §10). **Not yet lived on** — `MID_SPAN=2` and the expand-then-tap are the two
    dials to revisit after he uses it for a real day.

---

## 3 · THE ONE PUSHBACK MADE, AND WHY

He asked for XP to be **taken away** if the four work blocks aren't planned. The intent is
right — the deep blocks are sacred and the system must not let him drift out of them. But
this app's first law exists because punishment killed the previous version: when it made
him feel behind, he stopped opening it. A planning fine is a wall of failure at the exact
moment he's doing the right thing (planning).

**The stronger version of his own idea:** the four deep blocks are *fixtures* of every
Mon–Fri template. They cannot be deleted or planned around — they are already on every day,
and planning is aiming them at goals. You cannot fail to plan them, so nothing needs to be
docked. Missing one in real life already costs, honestly, through the day's record.

He can overrule this — if he does, implement the fine his way.

---

## 4 · WHAT THIS CHANGES IN THE BUILD PLAN

The mentor verdict (`MENTOR-VERDICT.md`) stands: funerals first, one owner per question,
ledger, then day-as-data, then the planner. Adjustments from this Q&A:

- **Phase 0 (funerals) grows:** + delete the day rail · + delete the weekly review
  questions · Record's "+75 XP Set next week" card still dies, and its replacement link
  points at THE WEEK — **and the Sabbath screen gets the Set-next-week door** (§2.4).
- **Phase 1 is re-scoped down:** ledger + one door + reversible-while-day-open + the
  accidental-tap fix. **No price changes, no cap debates** — the real economy is designed
  with him after one lived, planned day (§2.6). The 250-extras-cap conversation is parked
  with it.
- **Phase 3 (day-as-data):** Mon–Fri template with the four deep blocks as fixtures ·
  Saturday template · Sunday = rest, no template.
- **Phase 4 (the planner):** copy-forward weeks with one-tap fresh · the Today whole-day
  render · the good-things widget + mid-block quick log.
- **Phase 5 (was recurrence/AWAY):** now begins with the **XP redesign session with him**,
  seeded by his one real day. AWAY mode and recurrence follow it.

---

## 5 · STANDING RULES OF ENGAGEMENT (unchanged, re-affirmed)

Never render a wall of failure · structure bends, the economy doesn't · forward-only ·
he plugs in his own content · visuals first, he decides from renditions · craft floor
(11px / 44px / 390px) · live and verified or it didn't happen · **and from the mentor
verdict: a rebuild isn't done until the old version is deleted and a test fails if it
returns.**
