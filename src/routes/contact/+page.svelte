<script>
	import { onMount } from 'svelte';
	import Lenis from 'lenis';
	import Icon from '$lib/components/Icon.svelte';
	import workspace from '$lib/assets/images/contact/advanced-workspace.png';

	const nubelsonFernandes =
		'https://unsplash.com/@nublson?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash';

	let formData = { name: '', email: '', message: '' };

	let lastScrollY = 0;
	let showHeader = true;
	let footerInView = false;

	let animateTitle = false;
	let animateDescription = false;
	let animateForm = false;
	let animateImage = false;
	let animateHeader = false;

	let headerReady = false;

	/**
	 * @param {{ preventDefault: () => void; }} e
	 */
	function handleSubmit(e) {
		e.preventDefault();
		console.log('Form submitted:', formData);
		alert('Message sent! (This is a demo)');
	}

	/**
	 * @param {{ target: { name: any; value: any; }; }} e
	 */
	function handleChange(e) {
		formData = { ...formData, [e.target.name]: e.target.value };
	}

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	function setupFooterObserver() {
		const footer = document.querySelector('footer');
		if (!footer) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					footerInView = entry.isIntersecting;
				});
			},
			{ threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
		);

		observer.observe(footer);
	}

	onMount(() => {
		// Lenis smooth scroll
		const lenis = new Lenis({
			duration: 2.5,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			smoothWheel: true
		});

		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);

		lenis.on('scroll', ({ scroll }) => {
			const currentScrollY = scroll;
			const isScrollingDown = currentScrollY > lastScrollY;
			if (Math.abs(currentScrollY - lastScrollY) > 20) {
				showHeader = !isScrollingDown;
				lastScrollY = currentScrollY;
			}
		});

		// Trigger animations immediately
		requestAnimationFrame(() => {
			animateTitle = true;
			animateDescription = true;
			animateForm = true;
			animateImage = true;
			animateHeader = true;
			headerReady = true;
		});

		setupFooterObserver();
	});
</script>

<svelte:head>
	<link rel="preload" as="image" href="/src/lib/assets/images/contact/advanced-workspace.png" />
</svelte:head>

