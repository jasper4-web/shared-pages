/* STAGE 4 · THE LOOK — the aesthetics audit, guarded.
   The verdict it answers: "Today, Bank and Record are one app; Goals is a second app
   pasted into it." Every check below is a MEASUREMENT of the congruence gap it closes,
   not a check that some markup exists — the whole finding was that the markup existed
   and said the wrong thing. The blur test is the spine of this file: with the text
   taken away, three tiers must be visible, and exactly one object must be lit.        */
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
/* the shape the audit was run against: seven areas, one December goal each, all on the
   same date — which is what produced seven identical cards and the rainbow ladder */
const SEED=`(()=>{
  const dec=GM.addHorizon(G,{label:'Dec 25',date:'2026-12-25'});
  const sep=GM.addHorizon(G,{label:'End of September',date:'2026-09-30'});
  const areas=[['SANO','WORK'],['Trading','CAPITAL'],['LA Edible','WORK'],['Body','BODY'],
               ['Faith','FAITH'],['Mind','MIND'],['People','PEOPLE']];
  const made=areas.map(([n,d],i)=>{
    const a=GM.addArea(G,{name:n,domain:d});
    const g=GM.addGoal(G,{title:n+' — the December one',areaId:a.id,anchor:1,
      horizonId:i===2?sep.id:dec.id});
    return {a,g};});
  GM.addGoal(G,{title:'Fifty calls a day',areaId:made[0].a.id,parentId:made[0].g.id});
  made[0].g.wig=1;
  gsave();render();go('push');
})()`;
const view=async(p,l)=>{await p.evaluate(l=>{
  const t=[...document.querySelectorAll('.g2tab')].find(e=>new RegExp(l,'i').test(e.textContent));
  if(t)t.click();},l);await wait(450)};

