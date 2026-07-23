/* Shared nav + footer for the SANO×Podium test site.
   Injects identical chrome into every page (no build step, works on file://).
   Each page sets <body data-page="home|product|industries|pricing|resources|about|demo">. */
(function () {
  var page = document.body.getAttribute('data-page') || '';
  var PHONE = '+18325557266', PHONE_D = '(832) 555-SANO', EMAIL = 'hello@sanosolutions.ai';

  var industries = [
    ['home-services', 'Home Services', 'HVAC, plumbing, electrical, roofing'],
    ['auto', 'Auto', 'Dealerships, repair, detailing, body'],
    ['med-spa', 'Med Spa & Wellness', 'Med spas, dental, chiropractic'],
    ['professional', 'Professional Services', 'Legal, accounting, real estate']
  ];
  var indDrop = industries.map(function (i) {
    return '<a href="industry.html?ind=' + i[0] + '"><b>' + i[1] + '</b><span>' + i[2] + '</span></a>';
  }).join('');

  var caret = '<svg class="caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>';

  var nav =
    '<div class="ribbon">🧪 DESIGN TEST — SANO\'s business inside Podium\'s structure &amp; flow. <b>Not our live site.</b></div>' +
    '<header><div class="wrap nav">' +
      '<a href="index.html" class="brand"><img src="sano-logo.png" alt="SANO"/> SANO</a>' +
      '<ul class="nav-links">' +
        '<li class="' + (page === 'product' ? 'active' : '') + '"><a href="ai-employee.html">Platform ' + caret + '</a>' +
          '<div class="dropdown">' +
            '<a href="ai-employee.html"><b>The AI Employee</b><span>Calls, texts, follow-up &amp; booking</span></a>' +
            '<a href="ai-employee.html#reviews"><b>Reviews &amp; Reputation</b><span>Climb the Google rankings</span></a>' +
            '<a href="ai-employee.html#marketing"><b>Marketing &amp; Payments</b><span>Campaigns, websites, text-to-pay</span></a>' +
            '<a href="ai-employee.html#command"><b>The Command Center</b><span>Every lead in one place</span></a>' +
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
        '<a href="demo.html" class="btn btn-teal">Watch a demo</a>' +
        '<button class="nav-burger" aria-label="Menu"><span></span><span></span><span></span></button>' +
      '</div>' +
    '</div></header>' +
    '<div class="mobile-menu">' +
      '<a href="ai-employee.html">Platform</a>' +
      '<a href="industries.html">Industries</a>' +
      '<a href="pricing.html">Pricing</a>' +
      '<a href="resources.html">Resources</a>' +
      '<a href="about.html">Why SANO</a>' +
      '<a href="tel:' + PHONE + '">' + PHONE_D + '</a>' +
      '<a href="demo.html" class="btn btn-teal btn-lg">Watch a demo</a>' +
    '</div>';

  var foot =
    '<footer><div class="wrap">' +
      '<div class="foot-grid">' +
        '<div class="foot-brand">' +
          '<div class="brand"><img src="sano-logo.png" alt="SANO"/> SANO Solutions</div>' +
          '<p>Fortune 500 tools for Houston\'s hardest-working businesses.</p>' +
          '<a href="tel:' + PHONE + '" class="c">' + PHONE_D + '</a>' +
          '<a href="mailto:' + EMAIL + '" class="c">' + EMAIL + '</a>' +
        '</div>' +
        '<div class="foot-col"><h4>Platform</h4>' +
          '<a href="ai-employee.html">AI Employee</a><a href="ai-employee.html#reviews">Reviews</a>' +
          '<a href="ai-employee.html#marketing">Marketing &amp; Payments</a><a href="pricing.html">Pricing</a></div>' +
        '<div class="foot-col"><h4>Industries</h4>' +
          '<a href="industry.html?ind=home-services">Home Services</a><a href="industry.html?ind=auto">Auto</a>' +
          '<a href="industry.html?ind=med-spa">Med Spa &amp; Wellness</a><a href="industry.html?ind=professional">Professional</a></div>' +
        '<div class="foot-col"><h4>Company</h4>' +
          '<a href="about.html">Why SANO</a><a href="resources.html">Resources</a>' +
          '<a href="demo.html">Watch a demo</a><a href="demo.html">Contact</a></div>' +
        '<div class="foot-col"><h4>Get started</h4>' +
          '<a href="demo.html">Book a demo</a><a href="tel:' + PHONE + '">Call us</a>' +
          '<a href="demo.html">Se habla Español</a></div>' +
      '</div>' +
      '<div class="foot-base"><span>© 2026 SANO Solutions. Houston, TX. (Design test — not the live site.)</span>' +
        '<span>Privacy Policy · Terms of Service</span></div>' +
    '</div></footer>';

  var navMount = document.getElementById('site-nav');
  var footMount = document.getElementById('site-footer');
  if (navMount) navMount.innerHTML = nav;
  if (footMount) footMount.innerHTML = foot;

  // mobile menu toggle
  var burger = document.querySelector('.nav-burger');
  var menu = document.querySelector('.mobile-menu');
  if (burger && menu) burger.addEventListener('click', function () { menu.classList.toggle('open'); });

  // scroll reveal
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
  document.querySelectorAll('.reveal').forEach(function (el) { obs.observe(el); });
})();
