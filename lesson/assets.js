// document.addEventListener("DOMContentLoaded", function() {
// 	var box = document.getElementsByClassName;
// 	document.getElementById('container').onclick = function(event) {
// 		console.log('event.target.parentNode', event.target.tagName)
// 		if(event.target.tagName != 'BUTTON') {
// 			return;
// 		} else {
// 			event.target.parentNode.style.display = "none"
// 		}
// 	}
// })

function isPrime(num) {
	for(let i = 2; i < num; i++) {
		if(num % i === 0) {
			return false;
		}
	}
	return num > 1
}

for (var i=0; i<10; i++) {
	console.log(i,' -> ',isPrime(i))
}


// function factorial(num) {
// 	if(num == 0 || num == 1) {
// 		return 1;
// 	} else {
// 		return num*factorial(num-1);
// 	}
// }

// console.log(factorial(6))

// function isBig(thing) {
//   if (thing == 0 || thing == 1 || thing == 2) {
//     return false
//   }
//   return true
// }
// console.log(isBig(1))    // false
// console.log(isBig([2]))  // false
// console.log(isBig([3]))  // tru