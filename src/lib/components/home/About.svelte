<script lang="ts">
	import topSvg from '$lib/assets/top.svg';
	let scrollY = $state(0);
</script>

<svelte:window bind:scrollY />

<div class="relative z-20 -mt-[100dvh] h-[300dvh]">
	<!-- Decorative SVG Top -->
	<div class="absolute -top-7 right-0 z-20 w-full max-w-[80vw]">
		<img src={topSvg} alt="" class="h-[50px] w-full" />
	</div>

	<section class="sticky top-0 w-full overflow-hidden bg-brand-pink text-brand-red md:h-dvh">
		<div class="relative flex h-dvh w-full flex-col justify-between px-4 pt-32 pb-16 md:px-8">
			<!-- Title and Description -->
			<div class="flex w-full flex-col gap-4">
				<div class="font-francois text-xs font-medium uppercase">ABOUT DAVID UDO</div>

				<div class="max-w-md font-instrument text-lg leading-tight font-medium">
					David Udo is a Software Engineer with 4+ years of experience architecting and delivering
					robust solutions for web, mobile, and desktop.
				</div>
			</div>

			<!-- Big Scrolling Marquee -->
			<div class="absolute bottom-10 left-0 w-full overflow-hidden pb-8 select-none md:-bottom-10">
				<div
					class="flex whitespace-nowrap will-change-transform"
					style="transform: translateX(-{scrollY * 0.6}px)"
				>
					{#each Array(4) as _}
						<div class="flex">
							<span class="font-anton text-[25vw] uppercase">
								DAVID UDO&nbsp;&bull;&nbsp;SOFTWARE ENGINEER&nbsp;&bull;&nbsp;
							</span>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>
</div>
