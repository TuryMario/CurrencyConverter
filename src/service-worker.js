//cache name
let cacheName = 'v2';

//set array of cache files
let cacheFiles = [
	'./',
	'./index.html',
	'./css/reset.css',
	'./css/style.css',
	'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700,400italic,700italic',
	'./js/app.js'
]

// createDb => (){
// 	productDB = idb.open('products', 1,
// 		upgradeDB => (){
// 			var store = upgradeDB.createObjectStore('clothing', 
// 				{keyPath: 'id'}
// 			);

// 			store.createIndex('id', 'id');
// 		});
// };


//Install event
self.addEventListener('install', (e)=> {
	console.log("[ServiceWorker] Installed")

	//Wait until files are cached
	e.waitUntil(

		caches.open(cacheName).then( (cache) => {
			console.log("[ServiceWorker] Caching cacheFiles");
			return cache.addAll(cacheFiles);
		})

		//createDb()
	)
})

//Activate event
self.addEventListener('activate', (e)=>{
	console.log("[ServiceWorker] Activated")

	//wait until old cache files are deleted
	e.waitUntil(

		caches.keys().then( (cacheNames) => {
			return Promise.all(cacheNames.map( (thisCacheName) => {

				if (thisCacheName !== cacheName){
					console.log("[ServiceWorker] Removing cached files from ", thisCacheName);
					return caches.delete(thisCacheName);
				}
			}))
		})

	)
})

//fetch event
self.addEventListener('fetch', (e)=> {
	console.log("[ServiceWorker] fetching", e.request.url)
})