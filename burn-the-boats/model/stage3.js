/* STAGE 3 · DATES — he raised this by name.
   Before: a date could be ADDED and DESTROYED but never CHANGED; the only control was an
   unconfirmed 38px ✕; and "Carry it" with no later date said "Carried", moved nothing and
   re-asked forever.                                                                        */
const puppeteer=require('/Users/jaspersmind/build-arsenal/_verify/node_modules/puppeteer-core');
const URL=process.argv[2]||'file:///Users/jaspersmind/Documents/burn-the-boats/index.html';
const wait=ms=>new Promise(r=>setTimeout(r,ms));
const T=[];const ok=(n,c,d)=>T.push({n,c:!!c,d:d===undefined?'':String(d)});
async function boot(clock){
  const b=await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless:'new',args:['--allow-file-access-from-files','--no-sandbox']});
  const p=await b.newPage();
  await p.setViewport({width:390,height:844,deviceScaleFactor:2,isMobile:true,hasTouch:true});
  const errs=[];p.on('pageerror',e=>errs.push(e.message));
  await p.evaluateOnNewDocument(`(()=>{const F=new Date('${clock}').getTime();
    const R=Date;class D extends R{constructor(...a){if(!a.length)super(F);else super(...a)}
    static now(){return F}} window.Date=D;try{localStorage.clear()}catch(e){}})()`);
  await p.goto(URL,{waitUntil:'networkidle0'});await wait(1000);
  return {b,p,errs};
}
(async()=>{
  let {b,p,errs}=await boot('2026-10-05T09:20:00');
  // ── a date exists, with goals on it
  await p.evaluate(()=>{
    const h=GM.addHorizon(G,{label:'End of Septmber',date:'2026-09-30'});  // deliberate typo
    const a=GM.addArea(G,{name:'SANO',domain:'WORK'});
    for(let i=0;i<3;i++)GM.addGoal(G,{title:'Goal '+(i+1),areaId:a.id,horizonId:h.id});
    gsave();
  });

  // ══ 1 · A DATE CAN BE EDITED ══
  const rows=await p.evaluate(async()=>{
    g2Manage();await new Promise(r=>setTimeout(r,500));
    const btns=[...document.querySelectorAll('.g2m .mb')];
    return {labels:btns.map(e=>e.textContent.trim()),
            under48:btns.filter(e=>e.getBoundingClientRect().height<48).length,
            hasEdit:btns.some(e=>/EDIT/i.test(e.textContent)),
            bareX:btns.some(e=>e.textContent.trim()==='✕'&&e.closest('.g2m').innerText.match(/2026-09-30/))};
  });
  ok('the date row offers EDIT',rows.hasEdit,rows.labels.join(','));
  ok('...and no bare ✕ that deletes a date outright',!rows.bareX);
  ok('every control in that sheet clears 48px',rows.under48===0,rows.under48+' under');

  const ren=await p.evaluate(async()=>{
    const h=GM.liveHorizons(G)[0];
    g2EditDate(h.id);await new Promise(r=>setTimeout(r,400));
    document.getElementById('g2HN').value='End of September';
    g2SaveEditDate(h.id);await new Promise(r=>setTimeout(r,400));
    return {label:GM.liveHorizons(G)[0].label,date:GM.liveHorizons(G)[0].date,
            goals:GM.goalsAt(G,GM.liveHorizons(G)[0].id).length};
  });
  ok('the typo can be fixed without destroying the date',ren.label==='End of September',ren.label);
  ok('...the date itself is untouched',ren.date==='2026-09-30',ren.date);
  ok('...and the goals stay on it',ren.goals===3,'goals='+ren.goals);

  const mv=await p.evaluate(async()=>{
    const h=GM.liveHorizons(G)[0];
    g2EditDate(h.id);await new Promise(r=>setTimeout(r,400));
    document.getElementById('g2HD').value='2026-10-31';
    g2SaveEditDate(h.id);await new Promise(r=>setTimeout(r,400));
    const g=GM.goalsAt(G,h.id)[0];
    return {date:GM.horizonById(G,h.id).date,goals:GM.goalsAt(G,h.id).length,
            trail:(g.history||[]).filter(x=>x.t==='date').length};
  });
  ok('the day can be moved',mv.date==='2026-10-31',mv.date);
  ok('...no goal falls off when it moves',mv.goals===3,'goals='+mv.goals);
  ok('...and moving it leaves a trail',mv.trail>=1,'entries='+mv.trail);

  const bad=await p.evaluate(async()=>{
    const h=GM.liveHorizons(G)[0];
    g2EditDate(h.id);await new Promise(r=>setTimeout(r,350));
    document.getElementById('g2HD').value='';
    g2SaveEditDate(h.id);await new Promise(r=>setTimeout(r,300));
    return GM.horizonById(G,h.id).date;
  });
  ok('a blank date is refused, not saved',bad==='2026-10-31',bad);

  // ══ 2 · DELETING ASKS FIRST ══
  const ask=await p.evaluate(async()=>{
    closeSheet();await new Promise(r=>setTimeout(r,200));
    const h=GM.liveHorizons(G)[0];
    g2AskDropDate(h.id);await new Promise(r=>setTimeout(r,400));
    const t=document.getElementById('sheetA').innerText;
    return {t,n:GM.liveHorizons(G).length};
  });
  ok('deleting asks first',/Delete "End of September"\?/.test(ask.t),ask.t.split('\n')[1]);
  ok('...and says what happens to the goals',/3 GOALS ON IT STAY/i.test(ask.t));
  ok('...and nothing is destroyed by asking',ask.n===1,'dates='+ask.n);
  const keep=await p.evaluate(async()=>{
    const b=[...document.querySelectorAll('#sheetA button')].find(e=>/Keep it/i.test(e.textContent));
    b.click();await new Promise(r=>setTimeout(r,400));
    return GM.liveHorizons(G).length;
  });
  ok('"Keep it" keeps it',keep===1,'dates='+keep);
  const del=await p.evaluate(async()=>{
    const h=GM.liveHorizons(G)[0];
    g2AskDropDate(h.id);await new Promise(r=>setTimeout(r,350));
    const b=[...document.querySelectorAll('#sheetA button')].find(e=>/Delete the date/i.test(e.textContent));
    b.click();await new Promise(r=>setTimeout(r,450));
    return {dates:GM.liveHorizons(G).length,goals:GM.liveGoals(G).length};
  });
  ok('confirming does delete it',del.dates===0,'dates='+del.dates);
  ok('...and every goal survives',del.goals===3,'goals='+del.goals);
  ok('no JS errors',errs.length===0,errs.slice(0,2).join(' | '));
  await b.close();

  // ══ 3 · CARRY WITH NOWHERE TO CARRY TO ══
  ({b,p,errs}=await boot('2026-10-05T09:20:00'));
  const carry=await p.evaluate(async()=>{
    const h=GM.addHorizon(G,{label:'End of September',date:'2026-09-30'});   // the only date, now past
    const a=GM.addArea(G,{name:'SANO',domain:'WORK'});
    const g=GM.addGoal(G,{title:'Ten owners called',areaId:a.id,horizonId:h.id});
    gsave();render();
    const before={due:g2NeedsDecision().length,dates:GM.liveHorizons(G).length,hz:g.horizonId};
    g2Mig(g.id,'carry');
    await new Promise(r=>setTimeout(r,500));
    const g2=GM.goalOf(G,g.id);
    return {before,after:{due:g2NeedsDecision().length,dates:GM.liveHorizons(G).length,hz:g2.horizonId},
            toast:(document.getElementById('toast')||{}).textContent||'',
            newDate:(GM.horizonById(G,g2.horizonId)||{}).date};
  });
  ok('the goal really was overdue',carry.before.due===1,'due='+carry.before.due);
  ok('carrying it MOVES it',carry.after.hz!==carry.before.hz,
     carry.before.hz+' -> '+carry.after.hz);
  ok('...to a date that actually exists',!!carry.newDate,carry.newDate);
  ok('...which is in the future',carry.newDate>'2026-10-05',carry.newDate);
  ok('...and it stops being overdue',carry.after.due===0,'still due='+carry.after.due);
  ok('the toast names where it went',/Carried to /.test(carry.toast),carry.toast);
  ok('a date was created rather than the app lying',carry.after.dates===2,'dates='+carry.after.dates);

  // the loop that used to be infinite
  const loop=await p.evaluate(async()=>{
    const a=GM.liveAreas(G)[0];
    const h=GM.liveHorizons(G).find(x=>x.date<today());
    for(let i=0;i<4;i++)GM.addGoal(G,{title:'Stuck '+i,areaId:a.id,horizonId:h.id});
    gsave();
    let guard=0;
    while(g2NeedsDecision().length&&guard++<12){
      g2Mig(g2NeedsDecision()[0].id,'carry');
      await new Promise(r=>setTimeout(r,140));
    }
    return {left:g2NeedsDecision().length,rounds:guard};
  });
  ok('working through a pile-up converges',loop.left===0,'left='+loop.left+' after '+loop.rounds+' rounds');
  ok('...without looping forever',loop.rounds<12,'rounds='+loop.rounds);
  ok('no JS errors',errs.length===0,errs.slice(0,2).join(' | '));

  const craft=await p.evaluate(async()=>{
    g2Manage();await new Promise(r=>setTimeout(r,450));
    const de=document.documentElement;
    const small=[...document.querySelectorAll('#sheetA *')].filter(e=>!e.children.length&&e.textContent.trim())
      .filter(e=>parseFloat(getComputedStyle(e).fontSize)<11).length;
    const taps=[...document.querySelectorAll('#sheetA button')]
      .filter(e=>{const r=e.getBoundingClientRect();return r.height>0&&r.height<44}).length;
    return {over:de.scrollWidth>window.innerWidth+1,small,taps};
  });
  ok('no horizontal overflow',!craft.over);
  ok('no text under 11px',craft.small===0,craft.small);
  ok('every button clears 44px',craft.taps===0,craft.taps);
  await b.close();

  const f=T.filter(t=>!t.c);
  T.forEach(t=>console.log((t.c?'  ok  ':'  FAIL')+'  '+t.n+(t.d?'  ['+t.d+']':'')));
  console.log((T.length-f.length)+'/'+T.length+' passed');
  process.exit(f.length?1:0);
})();
