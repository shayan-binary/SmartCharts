var cacheName = 'SmartCharts';
var filesToCache = [
  '/',
  '/index.html',
  '/dist/smartcharts.css',
  '/dist/babel-polyfill.min.js',
  '/dist/chartiq.min.js',
  '/dist/react.js',
  '/dist/react-dom.js',
  '/dist/react-transition-group.js',
  '/dist/mobx.js',
  '/dist/mobx-react.js',
  '/dist/smartcharts.js'
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, {ignoreSearch:true}).then(response => {
      return response || fetch(event.request);
    })
  );
});