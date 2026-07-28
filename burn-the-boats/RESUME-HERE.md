# RESUME HERE — BURN THE BOATS

**Written 2026-07-27, mid-conversation.** Read this top to bottom before touching anything.
It is the single entry point. `HANDOFF-GOALS.md` is the deeper history; this file is where we are.

---

## 0 · THE VERY LAST THING HE SAID — you are answering this

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

**A draft of the five was in progress when he stopped it.** The planned directions were:
**E · The Clock** (day as a ring/arc, wins accumulate as marks on it) · **F · The Feed** (a downward
thread; blocks post themselves, notes are replies) · **G · One Thing** (only the current block,
full-bleed; wins only at the close) · **H · The Filmstrip** (block on top, horizontally swipeable
cards below) · **I · The Spine** (vertical timeline down the left, echoing the Goals spine).
**These are a starting point, not a commitment** — he asked for options that are *not* the first
thought, so interrogate them before drawing.

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
  rend-today-options.html      the four he just rejected (only B, partially)
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

Say back what he asked for in §0, then **draw five new Today-page directions** — genuinely different
architectures, keeping back-of-card notes, rethinking where wins go, and not five deck variants.
Deploy the rendition to a public URL, verify it renders at 440px with no sub-11px text and no
overflow, and `open` it for him. **Do not build anything into `index.html` until he picks.**
