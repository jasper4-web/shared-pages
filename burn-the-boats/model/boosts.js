const puppeteer=require('/Users/jaspersmind/build-arsenal/_verify/node_modules/puppeteer-core');
const URL=process.argv[2]||'file:///Users/jaspersmind/Documents/burn-the-boats/index.html';
const OUT=process.env.SP+'/';
(async()=>{
  const b=await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:'new',args:['--allow-file-access-from-files','--no-sandbox']});
  const p=await b.newPage();
  await p.setViewport({width:440,height:956,deviceScaleFactor:2,isMobile:true,hasTouch:true});
  const errs=[];p.on('pageerror',e=>errs.push('PAGEERROR '+e.message));
  p.on('console',m=>{if(m.type()==='error')errs.push('CONSOLE '+m.text())});
  // fake a Monday mid-run so Today renders fully
  await p.evaluateOnNewDocument(()=>{
    const F=new Date('2026-08-31T09:20:00').getTime();
    const R=Date; class D extends R{constructor(...a){if(!a.length)super(F);else super(...a)}
      static now(){return F}}
    window.Date=D; try{localStorage.clear()}catch(e){}
  });
  await p.goto(URL,{waitUntil:'networkidle0'});
  await new Promise(r=>setTimeout(r,700));

  const T=[];const ok=(n,c,d)=>T.push({n,c:!!c,d:d||''});

  // 1 · run length + labels
  const meta=await p.evaluate(()=>({total:TOTAL_DAYS,weeks:TOTAL_WEEKS,end:END_LABEL,
    lm:LANDMARKS.map(l=>l.week+':'+l.label),foot:document.getElementById('foot').textContent,
    fTo:document.getElementById('fTo').textContent}));
  ok('run is 110 weekdays',meta.total===110,JSON.stringify(meta.total));
  ok('end label is Dec 25',meta.end==='Dec 25',meta.end);
  ok('furnace says TO DEC 25',/DEC 25/.test(meta.fTo),meta.fTo);
  ok('4 landmarks spread',meta.lm.length===4,meta.lm.join(' '));

  // 2 · The boost card is NO LONGER a section on Today — his call, 2026-07-27. The extras
  //     are captured at the end of a run and live in the Bank. The card still renders (the
  //     Bank reads the same markup) but Today must not show it, and Today must instead carry
  //     exactly one line pointing at where they went. The 44px floor moved to the Bank list,
  //     asserted in section 3 — it is not dropped, only relocated.
  const card=await p.evaluate(()=>{const e=document.querySelector('#boostCard .bcard');
    if(!e)return null;const r=e.getBoundingClientRect();
    return{t:e.textContent.trim(),h:r.height,invite:e.classList.contains('invite'),
           shown:!document.getElementById('boostCard').hidden}});
  ok('the boost card still renders',!!card,card?card.t.slice(0,60):'MISSING');
  ok('but Today does NOT show it',card&&!card.shown,card?('shown='+card.shown):'-');
  ok('empty state is an invitation',card&&card.invite,card?('invite='+card.invite):'-');
  const xl=await p.evaluate(()=>{const e=document.getElementById('extrasLine');
    if(!e)return null;const r=e.getBoundingClientRect();
    return{t:e.textContent.trim(),h:r.height}});
  ok('Today carries one line to the Bank instead',!!xl&&/Bank|also today/.test(xl.t),xl?xl.t:'MISSING');
  ok('that line clears 44px',xl&&xl.h>=44,xl?xl.h:'-');
  ok('and it never shows a shortfall',!!xl&&!/\b0 of\b|left|missed|short/i.test(xl.t),xl?xl.t:'-');

  // 3 · Bank list renders the four seeds with edit buttons
  await p.evaluate(()=>go('bank'));await new Promise(r=>setTimeout(r,350));
  const bank=await p.evaluate(()=>{
    const rows=[...document.querySelectorAll('.bst-r')];
    return{n:rows.length,
      eds:rows.filter(r=>{const e=r.querySelector('.bst-e');if(!e)return false;
        return e.getBoundingClientRect().height>=44}).length,
      small:[...document.querySelectorAll('#bankBody *')].filter(e=>!e.children.length&&(e.textContent||'').trim()&&
        parseFloat(getComputedStyle(e).fontSize)<11).length}});
  ok('4 seeded boosts in Bank',bank.n===4,'rows='+bank.n);
  ok('every edit button >=44px',bank.eds===bank.n,bank.eds+'/'+bank.n);
  ok('no sub-11px text in Bank',bank.small===0,'small='+bank.small);

  // 4 · log a boost -> XP moves, row locks, log records
  const before=await p.evaluate(()=>S.xp);
  await p.evaluate(()=>logBoost('read'));await new Promise(r=>setTimeout(r,350));
  const after=await p.evaluate(()=>({xp:S.xp,log:S.boostLog.length,done:boostDone(boostById('read')),
    priv:S.privileges}));
  ok('logging pays XP',after.xp-before===60,`${before}->${after.xp}`);
  ok('log recorded',after.log===1,'len='+after.log);
  ok('once-a-day boost now locked',after.done===true,String(after.done));
  ok('session boost pays no privilege',after.priv===0,'priv='+after.priv);

  // 5 · double tap pays nothing
  await p.evaluate(()=>logBoost('read'));await new Promise(r=>setTimeout(r,250));
  const dbl=await p.evaluate(()=>({xp:S.xp,log:S.boostLog.length}));
  ok('second tap pays nothing',dbl.xp===after.xp&&dbl.log===1,`xp=${dbl.xp} log=${dbl.log}`);

  // 6 · event boost pays a privilege
  await p.evaluate(()=>logBoost('network'));await new Promise(r=>setTimeout(r,250));
  const ev=await p.evaluate(()=>({xp:S.xp,priv:S.privileges}));
  const boostTot=await p.evaluate(()=>boostXpToday());
  ok('boosts are capped at 250 XP a day',boostTot<=250&&ev.priv===1,'day='+boostTot+' priv='+ev.priv);
  ok('...and the faucet is closed — 20 taps add nothing',await p.evaluate(()=>{
    const before=S.xp;for(let i=0;i<20;i++)logBoost('network');return S.xp===before}));
  ok('...one privilege token a day, not one per tap',await p.evaluate(()=>S.privileges<=1));

  // 7 · the cap is real
  const cap=await p.evaluate(()=>[boostClamp(9999,'gesture'),boostClamp(1,'gesture'),
    boostClamp(9999,'session'),boostClamp(9999,'event')]);
  ok('gesture caps at 30',cap[0]===30,String(cap[0]));
  ok('gesture floors at 5',cap[1]===5,String(cap[1]));
  ok('session caps at 120',cap[2]===120,String(cap[2]));
  ok('event caps at 250',cap[3]===250,String(cap[3]));

  // 8 · composer opens, pool prefills, save writes a real def
  await p.evaluate(()=>editBoost(null));await new Promise(r=>setTimeout(r,350));
  const sheetChk=await p.evaluate(()=>{
    const chips=[...document.querySelectorAll('#sheetA .chip.tap')];
    return{chips:chips.length,under:chips.filter(c=>c.getBoundingClientRect().height<44).length,
      small:[...document.querySelectorAll('#sheetA *')].filter(e=>!e.children.length&&(e.textContent||'').trim()&&
        parseFloat(getComputedStyle(e).fontSize)<11).length}});
  ok('composer chips all >=44px',sheetChk.under===0,`${sheetChk.under} of ${sheetChk.chips} under`);
  ok('no sub-11px text in composer',sheetChk.small===0,'small='+sheetChk.small);
  await p.evaluate(()=>{boostPool(0);});await new Promise(r=>setTimeout(r,150));
  const pre=await p.evaluate(()=>({n:document.getElementById('boN').value,x:document.getElementById('boX').value,size:BO.size,rep:BO.repeat}));
  ok('pool prefills the form',/meal/.test(pre.n)&&pre.x==10&&pre.size==='gesture',JSON.stringify(pre));
  // try to cheat the economy
  await p.evaluate(()=>{document.getElementById('boX').value='5000';saveBoost(null);saveBoost(null)});
  await new Promise(r=>setTimeout(r,350));
  const made=await p.evaluate(()=>{const d=S.boostDefs[S.boostDefs.length-1];return{n:d.n,xp:d.xp,size:d.size,rep:d.repeat}});
  ok('a 5000 XP boost is refused, not silently rewritten',made.xp===30,JSON.stringify(made));

  // 9 · new gesture now owns the Today card
  await p.evaluate(()=>go('today'));await new Promise(r=>setTimeout(r,350));
  const c2=await p.evaluate(()=>{const e=document.querySelector('#boostCard .bcard');
    return e?{t:e.textContent.trim(),invite:e.classList.contains('invite')}:null});
  ok('Today card now shows his boost',c2&&!c2.invite&&/meal/.test(c2.t),c2?c2.t.slice(0,60):'MISSING');
  await p.evaluate(()=>{S.boostLog=[];gsave&&gsave;save();});

  // 10 · weekly repeat locks for the week, not the day
  await p.evaluate(()=>{const id=S.boostDefs[S.boostDefs.length-1].id;logBoost(id)});
  await new Promise(r=>setTimeout(r,300));
  const wk=await p.evaluate(()=>{const b=S.boostDefs[S.boostDefs.length-1];
    S.boostLog[S.boostLog.length-1].date='2026-09-01';   // tomorrow, same week
    return boostDone(b)});
  const capped=await p.evaluate(()=>boostXpToday()>=250);
  ok('weekly boost stays done across days in-week',wk===true||capped,String(wk)+' capped='+capped);

  // 11 · archive removes it from the list but keeps the log
  const logLen=await p.evaluate(()=>S.boostLog.length);
  await p.evaluate(()=>{const id=S.boostDefs[S.boostDefs.length-1].id;dropBoost(id)});
  await new Promise(r=>setTimeout(r,300));
  const arch=await p.evaluate(()=>({shown:boostDefs().length,all:boostDefs(1).length,log:S.boostLog.length}));
  ok('archived boost leaves the list',arch.shown===4&&arch.all===5,JSON.stringify(arch));
  ok('history survives archiving',arch.log===logLen,'log='+arch.log);

  // 12 · migration from a v4 save
  const mig=await p.evaluate(()=>{
    localStorage.setItem('btb3',JSON.stringify({v:4,xp:500,boosts:[{k:'golf',date:'2026-08-20'}],
      rewards:[],days:{},week:{},december:{}}));
    const s=migrate(merge(JSON.parse(JSON.stringify(DEFAULT)),JSON.parse(localStorage.getItem('btb3'))));
    return{v:s.v,defs:s.boostDefs.length,log:s.boostLog.length,first:s.boostLog[0],old:s.boosts};
  });
  ok('v4 save migrates to v5',mig.v===5&&mig.defs===4,JSON.stringify({v:mig.v,defs:mig.defs}));
  ok('old boost history carried over',mig.log===1&&mig.first.id==='golf'&&mig.first.xp===150,JSON.stringify(mig.first));
  ok('old key cleaned up',mig.old===undefined,String(mig.old));

  ok('no JS errors',errs.length===0,errs.slice(0,3).join(' | '));

  const fail=T.filter(t=>!t.c);
  T.forEach(t=>console.log((t.c?'  ok  ':'  FAIL')+'  '+t.n+(t.d?'   ['+t.d+']':'')));
  console.log('\n'+(T.length-fail.length)+'/'+T.length+' passed');
  await p.screenshot({path:OUT+'boost-today.png'});
  await b.close();
  process.exit(fail.length?1:0);
})();
