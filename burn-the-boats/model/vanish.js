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

  // every live goal must be visible SOMEWHERE on the Goals tab
  const seen=()=>p.evaluate(()=>{
    const txt=document.getElementById('pushBody').textContent;
    return GM.liveGoals(G).filter(g=>txt.indexOf(g.title)<0).map(g=>g.title);});
  const setup=()=>p.evaluate(()=>{
    G=GM.empty();
    const X=GM.addArea(G,{name:'SANO',domain:'WORK'});
    const Y=GM.addArea(G,{name:'Trading',domain:'CAPITAL'});
    const A=GM.addGoal(G,{title:'AAA December SANO',areaId:X.id,anchor:1});
    GM.setAnchor(G,A.id,1);
    GM.addGoal(G,{title:'BBB under SANO',areaId:X.id,parentId:A.id});
    GM.addGoal(G,{title:'CCC under SANO',areaId:X.id,parentId:A.id});
    const P=GM.addGoal(G,{title:'PPP December Trading',areaId:Y.id,anchor:1});
    GM.setAnchor(G,P.id,1);
    gsave();G.meta.view='area';render();
    return{X:X.id,Y:Y.id,A:A.id,P:P.id};});

  await p.evaluate(()=>go('push'));await wait(700);
  let ids=await setup();await wait(500);
  ok('baseline · everything visible',(await seen()).length===0,(await seen()).join(' | '));

  // QC #2 — park the anchor
  await p.evaluate(i=>{GM.setState(G,i.A,'parked',5);gsave();render()},ids);await wait(500);
  ok('parking a December goal does not hide its children',(await seen()).length===0,(await seen()).join(' | '));
  ok('...and the parked one is still reachable',await p.evaluate(()=>
    /AAA December SANO/.test(document.getElementById('pushBody').textContent)));

  ids=await setup();await wait(400);
  // QC #2b — complete the anchor
  await p.evaluate(i=>{GM.setState(G,i.A,'done',5);gsave();render()},ids);await wait(500);
  ok('completing a December goal does not hide its children',(await seen()).length===0,(await seen()).join(' | '));

  ids=await setup();await wait(400);
  // QC #3 — move an anchor to another area
  await p.evaluate(i=>{GM.editGoal(G,i.A,{areaId:i.Y},5);gsave();render()},ids);await wait(500);
  ok('moving a December goal to another area loses nothing',(await seen()).length===0,(await seen()).join(' | '));

  ids=await setup();await wait(400);
  // QC #8 — move a child to another area
  await p.evaluate(i=>{const b=G.goals.find(g=>/BBB/.test(g.title));
    GM.editGoal(G,b.id,{areaId:i.Y},5);gsave();render()},ids);await wait(500);
  ok('a working goal moved to another area shows under the new one',await p.evaluate(()=>{
    const tiers=[...document.querySelectorAll('.g2tier')];
    const t=tiers.find(x=>/Trading/.test(x.querySelector('.tr-h').textContent));
    return !!t&&/BBB/.test(t.textContent);}));

  ids=await setup();await wait(400);
  // QC #7 — archived area
  await p.evaluate(i=>{GM.archiveArea(G,i.X);gsave();render()},ids);await wait(500);
  ok('goals in an archived area still appear',(await seen()).length===0,(await seen()).join(' | '));
  ok('...under a "no area" heading',await p.evaluate(()=>
    /needs a home/.test(document.getElementById('pushBody').textContent)));

  ids=await setup();await wait(400);
  // QC #1 — park everything
  await p.evaluate(()=>{GM.liveGoals(G).forEach(g=>GM.setState(G,g.id,'parked',5));gsave();render()});
  await wait(500);
  ok('parking EVERYTHING does not look like a fresh install',await p.evaluate(()=>{
    const t=document.getElementById('pushBody').textContent;
    return /AAA December SANO/.test(t)&&/PPP December Trading/.test(t);}));
  ok('...and every one can be woken',await p.evaluate(()=>{
    const n=document.querySelectorAll('#pushBody .g2m .mb').length;return n>=4;}));
  await p.evaluate(()=>{const g=G.goals[0];g2Wake(g.id)});await wait(500);
  ok('wake puts it back',await p.evaluate(()=>GM.liveGoals(G).length===1));

  ids=await setup();await wait(400);
  // QC #5 — asking to anchor Body must not demote SANO's
  await p.evaluate(i=>{g2NewGoal(i.Y,1)},ids);await wait(500);
  await p.type('#g2T','Should anchor Trading only');
  await p.evaluate(i=>{g2Pick('a',i.X);g2Save()},ids);await wait(600);
  ok('switching the area chip does NOT silently demote another December goal',
     await p.evaluate(i=>GM.goalOf(G,i.A).anchor===1,ids));

  ids=await setup();await wait(400);
  // QC #9 — promote / demote exists
  await p.evaluate(()=>{const b=G.goals.find(g=>/BBB/.test(g.title));g2Open(b.id)});await wait(500);
  ok('a working goal offers to become the December goal',await p.evaluate(()=>
    /Make this the December goal/.test(document.getElementById('sheetA').textContent)));
  await p.evaluate(()=>{const b=G.goals.find(g=>/BBB/.test(g.title));g2Promote(b.id)});await wait(600);
  ok('promoting swaps them',await p.evaluate(i=>{
    const b=G.goals.find(g=>/BBB/.test(g.title));
    return b.anchor===1&&GM.goalOf(G,i.A).anchor===0;},ids));
  ok('...and the demoted one is still visible',(await seen()).length===0,(await seen()).join(' | '));

  // QC #10 — the WIG can be changed
  await p.evaluate(()=>{const c=G.goals.find(g=>/CCC/.test(g.title));g2Open(c.id)});await wait(500);
  ok('a goal offers to become the one that matters',await p.evaluate(()=>
    /Make this the one that matters/.test(document.getElementById('sheetA').textContent)));
  await p.evaluate(()=>{const c=G.goals.find(g=>/CCC/.test(g.title));g2SetWig(c.id);closeSheet()});
  await wait(500);
  ok('...and it takes',await p.evaluate(()=>G.goals.find(g=>/CCC/.test(g.title)).wig===1));

  // QC #11 — a cleared number must not render a blank
  ok('a cleared "now" does not render " of 10"',await p.evaluate(()=>{
    const g=GM.addGoal(G,{title:'ZZZ num',areaId:GM.liveAreas(G)[0].id,start:0,at:5,target:10});
    g.at=null;gsave();render();
    const t=document.getElementById('pushBody').textContent;
    return GM.progress(g)===null&&!/ of 10/.test(t)&&!/NaN|undefined/.test(t);}));

  // QC #4 — "+ new date" must not lose the intent
  await p.evaluate(()=>{G.goals=G.goals.filter(g=>!/ZZZ/.test(g.title));gsave();
    const y=GM.liveAreas(G).find(a=>a.name==='Trading');g2NewGoal(y.id,1)});
  await wait(500);
  await p.type('#g2T','Kept through the trip');
  await p.evaluate(()=>g2NewDate());await wait(500);
  await p.evaluate(()=>{document.getElementById('g2HD').value='2026-12-25';
    document.getElementById('g2HN').value='Dec 25';g2SaveDate()});
  await wait(900);
  const kept=await p.evaluate(()=>({title:(document.getElementById('g2T')||{}).value,
    area:GB.areaId,anchor:GB.anchor,hz:!!GB.horizonId}));
  ok('the typed title survives "+ new date"',kept.title==='Kept through the trip',kept.title);
  ok('...and so does the anchor intent',kept.anchor===1,'anchor='+kept.anchor);
  ok('...and the new date is selected',kept.hz);


  // ══ QC PASS 2 ═══════════════════════════════════════════════════════════
  ids=await setup();await wait(400);
  // D2 · a DONE goal must not fall out of every bucket
  await p.evaluate(i=>{GM.setState(G,i.A,'done',5);gsave();render()},ids);await wait(500);
  ok('a finished December goal is still on the page',await p.evaluate(()=>
    /AAA December SANO/.test(document.getElementById('pushBody').textContent)));
  ok('...and the apex counts it as done',await p.evaluate(()=>
    /already done/.test(document.querySelector('.g2apex').textContent)));

  // D1 · the December card must not render a down-goal backwards
  ids=await setup();await wait(400);
  const down=await p.evaluate(i=>{
    GM.editGoal(G,i.A,{start:212,at:198,target:185,unit:'lbs'},5);
    G.goals.find(g=>g.id===i.A).title='Down to 185';gsave();render();
    const c=document.querySelector('.g2anc');return c?c.textContent.replace(/\s+/g,' '):''; },ids);
  ok('a down-goal reads forwards on the December card',
     /198 lbs/.test(down)&&/down to 185 lbs/.test(down)&&!/198 of 185/.test(down),down.slice(0,80));

  // D7 · an old save with no anchor field must not ship empty
  const bf=await p.evaluate(()=>{
    const raw={v:1,areas:[{id:'a1',name:'SANO',domain:'WORK',rank:1,standards:[],archived:0}],
      horizons:[{id:'h1',label:'Dec 25',date:'2026-12-25',archived:0}],
      goals:[{id:'g1',areaId:'a1',horizonId:'h1',title:'Old one',state:'active',wig:1,
              confidence:[],history:[],start:null,at:null,target:null,rank:1},
             {id:'g2',areaId:'a1',horizonId:null,title:'Old two',state:'active',wig:0,
              confidence:[],history:[],start:null,at:null,target:null,rank:2}],
      commits:[],meta:{}};
    const out=backfillAnchors(Object.assign(GM.empty(),raw));
    return{anchors:out.goals.filter(g=>g.anchor).length,which:out.goals.find(g=>g.anchor).title,
      flag:!!out.meta.anchored};});
  ok('an old save gets exactly one December goal per area',bf.anchors===1,'anchors='+bf.anchors);
  ok('...and it picks the WIG',bf.which==='Old one',bf.which);
  ok('...and never runs twice',bf.flag);
  ok('backfill never overrides a choice already made',await p.evaluate(()=>{
    const raw={areas:[{id:'a1',name:'X',domain:'WORK',rank:1,archived:0}],horizons:[],commits:[],meta:{},
      goals:[{id:'g1',areaId:'a1',title:'mine',state:'active',anchor:1,confidence:[],history:[]},
             {id:'g2',areaId:'a1',title:'other',state:'active',anchor:0,confidence:[],history:[]}]};
    const out=backfillAnchors(Object.assign(GM.empty(),raw));
    return out.goals.filter(g=>g.anchor).length===1&&out.goals.find(g=>g.anchor).title==='mine';}));

  // D3 · a dismissed sheet must not leak into a later "+ new area"
  ids=await setup();await wait(400);
  await p.evaluate(i=>g2NewGoal(i.X,1),ids);await wait(500);
  await p.type('#g2T','Leaky title');
  await p.evaluate(()=>{g2Stash();closeSheet()});await wait(400);
  await p.evaluate(()=>{GB.trip=0});                       // dismissing ends the trip
  await p.evaluate(()=>{g2NewArea()});await wait(400);
  await p.evaluate(()=>{document.getElementById('g2AN').value='Fresh';g2PickDom('WORK');g2SaveArea()});
  await wait(800);
  const leak=await p.evaluate(()=>({t:(document.getElementById('g2T')||{}).value||'',
    anchor:GB.anchor}));
  ok('a dismissed draft does not leak into a new area',leak.t!=='Leaky title',leak.t);

  // D6 · a parked anchor must not allow a second one
  ids=await setup();await wait(400);
  await p.evaluate(i=>{GM.setState(G,i.A,'parked',5);gsave();render()},ids);await wait(400);
  await p.evaluate(i=>{g2NewGoal(i.X,0)},ids);await wait(500);
  await p.type('#g2T','Added while parked');
  await p.evaluate(()=>g2Save());await wait(700);
  await p.evaluate(i=>{GM.setState(G,i.A,'active',6);gsave();render()},ids);await wait(500);
  ok('waking a parked December goal does not create a second one',await p.evaluate(i=>
    G.goals.filter(g=>g.areaId===i.X&&g.anchor&&g.state==='active').length===1,ids));

  // D11 · a non-numeric target must never persist
  ok('letters typed into a number are refused, not stored as NaN',await p.evaluate(()=>{
    const a=GM.liveAreas(G)[0];g2NewGoal(a.id,0);
    document.getElementById('g2T').value='NaN test';
    g2More();document.getElementById('g2G').value='abc';g2Save();
    const g=G.goals.find(x=>x.title==='NaN test');
    return !!g&&g.target===null;}));

  ok('no JS errors',errs.length===0,errs.slice(0,3).join(' | '));
  const f=T.filter(t=>!t.c);
  T.forEach(t=>console.log((t.c?'  ok  ':'  FAIL')+'  '+t.n+(t.d?'  ['+t.d+']':'')));
  console.log((T.length-f.length)+'/'+T.length+' passed');
  await b.close();process.exit(f.length?1:0);
})();
