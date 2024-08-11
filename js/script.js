// Dark theme buttons
let darkThemeButton = document.querySelector('.theme-button-dark');
let lightThemeButton = document.querySelector('.theme-button-light');

darkThemeButton.onclick = function () {
	darkThemeButton.classList.add('active');
	lightThemeButton.classList.remove('active');
	document.body.classList.add('dark');
};

lightThemeButton.onclick = function () {
	darkThemeButton.classList.remove('active');
	lightThemeButton.classList.add('active');
	document.body.classList.remove('dark');
};

// Font theme buttons
let fontButtonSansSerif = document.querySelector('.font-button-sans-serif');
let fontButtonSerif = document.querySelector('.font-button-serif');

fontButtonSansSerif.onclick = function () {
	fontButtonSansSerif.classList.add('active');
	fontButtonSerif.classList.remove('active');
	document.body.classList.remove('serif');
};

fontButtonSerif.onclick = function () {
	fontButtonSansSerif.classList.remove('active');
	fontButtonSerif.classList.add('active');
	document.body.classList.add('serif');
};

// Text read more button
let articleSections = document.querySelectorAll('.articles.short');

for (let articleSection of articleSections) {
	let moreButton = articleSection.querySelector('.more');
	moreButton.onclick = function () {
		articleSection.classList.remove('short');
	};
};

// Rental list
let cardViewButtonGrid = document.querySelector('.card-view-button-grid');
let cardViewButtonList = document.querySelector('.card-view-button-list');
let rentalCards = document.querySelector('.rental-cards');

cardViewButtonGrid.onclick = function () {
	cardViewButtonGrid.classList.add('active');
	cardViewButtonList.classList.remove('active');
	rentalCards.classList.remove('list');
};

cardViewButtonList.onclick = function () {
	cardViewButtonGrid.classList.remove('active');
	cardViewButtonList.classList.add('active');
	rentalCards.classList.add('list');
};

// Gallery
let mainImage = document.querySelector('.active-img');
let previewImages = document.querySelectorAll('.preview-item a');

for (let activeImage of previewImages) {
	activeImage.onclick = function (evt) {
		evt.preventDefault();
		mainImage.src = activeImage.href;
		let currentActive = document.querySelector('.gallery-wrapper .active-item');
		currentActive.classList.remove('active');
		activeImage.classList.add('active');
	};
};