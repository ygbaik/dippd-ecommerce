//https://www.youtube.com/watch?v=tEAl7L62GEw&ab_channel=TelmoSampaio

//SHOP BAR ========================================================================================/
let addButton = document.querySelectorAll('.add-button');
let removeButton = document.querySelectorAll('.removeButton');

let productNumbers = localStorage.getItem('boxNumbers');
document.querySelector('.box-total span').textContent = productNumbers;
let productPrices = localStorage.getItem('boxPrices');
document.querySelector('.box-total-price span').textContent = productPrices;

for (let i=0; i < addButton.length; i++){
	addButton[i].addEventListener('click', () => {
		boxNumbers();
		boxPrices();
	})
}

for (let i=0; i < removeButton.length; i++){
	removeButton[i].addEventListener('click', () => {
		removeBoxNumbers();
		removeBoxPrices();
	})
}

function boxNumbers(){
	let productNumbers = localStorage.getItem('boxNumbers');
	productNumbers = parseInt(productNumbers);

	if(productNumbers > 0 && productNumbers < 6){
		localStorage.setItem('boxNumbers', productNumbers + 1);
		document.querySelector('.box-total span').textContent = productNumbers + 1;
	} else if(productNumbers == 0){
		localStorage.setItem('boxNumbers', 1);
		document.querySelector('.box-total span').textContent = 1;
	} else{
		localStorage.setItem('boxNumbers', productNumbers);
		document.querySelector('.box-total span').textContent = productNumbers;
	}
}

function boxPrices(){
	let productPrices = localStorage.getItem('boxPrices');
	productPrices = parseFloat(productPrices);

	if(productPrices > 0 && productPrices < 21){
		localStorage.setItem('boxPrices', productPrices + 3.50);
		document.querySelector('.box-total-price span').textContent = productPrices + 3.50;
	} else if (productPrices == 0){
		localStorage.setItem('boxPrices', 3.50);
		document.querySelector('.box-total-price span').textContent = 3.50;
	} else{
		localStorage.setItem('boxPrices', productPrices);
		document.querySelector('.box-total-price span').textContent = productPrices;
	}
}

function removeBoxNumbers(){
	let productNumbers = localStorage.getItem('boxNumbers');
	productNumbers = parseInt(productNumbers);

	if(productNumbers > 0){
		localStorage.setItem('boxNumbers', productNumbers - 1);
		document.querySelector('.box-total span').textContent = productNumbers - 1;
	} else{
		localStorage.setItem('boxNumbers', 0);
		document.querySelector('.box-total span').textContent = 0;
	}
}

function removeBoxPrices(){
	let productPrices = localStorage.getItem('boxPrices');
	productPrices = parseFloat(productPrices);

	if(productPrices > 0){
		localStorage.setItem('boxPrices', productPrices - 3.50);
		document.querySelector('.box-total-price span').textContent = productPrices - 3.50;
	} else{
		localStorage.setItem('boxPrices', 0);
		document.querySelector('.box-total-price span').textContent = 0;
	}
}
