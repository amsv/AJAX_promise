const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

let goods = [];

function httpGet(url) {

  return new Promise(function(resolve, reject) {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function() {
      if (this.status == 200) {
        resolve(this.response);
      } else {
        var error = new Error(this.statusText);
        error.code = this.status;
        reject(error);
      }
    };

    xhr.onerror = function() {
      reject(new Error("Network Error"));
    };

    xhr.send();
  });

}
function fetchGoods() {
  httpGet(`${API_URL}/catalogData.json`)
      .then(
        response => JSON.parse(response)
        ,
        error => alert(`Rejected: ${error}`)
      )
      .then((res) => res.forEach(ell => {
            return goods.push(ell)
          }
        ) 
      );       
}

fetchGoods();
// Немогу разобраться почему не получеться обращаться к эментам массива через goods[]
console.log(goods);// Почему в этом случае выводит массив с  обектами
console.log(goods[0].price);// А в этом выводит udefined