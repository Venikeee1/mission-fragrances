import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

const swiper = new Swiper('.reviews-slider', {
	loop: false,
	// autoHeight: true,
	centeredSlides: true,
	keyboard: true,
	spaceBetween: 50,
	slidesPerView: 1,
	initialSlide: 0,
	preloadImages: false,
	lazy: true,
	watchSlidesVisibility: true,
	speed: 400,
	// breakpoints: {
	// 	768: {
	// 		direction: 'vertical',
	// 	},
	// 	360: {
	// 		spaceBetween: 50,
	// 		centeredSlides: true,
	// 		direction: 'horizontal',
	// 	},
	// },

	// simulateTouch: true,
	navigation: {
		nextEl: '.reviews-slider-btn-next',
		prevEl: '.reviews-slider-btn-prev',
	},
	pagination: {
		el: '.swiper-pagination',
	},
});
