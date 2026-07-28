/* THE EXTRAS · his decision 2026-07-27
   "Always counts" and "Something extra" are no longer sections on the Today page.
   They are asked for at the end of a focus run ("anything else happen in there?")
   and they LIVE in the Bank. This harness guards all three halves of that:
     1 · Today no longer carries either section, and what it does carry never accuses
     2 · the run-end question is plausible, small, and refusable at no cost
     3 · the Bank is a real home — browsable, tappable, and shows the weekly standard   */
const puppeteer=require('/Users/jaspersmind/build-arsenal/_verify/node_modules/puppeteer-core');
const URL=process.argv[2]||'file:///Users/jaspersmind/Documents/burn-the-boats/index.html';
const wait=ms=>new Promise(r=>setTimeout(r,ms));
const T=[];const ok=(n,c,d)=>T.push({n,c:!!c,d:d===undefined?'':String(d)});

async function boot(clock){
  const b=await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless:'new',args:['--allow-file-access-from-files','--no-sandbox']});
  const p=await b.newPage();
  await p.setViewport({width:440,height:956,deviceScaleFactor:2,isMobile:true,hasTouch:true});
  const errs=[];p.on('pageerror',e=>errs.push(e.message));
  await p.evaluateOnNewDocument(`(()=>{const F=new Date('${clock}').getTime();
    const R=Date;class D extends R{constructor(...a){if(!a.length)super(F);else super(...a)}
    static now(){return F}} window.Date=D;try{localStorage.clear()}catch(e){}})()`);
  await p.goto(URL,{waitUntil:'networkidle0'});await wait(1000);
  return {b,p,errs};
}

