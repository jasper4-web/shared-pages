# BRIEF — independent architecture review of BURN THE BOATS

You are being brought in as a **senior product architect and staff engineer** to review a
project end to end. Not to add a feature. Not to review a diff. To find out **what is
actually wrong with this thing**, say it plainly, and design the way out.

The owner asked for you specifically as *"my coding mentor who knows how to build all types
of things like this."* Treat that as your mandate. You are allowed — expected — to tell him
his current plan is wrong, and to tell the previous agent (Claude Code, Opus) that its
analysis is wrong. Everything in §5 below is that agent's opinion, clearly marked, and it
should be attacked rather than inherited.

---

## 1 · THE OWNER'S COMPLAINT, IN HIS WORDS

> "My main problem with the project is, I just wanna be able to plan my day. See my day,
> track my devices, create goal structures — but right now I feel like we're independently
> doing something and every time we do it it's a backtrack of another spot. So I really just
> want him to look it over like my coding mentor who knows how to build all types of things
> like this. Find the real problem and just hash it out."

*(Voice-transcribed. "track my devices" is almost certainly "track my days" or "track my
progress" — confirm with him rather than assuming.)*

**The sentence that matters is the middle one.** He is not reporting a missing feature. He
is reporting that **the work does not compound** — every addition seems to undo or contradict
something built earlier. That is an architecture complaint wearing a product complaint's
clothes, and diagnosing it correctly is the entire job.

Take it seriously and literally. If the codebase genuinely does force a backtrack every time
a feature lands, find the structural reason. If it doesn't — if the real cause is scope
sequencing, or an unfinished migration, or three half-built models coexisting — say that
instead. Do not assume he has correctly diagnosed his own frustration, and do not assume he
hasn't.

---

## 2 · WHAT THE THING IS

A single-file PWA that is his daily operating system for a 110-weekday run,
**Mon 2026-07-27 → Fri 2026-12-25**. Installed on his iPhone home screen. Four tabs:
**Today · Goals · Bank · Record**.

- **Source:** `~/Documents/burn-the-boats/index.html` — one file, ~4,700 lines, no build step,
  no framework, no dependencies. HTML + CSS + one `<script>`.
- **Live:** https://jasper4-web.github.io/shared-pages/burn-the-boats/
- **Deploy:** clone `jasper4-web/shared-pages` with `gh`, copy `index.html` + `sw.js` into
  `burn-the-boats/`, commit, push. **Bump `const CACHE` in `sw.js` on every single deploy**
  or his phone serves a stale copy.
- **Storage:** two localStorage keys. `btb3` → `S` (the day/economy/vices/bank model).
  `btb4` → `G` (the goals model: areas → goals → horizons → commits).
- **Who he is:** `PROFILE.md`. **Non-technical.** Two to three productive hours a day.
  Pacific time. He reviews on his phone.

### Read these first, in this order
| File | What it is |
|---|---|
| `RESUME-HERE.md` | Live state. Where the build actually stands, what shipped, what's owed |
| `PLANNER-GAP-ANALYSIS.md` | The previous agent's analysis of the planner problem — **opinion, not fact** |
| `PROFILE.md` | The user |
| `HANDOFF-GOALS.md` | Deeper history: decisions, critique, what shipped when |
| `renditions/rend-day-system-v2.html` | A day-system redesign, designed after a 6-agent investigation, **still unbuilt** |
| `agent-briefs/goals-ux-2026-07-28/lens-*.md` | A 4-lens UX + aesthetics audit, 44 findings |

---

## 3 · HOW TO VERIFY ANYTHING

There is a real harness suite. Run it against the **live URL** as the final gate, and
locally while working.

```bash
cd ~/Documents/burn-the-boats/model
node profiles.js                 # 320 · the pure model, 16 profiles × 20 screens
node qc3.js       [url]          #  51 · scoring integrity, economy, worst-case renders
node vanish.js    [url]          #  32 · every way a goal could disappear
node tiers.js     [url]          #  28 · the three goal tiers
node full.js      [url]          # 126 · week engine, review, migration, return path
node goals2.js    [url]          #  59 · the Goals tab
node phase1.js    [url]          #  24 · shape stamp, domain-follows-work, declutter, door
node area.js      [url]          #  10 · area rename + "Unsorted"
node boosts.js    [url]          #  37 · the boost economy and its ceilings
node backup.js    [url]          #  13 · backup/restore round trip, both stores
node extras.js    [url]          #  33 · wins/boosts moved off Today into the Bank
node rewardreq.js [url]          #  31 · reward requirements — gate, weekly window, picker
node stage1..4.js [url]          # 29 / 24 / 30 / 52 · the four stages of the goals-audit fix
node stress.js    [url]          # 360 · 6 widths × 5 clocks × 4 views × 3 states
```

**Gotchas:** `full.js`, `goals2.js`, `tiers.js` and `stress.js` need `SP=<screenshot dir>` in
the env or they crash at the end. `goals2.js` is **56/59** — three stale assertions guarding
a design that was deliberately replaced. `area.js` **crashes** on a stale selector and
currently covers nothing. Both are pre-existing and known; don't chase them as new.

**The lesson this project keeps re-learning, and you should assume it applies to you:**
green tests confirm your architecture back to you. Tests have passed while a goal rendered
twice, while `1 clients` shipped, while an import was completely invisible, and while six
separate ways existed for a typed goal to vanish from every view. **Screenshot every screen
and read the image.** Puppeteer + Chrome is already wired up in every harness — copy the
`boot()` helper from any of them.

---

## 4 · THE RULES THAT ARE NOT NEGOTIABLE

1. **Never render a wall of failure.** When he falls behind he stops opening the app — that
   is what killed the previous version. Everything is subordinate to this.
2. **Structure bends, the economy doesn't.** His rule. Areas, dates, day shape are settings.
   What something is *worth* is a guardrail.
3. **Forward-only.** Editing the future must never re-score the past.
4. **He plugs in his own content. Build the machine.** Anything currently hardcoded that is
   *his* — his areas, his blocks, his standards, his business names — is a seed, not law.
5. **Visuals first.** His stated method: *"Starting from the visuals is the best way for me."*
   Draw it, deploy it, let him react, then build.
6. **Craft floor:** no text under 11px · every tap ≥44px · no horizontal overflow at 390px.
7. A change is not done until it is **live and verified**. Never ask "want me to deploy?"

---

## 5 · THE PREVIOUS AGENT'S POSITION — TREAT AS A HYPOTHESIS TO BREAK

Everything in this section is Claude Code's current belief. It is the thing you are here to
audit. Verify each claim against the source before accepting any of it.

### 5.1 The claimed root cause
*"His goals are data; his day is source code."*

`WEEKDAY` is a `const` array of 14 block objects at `index.html:1234`. `SATURDAY` is 6 at
`:1250`. The whole scheduling engine is:

```js
function shape(){ const d=dow(); return d===0?[]:d===6?SATURDAY:WEEKDAY }   // :1329
```

No code path in the app writes to those arrays. Sunday is `[]` — the Sabbath is hardcoded to
`dow()===0`. Meanwhile the Goals tab made the opposite journey in July: a hardcoded
`S.december` object became a real user-owned model (`btb4`).

### 5.2 What "the weekly planner" actually is
`g2Week()` renders 5 weekdays × the 4 blocks where `kind==='deep'` = 20 slots. Its only verb
is *"which goal does this existing work block point at?"* It is a goal-attachment surface
that looks like a calendar. **This is what the owner hit when he said he can only schedule
work blocks.**

### 5.3 The coupling that made the constant load-bearing
- Every completed block pays a **flat 25 XP** — `award('blk:'+id, 25, …)` at `:2914`, `:3276`.
  Same for a 90-minute deep block and a 20-minute Bible reading.
- `WEEK_BLOCKS = WEEKDAY.filter(kind==='deep').length * 5` = 20 — the entire capacity model.
- `recount()` (`:1516`) builds the weekly % as `done / due`, where `due` counts scored blocks
  in the shape. **So adding structure to the day raises the denominator** — planning more of
  your life would lower your weekly score while inflating your XP. Both wrong, opposite ways.
- Block ids are load-bearing in five subsystems: the day record's `done/miss/wait/produced/
  focus/dom` maps, `GM.commit`'s `{weekKey, day, block}`, `QUOTAS`' string literals
  (`'bible'`, `'gym'`), reward `req:[{src:'block', id}]`, and a literal `{b1:0,b2:1,b3:2,b4:3}`
  index map inside `tacticFor()` at `:1464`.

### 5.4 The bug the owner found himself, and what it revealed
He reported: *"whenever I click something to add XP I can't accidentally un-click it — a lot
of times I'll click something but it'll be an accident but it'll still just give me the XP
anyways."*

Confirmed and **systemic**. `S.xp` only ever increases. `d.credited[key]` is written in three
places (`:1453`, `:2994`) and deleted in **none**. Every undo path in the app is the same:

```js
delete d.wins[k]; save(); toast('Removed — XP kept');            // tapWin  :2608
// "XP never goes backwards. Same law as tapWin."                 // undoBoost :5071
```

The intent was kindness — never take something away. In practice **it protects XP he never
earned**, and the toast tells him so. This is a good example of the pattern he is complaining
about: a principle applied consistently that produces the wrong result, and nobody noticed
because every individual screen was internally coherent.

### 5.5 The direction agreed with him in conversation (2026-07-28)
Not yet built. Not yet drawn. **All of it is up for you to overturn.**

1. The day becomes data — every row his, per day, morning to night.
2. THE WEEK is the overview; **a day is the thing you plan.** Tap Tuesday → plan Tuesday.
3. `WINS` (`:1259`) and `QUOTAS` (`:1552`) are seeds, not law. Both become user-owned, the
   way `boostDefs` already is.
4. **The palette is a memory, not a menu.** Type anything onto the day — no lookup, no
   category, no permission. It pays nothing and is just structure.
5. *"Make it count"* is an optional follow-up, after the thing is already placed: a row of
   emoji quick-pick chips (🧺 laundry, 🧹 cleaning) plus write-your-own. *"Make it a standard"*
   sets n× per week on anything, including something he invented that morning.
6. **Planning pays nothing. Doing pays.** (His locked rule: the Friday planner pays zero XP,
   because paying to plan is how the 08:30 composer became something he taps through.)
7. **Corrections are free while the day is open; once the day seals, XP is permanent.** The
   boundary already exists — `freezePast()` / `sealed`, with a source comment explaining that
   today is deliberately not sealed.
8. Ceiling: **250 XP/day on the added/extra stuff** — the surface being opened up is the
   surface that stays capped. Note a strong weekday already runs ~445 XP total and the reward
   ladder (900 → 22,000) is priced against that, so a 250 cap on *everything* would re-price
   the whole Bank. **This distinction has been flagged to him but not confirmed by him.**
9. Suggestions by time of day mostly already exist — `elseCands()` at `:3025` scores
   candidates by the finishing block's domain and the clock, with hard vetoes ("in bed on
   time" is never offered before 20:00). It only fires at the end of a focus run today.
10. Recurrence ("every Tuesday from now on") deliberately deferred until he's used the manual
    version for a week.

### 5.6 Loose debt found along the way
- `S.december` still sits in `DEFAULT` at `:1270` — a model documented as deleted in July.
- `S.week[k].theme` seeds `{b1:'SANO', b2:'SANO', b3:'LA Edible', b4:'Admin + follow-ups'}`
  on every new week (`:1440`) — his business names, in code.
- The Sabbath cannot be moved off Sunday.
- An unbuilt design already exists for much of the day system (`rend-day-system-v2.html`):
  the slot editor, three run modes (Locked / Phone / **Away**), a one-screen Friday planner,
  elastic block lengths. **The AWAY mode matters** — today a class, an appointment or a client
  call cannot be completed at all, and the only exit is "Waiting on someone," which a six-agent
  investigation flagged as a lie the design manufactures.

---

## 6 · WHAT WE WANT FROM YOU

**Do not write app code.** Do not restyle anything. Do not ship a feature.

Produce a **verdict and an architecture**. Specifically:

1. **The real problem.** One paragraph, in language he can read. If "the day is a constant"
   is genuinely the root cause, say so and say why the previous agent's framing is right. If
   the root cause is something else — an unfinished migration between `S` and `G`, two
   competing models of "a day," a scoring engine that reconstructs state instead of storing
   it, or something nobody in this conversation has named — **that is the finding, and it is
   worth more than agreement.**

2. **Why every addition backtracks.** This is his actual complaint. Name the mechanism.
   Concrete examples from the codebase, with `file:line`. Is it shared mutable constants?
   Two stores with overlapping responsibility? Scoring derived from presentation? An economy
   coupled to layout? Say which, and prove it.

3. **The target architecture.** What the data model *should* be for an app whose job is:
   plan a day → live the day → record what happened → roll it up into goals and a score.
   Include what you would delete, not just what you would add. Be specific enough that
   someone could start on Monday.

4. **The migration path.** This app has **live user data from a run that has already
   started** and a user who will open it tomorrow morning. There is no maintenance window and
   no acceptable "start fresh." Sequence the changes so that each step is shippable, and say
   which steps are invisible to him.

5. **What to build first, and what not to build at all.** He has a working app he depends on
   daily. Ruthlessness here is a service to him.

6. **Where the previous agent is wrong.** Explicitly. Being agreeable here has negative value.

### Ground rules
- **Verify before asserting.** Every claim in §5 has a `file:line`. Check them. Several
  earlier "findings" on this project have turned out to be wrong on inspection.
- **Read the render, not just the source.** Take screenshots of all four tabs in a seeded
  state before forming a view. Harness `boot()` helpers are copy-pasteable.
- **Judge it as a product, not a codebase.** A 4,700-line single file with no dependencies is
  not automatically a problem — it may be the correct architecture for a non-technical owner
  who needs the thing to work on his phone forever. Say so if you think so.
- **Write for him, not for us.** He is non-technical and will read your verdict himself. Lead
  with the answer. Keep the engineering detail below it, clearly separated.
- If you find something that changes what should be built next, **say it early and loudly**,
  even if it invalidates this entire brief.
