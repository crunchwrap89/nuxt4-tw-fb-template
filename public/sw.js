// Minimal dev service worker to stop router warnings.
self.addEventListener('install', (event) => {
  self.skipWaiting();
});
