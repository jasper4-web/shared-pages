# THE PLANNER GAP — why you can only schedule your work blocks

**Written 2026-07-28.** Analysis only. No app file was modified.
Read with `RESUME-HERE.md` (where the build stands) and `rend-day-system-v2.html`
(the day-system proposal from after the investigation, still unbuilt).

---

## 0 · THE ONE-SENTENCE ANSWER

**Your goals are data. Your day is source code.** The Goals tab already made the journey
you are now asking the schedule to make — it went from a hardcoded `S.december` object to a
real model you own (`btb4`: areas → goals → commits, all created, edited and deleted by you).
The day never made that journey. `WEEKDAY` is still a `const` array of fourteen objects at
`index.html:1234`, and **there is no code path anywhere in the app that writes to it.**

Everything you felt is downstream of that one fact.

---

## 1 · WHAT THE CURRENT SYSTEM ACTUALLY DOES

### 1.1 The whole scheduling engine is three lines

```js
const WEEKDAY = [ …14 blocks… ];          // index.html:1234
const SATURDAY = [ …6 blocks… ];          // index.html:1250
function shape(){ const d=dow(); return d===0?[]:d===6?SATURDAY:WEEKDAY }   // :1329
```

`shape()` is what Today renders, what the focus run reads, what scoring counts, and what
THE WEEK draws its slots from. It takes one input — the day of the week — and returns one of
three frozen arrays. Sunday is `[]`, which is why the Sabbath is a full-screen takeover
rather than a day you chose.

**Hardcoded, with no editor:** every block's name, start time, end time, domain, kind,
optional flag, focus length and auto-complete flag. Fourteen on a weekday, six on a Saturday.

### 1.2 What "the weekly planner" actually is

`g2Week()` renders a 5 × 4 grid — five weekdays × the four blocks where `kind === 'deep'`.
Twenty slots. That is the whole of THE WEEK.

It is **not a planner. It is a goal-attachment surface.** Its only verb is *"which goal does
this existing work block point at?"* It reads as a planner because it is called THE WEEK,
it is laid out like a calendar, and every other row of your actual day is absent from it.

That is exactly the gap you felt, named precisely.

### 1.3 The block ID is load-bearing in five separate subsystems

This is why the constant is hard to move, and it is worth seeing in one place:

| System | How it uses a block id | Where |
|---|---|---|
| The day record | `done{}` `miss{}` `wait{}` `produced{}` `focus{}` `dom{}` all keyed by block id | `day()` :1437 |
| Commitments | `{goalId, weekKey, day, block:'b1'}` | `GM.commit` :3506 |
| Weekly standards | `QUOTAS` names `'bible'` and `'gym'` as string literals | :1552 |
| Reward terms | `req:[{src:'block', id:'gym', n:2}]` | `reqHits()` |
| The cascade | `tacticFor()` contains a literal `{b1:0,b2:1,b3:2,b4:3}` index map | :1464 |

Plus `S.week[k].theme` is seeded `{b1:'SANO', b2:'SANO', b3:'LA Edible', b4:'Admin + follow-ups'}`
on every new week — your business names, in code, at `:1440`.

### 1.4 The shape stamp is a *record*, not a *plan*

`stampToday()` (:1342) copies `shape()` into `S.days[k].shape` once per day. This is good
engineering and it is the foundation the rest of this analysis builds on — it is why editing
the future can never re-score the past. But note what it is: **the app writing down the
constant it is about to run.** It is a photograph of a decision you were never asked to make.

### 1.5 The economy is priced per block, at a flat rate

```js
award('blk:'+id, 25, 'block done', goal)      // :2914, :3276 — every block, same 25 XP
```

Every completed block pays **25 XP flat** — regardless of kind, length, difficulty or
domain. A 90-minute deep block and a 20-minute Bible reading pay identically.
`WEEK_BLOCKS = WEEKDAY.filter(kind==='deep').length * 5 = 20` is the entire capacity model.

**This is the real reason the day is a constant.** More on it in §4.

---

## 2 · WHAT THE INTENDED SYSTEM SHOULD DO

Your words, translated into the product concepts each one requires:

