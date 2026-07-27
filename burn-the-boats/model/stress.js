const puppeteer=require('/Users/jaspersmind/build-arsenal/_verify/node_modules/puppeteer-core');
const OUT='/private/tmp/claude-501/-Users-jaspersmind/b8fc4d6b-2299-4e39-b7cd-dae1be058193/scratchpad/';
const URL=process.argv[2]||'file:///Users/jaspersmind/Documents/burn-the-boats/index.html';

// real iPhone CSS widths, including the big ones I never tested
const SIZES=[[375,667,'SE'],[390,844,'13/14'],[393,852,'15/16'],[414,896,'11 XR'],[430,932,'15 Pro Max'],[440,956,'16 Pro Max']];
// day + time combos that change what the app renders
const CLOCKS=[['2026-08-31T09:20:00','Mon 09:20'],['2026-08-31T14:50:00','Mon 14:50'],
              ['2026-09-04T17:10:00','Fri 17:10'],['2026-09-05T11:00:00','Sat 11:00'],
              ['2026-09-06T11:00:00','Sun 11:00']];

const AUDIT=`(()=>{
  const bad={over:[],small:[],tap:[],hoverflow:null,covered:[]};
  const de=document.documentElement;
  if(de.scrollWidth>window.innerWidth+1) bad.hoverflow=de.scrollWidth+'>'+window.innerWidth;
  // every visible fixed/sticky overlay
  const fixed=[...document.querySelectorAll('body *')].filter(el=>{
    const cs=getComputedStyle(el);
    if(cs.position!=='fixed'&&cs.position!=='sticky')return false;
    if(cs.display==='none'||cs.visibility==='hidden'||parseFloat(cs.opacity)===0)return false;
    if(cs.pointerEvents==='none')return false;               // grain overlay etc
    const r=el.getBoundingClientRect(); return r.width>4&&r.height>4;
  });
  // content that must never be hidden by them
  const app=document.querySelector('.app'); if(!app)return bad;
  [...app.querySelectorAll('*')].forEach(el=>{
    if(el.children.length)return;
    const txt=(el.textContent||'').trim(); if(!txt)return;
    const cs=getComputedStyle(el);
    if(cs.display==='none'||cs.visibility==='hidden')return;
    const r=el.getBoundingClientRect();
    if(r.width<4||r.height<4)return;
    if(r.bottom<0||r.top>window.innerHeight)return;          // off-screen, fine
    /* skip anything already clipped by an ancestor's overflow — it is not on
       screen at all, so nothing can be said to be "covering" it */
    let a=el.parentElement, clipped=false;
    while(a&&a!==document.body){
      const ac=getComputedStyle(a);
      if(ac.overflow!=='visible'||ac.overflowY!=='visible'){
        const ar=a.getBoundingClientRect();
        if(r.bottom>ar.bottom+1||r.top<ar.top-1||r.right>ar.right+1){clipped=true;break}
      }
      if(parseFloat(ac.opacity)<0.3){clipped=true;break}     // faded-out layers too
      a=a.parentElement;
    }
    if(clipped)return;
    const fs=parseFloat(cs.fontSize);
    if(fs<11) bad.small.push((el.className||el.tagName)+':'+fs);
    fixed.forEach(f=>{
      if(f.contains(el)||el.contains(f))return;
      const q=f.getBoundingClientRect();
      /* Only a BOTTOM-anchored overlay can make content permanently unreachable.
         A top sticky/fixed bar is always escapable by scrolling up. */
      if(q.bottom < window.innerHeight - 6) return;
      const ix=Math.max(0,Math.min(r.right,q.right)-Math.max(r.left,q.left));
      const iy=Math.max(0,Math.min(r.bottom,q.bottom)-Math.max(r.top,q.top));
      if(ix>6&&iy>6) bad.covered.push((f.className||f.tagName)+' covers "'+txt.slice(0,26)+'"');
    });
  });
  [...document.querySelectorAll('button,a,input,select,textarea')].forEach(el=>{
    const cs=getComputedStyle(el); if(cs.display==='none'||cs.visibility==='hidden')return;
    const r=el.getBoundingClientRect(); if(r.width<2||r.height<2)return;
    if(r.height<44) bad.tap.push((el.className||el.textContent||'').toString().trim().slice(0,20)+':'+Math.round(r.height));
  });
  bad.covered=[...new Set(bad.covered)]; bad.small=[...new Set(bad.small)]; bad.tap=[...new Set(bad.tap)];
  return bad;
})()`;

