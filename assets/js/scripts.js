$(document).ready(function () {

	// Banner - Carousel
	$('.banner').owlCarousel({
		items: 1,
		loop: true,
		nav: false,
		dots: true
	});

	// Banner - Carousel
	$('.works-items').owlCarousel({
		items: 3,
		loop: true,
		nav: true,
		dots: false,
		margin: 30
	});

	// Testimonials - Carousel
	$('.testimonials').owlCarousel({
		items: 1,
		loop: true,
		nav: false,
		dots: true,
		autoplay: true
	});

	// Work Popup 
	$('.popup').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

});