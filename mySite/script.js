var data = null;

 function loadJSON(callback) {   

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', 'data.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }

function loadProducts(category) {
	var cards = document.getElementById('product-cards-container');
	var result = '';
	for(var i = 0; i < data[category].length; i++) {
		var productCard = `<div class="product-card">
			    <div class="product-img-wrapper">
						<img src="` + data[category][i][1] + `" alt="" class="product-img">
				</div>
				<div class="product-description">
					<div class="product-price">` + data[category][i][2] + ` грн. </div>
					<div class="product-name">` + data[category][i][0] + `</div>
					<div class="product-rating">
						<div class="stars-outer">
          					<div class="stars-inner" v-bind:style="stars"></div>
        				</div>
        			</div>
        			<div class="button-cta-wrapper">
	        			<div class="button-cta">
							<a href="#">Buy</a>
						</div>
					</div>
				</div>
			</div>`;
			result += productCard;
     	// console.log(data['candy'][i][0], data['candy'][1], data['candy'][2])
     }
     cards.innerHTML = result;
}

function init() {
  loadJSON(function(response) {
  // Parse JSON string into object
     data =  JSON.parse(response);
     loadProducts('candy');
     var categories = document.getElementsByClassName('category');
     [...categories].forEach(function(item, i) {
     	item.onclick = function () {
     		var categoryName = this.dataset.name;
     		loadProducts(categoryName);
     	};
     }) 
  });
  
}

init();


