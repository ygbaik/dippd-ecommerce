//PRODUCT INPUT ========================================================================================/
// Petals Donut
let petalsAdd = document.querySelector('.add-button.petals');
let petalsSub = document.querySelector('.removeButton.petals');
let petalsInput = document.querySelector('.petals-input');

petalsAdd.addEventListener('click', () =>{
	petalsInput.value = parseInt(petalsInput.value) + 1;
});

petalsSub.addEventListener('click', () =>{
	if(petalsInput.value == 0){
		petalsInput.value = 0;
	} else{
		petalsInput.value = parseInt(petalsInput.value) - 1;
	}
});

//Coconut Donut
let coconutAdd = document.querySelector('.add-button.coconut');
let coconutSub = document.querySelector('.removeButton.coconut');
let coconutInput = document.querySelector('.coconut-input');

coconutAdd.addEventListener('click', () =>{
	coconutInput.value = parseInt(coconutInput.value) + 1;
});

coconutSub.addEventListener('click', () =>{
	if(coconutInput.value == 0){
		coconutInput.value = 0;
	} else{
		coconutInput.value = parseInt(coconutInput.value) - 1;
	}
});

//Choco donut
let chocoAdd = document.querySelector('.add-button.choco');
let chocoSub = document.querySelector('.removeButton.choco');
let chocoInput = document.querySelector('.choco-input');

chocoAdd.addEventListener('click', () =>{
	chocoInput.value = parseInt(chocoInput.value) + 1;
});

chocoSub.addEventListener('click', () =>{
	if(chocoInput.value == 0){
		chocoInput.value = 0;
	} else{
		chocoInput.value = parseInt(chocoInput.value) - 1;
	}
});

//Orange Donut
let orangeAdd = document.querySelector('.add-button.orange');
let orangeSub = document.querySelector('.removeButton.orange');
let orangeInput = document.querySelector('.orange-input');

orangeAdd.addEventListener('click', () =>{
	orangeInput.value = parseInt(orangeInput.value) + 1;
});

orangeSub.addEventListener('click', () =>{
	if(orangeInput.value == 0){
		orangeInput.value = 0;
	} else{
		orangeInput.value = parseInt(orangeInput.value) - 1;
	}
});

//Silver Donut
let silverAdd = document.querySelector('.add-button.silver');
let silverSub = document.querySelector('.removeButton.silver');
let silverInput = document.querySelector('.silver-input');

silverAdd.addEventListener('click', () =>{
	silverInput.value = parseInt(silverInput.value) + 1;
});

silverSub.addEventListener('click', () =>{
	if(silverInput.value == 0){
		silverInput.value = 0;
	} else{
		silverInput.value = parseInt(silverInput.value) - 1;
	}
});

//Almond Donut
let almondAdd = document.querySelector('.add-button.almond');
let almondSub = document.querySelector('.removeButton.almond');
let almondInput = document.querySelector('.almond-input');

almondAdd.addEventListener('click', () =>{
	almondInput.value = parseInt(almondInput.value) + 1;
});

almondSub.addEventListener('click', () =>{
	if(almondInput.value == 0){
		almondInput.value = 0;
	} else{
		almondInput.value = parseInt(almondInput.value) - 1;
	}
});

//Avocado Donut
let avocadoAdd = document.querySelector('.add-button.avocado');
let avocadoSub = document.querySelector('.removeButton.avocado');
let avocadoInput = document.querySelector('.avocado-input');

avocadoAdd.addEventListener('click', () =>{
	avocadoInput.value = parseInt(avocadoInput.value) + 1;
});

avocadoSub.addEventListener('click', () =>{
	if(avocadoInput.value == 0){
		avocadoInput.value = 0;
	} else{
		avocadoInput.value = parseInt(avocadoInput.value) - 1;
	}
});

//Berry Donut
let berryAdd = document.querySelector('.add-button.berry');
let berrySub = document.querySelector('.removeButton.berry');
let berryInput = document.querySelector('.berry-input');

berryAdd.addEventListener('click', () =>{
	berryInput.value = parseInt(berryInput.value) + 1;
});

berrySub.addEventListener('click', () =>{
	if(berryInput.value == 0){
		berryInput.value = 0;
	} else{
		berryInput.value = parseInt(berryInput.value) - 1;
	}
});

//Grape Donut
let grapeAdd = document.querySelector('.add-button.grape');
let grapeSub = document.querySelector('.removeButton.grape');
let grapeInput = document.querySelector('.grape-input');

grapeAdd.addEventListener('click', () =>{
	grapeInput.value = parseInt(grapeInput.value) + 1;
});

grapeSub.addEventListener('click', () =>{
	if(grapeInput.value == 0){
		grapeInput.value = 0;
	} else{
		grapeInput.value = parseInt(grapeInput.value) - 1;
	}
});