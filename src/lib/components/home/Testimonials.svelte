<script lang="ts">
	import chrisEnedah from '$lib/assets/testimonials/chris-enedah.webp';
	import enoabasiBob from '$lib/assets/testimonials/enoabasi-bob.webp';
	import gerardLlanos from '$lib/assets/testimonials/gerard-llanos.jpeg';
	import nicholayArmando from '$lib/assets/testimonials/nicholay-armando.jpg';
	import peterNkobowo from '$lib/assets/testimonials/peter-nkobowo.jpeg';

	const testimonials = [
		{
			quote:
				"David's ability to translate complex requirements into elegant, functional code is unmatched. He delivered a product that exceeded our expectations in both performance and aesthetics.",
			author: 'Chris Enedah',
			role: 'CEO of Projectstake LLC',
			image: chrisEnedah
		},
		{
			quote:
				'Working with David was a seamless experience. His deep technical knowledge and proactive problem-solving skills make him an invaluable asset to any engineering team.',
			author: 'Enoabasi Bob',
			role: 'CEO of Eno Bassé Diamonds',
			image: enoabasiBob
		},
		{
			quote:
				"David's commitment to quality and attention to detail is evident in every line of code he writes. He consistently provides innovative solutions to difficult architectural challenges.",
			author: 'Gerard Llanos',
			role: 'CEO of GNC Labs',
			image: gerardLlanos
		},
		{
			quote:
				"David is a brilliantly talented developer who doesn't just build features but thinks about the end-to-end user experience. His work on our frontend significantly improved our site's engagement.",
			author: 'Nicholay Armando',
			role: 'CEO of Agoraleads',
			image: nicholayArmando
		},
		{
			quote:
				"Highly skilled and dependable. David's expertise in backend systems helped us scale our infrastructure efficiently. A true professional through and through.",
			author: 'Peter Nkobowo',
			role: 'CEO of Bot4orge AI',
			image: peterNkobowo
		}
	];
</script>

<section class="mt-10 w-full bg-brand-pink px-4 pb-20 text-brand-red md:px-8 md:pb-32">
	<div class="mx-auto max-w-[1800px]">
		<!-- Header -->
		<div class="mb-16 flex flex-col items-center justify-center text-center md:mb-24">
			<h2 class="font-anton text-4xl leading-tight uppercase md:text-5xl">Voices of Trust</h2>
		</div>

		<!-- Testimonials Container -->
		<div class="mx-auto flex max-w-5xl flex-col gap-16 md:gap-24">
			{#each testimonials as testimonial, i}
				<div
					class="flex flex-col items-center gap-6 md:gap-10 {i % 2 === 0
						? 'md:flex-row'
						: 'md:flex-row-reverse'}"
				>
					<!-- Avatar -->
					<div class="relative shrink-0">
						<div
							class="h-20 w-20 overflow-hidden rounded-full border border-brand-red md:h-28 md:w-28 md:border-brand-red/30"
						>
							<img
								src={testimonial.image}
								alt={testimonial.author}
								class="h-full w-full object-cover"
							/>
						</div>
					</div>

					<!-- Speech Bubble -->
					<div class="relative flex-1 border p-8 md:border-brand-red/30 md:p-12">
						<!-- Quote Text -->
						<blockquote class="mb-8 font-instrument text-lg leading-relaxed font-medium md:text-xl">
							“{testimonial.quote}”
						</blockquote>

						<!-- Author & Role -->
						<div class="flex flex-col gap-1">
							<span class="font-francois text-sm tracking-tight uppercase md:text-base">
								{testimonial.author}
							</span>
							<span class="font-instrument text-xs font-medium uppercase md:text-sm">
								{testimonial.role}
							</span>
						</div>

						<!-- Connector Arrow (Optional but matches image feel) -->
						<div
							class="absolute top-1/2 -translate-y-1/2 {i % 2 === 0
								? '-left-3 rotate-45 border-b border-l bg-brand-pink md:border-brand-red/30'
								: '-right-3 rotate-45 border-t border-r bg-brand-pink md:border-brand-red/30'} hidden h-6 w-6 md:block"
						></div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
