var cacheName = 'SmartCharts';
var filesToCache = [
  './index.html',
  './dist/smartcharts.css',
  './dist/browser-detection.js',
  './dist/babel-polyfill.min.js',
  './dist/chartiq.min.js',
  './dist/react.js',
  './dist/react-dom.js',
  './dist/react-transition-group.js',
  './dist/mobx.js',
  './dist/mobx-react.js',
  './dist/smartcharts.js'
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName)
    .then(function(cache) {
      return cache.addAll(filesToCache);
    })
    .catch( error =>  console.log('install error', error) )
  );
});

self.addEventListener('activate', function(event){
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event){
  if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') {return;}
  event.respondWith(
    caches.match(event.request, {ignoreSearch:true})
    .then(function(response){
      return response || fetch(event.request);
    })
    .catch( error =>  console.log('fetch error', error) )
  );
});

// self.addEventListener('fetch', function(event) {
//   event.respondWith(
//     caches.match(event.request)
//       .then(function(response) {
//         if (response) {
//           return response;
//         } else {
//           return fetch(event.request)
//             .then(function(res) {
//               return caches.open(CACHE_DYNAMIC_NAME)
//                 .then(function(cache) {
//                   cache.put(event.request.url, res.clone());
//                   return res;
//                 })
//             })
//             .catch(function(err) {       // fallback mechanism
//               return caches.open(CACHE_CONTAINING_ERROR_MESSAGES)
//                 .then(function(cache) {
//                   return cache.match('/offline.html');
//                 });
//             });
//         }
//       })
//   );
// });  