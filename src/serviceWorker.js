const CACHE_NAME = 'ts-cache-v1';
const urlsToCache = [
  '/',
  '/js/main.js',
  '/css/main.css',
];

self.addEventListener('install', (event) => {
  // Perform install steps
  event.waitUntil(caches.open(CACHE_NAME)
    .then((cache) => {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    }));
});
