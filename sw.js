self.addEventListener("install", e=>{
  e.waitUntil(
    caches.open("king-pro").then(cache=>{
      return cache.addAll([
        "./",
        "./index.html",
        "./song.mp3",
        "./manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", e=>{
  e.respondWith(
    caches.match(e.request).then(r=>r||fetch(e.request))
  );
});