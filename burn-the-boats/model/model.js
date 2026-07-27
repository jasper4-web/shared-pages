/* ============================================================================
   BURN THE BOATS — THE GOAL MODEL, v1
   ----------------------------------------------------------------------------
   Four objects: AREA · HORIZON · GOAL · COMMIT.  Nothing here knows who Jasper
   is.  Built to his standing instruction: "the system shouldn't be dependent on
   working just off my goals."

   Lives under its own storage key.  The old btb3 save is never read or written
   by anything in this file.
   ========================================================================= */

const KEY = 'btb4';

/* ---------------------------------------------------------------- defaults */
function emptyG(){
  return {
    v: 1,
    areas: [], horizons: [], goals: [], commits: [],
    meta: { imported: 0, softCap: 5 }
  };
}

/* ------------------------------------------------------------------- utils */
let _seq = 0;
/* Date.now() is unavailable in some harnesses and would make tests
   non-deterministic anyway — ids are a counter plus a caller-supplied stamp. */
function uid(prefix, stamp){ _seq++; return `${prefix}${(stamp||0).toString(36)}${_seq.toString(36)}`; }
const byRank = (a,b)=> (a.rank||0)-(b.rank||0);
const clamp01 = n => Math.max(0, Math.min(1, n));

/* ============================== AREAS =====================================
   An area never ends.  It optionally carries weekly standards ("gym 2x") —
   HIS ANSWER: "they can carry weekly standards. They cannot. It just depends."
   So `standards` is nullable and an area with none must look deliberate.
   `domain` points at one of the six fixed radar domains so blocks still credit
   the right slice — the radar is NOT rebuilt (owner decision, 2026-07-26).
   ========================================================================= */
const DOMAIN_KEYS = ['WORK','CAPITAL','BODY','FAITH','MIND','PEOPLE'];

function addArea(G, {name, domain, colour, standards, stamp}={}){
  if(!name || !String(name).trim()) throw new Error('an area needs a name');
  const a = {
    id: uid('a', stamp), name: String(name).trim(),
    domain: DOMAIN_KEYS.includes(domain) ? domain : 'WORK',
    colour: colour || null,
    rank: G.areas.length + 1,
    standards: Array.isArray(standards) ? standards.slice() : [],
    archived: 0
  };
  G.areas.push(a);
  return a;
}
const liveAreas = G => G.areas.filter(a=>!a.archived).sort(byRank);
const areaById  = (G,id) => G.areas.find(a=>a.id===id) || null;

/* Archive, never delete: goals and history keep pointing at it. */
function archiveArea(G, id){
  const a = areaById(G,id); if(!a) return null;
  a.archived = 1;
  return a;
}
/* Reordering must renumber every live area, or two areas share a rank and the
   sort becomes insertion-order — which looks like a random shuffle to a user. */
function reorderArea(G, id, dir){
  const list = liveAreas(G);
  const i = list.findIndex(a=>a.id===id);
  if(i<0) return false;
  const j = i + (dir<0 ? -1 : 1);
  if(j<0 || j>=list.length) return false;
  [list[i], list[j]] = [list[j], list[i]];
  list.forEach((a,k)=> a.rank = k+1);
  return true;
}

/* ============================= HORIZONS ===================================
   A horizon is JUST A NAMED DATE.  It is an attribute of a goal, never a level
   in the hierarchy — that is the decision the whole model turns on, and it is
   what makes "monthly, two-month, past the end of the run, anything" free.
   ========================================================================= */
function addHorizon(G, {label, date, stamp}={}){
  if(!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) throw new Error('a horizon needs an ISO date');
  const h = { id: uid('h', stamp), label: (label||date).trim(), date, archived: 0 };
  G.horizons.push(h);
  return h;
}
const liveHorizons = G => G.horizons.filter(h=>!h.archived).sort((a,b)=> a.date < b.date ? -1 : 1);
const horizonById  = (G,id) => G.horizons.find(h=>h.id===id) || null;

/* Deleting a date must NEVER delete a goal — screen 12 promises this out loud.
   The goals are set loose, not destroyed. */
