'use strict'

// References (also found inline):
// - JavaScript breakpoint source: https://www.w3schools.com/howto/howto_js_media_queries.asp and https://css-tricks.com/working-with-javascript-media-queries




// Variables--------------------------------------------------------------------------------------------
let activeState = false;
let toggleButton = document.querySelector(".toggler");

let dropdownMenu = document.querySelector("#dropdown");
dropdownMenu.setAttribute('aria-active', 'false');

let dropdownWrapper = document.querySelector(".dropdown-wrapper");
dropdownWrapper.setAttribute('aria-open', 'false');

let dropdownOpacity = document.querySelector(".dark-opacity");
dropdownOpacity.setAttribute('aria-open', 'false');

// JavaScript breakpoint source: https://www.w3schools.com/howto/howto_js_media_queries.asp and https://css-tricks.com/working-with-javascript-media-queries/
let dropdownBreakpoint = window.matchMedia("(min-width: 769px)");


// Functions and Interactive Script----------------------------------------------------------------------
// Close hamburger menu if screen is bigger than tablet size
function hamburgerClose(e){
	if (e.matches){
		dropdownMenu.setAttribute('aria-active', 'false');
		dropdownMenu.classList.remove("active");
		// console.log("hello");
	}
}

dropdownBreakpoint.addListener(hamburgerClose);  // Listeners to close dropdownMenu
hamburgerClose(dropdownBreakpoint);

// Change aria attribute
function ariaAttribute (){
	if (dropdownMenu.classList.contains("active")){
		dropdownMenu.setAttribute('aria-active', 'true');
	}
	else{
		dropdownMenu.setAttribute('aria-active', 'false');
	}
}

// Activate dropdown menu
toggleButton.addEventListener("click", () => {
	if (!dropdownWrapper.classList.contains("open") && !dropdownOpacity.classList.contains("open")){
		// Set dropdown menu to active
		dropdownMenu.classList.add("active");

		// Activate dropdown open animation
		dropdownWrapper.classList.add("open");
		dropdownWrapper.classList.remove("close");
		dropdownWrapper.setAttribute('aria-open', 'true');

		// Activate opacity open animation
		dropdownOpacity.classList.add("open");
		dropdownOpacity.classList.remove("close");
		dropdownOpacity.setAttribute('aria-open', 'true');
		ariaAttribute();
	}
	else{
		// Activate dropdown close animation
		dropdownWrapper.classList.remove("open");
		dropdownWrapper.classList.add("close");
		dropdownWrapper.setAttribute('aria-open', 'false');

		// Activate opacity close animation
		dropdownOpacity.classList.remove("open");
		dropdownOpacity.classList.add("close");
		dropdownOpacity.setAttribute('aria-open', 'false');
		// dropdownMenu.classList.remove("active");
		// activeAttribute();
		ariaAttribute();
	}
})
