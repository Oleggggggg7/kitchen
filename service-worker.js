const CACHE_NAME = 'kitchen';
const urlsToCache = [
  '/',
  '/index.html',
  '/prohib.html',
  '/test.html',
  '/contact.html',
  '/style.css',
  '/test.js',
  '/tarakan.jpg',
  '/infridge.jpg',
  '/chicken.jpg',
  '/i1.png',
  '/i2.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
