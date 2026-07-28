/* REWARD REQUIREMENTS · his decisions 2026-07-27
     · a requirement GATES the reward; the XP price still applies. Both must be true.
     · the window is THIS WEEK, resetting Monday.
   The two things that must never happen:
     1 · a reward he already had becomes harder to claim because of an update
     2 · a reward row turns into a tally of everything he hasn't done this week          */
const puppeteer=require('/Users/jaspersmind/build-arsenal/_verify/node_modules/puppeteer-core');
const URL=process.argv[2]||'file:///Users/jaspersmind/Documents/burn-the-boats/index.html';
const wait=ms=>new Promise(r=>setTimeout(r,ms));
const T=[];const ok=(n,c,d)=>T.push({n,c:!!c,d:d===undefined?'':String(d)});

(async()=>{
  const b=await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless:'new',args:['--allow-file-access-from-files','--no-sandbox']});
  const p=await b.newPage();
  await p.setViewport({width:440,height:956,deviceScaleFactor:2,isMobile:true,hasTouch:true});
  const errs=[];p.on('pageerror',e=>errs.push(e.message));
  // Wednesday, so "this week" has a Monday and a Tuesday behind it
  await p.evaluateOnNewDocument(()=>{const F=new Date('2026-09-16T14:20:00').getTime();
    const R=Date;class D extends R{constructor(...a){if(!a.length)super(F);else super(...a)}
    static now(){return F}} window.Date=D;try{localStorage.clear()}catch(e){}});
  await p.goto(URL,{waitUntil:'networkidle0'});await wait(1000);

  // ── 1 · MIGRATION IS INERT
  const mig=await p.evaluate(()=>({
    all:S.rewards.every(r=>Array.isArray(r.req)),
    empty:S.rewards.every(r=>r.req.length===0),
    conds:S.rewards.filter(r=>r.condition).length}));
  ok('every reward has a req array',mig.all);
  ok('...and every one arrives EMPTY',mig.empty);
  ok('his written conditions are untouched',mig.conds>0,mig.conds+' still have text');

  const inert=await p.evaluate(()=>{S.xp=5000;save();
    const before=S.rewards[0].done;claim(0);
    return {claimed:S.rewards[0].done!==before,xp:S.xp}});
  ok('a reward with no requirements claims on XP alone',inert.claimed,'xp now '+inert.xp);

  // ── 2 · THE GATE
  const gate=await p.evaluate(()=>{
    S.xp=5000;S.rewards[1].req=[{src:'win',id:'cooked',n:3}];save();
    const before=S.rewards[1].done;claim(1);
    return {blocked:S.rewards[1].done===before,xpKept:S.xp===5000,
            toast:(document.getElementById('toast')||{}).textContent||''}});
  ok('an unmet requirement blocks the claim even with the XP',gate.blocked);
  ok('...and does not take the XP',gate.xpKept);
  ok('the message names the requirement, not a list',
     /cooked/i.test(gate.toast)&&/0 of 3/.test(gate.toast),gate.toast);

  // paying the XP is not enough; doing it three times is
  const feed=await p.evaluate(()=>{
    const mon=mondayOf(new Date());
    for(let i=0;i<3;i++){const t=new Date(mon+'T00:00:00');t.setDate(t.getDate()+i);
      const d=day(iso(t));d.wins.cooked=1}
    save();
    const st=reqState(S.rewards[1]);
    const before=S.rewards[1].done;claim(1);
    return {hits:st.rows[0].hits,met:st.met,claimed:S.rewards[1].done!==before}});
  ok('three times this week counts as three',feed.hits===3,'hits='+feed.hits);
  ok('the requirement reads as met',feed.met);
  ok('and now it claims',feed.claimed);

  // XP gate still bites when the requirement IS met
  const broke=await p.evaluate(()=>{
    S.xp=0;S.rewards[2].req=[{src:'win',id:'cooked',n:1}];save();
    const before=S.rewards[2].done;claim(2);
    return {blocked:S.rewards[2].done===before,
            toast:(document.getElementById('toast')||{}).textContent||''}});
  ok('a met requirement does NOT bypass the XP price',broke.blocked);
  ok('...and the message switches to the XP',/XP short/i.test(broke.toast),broke.toast);

  // ── 3 · THE WINDOW RESETS MONDAY
  const nextWeek=await p.evaluate(()=>{
    // last week's Monday, three cooked — should count for nothing this week
    const mon=new Date(mondayOf(new Date())+'T00:00:00');mon.setDate(mon.getDate()-7);
    for(let i=0;i<3;i++){const t=new Date(mon);t.setDate(t.getDate()+i);
      const d=day(iso(t));d.wins.said_no=1}
    save();
    return reqHits({src:'win',id:'said_no',n:3})});
  ok('last week does not count toward this week',nextWeek===0,'hits='+nextWeek);

  // blocks are requirable too, from the same weekly walk
  const blk=await p.evaluate(()=>{
    const mon=mondayOf(new Date());const t=new Date(mon+'T00:00:00');
    day(iso(t)).done.gym=1;save();
    return {hits:reqHits({src:'block',id:'gym',n:2}),label:reqLabel({src:'block',id:'gym'})}});
  ok('a block can be a requirement',blk.hits===1,'hits='+blk.hits);
  ok('...and it is labelled, not shown as an id',!/^gym$/.test(blk.label),blk.label);

  // ── 4 · THE ROW NEVER BECOMES A WALL OF FAILURE
  const rows=await p.evaluate(async()=>{
    go('bank');await new Promise(r=>setTimeout(r,450));
    const rs=[...document.querySelectorAll('#bankBody .blk')];
    const txt=rs.map(e=>e.textContent.replace(/\s+/g,' ').trim());
    const sets=[...document.querySelectorAll('.rq-set')];
    /* only the text the APP writes — his own condition prose is his business, and one of his
       real conditions is "Anthony signed, and one more behind him", which is not an accusation. */
    const gen=[...document.querySelectorAll('#bankBody .blk .bd, #bankBody .blk .rq')]
      .map(e=>e.textContent.replace(/\s+/g,' ').trim());
    return {n:rs.length,txt,gen,
            accuses:gen.some(t=>/missed|failed|behind|broken|lost|didn't|haven't/i.test(t)),
            pips:document.querySelectorAll('.rq .pips i').length,
            /* EXISTING is not VISIBLE. The first cut rendered these <i>s with no CSS at all
               (every .pips rule was scoped to .win/.quota), so this counted 4 invisible dots
               and passed. Measure them. */
            pipsInvisible:[...document.querySelectorAll('.rq .pips i')]
              .filter(e=>{const r=e.getBoundingClientRect();return r.width<3||r.height<3}).length,
            pipsFilled:[...document.querySelectorAll('.rq .pips i.full')].length,
            setBtns:sets.length,
            setUnder44:sets.filter(e=>e.getBoundingClientRect().height<44).length,
            /* .blk is overflow:hidden — a control in the 20px last column gets sliced. */
            setClipped:sets.filter(e=>{const r=e.getBoundingClientRect(),
              row=e.closest('.blk').getBoundingClientRect();
              return r.right>row.right-1||r.width<40}).length,
            setLabels:sets.map(e=>e.textContent.trim())};
  });
  ok('the reward rows render',rows.n>0,'rows='+rows.n);
  ok('the terms show as pips',rows.pips>0,'pips='+rows.pips);
  ok('no app-written text says missed / failed / behind',!rows.accuses,rows.gen.join(' || ').slice(0,110));
  ok('the pips are actually VISIBLE, not just present',rows.pipsInvisible===0,
     rows.pipsInvisible+' of '+rows.pips+' render at zero size');
  ok('a done count fills its pips',rows.pipsFilled>0,'filled='+rows.pipsFilled);
  ok('every row has a terms control',rows.setBtns>0,'n='+rows.setBtns);
  ok('...and every one clears 44px',rows.setUnder44===0,rows.setUnder44+' under');
  ok('...and none of them is clipped by the row',rows.setClipped===0,
     rows.setClipped+' clipped · '+rows.setLabels.join(','));

  // ── 5 · HE CAN SET THE TERMS HIMSELF, WITHOUT A KEYBOARD
  const picker=await p.evaluate(async()=>{
    editRewardReq(3);await new Promise(r=>setTimeout(r,700));
    const picks=[...document.querySelectorAll('.rw-pick')];
    /* measure BEFORE tapping: rwBump() rebuilds #rwReqs, which detaches these nodes, and a
       detached node reports zero height. Measuring after the tap tested nothing. */
    const n=picks.length;
    const under44=picks.filter(e=>e.getBoundingClientRect().height<44).length;
    const inputs=document.querySelectorAll('#sheetA input').length;
    picks[0].click();
    document.querySelectorAll('.rw-pick')[0].click();  // — → ×1 → ×2, re-queried
    const after=document.querySelector('.rw-pick u').textContent.trim();
    return {n,after,under44,inputs};
  });
  ok('the picker offers every win plus the block standards',picker.n===8,'n='+picker.n);
  ok('tapping twice means twice',picker.after==='×2',picker.after);
  ok('every pick clears 44px',picker.under44===0,picker.under44+' under');
  ok('and it needs no typing at all',picker.inputs===0,'inputs='+picker.inputs);

  const saved=await p.evaluate(async()=>{
    saveRewardReq(3);await new Promise(r=>setTimeout(r,300));
    return {req:S.rewards[3].req,cost:S.rewards[3].cost}});
  ok('the terms save onto the reward',saved.req.length===1&&saved.req[0].n===2,JSON.stringify(saved.req));
  ok('...without touching its price',saved.cost>0,'cost='+saved.cost);

  const cleared=await p.evaluate(async()=>{
    editRewardReq(3);await new Promise(r=>setTimeout(r,700));
    for(let i=0;i<4;i++)document.querySelectorAll('.rw-pick')[0].click();                     // ×2 → ×3 ×4 ×5 → gone
    saveRewardReq(3);await new Promise(r=>setTimeout(r,250));
    return S.rewards[3].req.length});
  ok('cycling past five clears the requirement',cleared===0,'req='+cleared);

  ok('no JS errors anywhere',errs.length===0,errs.slice(0,2).join(' | '));

  await b.close();
  const f=T.filter(t=>!t.c);
  T.forEach(t=>console.log((t.c?'  ok  ':'  FAIL')+'  '+t.n+(t.d?'  ['+t.d+']':'')));
  console.log((T.length-f.length)+'/'+T.length+' passed');
  process.exit(f.length?1:0);
})();
