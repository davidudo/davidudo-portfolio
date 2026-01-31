<script>
	import signature from '$lib/assets/about/signature.svg';
</script>

<section class="relative w-full bg-brand-pink px-8 py-20 text-brand-red md:min-h-dvh md:py-32">
	<div class="mx-auto flex max-w-6xl flex-col items-center text-center">
		<!-- Main Title -->
		<div class="mb-12 flex flex-col items-center">
			<div>
				<h1 class="font-anton text-[clamp(1rem,15vw,10rem)] leading-[0.9] text-brand-red uppercase">
					SOFTWARE
				</h1>
				<h1 class="font-anton text-[clamp(1rem,15vw,10rem)] leading-[0.9] text-brand-red uppercase">
					ENGINEER
				</h1>
			</div>
			<p
				class="mt-8 font-instrument-serif text-sm font-semibold tracking-wider md:mt-14 md:text-base"
			>
				4+ YEARS OF EXPERIENCE
			</p>
		</div>

		<!-- Biography -->
		<div class="mt-4 max-w-xl">
			<p class="font-instrument-serif text-[clamp(1.2rem,4vw,2.5rem)] leading-[1.1] tracking-tight">
				David Udo is a visionary designer with a passion for exploring the intersections of art and
				technology.
			</p>
		</div>

		<!-- Signature -->
		<div class="mt-12 w-46 md:mt-16">
			<img
				src={signature}
				alt="David Udo Signature"
				class="w-full text-brand-red brightness-0 hue-rotate-180 invert-0 saturate-[100] sepia-0"
				style="filter: brightness(0) saturate(100%) invert(29%) sepia(87%) saturate(5833%) hue-rotate(352deg) brightness(101%) contrast(106%);"
			/>
		</div>
	</div>
</section>
