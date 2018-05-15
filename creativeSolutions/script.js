$(document).ready(function(){

	$(".menu__burger-icon").on("click", function (e) {
		e.preventDefault();
		if ($(this).hasClass('burger-open')) {
			$(".menu").css("transform", "translate(0, 0)");
			$(this).css("display", "none");
			$(".burger-close").css("display", "block");
		} else {
			$(".menu").removeAttr('style');
			$(this).removeAttr('style');
			$(".burger-open").css("display", "block");
		}
	});

	$(window).on('resize', function () {
		if ($(window).width() > 768) {
			$(".burger-open").removeAttr('style');
			$(".burger-close").removeAttr('style');
			$(".menu").removeAttr('style');
		}
	});

  // Configure sliders

  $('.work__slider').slick({
  	arrows: true,
    dots: true
  });  
  $('.team__slider').slick({
  	infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		speed: 1000,
		arrows: false,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					dots: true
				}
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true
				}
			}
		]
  });
  	$('.news-arrows-team').on('click', function (e) {
  		e.preventDefault();
		if ($(this).hasClass("news-arrows-prev-team")) {
			$('.team__slider').slick("slickPrev");
		} else {
			$('.team__slider').slick("slickNext");
		}
	});

  // Configure scroll

  	var scrollElem = document.getElementById('scroll-up');
	scrollElem.addEventListener('click', function() {
		scrollTo(document.documentElement, futurePosition('home'), 1450);
	});
	var home = document.getElementById('menu__home');
	home.addEventListener('click', function() {
		scrollTo(document.documentElement, futurePosition('home'), 1450);
	});	
	var about = document.getElementById('menu__about');
	about .addEventListener('click', function() {
		scrollTo(document.documentElement, futurePosition('about-section'), 1450);
	});	
	var services = document.getElementById('menu__services');
	services.addEventListener('click', function() {
		scrollTo(document.documentElement, futurePosition('services'), 1450);
	});
	var works = document.getElementById('menu__works');
	works.addEventListener('click', function() {
		scrollTo(document.documentElement, futurePosition('works'), 1450);
	});
	var contact = document.getElementById('menu__contact');
	contact.addEventListener('click', function() {
		scrollTo(document.documentElement, futurePosition('contact'), 1450);
	});


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

});

