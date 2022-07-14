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

gsap.set('.intro-img-wrap', {
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
			const tl = gsap.timeline();
			tl.to(
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
			tl.to(
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

const revealDevelopment = document.querySelectorAll('.mission-development');

revealDevelopment.forEach((container) => {
	const img = container.querySelector('.mission-development__bottle-roated');
	const tl = gsap.timeline({
		scrollTrigger: {
			trigger: container,
		},
	});

	tl.set(container, { autoAlpha: 1 });
	tl.from(img, {
		opacity: 1,
		scale: 0.85,
		delay: -1,
		ease: Power4.out,
		duration: 1,
	});
});

const revealPower = document.querySelectorAll('.mission-power');

revealPower.forEach((container) => {
	const img = container.querySelector('.mission-power__img img');
	const tl = gsap.timeline({
		scrollTrigger: {
			trigger: container,
		},
	});

	tl.set(container, { autoAlpha: 1 });
	tl.from(img, {
		opacity: 1,
		yPercent: 20,
		delay: -1,
		ease: Power4.out,
		duration: 0.7,
	});
});

gsap.set('.productivity img', {
	opacity: 0,
	yPercent: 20,
});

ScrollTrigger.batch('.productivity', {
	start: 'top 80%',
	end: 'bottom 10%',
	onEnter: (batch) => {
		batch.forEach((card, index) => {
			const img = card.querySelectorAll('img');
			const tl = gsap.timeline();
			tl.to(
				img,
				{
					opacity: 1,
					yPercent: 0,
					stagger: 0.2,
					delay: index * 0.5,
					ease: Power3.easeOut,
					duration: 1.5,
				},
				0.8
			);
		});
	},
	once: true,
});

function paralax(selector, scroller, amplitude = 20) {
	// gsap.registerPlugin(ScrollTrigger)
	const paralaxImages = document.querySelectorAll(selector);
	paralaxImages.forEach((image) => {
		gsap
			.timeline({
				scrollTrigger: {
					trigger: image,
					start: '20% bottom',
					once: true,
					scroller: scroller ? scroller : null,
				},
			})
			.to(image, { autoAlpha: 1 }, '<');
		gsap
			.timeline({
				ease: 'none',
				scrollTrigger: {
					trigger: image,
					scrub: 0.5,
					scroller: scroller ? scroller : null,
				},
			})
			.fromTo(
				image,
				{
					y: amplitude,
				},
				{
					y: amplitude * -1,
					ease: 'linear',
				}
			);
	});
}

paralax('.shape-summary__image', document.body, 100);
paralax('.fragrances-card__img', document.body, 50);
paralax('.success-card__img', document.body, 40);
paralax('.app-intro__center-img', document.body, 30);
paralax('.founder-presentation__img-wrap img', document.body, 25);
paralax('.mission-bg', document.body, 50);

gsap.set('.enhancing__img-wrap', {
	xPercent: 5,
});

gsap.set('.enhancing__img-wrap img', {
	opacity: 0,
	xPercent: 20,
});

ScrollTrigger.batch('.enhancing__img-wrap', {
	start: 'top 80%',
	end: 'bottom 10%',
	onEnter: (batch) => {
		batch.forEach((card, index) => {
			const img = card.querySelectorAll('img');
			const tl = gsap.timeline();
			tl.to(
				card,
				{
					xPercent: 0,
					ease: Power4.easeOut,
					duration: 0.2,
				},
				0.2
			);
			tl.to(
				img,
				{
					opacity: 1,
					xPercent: 0,
					stagger: 0.1,
					delay: index * 0.2,
					ease: Power4.easeOut,
					duration: 1.5,
				},
				1
			);
		});
	},
	once: true,
});

gsap.set('.app-card', {
	opacity: 0,
	xPercent: 20,
});

ScrollTrigger.batch('.app-card', {
	start: 'top 80%',
	end: 'bottom 10%',
	onEnter: (batch) => {
		batch.forEach((card, index) => {
			const tl = gsap.timeline();
			tl.to(
				card,
				{
					opacity: 1,
					xPercent: 0,
					delay: index * 0.2,
					ease: Power4.easeOut,
					duration: 1,
				},
				0.4
			);
		});
	},
	once: true,
});
