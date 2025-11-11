const CACHE_VERSION = 'v4';
const CACHE_NAME = `gloviera-${CACHE_VERSION}`;

const CORE_ASSETS = [
  '/',
  '/index.html',
  '/about.html',
  '/account.html',
  '/images/gallery/gallery.json',
  '/style.css',
  '/script.js',
  '/manifest.webmanifest',
  '/components/nav.js',
  '/components/splash.js',
  '/components/appointments.js',
  '/components/products.js',
  '/images/logo.png',
  '/images/icons/icon-128.png',
  '/images/icons/icon-192.png',
  '/images/icons/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key.startsWith('gloviera-') && key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request)
        .then((networkResponse) => {
          if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
            return networkResponse;
          }

          const cloned = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, cloned));
          return networkResponse;
        })
        .catch(() => caches.match('/index.html'));
    })
  );
});
