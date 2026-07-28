/* OWNED.JS — Phase 2 gate: THE WINS AND THE STANDARDS ARE HIS.
   WINS and QUOTAS are seeds. He can rename, re-price, re-home, retire and invent both —
   and every surface (Bank, run-end suggestions, quota board, reward terms) follows HIS
   version, while history written against a retired def never breaks.                   */
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
  await p.goto(URL,{waitUntil:'networkidle0'});await wait(900);
  return {b,p,errs};
}
(async()=>{
  let {b,p,errs}=await boot('2026-09-16T19:00:00');    // evening — cooking hours, for elseCands

  // ══ 1 · THE SEED — a fresh install matches the old constants exactly ═════
  const seed=await p.evaluate(()=>({
    wins:S.winDefs.map(w=>w.k+':'+w.xp).join(','),
    quotas:S.quotaDefs.map(q=>q.id+':'+q.n).join(','),
    winsEq:JSON.stringify(S.winDefs)===JSON.stringify(WINS),
    quotasEq:JSON.stringify(S.quotaDefs)===JSON.stringify(QUOTAS)}));
  ok('fresh winDefs === the old WINS, verbatim',seed.winsEq,seed.wins);
  ok('fresh quotaDefs === the old QUOTAS, verbatim',seed.quotasEq,seed.quotas);

  // ══ 2 · RENAME + RE-PRICE — every surface follows his version ════════════
  const ren=await p.evaluate(async()=>{
    const w=winByK('cooked');w.n='Fed the house';w.xp=35;save();
    go('bank');await new Promise(r=>setTimeout(r,400));
    const bank=document.getElementById('bankBody').innerText;
    tapWin('cooked');
    const paid=S.xp,entry=S.ledger[S.ledger.length-1];
    tapWin('cooked');                                    /* untap — so elseCands can offer it */
    return {bank:/Fed the house/.test(bank)&&/\+35/.test(bank),paid,entry};});
  ok('a renamed, re-priced win shows in the Bank',ren.bank);
  ok('...and PAYS his price through the ledger',ren.paid===35&&ren.entry.xp===35&&/Fed the house/.test(ren.entry.t),
     JSON.stringify(ren.entry));
  const sug=await p.evaluate(()=>elseCands('b4').map(w=>w.n));
  ok('the run-end question offers his word for it',sug.some(n=>/Fed the house/.test(n)),sug.join(' | '));

  // ══ 3 · INVENT — a custom win is a first-class citizen ═══════════════════
  const inv=await p.evaluate(async()=>{
    S.winDefs.push({k:'wtest1',n:'Watered the plants',xp:15,dom:'MIND'});save();render();
    await new Promise(r=>setTimeout(r,400));
    const shown=/Watered the plants/.test(document.getElementById('bankBody').innerText);
    tapWin('wtest1');const paid=S.xp;
    tapWin('wtest1');const refunded=S.xp;               /* accidental tap — reversible */
    return {shown,paid,refunded,sum:S.ledger.reduce((a,e)=>a+e.xp,0)};});
  ok('an invented win shows and taps',inv.shown&&inv.paid===15,'paid='+inv.paid);
  ok('...and is refundable like everything else',inv.refunded===0&&inv.sum===0,JSON.stringify(inv));

  // ══ 4 · THE STANDARDS — his counts, his subjects ═════════════════════════
  const std=await p.evaluate(async()=>{
    qBump('win','cooked');                               /* 4 → 5 */
    const bumped=S.quotaDefs.find(q=>q.id==='cooked').n;
    saveStandard('win','wtest1');                        /* a standard on his OWN win */
    const mine=S.quotaDefs.find(q=>q.id==='wtest1');
    go('bank');await new Promise(r=>setTimeout(r,400));
    const bank=document.getElementById('bankBody').innerText;
    return {bumped,mine:mine&&mine.n,shows:/Watered the plants/.test(bank)&&/3× a week/.test(bank)};});
  ok('tapping a standard raises its count',std.bumped===5,'n='+std.bumped);
  ok('a standard lands on a win HE invented',std.mine===3&&std.shows);
  const board=await p.evaluate(async()=>{
    go('record');await new Promise(r=>setTimeout(r,400));
    return document.getElementById('recordBody')?document.getElementById('recordBody').innerText
      :document.body.innerText;});
  ok('the quota board reads his defs, not the constants',
     /Fed the house/.test(board)&&/Watered the plants/.test(board),board.slice(0,60));

  // ══ 5 · RETIRE — archives, never deletes; history survives ═══════════════
  const ret=await p.evaluate(async()=>{
    /* he did it twice earlier this week, then retires it */
    day().wins['wtest1']=1;save();
    dropWin('wtest1');
    go('bank');await new Promise(r=>setTimeout(r,400));
    const bank=document.getElementById('bankBody').innerText;
    return {gone:!/Watered the plants/.test(bank),
      def:!!S.winDefs.find(w=>w.k==='wtest1'&&w.arc),
      quotaGone:!S.quotaDefs.find(q=>q.id==='wtest1'&&!q.arc),
      history:!!day().wins['wtest1'],
      resolves:(winByK('wtest1')||{}).n==='Watered the plants'};});
  ok('a retired win leaves every list',ret.gone&&ret.quotaGone);
  ok('...but is archived, not deleted',ret.def);
  ok('...its history stays and still resolves to his words',ret.history&&ret.resolves);

  // ══ 6 · REWARD TERMS follow his defs ═════════════════════════════════════
  const req=await p.evaluate(()=>{
    const opts=REQABLE();
    return {renamed:opts.some(o=>/Fed the house/.test(o.label)),
      retired:!opts.some(o=>/Watered the plants/.test(o.label))};});
  ok('the reward-terms picker offers his renamed win',req.renamed);
  ok('...and not the retired one',req.retired);

  // ══ 7 · AN OLD SAVE keeps its own defs across a fresh boot ═══════════════
  // (a raw reload would re-run this harness's storage-clearing boot script, so the
  //  save is carried into a brand-new browser instead — the honest device test)
  const saved=await p.evaluate(()=>{save();return localStorage.getItem('btb3')});
  const carry=await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless:'new',args:['--allow-file-access-from-files','--no-sandbox']});
  const p2=await carry.newPage();
  await p2.setViewport({width:390,height:844,deviceScaleFactor:2,isMobile:true,hasTouch:true});
  await p2.evaluateOnNewDocument(`(()=>{try{localStorage.clear();
    localStorage.setItem('btb3',${JSON.stringify(saved)})}catch(e){}})()`);
  await p2.goto(URL,{waitUntil:'networkidle0'});await wait(900);
  const after=await p2.evaluate(()=>({
    name:(winByK('cooked')||{}).n,price:(winByK('cooked')||{}).xp,
    n:S.quotaDefs.find(q=>q.id==='cooked').n,
    arc:!!S.winDefs.find(w=>w.k==='wtest1'&&w.arc)}));
  ok('his edits survive a fresh boot untouched',after.name==='Fed the house'&&after.price===35&&after.n===5&&after.arc,
     JSON.stringify(after));
  await carry.close();

  // ══ 8 · CRAFT on the new Bank surfaces ═══════════════════════════════════
  await p.evaluate(async()=>{go('bank');render();await new Promise(r=>setTimeout(r,400))});
  const craft=await p.evaluate(()=>({
    over:document.documentElement.scrollWidth>window.innerWidth+1,
    small:[...document.querySelectorAll('#bankBody *')].filter(e=>!e.children.length&&e.textContent.trim())
      .filter(e=>parseFloat(getComputedStyle(e).fontSize)<11).length,
    taps:[...document.querySelectorAll('#bankBody button')]
      .filter(e=>{const r=e.getBoundingClientRect();return r.height>0&&r.height<44}).length}));
  ok('no horizontal overflow',!craft.over);
  ok('no text under 11px',craft.small===0,craft.small);
  ok('every button clears 44px',craft.taps===0,craft.taps);
  ok('no JS errors',errs.length===0,errs.join(' | '));
  await b.close();

  const f=T.filter(t=>!t.c);
  T.forEach(t=>console.log((t.c?'  ok  ':'  FAIL')+'  '+t.n+(t.d?'  ['+t.d+']':'')));
  console.log((T.length-f.length)+'/'+T.length+' passed');
  process.exit(f.length?1:0);
})();