<div class="min-h-screen font-mono text-primary-50">
	<header
		class="header fixed top-0 right-0 left-0 z-50 mix-blend-difference"
		class:header--hidden={!showHeader && headerReady}
		class:slide-from-top={animateHeader && !headerReady}
		class:slide-from-top-start={!animateHeader && !headerReady}
		style="transition-duration: 0.6s;"
	>
		<div
			class="max-w-desktop mx-auto flex items-center justify-between px-6 py-6 md:px-7 md:py-8 lg:px-10"
		>
			<div class="flex items-center gap-6">
				<a href="/">
					<h1 class="text-lg font-bold">DAVID UDO</h1>
				</a>
				<a
					href="/contact"
					class="inline-flex items-center justify-center rounded-full bg-primary-700 p-3 hover:cursor-pointer"
				>
					<Icon name="phone" size={12} />
				</a>
			</div>
			<div class="flex items-center gap-6">
				<button class="inline-flex items-center justify-center hover:cursor-pointer">
					<Icon name="search" size={20} />
				</button>
				<button
					class="group relative overflow-hidden bg-white px-4 py-1.5 text-sm
         font-bold text-black transition-colors duration-300 hover:cursor-pointer"
					style="clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));"
				>
					<span
						class="absolute inset-0 -translate-x-full bg-accent-500 transition-transform
           duration-500 ease-out group-hover:translate-x-0"
					></span>
					<span class="relative z-10">MENU</span>
				</button>
			</div>
		</div>
	</header>

	<main class="lg:pt-16">
		<section class="pt-24 lg:pb-12">
			<div class="max-w-desktop mx-auto px-6 md:px-7 lg:px-10">
				<div class="grid items-start gap-12 lg:grid-cols-2">
					<div class="mt-10 space-y-14 lg:sticky lg:top-42">
						<div>
							<div class="relative mb-4 overflow-hidden text-3xl font-bold md:text-5xl">
								<h2
									class:slide-from-bottom={animateTitle}
									class:slide-from-bottom-start={!animateTitle}
								>
									RING A BELL!
								</h2>
							</div>
							<div
								class="relative overflow-hidden text-base leading-relaxed text-primary-400 md:text-xl"
							>
								<p
									class:slide-from-bottom={animateDescription}
									class:slide-from-bottom-start={!animateDescription}
								>
									REACH OUT AND LET'S CREATE SOMETHING AMAZING TOGETHER. LET'S ACHIEVE GREATNESS.
								</p>
							</div>
						</div>

						<div class:slide-from-bottom={animateForm} class:slide-from-bottom-start={!animateForm}>
							<h3 class="mb-6 text-lg font-bold md:text-2xl">FILL THIS FORM OUT</h3>
							<form on:submit={handleSubmit} class="space-y-4">
								<div class="grid gap-4 md:grid-cols-2">
									<input
										type="text"
										name="name"
										placeholder="NAME"
										bind:value={formData.name}
										class="w-full border-none bg-primary-700 px-5 py-4 text-base placeholder-primary-50/50 transition-colors focus:ring-accent-500 focus:outline-none md:px-6 md:py-5"
										required
									/>
									<input
										type="email"
										name="email"
										placeholder="E-MAIL"
										bind:value={formData.email}
										class="w-full border-none bg-primary-700 px-5 py-4 text-base placeholder-primary-50/50 transition-colors focus:ring-accent-500 focus:outline-none md:px-6 md:py-5"
										required
									/>
								</div>
								<textarea
									name="message"
									placeholder="MESSAGE"
									bind:value={formData.message}
									rows="6"
									class="w-full border-none bg-primary-700 px-5 py-4 text-base placeholder-primary-50/50 transition-colors focus:ring-accent-500 focus:outline-none md:px-6 md:py-5"
									required
								></textarea>
								<button
									type="submit"
									class="group relative w-full overflow-hidden bg-white py-4 text-sm font-bold text-black transition-all duration-300 hover:cursor-pointer md:py-5"
									style="clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px));"
								>
									<span
										class="absolute inset-0 -translate-x-full bg-accent-500 transition-transform duration-900 ease-out group-hover:translate-x-0"
									></span>
									<span class="relative z-10">SEND EMAIL</span>
								</button>
							</form>
						</div>
					</div>

					<div
						class="corner relative h-[450px] overflow-hidden md:h-[600px] lg:h-[1000px]"
						class:slide-from-bottom={animateImage}
						class:slide-from-bottom-start={!animateImage}
					>
						<img src={workspace} alt="Workspace setup" class="h-full w-full object-cover" />

						<div
							class="noisy-overlay animate-noise pointer-events-none absolute inset-0 z-20 mix-blend-overlay"
						></div>

						<a
							href={nubelsonFernandes}
							class="absolute right-4 bottom-4 text-xs text-primary-100 opacity-40 transition-opacity hover:opacity-50"
						>
							///PHOTO BY NUBELSON FERNANDES
						</a>
					</div>
				</div>
			</div>
		</section>

		<section
			class="mx-6 mt-14 grid gap-8 border-t border-primary-600 pt-12 md:mx-7 lg:mx-10 lg:mt-24 lg:grid-cols-4"
		>
			<div>
				<h4 class="mb-5 text-base text-primary-500 md:text-lg">FOLLOW ME</h4>
				<ul class="space-y-4 font-primary text-lg font-bold md:text-xl">
					<li>
						<a href="https://github.com/davidudo" class="transition-colors hover:text-primary-300"
							>GITHUB</a
						>
					</li>
					<li>
						<a
							href="https://www.linkedin.com/in/davidudo"
							class="transition-colors hover:text-primary-300">LINKEDIN</a
						>
					</li>
					<li>
						<a
							href="https://instagram.com/_davidudo"
							class="transition-colors hover:text-primary-300">INSTAGRAM</a
						>
					</li>
					<li>
						<a href="https://twitter.com/_davidudo" class="transition-colors hover:text-primary-300"
							>TWITTER X</a
						>
					</li>
					<li>
						<a
							href="https://www.facebook.com/davidudo46"
							class="transition-colors hover:text-primary-300">FACEBOOK</a
						>
					</li>
				</ul>
			</div>
			<div>
				<h4 class="mb-5 text-base text-primary-500 md:text-lg">CURRENT LOCATION</h4>
				<p class="font-primary text-xl font-bold">NIGERIA</p>
			</div>
			<div>
				<h4 class="mb-5 text-base text-primary-500 md:text-lg">PHONE</h4>
				<a
					href="tel:+2348107587015"
					class="font-primary text-xl font-bold transition-colors hover:text-primary-300"
				>
					NG +234 810 758 7015
				</a>
			</div>
			<div>
				<h4 class="mb-5 text-base text-primary-500 md:text-lg">EMAIL ME</h4>
				<a
					href="mailto:dave.etim.udo@gmail.com"
					class="font-primary text-xl font-bold transition-colors hover:text-primary-300"
				>
					DAVE.ETIM.UDO@GMAIL.COM
				</a>
			</div>
		</section>
	</main>

	<footer class="mx-6 mt-14 border-t border-primary-600 py-10 md:mx-7 lg:mx-10 lg:mt-24">
		<div class="max-w-desktop mx-auto">
			<h2
				class="flex flex-wrap items-center justify-center gap-2 overflow-hidden text-4xl font-extrabold tracking-tighter md:gap-6 md:text-[100px] lg:text-[180px]"
			>
				<span
					class="footer-text leading-none transition-all duration-700 ease-out"
					class:slide-up={footerInView}
					class:slide-down={!footerInView}>DAVID</span
				>
				<span
					class="footer-spacer flex items-center transition-all delay-100 duration-700 ease-out md:hidden"
					class:slide-up={footerInView}
					class:slide-down={!footerInView}
				>
					<Icon name="spacer" size={12} color="#FFFFFF" />
				</span>
				<span
					class="footer-spacer hidden transition-all delay-100 duration-700 ease-out md:flex md:items-center"
					class:slide-up={footerInView}
					class:slide-down={!footerInView}
				>
					<Icon name="spacer" size={20} color="#FFFFFF" />
				</span>
				<span
					class="footer-text text-accent-400 leading-none transition-all delay-200 duration-700 ease-out"
					class:slide-up={footerInView}
					class:slide-down={!footerInView}>ETIM</span
				>
				<span
					class="footer-spacer flex items-center transition-all delay-300 duration-700 ease-out md:hidden"
					class:slide-up={footerInView}
					class:slide-down={!footerInView}
				>
					<Icon name="spacer" size={12} color="#FFFFFF" />
				</span>
				<span
					class="footer-spacer hidden transition-all delay-300 duration-700 ease-out md:flex md:items-center"
					class:slide-up={footerInView}
					class:slide-down={!footerInView}
				>
					<Icon name="spacer" size={20} color="#FFFFFF" />
				</span>
				<span
					class="footer-text leading-none transition-all delay-400 duration-700 ease-out"
					class:slide-up={footerInView}
					class:slide-down={!footerInView}>UDO</span
				>
			</h2>

			<div
				class="flex w-full flex-col items-center justify-between gap-y-3 text-lg text-primary-50 md:flex-row"
			>
				<p class="mt-4">©2025 DAVID.UDO</p>
				<button
					on:click={scrollToTop}
					class="font-secondary transition-colors hover:cursor-pointer hover:text-primary-300"
				>
					GO BACK TO TOP
				</button>
			</div>
		</div>
	</footer>
