//SHOP BAR ========================================================================================/
// Variables--------------------------------------------------------------------------------------------
let addButton = document.querySelectorAll('.add-button');
let removeButton = document.querySelectorAll('.removeButton');
let products = [
	{
		name: 'petals',
		price: 3.5,
		inBox: 0
	},
	{
		name: 'orange',
		price: 3.5,
		inBox: 0
	},
	{
		name: 'avocado',
		price: 3.5,
		inBox: 0
	},
	{
		name: 'coconut',
		price: 3.5,
		inBox: 0
	},
	{
		name: 'silver',
		price: 3.5,
		inBox: 0
	},
	{
		name: 'berry',
		price: 3.5,
		inBox: 0
	},
	{
		name: 'choco',
		price: 3.5,
		inBox: 0
	},
	{
		name: 'almond',
		price: 3.5,
		inBox: 0
	},
	{
		name: 'grape',
		price: 3.5,
		inBox: 0
	}
]
for (let i=0; i < addButton.length; i++){
	addButton[i].addEventListener('click', () => {
		boxNumbers();
	})
}

for (let i=0; i < removeButton.length; i++){
	removeButton[i].addEventListener('click', () => {
		removeBoxNumbers();
	})
}

function boxNumbers(){
	let productNumbers = localStorage.getItem('boxNumbers');
	let productPrices = localStorage.getItem('boxNumbers');
	productNumbers = parseInt(productNumbers);
	productPrices = parseInt(productPrices);

	if(productNumbers){
		localStorage.setItem('boxNumbers', productNumbers + 1);
		document.querySelector('.box-total span').textContent = productNumbers + 1;
		localStorage.setItem('productPrices', productPrices + 3.5);
		document.querySelector('.box-total-price span').textContent = productPrices + 3.50;
	} else{
		localStorage.setItem('boxNumbers', 1);
		document.querySelector('.box-total span').textContent = 1;
		localStorage.setItem('productPrices', 3.50);
		document.querySelector('.box-total-price span').textContent = 3.50;
	}
}

function removeBoxNumbers(){
	let productNumbers = localStorage.getItem('boxNumbers');
	let productPrices = localStorage.getItem('boxNumbers');
	productNumbers = parseInt(productNumbers);
	productPrices = parseInt(productPrices);

	if(productNumbers){
		localStorage.setItem('boxNumbers', productNumbers - 1);
		document.querySelector('.box-total span').textContent = productNumbers - 1;
		localStorage.setItem('productPrices', productPrices - 3.5);
		document.querySelector('.box-total-price span').textContent = productPrices - 3.50;
	} else{
		localStorage.setItem('boxNumbers', 0);
		document.querySelector('.box-total span').textContent = 0;
		localStorage.setItem('productPrices', 0);
		document.querySelector('.box-total-price span').textContent = 0;
	}
}