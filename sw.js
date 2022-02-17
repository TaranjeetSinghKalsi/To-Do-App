let cacheData = 'TodoApp';
this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                '%PUBLIC_URL%/static/js/bundle.js',
                '%PUBLIC_URL%/index.html',
                '%PUBLIC_URL%/',
                '%PUBLIC_URL%/images/delete.svg',
                '%PUBLIC_URL%/images/tick.svg',
            ])
        })
    )
})

this.addEventListener("fetch",(event)=>{
    event.respondWith(
        caches.match(event.request).then((resp)=>{
            if(resp){
                return resp;
            }
        })
    )
})