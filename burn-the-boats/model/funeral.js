/* FUNERAL.JS — the graveyard watch.
   Phase 0 of the mentor verdict: every system that was replaced is now DELETED, and this
   harness FAILS if any of them comes back. The project's standing rule, enforced:
   a rebuild is not done until the old version is deleted and a test fails if it returns.

   Buried 2026-07-28:
   1 · d.goals / w.goals            — the legacy block→goal maps (caused the composer wipe)
   2 · S.week[].theme               — hardcoded business labels ("one card, two truths")
   3 · the Record "Set next week"   — the second planner, +75 XP for tapping a dropdown
   4 · S.december in DEFAULT        — seed for a model deleted in July
   5 · the day rail                 — his call: "random, an overbuild"
   6 · the confidence questions     — his call: "weekly review questions don't need to be there"
   And one door OPENED: the Sabbath screen's SET NEXT WEEK.                                */
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
  await p.goto(URL,{waitUntil:'networkidle0'});await wait(900);
  return {b,p,errs};
}
(async()=>{
  // ══ 1 · SOURCE-LEVEL — the graves stay shut ══════════════════════════════
  let {b,p,errs}=await boot('2026-09-16T09:20:00');   // a Wednesday
  const src=await p.evaluate(()=>document.documentElement.outerHTML);
  ok('nothing writes the legacy goal maps',
     !/d\.goals\[k\]=/.test(src)&&!/w\.goals\[k\]=/.test(src)&&!/\.goals=S\.week\[k\]\.goals\|\|/.test(src));
  ok('the composer has no legacy fallback read',!/d\.goals&&d\.goals\[k\]/.test(src));
  ok('the theme seed is gone',!/theme:\{b1:'SANO'/.test(src));
  ok('the +75 planner is gone',!/Lock next week/.test(src)&&!/setweek:/.test(src)&&!/function saveNextWeek/.test(src));
  ok('the december seed is gone from DEFAULT',!/lag:'3 SANO clients/.test(src));
  ok('the day rail is gone',!/rail-wrap/.test(src)&&!/id="railNow"/.test(src)&&!/function renderRail/.test(src));
  /* match executable code, not the tombstone comments that name the buried */
  ok('the confidence questions are gone',!/'WOBBLING'/.test(src)&&!/function g2ConfGoals/.test(src)&&!/g2Conf\('/.test(src));
  ok('deep-work-left SURVIVED the rail',/renderTimeLeft/.test(src)&&/tlBig/.test(src));
  ok('the correction list SURVIVED the review',/function g2Flip/.test(src)&&/g2rv/.test(src));

  // ══ 2 · RENDERED — one card, ONE truth ═══════════════════════════════════
  // The exhibit-A repro from the mentor verdict, now inverted into a guard:
  // commit a Spanish goal to today's B1 and the card must say Spanish — never SANO.
  await p.evaluate(()=>{
    const a=GM.addArea(G,{name:'Spanish',domain:'MIND'});
    const g=GM.addGoal(G,{title:'Spanish an hour a day',areaId:a.id,anchor:1});
    setCommitQuiet(weekKeyNow(),2,'b1',g.id);gsave();save();render();});
  await wait(700);
  const card=await p.evaluate(()=>document.getElementById('nextUp').innerText.replace(/\s+/g,' '));
  ok('the live card carries the committed area',/Block 1 · Spanish/.test(card),card.slice(0,90));
  ok('...and the ghost label is dead',!/SANO/.test(card),card.slice(0,90));
  ok('...while the goal line still names the goal',/Spanish an hour a day/.test(card));
  // and a block with NOTHING on it claims nothing
  const b2=await p.evaluate(()=>{
    const rows=[...document.querySelectorAll('#sched .blk')].map(e=>e.innerText.replace(/\s+/g,' '));
    return rows.find(t=>/Block 2/.test(t))||'';});
  ok('an uncommitted block wears no label at all',b2&&!/SANO|LA Edible|Admin|TRADING/i.test(b2),b2.slice(0,60));
  ok('no JS errors',errs.length===0,errs.join(' | '));
  await b.close();

  // ══ 3 · THE RECORD TAB — one planner, one door ═══════════════════════════
  ({b,p,errs}=await boot('2026-09-19T10:00:00'));     // a Saturday — where the +75 lived
  await p.evaluate(()=>go('record'));await wait(700);
  const rec=await p.evaluate(()=>document.body.innerText.replace(/\s+/g,' '));
  ok('Saturday Record no longer sells the old planner',!/Lock next week/.test(rec)&&!/\+75/.test(rec));
  ok('...it points at THE WEEK instead',/Plan the week/.test(rec));
  const door=await p.evaluate(async()=>{
    const btn=[...document.querySelectorAll('button')].find(e=>/Plan the week/.test(e.textContent));
    if(!btn)return null;btn.click();await new Promise(r=>setTimeout(r,500));
    return{view:G.meta.view,body:document.getElementById('pushBody').innerText.slice(0,200)};});
  ok('the door actually opens THE WEEK',door&&door.view==='week',door&&door.view);
  ok('no JS errors',errs.length===0,errs.join(' | '));
  await b.close();

  // ══ 4 · SUNDAY — rest, and the one action that belongs there ═════════════
  ({b,p,errs}=await boot('2026-09-20T10:00:00'));     // a Sunday
  const sab=await p.evaluate(()=>({
    on:document.getElementById('sabbath').classList.contains('on'),
    plan:!!document.getElementById('sabPlan'),
    txt:document.getElementById('sabbath').innerText.replace(/\s+/g,' ')}));
  ok('the Sabbath still holds Sunday',sab.on);
  ok('...and now carries the one door: SET NEXT WEEK',sab.plan&&/SET NEXT WEEK/.test(sab.txt));
  const sun=await p.evaluate(async()=>{
    document.getElementById('sabPlan').click();
    await new Promise(r=>setTimeout(r,500));
    return{closed:!document.getElementById('sabbath').classList.contains('on'),
      view:G.meta.view,week:/THE WEEK|committed/i.test(document.getElementById('pushBody').innerText)};});
  ok('tapping it opens the planner',sun.closed&&sun.view==='week',JSON.stringify(sun));
  ok('...and pays NOTHING',await p.evaluate(()=>S.xp===0),'xp!=0');
  ok('no JS errors',errs.length===0,errs.join(' | '));
  await b.close();

  // ══ 5 · THE REVIEW — corrections live, questions dead, on screen ═════════
  ({b,p,errs}=await boot('2026-09-16T09:20:00'));
  const rv=await p.evaluate(async()=>{
    const a=GM.addArea(G,{name:'SANO',domain:'WORK'});
    const g=GM.addGoal(G,{title:'Ten owners called',areaId:a.id,anchor:1});
    /* a closed last week with one done, one missed */
    GM.commit(G,{goalId:g.id,weekKey:'2026-09-07',day:0,block:'b1',}).done=1;
    GM.commit(G,{goalId:g.id,weekKey:'2026-09-07',day:1,block:'b1'});
    G.weeks=G.weeks||{};G.weeks['2026-09-07']={closed:1,pct:50,committed:2,done:1,weekKey:'2026-09-07',repeatMisses:[]};
    gsave();
    if(typeof g2Review==='function'){
      try{g2Review()}catch(e){}
    }
    await new Promise(r=>setTimeout(r,400));
    const sheet=document.getElementById('sheetA');
    return sheet?sheet.innerText.replace(/\s+/g,' '):'';});
  ok('the review sheet never asks "Will it land?"',!/Will it land|ON TRACK|WOBBLING|NOT HAPPENING/.test(rv),rv.slice(0,80));
  ok('no JS errors',errs.length===0,errs.join(' | '));
  await b.close();

  const f=T.filter(t=>!t.c);
  T.forEach(t=>console.log((t.c?'  ok  ':'  FAIL')+'  '+t.n+(t.d?'  ['+t.d+']':'')));
  console.log((T.length-f.length)+'/'+T.length+' passed');
  process.exit(f.length?1:0);
})();
