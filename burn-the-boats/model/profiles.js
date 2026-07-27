/* ============================================================================
   THE PROOF GATE — 16 profiles, each driven through the whole model.

   His instruction, verbatim: "it should be tested with 10 to 20 different
   personality types of goals, small to big, throughout this whole rendition —
   that way you actually know that it's gonna work and it's been proven, you're
   not guessing on this machine."

   None of these are his goals.  That is the point: if the model only holds
   because it was fitted to one person, it is overfitted and brittle.
   ========================================================================= */
const M = require('./model.js');

const W1='2026-08-31', W2='2026-09-07';
const D = ['MON','TUE','WED','THU','FRI'];
const B = ['b1','b2','b3','b4'];

/* ------------------------------------------------------------- the profiles */
const PROFILES = [

{ n:'01 · the minimalist — 1 area, 1 goal', build(G){
    const a = M.addArea(G,{name:'Health',domain:'BODY'});
    const h = M.addHorizon(G,{label:'End of year',date:'2026-12-25'});
    M.addGoal(G,{title:'Run a half marathon',areaId:a.id,horizonId:h.id,start:0,at:3,target:13,unit:'mi'});
  }},

{ n:'02 · the balanced — 3 areas, 4 goals', build(G){
    const A = ['Work','Body','People'].map((n,i)=>M.addArea(G,{name:n,domain:['WORK','BODY','PEOPLE'][i]}));
    const h = M.addHorizon(G,{label:'End of Sep',date:'2026-09-30'});
    M.addGoal(G,{title:'Ship the v2 release',areaId:A[0].id,horizonId:h.id,start:0,at:2,target:9,unit:'features',wig:1});
    M.addGoal(G,{title:'Squat bodyweight',areaId:A[1].id,horizonId:h.id,start:95,at:110,target:165,unit:'lb'});
    M.addGoal(G,{title:'Call Mum every Sunday',areaId:A[2].id,horizonId:h.id});
    M.addGoal(G,{title:'Learn the deploy pipeline',areaId:A[0].id,kind:'learning'});
  }},

{ n:'03 · the sprawler — 7 areas, 12 goals', build(G){
    const names=['Studio','Freelance','Body','Money','Family','Music','House'];
    const A = names.map(n=>M.addArea(G,{name:n,domain:'WORK'}));
    const h = M.addHorizon(G,{label:'Q4',date:'2026-12-01'});
    for(let i=0;i<12;i++) M.addGoal(G,{title:`Goal number ${i+1} for ${names[i%7]}`,areaId:A[i%7].id,horizonId:h.id,
      start:0,at:i,target:10,unit:'things'});
  }},

{ n:'04 · the maximalist — 12 areas, 30 goals', build(G){
    const A=[]; for(let i=0;i<12;i++) A.push(M.addArea(G,{name:'Area '+(i+1),domain:M.DOMAIN_KEYS[i%6]}));
    const h = M.addHorizon(G,{label:'Someday',date:'2027-06-01'});
    for(let i=0;i<30;i++) M.addGoal(G,{title:'Goal '+(i+1),areaId:A[i%12].id,horizonId:h.id});
  }},

{ n:'05 · day one — nothing typed at all', build(){ /* deliberately empty */ }},

{ n:'06 · one area, 40 goals (the dumping ground)', build(G){
    const a = M.addArea(G,{name:'Everything',domain:'MIND'});
    for(let i=0;i<40;i++) M.addGoal(G,{title:'Thing '+(i+1),areaId:a.id});
  }},

{ n:'07 · standards only — no goals at all', build(G){
    M.addArea(G,{name:'Discipline',domain:'BODY',standards:[
      {id:'s1',label:'Gym',target:3},{id:'s2',label:'Walk',target:5},
      {id:'s3',label:'In bed by 22:30',target:5},{id:'s4',label:'No phone at dinner',target:7},
      {id:'s5',label:'Cold shower',target:4}]});
    M.addArea(G,{name:'Craft',domain:'MIND'});      /* zero standards — must look deliberate */
  }},

{ n:'08 · undated — goals with no horizon', build(G){
    const a=M.addArea(G,{name:'Someday',domain:'MIND'});
    for(let i=0;i<5;i++) M.addGoal(G,{title:'Undated goal '+(i+1),areaId:a.id});
  }},

{ n:'09 · THE DECREASING TARGET — weight loss, debt, hours', build(G){
    const a=M.addArea(G,{name:'Reset',domain:'BODY'});
    const h=M.addHorizon(G,{label:'New year',date:'2026-12-31'});
    M.addGoal(G,{title:'Down to 185 lbs',areaId:a.id,horizonId:h.id,start:212,at:198,target:185,unit:'lbs'});
    M.addGoal(G,{title:'Clear the card',areaId:a.id,horizonId:h.id,start:9400,at:6100,target:0,unit:'$'});
    M.addGoal(G,{title:'Under 45 hours a week',areaId:a.id,horizonId:h.id,start:62,at:58,target:45,unit:'hrs'});
  }},

{ n:'10 · extreme numbers — 0, 1M, already past target', build(G){
    const a=M.addArea(G,{name:'Numbers',domain:'CAPITAL'});
    M.addGoal(G,{title:'Zero unread',areaId:a.id,start:1840,at:0,target:0,unit:'emails'});
    M.addGoal(G,{title:'A million in revenue',areaId:a.id,start:0,at:12500,target:1000000,unit:'$'});
    M.addGoal(G,{title:'Overshot it',areaId:a.id,start:0,at:140,target:100,unit:'%'});
    M.addGoal(G,{title:'Start equals target',areaId:a.id,start:50,at:50,target:50,unit:'%'});
  }},

{ n:'11 · long text — 60+ char titles, long area names', build(G){
    const a=M.addArea(G,{name:'Professional Development and Long Term Career Planning',domain:'WORK'});
    M.addGoal(G,{title:'Write, edit and actually publish the whole technical handbook for onboarding',
      areaId:a.id,evidence:'The handbook exists as a PDF and two people have read it end to end and signed off'});
  }},

{ n:'12 · everything already done', build(G){
    const a=M.addArea(G,{name:'Finished',domain:'WORK'});
    const h=M.addHorizon(G,{label:'Last month',date:'2026-07-01'});
    for(let i=0;i<4;i++){
      const g=M.addGoal(G,{title:'Completed goal '+(i+1),areaId:a.id,horizonId:h.id,start:0,at:10,target:10});
      M.setState(G,g.id,'done',{day:20});
    }
  }},

{ n:'13 · EVERYTHING OVERDUE — the wall-of-failure test', build(G){
    const A=['Work','Body','Money'].map((n,i)=>M.addArea(G,{name:n,domain:['WORK','BODY','CAPITAL'][i]}));
    const h=M.addHorizon(G,{label:'Was due June',date:'2026-06-01'});
    const gs=[];
    for(let i=0;i<6;i++) gs.push(M.addGoal(G,{title:'Overdue goal '+(i+1),areaId:A[i%3].id,horizonId:h.id,
      start:0,at:0,target:10,unit:'x'}));
    /* nothing done, confidence sinking on every one */
    gs.forEach(g=>{ M.setConfidence(G,g.id,3,1); M.setConfidence(G,g.id,2,2); M.setConfidence(G,g.id,1,3); });
    gs.forEach((g,i)=> M.commit(G,{goalId:g.id,text:'attempt',weekKey:W1,day:D[i%5],block:B[i%4]}));
  }},

{ n:'14 · the sprinter — 2-week horizons, not months', build(G){
    const a=M.addArea(G,{name:'Ship it',domain:'WORK'});
    ['2026-08-10','2026-08-24','2026-09-07'].forEach((d,i)=>{
      const h=M.addHorizon(G,{label:'Sprint '+(i+1),date:d});
      M.addGoal(G,{title:'Sprint '+(i+1)+' deliverable',areaId:a.id,horizonId:h.id,start:0,at:i,target:3});
    });
  }},

{ n:'15 · the wreckage — parked, dropped, archived, with history', build(G){
    const a1=M.addArea(G,{name:'Live',domain:'WORK'});
    const a2=M.addArea(G,{name:'Abandoned',domain:'MIND'});
    const h1=M.addHorizon(G,{label:'Aug',date:'2026-08-31'});
    const h2=M.addHorizon(G,{label:'Oct',date:'2026-10-31'});
    const g1=M.addGoal(G,{title:'Eased twice',areaId:a1.id,horizonId:h1.id,start:0,at:4,target:12,unit:'x',
      lead:{name:'Calls',target:12}});
    M.editGoal(G,g1.id,{target:8},{day:34});
    M.editGoal(G,g1.id,{horizonId:h2.id},{day:41});
    M.editGoal(G,g1.id,{lead:{name:'Calls',target:6}},{day:41});
    const g2=M.addGoal(G,{title:'Parked one',areaId:a2.id,horizonId:h1.id});
    M.setState(G,g2.id,'parked',{day:44,note:'not this quarter'});
    const g3=M.addGoal(G,{title:'Dropped one',areaId:a2.id,horizonId:h1.id});
    M.setState(G,g3.id,'dropped',{day:45});
    M.archiveArea(G,a2.id);
    M.addGoal(G,{title:'Still going',areaId:a1.id,horizonId:h2.id,start:0,at:1,target:5});
  }},

{ n:'16 · emoji and non-Latin', build(G){
    const a=M.addArea(G,{name:'家族 · Family 👪',domain:'PEOPLE'});
    const h=M.addHorizon(G,{label:'春 Spring',date:'2027-03-01'});
    M.addGoal(G,{title:'🇪🇸 Spanish — hold a 10-minute conversation',areaId:a.id,horizonId:h.id,start:0,at:2,target:10,unit:'min'});
    M.addGoal(G,{title:'Ελληνικά · read one page',areaId:a.id,horizonId:h.id});
  }},
];

