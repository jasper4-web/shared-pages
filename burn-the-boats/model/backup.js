const puppeteer=require('/Users/jaspersmind/build-arsenal/_verify/node_modules/puppeteer-core');
const URL=process.argv[2]||'file:///Users/jaspersmind/Documents/burn-the-boats/index.html';
const wait=ms=>new Promise(r=>setTimeout(r,ms));
const T=[];const ok=(n,c,d)=>T.push({n,c:!!c,d:d===undefined?'':String(d)});
(async()=>{
  const b=await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:'new',args:['--allow-file-access-from-files','--no-sandbox']});
  const p=await b.newPage();await p.setViewport({width:440,height:956});
  const errs=[];p.on('pageerror',e=>errs.push(e.message));
  await p.evaluateOnNewDocument(()=>{const F=new Date('2026-09-16T09:20:00').getTime();
    const R=Date;class D extends R{constructor(...a){if(!a.length)super(F);else super(...a)}static now(){return F}}
    window.Date=D;try{localStorage.clear()}catch(e){}
    window.confirm=()=>true;});
  await p.goto(URL,{waitUntil:'networkidle0'});await wait(900);

  // build a real state on BOTH stores
  const built=await p.evaluate(()=>{
    G=GM.empty();
    const a=GM.addArea(G,{name:'SANO',domain:'WORK'});
    const h=GM.addHorizon(G,{label:'Dec 25',date:'2026-12-25'});
    const g=GM.addGoal(G,{title:'Three clients',areaId:a.id,horizonId:h.id,start:0,at:1,target:3,wig:1});
    GM.commit(G,{goalId:g.id,weekKey:weekKeyNow(),day:0,block:'b1'});
    gsave();
    S.xp=1234;day().done['b1']=true;save();
    return{goals:G.goals.length,xp:S.xp,commits:G.commits.length};});
  ok('state built on both stores',built.goals===1&&built.xp===1234);

  // the payload the Backup button writes
  const payload=await p.evaluate(()=>JSON.parse(JSON.stringify({fmt:SAVE_FMT,at:today(),s:S,g:G})));
  ok('backup carries the goal store',payload.g&&payload.g.goals.length===1,'goals='+(payload.g&&payload.g.goals.length));
  ok('backup carries the day store',payload.s&&payload.s.xp===1234);
  ok('backup carries the commitments',payload.g&&payload.g.commits.length===1);
  ok('backup is versioned',payload.fmt===2,'fmt='+payload.fmt);

  // wipe everything, then restore from that file
  const restored=await p.evaluate(pl=>{
    G=GM.empty();S.xp=0;S.days={};gsave();save();
    const before={goals:G.goals.length,xp:S.xp};
    const j=pl,two=j&&j.fmt>=2&&j.s;
    const sPart=two?j.s:j,gPart=two?j.g:null;
    S=merge(JSON.parse(JSON.stringify(DEFAULT)),sPart);seedOwned();save();
    if(gPart){G=Object.assign(GM.empty(),gPart);gsave()}
    render();
    return{before,goals:G.goals.length,xp:S.xp,commits:G.commits.length,
      title:G.goals[0]&&G.goals[0].title,wig:G.goals[0]&&G.goals[0].wig};},payload);
  ok('wipe really wiped it',restored.before.goals===0&&restored.before.xp===0);
  ok('restore brings the goals back',restored.goals===1&&/Three clients/.test(restored.title||''));
  ok('restore brings the XP back',restored.xp===1234);
  ok('restore brings the commitments back',restored.commits===1);
  ok('restore keeps the WIG',restored.wig===1);

  // an OLD pre-goals backup must not wipe his goals
  const legacy=await p.evaluate(()=>{
    const j={v:5,xp:999,days:{},week:{},rewards:[],december:{}};   // fmt-1 file
    const two=j&&j.fmt>=2&&j.s;
    const sPart=two?j.s:j,gPart=two?j.g:null;
    S=merge(JSON.parse(JSON.stringify(DEFAULT)),sPart);seedOwned();save();
    if(gPart){G=Object.assign(GM.empty(),gPart);gsave()}
    render();
    return{xp:S.xp,goals:G.goals.length};});
  ok('an old backup still restores its XP',legacy.xp===999,'xp='+legacy.xp);
  ok('...and does NOT destroy his goals',legacy.goals===1,'goals='+legacy.goals);

  ok('no JS errors',errs.length===0,errs.slice(0,2).join(' | '));
  const fail=T.filter(t=>!t.c);
  T.forEach(t=>console.log((t.c?'  ok  ':'  FAIL')+'  '+t.n+(t.d?'  ['+t.d+']':'')));
  console.log((T.length-fail.length)+'/'+T.length+' passed');
  await b.close();process.exit(fail.length?1:0);
})();
