<script lang="ts">
	let scrollY = $state(0);
</script>

<svelte:window bind:scrollY />

<section class="min-h-screen w-full overflow-hidden bg-brand-pink text-brand-red">
	<div class="relative flex h-screen w-full flex-col justify-between px-4 pt-32 pb-16 md:px-8">
		<!-- Title and Description -->
		<div class="flex w-full flex-col gap-4">
			<div class="font-francois text-xs font-medium uppercase">ABOUT DAVID UDO</div>

			<div class="max-w-md font-instrument text-lg leading-tight font-medium">
				Born in Seoul, South Korea, and now making waves in San Francisco, David Udo is a software
				engineer who bridges the gap between design and technology.
			</div>
		</div>

		<!-- Big Scrolling Marquee -->
		<div class="absolute -bottom-10 left-0 w-full overflow-hidden pb-8 select-none">
			<div
				class="flex whitespace-nowrap will-change-transform"
				style="transform: translateX(-{scrollY * 0.6}px)"
			>
				{#each Array(4) as _}
					<div class="flex">
						<span class="font-anton text-[25vw] font-bold uppercase">
							DAVID UDO&nbsp;&bull;&nbsp;SOFTWARE ENGINEER&nbsp;&bull;&nbsp;
						</span>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
