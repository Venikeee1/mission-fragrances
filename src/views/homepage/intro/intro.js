import { gsap, Power3, Power4 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const revealContainers = document.querySelectorAll('.intro');

revealContainers.forEach((container) => {
	const title = container.querySelector('.intro-title');
	const tl = gsap.timeline({
		scrollTrigger: {
			trigger: container,
		},
	});

	tl.set(container, { autoAlpha: 1 });
	tl.from(title, {
		opacity: 1,
		xPercent: -20,
		delay: -1,
		ease: Power4.out,
		duration: 1.5,
	});
});

gsap.set('.intro-img-wrap img', {
	opacity: 0,
	xPercent: 20,
	scale: 0.9,
});

gsap.set('.intro-img-wrap img', {
	opacity: 0,
	yPercent: 20,
	scale: 0.9,
});

ScrollTrigger.batch('.intro-img-wrap', {
	start: 'top 80%',
	end: 'bottom 10%',
	onEnter: (batch) => {
		batch.forEach((card, index) => {
			// const img = card.querySelectorAll('.conditions-card-img');
			const img = card.querySelectorAll('img');
			const chart_tl = gsap.timeline();
			chart_tl.to(
				card,
				{
					opacity: 1,
					xPercent: 0,
					scale: 1,
					delay: index * 0.4,
					ease: Power3.easeOut,
					duration: 1,
				},
				0.4
			);
			chart_tl.to(
				img,
				{
					opacity: 1,
					yPercent: 0,
					stagger: 0.2,
					delay: index * 0.5,
					ease: Power3.easeOut,
					duration: 2.5,
				},
				0.8
			);
		});
	},
	once: true,
});
