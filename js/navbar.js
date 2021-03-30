'use strict'

// References (also found inline):
// - Shrinking nav bar source: https://codepen.io/DZuz14/pen/PoqZOjV


// NAVBAR========================================================================/
// Variables---------------------------------------------------------------
let navBar = document.querySelector(".main-nav");
navBar.setAttribute('aria-active', 'false');

let animatedBreakpoint = window.matchMedia("(max-width: 769px)");
let test = true;

//Functions and interactive script-----------------------------------------
// Scroll function
// Prevent aniamtion if screen is bigger than tablet size
function scrollClose(e){
	if (e.matches){
		// console.log("hello");
		test=false;
	}
	else{
		test=true;
	}
}

animatedBreakpoint.addListener(scrollClose);  // Listeners to prevent nav bar animation
scrollClose(animatedBreakpoint);

function ariaScroll(){
	//Change aria attribute and arrow text
	if (navBar.classList.contains("active")){ 
		navBar.setAttribute('aria-active', 'true');
	}
	else{
		navBar.setAttribute('aria-active', 'false');
	}
}

window.addEventListener("scroll", function(){
	let offset = window.pageYOffset;

	if (offset >= 25 && test==true) {
		navBar.classList.add("active");
		ariaScroll();
	}
	else{
		navBar.classList.remove("active");
		ariaScroll();
	}
});

// function navScroll(){
// 	if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
// 		navBar.classList.add("active");
// 		ariaScroll();
// 		console.log("working");
// 	}
// 	else{
// 		navBar.classList.remove("active");
// 		ariaScroll();
// 	}
// }
