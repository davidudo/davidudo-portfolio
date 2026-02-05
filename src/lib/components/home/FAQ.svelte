<script lang="ts">
	import { slide } from 'svelte/transition';

	let activeIndex = $state<number | null>(null);

	const FAQS = [
		{
			question: 'What is your primary tech stack?',
			answer:
				'I specialize in full-stack development using JavaScript/TypeScript (React, Svelte, Node.js), Python (Django), and Elixir (Phoenix). I also have extensive experience with mobile development using Flutter and React Native.'
		},
		{
			question: 'Do you work with remote teams?',
			answer:
				'Yes, I have over 4 years of experience working with remote teams across different time zones, including companies in Nigeria and the United States. I am highly proficient in remote collaboration tools and asynchronous communication workflows.'
		},
		{
			question: 'How many years of experience do you have?',
			answer:
				'I have over 4 years of professional experience architecting and delivering robust software solutions across web, mobile, and desktop platforms.'
		},
		{
			question: 'What kind of projects do you typically work on?',
			answer:
				'I typically work on complex full-stack applications, e-commerce platforms, Web3 products, and cross-platform mobile apps. I enjoy solving architectural challenges and optimizing performance for high-traffic services.'
		}
	];

	function toggle(index: number) {
		activeIndex = activeIndex === index ? null : index;
	}
</script>

<div class="relative h-[300vh]">
	<section
		class="sticky top-0 flex min-h-dvh w-full flex-col justify-center bg-brand-red px-4 py-20 text-brand-pink md:px-8"
	>
		<div class="mx-auto max-w-7xl">
			<!-- Centered Header from Image -->
			<div class="mb-10 flex flex-col items-center justify-center text-center md:mb-16">
				<h2 class="font-anton text-4xl leading-tight uppercase md:text-5xl">
					Frequently <br /> Asked Questions
				</h2>
			</div>

			<!-- FAQ List - Boxed design with side borders -->
			<div
				class="mx-auto flex w-full flex-col divide-y border sm:min-w-2xl md:min-w-3xl md:divide-white/30 md:border-white/30 lg:min-w-4xl"
			>
				{#each FAQS as faq, i}
					<div class="flex flex-col px-4 py-3 md:px-8 md:py-6">
						<button
							onclick={() => toggle(i)}
							class="flex w-full cursor-pointer items-center justify-between gap-x-20 py-2 text-left"
						>
							<span class="font-instrument-serif text-xl md:text-2xl">
								{faq.question}
							</span>
							<span
								class="text-2xl transition-transform duration-300"
								class:rotate-45={activeIndex === i}
							>
								+
							</span>
						</button>

						{#if activeIndex === i}
							<div
								transition:slide
								class="mt-4 max-w-2xl font-instrument text-sm leading-relaxed font-medium md:text-base"
							>
								<p>{faq.answer}</p>
							</div>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</section>
</div>
