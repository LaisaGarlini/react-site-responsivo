// service-worker.js
self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('pwa-cache').then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/static/js/bundle.js',
          '/static/js/main.chunk.js',
          '/static/js/0.chunk.js',
          // Adicione outros arquivos que devem ser cacheados
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });  