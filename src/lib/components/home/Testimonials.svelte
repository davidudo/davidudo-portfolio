<script lang="ts">
	const testimonials = [
		{
			quote:
				'The designs were modern, intuitive, and perfectly aligned with our brand. One of the best UI/UX experts we’ve hired!',
			author: 'James P',
			role: 'Founder',
			image: '/images/testimonials/james.png'
		},
		{
			quote:
				'Not only is the work visually stunning, but it’s also grounded in real usability. A true professional.',
			author: 'Ananya Rames',
			role: 'Tech Lead at CoreUX Labs',
			image: '/images/testimonials/ananya.png'
		},
		{
			quote: 'From Figma to functional code — everything was delivered on time.',
			author: 'David K',
			role: 'CEO of LaunchFoundry',
			image: '/images/testimonials/david.png'
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
