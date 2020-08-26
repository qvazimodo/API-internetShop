function makeGETRequest(url, callback) {
    var xhr;
  
    if (window.XMLHttpRequest) {
      xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) { 
      xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
  
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        callback(xhr.responseText);
      }
    }
  
    xhr.open('GET', url, true);
    xhr.send();
  }

 let bott = document.querySelector(".butt");
 console.log(bott);
 bott.onclick = function ()
 {
    makeGETRequest("responses/getBasket.json", (goods) => {
        this.goods = JSON.parse(goods);
        console.log(this.goods);
    } )
 }

  