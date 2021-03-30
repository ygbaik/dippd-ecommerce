'use stict';

// JS API from flickity
// https://flickity.metafizzy.co
// Copyright 2015-2021 Metafizzy

console.log('hello world');

//CAROUSEL SETTINGS
let carousel = document.querySelector('.main-carousel');
let flickity = new Flickity(carousel, {

	wrapAround: true,
	/* at end of cells, wraps-around to first for infinite scrolling */

	accessibility: false,
	/* enable keyboard navigation, pressing left & right keys */

	prevNextButtons: false,
	/* creates and enables buttons to click to previous & next cells */

	pageDots: false,
	/* create and enable page dots */

	draggable: true,
	/* enables dragging & flickin
	freeScroll: false,
	enables content to be freely scrolled and flicked
	without aligning cells */

	friction: 0.2,
	/* smaller number = easier to flick farther */

	cellAlign: 'center',
	/* alignment of cells, 'center', 'left', or 'right'
	or a decimal 0-1, 0 is beginning (left) of container, 1 is end (right) */

	// cellSelector: '.topic-switcher__item',
	/* specify selector for cell elements */

	contain: false,
	/* will contain cells to container
	so no excess scroll at beginning or end
	has no effect if wrapAround is enabled */

	autoPlay: false,
	pauseAutoPlayOnHover: false,
	/* advances to the next cell
	if true, default is 3 seconds
	or set time between advances in milliseconds
	i.e. `autoPlay: 1000` will advance every 1 second */

	initialIndex: 0,
	/* zero-based index of the initial selected cell */

	lazyLoad: false,
	/* enable lazy-loading images
	set img data-flickity-lazyload="src.jpg"
	set to number to load images adjacent cells */

	percentPosition: true,
	/* sets positioning in percent values, rather than pixels
	Enable if items have percent widths
	Disable if items have pixel widths, like images */

	resize: true,
	/* listens to window resize events to adjust size & positions */

	rightToLeft: false,
	/* enables right-to-left layout */

	setGallerySize: true,
	/* sets the height of gallery
	disable if gallery already has height set with CSS */

	watchCSS: false
	/* watches the content of :after of the element
	activates if #element:after { content: 'flickity' }
	IE8 and Android 2.3 do not support watching :after
	set watch: 'fallbackOn' to enable for these browsers */
});