(async()=>{
  // ══ 1 · THE BLUR TEST · three tiers, one lit object ══════════════════════
  let {b,p,errs}=await boot('2026-09-16T09:20:00');       // a Wednesday
  await p.evaluate(SEED);await wait(800);

  const ramp=await p.evaluate(()=>{
    const cs=e=>e?getComputedStyle(e):null;
    const ap=cs(document.querySelector('.g2apex'));
    const an=document.querySelector('.g2anc'),ans=cs(an);
    const sb=document.querySelector('.g2sub'),sbs=cs(sb);
    return{
      apexShadow:ap.boxShadow!=='none',
      /* anything else on the page carrying a glow is a second lit object */
      otherShadows:[...document.querySelectorAll('#pushBody *')]
        .filter(e=>!e.classList.contains('g2apex')&&getComputedStyle(e).boxShadow!=='none').length,
      apexT:parseFloat(cs(document.querySelector('.g2apex .t')).fontSize),
      ancT:parseFloat(cs(an.querySelector('.t')).fontSize),
      ancFam:cs(an.querySelector('.t')).fontFamily,
      subT:parseFloat(cs(sb.querySelector('.sb-t')).fontSize),
      ancLeft:parseFloat(ans.borderLeftWidth),
      ancTop:parseFloat(ans.borderTopWidth),
      ancLeftC:ans.borderLeftColor,ancTopC:ans.borderTopColor,
      subLeft:parseFloat(sbs.borderLeftWidth),subLeftC:sbs.borderLeftColor,
      /* the count that made it a rainbow ladder: cards outlined in a domain colour */
      outlined:[...document.querySelectorAll('.g2anc')].filter(e=>{
        const s=getComputedStyle(e);return s.borderTopColor===s.borderLeftColor}).length,
    };});
  ok('exactly one object on the page is lit',ramp.apexShadow&&ramp.otherShadows===0,
     'apex='+ramp.apexShadow+' others='+ramp.otherShadows);
  ok('type descends across the three tiers',ramp.apexT>ramp.ancT&&ramp.ancT>ramp.subT,
     `${ramp.apexT} > ${ramp.ancT} > ${ramp.subT}`);
  ok('...and border WEIGHT descends with it',ramp.ancLeft>ramp.subLeft,
     `anc ${ramp.ancLeft}px > sub ${ramp.subLeft}px`);
  ok('the December goal is display type, not body type',/Clash/.test(ramp.ancFam),ramp.ancFam);
  ok('the domain colour is a rule, not an outline',ramp.ancLeftC!==ramp.ancTopC&&ramp.ancLeft>=3,
     ramp.ancLeft+'px '+ramp.ancLeftC+' vs top '+ramp.ancTopC);
  ok('NO December card is outlined in its domain colour',ramp.outlined===0,'outlined='+ramp.outlined);
  ok('the working goal descends from the card above it',/0\.4|\/ 0\.4/.test(ramp.subLeftC),ramp.subLeftC);

  // ══ 2 · GOLD MEANS ONE THING ═════════════════════════════════════════════
  const gold=await p.evaluate(()=>{
    const G_=/224,\s*178,\s*94|rgb\(224, 178, 94\)/;
    const tab=document.querySelector('.g2tab.on'),ts=getComputedStyle(tab);
    /* a filled gold button = the gradient .btn without .gh */
    const btns=[...document.querySelectorAll('#pushBody button')].filter(e=>
      e.classList.contains('btn')&&!e.classList.contains('gh'));
    return{tabGold:G_.test(ts.borderColor)||G_.test(ts.color),
      tabColour:ts.borderTopColor,
      filled:btns.length,
      filledWhere:btns.map(e=>e.closest('.g2apex')?'apex':'elsewhere'),
      filledText:btns.map(e=>e.textContent.trim().slice(0,30))};});
  ok('the view tabs are no longer gold',!gold.tabGold,gold.tabColour);
  ok('exactly ONE filled gold button on the tab',gold.filled===1,'filled='+gold.filled);
  ok('...and it is in the apex, not the footer',gold.filledWhere[0]==='apex',gold.filledWhere.join(','));
  ok('...and it does not say "add more goals"',!/add/i.test(gold.filledText[0]||''),gold.filledText[0]);

  // ══ 3 · THE SEAM · the page finally has an entry point ════════════════════
  const seam=await p.evaluate(()=>{
    const a=document.querySelector('.g2apex');
    return{txt:a.textContent.replace(/\s+/g,' '),
      rows:a.querySelectorAll('.sm').length,
      btn:(a.querySelector('.apb')||{}).textContent||''};});
  ok('the apex names the one that matters',/FIRST/.test(seam.txt)&&/SANO — the December one/.test(seam.txt),
     seam.txt.slice(0,90));
  ok('...and the next block that is free',/NEXT OPEN/.test(seam.txt)&&/B\d/.test(seam.txt),
     (seam.txt.match(/NEXT OPEN[^·]*·[^·]*·[^A-Z]*/)||[''])[0]);
  ok('...and offers to join them in one tap',/^Put it on/.test(seam.btn.trim()),seam.btn.trim());
  /* F1-3: setting the flag used to change NOTHING on any screen */
  const took=await p.evaluate(async()=>{
    const before=GM.commitsOfWeek(G,weekKeyNow()).length;
    document.querySelector('.g2apex .apb').click();
    await new Promise(r=>setTimeout(r,400));
    const after=GM.commitsOfWeek(G,weekKeyNow());
    const w=GM.liveGoals(G).find(g=>g.wig);
    return{before,after:after.length,onWig:after.some(c=>c.goalId===w.id)};});
  ok('the button really commits a block',took.after===took.before+1,`${took.before} -> ${took.after}`);
  ok('...to the goal that is first',took.onWig);

  // nothing chosen yet: an invitation, never a deficit
  const none=await p.evaluate(async()=>{
    GM.liveGoals(G).forEach(g=>g.wig=0);gsave();render();
    await new Promise(r=>setTimeout(r,400));
    const a=document.querySelector('.g2apex');
    const btn=a.querySelector('.apb');
    return{txt:a.textContent.replace(/\s+/g,' '),
      ghost:btn?btn.classList.contains('gh'):false,
      btnTxt:btn?btn.textContent.trim():''};});
  ok('with nothing first, the seam invites rather than accuses',
     /Nothing is first yet/.test(none.txt)&&!/\d+ goals?/.test(none.btnTxt),none.btnTxt);
  ok('...and that invitation is not lit',none.ghost);

  // ══ 4 · THE REPEATED STRING ══════════════════════════════════════════════
  const rep=await p.evaluate(async()=>{
    GM.liveGoals(G).forEach(g=>{if(g.anchor)g.wig=0});
    const g=GM.anchors(G)[0];g.wig=1;gsave();render();
    await new Promise(r=>setTimeout(r,400));
    const t=document.getElementById('pushBody').innerText;
    return{dec25:(t.match(/Dec 25/gi)||[]).length,
      december:(t.match(/\bDECEMBER\b/g)||[]).length,
      sep:(t.match(/End of September/g)||[]).length};});
  ok('"Dec 25" is said once, not once per area',rep.dec25<=1,'occurrences='+rep.dec25);
  ok('the word DECEMBER is not stamped on every card',rep.december===0,'occurrences='+rep.december);
  ok('a goal with its OWN date still shows it',rep.sep>=1,'occurrences='+rep.sep);

  // ══ 5 · CRAFT, BY AREA ═══════════════════════════════════════════════════
  const craft=await p.evaluate(()=>{
    const de=document.documentElement;
    const bez=[...document.querySelectorAll('.g2addsub')].map(e=>Math.round(e.getBoundingClientRect().right));
    return{over:de.scrollWidth>window.innerWidth+1,width:de.scrollWidth,
      small:[...document.querySelectorAll('#pushBody *')].filter(e=>!e.children.length&&e.textContent.trim())
        .filter(e=>parseFloat(getComputedStyle(e).fontSize)<11).length,
      taps:[...document.querySelectorAll('#pushBody button')]
        .filter(e=>{const r=e.getBoundingClientRect();return r.height>0&&r.height<44}).length,
      addsubRight:Math.max.apply(null,bez.concat([0]))};});
  ok('"+ Add one under this" stays inside the bezel',craft.addsubRight<=378,'right='+craft.addsubRight);
  ok('no horizontal overflow at 390',!craft.over,craft.width);
  ok('no text under 11px',craft.small===0,craft.small);
  ok('every button clears 44px',craft.taps===0,craft.taps);

  // a 90-character unbroken title must not push the page sideways
  const longt=await p.evaluate(async()=>{
    GM.anchors(G)[0].title='x'.repeat(90);gsave();render();
    await new Promise(r=>setTimeout(r,400));
    return document.documentElement.scrollWidth;});
  ok('a 90-char unbroken title does not scroll the page',longt<=391,'scrollWidth='+longt);
  ok('no JS errors',errs.length===0,errs.join(' | '));
  await b.close();

  // ══ 6 · BY DATE IS RECORD'S QUOTA BOARD ══════════════════════════════════
  ({b,p,errs}=await boot('2026-09-16T09:20:00'));
  await p.evaluate(SEED);await wait(800);
  await view(p,'BY DATE');
  const byd=await p.evaluate(()=>{
    const boards=[...document.querySelectorAll('.g2board')];
    const rows=[...document.querySelectorAll('.g2board .g2row')];
    const first=rows[0]?getComputedStyle(rows[0]):null;
    return{boards:boards.length,
      floating:rows.filter(e=>parseFloat(getComputedStyle(e).borderTopWidth)>0).length,
      radius:first?first.borderRadius:'',
      areasOnRows:rows.filter(e=>e.querySelector('.ga')).length,rowCount:rows.length,
      /* the header carries the date; the rows must not repeat it */
      dateOnRows:rows.filter(e=>/\d+ days|Dec 25/i.test((e.querySelector('.gm')||{}).textContent||'')).length,
      headers:[...document.querySelectorAll('h2.sec.g2sec')].length,
      red:[...document.querySelectorAll('#pushBody *')].filter(e=>{
        const s=getComputedStyle(e);return /rgb\(2[0-9][0-9], [0-6][0-9], [0-6][0-9]\)/.test(s.color)}).length};});
  ok('BY DATE is ONE panel per date, not floating cards',byd.boards>=2&&byd.floating===0,
     `boards=${byd.boards} floating=${byd.floating}`);
  ok('...its rows are hairline-separated inside it',byd.radius==='0px',byd.radius);
  ok('every row names its area',byd.areasOnRows===byd.rowCount,`${byd.areasOnRows}/${byd.rowCount}`);
  ok('...and does NOT repeat the date the header already gives',byd.dateOnRows===0,'repeats='+byd.dateOnRows);
  ok('each group has one h2.sec header',byd.headers>=2,'headers='+byd.headers);

  // a date that has gone by is a fact, not a miss
  const passed=await p.evaluate(async()=>{
    G.horizons.forEach(h=>{if(/September/.test(h.label))h.date='2026-08-01'});
    gsave();render();await new Promise(r=>setTimeout(r,450));
    const els=[...document.querySelectorAll('#pushBody .passed')];
    const txt=document.getElementById('pushBody').innerText;
    return{marks:els.length,colour:els[0]?getComputedStyle(els[0]).color:'',
      anyRed:[...document.querySelectorAll('#pushBody *')].some(e=>{
        const c=getComputedStyle(e).color,m=c.match(/rgb\((\d+), (\d+), (\d+)\)/);
        return m&&+m[1]>170&&+m[2]<90&&+m[3]<90&&/PASSED/.test(e.textContent)}),
      says:/PASSED/.test(txt)};});
  ok('a passed date still says so',passed.says&&passed.marks>0,'marks='+passed.marks);
  ok('...and it is never red',!passed.anyRed,passed.colour);
  ok('no JS errors',errs.length===0,errs.join(' | '));
  await b.close();

  // ══ 7 · THE WEEK SPEAKS TODAY'S VOCABULARY ═══════════════════════════════
  ({b,p,errs}=await boot('2026-09-16T09:20:00'));
  await p.evaluate(SEED);await wait(700);
  await p.evaluate(()=>{
    const wk=weekKeyNow(),gs=GM.anchors(G);
    GM.commit(G,{goalId:gs[0].id,weekKey:wk,day:0,block:'b1'});
    GM.commit(G,{goalId:gs[3].id,weekKey:wk,day:0,block:'b2'});
    GM.commit(G,{goalId:gs[1].id,weekKey:wk,day:1,block:'b1'});
    setCommitQuiet(wk,2,'b1',gs[4].id);gsave();render();});
  await view(p,'THE WEEK');
  const wkv=await p.evaluate(()=>{
    const slots=[...document.querySelectorAll('.g2slot')];
    const withGoal=slots.filter(e=>e.querySelector('.dom'));
    const bars=withGoal.map(e=>getComputedStyle(e.querySelector('.dom')));
    return{total:slots.length,
      cols:getComputedStyle(slots[0]).gridTemplateColumns,
      bars:withGoal.length,
      barW:bars[0]?bars[0].width:'',
      /* the exact inversion the audit named: the area written as amber caps */
      amberText:slots.filter(e=>{const s=e.querySelector('.sa');
        return s&&/224, 178, 94/.test(getComputedStyle(s).color)}).length,
      distinctBarColours:new Set(bars.map(s=>s.backgroundColor)).size,
      boxes:slots.filter(e=>e.querySelector('.bc')).length,
      days:document.querySelectorAll('.g2day').length,
      hiddenDays:[...document.querySelectorAll('.wkd')].filter(e=>e.hidden).length,
      /* scoped: Today's own day door is also a .nu-door and it is first in the document */
      door:(document.querySelector('#pushBody .nu-door')||{}).textContent||''};});
  ok('all 20 slots are still in the DOM',wkv.total===20,'slots='+wkv.total);
  ok('the slot grid matches Today\'s block',/42px/.test(wkv.cols)&&/20px/.test(wkv.cols),wkv.cols);
  ok('a committed slot draws a 2.5px domain bar',wkv.bars>0&&wkv.barW==='2.5px',
     `bars=${wkv.bars} w=${wkv.barW}`);
  ok('...in the goal\'s OWN domain colour, not all in amber',wkv.distinctBarColours>1,
     'distinct='+wkv.distinctBarColours);
  ok('the area is no longer written in amber caps',wkv.amberText===0,'amber='+wkv.amberText);
  ok('a committed slot draws a checkbox, like Today',wkv.boxes===wkv.bars,`${wkv.boxes}/${wkv.bars}`);
  ok('five day headers, still',wkv.days===5,'days='+wkv.days);
  ok('the days already lived are behind a door',wkv.hiddenDays===2,'hidden='+wkv.hiddenDays);
  ok('...and the door says what is behind it',/ALREADY LIVED/.test(wkv.door)&&/COMMITTED/.test(wkv.door),
     wkv.door.trim());
  const opened=await p.evaluate(async()=>{
    [...document.querySelectorAll('.nu-door')].find(e=>/ALREADY LIVED/.test(e.textContent)).click();
    await new Promise(r=>setTimeout(r,400));
    return[...document.querySelectorAll('.wkd')].filter(e=>e.hidden).length;});
  ok('...and it opens',opened===0,'still hidden='+opened);
  const wcraft=await p.evaluate(()=>({
    over:document.documentElement.scrollWidth>window.innerWidth+1,
    small:[...document.querySelectorAll('#pushBody *')].filter(e=>!e.children.length&&e.textContent.trim())
      .filter(e=>parseFloat(getComputedStyle(e).fontSize)<11).length,
    taps:[...document.querySelectorAll('#pushBody button')]
      .filter(e=>{const r=e.getBoundingClientRect();return r.height>0&&r.height<44}).length}));
  ok('no horizontal overflow',!wcraft.over);
  ok('no text under 11px',wcraft.small===0,wcraft.small);
  ok('every button clears 44px',wcraft.taps===0,wcraft.taps);
  ok('no JS errors',errs.length===0,errs.join(' | '));
  await b.close();

  // ══ 8 · THE DEAD LIT COMPONENT IS GONE ═══════════════════════════════════
  ({b,p,errs}=await boot('2026-09-16T09:20:00'));
  const sheet=await p.evaluate(()=>[...document.querySelectorAll('style')].map(s=>s.textContent).join('\n'));
  /* a RULE, not the comment that records why it went */
  ok('.g2wig is out of the stylesheet',!/\.g2wig\s*[,{:]/.test(sheet));
  ok('...so only .g2apex carries the lit gradient',
     (sheet.match(/linear-gradient\(150deg,#1b1526,#110e1a 62%/g)||[]).length===1,
     (sheet.match(/linear-gradient\(150deg,#1b1526,#110e1a 62%/g)||[]).length);
  ok('the three hand-rolled section headers are gone',
     !/\.g2tier \.tr-h\{/.test(sheet)&&!/\.g2area \.ah\{/.test(sheet));
  await b.close();

  const f=T.filter(t=>!t.c);
  T.forEach(t=>console.log((t.c?'  ok  ':'  FAIL')+'  '+t.n+(t.d?'  ['+t.d+']':'')));
  console.log((T.length-f.length)+'/'+T.length+' passed');
  process.exit(f.length?1:0);
})();
