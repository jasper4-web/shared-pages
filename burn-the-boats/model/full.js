const puppeteer=require('/Users/jaspersmind/build-arsenal/_verify/node_modules/puppeteer-core');
const URL=process.argv[2]||'file:///Users/jaspersmind/Documents/burn-the-boats/index.html';
const OUT=process.env.SP+'/';
const T=[];const ok=(n,c,d)=>T.push({n,c:!!c,d:d===undefined?'':String(d)});
const wait=ms=>new Promise(r=>setTimeout(r,ms));
(async()=>{
  const b=await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:'new',args:['--allow-file-access-from-files','--no-sandbox']});
  const errs=[];
  const page=async(clock)=>{
    const p=await b.newPage();
    await p.setViewport({width:440,height:956,deviceScaleFactor:2,isMobile:true,hasTouch:true});
    p.on('pageerror',e=>errs.push('PAGEERROR '+e.message));
    p.on('console',m=>{if(m.type()==='error')errs.push('CONSOLE '+m.text())});
    await p.evaluateOnNewDocument(c=>{const F=new Date(c).getTime();
      const R=Date;class D extends R{constructor(...a){if(!a.length)super(F);else super(...a)}static now(){return F}}
      window.Date=D;},clock);
    await p.goto(URL,{waitUntil:'networkidle0'});await wait(800);
    return p;
  };
  const audit=p=>p.evaluate(()=>{
    const bad={small:[],tap:[],over:null,nan:[]};
    if(document.documentElement.scrollWidth>window.innerWidth+1)
      bad.over=document.documentElement.scrollWidth+'>'+window.innerWidth;
    const root=document.querySelector('.app')||document.body;
    [...root.querySelectorAll('*')].forEach(el=>{
      const cs=getComputedStyle(el);
      if(cs.display==='none'||cs.visibility==='hidden')return;
      const r=el.getBoundingClientRect();if(!r.width||!r.height)return;
      const txt=(el.textContent||'').trim();
      if(!el.children.length&&txt&&parseFloat(cs.fontSize)<11)bad.small.push(txt.slice(0,24)+'@'+cs.fontSize);
      if(/^(BUTTON|A)$/.test(el.tagName)&&r.height<44)bad.tap.push((txt||el.className).slice(0,24)+' h='+Math.round(r.height));
      if(!el.children.length&&/NaN|undefined|\[object/.test(txt))bad.nan.push(txt.slice(0,40));
    });
    return bad;});
  const sweep=async(p,label)=>{const a=await audit(p);
    ok(label+' · no overflow',!a.over,a.over);
    ok(label+' · no sub-11px',a.small.length===0,a.small.slice(0,2).join(' | '));
    ok(label+' · taps >=44',a.tap.length===0,a.tap.slice(0,2).join(' | '));
    ok(label+' · no NaN/undefined',a.nan.length===0,a.nan.slice(0,2).join(' | '));};

  // ============ A · Record page fixes (Monday, day 1, nothing due) ==========
  let p=await page('2026-07-27T09:20:00');
  await p.evaluate(()=>{localStorage.clear();location.reload()});await wait(1200);
  await p.evaluate(()=>go('record'));await wait(600);
  const rec=await p.evaluate(()=>{
    const b=document.querySelector('#recBody .ws-h b');
    const labels=[...document.querySelectorAll('#recBody .stat > span:first-child')].map(s=>s.childNodes[0].textContent.trim());
    return{v:b.textContent.trim(),col:getComputedStyle(b).color,labels,
      sub:document.querySelector('#recBody .ws-h span').textContent.trim(),
      foot:document.querySelector('#recBody .ws-l').textContent.trim()};});
  ok('Record shows an honest number, not an invented one',/^(—|\d+%)$/.test(rec.v),rec.v);
  ok('...but no blood-red verdict from a 3-hour sample',!/255, 77, 94/.test(rec.col),rec.col);
  ok('...and it says the week is too young to judge',/TOO EARLY TO CALL|NOTHING DUE YET/.test(rec.foot),rec.foot);
  ok('quota board shows real labels, not ids',
    !rec.labels.some(l=>['bible','gym','present','cooked','convo','bed'].includes(l)),rec.labels.join(' | '));
  ok('...labels are the real names',rec.labels.includes('Bible · text Kells')&&rec.labels.includes('In bed on time'),rec.labels[0]);
  await sweep(p,'record');
  await p.close();

  // ============ B · the week engine ========================================
  p=await page('2026-09-16T09:20:00');   // a Wednesday
  await p.evaluate(()=>{
    localStorage.clear();
    G=GM.empty();
    const A={};[['SANO','WORK'],['Trading','CAPITAL'],['Body','BODY']].forEach(([n,d])=>A[n]=GM.addArea(G,{name:n,domain:d}));
    const h=GM.addHorizon(G,{label:'End of Oct',date:'2026-10-30'});
    GM.addGoal(G,{title:'Three clients signed and paying',areaId:A['SANO'].id,horizonId:h.id,start:0,at:1,target:3,unit:' clients',wig:1});
    GM.addGoal(G,{title:'Three live funded accounts',areaId:A['Trading'].id,horizonId:h.id,start:0,at:0,target:3});
    GM.addGoal(G,{title:'Down to 185 lbs',areaId:A['Body'].id,horizonId:h.id,start:212,at:198,target:185,unit:' lbs'});
    gsave();G.meta.view='week';go('push');
  });await wait(900);await p.evaluate(()=>render());await wait(400);
  ok('THE WEEK renders 20 slots',await p.evaluate(()=>document.querySelectorAll('.g2slot').length)===20,
     await p.evaluate(()=>document.querySelectorAll('.g2slot').length));
  ok('five day headers',await p.evaluate(()=>document.querySelectorAll('.g2day').length)===5);
  ok('today is marked',await p.evaluate(()=>!!document.querySelector('.g2day.now')));
  await sweep(p,'the week (empty)');
  // commit some blocks
  await p.evaluate(()=>{const wk=weekKeyNow(),gs=GM.liveGoals(G);
    setCommit(wk,0,'b1',gs[0].id);setCommit(wk,0,'b2',gs[0].id);
    setCommit(wk,1,'b1',gs[1].id);setCommit(wk,2,'b1',gs[0].id);});
  await wait(600);
  const capw=await p.evaluate(()=>{const c=GM.capacity(G,weekKeyNow(),WEEK_BLOCKS);
    return{committed:c.committed,free:c.free,orphan:c.orphanAreas.length,
      shown:document.querySelector('.g2cap b').textContent}});
  ok('capacity counts real commitments',capw.committed===4&&capw.shown==='4',JSON.stringify(capw));
  ok('free blocks correct',capw.free===16);
  ok('orphan areas flagged',capw.orphan===1,'orphan='+capw.orphan);
  ok('one slot cannot hold two goals',await p.evaluate(()=>{
    const wk=weekKeyNow();const gs=GM.liveGoals(G);setCommit(wk,0,'b1',gs[2].id);
    return GM.commitsOfWeek(G,wk).filter(c=>c.day===0&&c.block==='b1').length===1}));
  ok('clearing a slot removes the commit',await p.evaluate(()=>{
    const wk=weekKeyNow(),n=GM.commitsOfWeek(G,wk).length;setCommit(wk,2,'b1',null);
    return GM.commitsOfWeek(G,wk).length===n-1}));
  await sweep(p,'the week (committed)');

  // done-state is READ from the day records, never re-entered
  ok('done is derived from the day record',await p.evaluate(()=>{
    const wk=weekKeyNow(),d=day(dateOfSlot(wk,0));d.done['b1']=true;save();
    syncCommits(wk);return commitFor(wk,0,'b1').done===1}));

  // ============ C · the daily surface ======================================
  await p.evaluate(()=>{const wk=weekKeyNow(),off=(new Date().getDay()+6)%7;
    setCommit(wk,off,'b1',GM.liveGoals(G)[0].id);      // today's slot, cleared by the test above
    G.meta.view='area';gsave();render();go('today')});await wait(900);
  const strip=await p.evaluate(()=>{const e=document.querySelector('.nu-goal');
    return e?e.textContent.replace(/\s+/g,' ').trim():null});
  ok('Today block card reads from the new model',strip&&/THIS BLOCK IS FOR/.test(strip),strip&&strip.slice(0,54));
  ok('...and an uncommitted block offers to pick one',await p.evaluate(()=>{
    const wk=weekKeyNow(),off=(new Date().getDay()+6)%7;
    G.commits=G.commits.filter(c=>!(c.weekKey===wk&&c.day===off));gsave();render();
    const e=document.querySelector('.nu-goal');
    return !!e&&/NOTHING ON THIS BLOCK/.test(e.textContent)&&!!document.querySelector('.nu-gb')}));
  await sweep(p,'today with the strip');
  await p.close();

  // ============ D · the self-closing week ==================================
  p=await page('2026-09-21T09:20:00');   // Monday of the NEXT week
  await p.evaluate(()=>{
    localStorage.clear();
    G=GM.empty();
    const a=GM.addArea(G,{name:'SANO',domain:'WORK'});
    const g1=GM.addGoal(G,{title:'Three clients',areaId:a.id,wig:1});
    const g2=GM.addGoal(G,{title:'The process written down',areaId:a.id});
    const last='2026-09-14';                       // the week just gone
    GM.commit(G,{goalId:g1.id,weekKey:last,day:0,block:'b1'});
    GM.commit(G,{goalId:g1.id,weekKey:last,day:1,block:'b1'});
    GM.commit(G,{goalId:g2.id,weekKey:last,day:2,block:'b1'});
    GM.commit(G,{goalId:g2.id,weekKey:last,day:3,block:'b1'});
    const d=day('2026-09-14');d.done['b1']=true;save();     // one of them got done
    gsave();render();go('push');
  });await wait(900);
  const closed=await p.evaluate(()=>{const wk=weekKeyNow();
    return{sum:G.weeks['2026-09-14'],carried:GM.commitsOfWeek(G,wk).length,
      banner:!!document.querySelector('.g2close'),
      badge:!!document.querySelector('.tabs button[data-t="push"] .badge'),
      badgeRed:!!document.querySelector('.tabs button[data-t="push"] .badge.red')};});
  ok('the previous week closed by itself',!!closed.sum,JSON.stringify(closed.sum&&closed.sum.pct));
  ok('...it counted 1 of 4',closed.sum&&closed.sum.done===1&&closed.sum.committed===4,
     closed.sum&&`${closed.sum.done}/${closed.sum.committed}`);
  ok('...unfinished work carried into this week',closed.carried===3,'carried='+closed.carried);
  ok('...and it offers the review rather than demanding it',closed.banner);
  ok('...and the Goals tab badges it so he finds out',closed.badge);
  ok('...the badge is not red — a closed week is not bad news',!closed.badgeRed);
  ok('repeat misses detected',closed.sum&&closed.sum.repeatMisses.length===1,
     closed.sum&&JSON.stringify(closed.sum.repeatMisses.length));
  await sweep(p,'goals with close banner');

  // the review, and correcting it
  await p.evaluate(()=>g2Review());await wait(600);
  await sweep(p,'the review');
  ok('review lists what happened',await p.evaluate(()=>document.querySelectorAll('.g2rv').length)===4);
  ok('review does NOT ask him to re-tick from scratch',await p.evaluate(()=>
    document.querySelectorAll('.g2rv.on').length===1));
  const flip=await p.evaluate(()=>{const c=G.commits.find(x=>x.weekKey==='2026-09-14'&&!x.done);
    g2Flip(c.id);const d=day(dateOfSlot('2026-09-14',c.day));
    return{done:G.commits.find(x=>x.id===c.id).done,dayRec:!!d.done[c.block],pct:G.weeks['2026-09-14'].pct}});
  ok('correcting the review writes back to the day record',flip.done===1&&flip.dayRec,JSON.stringify(flip));
  ok('...and re-scores the week',flip.pct===50,'pct='+flip.pct);
  ok('...and survives the next sync',await p.evaluate(()=>{
    syncCommits('2026-09-14');const c=G.commits.find(x=>x.weekKey==='2026-09-14'&&x.day===0&&x.block==='b1');
    return G.commits.filter(x=>x.weekKey==='2026-09-14'&&x.done).length===2}));
  // confidence in the review
  ok('confidence is 3 states on near goals only',await p.evaluate(()=>{
    const rows=document.querySelectorAll('.g2cf');
    return rows.length>0&&rows.length<=5&&rows[0].querySelectorAll('.chip').length===3}));
  await p.evaluate(()=>{const g=GM.liveGoals(G)[0];g2Conf(g.id,2)});await wait(500);
  ok('confidence records',await p.evaluate(()=>GM.liveGoals(G)[0].confidence.length>0));
  await p.evaluate(()=>{g2Seen('close');closeSheet()});await wait(500);
  ok('marking it seen dismisses the banner',await p.evaluate(()=>!document.querySelector('.g2close')));
  await p.close();

  // ============ E · migration =============================================
  p=await page('2026-11-02T09:20:00');
  await p.evaluate(()=>{
    localStorage.clear();G=GM.empty();
    const a=GM.addArea(G,{name:'SANO',domain:'WORK'});
    const past=GM.addHorizon(G,{label:'End of Oct',date:'2026-10-30'});
    GM.addHorizon(G,{label:'Dec 25',date:'2026-12-25'});
    const g=GM.addGoal(G,{title:'Ten wholesale accounts',areaId:a.id,horizonId:past.id,start:0,at:3,target:10,wig:1});
    GM.setConf(G,g.id,3,1);GM.setConf(G,g.id,2,2);GM.setConf(G,g.id,1,3);
    GM.addGoal(G,{title:'A healthy one',areaId:a.id,horizonId:GM.liveHorizons(G)[1].id});
    gsave();render();go('push');});
  await wait(900);
  ok('a stalled goal raises the migration banner',await p.evaluate(()=>!!document.querySelector('.g2mig')));
  ok('a healthy goal does not',await p.evaluate(()=>g2NeedsDecision().length===1));
  await sweep(p,'migration banner');
  await p.evaluate(()=>g2Migrate());await wait(600);
  await sweep(p,'migration sheet');
  ok('migration offers exactly four choices',await p.evaluate(()=>document.querySelectorAll('.g2mg .btn').length)===4);
  const carried=await p.evaluate(()=>{const g=GM.liveGoals(G).find(x=>/wholesale/.test(x.title));
    g2Mig(g.id,'carry');const h=GM.horizonById(G,g.horizonId);
    return{label:h&&h.label,trail:g.history.filter(x=>x.t==='date').length,conf:g.confidence.length,
      still:GM.goalOf(G,g.id).state}});
  ok('carry moves it to the next date',carried.label==='Dec 25',carried.label);
  ok('...and leaves a trail',carried.trail===1);
  ok('...and resets confidence for a clean run',carried.conf===0);
  ok('...and never deletes the goal',carried.still==='active');
  ok('the banner clears once decided',await p.evaluate(()=>g2NeedsDecision().length===0));
  const parked=await p.evaluate(()=>{
    const g=GM.liveGoals(G)[0];const n=G.goals.length;GM.setState(G,g.id,'parked',dayNo());
    return{goals:G.goals.length===n,live:GM.liveGoals(G).length}});
  ok('parking keeps the record',parked.goals);
  await p.close();

  // ============ F · the return path =======================================
  p=await page('2026-10-05T09:20:00');
  await p.evaluate(()=>{
    localStorage.clear();G=GM.empty();
    const a=GM.addArea(G,{name:'SANO',domain:'WORK'});
    GM.addGoal(G,{title:'Three clients signed and paying',areaId:a.id,wig:1});
    G.meta.lastSeen='2026-09-27';G.xp=0;gsave();render();go('push');});
  await wait(900);
  const ret=await p.evaluate(()=>{const e=document.querySelector('.g2ret');
    return e?{t:e.textContent.replace(/\s+/g,' ').trim(),red:/255, 77, 94/.test(getComputedStyle(e).borderColor)}:null});
  ok('a gap shows the return card',!!ret,ret&&ret.t.slice(0,48));
  ok('...it never counts the days missed',ret&&!/8 days|missed|behind|lost \d/i.test(ret.t),ret&&ret.t.slice(0,70));
  ok('...it is not red',ret&&!ret.red);
  ok('...it restates what is still true',ret&&/still standing|still first/.test(ret.t));
  ok('...and it is the ONLY banner on a return',await p.evaluate(()=>
    !document.querySelector('.g2close')&&!document.querySelector('.g2mig')));
  ok('a number can be ADDED to a goal that had none',await p.evaluate(()=>{
    const a=GM.liveAreas(G)[0]||GM.addArea(G,{name:'T',domain:'WORK'});
    const g=GM.addGoal(G,{title:'No numbers at first',areaId:a.id});
    GM.editGoal(G,g.id,{start:0,at:1,target:3},1);
    return GM.progress(g)!==null&&g.target===3&&Math.round(GM.progress(g)*100)===33;}));
  ok('...and the first number is not logged as an ease',await p.evaluate(()=>{
    const g=G.goals[G.goals.length-1];return g.history.filter(h=>h.t==='target').length===0}));
  /* areas-with-no-goals is now only reachable by adding areas by hand (the import
     always brings at least one goal), so test THAT path — it is the one that
     produced the invisible-import bug. */
  ok('areas with no goals yet are VISIBLE on the empty screen',await p.evaluate(()=>{
    const save=JSON.stringify(G);
    G=GM.empty();
    ['SANO','Trading','Body'].forEach(n=>GM.addArea(G,{name:n,domain:'WORK'}));
    GM.addHorizon(G,{label:'Dec 25',date:'2026-12-25'});
    render();
    const ok=!!document.querySelector('.g2empty')&&!!document.querySelector('.g2ready')&&
      document.querySelectorAll('.g2ready .rc').length===4;
    G=JSON.parse(save);gsave();render();return ok;}));
  ok('the real import brings his December targets over',await p.evaluate(()=>{
    const save=JSON.stringify(G);
    G=GM.empty();importFromOld();
    const t=G.goals.map(g=>g.title);
    const ok=G.goals.length>=7&&t.some(x=>/SANO clients/i.test(x))&&
      t.some(x=>/185/.test(x))&&t.some(x=>/kitchen/i.test(x));
    G=JSON.parse(save);gsave();render();return ok;}));
  ok('dates are named by intent, not by their digits',await p.evaluate(()=>
    monthEndLabel('2026-08-31')==='End of August'&&monthEndLabel('2026-11-02')==='November 2'));
  ok('a passed date never reads "0 days"',await p.evaluate(()=>{
    const h={date:'2020-01-01'};return hzWhen(h)==='PASSED'&&hzWhen({date:'2030-01-01'}).endsWith('days')}));
  await sweep(p,'return card');
  await p.evaluate(()=>g2Seen('ret'));await wait(500);
  ok('picking it up dismisses it',await p.evaluate(()=>!document.querySelector('.g2ret')));
  ok('a short gap shows nothing',await p.evaluate(()=>{
    G.meta.awayFrom=null;G.meta.lastSeen=today();gsave();render();
    return !document.querySelector('.g2ret')}));
  await p.close();

  // ============ G · by date, and the whole app still works =================
  p=await page('2026-09-16T09:20:00');
  await p.evaluate(()=>{
    localStorage.clear();G=GM.empty();
    const a=GM.addArea(G,{name:'SANO',domain:'WORK'});
    const h1=GM.addHorizon(G,{label:'End of Sep',date:'2026-09-30'});
    const h2=GM.addHorizon(G,{label:'Dec 25',date:'2026-12-25'});
    GM.addGoal(G,{title:'Dated one',areaId:a.id,horizonId:h1.id,wig:1});
    GM.addGoal(G,{title:'Later one',areaId:a.id,horizonId:h2.id});
    GM.addGoal(G,{title:'Undated one',areaId:a.id});
    gsave();G.meta.view='date';render();go('push');});
  await wait(700);
  const bd=await p.evaluate(()=>{const rows=[...document.querySelectorAll('.g2row .gt')].map(e=>e.textContent);
    return{rows,groups:document.querySelectorAll('.g2area').length}});
  ok('by-date groups by horizon plus an undated bucket',bd.groups===3,'groups='+bd.groups);
  ok('by-date shows every goal exactly once',
     bd.rows.length===3&&new Set(bd.rows).size===3,bd.rows.join(' | '));
  await sweep(p,'by date');
  for(const v of ['area','week']){await p.evaluate(x=>{G.meta.view=x;gsave();render()},v);await wait(400);
    await sweep(p,'view:'+v);}
  for(const t of ['today','bank','record']){await p.evaluate(v=>go(v),t);await wait(500);
    ok(t+' still renders with v2 on',await p.evaluate(v=>{
      const m={today:'#nextUp',bank:'#bankBody',record:'#recBody'};
      return document.querySelector(m[v]).innerHTML.length>50},t));
    await sweep(p,t+' (v2 on)');}
  ok('btb3 was never given goal data',await p.evaluate(()=>{
    const s=JSON.parse(localStorage.getItem('btb3')||'{}');
    return s.goals===undefined&&s.areas===undefined&&s.commits===undefined&&s.horizons===undefined}));
  await sweep(p,'goals tab, final');
  await p.screenshot({path:OUT+'full-final.png'});
  await p.close();

  ok('no JS errors across every path',errs.length===0,errs.slice(0,3).join(' | '));
  const fail=T.filter(t=>!t.c);
  T.forEach(t=>console.log((t.c?'  ok  ':'  FAIL')+'  '+t.n+(t.d?'   ['+t.d+']':'')));
  console.log('\n'+(T.length-fail.length)+'/'+T.length+' passed');
  await b.close();process.exit(fail.length?1:0);
})();
