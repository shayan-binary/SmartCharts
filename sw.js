var hostname = self.location.hostname,
ignoreDomains = ['localhost', '128', 'binary.sx'],
cacheName = 'SmartCharts-v0.0.1',
precacheFiles = [
    './index.html',
    './dist/smartcharts.css',
    './dist/browser-detection.js',
    './dist/babel-polyfill.min.js',
    './dist/react.js',
    './dist/react-dom.js',
    './dist/react-transition-group.js',
    './dist/mobx.js',
    './dist/mobx-react.js',
    './dist/smartcharts.js'
];


if (ignoreDomains.indexOf(hostname) !== -1) {
    cacheName += Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
}

self.addEventListener('install', function(e) {
    console.log('[PWA Builder] The service worker is being installed.');
    e.waitUntil(precache().then(function() {
        console.log('[PWA Builder] Skip waiting on install');
        return self.skipWaiting();
    }));
});

self.addEventListener('activate', function(e){
    console.log('[PWA Builder] Claiming clients for current page');
    return self.clients.claim();
});

self.addEventListener('fetch', function(e){
  if (e.request.cache === 'only-if-cached' && e.request.mode !== 'same-origin') {return;}
  console.log('[PWA Builder] The service worker is serving the asset. ' + e.request.url);

  e.respondWith(
    caches.match(e.request)
      .then(function(response) {
        if (response && ignoreDomains.indexOf(hostname) === -1) {
          console.log('load CACHE');
          return response;
        } else {
          return fetch(e.request)
            .then(function(res) {
              return caches.open(cacheName)
                .then(function(cache) {
                  console.log('load from internet');
                  cache.put(e.request.url, res.clone());    //save the response for future
                  return res;   // return the fetched data
                })
            })
            .catch(function(err) {       // fallback mechanism
              return caches.open(CACHE_CONTAINING_ERROR_MESSAGES)
                .then(function(cache) {
                  return cache.match('/offline.html');
                });
            });
        }
      })
  );

  e.waitUntil(update(e.request));
});

self.addEventListener('message', function (e) {
    if (e.data.action === 'skipWaiting') {
        self.skipWaiting();
    }
});

function precache() {
    return caches.open(cacheName).then(function (cache) {
        return cache.addAll(precacheFiles);
    });
}

function fromCache(request) {
    //we pull files from the cache first thing so we can show them fast
    return caches.open(cacheName).then(function (cache) {
        return cache.match(request).then(function (matching) {
            return matching || Promise.reject('no-match');
        });
    });
}

function update(request) {
    //this is where we call the server to get the newest version of the 
    //file to use the next time we show view
    return caches.open(cacheName).then(function (cache) {
        return fetch(request).then(function (response) {
            return cache.put(request, response);
        });
    });
}

function fromServer(request){
    //this is the fallback if it is not in the cache to go to the server and get it
    return fetch(request).then(function(response){ return response});
}
