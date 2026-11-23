/* Sin conexión: red primero (siempre la última versión) y caché si no hay internet */
const V = "mf-v7", FILES = ["./","./index.html","./manifest.webmanifest","./icon.svg","./css/styles.css","./js/app.js","./js/efectos.js","./js/ilustraciones.js","./js/data.js","./js/dibujos.js","./js/dibujos2.js","./js/dibujos3.js","./js/profundos.js","./js/profundos10.js","./js/profundos11.js","./js/profundos12.js","./js/profundos2.js","./js/profundos3.js","./js/profundos4.js","./js/profundos5.js","./js/profundos6.js","./js/profundos7.js","./js/profundos8.js","./js/profundos9.js","./js/tutoriales-3.js","./js/tutoriales-4.js","./js/tutoriales-extra.js"];
self.addEventListener("install", e => e.waitUntil(caches.open(V).then(c => c.addAll(FILES)).then(() => self.skipWaiting())));
self.addEventListener("activate", e => e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x !== V).map(x => caches.delete(x)))).then(() => clients.claim())));
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(fetch(e.request).then(r => { const cp = r.clone(); caches.open(V).then(c => c.put(e.request, cp)); return r; })
    .catch(() => caches.match(e.request).then(m => m || caches.match("./index.html"))));
});
