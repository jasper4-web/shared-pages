const puppeteer=require('/Users/jaspersmind/build-arsenal/_verify/node_modules/puppeteer-core');
const URL=process.argv[2]||'file:///Users/jaspersmind/Documents/burn-the-boats/index.html';
const wait=ms=>new Promise(r=>setTimeout(r,ms));
const T=[];const ok=(n,c,d)=>T.push({n,c:!!c,d:d===undefined?'':String(d)});
(async()=>{
  const b=await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:'new',args:['--allow-file-access-from-files','--no-sandbox']});
  const p=await b.newPage();await p.setViewport({width:440,height:956,deviceScaleFactor:2,isMobile:true,hasTouch:true});
  const errs=[];p.on('pageerror',e=>errs.push(e.message));
  await p.evaluateOnNewDocument(()=>{const F=new Date('2026-07-27T12:48:00').getTime();
    const R=Date;class D extends R{constructor(...a){if(!a.length)super(F);else super(...a)}static now(){return F}}
    window.Date=D;try{localStorage.clear()}catch(e){}});
  await p.goto(URL,{waitUntil:'networkidle0'});await wait(900);

  // reproduce exactly what he did: first goal from the empty screen, with a number
  await p.evaluate(()=>go('push'));await wait(800);
  await p.type('#g2First','Three clients signed and paying');
  await p.evaluate(()=>g2SaveFirst());await wait(700);
  await p.evaluate(()=>{const g=GM.liveGoals(G)[0];
    GM.editGoal(G,g.id,{start:0,at:0,target:3,unit:''},1);gsave();closeSheet();render()});
  await wait(600);
  ok('reproduced the holder area',await p.evaluate(()=>{
    const a=GM.liveAreas(G)[0];return a.name==='Unsorted'&&a.auto===1}));

  // the strip must not lead with the invented name
  await p.evaluate(()=>go('today'));await wait(900);
  const strip=await p.evaluate(()=>{const e=document.querySelector('#pushStrip .ps-c');
    return e?e.textContent.replace(/\s+/g,' ').trim():null});
  ok('the strip no longer says UNSORTED',strip&&!/UNSORTED/i.test(strip),strip);
  ok('...it uses his own words',strip&&/Three clients/i.test(strip),strip);

  // the Goals page asks him to name it
  await p.evaluate(()=>go('push'));await wait(900);
  const nag=await p.evaluate(()=>{const e=document.querySelector('.g2mig');
    return e?e.textContent.replace(/\s+/g,' ').trim():null});
  ok('Goals offers to name it',nag&&/NEEDS A NAME/.test(nag),nag&&nag.slice(0,50));

  // renaming works and sticks
  await p.evaluate(()=>{const a=GM.liveAreas(G)[0];g2EditArea(a.id)});await wait(600);
  ok('the rename sheet opens with the current name',await p.evaluate(()=>
    document.getElementById('g2AN').value==='Unsorted'));
  await p.evaluate(()=>{document.getElementById('g2AN').value='SANO';g2PickDom('WORK');g2SaveArea()});
  await wait(700);
  const after=await p.evaluate(()=>{const a=GM.liveAreas(G)[0];
    return{name:a.name,auto:a.auto,goals:GM.goalsOfArea(G,a.id).length,
      nag:!!document.querySelector('.g2mig')}});
  ok('the area is renamed',after.name==='SANO',after.name);
  ok('...its goals came with it',after.goals===1,'goals='+after.goals);
  ok('...and the prompt is gone',!after.nag);
  await p.evaluate(()=>go('today'));await wait(800);
  ok('the strip now shows the real name',await p.evaluate(()=>
    /SANO/.test(document.querySelector('#pushStrip .ps-c').textContent)));
  ok('no JS errors',errs.length===0,errs.slice(0,2).join(' | '));

  const f=T.filter(t=>!t.c);
  T.forEach(t=>console.log((t.c?'  ok  ':'  FAIL')+'  '+t.n+(t.d?'  ['+t.d+']':'')));
  console.log((T.length-f.length)+'/'+T.length+' passed');
  await b.close();process.exit(f.length?1:0);
})();
