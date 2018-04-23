var data = null;

document.addEventListener('DOMContentLoaded', function() {

  var xhr = new XMLHttpRequest();
  var body = "name=Katy";
  xhr.open("POST", 'http://localhost:3000/cart', true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function() {//Вызывает функцию при смене состояния.
      if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
          // Запрос завершен. Здесь можно обрабатывать результат.
      }
  }
  xhr.send(body);
}) 

 function loadJSON(callback) {   

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', 'data.json', true);
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }

function loadProductsFromData(searchData) {
  var cards = document.getElementById('product-cards-container');
  var result = '';
  for(var i = 0; i < searchData.length; i++) {
    var productCard = `<div class="product-card">
                        <div class="product-img-wrapper">
                          <img src="` + searchData[i][1] + `" class="product-img">
                        </div>
                        <div class="product-description">
                          <div class="product-price">` + searchData[i][2] + ` грн. </div>
                          <div class="product-name">` + searchData[i][0] + `</div>
                          <div class="button-cta-wrapper">
                            <div class="button-cta add-to-cart">
                              <a href="#">Add to cart</a>
                            </div>
                          </div>
                        </div>
                      </div>`;
    result += productCard;
  }
  cards.innerHTML = result;
}

function init() {
  loadJSON(function(response) {
  // Parse JSON string into object
     data =  JSON.parse(response);
     loadProductsFromData(data['candy']);
     var categories = document.getElementsByClassName('category');
     [...categories].forEach(function(item, i) {
      item.onclick = function () {
        var categoryName = this.dataset.name;
        loadProductsFromData(data[categoryName]);
      };
     }) 
  });
  
}

function addProductToCart(productName) {
  var cart = document.getElementsByClassName('cart')[0];
  var item = document.createElement('li');
  item.classList.add('cart-item');
  item.innerHTML = productName;
  cart.appendChild(item);
}

window.onload = function() {
 
  var addButtons = document.getElementsByClassName('add-to-cart');
  console.log(i);
  for(var i = 0; i < addButtons.length; i++) {
    addButtons[i].addEventListener('click', function(e) {
      var name = this.parentNode.parentNode.getElementsByClassName('product-name')[0].innerHTML;
      addProductToCart(name);
    })
  }
  var searchButton = document.getElementById('nav-search-button');
  searchButton.addEventListener('click', function() {
    var search = document.getElementById('nav-search-input').value.trim();
    searchProducts(search);
  })
}

function toggleCart(button) {
  var cart = document.getElementsByClassName('cart')[0];
  button.addEventListener('click', function(e) {
    cart.classList.toggle("cart-popup");
  })
}

function searchProducts(search) {
  var searchList = [];
  if (search) {
    for(var category in data) {
      for(var j = 0; j < data[category].length; j++) {
        if(data[category][j][0].indexOf(search) !== -1) {
          searchList.push(data[category][j]);
        }
      }
    }
    loadProductsFromData(searchList);
  } else {
    loadProductsFromData(data['candy']);
  }
}

init();
toggleCart(document.getElementsByClassName('cart-icon')[0]);
toggleCart(document.getElementsByClassName('close-cart')[0]);


// function search(source, name) {
//     var results = ;

//     name = name.toUpperCase();
//     results = source.filter(function(entry) {
//         return entry.name.toUpperCase().indexOf(name) !== -1;
//     });
//     return results;
// }

// function createElement(id, name, price, imgLink) {
//   var product = document.createElement('div');
//   product.setAttribute('class', 'product-card');
//   var productId = "product_" + id;
//   product.setAttribute('id', productId);

//   var innerImg = document.createElement('div');
//   innerImg.setAttribute('class', 'product-img-wrapper');
//   innerImg.style.backgroundImage = 'url("' + imgLink + '")';
//   product.appendChild(innerImg);


// }