function removeHorizon(G, id){
  const h = horizonById(G,id); if(!h) return 0;
  let freed = 0;
  G.goals.forEach(g=>{ if(g.horizonId===id){ g.horizonId = null; freed++; } });
  G.horizons = G.horizons.filter(x=>x.id!==id);
  return freed;
}

/* =============================== GOALS ====================================
   Title and area are enough to save.  Everything else is optional and can
   never block creation — that rule is why goals get written down at all.

   THE PROGRESS TRAP: the old app stored `at` and `target` and assumed the
   number goes UP (177 -> 185 lbs).  Anyone losing weight, paying down debt or
   cutting hours would watch every bar EMPTY as they succeeded.  Storing a
   `start` baseline fixes both directions with one formula and needs no flag:
       (at - start) / (target - start)
   With start 200, target 185, at 195 -> (-5)/(-15) = 0.33.  Correct.
   ========================================================================= */
const KINDS  = ['outcome','learning'];          /* 'habit' deliberately absent —
                                                   an area standard IS the habit.
                                                   Two names for one thing was
                                                   mentor objection #5. */
const STATES = ['active','parked','done','dropped'];

function addGoal(G, {title, areaId, horizonId, parentId, kind, start, at, target, unit,
                     evidence, obstacle, lead, wig, stamp}={}){
  if(!title || !String(title).trim()) throw new Error('a goal needs a title');
  if(!areaById(G, areaId)) throw new Error('a goal needs a real area');
  const hasNums = target !== undefined && target !== null && target !== '';
  const g = {
    id: uid('g', stamp),
    areaId,
    horizonId: horizonById(G, horizonId) ? horizonId : null,
    parentId: parentId || null,          /* navigational only — NEVER computed */
    title: String(title).trim(),
    kind: KINDS.includes(kind) ? kind : 'outcome',
    start:  hasNums ? Number(start !== undefined && start !== null ? start : (at||0)) : null,
    at:     hasNums ? Number(at||0) : null,
    target: hasNums ? Number(target)     : null,
    unit: unit || '',
    evidence: evidence || '',
    obstacle: obstacle || '',
    lead: lead && lead.name ? {name:lead.name, target:Number(lead.target)||0} : null,
    wig: wig ? 1 : 0,
    rank: G.goals.length + 1,
    state: 'active',
    confidence: [],                      /* [{week, v}] — v in 1..3 */
    history: []                          /* the easing trail, append-only */
  };
  G.goals.push(g);
  return g;
}
const goalById   = (G,id) => G.goals.find(g=>g.id===id) || null;
const liveGoals  = G => G.goals.filter(g=>g.state==='active');
const goalsOfArea= (G,areaId) => liveGoals(G).filter(g=>g.areaId===areaId).sort(byRank);
const goalsAt    = (G,hId)    => liveGoals(G).filter(g=>g.horizonId===hId).sort(byRank);
/* Goals with no date are the ones that quietly rot.  They need their own bucket
   on the By-date view or they become invisible. */
const undatedGoals = G => liveGoals(G).filter(g=>!g.horizonId);

/* null means "this goal has no number" — render a state, never a 0% bar.
   A 0% bar on a qualitative goal is a wall of failure drawn by accident. */
function progress(g){
  if(g.start===null || g.target===null) return null;
  if(g.target === g.start) return g.at >= g.target ? 1 : 0;
  return clamp01((g.at - g.start) / (g.target - g.start));
}
const direction = g => (g.start===null||g.target===null) ? null : (g.target < g.start ? 'down' : 'up');

/* ---- editing: hardening is silent, easing leaves a trail ------------------
   Adapted from Beeminder's akrasia horizon, softened on his call: BOTH the
   visible trail (default) and an opt-in delay are supported per goal.
   NOTHING here ever zeroes a counter. */
