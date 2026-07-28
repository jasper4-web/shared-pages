const puppeteer=require('/Users/jaspersmind/build-arsenal/_verify/node_modules/puppeteer-core');
const URL=process.argv[2]||'file:///Users/jaspersmind/Documents/burn-the-boats/index.html';
const wait=ms=>new Promise(r=>setTimeout(r,ms));
const T=[];const ok=(n,c,d)=>T.push({n,c:!!c,d:d===undefined?'':String(d)});
(async()=>{
  const b=await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:'new',args:['--allow-file-access-from-files','--no-sandbox']});
  const p=await b.newPage();await p.setViewport({width:440,height:956,deviceScaleFactor:2,isMobile:true,hasTouch:true});
  const errs=[];p.on('pageerror',e=>errs.push(e.message));
  p.on('console',m=>{if(m.type()==='error')errs.push('CONSOLE '+m.text())});
  await p.evaluateOnNewDocument(()=>{const F=new Date('2026-09-16T09:20:00').getTime();
    const R=Date;class D extends R{constructor(...a){if(!a.length)super(F);else super(...a)}static now(){return F}}
    window.Date=D;try{localStorage.clear()}catch(e){}});
  await p.goto(URL,{waitUntil:'networkidle0'});await wait(900);

  // ---- STEP 1 · the strip is gone from Today
  await p.evaluate(()=>go('today'));await wait(800);
  ok('the pipeline strip is off Today',await p.evaluate(()=>!document.getElementById('pushStrip')));
  ok('renderPushStrip no longer exists',await p.evaluate(()=>typeof renderPushStrip==='undefined'));
  ok('Today still renders',await p.evaluate(()=>document.getElementById('nextUp').innerHTML.length>50));

  // ---- build a real three-tier state
  await p.evaluate(()=>{
    G=GM.empty();
    const A={};[['SANO','WORK'],['Trading','CAPITAL'],['Body','BODY']]
      .forEach(([n,d])=>A[n]=GM.addArea(G,{name:n,domain:d}));
    const dec=GM.addHorizon(G,{label:'Dec 25',date:'2026-12-25'});
    const oct=GM.addHorizon(G,{label:'End of Oct',date:'2026-10-30'});
    const a1=GM.addGoal(G,{title:'Three clients signed and paying',areaId:A['SANO'].id,horizonId:dec.id,
      start:0,at:1,target:3,unit:' clients',anchor:1});
    GM.addGoal(G,{title:'The delivery process written down',areaId:A['SANO'].id,horizonId:oct.id,parentId:a1.id});
    GM.addGoal(G,{title:'Ten more owners called',areaId:A['SANO'].id,parentId:a1.id});
    const a2=GM.addGoal(G,{title:'Three live funded accounts',areaId:A['Trading'].id,horizonId:dec.id,
      start:0,at:0,target:3,anchor:1});
    GM.addGoal(G,{title:'Rules written down',areaId:A['Trading'].id,parentId:a2.id});
    GM.addGoal(G,{title:'Down to 185 lbs',areaId:A['Body'].id,horizonId:dec.id,start:212,at:198,target:185,unit:' lbs',anchor:1});
    S.xpByGoal={[a1.id]:1240};
    const wk=weekKeyNow();
    GM.commit(G,{goalId:a1.id,weekKey:wk,day:0,block:'b1'});
    GM.commit(G,{goalId:a1.id,weekKey:wk,day:0,block:'b2'});
    GM.commit(G,{goalId:a1.id,weekKey:wk,day:1,block:'b1'});
    const d=day(dateOfSlot(wk,0));d.done['b1']=true;d.xpByGoal={[a1.id]:65};save();
    syncCommits(wk);gsave();G.meta.view='area';render();go('push');});
  await wait(1000);

  // ---- STEP 2 · the model
  const m=await p.evaluate(()=>({
    anchors:GM.anchors(G).length,
    sanoKids:GM.childrenOf(G,GM.anchors(G)[0].id).length,
    anchorOfBody:!!GM.anchorOf(G,GM.liveAreas(G).find(a=>a.name==='Body').id),
    loose:GM.looseIn(G,GM.liveAreas(G)[0].id).length}));
  ok('three December goals',m.anchors===3,'anchors='+m.anchors);
  ok('SANO has two under it',m.sanoKids===2,'kids='+m.sanoKids);
  ok('every area has one',m.anchorOfBody);
  ok('nothing is left loose',m.loose===0,'loose='+m.loose);

  ok('one anchor per area — promoting demotes the old one',await p.evaluate(()=>{
    const sano=GM.liveAreas(G).find(a=>a.name==='SANO');
    const kid=GM.childrenOf(G,GM.anchorOf(G,sano.id).id)[0];
    const old=GM.anchorOf(G,sano.id).id;
    GM.setAnchor(G,kid.id,10);
    const now=GM.anchorOf(G,sano.id);
    const ok=now.id===kid.id&&GM.goalOf(G,old).anchor===0&&
      GM.goalOf(G,old).history.some(h=>h.t==='anchor');
    GM.setAnchor(G,old,10);return ok;}));
  ok('an anchor is never parented',await p.evaluate(()=>
    GM.anchors(G).every(g=>g.parentId===null)));

  // ---- STEP 3 · the page
  await p.evaluate(()=>render());await wait(700);
  const pg=await p.evaluate(()=>{
    const ap=document.querySelector('.g2apex');
    return{apex:!!ap,apexTxt:ap?ap.textContent.replace(/\s+/g,' ').trim():'',
      tiers:document.querySelectorAll('.g2tier').length,
      ancCards:document.querySelectorAll('.g2anc').length,
      subs:document.querySelectorAll('.g2sub').length,
      facts:document.querySelectorAll('.g2facts').length,
      firstFacts:(document.querySelector('.g2anc .g2facts')||{}).textContent};});
  ok('the apex is the first thing',pg.apex&&/Be him/.test(pg.apexTxt),pg.apexTxt.slice(0,54));
  ok('...and it names the way there',/clearing the 3 below/.test(pg.apexTxt),pg.apexTxt.slice(-46));
  ok('one tier per area',pg.tiers===3,'tiers='+pg.tiers);
  ok('three December cards',pg.ancCards===3,'anchors='+pg.ancCards);
  ok('three working goals under them',pg.subs===3,'subs='+pg.subs);
  ok('every goal shows what it has DONE',pg.facts===6,'facts='+pg.facts);
  ok('...blocks, XP and when it last moved',
     /1 of 3 blocks/.test(pg.firstFacts||'')&&/1,240 XP/.test(pg.firstFacts||'')&&/moved/.test(pg.firstFacts||''),
     (pg.firstFacts||'').replace(/\s+/g,' ').trim());
  ok('a goal with nothing on it says so',await p.evaluate(()=>
    [...document.querySelectorAll('.g2facts')].some(e=>/nothing on it yet/.test(e.textContent))));

  // ---- STEP 4 · capacity counts committed blocks, not goals
  const cap=await p.evaluate(()=>{
    const byWeek=GM.capCheck(G,WEEK_BLOCKS,weekKeyNow());
    const noWeek=GM.capCheck(G,WEEK_BLOCKS);
    return{live:byWeek.live,over:byWeek.over,goals:GM.liveGoals(G).length,noWeekLive:noWeek.live};});
  ok('capacity counts goals you committed to, not goals you own',cap.live===1&&cap.goals===6,
     `committed=${cap.live} owned=${cap.goals}`);
  ok('...so six goals does not trigger the cap',!cap.over);
  ok('...and anchors are excluded from the fallback count',cap.noWeekLive===3,'fallback='+cap.noWeekLive);

  // ---- adding through the UI
  await p.evaluate(()=>{const a=GM.liveAreas(G).find(x=>x.name==='Body');
    g2NewGoal(a.id,0,GM.anchorOf(G,a.id).id)});
  await wait(600);
  await p.type('#g2T','Walk every morning');
  await p.evaluate(()=>g2Save());await wait(700);
  ok('a goal added under an anchor lands there',await p.evaluate(()=>{
    const a=GM.liveAreas(G).find(x=>x.name==='Body');
    return GM.childrenOf(G,GM.anchorOf(G,a.id).id).some(g=>g.title==='Walk every morning')}));
  ok('...and it is not an anchor',await p.evaluate(()=>
    GM.anchors(G).length===3));

  // an area with no December goal offers one
  await p.evaluate(()=>{const a=GM.addArea(G,{name:'Faith',domain:'FAITH'});gsave();render()});
  await wait(600);
  ok('an area with no December goal invites one',await p.evaluate(()=>
    [...document.querySelectorAll('.g2addanc')].some(e=>/Give Faith a December goal/.test(e.textContent))));

  // ---- craft floor + no errors
  const a=await p.evaluate(()=>{
    const bad={small:0,tap:0,over:null,nan:0};
    if(document.documentElement.scrollWidth>window.innerWidth+1)bad.over=document.documentElement.scrollWidth;
    [...document.querySelectorAll('.app *')].forEach(el=>{
      const cs=getComputedStyle(el);if(cs.display==='none'||cs.visibility==='hidden')return;
      const r=el.getBoundingClientRect();if(!r.width||!r.height)return;
      const t=(el.textContent||'').trim();
      if(!el.children.length&&t&&parseFloat(cs.fontSize)<11)bad.small++;
      if(/^(BUTTON|A)$/.test(el.tagName)&&r.height<44)bad.tap++;
      if(!el.children.length&&/NaN|undefined|\[object/.test(t))bad.nan++;});
    return bad;});
  ok('no overflow',!a.over,a.over);
  ok('no sub-11px text',a.small===0,a.small);
  ok('all taps >=44px',a.tap===0,a.tap);
  ok('no NaN/undefined on screen',a.nan===0,a.nan);
  ok('no JS errors',errs.length===0,errs.slice(0,3).join(' | '));

  const f=T.filter(t=>!t.c);
  T.forEach(t=>console.log((t.c?'  ok  ':'  FAIL')+'  '+t.n+(t.d?'  ['+t.d+']':'')));
  console.log((T.length-f.length)+'/'+T.length+' passed');
  await p.screenshot({path:process.env.SP+'/tiers.png',fullPage:false});
  await b.close();process.exit(f.length?1:0);
})();