| You said | The concept it requires | Exists today? |
|---|---|---|
| "Plan every hour of every day" | The day is **data**, not code | ❌ |
| "Create, edit, move, delete any time block" | **Block** as a first-class user-owned object | ❌ |
| "Schedule … exercise, meals, errands, family, hobbies, appointments, learning, recovery" | Block **kinds beyond `deep`** that are still plannable and trackable | ⚠️ kinds exist, none are editable |
| "Rearrange quickly as priorities change" | **Per-date override** of a plan | ❌ |
| "Build recurring routines while customising individual days" | **Recurrence rule + exception** — the hardest one | ❌ |
| "View my week as something I completely control" | A week view over **the whole day**, not 4 slots | ❌ |
| "day, week, month, and long-term" | The schedule has **no horizon above the week** | ❌ (Goals has horizons; time doesn't) |

---

## 3 · EVERYTHING THAT IS MISSING

### 3.1 Missing data-model concepts

1. **A block definition store.** Blocks that you own, with stable generated ids, the way
   `areas` and `goals` and `boostDefs` are owned.
2. **A day template ("a shape") as a named object.** Right now there are exactly two,
   unnamed, in code. You need "Weekday", "Saturday", and room for "Client day",
   "Travel day", "Recovery day".
3. **A calendar assignment layer** — which template a given date uses.
4. **Per-date overrides** — this Wednesday, block 3 moves to 15:00 and there is a dentist
   at 11:00. Without this, changing one day means changing every day.
5. **Recurrence rules.** "Gym Tue/Thu", "Spanish class Mondays from week 14". The v2
   proposal's *"Make this the standard from now on"* is exactly this and was never built.
6. **A separation of PLAN from RECORD.** `S.days[k].shape` is currently both.
7. **Appointments** — externally-fixed times that are not routine and cannot be moved by
   you (a class, a client call, a funeral). Fundamentally different from a routine.
8. **Duration as a range** (min / ideal). Already designed in v2 as "the air in your day";
   not built. Today a block has one fixed length and finishing early reads as half-failed.
9. **Time as the scarce resource.** Capacity is `20 slots`. It should be minutes.

### 3.2 Missing product surfaces

10. **"My normal day"** — a template editor. *This is the single missing screen.*
11. **A week view over the whole day**, not the four deep slots.
12. **A month view.** You named it in the vision; nothing in the app renders one.
13. **The AWAY run mode** — designed in v2, unbuilt. Until it exists, a class or an
    appointment *cannot be completed at all*, and the only exit is "Waiting on someone",
    which the investigation already flagged as a lie the design manufactures.
14. **A one-screen planning ritual** for the week ahead. Designed in v2, unbuilt.

### 3.3 Missing controls that make the above safe

15. **Archive-not-delete for blocks** (goals and areas already work this way).
16. **A weekly-standards editor.** `QUOTAS` is a const; the standards it holds are yours.
17. **A Sabbath you can place.** It is `dow()===0`, hardcoded.

---

## 4 · WHY THE GAPS EXIST

Four reasons. Three were correct decisions at the time. One is the real blocker.

### 4.1 The app was built as your instrument, not as a product
It was built from `PROFILE.md` for a 110-weekday run that started the day it shipped. The
day in the code *was* your day. Hardcoding it was the fastest correct answer and it bought
the whole first version. It stopped being correct the moment the day needed to change.

### 4.2 **The economy is anchored to the shape — this is the actual blocker**
Every block pays a flat 25 XP. Capacity is a count of slots. The OVR curve is tuned so that
perfect execution lands on 99 on the last day of the run.

**Give the user a "+ Add block" button today and he can print XP.** Ten blocks a day is
250 XP a day of pure inflation, the Bank's reward ladder (900 → 22,000 XP) collapses, and
the 99 stops meaning anything. The constant is not laziness — **it is the load-bearing wall
holding the economy up.**

There is a second, opposite coupling worth knowing, because it points the same way:
`recount()` builds the weekly percentage as `done / due`, where `due` counts scored blocks
in the shape. **Adding structure to your day therefore raises your denominator.** Under
today's engine, planning more of your life would *lower* your weekly score while
simultaneously inflating your XP. Both numbers are wrong in opposite directions.

Your own locked rule already resolves this — it just hasn't been implemented:

> **"Structure bends, the economy doesn't."**

The code currently reads that as *"the structure is frozen."* Your rule says the opposite:
the structure is **supposed** to bend, and only *what something is worth* is the guardrail.
Closing this gap is the whole job.

### 4.3 Block ids are identifiers, not labels
Five subsystems key off `'b1'`, `'gym'`, `'bible'`. User-created blocks mean generated ids,
and history has to survive that. Solvable, and the pattern is already proven twice in this
codebase (`areas`, `goals`), but it is real work and it is why nobody reached for it casually.

### 4.4 The one foundation that *does* exist was built for a different reason
`stampToday()` / `freezePast()` / `sealed` exist to stop history re-scoring itself. They
were built as scoring insurance. They happen to be **exactly** the mechanism a user-editable
schedule needs — but they only ever record the constant, and only for today.

---

## 5 · RECOMMENDED ARCHITECTURE

### The thesis
**Do to the day exactly what was already done to the goals.** Move it from `const` to a
store, split the plan from the record, and re-price the economy in minutes so the structure
can bend without the numbers moving.

### Move 1 · The day becomes three layers of data

```
BLOCK DEFINITION     id (generated) · name · domain · kind · window · min/ideal length · rule
      ↓
DAY TEMPLATE         a named, ordered set of block refs        "Weekday" · "Saturday" · "Client day"
      ↓
CALENDAR             date → template, plus per-date OVERRIDES  (moved · added · removed · done early)
```

This is the standard recurrence-with-exceptions model (a simplified RFC 5545). **Do not
invent a new one.** Recurrence lives on the definition; the exception lives on the date.
That single split is what gives you *"recurring routines while still customising individual
days"* — the requirement nothing else in the design satisfies.

Ship it as a new store (`btb5`) or inside `G`. Either way, the existing `WEEKDAY` /
`SATURDAY` arrays become **the seed**, keeping their current ids — so every day of history,
every commit, every QUOTA and every reward requirement keeps resolving on day one.

### Move 2 · Split PLAN from RECORD

- `plan[date]` — what you *intend*. Fully editable.
- `S.days[date].shape` — what you *lived*. Already exists. Do not touch it.

The freeze rule is already written and already proven: **a day is editable until it begins;
after that, edits create a new plan for future days.** That is your forward-only rule,
applied to time instead of goals. `freezePast()` and `sealed` do this today for scoring;
they get reused verbatim.

### Move 3 · Re-price the economy in minutes — **decide this before anything else**

This is the gate. Nothing else is safe to build until it is settled.

- **Capacity becomes minutes, not slots.** `WEEK_BLOCKS = 20` becomes
  `WEEK_DEEP_MINUTES ≈ 1,600` (4 blocks × ~80 min × 5 days — today's real number).
  Now "add a fifth deep block" *costs* minutes from somewhere. Self-limiting, honest, and
  it makes the trade visible instead of forbidden.
- **A block is priced by committed minutes**, not by existing. Three 30-minute blocks pay
  what one 90-minute block pays. XP inflation becomes arithmetically impossible.
- **Keep a per-day ceiling.** The precedent already ships — boosts are capped at 250/day.
- **`kind` keeps deciding *whether* a block scores.** Only what you mark sacred draws from
  the deep budget. Errands, meals and family time can be planned and tracked without
  entering the economy at all — which is what makes it safe to plan your whole life in here.

### Move 4 · Stable ids, and history that survives editing

- Generated ids (`uid('b')`) for new blocks; the current literals stay as the seed's ids.
- Delete `tacticFor()`'s `{b1:0,b2:1,b3:2,b4:3}` map — derive the index from position.
- Deleting a block sets `archived:1`. It never removes history. Same as areas.
- `QUOTAS` moves into state alongside `boostDefs` — the seed stays, but it stops being ours
  the moment you touch it.

### Move 5 · Three surfaces, only one of them genuinely new

| Surface | Change |
|---|---|
| **Today** | *No visible change.* It renders `shape()` today; it renders the plan tomorrow. |
| **THE WEEK** | Same grid component, whole-day data. Twenty deep slots become your actual week. |
| **"My normal day"** | **NEW.** The template editor. v2 already drew the *slot* editor (§03) — extend it from "edit B1" to "edit any row, add a row, move a row, delete a row". |

### Build order

| # | | Visible? |
|---|---|---|
| **0** | **Decide how a day is priced** (owner call — §3 of Move 3) | — |
| 1 | Shapes as data + seed migration | No — app looks identical |
| 2 | Plan / record split + forward-only freeze | No |
| 3 | "My normal day" — the template editor | **Yes — this is the one you feel** |
| 4 | Per-date overrides + THE WEEK over the whole day | Yes |
| 5 | Recurrence rules ("from now on, Tue/Thu") | Yes |
| 6 | AWAY run mode + appointments | Yes — unblocks life, not just desk |

Steps 1 and 2 are invisible and must come first, for the same reason the shape stamp had to
come before the day system: *nothing else can safely ship before them.*

### What I would deliberately NOT build

- **A drag-and-drop calendar grid.** You have 2–3 productive hours and a phone. Rows that
  reorder, not a grid you drag on.
- **External calendar sync.** A product on its own, and it inverts who owns the plan.
- **A template library.** Already killed by the research: 1 of 22 apps ships one, and it is
  the one famous for overwhelming people. "Restore a week you actually lived" replaces it
  and costs nothing, because history already stores the shape.
- **Overlapping / multi-track calendars.** One day, one column.

---

## 6 · THE UX SHIFT, IN ONE LINE

Today the app asks: **"Here is your day. Which goal does block 3 serve?"**
It should ask: **"What does your week look like? Now — which parts of it are sacred?"**

### The one caution
Total freedom would be a downgrade *for you specifically*. Your profile is two to three
productive hours, non-technical, and the previous version died because it made you feel
behind. **An empty calendar is a wall of failure with better manners.**

So the recommendation is **an editable default, never a blank canvas.** You open "My normal
day" and your current day is already there, filled in, exactly as it runs now. You change
what is wrong. You are never asked to build a life from nothing at 6am.

---

## 7 · DEBT FOUND WHILE READING (unrelated, worth clearing)

- `S.december` is still in `DEFAULT` (:1270) — eight lines of a model documented as deleted
  when Goals v2 shipped. Dead seed data.
- `S.week[k].theme` hardcodes your business names on every new week (:1440).
- The Sabbath cannot be moved off Sunday.
- `goals2.js` carries three stale assertions; `area.js` crashes on a stale selector. Both
  pre-existing, both mean a harness guards less than it claims.
