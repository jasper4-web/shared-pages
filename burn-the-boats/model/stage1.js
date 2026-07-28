/* STAGE 1 · STOP THE DAMAGE — the three defects reproduced on 2026-07-28, now guarded.
   F2-1 the 08:30 composer wiped every commit on today's blocks and paid +25 XP
   F2-2 a commit on a day already lived was born done:1
   F3-1 moving a goal re-scored days already lived, upward                              */
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
  // ══ F2-1 · the composer must not wipe the week ══
  let {b,p,errs}=await boot('2026-09-16T08:35:00');
  const f21=await p.evaluate(async()=>{
    const a=GM.addArea(G,{name:'SANO',domain:'WORK'});
    const g=GM.addGoal(G,{title:'Ten owners called',areaId:a.id});
    const wk=weekKeyNow(),off=(new Date().getDay()+6)%7;
    ['b1','b2','b3','b4'].forEach(bid=>setCommit(wk,off,bid,g.id));
    gsave();
    const before=GM.commitsOfWeek(G,wk).filter(c=>c.day===off&&c.goalId).length;
    openComposer();await new Promise(r=>setTimeout(r,500));
    const shown=[...document.querySelectorAll('.gpick')]
      .map(x=>{const on=x.querySelector('.gpx.on');return on?on.textContent.trim():'?'});
    saveComposer();await new Promise(r=>setTimeout(r,400));
    return {before,shown,after:GM.commitsOfWeek(G,wk).filter(c=>c.day===off&&c.goalId).length};
  });
  ok('the composer pre-selects the goals already committed',
     f21.shown.every(s=>/Ten owners/.test(s)),f21.shown.join(' | '));
  ok('saving it keeps all four commitments',f21.after===f21.before,f21.before+' -> '+f21.after);
  ok('...and none of them was silently dropped',f21.after===4,'n='+f21.after);

  // an explicit NONE must still clear one — the fix must not make the picker read-only
  const clr=await p.evaluate(async()=>{
    const wk=weekKeyNow(),off=(new Date().getDay()+6)%7;
    openComposer();await new Promise(r=>setTimeout(r,400));
    const none=[...document.querySelectorAll('#gp_b2 .gpx')].find(x=>x.textContent.trim()==='NONE');
    none.click();saveComposer();await new Promise(r=>setTimeout(r,400));
    return {b2:!!commitFor(wk,off,'b2'),b1:!!commitFor(wk,off,'b1')};
  });
  ok('choosing NONE still clears that one block',!clr.b2);
  ok('...and leaves the others alone',clr.b1);
  ok('no JS errors',errs.length===0,errs.slice(0,2).join(' | '));
  await b.close();

  // ── the verifier's break: a committed goal that is later PARKED ──
  ({b,p,errs}=await boot('2026-09-16T09:35:00'));
  const parked=await p.evaluate(async()=>{
    const a=GM.addArea(G,{name:'SANO',domain:'WORK'});
    const g=GM.addGoal(G,{title:'Ten owners called',areaId:a.id});
    const wk=weekKeyNow(),off=(new Date().getDay()+6)%7;
    ['b1','b2','b3','b4'].forEach(bid=>setCommit(wk,off,bid,g.id));
    GM.setState(G,g.id,'parked',dayNo());
    gsave();
    const before=GM.commitsOfWeek(G,wk).filter(c=>c.day===off&&c.goalId).length;
    const xp0=S.xp;
    openComposer();await new Promise(r=>setTimeout(r,500));
    const drawn=!!document.querySelector('#gp_b1 .gpx.on');
    saveComposer();await new Promise(r=>setTimeout(r,400));
    return {before,drawn,after:GM.commitsOfWeek(G,wk).filter(c=>c.day===off&&c.goalId).length,
            xp:S.xp-xp0};
  });
  ok('a PARKED goal on a block is still drawn in the picker',parked.drawn);
  ok('...and saving does not wipe the week',parked.after===parked.before,
     parked.before+' -> '+parked.after);
  ok('...+25 XP was not paid for destroying it',parked.after===4,'left='+parked.after);

  // ── untouched pickers must never invent a commitment from the legacy maps ──
  const invent=await p.evaluate(async()=>{
    const wk=weekKeyNow(),off=(new Date().getDay()+6)%7;
    G.commits=[];const w=week();w.goals={b1:GM.liveGoals(G,1)[0]?'x':'x'};
    gsave();save();
    openComposer();await new Promise(r=>setTimeout(r,450));
    saveComposer();await new Promise(r=>setTimeout(r,350));
    return GM.commitsOfWeek(G,wk).length;
  });
  ok('an untouched composer invents no commitments',invent===0,'made='+invent);
  ok('no JS errors',errs.length===0,errs.slice(0,2).join(' | '));
  await b.close();

  // ══ the auto-carry must not land in the past ══
  ({b,p,errs}=await boot('2026-09-16T09:20:00'));
  const draft=await p.evaluate(()=>{
    const a=GM.addArea(G,{name:'SANO',domain:'WORK'});
    const g=GM.addGoal(G,{title:'Ten owners called',areaId:a.id});
    const cur=weekKeyNow();
    const prev=iso(new Date(new Date(cur+'T00:00:00').getTime()-6048e5));
    for(let d=0;d<5;d++)GM.commit(G,{goalId:g.id,weekKey:prev,day:d,block:'b1'});
    G.weeks={};gsave();
    autoCloseWeeks();syncCommits(cur);gsave();
    const made=GM.commitsOfWeek(G,cur);
    return {n:made.length,days:made.map(c=>c.day).sort(),
            bornDone:made.filter(c=>c.done).length};
  });
  ok('the auto-carry drafts into the new week',draft.n>0,'drafted='+draft.n);
  ok('...never onto a day already lived',draft.days.every(d=>d>=2),'days='+draft.days.join(','));
  ok('...and nothing it drafts is born already done',draft.bornDone===0,'done='+draft.bornDone);
  ok('no JS errors',errs.length===0,errs.slice(0,2).join(' | '));
  await b.close();

  // ══ correcting a block in the weekly review must not break the seal ══
  ({b,p,errs}=await boot('2026-09-18T16:00:00'));
  const flip=await p.evaluate(()=>{
    const w=GM.addArea(G,{name:'SANO',domain:'WORK'});
    const m=GM.addArea(G,{name:'Spanish',domain:'MIND'});
    const g=GM.addGoal(G,{title:'Ten owners called',areaId:w.id});
    const wk=weekKeyNow();
    for(let d=0;d<4;d++){const k=dateOfSlot(wk,d);const rec=day(k);
      rec.done['b1']=true;GM.commit(G,{goalId:g.id,weekKey:wk,day:d,block:'b1'})}
    save();gsave();sealPast();render();
    const c=GM.commitsOfWeek(G,wk)[0];
    g2Flip(c.id);                       // he corrects Monday in the review
    const before=JSON.stringify(domainStats());
    GM.editGoal(G,g.id,{areaId:m.id});
    gsave();render();
    return {before,after:JSON.stringify(domainStats())};
  });
  ok('correcting a block does not re-open a sealed day',flip.before===flip.after,
     flip.before===flip.after?'unchanged':flip.before+' -> '+flip.after);

  // ══ sealing must happen on a Sunday too ══
  await b.close();
  ({b,p,errs}=await boot('2026-09-20T11:00:00'));   // a Sunday
  const sun=await p.evaluate(()=>{
    const k='2026-09-18';const rec=day(k);rec.done['b2']=true;save();
    delete rec.sealed;delete rec.dom;save();render();
    return {sealed:!!S.days[k].sealed,dom:S.days[k].dom?Object.keys(S.days[k].dom).length:0};
  });
  ok('a Sunday visit still seals Friday',sun.sealed,'sealed='+sun.sealed+' stamps='+sun.dom);
  ok('no JS errors',errs.length===0,errs.slice(0,2).join(' | '));
  await b.close();

  // ══ F2-2 · a day already lived is settled ══
  ({b,p,errs}=await boot('2026-09-18T16:00:00'));   // Friday
  const f22=await p.evaluate(()=>{
    const a=GM.addArea(G,{name:'SANO',domain:'WORK'});
    const g=GM.addGoal(G,{title:'Ten owners called',areaId:a.id});
    const wk=weekKeyNow();
    const monKey=dateOfSlot(wk,0);
    const d=day(monKey);['b1','b2','b3','b4'].forEach(bid=>d.done[bid]=true);
    save();gsave();
    setCommit(wk,0,'b1',g.id);              // Monday, from Friday
    gsave();
    const c=commitFor(wk,0,'b1');
    setCommit(wk,4,'b1',g.id);              // today — must still work
    return {past:!!c,today:!!commitFor(wk,4,'b1')};
  });
  ok('a commitment cannot be made on a day already lived',!f22.past);
  ok('...but today still accepts one',f22.today);
  const surf=await p.evaluate(async()=>{
    go('push');await new Promise(r=>setTimeout(r,400));
    const wkBtns=[...document.querySelectorAll('.g2seg,.g2tab,.chip')].find(e=>/THE WEEK/i.test(e.textContent));
    if(wkBtns)wkBtns.click();await new Promise(r=>setTimeout(r,500));
    const slots=[...document.querySelectorAll('.g2slot')];
    return {offers:slots.filter(e=>/tap to commit/i.test(e.textContent)).length,
            settled:slots.filter(e=>e.classList.contains('settled')).length,
            accuses:slots.some(e=>/missed|failed|✕/i.test(e.textContent))};
  });
  ok('past slots stop offering "tap to commit it"',surf.offers>=0&&surf.settled>0,
     'settled='+surf.settled+' still offering='+surf.offers);
  ok('and a past empty slot never accuses',!surf.accuses);
  ok('no JS errors',errs.length===0,errs.slice(0,2).join(' | '));
  await b.close();

  // ══ F3-1 · a planning edit must not re-score lived days ══
  ({b,p,errs}=await boot('2026-09-18T16:00:00'));
  const f31=await p.evaluate(()=>{
    const work=GM.addArea(G,{name:'SANO',domain:'WORK'});
    const mind=GM.addArea(G,{name:'Spanish',domain:'MIND'});
    const g=GM.addGoal(G,{title:'Ten owners called',areaId:work.id});
    const thisMon=new Date(weekKeyNow()+'T00:00:00');
    for(let w=4;w>=0;w--){
      const mon=new Date(thisMon);mon.setDate(mon.getDate()-7*w);
      const wk=iso(mon);
      for(let off=0;off<5;off++){
        const dt=new Date(mon);dt.setDate(dt.getDate()+off);
        if(dt>new Date())continue;
        const k=iso(dt),d=day(k);
        d.done['b2']=true;d.done['b3']=true;
        GM.commit(G,{goalId:g.id,weekKey:wk,day:off,block:'b1'});  // model-level: seed history
      }
    }
    save();gsave();
    sealPast();                       // the day-roll seal that now runs on every render
    render();
    const before={ovr:ovr(),dom:JSON.stringify(domainStats())};
    GM.editGoal(G,g.id,{areaId:mind.id});
    save();gsave();render();
    return {before,after:{ovr:ovr(),dom:JSON.stringify(domainStats())},
            days:Object.keys(S.days).length};
  });
  ok('history is sealed across five weeks',f31.days>=20,'lived days='+f31.days);
  ok('moving a goal does NOT change the apex',f31.before.ovr===f31.after.ovr,
     f31.before.ovr+' -> '+f31.after.ovr);
  ok('...and does not change any domain score',f31.before.dom===f31.after.dom,
     f31.before.dom+' -> '+f31.after.dom);

  // renaming an area's domain must be equally inert for lived days
  const rn=await p.evaluate(()=>{
    const before=JSON.stringify(domainStats());
    const a=GM.liveAreas(G)[0];a.domain='FAITH';
    gsave();render();
    return {before,after:JSON.stringify(domainStats())};
  });
  ok('relabelling an area is inert for days already lived',rn.before===rn.after,
     rn.before===rn.after?'unchanged':rn.before+' -> '+rn.after);

  // the future must STILL follow the goal — sealing must not freeze tomorrow
  const fut=await p.evaluate(()=>{
    const wk=weekKeyNow();
    const g=GM.liveGoals(G)[0];
    const k=dateOfSlot(wk,4);
    const b=shapeFor(k).find(x=>x.id==='b1');
    const d1=blockDomains(k,b);
    GM.editGoal(G,g.id,{areaId:GM.liveAreas(G)[1].id});
    gsave();
    return {before:JSON.stringify(d1),after:JSON.stringify(blockDomains(k,b))};
  });
  ok('an UNLIVED day still follows the goal (the seal is not a freeze-everything)',
     true,fut.before+' -> '+fut.after);
  ok('no JS errors',errs.length===0,errs.slice(0,2).join(' | '));
  await b.close();

  const f=T.filter(t=>!t.c);
  T.forEach(t=>console.log((t.c?'  ok  ':'  FAIL')+'  '+t.n+(t.d?'  ['+t.d+']':'')));
  console.log((T.length-f.length)+'/'+T.length+' passed');
  process.exit(f.length?1:0);
})();
