let cacheData = 'TodoApp';
this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                '/static/css/main.a6b6b6c9.css',
                '/static/js/main.9f7feb8c.js',
                '/'
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