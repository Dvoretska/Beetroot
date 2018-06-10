document.addEventListener("DOMContentLoaded", function(event) {
	document.getElementsByClassName('home-portfolio')[0].style.display = 'none';
	document.getElementsByClassName('home-cv')[0].style.display = 'block';
});

var portfolio = document.getElementsByClassName('portfolio')[0];
var cv = document.getElementsByClassName('cv')[0];
var contact = document.getElementsByClassName('contact')[0];
var arrow = document.getElementsByClassName('arrow-left');

function setArrow(id) {
	for(var i =0; i < arrow.length; i++) {
		arrow[i].style.display = 'none';
		if(arrow[i].dataset.id == id) {
			arrow[i].style.display = 'inline-block';
		}
	}
}
cv.addEventListener('click', function() {
	setArrow(this.getAttribute('id'))
	document.getElementsByClassName('home-portfolio')[0].style.display = 'none';
	document.getElementsByClassName('home-cv')[0].style.display = 'block';
})
portfolio.addEventListener('click', function() {
	setArrow(this.getAttribute('id'))
	document.getElementsByClassName('home-portfolio')[0].style.display = 'block';
	document.getElementsByClassName('home-cv')[0].style.display = 'none';
})
contact.addEventListener('click', function() {
	setArrow(this.getAttribute('id'))
	document.getElementsByClassName('home-portfolio')[0].style.display = 'block';
	document.getElementsByClassName('home-cv')[0].style.display = 'none';
})