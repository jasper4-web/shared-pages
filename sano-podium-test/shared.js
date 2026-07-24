/* Shared nav + footer — SANO Systems (D-0051 doctrine language).
   Requires industries.js to be loaded first.
   Each page sets <body data-page="home|product|industries|pricing|resources|about|demo">. */
(function () {
  var page = document.body.getAttribute('data-page') || '';
  var PHONE = '+18325557266', PHONE_D = '(832) 555-SANO', EMAIL = 'hello@sanosystems.com';
  var IND = window.SANO_INDUSTRIES || [];

  var indDrop = IND.map(function (i) {
    return '<a href="industry.html?ind=' + i.slug + '"><b>' + i.label + '</b><span>' + i.tag + '</span></a>';
  }).join('');

  var caret = '<svg class="caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>';

  var nav =
    '<div class="ribbon">🧪 DESIGN TEST — SANO Systems inside Podium\'s structure &amp; flow. <b>Not our live site;</b> phone &amp; email shown are placeholders.</div>' +
    '<header><div class="wrap nav">' +
      '<a href="index.html" class="brand"><img src="sano-logo.png" alt="" width="30" height="30"/> SANO Systems</a>' +
      '<ul class="nav-links">' +
        '<li class="' + (page === 'product' ? 'active' : '') + '"><a href="ai-employee.html"' + (page === 'product' ? ' aria-current="page"' : '') + '>What we run ' + caret + '</a>' +
          '<div class="dropdown">' +
            '<a href="ai-employee.html#frontdesk"><b>The front desk</b><span>Calls, texts &amp; booking, around the clock</span></a>' +
            '<a href="ai-employee.html#followup"><b>The follow-up</b><span>Chased until you get an answer</span></a>' +
            '<a href="ai-employee.html#reviews"><b>Reviews &amp; reputation</b><span>Asked for after every job</span></a>' +
            '<a href="ai-employee.html#marketing"><b>Marketing &amp; payments</b><span>Campaigns, follow-up, pay-by-text</span></a>' +
            '<a href="ai-employee.html#command"><b>Your monthly report</b><span>What happened, in plain English</span></a>' +
          '</div>' +
        '</li>' +
        '<li class="' + (page === 'industries' ? 'active' : '') + '"><a href="industries.html"' + (page === 'industries' ? ' aria-current="true"' : '') + '>Industries ' + caret + '</a>' +
          '<div class="dropdown">' + indDrop + '</div>' +
        '</li>' +
        '<li class="' + (page === 'pricing' ? 'active' : '') + '"><a href="pricing.html"' + (page === 'pricing' ? ' aria-current="page"' : '') + '>Pricing</a></li>' +
        '<li class="' + (page === 'resources' ? 'active' : '') + '"><a href="resources.html"' + (page === 'resources' ? ' aria-current="true"' : '') + '>Resources</a></li>' +
        '<li class="' + (page === 'about' ? 'active' : '') + '"><a href="about.html"' + (page === 'about' ? ' aria-current="page"' : '') + '>Why SANO</a></li>' +
      '</ul>' +
      '<div class="nav-right">' +
        '<a href="tel:' + PHONE + '" class="nav-phone">' + PHONE_D + '</a>' +
        '<a href="tel:' + PHONE + '" class="nav-call" aria-label="Call us"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.11 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg></a>' +
        '<a href="demo.html" class="btn btn-blue">Book a demo</a>' + '<button class="nav-burger" aria-label="Menu" aria-expanded="false" aria-controls="mobile-menu"><span></span><span></span><span></span></button>' +
      '</div>' +
    '</div></header>' +
    '<div class="mobile-menu" id="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu">' +
      '<button class="mm-close" aria-label="Close menu">&times;</button>' +
      '<a href="index.html" class="mm-home"><img src="sano-logo.png" alt="" width="26" height="26"/> SANO Systems</a>' +
      '<a href="ai-employee.html"' + (page === 'product' ? ' class="mm-on" aria-current="page"' : '') + '>What we run</a>' +
      '<a href="industries.html"' + (page === 'industries' ? ' class="mm-on"' : '') + '>Industries</a>' +
      '<a href="pricing.html"' + (page === 'pricing' ? ' class="mm-on" aria-current="page"' : '') + '>Pricing</a>' +
      '<a href="resources.html"' + (page === 'resources' ? ' class="mm-on"' : '') + '>Resources</a>' +
      '<a href="about.html"' + (page === 'about' ? ' class="mm-on" aria-current="page"' : '') + '>Why SANO</a>' +
      '<a href="tel:' + PHONE + '">' + PHONE_D + '</a>' +
      '<a href="demo.html" class="btn btn-blue btn-lg">Book a demo</a>' +
    '</div>';

  var indFoot = IND.slice(0, 4).map(function (i) {
    return '<a href="industry.html?ind=' + i.slug + '">' + i.label + '</a>';
  }).join('') + '<a href="industries.html">All industries →</a>';

  var foot =
    '<footer><div class="wrap">' +
      '<div class="foot-grid">' +
        '<div class="foot-brand">' +
          '<div class="brand"><img src="sano-logo.png" alt="" width="30" height="30"/> SANO Systems</div>' +
          '<p>You run your business. We run the AI.</p>' +
          '<a href="tel:' + PHONE + '" class="c">' + PHONE_D + '</a>' +
          '<a href="mailto:' + EMAIL + '" class="c">' + EMAIL + '</a>' +
        '</div>' +
        '<div class="foot-col"><h4>What we run</h4>' +
          '<a href="ai-employee.html#frontdesk">The front desk</a><a href="ai-employee.html#reviews">Reviews</a>' +
          '<a href="ai-employee.html#marketing">Marketing &amp; payments</a><a href="pricing.html">Pricing</a></div>' +
        '<div class="foot-col"><h4>Industries</h4>' + indFoot + '</div>' +
        '<div class="foot-col"><h4>Company</h4>' +
          '<a href="about.html">Why SANO</a><a href="resources.html">Resources</a>' +
          '<a href="about.html#bilingual">Se habla Español</a><a href="mailto:' + EMAIL + '">Contact us</a></div>' +
        '<div class="foot-col"><h4>Get started</h4>' +
          '<a href="demo.html">Book a demo</a><a href="tel:' + PHONE + '">Talk to a person</a>' +
          '<a href="resources.html">Free guides</a></div>' +
      '</div>' +
      '<div class="foot-base"><span>© 2026 SANO Systems LLC. (Design test — not the live site.)</span>' +
        '<span><a href="privacy.html" style="color:#8A8A93">Privacy Policy</a> · <a href="terms.html" style="color:#8A8A93">Terms of Service</a></span></div>' +
    '</div></footer>';

  var navMount = document.getElementById('site-nav');
  var footMount = document.getElementById('site-footer');
  if (navMount) navMount.innerHTML = nav;
  if (footMount) footMount.innerHTML = foot;

  var burger = document.querySelector('.nav-burger');
  var menu = document.querySelector('.mobile-menu');
  function setMenu(open) {
    if (!menu || !burger) return;
    menu.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.style.overflow = open ? 'hidden' : '';
  }
  var closeBtn = menu ? menu.querySelector('.mm-close') : null;
  if (burger && menu) {
    burger.addEventListener('click', function () {
      var open = !menu.classList.contains('open');
      setMenu(open);
      if (open) { var f = menu.querySelector('a'); if (f) f.focus(); }
    });
    if (closeBtn) closeBtn.addEventListener('click', function () { setMenu(false); burger.focus(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && menu.classList.contains('open')) { setMenu(false); burger.focus(); } });
    menu.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
    /* rotating to desktop must never leave the scroll lock on */
    window.addEventListener('resize', function () { if (window.innerWidth > 960) setMenu(false); });
  }

  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); } });
  }, { threshold: 0, rootMargin: '0px 0px -30px 0px' });
  document.querySelectorAll('.reveal').forEach(function (el) { obs.observe(el); });
  /* belt-and-braces: never leave content invisible if the observer misbehaves */
  setTimeout(function () { document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); }); }, 2500);
})();
