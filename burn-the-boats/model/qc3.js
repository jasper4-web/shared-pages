const puppeteer=require('/Users/jaspersmind/build-arsenal/_verify/node_modules/puppeteer-core');
const URL=process.argv[2]||'file:///Users/jaspersmind/Documents/burn-the-boats/index.html';
const wait=ms=>new Promise(r=>setTimeout(r,ms));
const T=[];const ok=(n,c,d)=>T.push({n,c:!!c,d:d===undefined?'':String(d)});
(async()=>{
  const b=await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:'new',args:['--allow-file-access-from-files','--no-sandbox']});
  const mk=async(clock)=>{const p=await b.newPage();
    await p.setViewport({width:440,height:956,deviceScaleFactor:2,isMobile:true,hasTouch:true});
    p.on('pageerror',e=>ERR.push(e.message));
    p.on('console',m=>{if(m.type()==='error')ERR.push('CONSOLE '+m.text())});
    await p.evaluateOnNewDocument(c=>{const F=new Date(c).getTime();const R=Date;
      class D extends R{constructor(...a){if(!a.length)super(F);else super(...a)}static now(){return F}}
      window.Date=D;try{if(!sessionStorage.getItem('_o')){localStorage.clear();sessionStorage.setItem('_o','1')}}catch(e){}},clock);
    await p.goto(URL,{waitUntil:'networkidle0'});await wait(900);return p};
  const ERR=[];

  // ═══ 3 · SCORING INTEGRITY — the one I most suspect ═══════════════════════
  let p=await mk('2026-09-16T21:00:00');
  const sc=await p.evaluate(()=>{
    G=GM.empty();
    const w=GM.addArea(G,{name:'SANO',domain:'WORK'});
    const m=GM.addArea(G,{name:'Spanish',domain:'MIND'});
    const g=GM.addGoal(G,{title:'A goal',areaId:w.id,anchor:1});GM.setAnchor(G,g.id,1);
    const wk=weekKeyNow();
    GM.commit(G,{goalId:g.id,weekKey:wk,day:2,block:'b1'});
    /* a day already lived and closed — yesterday, not today */
    const y='2026-09-15';
    S.days[y]={done:{b1:true},miss:{},wait:{},produced:{},focus:{},prio:[],wins:{},off:0,credited:{},
      shape:stampOf(WEEKDAY)};
    GM.commit(G,{goalId:g.id,weekKey:wk,day:1,block:'b1'});
    save();gsave();stampToday();
    const before=domainProgress();
    /* now move that goal to a MIND area — a thing he will absolutely do */
    GM.editGoal(G,g.id,{areaId:m.id},5);gsave();
    const after=domainProgress();
    /* the invariant is that a day ALREADY LIVED keeps the domains it credited.
       Today may legitimately re-point — it hasn't happened yet. */
    return{frozen:JSON.stringify(S.days[y].dom),
      pastMIND:after.MIND,beforeMIND:before.MIND};});
  ok('a day already lived keeps the domain it credited',sc.frozen==='{"b1":["WORK"]}',sc.frozen);
  ok('...so moving the goal cannot back-date credit to the new area',
     Math.abs(sc.beforeMIND-sc.pastMIND)<1e-9,`MIND ${sc.beforeMIND}->${sc.pastMIND}`);

  const sc2=await p.evaluate(()=>{
    const y='2026-09-15',before=JSON.stringify(S.days[y].dom);
    G.commits=[];gsave();domainProgress();
    return{before,after:JSON.stringify(S.days[y].dom)};});
  ok('deleting a commitment does not erase credit already earned',sc2.before===sc2.after,
     sc2.before+' -> '+sc2.after);
  await p.close();

  // ═══ 2 · backfillAnchors edge cases ══════════════════════════════════════
  p=await mk('2026-09-16T09:20:00');
  const bf=await p.evaluate(()=>{
    const r=[];const t=(name,raw)=>{try{const o=backfillAnchors(Object.assign(GM.empty(),raw));
      r.push([name,'ok',(o.goals||[]).filter(g=>g.anchor).length]);}catch(e){r.push([name,'THREW',e.message])}};
    t('no meta',{areas:[{id:'a',name:'X',domain:'WORK',rank:1,archived:0}],
      goals:[{id:'g',areaId:'a',title:'t',state:'active',confidence:[],history:[]}],horizons:[],commits:[]});
    t('no areas key',{goals:[{id:'g',areaId:'a',title:'t',state:'active',confidence:[],history:[]}],meta:{}});
    t('no goals key',{areas:[{id:'a',name:'X',domain:'WORK',rank:1,archived:0}],meta:{}});
    t('all parked',{areas:[{id:'a',name:'X',domain:'WORK',rank:1,archived:0}],meta:{},horizons:[],commits:[],
      goals:[{id:'g',areaId:'a',title:'t',state:'parked',confidence:[],history:[]}]});
    t('goal with dead areaId',{areas:[{id:'a',name:'X',domain:'WORK',rank:1,archived:0}],meta:{},horizons:[],commits:[],
      goals:[{id:'g',areaId:'ZZZ',title:'t',state:'active',confidence:[],history:[]}]});
    t('empty area + full area',{areas:[{id:'a',name:'X',domain:'WORK',rank:1,archived:0},
      {id:'b',name:'Y',domain:'MIND',rank:2,archived:0}],meta:{},horizons:[],commits:[],
      goals:[{id:'g',areaId:'b',title:'t',state:'active',confidence:[],history:[]}]});
    t('null goals',{areas:[],goals:null,meta:{}});
    return r;});
  bf.forEach(([n,st,v])=>ok('backfill · '+n,st==='ok',st==='ok'?('anchors='+v):v));
  ok('a parked-only area gets no anchor',bf.find(x=>x[0]==='all parked')[2]===0);
  ok('an orphaned goal is not anchored into nothing',bf.find(x=>x[0]==='goal with dead areaId')[2]===0);

  // ═══ 4 · the economy ═════════════════════════════════════════════════════
  const ec=await p.evaluate(()=>{
    G=GM.empty();S.xp=0;S.days={};save();gsave();
    const d=day();const b=WEEKDAY.find(x=>x.id==='b1');
    run={b,total:5400,broken:false,left:0,endAt:Date.now(),passes:4};
    finishRun();const first=S.xp;
    run={b,total:5400,broken:false,left:0,endAt:Date.now(),passes:4};
    finishRun();const second=S.xp;
    return{first,second,credited:Object.keys(day().credited).length};});
  ok('a focus run cannot be paid twice',ec.first===ec.second,`${ec.first} then ${ec.second}`);
  ok('...and it IS recorded in credited',ec.credited>0,'keys='+ec.credited);
  const bc=await p.evaluate(()=>{
    S.xp=0;S.boostLog=[];save();
    for(let i=0;i<30;i++)logBoost('network');
    return{xp:S.xp,priv:S.privileges,day:boostXpToday()};});
  ok('30 boost taps cannot exceed the daily cap',bc.day<=250,'day='+bc.day);
  ok('...and grant at most one token',bc.priv<=1,'priv='+bc.priv);

  // ═══ 6 · worst-case renders ══════════════════════════════════════════════
  const render=async(name,setup)=>{
    await p.evaluate(setup);await wait(600);
    await p.evaluate(()=>go('push'));await wait(700);
    const r=await p.evaluate(()=>{
      const el=document.getElementById('pushBody');
      return{len:el.innerHTML.length,
        bad:/undefined|NaN|\[object|&lt;script/.test(el.textContent),
        over:document.documentElement.scrollWidth>window.innerWidth+1,
        raw:document.querySelector('#pushBody script')?1:0};});
    ok(name+' renders',r.len>20&&!r.bad,r.bad?'has undefined/NaN':(r.over?'OVERFLOW':'ok'));
    ok(name+' · no injected script',!r.raw);
    ok(name+' · no overflow',!r.over);
  };
  await render('zero areas',()=>{G=GM.empty();gsave()});
  await render('area, no goals',()=>{G=GM.empty();GM.addArea(G,{name:'X',domain:'WORK'});gsave()});
  await render('40 goals',()=>{G=GM.empty();const a=GM.addArea(G,{name:'X',domain:'WORK'});
    for(let i=0;i<40;i++)GM.addGoal(G,{title:'Goal '+(i+1),areaId:a.id});gsave()});
  await render('60-char area name',()=>{G=GM.empty();
    GM.addArea(G,{name:'A very long area name that somebody might genuinely type in',domain:'WORK'});gsave()});
  await render('script tag in a title',()=>{G=GM.empty();const a=GM.addArea(G,{name:'X',domain:'WORK'});
    const t=String.fromCharCode(60)+'script'+String.fromCharCode(62)+'alert(1)'+
      String.fromCharCode(60)+'/script'+String.fromCharCode(62)+' and "quotes" & apostrophes';
    GM.addGoal(G,{title:t,areaId:a.id});gsave()});
  await render('everything parked',()=>{G=GM.empty();const a=GM.addArea(G,{name:'X',domain:'WORK'});
    const g=GM.addGoal(G,{title:'P',areaId:a.id});GM.setState(G,g.id,'parked',1);gsave()});

  // ═══ 7 · missing data must not throw ═════════════════════════════════════
  const th=await p.evaluate(()=>{
    const r=[];const t=(n,f)=>{try{f();r.push([n,'ok'])}catch(e){r.push([n,'THREW '+e.message])}};
    t('goals undefined',()=>{G={meta:{},areas:[],horizons:[],commits:[]};renderGoals2()});
    t('areas undefined',()=>{G={meta:{},goals:[],horizons:[],commits:[]};renderGoals2()});
    t('commits undefined',()=>{G={meta:{},goals:[],areas:[],horizons:[]};g2Tiers();goalStats({id:'x'})});
    t('S.days empty',()=>{S.days={};goalStats({id:'x'});domainProgress();recount()});
    t('blockDomains on a bad date',()=>{blockDomains('not-a-date',WEEKDAY[3])});
    t('shapeFor unknown day',()=>{shapeFor('2020-01-01')});
    t('capCheck no week',()=>{GM.capCheck(G,20)});
    t('g2Capacity with nothing',()=>{G=GM.empty();g2Capacity()});
    return r;});
  th.forEach(([n,st])=>ok('no throw · '+n,st==='ok',st));

  // ═══ 5 · cross-store ═════════════════════════════════════════════════════
  await p.evaluate(()=>{localStorage.clear();G=GM.empty();
    const a=GM.addArea(G,{name:'X',domain:'WORK'});GM.addGoal(G,{title:'G',areaId:a.id});gsave();});
  ok('goal data never lands in btb3',await p.evaluate(()=>{
    const s=JSON.parse(localStorage.getItem('btb3')||'{}');
    return s.goals===undefined&&s.areas===undefined&&s.commits===undefined;}));
  ok('btb4 survives a reload',await (async()=>{await p.reload({waitUntil:'networkidle0'});await wait(900);
    return p.evaluate(()=>G.goals.length===1&&G.areas.length===1)})());
  await p.close();

  // ═══ 6b · Sabbath and virgin install ═════════════════════════════════════
  p=await mk('2026-11-01T10:00:00');   // a Sunday
  ok('Sunday still shows the Sabbath screen',await p.evaluate(()=>
    document.getElementById('sabbath').classList.contains('on')));
  ok('...and it does not say ROUND LOST off a phantom denominator',await p.evaluate(()=>
    !/ROUND LOST/.test(document.getElementById('sabRead').textContent)));
  await p.close();
  p=await mk('2026-07-27T09:20:00');   // day 1, virgin
  for(const t of ['today','push','bank','record']){
    await p.evaluate(v=>go(v),t);await wait(700);
    ok('virgin · '+t+' renders',await p.evaluate(v=>{
      const m={today:'#nextUp',push:'#pushBody',bank:'#bankBody',record:'#recBody'};
      const e=document.querySelector(m[v]);return !!e&&e.innerHTML.length>40;},t));}
  await p.close();

  ok('NO JS ERRORS ANYWHERE',ERR.length===0,ERR.slice(0,3).join(' | '));
  const f=T.filter(t=>!t.c);
  T.forEach(t=>console.log((t.c?'  ok  ':'  FAIL')+'  '+t.n+(t.d?'  ['+t.d+']':'')));
  console.log('\n'+(T.length-f.length)+'/'+T.length+' passed');
  await b.close();process.exit(f.length?1:0);
})();
