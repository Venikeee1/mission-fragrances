import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
	start: 'top -70',
	end: 99999,
	toggleClass: { className: 'header--scrolled', targets: '.header' },
});

const toggleBtnRef = document.getElementById('toggle-menu');
const headerRef = document.querySelector('.header');

const toggleMenu = () => {
	toggleBtnRef.classList.toggle('on');
	headerRef.classList.toggle('active');
};

toggleBtnRef.addEventListener('click', toggleMenu);
