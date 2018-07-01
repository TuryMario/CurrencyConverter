// import idb from 'idb';
// await idb.open(…);

// /**
//  * Opens the indexed database.
//  */
// function openDatabase() {
//   // If the browser doesn't support service worker,
//   // we don't care about having a database
//   if (!navigator.serviceWorker) {
//     return Promise.resolve();
//   }

//   return idb.open('currency-converter-db', 1, (upgradeDb) => {
//     switch (upgradeDb.oldVersion) {
//       case 0:
//         upgradeDb.createObjectStore('currencies');
//         upgradeDb.createObjectStore('exchange-rates');
//     }
//   });
// }
