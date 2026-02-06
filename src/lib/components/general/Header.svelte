<script lang="ts">
	import { page } from '$app/stores';
	import { skipPageTransition } from '$lib/stores/transition';

	let isMenuOpen = $state(false);

	const MENU_ITEMS = ['ABOUT', 'WORKS', 'PLAYGROUND', 'CONTACT'];

	const SOCIAL_LINKS = [
		{ name: 'GITHUB', url: 'https://github.com/davidudo' },
		{ name: 'LINKEDIN', url: 'https://linkedin.com/in/davidudo' },
		{ name: 'X', url: 'https://x.com/_davidudo' },
		{ name: 'INSTAGRAM', url: 'https://instagram.com/_davidudo' },
		{ name: 'FACEBOOK', url: 'https://www.facebook.com/davidudo46' }
	];

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function handleMenuNavigation() {
		isMenuOpen = false;
		skipPageTransition.set(true);
	}

	let isContactPage = $derived($page.url.pathname === '/contact');
</script>

<!-- Menu Overlay -->
<div
	class="fixed inset-0 z-40 flex flex-col items-center justify-center bg-brand-red transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]"
	class:translate-y-0={isMenuOpen}
	class:-translate-y-full={!isMenuOpen}
>
	<div class="flex flex-col items-center justify-center gap-[10vh]">
		<nav class="flex flex-col items-center gap-6 text-center md:gap-2">
			{#each MENU_ITEMS as item}
				<a
					href="/{item.toLowerCase()}"
					class="group relative font-instrument-serif text-[8vw] leading-[1.1] text-white md:text-[5vw]"
					onclick={handleMenuNavigation}
				>
					{item}
					<span
						class="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-white transition-transform duration-300 ease-out group-hover:scale-x-100"
					></span>
				</a>
			{/each}
		</nav>

		<!-- Footer Links -->
		<div
			class="flex w-full flex-col items-center justify-center gap-6 px-4 font-francois text-xs tracking-widest text-white uppercase md:flex-row md:gap-28 md:px-8"
		>
			{#each SOCIAL_LINKS as link}
				<a href={link.url} class="group relative flex h-3.5 flex-col overflow-hidden">
					<span class="transition-transform duration-300 group-hover:-translate-y-full"
						>{link.name}</span
					>
					<span
						class="absolute top-full left-0 w-full transition-transform duration-300 group-hover:-translate-y-full"
						>{link.name}</span
					>
				</a>
			{/each}
		</div>
	</div>
</div>

<div
	class="pointer-events-none fixed top-0 left-0 z-50 flex w-full items-center justify-between px-4 py-4 transition-colors duration-300 md:px-8 md:py-8"
	class:text-white={isMenuOpen || isContactPage}
	class:text-brand-red={!isMenuOpen && !isContactPage}
>
	<a
		href="/"
		class="pointer-events-auto font-instrument text-base font-bold tracking-widest transition-opacity"
		onclick={() => (isMenuOpen = false)}
	>
		D — U
	</a>

	<button
		onclick={toggleMenu}
		class="group pointer-events-auto relative flex h-12 w-12 cursor-pointer flex-col items-center justify-center gap-1.5 overflow-hidden rounded-full transition-colors"
		class:hover:text-white={!isMenuOpen}
		class:hover:text-brand-red={isMenuOpen}
		aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
	>
		<span
			class="absolute inset-0 z-0 scale-50 rounded-full opacity-0 transition-all duration-500 ease-out group-hover:scale-100 group-hover:opacity-100"
			class:bg-brand-red={!isMenuOpen}
			class:bg-white={isMenuOpen}
		></span>

		<!-- Hamburger Lines / Close Icon Transition -->
		<div class="relative z-10 flex flex-col gap-1.5 transition-transform duration-500">
			<span
				class="h-0.5 w-6 bg-current transition-all duration-300"
				class:rotate-45={isMenuOpen}
				class:translate-y-1={isMenuOpen}
			></span>
			<span
				class="h-0.5 w-6 bg-current transition-all duration-300"
				class:-rotate-45={isMenuOpen}
				class:-translate-y-0={isMenuOpen}
				class:opacity-0={isMenuOpen}
			></span>
			<span
				class="absolute top-0 left-0 h-0.5 w-6 bg-current transition-all duration-300"
				class:-rotate-45={isMenuOpen}
				class:translate-y-1={isMenuOpen}
				class:opacity-0={!isMenuOpen}
			></span>
		</div>
	</button>
</div>
