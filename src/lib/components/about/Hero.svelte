<script>
	import { onMount } from 'svelte';
	import photo01 from '$lib/assets/about/photo-01.png';
	import photo02 from '$lib/assets/about/photo-02.png';
	import photo03 from '$lib/assets/about/photo-03.png';

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

<section class="relative h-[550px] w-full bg-brand-pink text-brand-red md:h-screen">
	<!-- Main Hero Content -->
	<div class="relative flex h-full w-full flex-col items-center justify-center md:pt-20">
		<!-- Background Typography -->
		<div
			class="pointer-events-none z-0 flex flex-col items-center justify-center text-center leading-[0.85]"
		>
			<h1 class="flex flex-col items-center font-anton text-[18vw] leading-none uppercase">
				DAVID<br />
				ETIM UDO
			</h1>
		</div>

		<!-- Foreground Photos Container -->
		<div class="absolute -bottom-10 z-10 flex w-full items-end justify-center">
			<!-- Photo 01 (Left Back) -->
			<div
				class="absolute bottom-0 z-0 h-[280px] w-[280px] transition-transform duration-100 ease-out md:h-[400px] md:w-[400px]"
				style="transform: translate(-{scrollProgress *
					(innerWidth < 768 ? 100 : 300)}px, -{scrollProgress * 40}px) rotate(-{scrollProgress *
					10}deg);"
			>
				<img src={photo01} alt="Portrait 01" class="h-full w-full object-cover drop-shadow-xl" />
			</div>

			<!-- Photo 03 (Right Back) -->
			<div
				class="absolute bottom-0 z-0 h-[280px] w-[280px] transition-transform duration-100 ease-out md:h-[400px] md:w-[400px]"
				style="transform: translate({scrollProgress *
					(innerWidth < 768 ? 100 : 300)}px, {scrollProgress * 40}px) rotate({scrollProgress *
					10}deg);"
			>
				<img src={photo03} alt="Portrait 03" class="h-full w-full object-cover drop-shadow-xl" />
			</div>

			<!-- Photo 02 (Center Front) -->
			<div class="relative z-10 h-[280px] w-[280px] md:h-[400px] md:w-[400px]">
				<img
					src={photo02}
					alt="David Udo Portrait"
					class="h-full w-full object-cover object-bottom drop-shadow-2xl"
				/>
			</div>
		</div>
	</div>
</section>
