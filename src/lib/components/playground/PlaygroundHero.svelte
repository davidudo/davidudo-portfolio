<script lang="ts">
	import { onMount } from 'svelte';
	import cyclingImg from '$lib/assets/playground/morning-jogging.webp';
	import motorsportsImg from '$lib/assets/playground/ps4-sessions.webp';
	import videogamesImg from '$lib/assets/playground/movies.webp';

	let scrollY = $state(0);
	let innerWidth = $state(0);
	let scrollProgress = $derived(Math.min(scrollY / 300, 1));

	onMount(() => {
		innerWidth = window.innerWidth;
		const handleScroll = () => {
			scrollY = window.scrollY;
		};
		const handleResize = () => {
			innerWidth = window.innerWidth;
		};
		window.addEventListener('scroll', handleScroll);
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', handleResize);
		};
	});
</script>

<section class="relative h-[600px] w-full overflow-x-clip bg-brand-pink text-brand-red md:h-dvh">
	<!-- Main Hero Content -->
	<div class="relative flex h-full w-full flex-col items-center justify-center md:pt-20">
		<!-- Background Typography -->
		<div
			class="pointer-events-none z-0 flex flex-col items-center justify-center text-center leading-[0.85]"
		>
			<h1
				class="flex flex-col items-center font-anton text-[18vw] leading-none uppercase select-none"
			>
				PLAY<br />GROUND
			</h1>
		</div>

		<!-- Foreground Photos Container -->
		<div class="absolute -bottom-10 z-10 flex w-full items-end justify-center">
			<!-- Photo 01 (Left Back) -->
			<div
				class="absolute bottom-0 z-0 h-[250px] w-[250px] transition-transform duration-100 ease-out md:h-[350px] md:w-[350px]"
				style="transform: translate(-{scrollProgress *
					(innerWidth < 768 ? 100 : 300)}px, -{scrollProgress * 40}px) rotate(-{scrollProgress *
					10}deg);"
			>
				<div class="h-full w-full overflow-hidden">
					<img src={cyclingImg} alt="Cycling" class="h-full w-full object-cover" />
				</div>
			</div>

			<!-- Photo 03 (Right Back) -->
			<div
				class="absolute bottom-0 z-0 h-[250px] w-[250px] transition-transform duration-100 ease-out md:h-[350px] md:w-[350px]"
				style="transform: translate({scrollProgress *
					(innerWidth < 768 ? 100 : 300)}px, {scrollProgress * 40}px) rotate({scrollProgress *
					10}deg);"
			>
				<div class="h-full w-full overflow-hidden">
					<img src={motorsportsImg} alt="Motorsports" class="h-full w-full object-cover" />
				</div>
			</div>

			<!-- Photo 02 (Center Front) -->
			<div class="relative z-10 h-[250px] w-[250px] md:h-[350px] md:w-[350px]">
				<div class="h-full w-full overflow-hidden">
					<img src={videogamesImg} alt="Gaming Setup" class="h-full w-full object-cover" />
				</div>
			</div>
		</div>
	</div>
</section>

<div class="mt-20 bg-brand-pink px-4 py-20 text-center text-brand-red md:px-8">
	<div class="mx-auto max-w-3xl">
		<div class="font-instrument-serif text-xs font-semibold tracking-wider uppercase md:text-base">
			WELCOME TO THE
		</div>
		<div class="mt-4 font-anton text-5xl md:text-7xl">TREK BEYOND WORK</div>
		<p
			class="mt-8 font-instrument-serif text-[clamp(1.2rem,4vw,2.5rem)] leading-[1.1] tracking-tight"
		>
			Get into my playground, where creativity takes flight and ideas blossom through design. Step
			into a realm where imagination meets innovation.
		</p>
	</div>
</div>
