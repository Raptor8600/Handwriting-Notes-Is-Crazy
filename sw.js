const CACHE = 'notecapture-v4';
const ASSETS = [
  '/Handwriting-Notes-Is-Crazy/',
  '/Handwriting-Notes-Is-Crazy/index.html',
  '/Handwriting-Notes-Is-Crazy/manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  // Take over immediately — don't wait for old SW to idle out
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  // Delete every old cache version
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const url = e.request.url;

  // Always go to network for API calls
  if (url.includes('anthropic.com') || url.includes('googleapis.com')) {
    return;
  }

  // Network-first for HTML pages — ensures updates are always picked up
  // without needing a hard refresh
  if (e.request.mode === 'navigate' || url.endsWith('.html') || url.endsWith('/')) {
    e.respondWith(
      fetch(e.request)
        .then(res => {
          if (res.ok) {
            const clone = res.clone();
            caches.open(CACHE).then(c => c.put(e.request, clone));
          }
          return res;
        })
        .catch(() => caches.match(e.request)) // fallback to cache if offline
    );
    return;
  }

  // Cache-first for everything else (manifest, icons, fonts)
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(res => {
        if (res.ok) {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return res;
      });
    })
  );
});
