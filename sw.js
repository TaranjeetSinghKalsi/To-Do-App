let cacheData = 'TodoApp';
this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                'https://taranjeetsinghkalsi.github.io/To-Do-App/static/js/bundle.js',
                'https://taranjeetsinghkalsi.github.io/To-Do-App/index.html',
                'https://taranjeetsinghkalsi.github.io/To-Do-App/',
                'https://taranjeetsinghkalsi.github.io/To-Do-App/images/delete.svg',
                'https://taranjeetsinghkalsi.github.io/To-Do-App/images/tick.svg',
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