'use strict'


// Variables--------------------------------------------------------------------------------------------
let activeState = false;
let toggleButton = document.querySelector(".toggler");

let dropdownMenu = document.querySelector("#dropdown");
dropdownMenu.setAttribute('aria-active', 'false');


// Functions and Interactive Script----------------------------------------------------------------------
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
	dropdownMenu.classList.toggle("active");
	ariaAttribute();
})
