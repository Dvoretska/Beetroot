var form = document.getElementById('submitButton');
var dataObj = {
	name: "",
	email: "",
	phone: "",
	subject: "",
	message: ""
}
submitButton.addEventListener('submit', function(e) {
	e.preventDefault();
	var inputs = e.target.getElementByTagName('input');
	var textarea = e.target.getElementByTagName(textarea)[0];
	if(validateReq(e.target)) {
		if(validateContent(e.target)) {
			for(var i = 0; i < inputs.length; i++) {
				dataObj[inputs[i].getAttribute('name')] = inputs[i].value;
		// get data and fill object;
			}
		}
		dataObj.message = textarea.value;
		console.log(dataObj);
	};
	// validate required;

})

function validateReq(form) {
	if(form.querySelector('input[name="email"]').value.trim()) {
		form.querySelector('input[name="email"]').style.borderColor = 'red';
		return false;
	} else {
		form.querySelector('input[name="email"]').style.borderColor = '#ccc';
	}
	if(form.querySelector('textarea').value.trim()) {
		form.querySelector('textarea').style.borderColor = 'red';
		return false;
	} else {
		form.querySelector('textarea').style.borderColor = '#ccc';
	}
	return true;
}

function validateContent(form) {
	var reEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	var rePhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
	var deprecated = ['xxxl', 'super', 'buy'];
	if(!reEmail.test(form.querySelector('input[name="email"]').value.trim())) {
		form.querySelector('input[name="email"]').style.borderColor = 'red';
		return false;
	} else {
		form.querySelector('input[name="email"]').style.borderColor = '#ccc';
	}
	if((form.querySelector('input[name="phone"]').value.trim())&&(!rePhone.test(form.querySelector('input[name="phone"]').value.trim()))) {
		form.querySelector('input[name="phone"]').style.borderColor = 'red';
		return false;
	} else {
		form.querySelector('input[name="phone"]').style.borderColor = '#ccc';
	}
	var textarea = e.target.getElementByTagName(textarea)[0];
	var count = 0;
	for(var i = 0; i < deprecated.length; i++) {
		if(textarea.value.trim().indexOf(deprecated[i]) != -1) {
			count++;
		}
	}
	if(count) {
		textarea.style.borderColor = 'red';
	} else {
		textarea.style.borderColor = '#ccc';
	}
	return true;
}