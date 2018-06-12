var portfolio = document.getElementsByClassName('portfolio')[0];
var cv = document.getElementsByClassName('cv')[0];
var contact = document.getElementsByClassName('contact')[0];
var arrow = document.getElementsByClassName('arrow-left');
var cvSection = document.getElementsByClassName('home-cv')[0];
var portfolioSection = document.getElementsByClassName('home-portfolio')[0];
var contactSection = document.getElementsByClassName('home-contact')[0];
var sections =  document.getElementsByClassName('span7');

document.addEventListener("DOMContentLoaded", function() {
	displaySection('home-cv')
	var menuItems = document.getElementsByClassName('nav-item');
	for(var i = 0; i < menuItems.length; i++) {
		menuItems[i].addEventListener('click', function() {
			for(var j = 0; j < menuItems.length; j++) {
				menuItems[j].classList.remove('active');
			}
			this.classList.add('active');
		})
	}
});

function setArrow(id) {
	for(var i =0; i < arrow.length; i++) {
		arrow[i].style.display = 'none';
		if(arrow[i].dataset.id == id) {
			arrow[i].style.display = 'inline-block';
		}
	}
}
function displaySection(section) {
	for(var i =0; i < sections.length; i++) {
		sections[i].style.display = 'none';
		if(sections[i].className.includes(section)) {
			sections[i].style.display = 'block';
		}
	}
}
cv.addEventListener('click', function() {
	setArrow(this.getAttribute('id'))
	displaySection('home-cv')
})
portfolio.addEventListener('click', function() {
	setArrow(this.getAttribute('id'))
	displaySection('home-portfolio')
})
contact.addEventListener('click', function() {
	setArrow(this.getAttribute('id'))
	displaySection('home-contact')
})