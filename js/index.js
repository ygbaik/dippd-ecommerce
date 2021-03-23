'use strict'; 



//CHECKOUT MENU ========================================================================================/
// Variables--------------------------------------------------------------------------------------------

// Receiving Buttons
let pickupButton = document.querySelector(".receiving-buttons.pickup");
pickupButton.setAttribute('aria-active', 'true');

let deliveryButton = document.querySelector(".receiving-buttons.delivery");
pickupButton.setAttribute('aria-active', 'false');

// Checkout sections
let billingAddressPickup = document.querySelector(".info-billing-address-pickup");
billingAddressPickup.setAttribute('aria-active', 'true');

let addressDelivery=document.querySelector(".info-address-delivery");
addressDelivery.setAttribute('aria-active', 'false');
let billingAddressDelivery=document.querySelector(".info-billing-address-delivery");
billingAddressDelivery.setAttribute('aria-active', 'false');


// Input Bar
let inputBar = document.querySelector(".input-bar");

let optionsContainer = document.querySelector(".time-container");
optionsContainer.setAttribute('aria-active', 'false');

let menuFirstItem = document.querySelector('.time-container label:first-of-type');
let timeList = document.querySelectorAll(".time-option");
let inputName = document.querySelector(".input-bar-text");
let inputArrow = document.querySelector(".input-bar-arrow")


// Functions and Interactive Script----------------------------------------------------------------------

// Receiving Buttons

pickupButton.addEventListener("click", () => {
	//change color of buttons
	pickupButton.classList.add("active");
	pickupButton.setAttribute('aria-active', 'true');
	deliveryButton.classList.remove("active");
	deliveryButton.setAttribute('aria-active', 'false');

	//adding pickup section
	billingAddressPickup.classList.add("active");
	billingAddressPickup.setAttribute('aria-active', 'true');

	//removing delivery section
	addressDelivery.classList.remove("active");
	addressDelivery.setAttribute('aria-active', 'false');
	billingAddressDelivery.classList.remove("active");
	billingAddressDelivery.setAttribute('aria-active', 'false');
})

deliveryButton.addEventListener("click", () => {
	//change color of buttons
	deliveryButton.classList.add("active");
	deliveryButton.setAttribute('aria-active', 'true');
	pickupButton.classList.remove("active");
	pickupButton.setAttribute('aria-active', 'false');

	//adding delivery section
	addressDelivery.classList.add("active");
	addressDelivery.setAttribute('aria-active', 'true');
	billingAddressDelivery.classList.add("active");
	billingAddressDelivery.setAttribute('aria-active', 'ture');

	//removing pickup section
	billingAddressPickup.classList.remove("active");
	billingAddressPickup.setAttribute('aria-active', 'false');
})

// Input Bar
function inputBarStyling() {
	//active input bar styling
	if (optionsContainer.classList.contains("active")){
		inputBar.classList.add("opened");
		inputArrow.innerHTML='▴';
	}
	//non active input bar styling
	else{
		inputBar.classList.remove("opened");
		inputArrow.innerHTML='▾';
	}
}

inputBar.addEventListener("click", () =>{
	//change inputBar to active
	optionsContainer.classList.toggle("active");
	optionsContainer.setAttribute('aria-active', 'true');
	// menuFirstItem.focus();
	// console.log(dropdown);
	inputBarStyling();
})


timeList.forEach(o => {
	o.addEventListener("click", () => {
		//change label of input bar and remove active state
		inputName.innerHTML = o.querySelector("label").innerHTML;
		optionsContainer.classList.remove("active");
		optionsContainer.setAttribute('aria-active', 'false');
		// inputArrow.innerHTML='▾';
		// inputBar.classList.remove("opened");
		inputName.style.fontFamily = "ubuntu mono, monospace";
		// console.log(dropdown);
		inputBarStyling();
	})
}
