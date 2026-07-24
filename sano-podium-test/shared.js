/* Shared nav + footer — SANO Systems (D-0051 doctrine language).
   Requires industries.js to be loaded first.
   Each page sets <body data-page="home|product|industries|pricing|resources|about|demo">. */
(function () {
  var page = document.body.getAttribute('data-page') || '';
  var PHONE = '+18325557266', PHONE_D = '(832) 555-SANO', EMAIL = 'hello@sanosystems.com';
  var IND = window.SANO_INDUSTRIES || [];

  var indDrop = IND.map(function (i) {
    return '<a href="industry-' + i.slug + '.html"><b>' + i.label + '</b><span>' + i.tag + '</span></a>';
  }).join('');

  var HERE = (location.pathname.split('/').pop() || 'index.html');
  function here(f) { return HERE === f; }
  var caret = '<svg class="caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>';

  var nav =
    '<div class="ribbon"><span class="rib-dot" aria-hidden="true"></span> DESIGN TEST — SANO Systems inside Podium\'s structure &amp; flow. <b>Not our live site;</b> phone &amp; email shown are placeholders.</div>' +
    '<header><div class="wrap nav">' +
      '<a href="index.html" class="brand" aria-label="SANO Systems — home"><img src="sano-logo.png" alt="" width="30" height="30"/><span class="bt">SANO Systems</span></a>' +
      '<nav aria-label="Main"><ul class="nav-links">' +
        '<li class="' + (page === 'product' ? 'active' : '') + '"><a href="ai-employee.html"' + (page === 'product' ? (here('ai-employee.html') ? ' aria-current="page"' : ' aria-current="true"') : '') + '>What we run ' + caret + '</a>' +
          '<div class="dropdown">' +
            '<a href="ai-employee.html#frontdesk"><b>The front desk</b><span>Calls, texts &amp; booking, around the clock</span></a>' +
            '<a href="ai-employee.html#followup"><b>The follow-up</b><span>Chased until you get an answer</span></a>' +
            '<a href="ai-employee.html#reviews"><b>Reviews</b><span>Asked for after every job</span></a>' +
            '<a href="ai-employee.html#marketing"><b>Marketing &amp; payments</b><span>Campaigns, follow-up, pay-by-text</span></a>' +
            '<a href="ai-employee.html#command"><b>Your monthly report</b><span>What happened, in plain English</span></a>' +
            '<a href="sample-blueprint.html"><b>See a sample blueprint</b><span>The document a client actually approves</span></a>' +
          '</div>' +
        '</li>' +
        '<li class="' + (page === 'industries' ? 'active' : '') + '"><a href="industries.html"' + (page === 'industries' ? (here('industries.html') ? ' aria-current="page"' : ' aria-current="true"') : '') + '>Industries ' + caret + '</a>' +
          '<div class="dropdown">' + indDrop + '</div>' +
        '</li>' +
        '<li class="' + (page === 'pricing' ? 'active' : '') + '"><a href="pricing.html"' + (page === 'pricing' ? (here('pricing.html') ? ' aria-current="page"' : ' aria-current="true"') : '') + '>Pricing</a></li>' +
        '<li class="' + (page === 'resources' ? 'active' : '') + '"><a href="resources.html"' + (page === 'resources' ? (here('resources.html') ? ' aria-current="page"' : ' aria-current="true"') : '') + '>Resources</a></li>' +
        '<li class="' + (page === 'about' ? 'active' : '') + '"><a href="about.html"' + (page === 'about' ? (here('about.html') ? ' aria-current="page"' : ' aria-current="true"') : '') + '>Why SANO</a></li>' +
      '</ul></nav>' +
      '<div class="nav-right">' +
        '<a href="tel:' + PHONE + '" class="nav-phone">' + PHONE_D + '</a>' +
        '<a href="tel:' + PHONE + '" class="nav-call" aria-label="Call us"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.11 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg></a>' +
        '<a href="demo.html" class="btn btn-blue"' + (page === 'demo' ? ' aria-current="page"' : '') + '>Request a demo</a>' + '<button class="nav-burger" aria-label="Menu" aria-expanded="false" aria-controls="mobile-menu"><span></span><span></span><span></span></button>' +
      '</div>' +
    '</div></header>' +
    '<div class="mobile-menu" id="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu">' +
      '<button class="mm-close" aria-label="Close menu">&times;</button>' +
      '<a href="index.html" class="mm-home"><img src="sano-logo.png" alt="" width="26" height="26"/> SANO Systems</a>' +
      '<a href="ai-employee.html"' + (page === 'product' ? ' class="mm-on" aria-current="' + (here('ai-employee.html') ? 'page' : 'true') + '"' : '') + '>What we run</a>' +
      '<a href="industries.html"' + (page === 'industries' ? ' class="mm-on" aria-current="' + (here('industries.html') ? 'page' : 'true') + '"' : '') + '>Industries</a>' +
      '<a href="pricing.html"' + (page === 'pricing' ? ' class="mm-on" aria-current="' + (here('pricing.html') ? 'page' : 'true') + '"' : '') + '>Pricing</a>' +
      '<a href="resources.html"' + (page === 'resources' ? ' class="mm-on" aria-current="' + (here('resources.html') ? 'page' : 'true') + '"' : '') + '>Resources</a>' +
      '<a href="about.html"' + (page === 'about' ? ' class="mm-on" aria-current="' + (here('about.html') ? 'page' : 'true') + '"' : '') + '>Why SANO</a>' +
      '<a href="tel:' + PHONE + '">' + PHONE_D + '</a>' +
      '<a href="demo.html" class="btn btn-blue btn-lg">Request a demo</a>' +
    '</div>';

  var indFoot = IND.slice(0, 4).map(function (i) {
    return '<a href="industry-' + i.slug + '.html">' + i.label + '</a>';
  }).join('') + '<a href="industries.html">All industries →</a>';

  var foot =
    '<footer><div class="wrap">' +
      '<nav aria-label="Footer"><div class="foot-grid">' +
        '<div class="foot-brand">' +
          '<div class="brand"><img src="sano-logo.png" alt="" width="30" height="30"/> SANO Systems</div>' +
          '<p>You run your business. We run the AI.</p>' +
          '<a href="tel:' + PHONE + '" class="c">' + PHONE_D + '</a>' +
          '<a href="mailto:' + EMAIL + '" class="c">' + EMAIL + '</a>' +
        '</div>' +
        '<div class="foot-col"><h2 class="foot-col-h">What we run</h2>' +
          '<a href="ai-employee.html#frontdesk">The front desk</a><a href="ai-employee.html#reviews">Reviews</a>' +
          '<a href="ai-employee.html#marketing">Marketing &amp; payments</a><a href="sample-blueprint.html">Sample blueprint</a></div>' +
        '<div class="foot-col"><h2 class="foot-col-h">Industries</h2>' + indFoot + '</div>' +
        '<div class="foot-col"><h2 class="foot-col-h">Company</h2>' +
          '<a href="about.html">Why SANO</a><a href="resources.html">Resources</a><a href="pricing.html">Pricing</a>' +
          '<a href="about.html#bilingual">Se habla Español</a><a href="demo.html">Request a demo</a></div>' +
        
      '</div></nav>' +
      '<div class="foot-base"><span>© 2026 SANO Systems LLC. (Design test — not the live site.)</span>' +
        '<span><a href="privacy.html" style="color:#8A8A93">Privacy Policy</a> · <a href="terms.html" style="color:#8A8A93">Terms of Service</a></span></div>' +
    '</div></footer>';

  /* One source of truth for the risk-reversal + contact lines under every CTA.
     These were hardcoded in 18 files and had already drifted apart. */
  var GUARANTEE = '<strong>30 days from go-live, money-back on the monthly fee</strong> — taking it also ends the minimum term. ' +
    'Setup is <strong>half at kickoff, half at go-live</strong>; you don\'t owe the balance if we don\'t deliver your approved blueprint.';
  var CONTACT = 'Or <a href="sms:' + PHONE + '?&body=' + encodeURIComponent('I\'d like a demo for my business') + '">text us</a>, ' +
    'or call <a href="tel:' + PHONE + '">' + PHONE_D + '</a> — you\'ll get a person, not a queue. ' +
    '<em>(Placeholder number on this test site.)</em>';
  document.querySelectorAll('.cta-box').forEach(function (box) {
    var g = box.querySelector('.cta-guarantee'); if (g) g.innerHTML = GUARANTEE;
    var c = box.querySelector('.cta-phone'); if (c) c.innerHTML = CONTACT;
  });

  /* The picker's whole value is the branch it puts a visitor on. Every demo link
     that lives in the nav, the mobile menu or the footer used to drop it, so a
     visitor who read the dental blueprint arrived at a blank form. Carry it. */
  var IND_CTX = '';
  try {
    var q0 = new URLSearchParams(location.search).get('ind');
    var stored = null;
    try { stored = sessionStorage.getItem('sano_ind'); } catch (e0) {}
    IND_CTX = q0 || document.body.getAttribute('data-ind') || stored || '';
    if (IND_CTX && !IND.some(function (x) { return x.slug === IND_CTX; })) IND_CTX = '';
    if (IND_CTX) { try { sessionStorage.setItem('sano_ind', IND_CTX); } catch (e1) {} }
  } catch (e) { IND_CTX = ''; }
  function carryInd(force) {
    if (!IND_CTX) return;
    document.querySelectorAll('a[href^="demo.html"]').forEach(function (a) {
      var h = a.getAttribute('href') || '';
      var hash = h.indexOf('#') > -1 ? h.slice(h.indexOf('#')) : '';
      var base = hash ? h.slice(0, h.indexOf('#')) : h;
      var bits = base.split('?');
      var sp = new URLSearchParams(bits[1] || '');
      /* force: the visitor just changed their mind in the picker, so an older
         industry already on the link must be overwritten, not kept. */
      if (sp.get('ind') && !force) return;
      sp.set('ind', IND_CTX);
      a.setAttribute('href', bits[0] + '?' + sp.toString() + hash);
    });
    /* a dental visitor should never be handed the HVAC artifact */
    if (IND_CTX !== 'hvac') {
      document.querySelectorAll('a[href^="sample-blueprint.html"]').forEach(function (a) {
        if (!/sample blueprint/i.test(a.textContent)) return;
        a.setAttribute('href', 'pricing.html');
        a.textContent = 'See what it costs';
      });
    }
  }
  /* the picker is the centrepiece: clicking a tile must arm the branch for the
     nav, footer and mobile menu too, not just for the panel's own button. */
  window.SANO_setInd = function (slug) {
    if (!slug || !IND.some(function (x) { return x.slug === slug; })) return;
    IND_CTX = slug;
    try { sessionStorage.setItem('sano_ind', slug); } catch (e) {}
    carryInd(true);
  };

  var navMount = document.getElementById('site-nav');
  var footMount = document.getElementById('site-footer');
  if (navMount) navMount.innerHTML = nav;
  if (footMount) footMount.innerHTML = foot;
  carryInd();

  document.querySelectorAll('.nav-links > li').forEach(function (li) {
    var trigger = li.querySelector('a'); var dd = li.querySelector('.dropdown');
    if (!trigger || !dd) return;
    trigger.setAttribute('aria-expanded', 'false');
    dd.setAttribute('role', 'group');
    li.addEventListener('focusin', function () {
      if (li.classList.contains('dismissed')) return;
      trigger.setAttribute('aria-expanded', 'true');
    });
    li.addEventListener('focusout', function (e) {
      if (!li.contains(e.relatedTarget)) { trigger.setAttribute('aria-expanded', 'false'); li.classList.remove('dismissed'); }
    });
    li.addEventListener('mouseleave', function () { li.classList.remove('dismissed'); });
    li.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        li.classList.add('dismissed');
        trigger.setAttribute('aria-expanded', 'false');
        trigger.focus();
      } else if (li.classList.contains('dismissed')) {
        li.classList.remove('dismissed');
      }
    });
  });

  var burger = document.querySelector('.nav-burger');
  var menu = document.querySelector('.mobile-menu');
  function setMenu(open) {
    if (!menu || !burger) return;
    menu.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.style.overflow = open ? 'hidden' : '';
    [document.querySelector('header'), document.getElementById('main'), document.getElementById('site-footer'), document.querySelector('.skip')]
      .forEach(function (el) { if (!el) return; if (open) { el.setAttribute('inert',''); } else { el.removeAttribute('inert'); } });
    var skip = document.querySelector('.skip');
    if (skip) { if (open) { skip.setAttribute('tabindex','-1'); } else { skip.removeAttribute('tabindex'); } }
  }
  var closeBtn = menu ? menu.querySelector('.mm-close') : null;
  if (burger && menu) {
    burger.addEventListener('click', function () {
      var open = !menu.classList.contains('open');
      setMenu(open);
      if (open) { var f = menu.querySelector('.mm-close') || menu.querySelector('a'); if (f) f.focus(); }
    });
    if (closeBtn) closeBtn.addEventListener('click', function () { setMenu(false); burger.focus(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && menu.classList.contains('open')) { setMenu(false); burger.focus(); } });
    menu.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
    /* rotating to desktop must never leave the scroll lock on */
    window.addEventListener('resize', function () { if (window.innerWidth > 1080) setMenu(false); });
  }

  /* the header/ribbon mount after the browser resolved the fragment — re-scroll */
  if (location.hash) {
    var target = document.querySelector(location.hash);
    if (target) requestAnimationFrame(function () { target.scrollIntoView(); });
  }

  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); } });
  }, { threshold: 0, rootMargin: '0px 0px -30px 0px' });
  document.querySelectorAll('.reveal').forEach(function (el) { obs.observe(el); });
  /* belt-and-braces: never leave content invisible if the observer misbehaves */
  setTimeout(function () { document.querySelectorAll('.reveal:not(.in)').forEach(function (el) { var r = el.getBoundingClientRect(); if (r.top < window.innerHeight * 1.5) el.classList.add('in'); }); }, 2500);
})();
