var portfolio = document.getElementsByClassName('portfolio')[0];
var cv = document.getElementsByClassName('cv')[0];
cv.addEventListener('click', function() {
	document.getElementsByClassName('home-portfolio')[0].style.display = 'none';
	document.getElementsByClassName('home-cv')[0].style.display = 'block';
})
portfolio.addEventListener('click', function() {
	document.getElementsByClassName('home-portfolio')[0].style.display = 'block';
	document.getElementsByClassName('home-cv')[0].style.display = 'none';
})