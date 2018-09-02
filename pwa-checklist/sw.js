var cacheName = 'SmartCharts';
var filesToCache = [
  'https://shayanbinary.binary.sx/pwa-checklist/index.html',
  'https://shayanbinary.binary.sx/pwa-checklist/dist/smartcharts.css',
  'https://shayanbinary.binary.sx/pwa-checklist/dist/babel-polyfill.min.js',
  'https://shayanbinary.binary.sx/pwa-checklist/dist/chartiq.min.js',
  'https://shayanbinary.binary.sx/pwa-checklist/dist/react.js',
  'https://shayanbinary.binary.sx/pwa-checklist/dist/react-dom.js',
  'https://shayanbinary.binary.sx/pwa-checklist/dist/react-transition-group.js',
  'https://shayanbinary.binary.sx/pwa-checklist/dist/mobx.js',
  'https://shayanbinary.binary.sx/pwa-checklist/dist/mobx-react.js',
  'https://shayanbinary.binary.sx/pwa-checklist/dist/smartcharts.js'
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