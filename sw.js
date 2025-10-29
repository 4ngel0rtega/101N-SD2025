// Creamos una variable para el nombre del caché
const CACHE_NAME = 'mi-portafolio-cache-v1-PWA';
// Archivos a cachear
const urlsToCache = [
    '/',
    '/styles/index.css',
    '/scripts/index.js',
    '/assets/about-me-img.png',
    '/assets/about-me-img2.png',
    '/assets/astronaut.png',
    '/assets/astronaut2.png',
    '/assets/bg-hero.jpg',
    '/assets/contact-img-horizontal.png',
    '/assets/contact-img.png',
    '/assets/logo.png',
    '/assets/skills-img.png',
];

// Evento Install
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then( cache => {
            return cache.addAll(urlsToCache);
        })
    );
})

// Evento Activar
// Se encarga de la activación del service worker y de la limpieza de caches antiguas
self.addEventListener('activate', e => {
    const cacheWhiteList = [CACHE_NAME];
    e.waitUntil(
        caches.keys().then(cachesNames => {
            return Promise.all(
                // Recorrer los nombres de las caches
                cachesNames.map(cacheName => {
                    if (cacheWhiteList.indexOf(cacheName) === -1) {
                        // Eliminar caches que no se necesitan o ya no existan en la cache
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
})

// Evento fetch con el que se recuperan los recursos y si no esta en cache los solicita
self.addEventListener('fetch', e => {
    e.respondWith(
        // Responde con los recursos en cache
        caches.match(e.request)
            .then(response => {
                if (response) {
                    // Si hay respuesta en cache, la devuelve datos desde cache
                    return response
                }
                // Si no hay respuesta en cache, realiza la petición al servidor.
                return fetch(e.request);
            })
    );
})