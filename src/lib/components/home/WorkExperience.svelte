<script lang="ts">
	const workExperience = [
		{
			company: 'ENO BASSÉ DIAMONDS',
			role: 'Software Developer',
			period: 'July 2025 - Present',
			description:
				'Spearheaded the end-to-end development of an e-commerce platform from initial concept to successful public launch. Optimized site speed and SEO, resulting in a 35% increase in PageSpeed Insights performance scores and a 20% improvement in organic traffic. Reduced custom design inquiries by 25% by integrating a custom 3D product configurator using ThreeJS.'
		},
		{
			company: 'PROJECTSTAKE',
			role: 'Software Engineer',
			period: 'May 2023 - June 2025',
			description:
				'Developed 3 major Web3 products, leading a cross-functional team from concept to launch. Reduced manual deployment effort by 30% by designing and building a CI/CD pipeline from the ground up to automate application deployment. Improved overall code quality and team best practices by mentoring and onboarding new interns and conducting regular code reviews. Decreased onboarding time for new engineers by 50% by creating a central company documentation hub using Docusaurus.'
		},
		{
			company: 'FOURTIDE',
			role: 'Frontend Developer',
			period: 'May 2023 - Aug 2023',
			description:
				'Increased conversion rate by 15% by building a custom Shopify e-commerce site from the ground up and implementing SEO and image optimization best practices.'
		}
	];
</script>

<section class="mt-20 w-full bg-brand-pink px-4 pb-10 text-brand-red md:px-8">
	<div class="mx-auto max-w-[1800px]">
		<!-- Centered Header - Consistent with Tech Stack/FAQ -->
		<div class="mb-10 flex flex-col items-center justify-center text-center md:mb-16">
			<h2 class="font-anton text-4xl leading-tight uppercase md:text-5xl">Work Experience</h2>
		</div>

		<!-- Experience List - Boxed design with side borders -->
		<div
			class="mx-auto flex flex-col divide-y border md:max-w-4xl md:divide-brand-red/30 md:border-brand-red/30"
		>
			{#each workExperience as exp}
				<div class="flex flex-col px-4 py-8 md:px-8">
					<div class="mb-4 flex flex-col justify-between gap-2 md:flex-row md:items-baseline">
						<h3 class="font-instrument-serif font-semibold md:text-xl">
							{exp.company}
						</h3>
						<span class="font-francois text-xs uppercase">
							{exp.period}
						</span>
					</div>
					<div class="mb-4">
						<span
							class="font-francois text-xs font-medium tracking-widest text-brand-red uppercase"
						>
							{exp.role}
						</span>
					</div>
					<div
						class="max-w-3xl font-instrument text-sm leading-relaxed font-medium opacity-90 md:text-base"
					>
						<p>{exp.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
