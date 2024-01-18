self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open('krxk').then((cache) => {
            return cache.addAll([
                'styles/TestJS.css'
            ])
        })
    )
})

self.addEventListener('fetch', (e) => {
    console.log(e.request.url)
    e.respondWith(caches.match(e.request)
        .then((response) => {
            return response || fetch(e.request)
        }))
})