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
