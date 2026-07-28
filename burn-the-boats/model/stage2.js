/* STAGE 2 · STOP THE ACCUSATIONS
   His first rule: never render a wall of failure. Four screens broke it without him having
   made any mistake at all. Each is guarded here, and each guard is checked from BOTH sides —
   the accusation must be gone, and the information must not be.                            */
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
  await p.goto(URL,{waitUntil:'networkidle0'});await wait(1000);
  return {b,p,errs};
}
const seedAreas=`(()=>{
  const names=[['SANO','WORK'],['Trading','CAPITAL'],['LA Edible','WORK'],['Body','BODY'],['Faith','FAITH']];
  names.forEach(([n,d])=>{const a=GM.addArea(G,{name:n,domain:d});
    GM.addGoal(G,{title:n+' — the December one',areaId:a.id,anchor:1});});
  gsave();render();
})()`;
async function week(p){
  return p.evaluate(async()=>{go('push');await new Promise(r=>setTimeout(r,350));
    const t=[...document.querySelectorAll('button,.chip,.g2seg')].find(e=>/THE WEEK/i.test(e.textContent));
    if(t)t.click();await new Promise(r=>setTimeout(r,450));
    return document.getElementById('pushBody').innerText;});
}
(async()=>{
  // ══ 1 · MONDAY MORNING, NOTHING PLANNED ══
  let {b,p,errs}=await boot('2026-09-14T09:20:00');   // a Monday
  await p.evaluate(seedAreas);
  let txt=await week(p);
  ok('Monday does not name the areas he is "neglecting"',
     !/Nothing on .*this week/.test(txt),(txt.match(/Nothing on [^\n]*/)||['(absent)'])[0]);
  ok('...it says what is actually true instead',/all yours|fresh week|closed at|is closed/i.test(txt));
  ok('...and offers to place the first block',/Put .* on MON|Put .* on TUE/i.test(txt),
     (txt.match(/Put [^\n]*/)||['(no offer)'])[0]);
  const cta=await p.evaluate(()=>{const b=document.querySelector('.g2fb');
    return b?{t:b.textContent.trim(),h:b.getBoundingClientRect().height}:null});
  ok('that button clears 44px',cta&&cta.h>=44,cta?cta.h:'missing');
  const placed=await p.evaluate(async()=>{const before=GM.commitsOfWeek(G,weekKeyNow()).length;
    document.querySelector('.g2fb').click();await new Promise(r=>setTimeout(r,400));
    return GM.commitsOfWeek(G,weekKeyNow()).length-before});
  ok('...and it actually places one',placed===1,'delta='+placed);
  ok('no JS errors',errs.length===0,errs.slice(0,2).join(' | '));
  await b.close();

  // ══ 2 · WEDNESDAY, WEEK UNDERWAY — the warning is INFORMATION and must come back ══
  ({b,p,errs}=await boot('2026-09-16T09:20:00'));    // a Wednesday
  await p.evaluate(seedAreas);
  await p.evaluate(()=>{const g=GM.liveGoals(G)[0];
    setCommit(weekKeyNow(),3,'b1',g.id);gsave();});   // one commitment, Thursday
  txt=await week(p);
  ok('once the week is underway the line returns',/Nothing on .*this week/.test(txt),
     (txt.match(/Nothing on [^\n]*/)||['(still absent)'])[0]);
  ok('...and it is not shown at the same time as the first-move card',
     !(/Nothing on .*this week/.test(txt)&&/Put .* on /.test(txt)));
  await b.close();

  // ══ 3 · COMING BACK AFTER A GAP ══
  ({b,p,errs}=await boot('2026-09-16T09:20:00'));
  await p.evaluate(seedAreas);
  const ret=await p.evaluate(async()=>{
    // three weeks of silence, and goals that last moved long ago
    G.meta.awayFrom=iso(new Date(Date.now()-21*864e5));
    GM.liveGoals(G).forEach(g=>{g.history=[{t:'state',day:1,from:'',to:'active'}]});
    gsave();go('push');await new Promise(r=>setTimeout(r,500));
    const t=document.getElementById('pushBody').innerText;
    return {t,gone:daysGone()};
  });
  ok('the return banner appears after a real gap',/Nothing was lost/i.test(ret.t),'daysGone='+ret.gone);
  ok('NO column of "moved 21d ago" underneath it',!/moved \d+d ago/.test(ret.t),
     (ret.t.match(/moved \d+d ago/g)||['(none)']).slice(0,3).join(', '));
  ok('...the goals read as still standing instead',/still standing/.test(ret.t));
  const after=await p.evaluate(async()=>{
    const b=[...document.querySelectorAll('button')].find(e=>/Pick it back up/i.test(e.textContent));
    if(b)b.click();await new Promise(r=>setTimeout(r,450));
    return {t:document.getElementById('pushBody').innerText,backOn:S._backOn,today:today()};
  });
  ok('dismissing the welcome does not immediately restore the decay column',
     !/moved \d+d ago/.test(after.t),(after.t.match(/moved \d+d ago/g)||['(none)']).slice(0,2).join(', '));
  ok('...and the day he came back is remembered',after.backOn===after.today,after.backOn);
  ok('no JS errors',errs.length===0,errs.slice(0,2).join(' | '));
  await b.close();

  // ══ 4 · THE MONTH-END PILE-UP ══
  ({b,p,errs}=await boot('2026-10-05T09:20:00'));
  const pile=await p.evaluate(async()=>{
    const h=GM.addHorizon(G,{label:'End of September',date:'2026-09-30'});
    const a=GM.addArea(G,{name:'SANO',domain:'WORK'});
    for(let i=0;i<8;i++)GM.addGoal(G,{title:'Overdue goal '+(i+1),areaId:a.id,horizonId:h.id});
    gsave();go('push');await new Promise(r=>setTimeout(r,500));
    const el=document.querySelector('.g2mig');
    return {n:g2NeedsDecision().length,text:el?el.innerText.replace(/\s+/g,' ').trim():'(no banner)'};
  });
  ok('eight goals really are due',pile.n===8,'due='+pile.n);
  ok('the banner does NOT say "8 goals have stopped moving"',
     !/8 goals have stopped/.test(pile.text),pile.text);
  ok('it asks for ONE decision',/ONE DECISION/i.test(pile.text),pile.text);
  ok('...names a single goal',/Overdue goal 1/.test(pile.text));
  ok('...and counts the rest quietly rather than listing them',/7 after this/.test(pile.text));
  ok('nothing on that banner reads as failure',
     !/failure|failed|missed|behind|lost/i.test(pile.text.replace(/Not a failure/i,'')),pile.text);
  ok('no JS errors',errs.length===0,errs.slice(0,2).join(' | '));

  // craft floor on every screen we touched
  const craft=await p.evaluate(()=>{
    const de=document.documentElement;
    const small=[...document.querySelectorAll('#pushBody *')].filter(e=>!e.children.length&&e.textContent.trim())
      .filter(e=>parseFloat(getComputedStyle(e).fontSize)<11).length;
    const taps=[...document.querySelectorAll('#pushBody button')]
      .filter(e=>e.getBoundingClientRect().height>0&&e.getBoundingClientRect().height<44).length;
    return {over:de.scrollWidth>window.innerWidth+1,small,taps};
  });
  ok('no horizontal overflow at 390px',!craft.over);
  ok('no text under 11px',craft.small===0,craft.small);
  ok('every visible button clears 44px',craft.taps===0,craft.taps);
  await b.close();

  const f=T.filter(t=>!t.c);
  T.forEach(t=>console.log((t.c?'  ok  ':'  FAIL')+'  '+t.n+(t.d?'  ['+t.d+']':'')));
  console.log((T.length-f.length)+'/'+T.length+' passed');
  process.exit(f.length?1:0);
})();
