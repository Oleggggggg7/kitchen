const CACHE_NAME = 'cooking-courses-v1';
const urlsToCache = [
  '/',
  '/index.php',
  '/prohib.php',
  '/test.php',
  '/contact.php',
  '/css/style.css',
  '/js/test.js',
  '/images/tarakan.jpg',
  '/images/infridge.jpg',
  '/images/chicken.jpg'
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