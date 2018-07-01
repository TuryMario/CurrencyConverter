
//var idb = require('idb');
//Check if browser supports service worker
if ('serviceWorker' in navigator){

  navigator.serviceWorker
    .register('service-worker.js', { scope: './'})//regiter SW and set it's scope
    .then( (registration) => {
      console.log("Service Worker Registered");
    })
    .catch( (err) => {
      console.log("Service Worker failed to register", err);
    })
}
 


let convertCurrency = () => {
  let toCurrency = document.getElementById("toCurrency").value;
  let fromCurrency = document.getElementById("fromCurrency").value;

  let xhr = new XMLHttpRequest();
  let url = "https://free.currencyconverterapi.com/api/v5/convert?q="+fromCurrency+"_"+toCurrency+","+toCurrency+"_"+fromCurrency+"&compact=ultra";
  xhr.open("GET",url,true);
  xhr.send();

  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let result = xhr.responseText;
      //alert(result);

      let jsResult = JSON.parse(result);

      //var obj = { first: 'someVal' };
      let res = jsResult[Object.keys(jsResult)[0]];
      //let res2 = jsResult[Object.keys(jsResult)[1]];
      //console.log(res2*res1);
      //let oneUnit = res1;
      let amount = document.getElementById("fromAmount").value;
      document.getElementById("toAmount").value = (res * amount).toFixed(2);
    } 
  }

};




//Function that performs HTTP request
// let get = (url) => {
//   return new Promise( (resolve, reject) => {

//     let xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = () => {
//       if (xhr.readyState == XMLHttpRequest.DONE) {
//         if (xhr.status == 200){
//           let result = xhr.responseText;
//           result = JSON.parse(result);
//           resolve(result);
//         } else {
//           reject(xhr);
//         }
//       }
//     };

//     xhr.open("GET", url, true);
//     xhr.send();
//   });
// };


// get('https://free.currencyconverterapi.com/api/v5/convert?q='+USD+'_'+PHP+','+PHP+'_'+USD+'&compact=ultra')
//   .then( (response) => {
//     console.log("Success", response);
//     document.getElementByClassName('targetImage'.src = response.url);
//   })
//   .catch( (err) => {
//     console.log("Error", err);
 // })