function editGoal(G, id, patch, {day=0}={}){
  const g = goalById(G,id); if(!g) return null;
  const eased = [];

  if(patch.target !== undefined && patch.target !== null){
    if(g.target === null){
      /* FIRST number on a goal that had none. The ease check needs a previous value
         to compare against; guarding on `g.target !== null` meant a goal created
         from the empty state (title only) could NEVER be given a number afterwards. */
      g.target = Number(patch.target);
      if(g.start === null) g.start = Number(patch.start !== undefined && patch.start !== null ? patch.start : (patch.at||0));
      if(g.at === null)    g.at    = Number(patch.at !== undefined && patch.at !== null ? patch.at : g.start);
    } else {
      const from = g.target, to = Number(patch.target);
      const harder = direction(g)==='down' ? to < from : to > from;
      if(to !== from && !harder) eased.push({t:'target', from, to});
      g.target = to;
    }
  }
  if(patch.horizonId !== undefined && patch.horizonId !== g.horizonId){
    const a = horizonById(G,g.horizonId), b = horizonById(G,patch.horizonId);
    if(a && b && b.date > a.date) eased.push({t:'date', from:a.label, to:b.label});
    g.horizonId = patch.horizonId;
  }
  if(patch.lead !== undefined && g.lead && patch.lead){
    const from = g.lead.target, to = Number(patch.lead.target);
    if(to < from) eased.push({t:'lead', from, to});
  }
  ['title','evidence','obstacle','unit','kind','wig','areaId','at','start'].forEach(k=>{
    if(patch[k] !== undefined) g[k] = patch[k];
  });
  if(patch.lead !== undefined) g.lead = patch.lead;

  eased.forEach(e => g.history.push({...e, day}));
  return g;
}
function setState(G, id, state, {day=0, note=''}={}){
  const g = goalById(G,id); if(!g || !STATES.includes(state)) return null;
  if(g.state !== state) g.history.push({t:'state', from:g.state, to:state, day, note});
  g.state = state;
  return g;
}

/* ---- confidence: 1 low .. 3 high.  It has EXACTLY ONE JOB ---------------
   Mentor objection #4 was that confidence is collected and never used.  Two
   consecutive drops pulls the goal into migration EARLY, before its date —
   which also drains the end-of-horizon pile-up so the turn is 1-2 items, not 6.
   It is never scored and never touches the rating. */
function setConfidence(G, id, v, week){
  const g = goalById(G,id); if(!g) return null;
  const n = Math.max(1, Math.min(3, Number(v)||1));
  const last = g.confidence[g.confidence.length-1];
  if(last && last.week === week) last.v = n; else g.confidence.push({week, v:n});
  return g;
}
function needsEarlyMigration(g){
  const c = g.confidence;
  if(c.length < 3) return false;
  const [a,b,d] = c.slice(-3);
  return b.v < a.v && d.v < b.v;          /* two consecutive drops */
}

/* ============================== COMMITS ===================================
   A commit IS a block.  Mentor objection #2 was that the commitment and the
   block were the same object drawn twice — so there is only one object here,
   keyed by the week and the block id.
   ========================================================================= */
function commit(G, {goalId, text, weekKey, day, block, stamp}={}){
  if(!goalById(G,goalId)) throw new Error('a commit needs a real goal');
  const existing = G.commits.find(c=>c.weekKey===weekKey && c.day===day && c.block===block);
  if(existing){ existing.goalId = goalId; existing.text = text || existing.text; return existing; }
  const c = { id: uid('c', stamp), goalId, text: text||'', weekKey, day, block, done:0, carried:0 };
  G.commits.push(c);
  return c;
}
const commitsOfWeek = (G, weekKey) => G.commits.filter(c=>c.weekKey===weekKey);

/* Capacity is the only honest scarcity in the app — it is what makes a goal
   COST something.  It belongs at the top of the Goals screen, permanently. */
function capacity(G, weekKey, total=20){
  const cs = commitsOfWeek(G, weekKey);
  const perGoal = {};
  cs.forEach(c=> perGoal[c.goalId] = (perGoal[c.goalId]||0)+1);
  const live = liveGoals(G).length;
  return {
    total, committed: cs.length, free: Math.max(0, total-cs.length),
    liveGoals: live,
    blocksEach: live ? Math.round(total/live*10)/10 : null,
    perGoal,
    /* areas with nothing on them this week — "allowed, but it should be a
       decision rather than an accident" */
    orphanAreas: liveAreas(G)
      .filter(a=> !cs.some(c=> (goalById(G,c.goalId)||{}).areaId === a.id))
      .map(a=>a.id)
  };
}

