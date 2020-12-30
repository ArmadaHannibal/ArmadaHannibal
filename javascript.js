/*var slides = document.querySelectorAll('.slider');
var btns = document.querySelectorAll('.btn');
let currentSlide = 1;
var manualNav = function(manual){
	slides.forEach((slide) =>{
		slide.classList.remove('active');

		btns.forEach((btn) => {
			btn.classList.remove('active');
		});
	});
	slides[manual].classList.add('active');
	btns[manual].classList.add('active');
}

btns.forEach((btn, i) =>{
	btn.addEventListener("click", () =>{
		manualNav(i);
		currentSlide = 1;
	});
});*/

var counter = 1;
setInterval(function(){
	document.getElementById('radio' + counter).checked = true;
	counter++;
	if (counter > 5) {
		counter = 1;
	}
},5000);