(async()=>{
  // ══════════ 1 · TODAY NO LONGER CARRIES THEM ══════════
  let {b,p,errs}=await boot('2026-09-16T09:40:00');

  const today=await p.evaluate(()=>{
    const wrap=document.getElementById('extrasWrap'),bc=document.getElementById('boostCard'),
          xl=document.getElementById('extrasLine');
    const vis=el=>{if(!el)return false;const r=el.getBoundingClientRect();
      return r.height>2&&getComputedStyle(el).visibility!=='hidden'};
    return {wrapHidden:!!wrap&&wrap.hidden, wrapVisible:vis(wrap),
            cardHidden:!!bc&&bc.hidden, cardVisible:vis(bc),
            winsStillInDom:!!document.getElementById('wins'),
            line:xl?xl.textContent.trim():null, lineH:xl?xl.getBoundingClientRect().height:0};
  });
  ok('the "Always counts" section is gone from Today',today.wrapHidden&&!today.wrapVisible,
     'hidden='+today.wrapHidden+' visible='+today.wrapVisible);
  ok('the boost card is gone from Today',today.cardHidden&&!today.cardVisible,
     'hidden='+today.cardHidden+' visible='+today.cardVisible);
  ok('...but both still render, so nothing else breaks',today.winsStillInDom);
  ok('Today carries one line instead',!!today.line,today.line);
  ok('that line clears 44px',today.lineH>=44,today.lineH);
  ok('with nothing logged it does not show a zero',
     !!today.line&&!/\b0\b/.test(today.line),today.line);
  ok('and never a shortfall',!!today.line&&!/left|missed|short|of 6/i.test(today.line),today.line);

  // ══════════ 2 · THE QUESTION AT THE END OF A RUN ══════════
  // plausibility: at 09:40 nothing about bed or dinner may be offered
  const morning=await p.evaluate(()=>elseCands('b1').map(w=>w.k));
  ok('offers at most three',morning.length<=3,morning.join(','));
  ok('never offers "in bed on time" in the morning',morning.indexOf('bed')<0,morning.join(','));
  ok('never offers "cooked" in the morning',morning.indexOf('cooked')<0,morning.join(','));

  // run the block to the end and check the step
  const step=await p.evaluate(async()=>{
    startRun('b1');
    finishRun();
    elseStep('b1');
    const opts=[...document.querySelectorAll('.else-o')];
    return {q:(document.querySelector('.else-q')||{}).textContent||'',
            n:opts.length,
            under44:opts.filter(e=>e.getBoundingClientRect().height<44).length,
            refusal:(document.getElementById('runStep')||{}).textContent||'',
            refusalH:document.getElementById('runStep').getBoundingClientRect().height,
            exits:[...document.querySelectorAll('#run .btn')].filter(e=>!e.hidden).length};
  });
  ok('there is exactly ONE exit, not two',step.exits===1,'exits='+step.exits);
  ok('the run ends by asking',/anything else/i.test(step.q),step.q);
  ok('it offers three, not six',step.n===3,'offered='+step.n);
  ok('every option clears 44px',step.under44===0,step.under44+' under');
  ok('the refusal is a first-class answer',/nothing/i.test(step.refusal),step.refusal);
  ok('and it is the same size as the options',step.refusalH>=44,step.refusalH);

  const xpBefore=await p.evaluate(()=>S.xp);
  const refused=await p.evaluate(()=>{document.getElementById('runStep').click();
    return {xp:S.xp,wins:Object.keys(day().wins).length,
            runOpen:document.getElementById('run').className.indexOf('on')>=0}});
  ok('refusing costs nothing',refused.xp===xpBefore&&refused.wins===0,
     'xp '+xpBefore+'→'+refused.xp+' wins='+refused.wins);
  ok('...and closes the run',!refused.runOpen);

  // tapping one banks it, and it is never offered twice
  const tapped=await p.evaluate(()=>{
    const before=S.xp;
    elseStep('b1');
    const first=document.querySelector('.else-o');
    const label=first.textContent.trim();
    first.click();
    return {gained:S.xp-before,label,
            offeredAgain:[...document.querySelectorAll('.else-o')]
              .some(e=>e.textContent.trim()===label),
            exit:(document.getElementById('runStep')||{}).textContent||'',
            exits:[...document.querySelectorAll('#run .btn')].filter(e=>!e.hidden).length};
  });
  ok('tapping one banks XP',tapped.gained>0,'+'+tapped.gained+' · '+tapped.label);
  ok('and it is never offered twice',!tapped.offeredAgain);
  ok('after a tap the exit stops saying "nothing"',/done/i.test(tapped.exit),tapped.exit);
  ok('and there is still only one exit',tapped.exits===1,'exits='+tapped.exits);

  // the "give up" button must be handed back after the run, not left wired to "carry on"
  const rebind=await p.evaluate(()=>{closeRun();
    return document.getElementById('runEnd').textContent.trim()});
  ok('the End button is handed back after a run',/end/i.test(rebind),rebind);

  ok('no JS errors on Today',errs.length===0,errs.slice(0,2).join(' | '));
  await b.close();

  // ══════════ 3 · THE BANK IS A REAL HOME ══════════
  ({b,p,errs}=await boot('2026-09-16T21:10:00'));
  const evening=await p.evaluate(()=>elseCands('b4').map(w=>w.k));
  ok('at 21:10 "in bed on time" IS plausible',evening.indexOf('bed')>=0,evening.join(','));

  const bank=await p.evaluate(async()=>{
    go('bank');await new Promise(r=>setTimeout(r,400));
    const heads=[...document.querySelectorAll('#bankBody h2.sec')].map(h=>h.textContent.trim());
    const wins=[...document.querySelectorAll('#bankBody .wins .win')];
    return {heads, n:wins.length,
            under44:wins.filter(e=>e.getBoundingClientRect().height<44).length,
            quota:wins.some(e=>/this week/.test(e.textContent)),
            txt:wins.map(e=>e.textContent.replace(/\s+/g,' ').trim()).slice(0,2)};
  });
  ok('the Bank has an "Always counts" section',bank.heads.some(h=>/Always counts/i.test(h)),bank.heads.join(' · '));
  ok('all six are there',bank.n===6,'n='+bank.n);
  ok('every one clears 44px',bank.under44===0,bank.under44+' under');
  ok('the weekly standard is shown',bank.quota,bank.txt[0]);

  const tapInBank=await p.evaluate(async()=>{
    const before=S.xp;
    document.querySelector('#bankBody .wins .win').click();
    await new Promise(r=>setTimeout(r,350));
    return {gained:S.xp-before,onBank:location.hash};
  });
  ok('tapping one in the Bank banks it',tapInBank.gained>0,'+'+tapInBank.gained);
  ok('...without throwing you off the tab',/bank/.test(tapInBank.onBank),tapInBank.onBank);

  const back=await p.evaluate(async()=>{
    go('today');await new Promise(r=>setTimeout(r,400));
    const xl=document.getElementById('extrasLine');
    return xl.textContent.trim();
  });
  ok('and Today\'s line reflects it',/also today/.test(back)&&/\+/.test(back),back);

  ok('no JS errors in the Bank',errs.length===0,errs.slice(0,2).join(' | '));
  await b.close();

  const f=T.filter(t=>!t.c);
  T.forEach(t=>console.log((t.c?'  ok  ':'  FAIL')+'  '+t.n+(t.d?'  ['+t.d+']':'')));
  console.log((T.length-f.length)+'/'+T.length+' passed');
  process.exit(f.length?1:0);
})();