/* ---- the soft cap: it argues, it never blocks (owner decision) ---------- */
function capCheck(G){
  const live = liveGoals(G).length, cap = G.meta.softCap || 5;
  if(live < cap) return {over:false, live, cap};
  return {
    over: true, live, cap,
    blocksEach: Math.round(20/(live+1)*10)/10,
    /* what to offer parking: weakest confidence first, then least committed */
    suggest: liveGoals(G).slice().sort((a,b)=>{
      const cv = g => g.confidence.length ? g.confidence[g.confidence.length-1].v : 9;
      return cv(a)-cv(b);
    }).slice(0,3).map(g=>g.id)
  };
}

/* ============================== THE WEEK ==================================
   THE WEEK CLOSES ITSELF.  This is the fix for the single point of failure:
   the old design hung next-week's draft, the confidence trend and the migration
   off a three-step Friday ritual — the most-abandoned ritual in the industry.
   Now the close is derived from what the app already tracked, and the ritual is
   an optional, richer editor of the same draft.  Skipping it costs nothing.
   ========================================================================= */
function closeWeek(G, weekKey, doneMap={}){
  const cs = commitsOfWeek(G, weekKey);
  cs.forEach(c=>{ if(doneMap[c.block+':'+c.day] !== undefined) c.done = doneMap[c.block+':'+c.day]?1:0; });
  const done = cs.filter(c=>c.done), missed = cs.filter(c=>!c.done);
  const missedByGoal = {};
  missed.forEach(c=> missedByGoal[c.goalId] = (missedByGoal[c.goalId]||0)+1);
  return {
    weekKey, committed: cs.length, done: done.length, missed: missed.length,
    pct: cs.length ? Math.round(done.length/cs.length*100) : null,   /* null, NOT 0 */
    repeatMisses: Object.keys(missedByGoal).filter(k=>missedByGoal[k]>=2),
    carry: missed.map(c=>c.id)
  };
}
/* Never a blank form.  Runs whether or not he opened the review. */
function draftWeek(G, fromWeek, toWeek, {stamp=0}={}){
  const missed = commitsOfWeek(G, fromWeek).filter(c=>!c.done);
  const made = [];
  missed.forEach(c=>{
    const g = goalById(G, c.goalId);
    if(!g || g.state !== 'active') return;         /* never resurrect a dropped goal */
    const n = commit(G, {goalId:c.goalId, text:c.text, weekKey:toWeek, day:c.day, block:c.block, stamp});
    n.carried = (c.carried||0)+1;
    made.push(n);
  });
  return made;
}

/* ============================== THE IMPORT ================================
   Owner decision: bring in the AREAS (structural, no judgment needed) and
   leave the GOALS for him to type — that is the part that matters and the part
   that proves the machine works.  Runs once; `meta.imported` guards it.
   ========================================================================= */
function importAreas(G, {areas, horizons, stamp=0}={}){
  if(G.meta.imported) return {skipped:true};
  (areas||[]).forEach(a=> addArea(G, {...a, stamp}));
  (horizons||[]).forEach(h=> addHorizon(G, {...h, stamp}));
  G.meta.imported = 1;
  return {skipped:false, areas:G.areas.length, horizons:G.horizons.length};
}

/* ---------------------------------------------------------------- exports */
if(typeof module !== 'undefined') module.exports = {
  KEY, emptyG, DOMAIN_KEYS, KINDS, STATES,
  addArea, liveAreas, areaById, archiveArea, reorderArea,
  addHorizon, liveHorizons, horizonById, removeHorizon,
  addGoal, goalById, liveGoals, goalsOfArea, goalsAt, undatedGoals,
  progress, direction, editGoal, setState, setConfidence, needsEarlyMigration,
  commit, commitsOfWeek, capacity, capCheck,
  closeWeek, draftWeek, importAreas
};
