<script lang="ts">
	import heroReveal from '$lib/assets/workspace.webp';

	let scrollY = $state(0);
	let innerHeight = $state(0);
	let progress = $derived(Math.min(scrollY / (innerHeight || 1), 1));
	let translateAmount = $derived(progress * 50);

	const SOCIAL_LINKS = [
		{ name: 'GITHUB', url: 'https://github.com/davidudo' },
		{ name: 'LINKEDIN', url: 'https://linkedin.com/in/davidudo' },
		{ name: 'X', url: 'https://x.com/_davidudo' }
	];
</script>

<svelte:window bind:scrollY bind:innerHeight />

<div class="relative h-[200vh]">
	<div class="sticky top-0 h-svh overflow-hidden">
		<div class="absolute inset-0 z-0">
			<img src={heroReveal} alt="Reveal" class="h-full w-full object-cover" />
		</div>

		<!-- Top Half -->
		<div
			class="absolute inset-0 z-10 flex items-center justify-center bg-brand-pink text-brand-red"
			style="clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%); transform: translateY(-{translateAmount}%);"
		>
			<h1 class="flex flex-col items-center font-anton text-[20vw] leading-none uppercase">
				DAVID UDO
			</h1>
		</div>

		<!-- Bottom Half -->
		<div
			class="absolute inset-0 z-10 flex items-center justify-center bg-brand-pink text-brand-red"
			style="clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0 100%); transform: translateY({translateAmount}%);"
		>
			<h1 class="flex flex-col items-center font-anton text-[20vw] leading-none uppercase">
				DAVID UDO
			</h1>

			<div class="absolute bottom-8 left-8 flex gap-4 font-francois">
				{#each SOCIAL_LINKS as link}
					<a
						href={link.url}
						target="_blank"
						rel="noopener noreferrer"
						class="group relative flex h-3.5 flex-col overflow-hidden text-xs text-brand-red"
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
			</div>

			<div class="absolute right-8 bottom-8 flex gap-4 font-francois">
				<a
					href="tel:+2348107587015"
					class="group relative flex h-3.5 flex-col overflow-hidden text-xs text-brand-red"
				>
					<span class="transition-transform duration-300 group-hover:-translate-y-full">PHONE</span>
					<span
						class="absolute top-full left-0 w-full transition-transform duration-300 group-hover:-translate-y-full"
						>PHONE</span
					>
				</a>
				<a
					href="mailto:dave.etim.udo@gmail.com"
					class="group relative flex h-3.5 flex-col overflow-hidden text-xs text-brand-red"
				>
					<span class="transition-transform duration-300 group-hover:-translate-y-full"
						>EMAIL ME</span
					>
					<span
						class="absolute top-full left-0 w-full transition-transform duration-300 group-hover:-translate-y-full"
						>EMAIL ME</span
					>
				</a>
			</div>

			<div
				class="absolute top-1/2 left-1/2 mt-[24vw] max-w-70 -translate-x-1/2 text-center font-francois text-[10px] leading-tight font-medium tracking-widest text-brand-red md:top-auto md:bottom-8 md:mt-0 md:text-xs"
			>
				DAVID UDO IS A SOFTWARE ENGINEER WITH 4+ YEARS OF EXPERIENCE ARCHITECTING ROBUST SOLUTIONS
			</div>
		</div>
	</div>
</div>
