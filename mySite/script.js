
document.addEventListener('DOMContentLoaded', function() {

  var page = window.location.href;
  if(page.indexOf('index.html') != -1) {
    document.getElementsByClassName('nav-logo-title')[0].firstChild.classList.add('active');
  }

    var headerHeight = document.querySelector('.nav-bar').getBoundingClientRect().height;
  function currentPosition() {
    return window.pageYOffset;
  }
  function futurePosition(elId) {
   var el = document.getElementById(elId);
   function getCoords(elem) { // кроме IE8-
      var box = elem.getBoundingClientRect();

      return {top: box.top + pageYOffset};

    }
    var elY = getCoords(el).top;
    return elY;
  }

  function scrollTo(elY) {
    console.log('elY', elY);
    if(elY > currentPosition()) {
      var i = 1;
      var myInterval = setInterval(function() {
         window.scrollTo(0, i*(elY - headerHeight)/1000);
        i++;
        if(i == 1001) {
            clearInterval(myInterval);
        }
      }, 20);
  } else {
   var j = 1001;
   var initialPositionTick = (currentPosition() - elY + headerHeight)/1000;
      var myInterval = setInterval(function() {
         window.scrollBy(0, -initialPositionTick);
        j--;
        if(j == 1) {
            clearInterval(myInterval);
        }
      }, 20);
  }
      
  }
  var links = document.querySelectorAll('.links a');
  for(var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(e) {
        e.preventDefault();
       var elId = this.getAttribute('data-goto');
       console.log('elId', elId)
       scrollTo(futurePosition(elId));
    })

  }

  var popup = document.getElementById('popup');
  var overlay = document.getElementsByClassName('overlay')[0];
  document.getElementsByClassName('auth-button')[0].addEventListener('click', function(e) {
    e.preventDefault();
    overlay.style.display = 'block';
    popup.style.display = 'block';
  })
  function hidePopup() {
    overlay.style.display = 'none';
    popup.style.display = 'none';
  }
  overlay.addEventListener('click', function(e) {
    hidePopup();
  });
  document.addEventListener('keydown', function(e) {
    if(e.which == 27) {
        hidePopup();
    }
  })
})

var slidePosition = 0;

    var slides = document.getElementsByClassName('slider-wrapper')[0];
    var slidesCount = slides.getElementsByClassName('reviews-wrapper').length;
    var maxScroll = 100 * slidesCount;
    function showPrevSlide(e) {
        slidePosition += 100;
        if (slidePosition == 100) { slidePosition = 0; }
        document.getElementsByClassName('slider-wrapper')[0].style.transform = 'translateX(' + slidePosition + '%)';
    }
    function showNextSlide(e) {
        slidePosition -= 100;
        if (-slidePosition == maxScroll) {
            slidePosition = -maxScroll + 100;
        }
        document.getElementsByClassName('slider-wrapper')[0].style.transform = 'translateX(' + slidePosition + '%)';
    }
document.getElementsByClassName('prev')[0].addEventListener('click', showPrevSlide, false);
document.getElementsByClassName('next')[0].addEventListener('click', showNextSlide, false);








