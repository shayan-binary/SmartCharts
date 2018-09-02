var cacheName = 'SmartCharts';
var filesToCache = [
  '/pwa-checklist/index.html',
  '/pwa-checklist/dist/smartcharts.css',
  '/pwa-checklist/dist/babel-polyfill.min.js',
  '/pwa-checklist/dist/chartiq.min.js',
  '/pwa-checklist/dist/react.js',
  '/pwa-checklist/dist/react-dom.js',
  '/pwa-checklist/dist/react-transition-group.js',
  '/pwa-checklist/dist/mobx.js',
  '/pwa-checklist/dist/mobx-react.js',
  '/pwa-checklist/dist/smartcharts.js'
];


self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install', e);
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(event){
  console.log('activate', event);
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event){
  console.log('fetch');
  event.respondWith(
    caches.match(event.request, {ignoreSearch:true}).then(function(response){
      return response || fetch(event.request);
    })
  );
});