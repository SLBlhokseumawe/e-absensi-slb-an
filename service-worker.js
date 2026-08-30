const CACHE_NAME = "e-absen-slb-an-portrait-v6";
const SHELL = ["./","./index.html","./manifest.json","./icon-192.svg","./icon-512.svg"];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(SHELL).catch(()=>{})));
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  if(event.request.method!=="GET") return;
  const u=new URL(event.request.url);
  if(u.hostname==="script.google.com") return;
  event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request)));
});
