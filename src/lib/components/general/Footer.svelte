<script lang="ts">
	const SOCIAL_LINKS = [
		{ name: 'GITHUB', url: 'https://github.com/davidudo' },
		{ name: 'LINKEDIN', url: 'https://linkedin.com/in/davidudo' },
		{ name: 'X', url: 'https://x.com/_davidudo' },
		{ name: 'INSTAGRAM', url: 'https://instagram.com/_davidudo' },
		{ name: 'FACEBOOK', url: 'https://www.facebook.com/davidudo46' }
	];

	const email = 'DAVE.ETIM.UDO@GMAIL.COM';
</script>

<footer class="relative bg-brand-pink px-4 pt-24 pb-8 md:px-8 md:pt-32">
	<!-- Social Links Row -->
	<div
		class="mx-auto mb-16 grid max-w-7xl grid-cols-2 gap-4 md:mb-24 md:flex md:items-center md:justify-between"
	>
		{#each SOCIAL_LINKS as link}
			<a
				href={link.url}
				target="_blank"
				rel="noopener noreferrer"
				class="group relative flex h-3.5 flex-col overflow-hidden font-francois text-[10px] text-brand-red uppercase md:text-xs"
			>
				<span class="transition-transform duration-300 group-hover:-translate-y-full"
					>{link.name}</span
				>
				<span
					class="absolute top-full left-0 w-full transition-transform duration-300 group-hover:-translate-y-full"
					>{link.name}</span
				>
			</a>
		{/each}
		<a
			href="mailto:contact@davidudo.com"
			class="group relative flex h-3.5 flex-col overflow-hidden font-francois text-[10px] text-brand-red uppercase md:text-xs"
		>
			<span class="transition-transform duration-300 group-hover:-translate-y-full">{email}</span>
			<span
				class="absolute top-full left-0 w-full transition-transform duration-300 group-hover:-translate-y-full"
				>{email}</span
			>
		</a>
	</div>

	<!-- CTA Area with Large Name -->
	<div class="flex w-full flex-col items-center justify-center pb-20">
		<div class="relative">
			<h2
				class="flex flex-col items-center font-anton text-[28vw] leading-[0.96] font-bold tracking-wider text-brand-red uppercase select-none lg:text-[16vw]"
			>
				<span>DAVID</span>
				<span>UDO</span>
			</h2>

			<a
				href="mailto:contact@davidudo.com"
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
	</div>
</footer>
