let cacheData = 'TodoApp';
this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                'static/js/bundle.js',
                'index.html',
                
                'images/delete.svg',
                'images/tick.svg',
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