/* LEDGER.JS — Phase 1 gate: ONE DOOR IN, ONE DOOR OUT.
   Every XP movement is a ledger entry; the ledger always sums to S.xp; a payment is
   reversible on the day it was written and permanent after; the accidental-tap bug is
   dead everywhere, and un-tap/re-tap can never be farmed for inflation.               */
const puppeteer=require('/Users/jaspersmind/build-arsenal/_verify/node_modules/puppeteer-core');
const URL=process.argv[2]||'file:///Users/jaspersmind/Documents/burn-the-boats/index.html';
const wait=ms=>new Promise(r=>setTimeout(r,ms));
const T=[];const ok=(n,c,d)=>T.push({n,c:!!c,d:d===undefined?'':String(d)});
async function boot(clock,pre){
  const b=await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless:'new',args:['--allow-file-access-from-files','--no-sandbox']});
  const p=await b.newPage();
  await p.setViewport({width:390,height:844,deviceScaleFactor:2,isMobile:true,hasTouch:true});
  const errs=[];p.on('pageerror',e=>errs.push(e.message));
  await p.evaluateOnNewDocument(`(()=>{const F=new Date('${clock}').getTime();
    const R=Date;class D extends R{constructor(...a){if(!a.length)super(F);else super(...a)}
    static now(){return F}} window.Date=D;try{localStorage.clear();${pre||''}}catch(e){}})()`);
  await p.goto(URL,{waitUntil:'networkidle0'});await wait(900);
  return {b,p,errs};
}
const SUM='S.ledger.reduce((a,e)=>a+e.xp,0)';
(async()=>{
  // ══ 1 · THE BALANCE IS THE LEDGER ════════════════════════════════════════
  let {b,p,errs}=await boot('2026-09-16T09:20:00');
  const flow=await p.evaluate(async(SUM)=>{
    const out={steps:[]};
    const step=n=>out.steps.push(n+': xp='+S.xp+' sum='+eval(SUM)+' entries='+S.ledger.length);
    step('fresh');
    tapWin('cooked');step('win');
    markDone('walk');step('block');
    return out;},SUM);
  ok('fresh install starts at zero, ledger empty',/fresh: xp=0 sum=0 entries=0/.test(flow.steps[0]),flow.steps[0]);
  ok('a win writes one entry and the sums agree',/win: xp=20 sum=20 entries=1/.test(flow.steps[1]),flow.steps[1]);
  ok('a block writes another, sums still agree',/block: xp=45 sum=45 entries=2/.test(flow.steps[2]),flow.steps[2]);

  // ══ 2 · THE ACCIDENTAL TAP, EVERYWHERE ═══════════════════════════════════
  const untap=await p.evaluate(async(SUM)=>{
    const before=S.xp;
    tapWin('cooked');                                     // untap — the accident corrected
    const afterUn={xp:S.xp,sum:eval(SUM),wins:!!day().wins.cooked,credited:!!day().credited['win:cooked']};
    tapWin('cooked');                                     // honest re-tap
    const afterRe={xp:S.xp,sum:eval(SUM)};
    /* the farm test: 5 full tap/untap cycles start and end in the same place */
    for(let i=0;i<5;i++){tapWin('cooked');tapWin('cooked')}
    return {before,afterUn,afterRe,final:{xp:S.xp,sum:eval(SUM)},winOn:!!day().wins.cooked};},SUM);
  ok('untap returns the XP',untap.afterUn.xp===untap.before-20&&untap.afterUn.sum===untap.afterUn.xp,
     JSON.stringify(untap.afterUn));
  ok('...and frees the day record and the dedup key',!untap.afterUn.wins&&!untap.afterUn.credited);
  ok('an honest re-tap pays again',untap.afterRe.xp===untap.before&&untap.afterRe.sum===untap.afterRe.xp);
  ok('tap/untap cycles can never inflate',untap.final.sum===untap.final.xp&&
     (untap.final.xp===untap.before||untap.final.xp===untap.before-20),JSON.stringify(untap.final));

  // undoing a DONE block returns the block pay
  const blk=await p.evaluate(async(SUM)=>{
    const before=S.xp;unDone('walk');
    return {before,xp:S.xp,sum:eval(SUM),done:!!day().done.walk};},SUM);
  ok('undoing a block returns its 25',blk.xp===blk.before-25&&blk.sum===blk.xp&&!blk.done,JSON.stringify(blk));

  // a finished RUN pays through the one door and unDone returns it
  const run2=await p.evaluate(async(SUM)=>{
    day().done['b1']=true;                                  // simulate the state finishRun leaves
    award('run:b1:'+today(),65,'clean run',null);
    const paid={xp:S.xp,sum:eval(SUM)};
    unDone('b1');
    return {paid,after:{xp:S.xp,sum:eval(SUM)}};},SUM);
  ok('a clean run pays 65 through the door',run2.paid.sum===run2.paid.xp,JSON.stringify(run2.paid));
  ok('...and undoing the block returns it',run2.after.xp===run2.paid.xp-65&&run2.after.sum===run2.after.xp);

  // re-marking done → miss takes the payment back
  const remark=await p.evaluate(async(SUM)=>{
    markDone('gym');const paid=S.xp;
    ccMark('gym','miss');
    return {paid,xp:S.xp,sum:eval(SUM),miss:!!day().miss.gym,done:!!day().done.gym};},SUM);
  ok('done → miss refunds the block',remark.xp===remark.paid-25&&remark.sum===remark.xp&&remark.miss&&!remark.done,
     JSON.stringify(remark));
  ok('no JS errors',errs.length===0,errs.join(' | '));
  await b.close();

  // ══ 3 · THE SEAL — yesterday keeps its XP ════════════════════════════════
  ({b,p,errs}=await boot('2026-09-16T09:20:00'));
  const sealed=await p.evaluate(async(SUM)=>{
    /* write a win as if paid YESTERDAY: entry dated yesterday, credited on yesterday's record */
    const y='2026-09-15';
    S.days[y]=S.days[y]||{done:{},miss:{},wait:{},produced:{},focus:{},prio:[],wins:{cooked:1},off:0,credited:{'win:cooked':20}};
    S.xp+=20;S.ledger.push({k:'win:cooked',xp:20,d:y,g:null,t:'Cooked'});save();
    const before=S.xp;
    const back=refund('win:cooked');                       /* today's record has no credit — must refuse */
    return {before,back,xp:S.xp,sum:eval(SUM)};},SUM);
  ok('a payment from a sealed day cannot be refunded',sealed.back===0&&sealed.xp===sealed.before,
     JSON.stringify(sealed));
  ok('no JS errors',errs.length===0,errs.join(' | '));
  await b.close();

  // ══ 4 · BOOSTS — undo returns exactly the last payment ═══════════════════
  ({b,p,errs}=await boot('2026-09-16T19:00:00'));
  const boost=await p.evaluate(async(SUM)=>{
    const id=S.boostDefs.find(x=>x.id==='read').id;
    logBoost(id);await new Promise(r=>setTimeout(r,150));
    const paid={xp:S.xp,sum:eval(SUM),log:boostLog().length};
    undoBoost(id);
    return {paid,after:{xp:S.xp,sum:eval(SUM),log:boostLog().length}};},SUM);
  ok('a boost pays through the ledger',boost.paid.xp>0&&boost.paid.sum===boost.paid.xp,JSON.stringify(boost.paid));
  ok('undoing it returns the XP and the log entry',boost.after.xp===0&&boost.after.sum===0&&boost.after.log===0,
     JSON.stringify(boost.after));
  ok('no JS errors',errs.length===0,errs.join(' | '));
  await b.close();

  // ══ 5 · SPENDING lands in the ledger; the old save opens clean ═══════════
  ({b,p,errs}=await boot('2026-09-16T09:20:00'));
  const spend=await p.evaluate(async(SUM)=>{
    S.xp=1000;S.ledger=[{k:'opening',xp:1000,d:today(),g:null,t:'seed'}];save();
    claim(0);                                              /* Nice restaurant date · 900, no req */
    return {xp:S.xp,sum:eval(SUM),done:S.rewards[0].done,last:S.ledger[S.ledger.length-1]};},SUM);
  ok('claiming a reward writes a negative entry',spend.done===1&&spend.xp===100&&spend.sum===100,
     JSON.stringify({xp:spend.xp,sum:spend.sum}));
  ok('...that names the reward',spend.last.xp===-900&&/restaurant/i.test(spend.last.t),JSON.stringify(spend.last));
  await b.close();

  // an existing save (xp>0, no ledger) gets an opening entry at boot
  ({b,p,errs}=await boot('2026-09-16T09:20:00',
    `localStorage.setItem('btb3',JSON.stringify({v:4,xp:730,days:{},week:{},ms:{},conf:{},parked:{},offScript:{},push:{gate:{}}}))`));
  const mig=await p.evaluate((SUM)=>({xp:S.xp,sum:eval(SUM),n:S.ledger.length,
    first:S.ledger[0]&&S.ledger[0].k}),SUM);
  ok('an old save opens with its balance as one entry',mig.xp===730&&mig.sum===730&&mig.n===1&&mig.first==='opening',
     JSON.stringify(mig));
  ok('no JS errors',errs.length===0,errs.join(' | '));
  await b.close();

  // ══ 6 · THE OLD DOORS ARE BRICKED ════════════════════════════════════════
  ({b,p}=await boot('2026-09-16T09:20:00'));
  const src=await p.evaluate(()=>document.documentElement.outerHTML);
  ok('gainXP is gone',!/function gainXP/.test(src));
  ok('finishRun has no inline credit copy',!/d\.credited\[key\]=xp/.test(src));
  ok('the only S.xp writers are the door and the register',
     (src.match(/S\.xp[+][=]/g)||[]).length===1&&(src.match(/S\.xp[-][=]/g)||[]).length<=2,
     'plus='+(src.match(/S\.xp[+][=]/g)||[]).length+' minus='+(src.match(/S\.xp[-][=]/g)||[]).length);
  await b.close();

  const f=T.filter(t=>!t.c);
  T.forEach(t=>console.log((t.c?'  ok  ':'  FAIL')+'  '+t.n+(t.d?'  ['+t.d+']':'')));
  console.log((T.length-f.length)+'/'+T.length+' passed');
  process.exit(f.length?1:0);
})();
