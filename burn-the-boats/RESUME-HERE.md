# RESUME HERE — BURN THE BOATS

**Written 2026-07-27, mid-conversation.** Read this top to bottom before touching anything.
It is the single entry point. `HANDOFF-GOALS.md` is the deeper history; this file is where we are.

---

## 0 · WHERE WE ARE — the seam is BUILT AND LIVE. A merge pick is still owed.

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
- **Currently live:** commit `f6c1c61`, service worker **btb-v18**
- **Who he is:** `PROFILE.md`. Non-technical. 2–3 productive hours a day. **Pacific time.**

---

## 2 · RULES THAT ARE NOT NEGOTIABLE

1. **A change is not done until it is LIVE and verified.** Never ask "want me to deploy?"
   He reviews on his phone; a local edit is an invisible edit.
2. **Bump `const CACHE` in `sw.js` every single deploy.** Currently **btb-v18**.
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
node stress.js   [url]              # 360 · 6 widths × 5 clocks × 4 views × 3 states
```

**All green as of `f6c1c61`.** `arsenal-lint`: `node ~/build-arsenal/bin/arsenal-lint.js index.html`.

### The lesson this session keeps teaching

**Green tests confirm your architecture back to you.** Today, tests passed while:
- `autoCloseWeeks()` sat inside the Goals tab, so the week only closed if he opened one screen
- a goal rendered twice, and `1 clients` shipped
- the area import was invisible — 7 areas arrived and the screen looked identical
- **six separate ways existed for a goal he typed to vanish from every view**

**Three QC agents found 27 defects across two passes; ten were mine.** The third pass I ran myself
(the agent hit an API limit) found the worst one: **moving a goal to another area re-scored days
already lived.** Run a hostile QC pass on anything structural. Screenshot every screen and read it.

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
model/                         the goal model + ALL harnesses
renditions/
  rend-today-five.html         THE FIVE NEW DIRECTIONS — awaiting his pick
  rend-today-options.html      the four he rejected (only B, partially)
  rend-day-system-v2.html      the day-system proposal after the investigation
  rend-day-system.html         v1 of that proposal (superseded)
  rend-goals-system.html       the 13-screen goals design (built, shipped)
  rend-goal-builder.html       working prototype — he still hasn't used it
index.html.bak-*               snapshots, newest last
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
