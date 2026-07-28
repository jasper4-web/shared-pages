/* DAYPLAN.JS — Phase 3 gate: THE DAY IS DATA, INVISIBLY.
   The seed equals the old constants byte-for-byte, so day one renders identical; a
   per-date plan changes THAT date only; a lived day keeps its stamped shape whatever
   happens to the templates afterwards (forward-only, applied to time).              */
const puppeteer=require('/Users/jaspersmind/build-arsenal/_verify/node_modules/puppeteer-core');
const URL=process.argv[2]||'file:///Users/jaspersmind/Documents/burn-the-boats/index.html';
const wait=ms=>new Promise(r=>setTimeout(r,ms));
const T=[];const ok=(n,c,d)=>T.push({n,c:!!c,d:d===undefined?'':String(d)});
async function boot(clock,pre){
  const b=await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless:'new',args:['--allow-file-access-from-files','--no-sandbox']});
  const p=await b.newPage();
  await p.setViewport({width:390,height:844,deviceScaleFactor:2,isMobile:true,hasTouch:true});
  const errs=[];p.on('pageerror',e=>errs.push(e.message));
  await p.evaluateOnNewDocument(`(()=>{const F=new Date('${clock}').getTime();
    const R=Date;class D extends R{constructor(...a){if(!a.length)super(F);else super(...a)}
    static now(){return F}} window.Date=D;try{localStorage.clear();${pre||''}}catch(e){}})()`);
  await p.goto(URL,{waitUntil:'networkidle0'});await wait(900);
  return {b,p,errs};
}
(async()=>{
  // ══ 1 · PIXEL-IDENTICAL DAY ONE ══════════════════════════════════════════
  let {b,p,errs}=await boot('2026-09-16T09:20:00');    // Wednesday
  const seed=await p.evaluate(()=>({
    wk:JSON.stringify(S.templates.weekday)===JSON.stringify(WEEKDAY),
    sat:JSON.stringify(S.templates.saturday)===JSON.stringify(SATURDAY),
    todayIs:JSON.stringify(shape())===JSON.stringify(S.templates.weekday),
    sun:shape('2026-09-20').length===0,
    satDay:JSON.stringify(shape('2026-09-19'))===JSON.stringify(S.templates.saturday),
    rows:document.querySelectorAll('#sched .blk').length,
    deep:JSON.stringify(DEEP_BLOCKS),blocks:WEEK_BLOCKS}));
  ok('the weekday template === the old constant, verbatim',seed.wk);
  ok('the saturday template === the old constant, verbatim',seed.sat);
  ok('today renders from the template',seed.todayIs&&seed.rows>0,'rows='+seed.rows);
  ok('Sunday is still the Sabbath, not a missing template',seed.sun);
  ok('Saturday still resolves by date',seed.satDay);
  ok('the fixtures hold: 4 deep blocks, 20 a week',seed.deep==='["b1","b2","b3","b4"]'&&seed.blocks===20,
     seed.deep+' · '+seed.blocks);

  // ══ 2 · A PER-DATE PLAN CHANGES THAT DATE ONLY ═══════════════════════════
  const ov=await p.evaluate(()=>{
    const fri='2026-09-18';
    const plan=S.templates.weekday.map(b=>({...b}));
    plan.splice(8,0,{id:'dent',s:'14:35',e:'15:05',n:'Dentist',dom:['BODY'],kind:'life'});
    const walk=plan.findIndex(b=>b.id==='walk');plan.splice(walk,1);   /* the walk gives way */
    S.dayPlan[fri]=plan;save();
    return {fri:shape(fri).some(b=>b.id==='dent')&&!shape(fri).some(b=>b.id==='walk'),
      today:!shape().some(b=>b.id==='dent')&&shape().some(b=>b.id==='walk'),
      thu:!shape('2026-09-17').some(b=>b.id==='dent')};});
  ok('Friday gets the dentist and gives up the walk',ov.fri);
  ok('...today is untouched',ov.today);
  ok('...Thursday is untouched',ov.thu);

  // ══ 3 · FORWARD-ONLY — the lived past survives ANY plan change ═══════════
  const fo=await p.evaluate(()=>{
    /* live this morning: stamp + complete a block */
    stampToday();markDone('b1');
    const stamped=JSON.stringify(day().shape);
    const week1=JSON.parse(JSON.stringify(week()));
    /* then he goes wild on the template: renames b1, moves lunch, deletes the gym */
    const t=S.templates.weekday;
    t.find(x=>x.id==='b1').n='Renamed block';
    t.find(x=>x.id==='lunch').s='11:30';
    t.splice(t.findIndex(x=>x.id==='gym'),1);
    save();recount();render();
    return {stampSame:JSON.stringify(day().shape)===stamped,
      doneKept:!!day().done.b1,
      dueSame:week().due===week1.due&&week().done===week1.done,
      liveRows:document.querySelectorAll('#sched .blk').length};});
  ok('the stamped day is untouched by template edits',fo.stampSame);
  ok('...the completed block stays completed',fo.doneKept);
  ok('...and the week owes exactly what it owed',fo.dueSame);

  // shapeFor: an UNSTAMPED past day falls back to what was true then
  const past=await p.evaluate(()=>{
    delete S.days['2026-09-14'];                       /* never opened that Monday */
    const sh=shapeFor('2026-09-14');
    return sh.length===S.templates.weekday.length;});
  ok('an unstamped past day reads the template (the seed = what it was lived with)',past);
  ok('no JS errors',errs.length===0,errs.join(' | '));
  await b.close();

  // ══ 4 · HIS TEMPLATE SURVIVES A FRESH BOOT; labels follow his words ══════
  ({b,p,errs}=await boot('2026-09-16T09:20:00'));
  const saved=await p.evaluate(()=>{
    S.templates.weekday.find(x=>x.id==='bible').n='Scripture with Kells';
    save();return localStorage.getItem('btb3')});
  await b.close();
  ({b,p,errs}=await boot('2026-09-16T09:20:00',
    `localStorage.setItem('btb3',${JSON.stringify(saved).replace(/<\/script/gi,'<\\/script')})`));
  const back=await p.evaluate(()=>({
    n:S.templates.weekday.find(x=>x.id==='bible').n,
    label:quotaLabel({src:'block',id:'bible'}),
    rendered:document.getElementById('sched').innerText.includes('Scripture with Kells')}));
  ok('a template edit survives a fresh boot',back.n==='Scripture with Kells');
  ok('...the standards speak his words for the block',back.label==='Scripture with Kells');
  ok('...and Today renders them',back.rendered);
  ok('no JS errors',errs.length===0,errs.join(' | '));
  await b.close();

  // ══ 5 · THE GRAVE STAYS SHUT — no renderer reads the constants ═══════════
  ({b,p}=await boot('2026-09-16T09:20:00'));
  const src=await p.evaluate(()=>document.documentElement.outerHTML);
  const uses=(src.match(/\bWEEKDAY\b/g)||[]).length+(src.match(/\bSATURDAY\b/g)||[]).length;
  /* the complete legitimate census: 2 const defs + 4 comment mentions + 2 in the seed
     line + WEEK_BLOCKS + DEEP_BLOCKS + 3 user-facing STRINGS that say the word
     ("SATURDAY · SETTING MONDAY UP", the planner's kicker and its normal-day label)
     = 13. One more anywhere means someone wrote a new direct reader. */
  ok('no new direct reader of the day constants',uses<=13,'mentions='+uses);
  ok('shape() is data-driven',/S\.dayPlan&&S\.dayPlan\[k\]/.test(src)&&/S\.templates\.weekday/.test(src));
  await b.close();

  const f=T.filter(t=>!t.c);
  T.forEach(t=>console.log((t.c?'  ok  ':'  FAIL')+'  '+t.n+(t.d?'  ['+t.d+']':'')));
  console.log((T.length-f.length)+'/'+T.length+' passed');
  process.exit(f.length?1:0);
})();
