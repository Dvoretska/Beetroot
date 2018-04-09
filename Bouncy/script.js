$(document).ready(function(){

  // Configure sliders

  $('.about__slider').slick({
  	arrows: false,
  	autoplay: true,
  	autoplaySpeed: 4000
  });
  $('.testimonials__slider').slick({
  	arrows: false,
    dots: true,
    autoplay: true,
  	autoplaySpeed: 4000
  });  
  $('.team__slider').slick({
  	arrows: false,
    dots: true
  });

  // Configure scroll

  var scrollElem = document.getElementsByClassName('about__scroll')[0];
	scrollElem.addEventListener('click', function() {
		scrollTo(document.documentElement, futurePosition('portfolio'), 1450);
	});
	var about = document.getElementById('menu__about');
	about.addEventListener('click', function() {
		scrollTo(document.documentElement, futurePosition('about'), 1450);
	});
	var portfolio = document.getElementById('menu__portfolio');
	portfolio.addEventListener('click', function() {
		scrollTo(document.documentElement, futurePosition('portfolio'), 1450);
	});	
	var team = document.getElementById('menu__team');
	team.addEventListener('click', function() {
		scrollTo(document.documentElement, futurePosition('team'), 1450);
	});
	var contactUs = document.getElementsByClassName('contact_us');
	for(var i = 0; i < contactUs.length; i++) {
		contactUs[i].addEventListener('click', function() {
			scrollTo(document.documentElement, futurePosition('contact'), 1450);
		});	
	}

	function futurePosition(elId) {
		var el = document.getElementById(elId);
		function getCoords(elem) { 
		  var box = elem.getBoundingClientRect();
		  	return {top: box.top + pageYOffset};
			}
		var elY = getCoords(el).top;
		return elY;
	}

	function scrollTo(element, to, duration) {
	    var start = element.scrollTop,
	        change = to - start,
	        currentTime = 0,
	        increment = 20;
	        
	    var animateScroll = function(){        
	        currentTime += increment;
	        var val = Math.easeInOutQuad(currentTime, start, change, duration);
	        element.scrollTop = val;
	        if(currentTime < duration) {
	            setTimeout(animateScroll, increment);
	        }
	    };
	    animateScroll();
	}

	Math.easeInOutQuad = function (time, startVal, change, duration) {
	  time /= duration/2;
		if (time < 1) return change/2*time*time + startVal;
		time--;
		return -change/2 * (time*(time-2) - 1) + startVal;
	};

    // Add active class to navigation item and configure filters

	var navigationItems = document.getElementsByClassName('navigation__item');
	for(var i = 0; i < navigationItems.length; i++) {
		navigationItems[i].addEventListener('click', function() {
			for(var j = 0; j < navigationItems.length; j++) {
				navigationItems[j].classList.remove('active');
			}
			this.classList.add('active');
			filterImages(this.innerHTML);
		})
	}

	function filterImages(filterItem='All works') {
		var galleryContainer = document.getElementsByClassName('gallery__container')[0];
		galleryContainer.innerHTML = '';
		for(let filter of dataImages) {
			var div = document.createElement('div');
			div.classList.add('my_column');
			for(var i = 0; i < filter.length; i++) {
				if(filterItem == 'All works' || filterItem == filter[i].type) {
					var innerDiv = document.createElement('div');
					innerDiv.classList.add('gallery__img');
					innerDiv.classList.add(filter[i].class);
					div.appendChild(innerDiv);
				}					
			}
			galleryContainer.appendChild(div);
		}
	}

	const dataImages = [[{class: 'gallery__img1', type: 'Print'}, {class: 'gallery__img2', type: 'Print'}, {class: 'gallery__img3', type: 'Print'}],
						[{class: 'gallery__img4', type: 'Branding'}, {class: 'gallery__img5', type: 'Branding'}, {class: 'gallery__img6', type: 'Branding'}],
						[{class: 'gallery__img7', type: 'Web'}, {class: 'gallery__img8', type: 'Web'}, {class: 'gallery__img9', type: 'Web'}],
						[{class: 'gallery__img10', type: 'HTML'}, {class: 'gallery__img11', type: 'HTML'}, {class: 'gallery__img12', type: 'HTML'}]]


	filterImages();
});

