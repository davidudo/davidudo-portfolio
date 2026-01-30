<script lang="ts">
	const SOCIAL_LINKS = [
		{ name: 'GITHUB', url: 'https://github.com' },
		{ name: 'LINKEDIN', url: 'https://linkedin.com' },
		{ name: 'X', url: 'https://x.com' },
		{ name: 'FACEBOOK', url: 'https://facebook.com' }
	];
</script>

<footer
	class="relative flex min-h-screen w-full flex-col items-center justify-between overflow-hidden bg-brand-red px-4 py-20 text-center text-brand-pink md:px-8"
>
	<!-- Top Tagline -->
	<div
		class="mb-20 flex flex-col items-center gap-1 font-francois text-[10px] font-medium uppercase md:text-xs"
	>
		<span class="font-instrument-serif font-semibold tracking-wider">FULL STACK ENGINEER</span>
		<span
			>DAVID UDO IS A SOFTWARE ENGINEER WHO CRAFTS ROBUST DIGITAL EXPERIENCES THROUGH INNOVATIVE
			CODE</span
		>
	</div>

	<!-- CTA Area -->
	<div class="relative flex w-full flex-1 flex-col items-center justify-center">
		<h2
			class="flex flex-col items-center font-anton text-[16vw] leading-[0.96] font-bold tracking-wider uppercase select-none"
		>
			<span>LET'S WORK</span>
			<span>TOGETHER</span>
		</h2>

		<a
			href="mailto:hello@davidu.do"
			class="group absolute top-1/2 left-1/2 flex h-26 w-26 -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full border border-brand-red bg-brand-pink text-center font-francois text-sm font-bold text-brand-red uppercase transition-transform duration-300 md:h-48 md:w-48 md:text-base"
		>
			<span
				class="absolute inset-0 z-0 scale-50 rounded-full bg-brand-red opacity-0 transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-100"
			></span>
			<span
				class="relative z-10 max-w-[70%] leading-tight transition-colors duration-300 group-hover:text-brand-pink"
				>HIRE ME NOW</span
			>
		</a>
	</div>

	<!-- Bottom Social Links -->
	<div
		class="mt-12 flex w-full flex-wrap justify-center gap-8 font-francois text-xs font-medium tracking-widest uppercase md:gap-24"
	>
		{#each SOCIAL_LINKS as link}
			<a
				href={link.url}
				target="_blank"
				rel="noopener noreferrer"
				class="transition-opacity hover:opacity-70"
			>
				{link.name}
			</a>
		{/each}
	</div>
</footer>
