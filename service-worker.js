var cacheName= 'petstore-v1';
var cacheFiles= [
    'index.html',
    'product.js',
    'petstore.webmanifest',
    'images/yarn.png',
    'images/cat-litter.jpg',
    'images/laser-pointer.jpg',
    'images/cat-house.jpg',
    'images/icon-512.png'
];

self.addEventListener('install', (e)=>{
    console.log('[Service Worker] Install');
    e.waitUntil(
        cahes.open(cacheName).then((cache) =>{
            console.log('[Service Worker] Caching all the files');
            return cache.addAll(cacheFiles);
        })
    );
});