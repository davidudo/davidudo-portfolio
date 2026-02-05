<script lang="ts">
	import topSvg from '$lib/assets/top.svg';
</script>

<div class="relative z-20 -mt-[100dvh] h-[200dvh]">
	<!-- Decorative SVG Top -->
	<div class="absolute -top-7 right-0 z-20 w-full max-w-[80vw]">
		<img src={topSvg} alt="" class="h-[50px] w-full" />
	</div>
	<section
		class="sticky top-0 flex h-dvh w-full flex-col items-center justify-center overflow-hidden bg-brand-pink px-4 py-20 text-center text-brand-red md:px-8"
	>
		<!-- Top Tagline -->
		<div
			class="mb-4 flex flex-col items-center gap-1 font-francois text-[10px] font-medium uppercase md:text-xs"
		>
			<span class="font-instrument-serif font-semibold tracking-wider">SOFTWARE ENGINEER</span>
			<span>DAVID UDO IS A SOFTWARE ENGINEER WHO ARCHITECTS</span>
			<span>AND DELIVERS ROBUST SOLUTIONS ACROSS VARIOUS PLATFORMS</span>
		</div>

		<!-- Main Title -->
		<h2
			class="mt-10 mb-12 font-anton text-[16vw] leading-[0.85] whitespace-nowrap uppercase select-none"
		>
			DAVID UDO
		</h2>

		<!-- Bio -->
		<div class="max-w-4xl font-instrument-serif text-2xl leading-tight md:text-4xl">
			Proven expertise in leading projects from concept to launch, optimizing performance, and
			improving development workflows. Adept at leveraging a diverse tech stack to solve complex
			problems and deliver measurable business value.
		</div>
	</section>
</div>
