<script lang="ts">
	const SERVICES = [
		{
			title: 'Frontend Development',
			description:
				'Crafting high-performance user interfaces using React, Svelte, and Next.js. Specialized in 3D configurators with ThreeJS and seamless animations.'
		},
		{
			title: 'Backend Development',
			description:
				'Architecting scalable systems and APIs with Node.js (NestJS), Django, and Phoenix. Experienced in secure PostgreSQL and NoSQL database design.'
		},
		{
			title: 'Mobile App Development',
			description:
				'Building robust cross-platform mobile applications for iOS and Android using Flutter and React Native, ensuring a premium native experience.'
		},
		{
			title: 'Desktop App Development',
			description:
				'Delivering performant, cross-platform desktop solutions that provide a native feel and seamless functionality across Windows, macOS, and Linux.'
		},
		{
			title: 'DevOps',
			description:
				'Managing cloud infrastructure on AWS, GCP, and Azure. Automating deployment pipelines with Docker and GitHub Actions for maximum reliability.'
		},
		{
			title: 'QA',
			description:
				'Ensuring high software quality through rigorous automated testing, thorough code reviews, and maintaining scalable development best practices.'
		}
	];
</script>

<section class="bg-brand-pink px-4 pt-20 pb-20 text-brand-red md:px-8 md:pt-32 md:pb-32">
	<div class="mx-auto max-w-[1800px]">
		<!-- Header -->
		<div class="mb-12 flex w-full max-w-md flex-col gap-4 md:mb-16">
			<h2 class="font-francois text-xs font-medium uppercase">WHAT I DO</h2>
			<p class="max-w-md font-instrument text-lg leading-tight font-medium">
				I help brands and companies build robust, scalable digital products through high-quality
				engineering and optimization.
			</p>
		</div>

		<!-- Services Grid -->
		<div
			class="grid grid-cols-1 gap-x-8 gap-y-0 border-t md:grid-cols-2 md:border-brand-red/30 lg:grid-cols-3"
		>
			{#each SERVICES as service}
				<div class="group flex flex-col gap-4 border-b pt-8 pb-8 md:border-brand-red/30">
					<h3 class="font-instrument-serif text-xl md:text-2xl">
						{service.title}
					</h3>
					<p
						class="max-w-md font-instrument text-sm leading-relaxed font-medium text-brand-red md:text-base"
					>
						{service.description}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>
