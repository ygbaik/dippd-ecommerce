'use stict';

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

const slider = document.querySelector('.slider');

const carouselContainer = document.querySelector('carousel-container').offsetWidth;

let index = 0;

next.addEventListener('click', () => {
	index++;
	slider.style.transform = 'translateX(-${index * carouselContainer}px)';
})