(async()=>{
 let fails=0, checks=0;
 const b=await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  args:['--allow-file-access-from-files','--no-sandbox']});
 for(const [iso,when] of CLOCKS){
  for(const [w,h,name] of SIZES){
   const p=await b.newPage();
   const errs=[];
   p.on('pageerror',e=>errs.push(e.message));
   p.on('console',m=>{if(m.type()==='error'&&!m.text().includes('favicon'))errs.push(m.text())});
   await p.setViewport({width:w,height:h,deviceScaleFactor:2});
   await p.evaluateOnNewDocument(`(()=>{try{localStorage.clear()}catch(e){}
     const F=new Date('${iso}').getTime(),_D=Date;
     function D(...a){return a.length?new _D(...a):new _D(F)}
     D.now=()=>F;D.parse=_D.parse;D.UTC=_D.UTC;D.prototype=_D.prototype;window.Date=D;})()`);
   await p.goto(URL,{waitUntil:'networkidle0'});
   await new Promise(r=>setTimeout(r,900));
   // dismiss the sabbath if it's up (it's a real button)
   await p.evaluate(()=>{const b=document.getElementById('sabLook');
     if(b&&document.getElementById('sabbath').classList.contains('on'))b.click()});
   await new Promise(r=>setTimeout(r,400));

   for(const [view,label] of [['today','TODAY'],['push','GOALS'],['bank','BANK'],['record','RECORD']]){
     await p.evaluate(v=>go(v),view); await new Promise(r=>setTimeout(r,450));
     // extra Goals states: focus a goal (which SHOWS the crumb pill) and open the week
     const states=view==='push'?[['',''],['focus','+focus'],['week','+week']]:[['','']];
     for(const [st,tag] of states){
       if(st==='focus') await p.evaluate(()=>{try{pushFocus('sano')}catch(e){}});
       if(st==='week')  await p.evaluate(()=>{try{pushFocus('sano');pushZoom()}catch(e){}});
       await new Promise(r=>setTimeout(r,350));
       for(const pos of ['top','bottom']){
         await p.evaluate(t=>{const e=document.scrollingElement;e.scrollTop=t==='top'?0:e.scrollHeight},pos);
         await new Promise(r=>setTimeout(r,250));
         const a=await p.evaluate(AUDIT); checks++;
         const probs=[];
         if(a.hoverflow) probs.push('H-OVERFLOW '+a.hoverflow);
         /* Coverage only matters at scroll END: there, hidden content can never be
            revealed. Mid-scroll overlap by a sticky/fixed bar is normal behaviour. */
         if(pos==='bottom'&&a.covered.length) probs.push('UNREACHABLE: '+a.covered.slice(0,2).join(' | '));
         if(a.small.length) probs.push('<11px: '+a.small.slice(0,2).join(','));
         if(a.tap.length) probs.push('TAP<44: '+a.tap.slice(0,2).join(','));
         if(errs.length) probs.push('JS: '+errs[0]);
         if(probs.length){fails++;console.log(`FAIL ${when} ${name}(${w}) ${label}${tag} @${pos}\n     ${probs.join('\n     ')}`)}
       }
     }
   }
   await p.close();
  }
 }
 console.log(`\n${checks} checks · ${fails} failures`);
 await b.close();})();
