/* PLANNER.JS — Phase 4 gate: TAP TUESDAY, GET TUESDAY.
   The week is the overview; a day ahead is a door; the editor owns every row from
   morning to night; the fixtures cannot leave; planning pays nothing; today and the
   past refuse politely; the widget logs a good thing the moment it happens.          */
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
const week=async p=>p.evaluate(async()=>{go('push');await new Promise(r=>setTimeout(r,350));
  const t=[...document.querySelectorAll('.g2tab')].find(e=>/THE WEEK/i.test(e.textContent));
  if(t)t.click();await new Promise(r=>setTimeout(r,450));});
(async()=>{
  // ══ 1 · THE DOORS — future open, today locked, past sealed ═══════════════
  let {b,p,errs}=await boot('2026-09-16T09:20:00');    // Wednesday
  await p.evaluate(()=>{const a=GM.addArea(G,{name:'SANO',domain:'WORK'});
    GM.addGoal(G,{title:'Three clients signed',areaId:a.id,anchor:1});gsave();render();});
  await week(p);
  const doors=await p.evaluate(()=>{
    const btns=[...document.querySelectorAll('#pushBody button.g2day')];
    const heads=[...document.querySelectorAll('#pushBody h2.g2day')];
    return {plan:btns.map(e=>e.textContent.replace(/\s+/g,' ').trim().slice(0,16)),
      headers:heads.map(e=>e.textContent.replace(/\s+/g,' ').trim().slice(0,14)),
      sat:btns.some(e=>/SAT/.test(e.textContent))};});
  ok('THU, FRI and SAT are doors',doors.plan.length===3&&doors.sat,doors.plan.join(' | '));
  ok('MON, TUE and today are not',doors.headers.length===3&&doors.headers.some(h=>/WED/.test(h)),
     doors.headers.join(' | '));
  const locked=await p.evaluate(async()=>{
    planDay('2026-09-16');await new Promise(r=>setTimeout(r,300));
    const t=document.getElementById('toast').textContent;
    const open=document.getElementById('sheetA').classList.contains('on')||
      /The day, yours to shape/.test(document.getElementById('sheetA').innerText||'');
    return {t,open};});
  ok('today refuses, in his own words',/lived, not edited/.test(locked.t)&&!locked.open,locked.t);
  const past=await p.evaluate(async()=>{planDay('2026-09-14');await new Promise(r=>setTimeout(r,300));
    return document.getElementById('toast').textContent;});
  ok('the past refuses',/past doesn't change/.test(past),past);
  const sun=await p.evaluate(async()=>{planDay('2026-09-20');await new Promise(r=>setTimeout(r,300));
    return document.getElementById('toast').textContent;});
  ok('Sunday stays the Sabbath',/Sabbath/.test(sun),sun);

  // ══ 2 · THE EDITOR — every row his, fixtures held, planning pays 0 ═══════
  const ed=await p.evaluate(async()=>{
    const xp0=S.xp;
    planDay('2026-09-18');await new Promise(r=>setTimeout(r,350));
    const sheet=document.getElementById('sheetA').innerText.replace(/\s+/g,' ');
    const rows=document.querySelectorAll('#sheetA .pdrow').length;
    /* add the dentist */
    planAdd('2026-09-18');await new Promise(r=>setTimeout(r,300));
    document.getElementById('paN').value='Dentist';
    document.getElementById('paS').value='11:00';
    document.getElementById('paL').value='60';
    planAddSave('2026-09-18');await new Promise(r=>setTimeout(r,300));
    const plan=S.dayPlan['2026-09-18'];
    const dent=plan&&plan.find(x=>x.n==='Dentist');
    return {rows,sacred:/SACRED/.test(sheet),paysNothing:S.xp===xp0,
      wrote:!!dent,time:dent&&dent.s+'–'+dent.e,kind:dent&&dent.kind,
      sorted:plan.every((x,i)=>i===0||mins(plan[i-1].s)<=mins(x.s))};});
  ok('the editor lists his whole day',ed.rows>=14,'rows='+ed.rows);
  ok('the deep blocks wear SACRED',ed.sacred);
  ok('free-typing puts it on the day',ed.wrote&&ed.time==='11:00–12:00',ed.time);
  ok('...as structure, not a score',ed.kind==='plan'&&ed.paysNothing);
  ok('...and the day stays in time order',ed.sorted);

  const move=await p.evaluate(async()=>{
    const rows=S.dayPlan['2026-09-18'];
    const i=rows.findIndex(x=>x.id==='walk');
    planRow('2026-09-18',i);await new Promise(r=>setTimeout(r,300));
    document.getElementById('prN').value='Walk her to practice';
    document.getElementById('prS').value='15:30';
    planRowSave('2026-09-18',i);await new Promise(r=>setTimeout(r,300));
    const w=S.dayPlan['2026-09-18'].find(x=>x.id==='walk');
    return {n:w.n,s:w.s};});
  ok('a row renames and moves',move.n==='Walk her to practice'&&move.s==='15:30',JSON.stringify(move));

  const fix=await p.evaluate(async()=>{
    const rows=S.dayPlan['2026-09-18'];
    const i=rows.findIndex(x=>x.id==='b1');
    planRow('2026-09-18',i);await new Promise(r=>setTimeout(r,300));
    const sheet=document.getElementById('sheetA').innerText;
    const hasDrop=/Take it off this day/.test(sheet);
    closeSheet();
    /* even a direct model write cannot lose a fixture */
    planWrite('2026-09-18',rows.filter(x=>x.id!=='b1'));
    return {hasDrop,survived:S.dayPlan['2026-09-18'].some(x=>x.id==='b1')};});
  ok('a deep block offers no delete',!fix.hasDrop);
  ok('...and survives even a hostile write',fix.survived);

  const gone2=await p.evaluate(async()=>{
    const rows=S.dayPlan['2026-09-18'],i=rows.findIndex(x=>x.id==='gym');
    planRow('2026-09-18',i);await new Promise(r=>setTimeout(r,300));
    planRowDrop('2026-09-18',i);await new Promise(r=>setTimeout(r,300));
    return !S.dayPlan['2026-09-18'].some(x=>x.id==='gym');});
  ok('an ordinary row can be taken off the day',gone2);

  // that Friday, lived: its plan is what Today renders
  ok('the planned day is what that date will run',await p.evaluate(()=>
    shape('2026-09-18').some(x=>x.n==='Dentist')&&!shape('2026-09-17').some(x=>x.n==='Dentist')));

  // ══ 3 · MAKE IT COUNT — his idea, wired ══════════════════════════════════
  const mic=await p.evaluate(async()=>{
    planAdd('2026-09-17');await new Promise(r=>setTimeout(r,300));
    document.getElementById('paN').value='Watered the garden';
    document.getElementById('paCount').click();          /* ★ make it count */
    planAddSave('2026-09-17');await new Promise(r=>setTimeout(r,300));
    const def=S.winDefs.find(w=>w.n==='Watered the garden');
    return {def:!!def,xp:def&&def.xp,paid:S.xp,
      emoji:!!document.querySelector('#sheetA')};});
  ok('★ creates the win def — the palette grew from his life',mic.def&&mic.xp===15);
  ok('...and creating it paid NOTHING',mic.paid===0,'xp='+mic.paid);

  // ══ 4 · NORMAL DAY + RESET ═══════════════════════════════════════════════
  const norm=await p.evaluate(async()=>{
    planReset('2026-09-17');await new Promise(r=>setTimeout(r,200));
    const cleared=!S.dayPlan['2026-09-17'];
    planAsNormal('2026-09-18');await new Promise(r=>setTimeout(r,200));
    return {cleared,
      tmpl:S.templates.weekday.some(x=>x.n==='Dentist'),
      ownGone:!S.dayPlan['2026-09-18'],
      otherDay:shape('2026-09-24').some(x=>x.n==='Dentist')};});
  ok('one tap back to the normal day',norm.cleared);
  ok('"make this my normal day" writes the template',norm.tmpl&&norm.ownGone);
  ok('...and every future weekday inherits it',norm.otherDay);

  // ══ 4b · ATTACH A GOAL TO ANYTHING ON THE DAY ════════════════════════════
  const att=await p.evaluate(async()=>{
    const big=GM.liveGoals(G).find(x=>x.anchor);
    const small=GM.addGoal(G,{title:'Call Anthony back',areaId:G.areas[0].id,parentId:big.id});
    gsave();
    /* the sacred block's picker writes the REAL commitment — THE WEEK's own store */
    const bi=shape('2026-09-24').findIndex(x=>x.id==='b1');
    planRow('2026-09-24',bi);await new Promise(r=>setTimeout(r,300));
    const hasPicker=/which goal does this serve/i.test(document.getElementById('sheetA').innerText);
    PRG=big.id;planRowSave('2026-09-24',bi);await new Promise(r=>setTimeout(r,300));
    const c=commitFor(mondayOf(new Date('2026-09-24T00:00:00')),3,'b1');
    /* a custom row carries the link on the plan */
    planAdd('2026-09-24');await new Promise(r=>setTimeout(r,250));
    document.getElementById('paN').value='Call Anthony';PRG=small.id;
    planAddSave('2026-09-24');await new Promise(r=>setTimeout(r,300));
    const row=S.dayPlan['2026-09-24'].find(x=>x.n==='Call Anthony');
    const listShows=document.getElementById('sheetA').innerText.includes('→ Call Anthony back');
    /* and the linked small goal can be knocked out from the row itself */
    planRow('2026-09-24',S.dayPlan['2026-09-24'].indexOf(row));await new Promise(r=>setTimeout(r,300));
    const btn=[...document.querySelectorAll('#sheetA button')].find(e=>/knock it out/i.test(e.textContent));
    if(btn)btn.click();await new Promise(r=>setTimeout(r,300));
    return {hasPicker,commit:!!c&&c.goalId===big.id,rowGoal:!!row&&row.goalId===small.id,
      listShows,ko:!!btn,done:GM.goalOf(G,small.id).state==='done'};});
  ok('every row asks which goal it serves',att.hasPicker);
  const grp=await p.evaluate(async()=>{
    /* the picker is a hierarchy: projects closed by default, open on tap, and the
       project itself is pickable inside its own drop-down */
    const big=GM.liveGoals(G).find(x=>x.anchor);
    GM.addGoal(G,{title:'Sent Anthony an offer',areaId:big.areaId,parentId:big.id});gsave();
    const bi=shape('2026-09-25').findIndex(x=>x.id==='b2');
    planRow('2026-09-25',bi);await new Promise(r=>setTimeout(r,300));
    const sheet=()=>document.getElementById('sheetA');
    const head=[...sheet().querySelectorAll('.gpk-h')].find(e=>/Three clients/.test(e.textContent));
    const kidsHidden=head&&head.parentNode.querySelector('.gpk-kids').getBoundingClientRect().height===0;
    if(head)head.click();await new Promise(r=>setTimeout(r,150));
    const opened=head&&head.parentNode.querySelector('.gpk-kids').getBoundingClientRect().height>0;
    const inside=head&&head.parentNode.querySelector('.gpk-kids').textContent;
    closeSheet();
    return {grouped:!!head,kidsHidden,opened,
      projectPickable:/◆ Three clients/.test(inside||''),
      childInside:/Sent Anthony an offer/.test(inside||'')};});
  ok('projects are drop-downs, closed by default',grp.grouped&&grp.kidsHidden);
  ok('...that open on a tap',grp.opened);
  ok('...holding the project itself AND its small goals',grp.projectPickable&&grp.childInside,
     JSON.stringify(grp));
  ok('a sacred block\'s pick writes the real commitment',att.commit);
  ok('a custom row carries its goal on the plan',att.rowGoal);
  ok('...and the day list says so with an arrow',att.listShows);
  ok('a linked small goal knocks out from the row',att.ko&&att.done,JSON.stringify({ko:att.ko,done:att.done}));
  ok('no JS errors',errs.length===0,errs.join(' | '));
  await b.close();

  // ══ 5 · NEXT WEEK + the Sabbath door ═════════════════════════════════════
  ({b,p,errs}=await boot('2026-09-20T10:00:00'));      // Sunday
  await p.evaluate(()=>{const a=GM.addArea(G,{name:'SANO',domain:'WORK'});
    GM.addGoal(G,{title:'Three clients signed',areaId:a.id,anchor:1});gsave();});
  const sab=await p.evaluate(async()=>{
    document.getElementById('sabPlan').click();
    await new Promise(r=>setTimeout(r,500));
    const txt=document.getElementById('pushBody').innerText;
    return {next:/09-21/.test(txt),doors:[...document.querySelectorAll('#pushBody button.g2day')].length};});
  ok('Sunday\'s door lands on NEXT week',sab.next,'doors='+sab.doors);
  ok('...where every day is plannable',sab.doors===6,'doors='+sab.doors);
  const back=await p.evaluate(async()=>{wkView(0);await new Promise(r=>setTimeout(r,400));
    return document.getElementById('pushBody').innerText;});
  ok('THIS WEEK is one tap back',/09-14|09-18/.test(back));
  ok('no JS errors',errs.length===0,errs.join(' | '));
  await b.close();

  // ══ 6 · THE WIDGET — log it the moment it happens ════════════════════════
  ({b,p,errs}=await boot('2026-09-16T09:20:00'));      // morning
  const wid=await p.evaluate(async()=>{
    quickLog();await new Promise(r=>setTimeout(r,350));
    const txt=document.getElementById('sheetA').innerText;
    const opts=[...document.querySelectorAll('#sheetA .else-o')].map(e=>e.textContent.trim());
    return {opts,noBed:!/In bed on time/.test(txt),noCook:!/Cooked/.test(txt),
      unTap:/UN-TAPPABLE/.test(txt)};});
  ok('the widget offers three good things',wid.opts.length===3,wid.opts.join(' | ').slice(0,70));
  ok('...time-honest: no "in bed" at 9am, no "cooked" before 17:00',wid.noBed&&wid.noCook);
  const wtap=await p.evaluate(async()=>{
    const k=elseCands('b1')[0].k;
    const before=S.xp;
    document.querySelector('#sheetA .else-o').click();
    await new Promise(r=>setTimeout(r,300));
    const paid=S.xp>before;
    tapWin(k);                                          /* the accident, corrected */
    return {paid,refunded:S.xp===before,sum:S.ledger.reduce((a,e)=>a+e.xp,0)===S.xp};});
  ok('a widget tap pays through the ledger',wtap.paid);
  ok('...and an accidental one comes straight back',wtap.refunded&&wtap.sum);

  // craft floor on the planner sheets
  const craft=await p.evaluate(async()=>{
    closeSheet();planDay('2026-09-18');await new Promise(r=>setTimeout(r,350));
    const de=document.documentElement;
    return {over:de.scrollWidth>window.innerWidth+1,
      small:[...document.querySelectorAll('#sheetA *')].filter(e=>!e.children.length&&e.textContent.trim())
        .filter(e=>parseFloat(getComputedStyle(e).fontSize)<11).length,
      taps:[...document.querySelectorAll('#sheetA button')]
        .filter(e=>{const r=e.getBoundingClientRect();return r.height>0&&r.height<44}).length};});
  ok('no horizontal overflow',!craft.over);
  ok('no text under 11px',craft.small===0,craft.small);
  ok('every button clears 44px',craft.taps===0,craft.taps);
  ok('no JS errors',errs.length===0,errs.join(' | '));
  await b.close();

  const f=T.filter(t=>!t.c);
  T.forEach(t=>console.log((t.c?'  ok  ':'  FAIL')+'  '+t.n+(t.d?'  ['+t.d+']':'')));
  console.log((T.length-f.length)+'/'+T.length+' passed');
  process.exit(f.length?1:0);
})();
