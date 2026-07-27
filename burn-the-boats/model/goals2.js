const puppeteer=require('/Users/jaspersmind/build-arsenal/_verify/node_modules/puppeteer-core');
const URL=process.argv[2]||'file:///Users/jaspersmind/Documents/burn-the-boats/index.html';
const OUT=process.env.SP+'/';
(async()=>{
  const b=await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:'new',args:['--allow-file-access-from-files','--no-sandbox']});
  const p=await b.newPage();
  await p.setViewport({width:440,height:956,deviceScaleFactor:2,isMobile:true,hasTouch:true});
  const errs=[];p.on('pageerror',e=>errs.push('PAGEERROR '+e.message));
  p.on('console',m=>{if(m.type()==='error')errs.push('CONSOLE '+m.text())});
  await p.evaluateOnNewDocument(()=>{const F=new Date('2026-09-14T09:20:00').getTime();
    const R=Date;class D extends R{constructor(...a){if(!a.length)super(F);else super(...a)}static now(){return F}}
    window.Date=D;try{localStorage.clear()}catch(e){}});
  await p.goto(URL,{waitUntil:'networkidle0'});await new Promise(r=>setTimeout(r,800));
  const T=[];const ok=(n,c,d)=>T.push({n,c:!!c,d:d===undefined?'':String(d)});
  const wait=(ms)=>new Promise(r=>setTimeout(r,ms));
  const audit=()=>p.evaluate(()=>{
    const bad={small:[],tap:[],over:null,nan:[]};
    if(document.documentElement.scrollWidth>window.innerWidth+1)
      bad.over=document.documentElement.scrollWidth+'>'+window.innerWidth;
    const root=document.querySelector('.app')||document.body;
    [...root.querySelectorAll('*')].forEach(el=>{
      const cs=getComputedStyle(el);
      if(cs.display==='none'||cs.visibility==='hidden')return;
      const r=el.getBoundingClientRect(); if(!r.width||!r.height)return;
      const txt=(el.textContent||'').trim();
      if(!el.children.length&&txt&&parseFloat(cs.fontSize)<11) bad.small.push(txt.slice(0,26)+' @'+cs.fontSize);
      if(/^(BUTTON|A)$/.test(el.tagName)&&r.height<44) bad.tap.push((txt||el.className).slice(0,26)+' h='+Math.round(r.height));
      if(!el.children.length&&/NaN|undefined|null/.test(txt)) bad.nan.push(txt.slice(0,40));
    });
    return bad;
  });
  const sweep=async(label)=>{
    const a=await audit();
    ok(label+' · no overflow',!a.over,a.over);
    ok(label+' · no sub-11px',a.small.length===0,a.small.slice(0,2).join(' | '));
    ok(label+' · taps >=44',a.tap.length===0,a.tap.slice(0,2).join(' | '));
    ok(label+' · no NaN/undefined on screen',a.nan.length===0,a.nan.slice(0,2).join(' | '));
  };

  // ---- 1 · the old tab is untouched, and the door is there
  await p.evaluate(()=>go('push'));await wait(600);
  ok('old Goals still renders',await p.evaluate(()=>!!document.querySelector('.sp')));
  ok('the door is visible',await p.evaluate(()=>!!document.querySelector('.g2door .btn')));
  ok('G shadowing did not break gOn()',await p.evaluate(()=>gOn()===false));
  await sweep('old tab');

  // ---- 2 · turn it on -> empty state asks for a GOAL, not a taxonomy
  await p.evaluate(()=>goalsV2(1));await wait(600);
  const emp=await p.evaluate(()=>{const e=document.querySelector('.g2empty');
    return e?{t:e.textContent.replace(/\s+/g,' ').trim(),input:!!document.getElementById('g2First')}:null});
  ok('empty state shown',!!emp);
  ok('asks for a goal in words',emp&&emp.input&&/What do you want to be true/.test(emp.t),emp&&emp.t.slice(0,52));
  ok('no 4-object legend',emp&&!/Area — never ends/.test(emp.t));
  ok('btb3 untouched by turning it on',await p.evaluate(()=>{
    const s=JSON.parse(localStorage.getItem('btb3')||'{}');return s.areas===undefined&&s.goals===undefined}));
  await sweep('empty');

  // ---- 3 · first goal, zero ceremony
  await p.type('#g2First','Three clients signed and paying');
  await p.evaluate(()=>g2SaveFirst());await wait(700);
  await p.evaluate(()=>closeSheet());await wait(400);
  const g1=await p.evaluate(()=>({goals:G.goals.length,areas:G.areas.length,wig:G.goals[0].wig,
    area:G.areas[0].name,kind:G.goals[0].kind}));
  ok('first goal saved with no area chosen',g1.goals===1&&g1.areas===1,JSON.stringify(g1));
  ok('it became the WIG automatically',g1.wig===1);
  ok('kind defaulted, never asked',g1.kind==='outcome');

  // ---- 4 · the WIG is the screen
  const wig=await p.evaluate(()=>{const e=document.querySelector('.g2wig');
    if(!e)return null;const r=e.getBoundingClientRect();
    return{t:e.textContent.replace(/\s+/g,' ').trim(),top:Math.round(r.top),h:Math.round(r.height)}});
  ok('WIG card rendered',!!wig,wig&&wig.t.slice(0,46));
  ok('capacity line sits above it',await p.evaluate(()=>{
    const c=document.querySelector('.g2cap'),w=document.querySelector('.g2wig');
    return !!c&&!!w&&c.getBoundingClientRect().top<w.getBoundingClientRect().top}));
  ok('a goal with no number shows no 0% bar',await p.evaluate(()=>
    !document.querySelector('.g2wig .g2bar')&&!!document.querySelector('.g2none')));
  await sweep('one goal');

  // ---- 5 · the import brings AREAS only
  await p.evaluate(()=>{G.meta.imported=0;importFromOld()});await wait(600);
  const imp=await p.evaluate(()=>({areas:G.areas.length,goals:G.goals.length,hz:G.horizons.length,
    names:G.areas.map(a=>a.name)}));
  ok('import added 7 areas',imp.areas===8,JSON.stringify(imp.areas));   // 1 Unsorted + 7
  ok('import added NO goals',imp.goals===1,'goals='+imp.goals);
  ok('PERSONAL was split into four',['Body','Faith','Mind','People'].every(n=>imp.names.includes(n)),imp.names.join(','));
  ok('import added the dates',imp.hz===5,'hz='+imp.hz);
  ok('import cannot run twice',await p.evaluate(()=>{const n=G.areas.length;importFromOld();return G.areas.length===n}));

  // ---- 6 · add goals until the soft cap argues, and prove it never blocks
  await p.evaluate(()=>{const a=G.areas[1].id,h=G.horizons[0].id;
    for(let i=0;i<5;i++)GM.addGoal(G,{title:'Extra goal '+(i+1),areaId:a,horizonId:h,start:0,at:i,target:10,unit:'x'});
    gsave();render();});
  await wait(500);
  const cap=await p.evaluate(()=>{const c=GM.capCheck(G,WEEK_BLOCKS);
    const before=G.goals.length;GM.addGoal(G,{title:'Added anyway',areaId:G.areas[1].id});
    const blocked=G.goals.length===before;G.goals.pop();
    return{over:c.over,live:c.live,each:c.blocksEach,blocked,warn:!!document.querySelector('.g2warn'),tight:!!document.querySelector('.g2cap.tight')}});
  ok('soft cap fires past 5 goals',cap.over,'live='+cap.live);
  ok('soft cap NEVER blocks a save',!cap.blocked);
  ok('capacity goes amber at the same point the cap argues',cap.warn&&cap.tight,'warn='+cap.warn+' tight='+cap.tight);
  await sweep('six goals');

  // ---- 7 · decreasing target renders forwards, not backwards
  await p.evaluate(()=>{GM.addGoal(G,{title:'Down to 185 lbs',areaId:G.areas.find(a=>a.name==='Body').id,
    start:212,at:198,target:185,unit:' lbs'});gsave();render()});
  await wait(400);
  const dec=await p.evaluate(()=>{const g=G.goals.find(x=>/185/.test(x.title));
    return{p:Math.round(GM.progress(g)*100),dir:GM.direction(g)}});
  ok('212->198->185 reads 52%, not 107%',dec.p===52&&dec.dir==='down',dec.p+'% '+dec.dir);

  // ---- 8 · the goal sheet: title+area is enough, nothing blocks
  await p.evaluate(()=>g2New());await wait(500);
  await sweep('add sheet');
  await p.type('#g2T','A goal with only a title');
  await p.evaluate(()=>g2Save());await wait(600);
  ok('title + preselected area saved',await p.evaluate(()=>!!G.goals.find(g=>g.title==='A goal with only a title')));

  // ---- 9 · easing leaves a trail, hardening is silent
  const trail=await p.evaluate(()=>{
    const g=G.goals.find(x=>/185/.test(x.title));const n0=g.history.length;
    GM.editGoal(G,g.id,{target:180},dayNo());               // harder (down = lower)
    const afterHard=g.history.length;
    GM.editGoal(G,g.id,{target:195},dayNo());               // easier
    return{n0,afterHard,afterEase:g.history.length,at:g.at};
  });
  ok('hardening leaves no trail',trail.afterHard===trail.n0,`${trail.n0}->${trail.afterHard}`);
  ok('easing leaves a trail',trail.afterEase===trail.n0+1);
  ok('the counter never zeroed',trail.at===198);

  // ---- 10 · manage: reorder, and deleting a date keeps goals
  await p.evaluate(()=>{closeSheet();g2Manage()});await wait(500);
  await sweep('manage sheet');
  const mg=await p.evaluate(()=>{
    const ids=GM.liveAreas(G).map(a=>a.id);g2Move(ids[1],-1);
    const after=GM.liveAreas(G).map(a=>a.id);
    const ranks=new Set(GM.liveAreas(G).map(a=>a.rank));
    const gTotal=G.goals.length,h=GM.liveHorizons(G)[0];
    const on=G.goals.filter(x=>x.horizonId===h.id).length;
    g2DropDate(h.id);
    return{moved:after[0]===ids[1],dupRanks:ranks.size!==after.length,
      kept:G.goals.length===gTotal,on,dangling:G.goals.some(x=>x.horizonId===h.id)};
  });
  ok('reorder moves an area',mg.moved);
  ok('reorder produces no duplicate ranks',!mg.dupRanks);
  ok('deleting a date keeps every goal',mg.kept,'had '+mg.on+' on it');
  ok('no goal left pointing at the dead date',!mg.dangling);

  // ---- 11 · revert puts the old screen back, losing nothing
  await p.evaluate(()=>closeSheet());await wait(300);
  const beforeRevert=await p.evaluate(()=>G.goals.length);
  await p.evaluate(()=>goalsV2(0));await wait(600);
  ok('revert restores the old Goals',await p.evaluate(()=>!!document.querySelector('.sp')));
  ok('revert kept every goal',await p.evaluate(()=>G.goals.length)===beforeRevert,'n='+beforeRevert);
  await p.evaluate(()=>goalsV2(1));await wait(600);
  ok('turning it back on restores the new one',await p.evaluate(()=>!!document.querySelector('.g2wig')));

  // ---- 12 · the other three tabs still work
  for(const t of ['today','bank','record']){
    await p.evaluate(v=>go(v),t);await wait(500);
    ok(t+' tab still renders',await p.evaluate(v=>{
      const m={today:'#nextUp',bank:'#bankBody',record:'#recBody'};
      const e=document.querySelector(m[v]);return !!e&&e.innerHTML.length>50},t));
  }
  await p.evaluate(()=>go('push'));await wait(500);
  await p.screenshot({path:OUT+'g2-final.png'});

  ok('no JS errors anywhere',errs.length===0,errs.slice(0,3).join(' | '));

  const fail=T.filter(t=>!t.c);
  T.forEach(t=>console.log((t.c?'  ok  ':'  FAIL')+'  '+t.n+(t.d?'   ['+t.d+']':'')));
  console.log('\n'+(T.length-fail.length)+'/'+T.length+' passed');
  await b.close();process.exit(fail.length?1:0);
})();