/* ============================ THE SCREEN SWEEP ============================
   Every profile is driven through every screen of the rendition and checked
   for the things that actually break a UI: nothing renders NaN, nothing renders
   a bar it can't justify, no failure language when nothing has failed, no
   duplicate ranks, no orphan pointers, no lost history.
   ========================================================================= */
const SCREENS = [

['01 HOME · by area', (G,f)=>{
  const areas = M.liveAreas(G);
  if(new Set(areas.map(a=>a.rank)).size !== areas.length) f('two areas share a rank — the list order is undefined');
  areas.forEach(a=>{
    if(!a.name.trim()) f('an area rendered with a blank name');
    if(!M.DOMAIN_KEYS.includes(a.domain)) f('area "'+a.name+'" points at no radar domain');
  });
  M.liveGoals(G).forEach(g=>{
    if(!M.areaById(G,g.areaId)) f('goal "'+g.title+'" points at an area that does not exist');
    const p = M.progress(g);
    if(p !== null && !(p>=0 && p<=1)) f('goal "'+g.title+'" progress out of range: '+p);
    if(p !== null && Number.isNaN(p))  f('goal "'+g.title+'" progress is NaN');
  });
}],

['01b HOME · capacity line', (G,f)=>{
  const c = M.capacity(G, W1);
  if(c.committed > c.total) f('committed '+c.committed+' exceeds the 20-block week');
  if(c.free < 0) f('negative free blocks');
  if(c.liveGoals === 0 && c.blocksEach !== null) f('blocks-each computed with zero goals — divide by zero reached the screen');
  if(c.liveGoals > 0 && !(c.blocksEach > 0)) f('blocks-each is not a positive number');
}],

['01c HOME · the WIG', (G,f)=>{
  const wigs = M.liveGoals(G).filter(g=>g.wig);
  if(wigs.length > 1) f(wigs.length+' goals claim to be THE wig — the word stops meaning anything');
}],

['02 ADD · title + area is enough', (G,f)=>{
  const a = M.liveAreas(G)[0];
  if(!a) return;                                   /* profile 05 has no areas — correct */
  const before = G.goals.length;
  const g = M.addGoal(G,{title:'Bare minimum goal',areaId:a.id});
  if(G.goals.length !== before+1) f('a title-and-area-only goal would not save');
  if(g.kind !== 'outcome') f('kind did not default — the user is forced to classify');
  if(M.progress(g) !== null) f('a goal with no numbers produced a progress bar — that renders 0% failure on a qualitative goal');
  G.goals.pop();
}],

['02b ADD · a goal cannot attach to a fake area', (G,f)=>{
  let threw=0; try{ M.addGoal(G,{title:'Orphan',areaId:'nope'}); }catch(e){ threw=1; }
  if(!threw) f('a goal saved against an area that does not exist');
}],

['03 BY DATE · horizons and the undated bucket', (G,f)=>{
  const hs = M.liveHorizons(G);
  for(let i=1;i<hs.length;i++) if(hs[i].date < hs[i-1].date) f('horizons came back out of date order');
  const seen = new Set();
  hs.forEach(h=> M.goalsAt(G,h.id).forEach(g=>seen.add(g.id)));
  M.undatedGoals(G).forEach(g=>seen.add(g.id));
  const missing = M.liveGoals(G).filter(g=>!seen.has(g.id));
  if(missing.length) f(missing.length+' live goals appear on NO by-date screen — invisible goals');
}],

['03b BY DATE · deleting a date never deletes a goal', (G,f)=>{
  const h = M.liveHorizons(G)[0]; if(!h) return;
  const total = G.goals.length;
  /* EVERY goal pointing at it, not just the active ones — a done or parked goal
     left holding a dead horizon id is a dangling pointer that crashes the
     By-date screen the moment someone reopens their history. */
  const attached = G.goals.filter(g=>g.horizonId===h.id).map(g=>g.id);
  const freed = M.removeHorizon(G, h.id);
  if(G.goals.length !== total) f('removing a date destroyed goals — screen 12 promises it never does');
  if(freed !== attached.length) f('freed count wrong: '+freed+' vs '+attached.length);
  if(G.goals.some(g=>g.horizonId===h.id)) f('a goal still points at the deleted horizon — dangling pointer');
  attached.forEach(id=>{ if(M.goalById(G,id).horizonId !== null) f('a freed goal still points at a dead horizon'); });
  M.addHorizon(G,{label:h.label,date:h.date});     /* put one back for later screens */
}],

['04 ONE GOAL · the edit trail', (G,f)=>{
  const g = M.liveGoals(G).find(x=>x.target!==null); if(!g) return;
  const n0 = g.history.length, t0 = g.target, dir = M.direction(g);
  const harder = dir==='down' ? t0-1 : t0+1, easier = dir==='down' ? t0+1 : t0-1;
  M.editGoal(G,g.id,{target:harder},{day:50});
  if(g.history.length !== n0) f('hardening a target left a trail — hardening must be silent');
  M.editGoal(G,g.id,{target:easier},{day:51});
  if(g.history.length !== n0+1) f('easing a target left NO trail');
  if(M.progress(g) === null || Number.isNaN(M.progress(g))) f('progress broke after an edit');
  M.editGoal(G,g.id,{target:t0},{day:52});
}],

['04b ONE GOAL · nothing ever zeroes', (G,f)=>{
  const g = M.liveGoals(G)[0]; if(!g) return;
  const at0 = g.at, h0 = g.history.length, c0 = g.confidence.length;
  M.setState(G,g.id,'parked',{day:60});
  M.setState(G,g.id,'active',{day:61});
  if(g.at !== at0) f('parking and unparking changed the counter');
  if(g.history.length < h0) f('history was truncated');
  if(g.confidence.length !== c0) f('confidence history was wiped');
}],

['05 THE WEEK · capacity and orphan areas', (G,f)=>{
  const gs = M.liveGoals(G); if(!gs.length) return;
  for(let i=0;i<Math.min(14,gs.length*2);i++)
    M.commit(G,{goalId:gs[i%gs.length].id,text:'block '+i,weekKey:W2,day:D[i%5],block:B[Math.floor(i/5)%4]});
  const c = M.capacity(G,W2);
  if(c.committed > 20) f('more than 20 blocks committed in one week');
  const seen = new Set();
  M.commitsOfWeek(G,W2).forEach(x=>{
    const k = x.day+':'+x.block;
    if(seen.has(k)) f('two commitments on the same block slot '+k+' — the same block drawn twice');
    seen.add(k);
  });
  c.orphanAreas.forEach(id=>{ if(!M.areaById(G,id)) f('orphan list names an area that does not exist'); });
}],

['06 CLOSE · the app states it, the user corrects it', (G,f)=>{
  const r = M.closeWeek(G, W2, {});
  if(r.committed === 0 && r.pct !== null)
    f('a week with nothing committed reported '+r.pct+'% — that is the red 0% wall of failure again');
  if(r.pct !== null && (r.pct<0 || r.pct>100)) f('execution percentage out of range: '+r.pct);
  if(r.done + r.missed !== r.committed) f('the close does not add up');
}],

['07 CONFIDENCE · three states, and it does one job', (G,f)=>{
  const g = M.liveGoals(G)[0]; if(!g) return;
  M.setConfidence(G,g.id,9,80);
  const last = g.confidence[g.confidence.length-1];
  if(last.v > 3 || last.v < 1) f('confidence stored out of the 1-3 range: '+last.v);
  const before = g.confidence.length;
  M.setConfidence(G,g.id,2,80);
  if(g.confidence.length !== before) f('two confidence entries for the same week');
}],

['07b CONFIDENCE · two drops triggers early migration', (G,f)=>{
  const g = M.liveGoals(G)[0]; if(!g) return;
  const keep = g.confidence.slice();
  g.confidence = [{week:1,v:3},{week:2,v:2},{week:3,v:1}];
  if(!M.needsEarlyMigration(g)) f('two consecutive confidence drops did NOT trigger early migration — confidence is decorative again');
  g.confidence = [{week:1,v:3},{week:2,v:3},{week:3,v:3}];
  if(M.needsEarlyMigration(g)) f('steady confidence wrongly triggered a migration prompt');
  g.confidence = keep;
}],

['08 NEXT WEEK · never a blank form', (G,f)=>{
  const gs = M.liveGoals(G);
  const made = M.draftWeek(G, W2, '2026-09-14');
  if(gs.length && M.commitsOfWeek(G,W2).some(c=>!c.done) && !made.length)
    f('unfinished work did not carry into next week — Monday arrives blank');
  made.forEach(c=>{
    const g = M.goalById(G,c.goalId);
    if(!g) f('drafted a block against a goal that does not exist');
    else if(g.state !== 'active') f('drafted a block against a '+g.state+' goal — resurrecting dropped work');
    if(!(c.carried>0)) f('a carried block is not marked as carried');
  });
}],

['09 MIGRATION · the pile-up test', (G,f)=>{
  const h = M.liveHorizons(G)[0]; if(!h) return;
  const due = M.goalsAt(G,h.id).filter(g=>{ const p=M.progress(g); return p===null || p<1; });
  const early = M.liveGoals(G).filter(M.needsEarlyMigration).length;
  if(due.length > 5 && early === 0)
    f(due.length+' goals arrive at one horizon turn with none drained early — that is a queue of failures in one screen');
}],

['10 STANDARDS · optional by design', (G,f)=>{
  M.liveAreas(G).forEach(a=>{
    if(!Array.isArray(a.standards)) f('area "'+a.name+'" has no standards array — the screen would throw');
    a.standards.forEach(s=>{
      if(!s.label) f('a standard with no label');
      if(!(s.target>0)) f('standard "'+s.label+'" has a target of '+s.target+' — a 0-target renders 0/0');
    });
  });
}],

['11 DAY ONE · the empty state', (G,f)=>{
  if(M.liveAreas(G).length || M.liveGoals(G).length) return;
  const c = M.capacity(G,W1);
  if(c.blocksEach !== null) f('the empty app computed blocks-per-goal');
  const r = M.closeWeek(G,W1,{});
  if(r.pct !== null) f('the empty app reported an execution percentage of '+r.pct);
  if(M.capCheck(G).over) f('the empty app warned about too many goals');
}],

['12 MANAGE · reorder and archive', (G,f)=>{
  const before = M.liveAreas(G).map(a=>a.id);
  if(before.length > 1){
    M.reorderArea(G, before[1], -1);
    const after = M.liveAreas(G).map(a=>a.id);
    if(after[0] !== before[1]) f('reordering an area did not move it');
    if(new Set(M.liveAreas(G).map(a=>a.rank)).size !== after.length) f('reordering produced duplicate ranks');
    if(after.length !== before.length) f('reordering lost an area');
  }
  const a = M.liveAreas(G)[0];
  if(a){
    const goals = M.goalsOfArea(G,a.id).map(g=>g.id);
    M.archiveArea(G,a.id);
    goals.forEach(id=>{ if(!M.goalById(G,id)) f('archiving an area destroyed its goals'); });
    a.archived = 0;
  }
}],

['XX SOFT CAP · it argues, it never blocks', (G,f)=>{
  const chk = M.capCheck(G);
  const live = M.liveGoals(G).length;
  if(live >= (G.meta.softCap||5) && !chk.over) f('past the cap and it said nothing');
  if(live < (G.meta.softCap||5) && chk.over) f('under the cap and it nagged anyway');
  if(chk.over){
    if(!(chk.blocksEach > 0)) f('the cap argument shows a nonsense blocks-each number');
    chk.suggest.forEach(id=>{ if(!M.goalById(G,id)) f('the cap suggested parking a goal that does not exist'); });
    const a = M.liveAreas(G)[0];
    if(a){ const n=G.goals.length; M.addGoal(G,{title:'Added anyway',areaId:a.id});
      if(G.goals.length !== n+1) f('the SOFT cap blocked a save — it must never block'); G.goals.pop(); }
  }
}],

['XX SERIALISE · survives a save and reload', (G,f)=>{
  let s; try{ s = JSON.stringify(G); }catch(e){ f('the state cannot be serialised: '+e.message); return; }
  const back = JSON.parse(s);
  if(back.goals.length !== G.goals.length) f('goals lost in the round trip');
  if(back.areas.length !== G.areas.length) f('areas lost in the round trip');
  if(JSON.stringify(back) !== s) f('the state is not stable across a save/reload cycle');
}],
];

/* ------------------------------------------------------------------- run it */
let pass=0, fail=0; const failures=[];
PROFILES.forEach(p=>{
  const G = M.emptyG();
  try{ p.build(G); }
  catch(e){ fail++; failures.push([p.n,'BUILD','threw: '+e.message]); return; }
  SCREENS.forEach(([name,check])=>{
    const errs=[];
    try{ check(G, m=>errs.push(m)); }
    catch(e){ errs.push('threw: '+e.message); }
    if(errs.length){ fail+=errs.length; errs.forEach(m=>failures.push([p.n,name,m])); }
    else pass++;
  });
});

failures.forEach(([p,s,m])=> console.log(`  FAIL  ${p}\n        ${s}\n        ${m}`));
console.log(`\n${PROFILES.length} profiles × ${SCREENS.length} screens`);
console.log(`${pass} clean · ${fail} failures`);
process.exit(fail?1:0);
