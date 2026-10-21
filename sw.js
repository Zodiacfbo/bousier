// Service worker : rend le jeu installable et jouable hors connexion.
// Stratégie « réseau d'abord » : on sert toujours la dernière version publiée,
// et le cache ne sert que quand il n'y a pas de réseau.
const CACHE = 'bousier-' + new URL(self.registration.scope).pathname;
const CORE = ['./', 'index.html', 'manifest.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/apple-touch-icon.png', 'vendor/firebase.js?v=4', 'fonts/vt323-latin.woff2'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  // Seuls les fichiers du jeu et les polices vont en cache (pas le classement)
  const url = new URL(e.request.url);
  if (url.origin !== location.origin && !url.hostname.startsWith('fonts.')) return;
  e.respondWith(
    fetch(e.request).then(res => {
      if (res.ok || res.type === 'opaque') {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
      }
      return res;
    }).catch(() => caches.match(e.request, { ignoreSearch: true }))
  );
});
