const staticCacheName = 'site-static';
const assets = [
    './',
    './index.html',
    './js/app.js',
    './js/script.js',
    './css/materialize.css',
    './css/style.css',
    './js/materialize.js',
    './js/script.js',
    'https://fonts.googleapis.com/icon?family=Material+Icons',
    'https://code.jquery.com/jquery-2.1.1.min.js',
    './images/dammykeys04_logo.png',
    './images/dammykeys04.png',
    './manifest.json',
];

//instal service worker
self.addEventListener("install", evt => {

    evt.waitUntil(caches.open(staticCacheName).then(async (cache) => {
        let ok = [];

        try {
            ok = await cache.addAll(assets);
        } catch (err) {
            for await (let i of assets) {
                try {
                    ok = await cache.add(i);
                } catch (err) {
                }
            }
        }

        return ok;
    }));
});

self.addEventListener("fetch", e => {
    e.respondWith(
        //create cache called site-static
        caches.match(e.request).then(response => {
            //upload into cache
            return response || fetch(e.request);
        })
    );
});
