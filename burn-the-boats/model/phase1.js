const puppeteer=require('/Users/jaspersmind/build-arsenal/_verify/node_modules/puppeteer-core');
const URL=process.argv[2]||'file:///Users/jaspersmind/Documents/burn-the-boats/index.html';
const wait=ms=>new Promise(r=>setTimeout(r,ms));
const T=[];const ok=(n,c,d)=>T.push({n,c:!!c,d:d===undefined?'':String(d)});
(async()=>{
  const b=await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:'new',args:['--allow-file-access-from-files','--no-sandbox']});
  const p=await b.newPage();await p.setViewport({width:440,height:956,deviceScaleFactor:2,isMobile:true,hasTouch:true});
  const errs=[];p.on('pageerror',e=>errs.push(e.message));
  await p.evaluateOnNewDocument(()=>{const F=new Date('2026-09-16T14:20:00').getTime();
    const R=Date;class D extends R{constructor(...a){if(!a.length)super(F);else super(...a)}static now(){return F}}
    window.Date=D;try{localStorage.clear()}catch(e){}});
  await p.goto(URL,{waitUntil:'networkidle0'});await wait(1000);

  // ---- FOUNDATION 1 · the shape is stamped
  const st=await p.evaluate(()=>{const d=day();return{n:(d.shape||[]).length,keys:Object.keys((d.shape||[])[3]||{})}});
  ok('today\'s shape is stamped',st.n===14,'blocks='+st.n);
  ok('...with the fields that decide scoring',st.keys.includes('dom')&&st.keys.includes('kind'),st.keys.join(','));

  ok('a past day keeps the shape it was lived with',await p.evaluate(()=>{
    S.days['2026-09-14']={done:{},miss:{},wait:{},produced:{},focus:{},prio:[],wins:{},off:0,credited:{},
      shape:[{id:'b1',s:'09:00',e:'10:00',kind:'deep',dom:['WORK']}]};
    save();return shapeFor('2026-09-14').length===1&&shapeFor('2026-09-14')[0].e==='10:00';}));
  ok('...and editing today cannot move it',await p.evaluate(()=>{
    const before=JSON.stringify(shapeFor('2026-09-14'));
    const keep=day().shape;                       // don't corrupt today's own stamp
    day().shape=[{id:'b1',s:'06:00',e:'23:00',kind:'deep',dom:['MIND']}];save();
    const held=JSON.stringify(shapeFor('2026-09-14'))===before;
    day().shape=keep;save();
    return held;}));
  ok('a day with no stamp falls back to the constant',await p.evaluate(()=>
    shapeFor('2026-09-15').length===14));

  // ---- FOUNDATION 2 · domain follows the work
  const dm=await p.evaluate(()=>{
    G=GM.empty();
    const w=GM.addArea(G,{name:'SANO',domain:'WORK'});
    const m=GM.addArea(G,{name:'Spanish',domain:'MIND'});
    const g1=GM.addGoal(G,{title:'Three clients',areaId:w.id,wig:1});
    const g2=GM.addGoal(G,{title:'Conversational Spanish',areaId:m.id});
    const wk=weekKeyNow();
    GM.commit(G,{goalId:g1.id,weekKey:wk,day:2,block:'b1'});
    GM.commit(G,{goalId:g2.id,weekKey:wk,day:2,block:'b2'});
    gsave();
    const B=id=>WEEKDAY.find(x=>x.id===id);
    return{b1:blockDomains(today(),B('b1')),b2:blockDomains(today(),B('b2')),
      b3:blockDomains(today(),B('b3')),walk:blockDomains(today(),B('walk'))};});
  ok('a block on SANO credits THE WORK',dm.b1.join()==='WORK',dm.b1.join());
  ok('the SAME KIND of block on Spanish credits MIND',dm.b2.join()==='MIND',dm.b2.join());
  ok('an uncommitted deep block keeps its stamped domain',dm.b3.join()==='WORK',dm.b3.join());
  ok('non-deep blocks are untouched',dm.walk.join()==='BODY,MIND',dm.walk.join());
  ok('MIND is now reachable by real work',await p.evaluate(()=>{
    const d=day();d.done['b2']=true;save();
    const before=domainProgress().MIND;
    delete d.done['b2'];save();
    return before>domainProgress().MIND;}));

  // ---- THE DECLUTTER
  await p.evaluate(()=>{go('today')});await wait(800);
  const dec=await p.evaluate(()=>{
    const peek=document.getElementById('ovrPeek'),gl=document.getElementById('glance');
    const nu=document.getElementById('nextUp');
    return{peek:!!peek,peekTxt:peek?peek.textContent.replace(/\s+/g,' ').trim():'',
      peekH:peek?peek.getBoundingClientRect().height:0,
      glanceShown:gl?getComputedStyle(gl).display!=='none':null,
      peekAboveBlock:peek&&nu?peek.getBoundingClientRect().top<nu.getBoundingClientRect().top:null};});
  ok('the rating collapses to one line',dec.peek&&/OVERALL/.test(dec.peekTxt),dec.peekTxt.slice(0,44));
  ok('...the radar is hidden by default',dec.glanceShown===false);
  ok('...and the line clears 44px',dec.peekH>=44,dec.peekH);
  await p.evaluate(()=>toggleGlance());await wait(500);
  ok('one tap opens it',await p.evaluate(()=>getComputedStyle(document.getElementById('glance')).display!=='none'));
  ok('...and it actually renders the radar',await p.evaluate(()=>
    document.getElementById('miniRadar').innerHTML.length>100));
  await p.evaluate(()=>toggleGlance());await wait(400);
  ok('and one tap closes it again',await p.evaluate(()=>
    getComputedStyle(document.getElementById('glance')).display==='none'));

  // ---- THE DOOR
  const door=await p.evaluate(()=>{const e=document.querySelector('.nu-door');
    return e?{t:e.textContent.trim(),h:e.getBoundingClientRect().height}:null});
  ok('the live card has a way into the day',!!door,door&&door.t);
  ok('...it counts the real day',door&&/\d+ of \d+/.test(door.t),door&&door.t);
  ok('...and clears 44px',door&&door.h>=44,door&&door.h);
  ok('tapping it reaches the schedule',await p.evaluate(()=>{
    openDay();return document.getElementById('sched').classList.contains('flash')}));

  // ---- nothing else broke
  const a=await p.evaluate(()=>{
    const bad={small:0,tap:0,over:null};
    if(document.documentElement.scrollWidth>window.innerWidth+1)bad.over=document.documentElement.scrollWidth;
    [...document.querySelectorAll('.app *')].forEach(el=>{
      const cs=getComputedStyle(el);if(cs.display==='none'||cs.visibility==='hidden')return;
      const r=el.getBoundingClientRect();if(!r.width||!r.height)return;
      const t=(el.textContent||'').trim();
      if(!el.children.length&&t&&parseFloat(cs.fontSize)<11)bad.small++;
      if(/^(BUTTON|A)$/.test(el.tagName)&&r.height<44)bad.tap++;});
    return bad;});
  ok('no overflow',!a.over,a.over);
  ok('no sub-11px text',a.small===0,a.small);
  ok('all taps >=44px',a.tap===0,a.tap);
  ok('no JS errors',errs.length===0,errs.slice(0,2).join(' | '));

  const f=T.filter(t=>!t.c);
  T.forEach(t=>console.log((t.c?'  ok  ':'  FAIL')+'  '+t.n+(t.d?'  ['+t.d+']':'')));
  console.log((T.length-f.length)+'/'+T.length+' passed');
  await p.screenshot({path:process.env.SP+'/phase1.png'});
  await b.close();process.exit(f.length?1:0);
})();
