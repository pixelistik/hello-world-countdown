// https://remysharp.com/2016/03/22/the-copy--paste-guide-to-your-first-service-worker
// we'll version our cache (and learn how to delete caches in
// some other post)
const cacheName = 'v0.5.0::static';

self.addEventListener('install', e => {
  // once the SW is installed, go ahead and fetch the resources
  // to make this work offline
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
        '/',
        '/js/bundle.js',
        '/node_modules/materialize-css/dist/css/materialize.min.css',
        '/node_modules/materialize-css/dist/fonts/roboto/Roboto-Regular.woff2',
        '/css/main.css',
        '/manifest.json'
        /*
          DEAR READER,
          ADD A LIST OF YOUR ASSETS THAT
          YOU WANT TO WORK WHEN OFFLINE
          TO THIS ARRAY OF URLS
        */
      ]).then(() => self.skipWaiting());
    })
  );
});

// when the browser fetches a url, either response with
// the cached object or go ahead and fetch the actual url
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(cacheName)
        .then(function (cache) {
            return cache.match(event.request).then(res => res || fetch(event.request))
        })

  );
});
