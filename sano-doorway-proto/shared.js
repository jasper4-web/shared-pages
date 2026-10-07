/* Shared nav + footer — SANO Systems (D-0051 doctrine language).
   Requires industries.js to be loaded first.
   Each page sets <body data-page="home|product|industries|pricing|resources|about|demo">. */
(function () {
  var page = document.body.getAttribute('data-page') || '';
  var PHONE = '+18323962496', PHONE_D = '(832) 396-2496';
  var IND = window.SANO_INDUSTRIES || [];

  var indDrop = IND.map(function (i) {
    return '<a href="' + (i.slug === 'roofing' ? '' : 'https://jasper4-web.github.io/shared-pages/sano-podium-doorway/') + 'industry-' + i.slug + '.html"><b>' + i.label + '</b><span>' + i.tag + '</span></a>';
  }).join('');

  var HERE = (location.pathname.split('/').pop() || 'index.html');
  function here(f) { return HERE === f; }
  var caret = '<svg class="caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>';

  var nav =
    '<header><div class="wrap nav">' +
      '<a href="doorway.html" class="brand" aria-label="SANO Systems — home"><img src="sano-logo.png" alt="" width="30" height="30"/><span class="bt">SANO Systems</span></a>' +
      '<nav aria-label="Main"><ul class="nav-links">' +
        '<li class="' + (page === 'product' ? 'active' : '') + '"><a href="https://jasper4-web.github.io/shared-pages/sano-podium-doorway/what-we-run.html"' + (page === 'product' ? (here('what-we-run.html') ? ' aria-current="page"' : ' aria-current="true"') : '') + '>What we run ' + caret + '</a>' +
          '<div class="dropdown">' +
            '<a href="https://jasper4-web.github.io/shared-pages/sano-podium-doorway/what-we-run.html#frontdesk"><b>The front desk</b><span>Calls, texts &amp; booking, around the clock</span></a>' +
            '<a href="https://jasper4-web.github.io/shared-pages/sano-podium-doorway/what-we-run.html#followup"><b>The follow-up</b><span>Chased until you get an answer</span></a>' +
            '<a href="https://jasper4-web.github.io/shared-pages/sano-podium-doorway/what-we-run.html#reviews"><b>Reviews</b><span>Asked for after every job</span></a>' +
            '<a href="https://jasper4-web.github.io/shared-pages/sano-podium-doorway/what-we-run.html#marketing"><b>Marketing &amp; payments</b><span>Campaigns, follow-up, pay-by-text</span></a>' +
            '<a href="https://jasper4-web.github.io/shared-pages/sano-podium-doorway/what-we-run.html#backoffice"><b>Hiring &amp; team systems</b><span>Hiring, training &amp; paperwork, run for you</span></a>' +
            '<a href="https://jasper4-web.github.io/shared-pages/sano-podium-doorway/what-we-run.html#command"><b>Your monthly report</b><span>What happened, in plain English</span></a>' +
            '<a href="https://jasper4-web.github.io/shared-pages/sano-podium-doorway/sample-blueprint.html"><b>See a sample blueprint</b><span>The document a client actually approves</span></a>' +
          '</div>' +
        '</li>' +
        '<li class="' + (page === 'industries' ? 'active' : '') + '"><a href="https://jasper4-web.github.io/shared-pages/sano-podium-doorway/industries.html"' + (page === 'industries' ? (here('industries.html') ? ' aria-current="page"' : ' aria-current="true"') : '') + '>Industries ' + caret + '</a>' +
          '<div class="dropdown">' + indDrop + '</div>' +
        '</li>' +
        '<li class="' + (page === 'pricing' ? 'active' : '') + '"><a href="https://jasper4-web.github.io/shared-pages/sano-podium-doorway/pricing.html"' + (page === 'pricing' ? (here('pricing.html') ? ' aria-current="page"' : ' aria-current="true"') : '') + '>Pricing</a></li>' +
        '<li class="' + (page === 'resources' ? 'active' : '') + '"><a href="https://jasper4-web.github.io/shared-pages/sano-podium-doorway/resources.html"' + (page === 'resources' ? (here('resources.html') ? ' aria-current="page"' : ' aria-current="true"') : '') + '>Resources</a></li>' +
        '<li class="' + (page === 'about' ? 'active' : '') + '"><a href="https://jasper4-web.github.io/shared-pages/sano-podium-doorway/about.html"' + (page === 'about' ? (here('about.html') ? ' aria-current="page"' : ' aria-current="true"') : '') + '>Why SANO</a></li>' +
      '</ul></nav>' +
      '<div class="nav-right">' +
        '<div class="nav-contact"><a href="tel:' + PHONE + '" class="nav-phone">' + PHONE_D + '</a>' +
          '<a href="https://jasper4-web.github.io/shared-pages/sano-podium-doorway/about.html#bilingual" class="nav-es" lang="es">Se habla Espa&ntilde;ol</a></div>' +
        '<a href="tel:' + PHONE + '" class="nav-call" aria-label="Call us"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.11 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg></a>' +
        '<a href="https://jasper4-web.github.io/shared-pages/sano-podium-doorway/demo.html" class="btn btn-blue nav-cta" aria-label="Request a demo"' + (page === 'demo' ? ' aria-current="page"' : '') + '>Request a demo</a>' + '<button class="nav-burger" aria-label="Menu" aria-expanded="false" aria-controls="mobile-menu"><span></span><span></span><span></span></button>' +
      '</div>' +
    '</div></header>' +
    '<div class="mobile-menu" id="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu">' +
      '<button class="mm-close" aria-label="Close menu">&times;</button>' +
      '<a href="doorway.html" class="mm-home"><img src="sano-logo.png" alt="" width="26" height="26"/> SANO Systems</a>' +
      '<a href="https://jasper4-web.github.io/shared-pages/sano-podium-doorway/what-we-run.html"' + (page === 'product' ? ' class="mm-on" aria-current="' + (here('what-we-run.html') ? 'page' : 'true') + '"' : '') + '>What we run</a>' +
      '<a href="https://jasper4-web.github.io/shared-pages/sano-podium-doorway/industries.html"' + (page === 'industries' ? ' class="mm-on" aria-current="' + (here('industries.html') ? 'page' : 'true') + '"' : '') + '>Industries</a>' +
      '<a href="https://jasper4-web.github.io/shared-pages/sano-podium-doorway/pricing.html"' + (page === 'pricing' ? ' class="mm-on" aria-current="' + (here('pricing.html') ? 'page' : 'true') + '"' : '') + '>Pricing</a>' +
      '<a href="https://jasper4-web.github.io/shared-pages/sano-podium-doorway/resources.html"' + (page === 'resources' ? ' class="mm-on" aria-current="' + (here('resources.html') ? 'page' : 'true') + '"' : '') + '>Resources</a>' +
      '<a href="https://jasper4-web.github.io/shared-pages/sano-podium-doorway/about.html"' + (page === 'about' ? ' class="mm-on" aria-current="' + (here('about.html') ? 'page' : 'true') + '"' : '') + '>Why SANO</a>' +
      '<a href="tel:' + PHONE + '">' + PHONE_D + '</a>' +
      '<a href="https://jasper4-web.github.io/shared-pages/sano-podium-doorway/about.html#bilingual" lang="es">Se habla Espa&ntilde;ol</a>' +
      '<a href="https://jasper4-web.github.io/shared-pages/sano-podium-doorway/demo.html" class="btn btn-blue btn-lg">Request a demo</a>' +
    '</div>';

  var indFoot = IND.slice(0, 4).map(function (i) {
    return '<a href="' + (i.slug === 'roofing' ? '' : 'https://jasper4-web.github.io/shared-pages/sano-podium-doorway/') + 'industry-' + i.slug + '.html">' + i.label + '</a>';
  }).join('') + '<a href="https://jasper4-web.github.io/shared-pages/sano-podium-doorway/industries.html">All industries →</a>';

  /* SANO's social accounts, quick links in the footer. Handles come from
     content/social-rollout/SOCIAL-ACCOUNTS.md (never guess one). Icons: Simple Icons (CC0). */
  var SOCIAL = [
    ['YouTube', 'https://www.youtube.com/@SanoSystemshq',
     'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z'],
    ['Instagram', 'https://www.instagram.com/sanosystemshq/',
     'M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077'],
    ['Threads', 'https://www.threads.com/@sanosystemshq',
     'M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32L7.734 7.847c.98-1.454 2.568-2.256 4.478-2.256h.044c3.194.02 5.097 1.975 5.287 5.388.108.046.216.094.321.142 1.49.7 2.58 1.761 3.154 3.07.797 1.82.871 4.79-1.548 7.158-1.85 1.81-4.094 2.628-7.277 2.65Zm1.003-11.69c-.242 0-.487.007-.739.021-1.836.103-2.98.946-2.916 2.143.067 1.256 1.452 1.839 2.784 1.767 1.224-.065 2.818-.543 3.086-3.71a10.5 10.5 0 0 0-2.215-.221z'],
    ['TikTok', 'https://www.tiktok.com/@sanosystemshq',
     'M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z'],
    ['X (Twitter)', 'https://x.com/sanosystemshq',
     'M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z'],
    ['Facebook', 'https://www.facebook.com/profile.php?id=61594694144569',
     'M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z']
  ];
  var socialFoot = SOCIAL.map(function (s) {
    return '<a href="' + s[1] + '" class="soc" target="_blank" rel="noopener">' +
      '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="' + s[2] + '"/></svg>' + s[0] + '</a>';
  }).join('');


  var foot =
    '<footer><div class="wrap">' +
      '<nav aria-label="Footer"><div class="foot-grid">' +
        '<div class="foot-brand">' +
          '<div class="brand"><img src="sano-logo.png" alt="" width="30" height="30"/> SANO Systems</div>' +
          '<p>You run your business. We run the systems.</p>' +
          '<a href="sms:+18323962496?&body=I%27d%20like%20a%20demo%20for%20my%20business" class="c">Text ' + PHONE_D + '</a>' +
        '</div>' +
        '<div class="foot-col"><h2 class="foot-col-h">What we run</h2>' +
          '<a href="https://jasper4-web.github.io/shared-pages/sano-podium-doorway/what-we-run.html#frontdesk">The front desk</a><a href="https://jasper4-web.github.io/shared-pages/sano-podium-doorway/what-we-run.html#reviews">Reviews</a>' +
          '<a href="https://jasper4-web.github.io/shared-pages/sano-podium-doorway/what-we-run.html#marketing">Marketing &amp; payments</a><a href="https://jasper4-web.github.io/shared-pages/sano-podium-doorway/what-we-run.html#backoffice">Hiring &amp; team systems</a><a href="https://jasper4-web.github.io/shared-pages/sano-podium-doorway/sample-blueprint.html">Sample blueprint</a></div>' +
        '<div class="foot-col"><h2 class="foot-col-h">Industries</h2>' + indFoot + '</div>' +
        '<div class="foot-col"><h2 class="foot-col-h">Company</h2>' +
          '<a href="https://jasper4-web.github.io/shared-pages/sano-podium-doorway/about.html">Why SANO</a><a href="https://jasper4-web.github.io/shared-pages/sano-podium-doorway/resources.html">Resources</a><a href="https://jasper4-web.github.io/shared-pages/sano-podium-doorway/pricing.html">Pricing</a>' +
          '<a href="https://jasper4-web.github.io/shared-pages/sano-podium-doorway/about.html#bilingual" lang="es">Se habla Español</a><a href="https://jasper4-web.github.io/shared-pages/sano-podium-doorway/demo.html">Request a demo</a></div>' +
        '<div class="foot-col foot-social"><h2 class="foot-col-h">Follow us</h2>' + socialFoot + '</div>' +
      '</div></nav>' +
      '<div class="foot-base"><span>© 2026 SANO Systems LLC.</span>' +
        '<span><a href="https://jasper4-web.github.io/shared-pages/sano-podium-doorway/privacy.html" style="color:#8A8A93">Privacy Policy</a> · <a href="https://jasper4-web.github.io/shared-pages/sano-podium-doorway/terms.html" style="color:#8A8A93">Terms of Service</a></span></div>' +
    '</div></footer>';

  /* One source of truth for the risk-reversal + contact lines under every CTA.
     These were hardcoded in 18 files and had already drifted apart. */
  var GUARANTEE = '<strong>30 days from go-live, money-back on the monthly fee</strong> — taking it also ends the minimum term. ' +
    'The one-time setup is separate: <strong>half at kickoff, half at go-live</strong>, and you don\'t owe the balance if we don\'t deliver your approved blueprint.';
  var CONTACT = 'Or <a href="sms:' + PHONE + '?&body=' + encodeURIComponent('I\'d like a demo for my business') + '">text us at ' + PHONE_D + '</a> — a real person reads it and replies.';
  document.querySelectorAll('.cta-box').forEach(function (box) {
    var g = box.querySelector('.cta-guarantee'); if (g) g.innerHTML = GUARANTEE;
    var c = box.querySelector('.cta-phone:not(.cta-hire)'); if (c) c.innerHTML = CONTACT;
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
    document.querySelectorAll('a[href*="demo.html"]').forEach(function (a) {
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
    /* A visitor on a non-HVAC branch should not be closed with the HVAC artifact.
       Scoped to CTA buttons only -- nav and footer links to it are navigation, not
       an ask -- and reversible, because the visitor can change their mind. */
    document.querySelectorAll('.cta-box a[href], .hero-cta a[href]').forEach(function (a) {
      if (!a.hasAttribute('data-orig-href')) {
        if (!/sample-blueprint\.html/.test(a.getAttribute('href') || '')) return;
        a.setAttribute('data-orig-href', a.getAttribute('href'));
        a.setAttribute('data-orig-text', a.textContent);
      }
      if (IND_CTX && IND_CTX !== 'hvac') {
        a.setAttribute('href', 'pricing.html');
        a.textContent = 'See what it costs';
      } else {
        a.setAttribute('href', a.getAttribute('data-orig-href'));
        a.textContent = a.getAttribute('data-orig-text');
      }
    });
  }

  /* The trade page spends its whole middle section getting the owner to choose a
     level, then threw that choice away at the handoff: every CTA linked to
     demo.html?ind=<trade> with no plan, while demo.html already reads ?plan= and
     the pricing page already passes it. Carry it exactly the way we carry the
     industry. No-op on pages without a tier switch, so pricing.html keeps the
     plan its own buttons set. */
  /* A buyer who picks a level on pricing.html arrives here as ?plan=scale. The tier
     switch below defaults to Growth, and carryPlan() then wrote that default over
     their choice — so the pricing-first path silently downgraded every Scale and
     Total prospect. Adopt an incoming plan before anything reads the switch, and
     persist it the way sano_ind is already persisted so it survives the next hop. */
  function adoptPlan() {
    var incoming = '';
    try { incoming = new URLSearchParams(location.search).get('plan') || ''; } catch (e) {}
    if (!incoming) { try { incoming = sessionStorage.getItem('sano_plan') || ''; } catch (e) {} }
    if (!incoming) return;
    var radio = document.getElementById('t-' + incoming);
    if (!radio || !radio.classList.contains('tier-radio')) return;
    radio.checked = true;
    try { sessionStorage.setItem('sano_plan', incoming); } catch (e) {}
  }

  function carryPlan() {
    var picked = document.querySelector('.tier-radio:checked');
    if (!picked) return;
    var plan = picked.id.replace(/^t-/, '');
    /* remember the latest pick, including a change of mind made on this page */
    try { sessionStorage.setItem('sano_plan', plan); } catch (e) {}
    document.querySelectorAll('a[href*="demo.html"]').forEach(function (a) {
      var h = a.getAttribute('href') || '';
      var hash = h.indexOf('#') > -1 ? h.slice(h.indexOf('#')) : '';
      var base = hash ? h.slice(0, h.indexOf('#')) : h;
      var bits = base.split('?');
      var sp = new URLSearchParams(bits[1] || '');
      sp.set('plan', plan);
      a.setAttribute('href', bits[0] + '?' + sp.toString() + hash);
    });
  }

  var navMount = document.getElementById('site-nav');
  var footMount = document.getElementById('site-footer');
  if (navMount) navMount.innerHTML = nav;
  if (footMount) footMount.innerHTML = foot;
  carryInd();
  adoptPlan();
  carryPlan();
  /* the visitor can change level any number of times before they click */
  document.querySelectorAll('.tier-radio').forEach(function (r) {
    r.addEventListener('change', carryPlan);
  });

  /* Escape closes an open capability sheet, the way it already closes the mobile
     menu. The sheet is pure CSS (a radio group), so this is the one thing it
     cannot do for itself; with JS off, the scrim and the close button still
     close it, exactly as before. */
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    var open = document.querySelector('input[name="capopen"]:checked');
    var none = document.getElementById('co-none');
    if (!open || !none || open === none) return;
    none.checked = true;
    /* put focus back on the tile that was opened, not adrift at the top */
    var tile = document.getElementById(open.id.replace(/^co-x-/, 'co-'));
    if (tile) { try { tile.focus(); } catch (err) {} }
  });

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
    /* fragments arrive from the wild (#_=_, tracking junk) — never let a bad
       selector throw and kill the reveal system below */
    var target = null;
    try { target = document.getElementById(location.hash.slice(1)); } catch (e) {}
    if (target) requestAnimationFrame(function () { target.scrollIntoView(); });
  }

  /* Reveal-on-scroll animation with a hard guarantee that content is NEVER
     left invisible (a real customer read the un-revealed dark bands as "broken"). */
  function sweep() {
    var vh = window.innerHeight || 800;
    document.querySelectorAll('.reveal:not(.in)').forEach(function (el) {
      if (el.getBoundingClientRect().top < vh + 300) el.classList.add('in');
    });
  }
  if ('IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function (entries, o) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); o.unobserve(e.target); } });
    }, { threshold: 0, rootMargin: '0px 0px 300px 0px' });
    document.querySelectorAll('.reveal').forEach(function (el) { obs.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
  }
  window.addEventListener('scroll', sweep, { passive: true });
  window.addEventListener('resize', sweep);
  sweep();
  /* timer-driven sweep does not depend on scroll events firing; after 4s,
     reveal everything unconditionally so nothing can ever stay hidden. */
  var ticks = 0;
  var iv = setInterval(function () {
    sweep();
    if (++ticks > 16) { document.querySelectorAll('.reveal:not(.in)').forEach(function (el) { el.classList.add('in'); }); clearInterval(iv); }
  }, 250);
})();
