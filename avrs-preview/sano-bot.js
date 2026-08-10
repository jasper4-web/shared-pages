/* ============================================================
   SANO ASSISTANT — reusable client-pitch answer bot
   ------------------------------------------------------------
   Engine only. The knowledge base is per-client and supplied by
   the host page as window.SANO_BOT_CONFIG before this loads.

   Lineage: structurally descended from an earlier SANO
   conversation-tree bot (never dead-ends, always offers a next
   step), but with a real free-text retrieval layer on top so a
   typed question is understood instead of pattern-matched.

   Design rules (learned the hard way on earlier builds):
   - NEVER return the same fallback twice in a row.
   - NEVER answer with something unrelated; low confidence must
     surface choices, not a wrong confident answer.
   - Every answer ends with somewhere to go next.
   - Anything it does not know escalates to the human, by name.
   ============================================================ */
(function () {
  'use strict';

  var CFG = window.SANO_BOT_CONFIG;
  if (!CFG || !CFG.kb || !CFG.kb.length) return;

  /* ---------- text normalisation ----------
     Deliberately SHORT stop list. An earlier version stripped words like
     "much", "need", "get" and "work" as noise, which silently destroyed the
     most common questions on the page ("how much is it" reduced to nothing).
     Only true function words go here; distinctiveness is handled by IDF below. */
  var STOP = ('a an the is are am was were be been being do does did doing have has had ' +
    'i me my we our you your it its of to in on at for with about from by as ' +
    'this that these those and or but there here please thanks thank ok okay hey hi ' +
    'gonna gotta wanna im ive id ill ' +
    /* question words and generic verbs: they carry no topic signal, and leaving
       them in made "if" a distinctive term that hijacked matches */
    'if what when where which who whom how why whats ' +
    'can could would should will shall may might must ' +
    'not no yes just really very much many some any anything something nothing ' +
    'else too also even still ever never actually basically good bad nice ' +
    'get got getting know knows tell say said want wants need needs ' +
    'make makes made take takes thing things stuff ' +
    'work works working').split(' ');
  var STOPSET = {};
  STOP.forEach(function (w) { STOPSET[w] = 1; });

  /* Synonym expansion: maps what a mechanic actually types onto KB vocabulary. */
  var SYN = CFG.synonyms || {};

  function norm(s) {
    return (' ' + String(s).toLowerCase() + ' ')
      .replace(/[’']/g, "'")
      .replace(/n't\b/g, ' not')
      .replace(/[^a-z0-9$' ]+/g, ' ')
      .replace(/\s+/g, ' ');
  }

  /* Stem conservatively and keep BOTH forms — an aggressive stemmer turned
     "getting" into "gett", which matched nothing. */
  function pushForms(out, w) {
    out.push(w);
    var st = w;
    if (w.length > 4 && /(ing|ed)$/.test(w)) {
      st = w.replace(/(ing|ed)$/, '');
      if (/([bdgmnprt])\1$/.test(st)) st = st.slice(0, -1);  /* gett -> get */
    } else if (w.length > 3 && /(es|s)$/.test(w) && !/ss$/.test(w)) {
      st = w.replace(/(es|s)$/, '');
    }
    if (st !== w && st.length >= 3) out.push(st);
  }

  function tokens(s) {
    var out = [], raw = norm(s).trim().split(' ');
    for (var i = 0; i < raw.length; i++) {
      var w = raw[i].replace(/'/g, '');
      if (!w || STOPSET[w] || w.length < 2) continue;
      pushForms(out, w);
      if (SYN[w]) { SYN[w].split(' ').forEach(function (x) { pushForms(out, x); }); }
    }
    return out;
  }

  function uniq(arr) {
    var seen = {}, out = [];
    arr.forEach(function (t) { if (!seen[t]) { seen[t] = 1; out.push(t); } });
    return out;
  }

  /* ---------- index + IDF ----------
     A term that appears in one entry ("vacation", "contract", "fleet") is a far
     stronger signal than one that appears in twenty ("text", "customer"). IDF
     encodes that, which is what stops common words from picking wrong answers. */
  var KB = CFG.kb;
  var BY_ID = {};
  var DF = {};
  KB.forEach(function (e) {
    BY_ID[e.id] = e;
    e._t = {};
    uniq(tokens((e.keys || '') + ' ' + (e.q || ''))).forEach(function (t) {
      e._t[t] = 1;
      DF[t] = (DF[t] || 0) + 1;
    });
    /* phrases must be normalised the same way queries are, or "don't like"
       can never match the normalised "do not like" */
    e._p = (e.phrases || []).map(function (p) { return norm(p).trim(); });
  });
  var N = KB.length;

  /* Ambient vocabulary: words that are everywhere in THIS domain (customer,
     text, phone, app, month...). In a KB this small they appear in only a
     handful of entries, so raw IDF wrongly rates them as distinctive and they
     hijack matches. Damp them explicitly. */
  var AMBIENT = {};
  (CFG.ambient || '').split(' ').forEach(function (w) { if (w) AMBIENT[w] = 1; });
  function idf(t) {
    var v = Math.log(1 + N / (1 + (DF[t] || 0)));
    return AMBIENT[t] ? v * 0.25 : v;
  }

  /* Vocabulary the KB knows anything at all about. Used to detect questions
     that are simply off-topic ("does it work with my Ford scanner") so they
     fall back honestly instead of confidently matching a stray keyword. */
  var VOCAB = {};
  KB.forEach(function (e) { for (var t in e._t) VOCAB[t] = 1; });

  /* ---------- scoring ---------- */
  function score(query) {
    var nq = norm(query), qt = uniq(tokens(query)), ranked = [];

    /* how much of what they typed is vocabulary we know at all? */
    var known = 0;
    qt.forEach(function (t) { if (VOCAB[t]) known++; });
    var coverageOfQuery = qt.length ? known / qt.length : 0;

    for (var i = 0; i < KB.length; i++) {
      var e = KB[i], s = 0, hits = 0, phraseHit = false;

      /* exact phrase hits are by far the strongest signal — and they run even
         when the query is entirely stop words ("how much is it") */
      for (var k = 0; k < e._p.length; k++) {
        if (e._p[k] && nq.indexOf(e._p[k]) > -1) { s += 30; hits++; phraseHit = true; }
      }

      /* IDF-weighted token overlap */
      for (var j = 0; j < qt.length; j++) {
        if (e._t[qt[j]]) { s += 2 + 4 * idf(qt[j]); hits++; }
      }

      /* small coverage bonus */
      if (qt.length) s += (hits / qt.length) * 3;

      /* prior nudge so broad catch-alls lose ties to specific entries */
      s -= (e.weight || 0) * 3;

      if (s > 0) ranked.push({ e: e, s: s, hits: hits, phrase: phraseHit });
    }
    ranked.sort(function (a, b) { return b.s - a.s; });

    /* If most of the question is words we've never heard of, we don't actually
       know the answer — say so rather than pattern-match a fragment. */
    ranked.offTopic = (qt.length >= 2 && coverageOfQuery < 0.5 &&
                       !(ranked[0] && ranked[0].phrase));
    return ranked;
  }

  /* ---------- DOM helpers ---------- */
  function el(tag, cls, html) {
    var d = document.createElement(tag);
    if (cls) d.className = cls;
    if (html != null) d.innerHTML = html;
    return d;
  }

  var panel, body, chipwrap, input, launcher, lastFallback = -1, askedIds = {};

  function scrollDown() { body.scrollTop = body.scrollHeight; }

  function addBot(html, opts) {
    opts = opts || {};
    var wrap = el('div', 'sb-msg sb-bot');
    if (opts.typing) {
      wrap.innerHTML = '<span class="sb-dots"><i></i><i></i><i></i></span>';
      body.appendChild(wrap); scrollDown();
      setTimeout(function () {
        wrap.innerHTML = html; scrollDown();
        if (opts.after) opts.after();
      }, opts.delay || 420);
    } else {
      wrap.innerHTML = html;
      body.appendChild(wrap); scrollDown();
      if (opts.after) opts.after();
    }
    return wrap;
  }

  function addUser(text) {
    var d = el('div', 'sb-msg sb-me');
    d.textContent = text;
    body.appendChild(d); scrollDown();
  }

  function setChips(list) {
    chipwrap.innerHTML = '';
    (list || []).forEach(function (c) {
      var b = el('button', 'sb-chip', c.label);
      b.type = 'button';
      b.addEventListener('click', function () {
        if (c.id) { askId(c.id, c.label); }
        else if (c.href) { window.location.href = c.href; }
        else { ask(c.label); }
      });
      chipwrap.appendChild(b);
    });
  }

  /* Follow-up chips: entry's own, minus anything already asked, topped up
     with popular topics so there is always somewhere to go next. */
  function followUps(entry) {
    var out = [], seen = {};
    (entry && entry.next || []).forEach(function (id) {
      if (BY_ID[id] && !askedIds[id] && !seen[id]) { seen[id] = 1; out.push({ id: id, label: BY_ID[id].chip || BY_ID[id].q }); }
    });
    if (out.length < 3) {
      (CFG.popular || []).forEach(function (id) {
        if (out.length >= 3) return;
        if (BY_ID[id] && !askedIds[id] && !seen[id]) { seen[id] = 1; out.push({ id: id, label: BY_ID[id].chip || BY_ID[id].q }); }
      });
    }
    out.push({ label: CFG.escalate.chip, href: CFG.escalate.href });
    return out;
  }

  function deliver(entry) {
    askedIds[entry.id] = 1;
    addBot(entry.a, {
      typing: true,
      after: function () { setChips(followUps(entry)); }
    });
  }

  function askId(id, shownLabel) {
    var e = BY_ID[id];
    if (!e) return;
    addUser(shownLabel || e.chip || e.q);
    deliver(e);
  }

  /* ---------- the main entry point ---------- */
  function ask(text) {
    if (!text || !text.trim()) return;
    addUser(text.trim());
    var ranked = score(text);
    var top = ranked[0], second = ranked[1];

    /* confident — but never on an off-topic question */
    if (top && top.s >= 14 && !ranked.offTopic) { deliver(top.e); return; }

    /* plausible but ambiguous — offer the real candidates rather than guess */
    if (top && top.s >= 9 && !ranked.offTopic) {
      var cands = ranked.slice(0, 3).filter(function (r) { return r.s >= 8; });
      if (cands.length > 1 && second && (top.s - second.s) < 6) {
        addBot(CFG.clarify, {
          typing: true,
          after: function () {
            setChips(cands.map(function (r) {
              return { id: r.e.id, label: r.e.chip || r.e.q };
            }).concat([{ label: CFG.escalate.chip, href: CFG.escalate.href }]));
          }
        });
        return;
      }
      deliver(top.e);
      return;
    }

    /* genuinely unknown — rotate the wording, never repeat verbatim */
    var pool = CFG.fallbacks;
    var idx = 0;
    if (pool.length > 1) { do { idx = Math.floor(Math.random() * pool.length); } while (idx === lastFallback); }
    lastFallback = idx;
    addBot(pool[idx], {
      typing: true,
      after: function () {
        var sug = (CFG.popular || []).filter(function (id) { return !askedIds[id]; }).slice(0, 3)
          .map(function (id) { return { id: id, label: BY_ID[id].chip || BY_ID[id].q }; });
        setChips(sug.concat([{ label: CFG.escalate.chip, href: CFG.escalate.href }]));
      }
    });
  }

  /* ---------- build UI ---------- */
  function build() {
    launcher = el('button', 'sb-launch',
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>' +
      (CFG.launchLabel || 'Ask a question'));
    launcher.type = 'button';
    launcher.setAttribute('aria-label', CFG.launchLabel || 'Ask a question');

    panel = el('div', 'sb-panel');
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-label', CFG.title || 'Assistant');
    panel.innerHTML =
      '<div class="sb-head">' +
        '<div class="sb-av">' + (CFG.avatar || 'AI') + '</div>' +
        '<div class="sb-id"><b>' + (CFG.title || 'Assistant') + '</b><span class="sb-st">' + (CFG.subtitle || '') + '</span></div>' +
        '<button class="sb-x" type="button" aria-label="Close">&times;</button>' +
      '</div>' +
      '<div class="sb-body"></div>' +
      '<div class="sb-chips"></div>' +
      '<form class="sb-input" autocomplete="off">' +
        '<input type="text" placeholder="' + (CFG.placeholder || 'Type your question…') + '" aria-label="Type your question">' +
        '<button type="submit">Send</button>' +
      '</form>';

    document.body.appendChild(launcher);
    document.body.appendChild(panel);

    body = panel.querySelector('.sb-body');
    chipwrap = panel.querySelector('.sb-chips');
    input = panel.querySelector('.sb-input input');

    var form = panel.querySelector('.sb-input');
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var v = input.value; input.value = '';
      ask(v);
    });

    launcher.addEventListener('click', open);
    panel.querySelector('.sb-x').addEventListener('click', close);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && panel.classList.contains('open')) close();
    });

    var greeted = false;
    function open() {
      panel.classList.add('open');
      launcher.style.display = 'none';
      if (!greeted) {
        greeted = true;
        addBot(CFG.greeting);
        setChips((CFG.starters || []).map(function (id) {
          return { id: id, label: BY_ID[id] ? (BY_ID[id].chip || BY_ID[id].q) : id };
        }));
      }
      setTimeout(function () { input.focus(); }, 60);
    }
    function close() {
      panel.classList.remove('open');
      launcher.style.display = 'inline-flex';
      launcher.focus();
    }

    /* Optional: keep the launcher out of the way until the reader is past a
       given element. On a phone the floating pill otherwise sits on top of the
       hero demo and covers it, which reads as sloppy — and the assistant is
       most useful further down anyway, at the offer and the FAQ. */
    if (CFG.revealAfter || CFG.hideAfter) {
      var gate = CFG.revealAfter ? document.querySelector(CFG.revealAfter) : null;
      var endGate = CFG.hideAfter ? document.querySelector(CFG.hideAfter) : null;
      var update = function () {
        if (panel.classList.contains('open')) return;
        /* past the opening section... */
        var past = !gate || gate.getBoundingClientRect().bottom < 90;
        /* ...but not yet into the closing section, where the page's own CTA and
           answers are on screen and a floating pill would just cover them */
        var ended = endGate && endGate.getBoundingClientRect().top < window.innerHeight * 0.55;
        launcher.classList.toggle('sb-hidden', !past || ended);
      };
      window.addEventListener('scroll', update, { passive: true });
      window.addEventListener('resize', update, { passive: true });
      update();
    }

    /* expose for tests */
    window.SANO_BOT = { ask: ask, askId: askId, score: score, open: open, close: close, kb: KB };
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', build);
  } else { build(); }
})();
