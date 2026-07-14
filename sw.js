// Background service worker for app installation
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // Allows the app to request live data from Firebase smoothly
  event.respondWith(fetch(event.request));
});