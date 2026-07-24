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
        '<li class="' + (page === 'product' ? 'active' : '') + '"><a href="ai-employee.html">What we run ' + caret + '</a>' +
          '<div class="dropdown">' +
            '<a href="ai-employee.html#frontdesk"><b>The front desk</b><span>Calls, texts &amp; booking, around the clock</span></a>' +
            '<a href="ai-employee.html#reviews"><b>Reviews &amp; reputation</b><span>Asked for after every job</span></a>' +
            '<a href="ai-employee.html#marketing"><b>Marketing &amp; payments</b><span>Campaigns, follow-up, pay-by-text</span></a>' +
            '<a href="ai-employee.html#command"><b>Your monthly report</b><span>What happened, in plain English</span></a>' +
          '</div>' +
        '</li>' +
        '<li class="' + (page === 'industries' ? 'active' : '') + '"><a href="industries.html">Industries ' + caret + '</a>' +
          '<div class="dropdown">' + indDrop + '</div>' +
        '</li>' +
        '<li class="' + (page === 'pricing' ? 'active' : '') + '"><a href="pricing.html">Pricing</a></li>' +
        '<li class="' + (page === 'resources' ? 'active' : '') + '"><a href="resources.html">Resources</a></li>' +
        '<li class="' + (page === 'about' ? 'active' : '') + '"><a href="about.html">Why SANO</a></li>' +
      '</ul>' +
      '<div class="nav-right">' +
        '<a href="tel:' + PHONE + '" class="nav-phone">' + PHONE_D + '</a>' +
        '<a href="demo.html" class="btn btn-blue">Book a demo</a>' + '<button class="nav-burger" aria-label="Menu" aria-expanded="false" aria-controls="mobile-menu"><span></span><span></span><span></span></button>' +
      '</div>' +
    '</div></header>' +
    '<div class="mobile-menu" id="mobile-menu">' +
      '<a href="ai-employee.html">What we run</a><a href="industries.html">Industries</a>' +
      '<a href="pricing.html">Pricing</a><a href="resources.html">Resources</a><a href="about.html">Why SANO</a>' +
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
          '<a href="about.html#bilingual">Se habla Español</a><a href="demo.html">Contact us</a></div>' +
        '<div class="foot-col"><h4>Get started</h4>' +
          '<a href="demo.html">Book a demo</a><a href="tel:' + PHONE + '">Talk to a person</a>' +
          '<a href="pricing.html">See pricing</a></div>' +
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
  if (burger && menu) {
    burger.addEventListener('click', function () { setMenu(!menu.classList.contains('open')); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });
    menu.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
  }

  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
  document.querySelectorAll('.reveal').forEach(function (el) { obs.observe(el); });
})();
