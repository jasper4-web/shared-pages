# GOOD MORNING — what happened overnight

**Live now: sw `btb-v50`.** Ten defects fixed, 24 harnesses green against the live URL
(~1,538 checks), renders read. **Nine of the ten were mine. Five I shipped last night.**

Eleven agents audited the app. Their single most valuable output was auditing *me*.

---

## 1 · WHAT IS FIXED AND LIVE

**The one that mattered most.** On day one the front page told you
**"AT THIS PACE · 99 ON Feb 7 '28" in blood red.** `projection()` put today's *fraction* in
the numerator and today as a *whole day* in the denominator, so the day in progress diluted
the rate it was measured by. Five of the first seven mornings quoted a date you cannot reach.
**And Aug 3 is day one of your restart.**

| morning | before | now |
|---|---|---|
| day 1 | `99 ON Feb 7 '28` blood red | `TODAY STARTS THE CLIMB` |
| day 2 | `Mar 8 '27` blood red | `99 ON Dec 2` green |
| day 5 | `Dec 29` blood red | `99 ON Dec 2` green, stable |

**Forward-only was broken a third time.** A day you lived but never opened the app for was
scored with your *current* template — so editing your template re-scored the past
(0.7375 → 0.9375, measured). The comment above that code already claimed it read "the
constant"; the code read the mutable store. Now it reads the seed, and sealing a day stamps it.

**A met week was being re-scored on screen.** Raise a standard from 2× to 5× and last week's
met `2 / 2` in green became `2 / 5` in faint — a week you *did* meet, retroactively marked
failed. The engine was always forward-only; the display was not.

**One standard, two different counts, two tabs.** Today's chips carried hardcoded numbers, so
the Bank could say "5× a week" while Today said "/2". Also: **WALKS and MOVEMENT were showing
weekly targets that exist nowhere** — you cannot edit them and they feed nothing. They no
longer pretend.

**And:** `--blue` was used four times and never declared, so the rank-up moment had no
gradient, no glow and no coloured kicker, and THE WORK bar in the status window was invisible ·
the Bank's claimable reward lost its gold highlight when I buried a class for the fisheye ·
three places claimed a standard "feeds the 99" (it does not — measured) · two claimed tokens
could be spent (nothing spends them) · saving a reward with no name failed silently · the
compressed day rows were 27px tap targets against your own 44px floor.

---

## 2 · WHAT NEEDS YOUR DECISION

I did not absorb these. Each is one sentence from you.

**① THE PAR QUESTION — the biggest one.**
*Does restructuring your normal day lower the bar you are measured against?*
There is a live path to 99 that needs no cheating: thin your template through **"Make this my
normal weekday"** and the denominator shrinks permanently. Confirmed live on the shipped build,
reaching **99 · HIM · Dec 24**.
- **Recommended:** the bar follows your normal day, forward-only, and PAR is shown and dated.
- The alternative — pin the bar at 6 — **does not close the hole** (if your template is already
  four rows when the run opens, the seed is 4) and it caps an honest restructurer at **89
  forever**. Measured. That is why it is not recommended.

**② §2.2 — I amended a rule you wrote to bind yourself.** You wrote *"No editing today from
Today… a self-binding rule, do not add an escape hatch later out of helpfulness."* You then
asked for mid-day reordering. I narrowed the rule rather than dissolving it: **order may
change; content, length and amount may not.** 302 legal reorders changed the score in **0 of
302** cases. **Marked AWAITING YOUR RATIFICATION in NORTH-STAR.** If you want §2.2 whole, the
feature dies — a real option.

**③ Should a standard move the 99 again?** It currently does not, at all — one 110-day run
scores identically with standards seeded, absent, or impossible. Your chores still count,
through the LIFE slice. Re-wiring is an economy change and yours.

**④ `WAIT_FREE = 2` and `WAIT_RUN_FREE = 20`.** My daily cap did not work: four blocks plus two
"waiting" marks reached 99, same as flawless. The run budget fixes it (hand-verified
independently). Both numbers are provisional.

**⑤ The token spend door.** Tokens can be earned and never spent. `PROFILE.md` says schedule
privileges are the reward mechanic you care about most — and the two promised spends, "cut a
block in half" and "make a block yours", are exactly what the mid-day reorder work would buy.

**⑥ The vices screen runs at 7–8px** against your 11px floor — 10 elements, every state. Fixing
it reflows the densest, most emotionally loaded screen in the app, so it is a design pass, not
a midnight edit.

**⑦ walk/hike:** promote them to real standards, or stop showing counts?

**⑧ The reward price has no upper bound** — typing 999999 stores it, typing 5 silently becomes
50. Band proposed: **250–50,000**.

---

## 3 · THE RESTART IS SPECIFIED, NOT SHIPPED

`RUN_START` → **2026-08-03**, **110 → 105 weekdays**, the 5 days already lived discarded, Dec 25
unchanged. Deliberately **not** shipped at 1am: it moves the run's spine and rewrites assertions
across 24 harnesses. Aug 3 is four days out, so nothing is lost — and L02 caught that a naive
migration would grade your discarded 70% week as **0%** on the Sabbath before the run starts.

---

## 4 · HONEST STATUS OF THE ELEVEN SPECS

Your bar was: **two independent agents, both PASS, twice in a row.**

**Four lanes audited, four failed round one.** Every failure was substantive — L01's spec would
have stripped the safe-area inset from the focus-run overlay and moved every sheet 55px; L05's
price scale put four of its rungs in the left half of its own band. **All four came back revised
and stronger; none has completed two clean rounds yet.** Seven lanes are landed and unaudited.

I did not lower the bar to make the number look better. **No spec is marked done.** The ten
fixes above are mine, verified by me, and independent of the specs.

---

## 5 · THE THING WORTH KNOWING

Six times last night, something I had already called *verified* turned out not to be — and each
time it was caught by an instrument or a reader I did not control.

The pattern was always the same: **a test cannot fail on a state it never constructs.**
`xp2.js` passed 43/43 while Saturday broke the whole curve, because no fixture ever built a
Saturday. My `WAIT_FREE` guard passed because its grinder did *one* block while the optimal one
does four. My peek assertion could not see the day-one string because its fixture built 30 lived
days first. And the craft floor had **never been measured on a single overlay** — no harness had
ever opened the vices screen.

So `model/craft.js` now opens all 23 surfaces, and before it reports anything clean it **plants
a 7px label, a 30×44 button and a 44×30 button and aborts if it cannot see them.** A detector
that has never been shown a violation is not known to work. That idea came from a lane's
reviser, and it is the best thing produced last night.
