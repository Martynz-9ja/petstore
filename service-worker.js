var cacheName= 'petstoreV1';
var cacheFiles= [
    'index.html',
    'product.js',
    'petstore.webmanifest',
    'images/yarn.jpg',
    'images/cat-litter.jpg',
    'images/laser-pointer.jpg',
    'images/cat-house.jpg',
    'images/icon-512.png',
    'images/icon-store-32.png'
];

self.addEventListener('install', (e)=>{
    console.log('[Service Worker] Install');
    e.waitUntil(
        caches.open(cacheName).then((cache) =>{
            console.log('[Service Worker] Caching all the files');
            return cache.addAll(cacheFiles);
        })
    );
});