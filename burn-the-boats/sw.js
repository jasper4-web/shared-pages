/* Burn the Boats — service worker.
   Purpose: make the app installable, work offline, and survive Safari's storage eviction
   (non-installed sites lose localStorage after ~7 idle days — exactly the scenario where
   he has stopped opening it, which would silently delete the run). */

const CACHE = 'btb-v58';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './lib/fonts/fonts.css',
  './icon-180.png',
  './icon-192.png',
  './assets/grain/grain-fine.svg',
];

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS).catch(() => {
      /* a missing optional asset must never block installation */
    }))
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

/* Network-first for the document so a redeploy is picked up; cache-first for static assets. */
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const isDoc = req.mode === 'navigate' || (req.headers.get('accept') || '').includes('text/html');

  if (isDoc) {
    e.respondWith(
      fetch(req).then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req, copy));
        return res;
      }).catch(() => caches.match(req).then(r => r || caches.match('./index.html')))
    );
    return;
  }

  e.respondWith(
    caches.match(req).then(cached => cached || fetch(req).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(req, copy));
      return res;
    }).catch(() => cached))
  );
});

/* Notifications fired by the page while it is alive or backgrounded. */
self.addEventListener('message', e => {
  const d = e.data || {};
  if (d.type === 'notify') {
    self.registration.showNotification(d.title || 'Burn the Boats', {
      body: d.body || '',
      tag: d.tag || 'btb',
      renotify: true,
      badge: './icon-192.png',
      icon: './icon-192.png',
      data: { url: './' },
    });
  }
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
      for (const c of list) if ('focus' in c) return c.focus();
      if (clients.openWindow) return clients.openWindow('./');
    })
  );
});