</div>

<style>
	.header {
		transform: translateY(0);
		opacity: 1;
		transition:
			transform 0.8s ease,
			opacity 0.8s ease;
		will-change: transform, opacity;
	}

	.header--hidden {
		transform: translateY(-40%);
		opacity: 0;
	}

	.corner {
		clip-path: polygon(
			0 0,
			calc(100% - 20px) 0,
			100% 20px,
			100% 100%,
			20px 100%,
			0 calc(100% - 20px)
		);
	}

	@media (min-width: 768px) {
		.corner {
			clip-path: polygon(
				0 0,
				calc(100% - 30px) 0,
				100% 30px,
				100% 100%,
				30px 100%,
				0 calc(100% - 30px)
			);
		}
	}

	.noisy-overlay {
		background: url('/src/lib/assets/images/noisy-overlay.png');
		opacity: 0.1;
		inset: -200%;
		width: 400%;
		height: 400%;
		position: absolute;
		will-change: transform;
		background-repeat: repeat;
		background-size: auto;
		transform: translateX(-10%) translateY(10%);
	}

	@keyframes noise {
		0%,
		100% {
			transform: translate(0, 0);
		}
		10% {
			transform: translate(-5%, -5%);
		}
		20% {
			transform: translate(-10%, 5%);
		}
		30% {
			transform: translate(5%, -10%);
		}
		40% {
			transform: translate(-5%, 15%);
		}
		50% {
			transform: translate(-10%, 5%);
		}
		60% {
			transform: translate(15%, 0);
		}
		70% {
			transform: translate(0, 10%);
		}
		80% {
			transform: translate(-15%, 0);
		}
		90% {
			transform: translate(10%, 5%);
		}
	}

	.animate-noise {
		animation: noise 8s steps(10) infinite;
	}

	.footer-text,
	.footer-spacer {
		transform: translateY(120%);
		opacity: 0;
		will-change: transform, opacity;
	}

	.footer-text.slide-up,
	.footer-spacer.slide-up {
		transform: translateY(0);
		opacity: 1;
	}

	.footer-text.slide-down,
	.footer-spacer.slide-down {
		transform: translateY(120%);
		opacity: 0;
	}

	/* New ground-up slide animations */
	.slide-from-top {
		transform: translateY(0);
		opacity: 1;
		transition:
			transform 0.6s ease-out,
			opacity 0.6s ease-out;
	}

	.slide-from-top-start {
		transform: translateY(-100px);
		opacity: 0;
	}

	.slide-from-bottom {
		transform: translateY(0);
		opacity: 1;
		transition:
			transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94),
			opacity 0.8s ease-out;
	}

	.slide-from-bottom-start {
		transform: translateY(100px);
		opacity: 0;
	}

	.corner {
		overflow: hidden;
	}

	.corner.slide-from-bottom {
		transition-delay: 0.1s;
	}
</style>
