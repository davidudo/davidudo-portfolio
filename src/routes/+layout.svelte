<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';
	import faviconLight from '$lib/assets/favicons/favicon-light.png';
	import faviconDark from '$lib/assets/favicons/favicon-dark.png';
	import Lenis from 'lenis';
	import Header from '$lib/components/general/Header.svelte';
	import PageTransition from '$lib/components/general/PageTransition.svelte';

	import InitialLoader from '$lib/components/general/InitialLoader.svelte';

	let { children } = $props();

	let isLoading = $state(true);
	let faviconToUse = $state(faviconLight);

	function handleLoadComplete() {
		isLoading = false;
	}

	onMount(() => {
		// Dynamic Favicon Logic
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		const updateFavicon = () => {
			faviconToUse = mediaQuery.matches ? faviconDark : faviconLight;
		};

		updateFavicon(); // Initial check
		mediaQuery.addEventListener('change', updateFavicon);

		const lenis = new Lenis({
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			orientation: 'vertical',
			smoothWheel: true
		});

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);

		return () => {
			mediaQuery.removeEventListener('change', updateFavicon);
			lenis.destroy();
		};
	});
</script>

<svelte:head>
	<link rel="icon" href={faviconToUse} />
</svelte:head>

<Header />
{@render children?.()}
{#if isLoading}
	<InitialLoader oncomplete={handleLoadComplete} />
{/if}
<PageTransition />
