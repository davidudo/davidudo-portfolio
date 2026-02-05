<script>
	const skills = [
		{
			category: 'Languages',
			skillSets: 'JavaScript, TypeScript, Python, Elixir, Clojure, Dart, Go, SQL, NoSQL'
		},
		{
			category: 'Frontend',
			skillSets: 'React, Vue, Svelte, Next.js, Nuxt.js, Phoenix, HTML5, CSS3, Flutter, React Native'
		},
		{
			category: 'Backend',
			skillSets: 'Node.js, NestJS, Express.js, Django, Phoenix, Gin'
		},
		{
			category: 'Databases & Cloud',
			skillSets: 'PostgreSQL, MySQL, MongoDB, AWS, GCP, Azure, Docker, Kubernetes'
		},
		{
			category: 'Tools & DevOps',
			skillSets: 'Git, GitHub Actions, CI/CD, Figma, WordPress, Shopify, Webflow'
		}
	];

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

	const training = [
		{
			title: 'OSSU (Computer Science)',
			institution: 'Open Source Society University',
			period: '2025 - Present'
		},
		{
			title: 'Software Engineering',
			institution: 'ALX Africa',
			period: '2022 - 2023'
		},
		{
			title: 'Computer Software Engineering',
			institution: 'AltSchool Africa',
			period: '2022 - 2023'
		},
		{
			title: 'Bachelor of Engineering (Mechanical Engineering)',
			institution: 'Akwa Ibom State University',
			period: '2017 - 2023'
		}
	];
</script>

<section class="w-full bg-brand-red px-4 pb-20 text-brand-pink md:px-8 md:pb-32">
	<div class="flex flex-col gap-16 md:gap-24">
		<!-- Skills Section -->
		<div class="flex flex-col gap-8 md:flex-row md:gap-24">
			<div class="md:w-2/4">
				<span class="text-lg font-medium md:text-xl">Skills and Expertise</span>
			</div>
			<div class="flex flex-col divide-y divide-white/30 font-medium md:w-3/4">
				{#each skills as skill}
					<div class="flex flex-col gap-2 py-4 text-sm font-medium first:pt-0 last:pb-0 md:text-lg">
						<span class="font-instrument-serif tracking-wide">{skill.category}</span>
						<span>{skill.skillSets}</span>
					</div>
				{/each}
			</div>
		</div>

		<!-- Divider -->
		<div class="h-px w-full bg-white/30"></div>

		<!-- Work Experience Section -->
		<div class="flex flex-col gap-12 md:flex-row md:gap-24">
			<div class="md:w-2/4">
				<span class="text-lg font-medium md:text-xl">Work experience</span>
			</div>
			<div class="flex flex-col divide-y divide-white/30 font-medium md:w-3/4">
				{#each workExperience as exp}
					<div class="flex flex-col gap-2 py-8 first:pt-0 last:pb-0">
						<!-- Company -->
						<h3 class="text-sm tracking-tight uppercase md:text-lg">
							{exp.company}
						</h3>

						<!-- Role and Period -->
						<div class="flex items-baseline justify-between text-sm uppercase">
							<span>{exp.role}</span>
							<span>{exp.period}</span>
						</div>

						<!-- Description -->
						<p class="mt-2 max-w-md font-instrument text-xs opacity-90 md:text-sm">
							{exp.description}
						</p>
					</div>
				{/each}
			</div>
		</div>

		<!-- Divider -->
		<div class="h-px w-full bg-white/30"></div>

		<!-- Training Section -->
		<div class="flex flex-col gap-12 md:flex-row md:gap-24">
			<div class="md:w-2/4">
				<span class="text-lg font-medium md:text-xl">Training</span>
			</div>
			<div class="flex flex-col divide-y divide-white/30 font-medium md:w-3/4">
				{#each training as item}
					<div class="flex items-baseline justify-between gap-x-6 py-6 first:pt-0 last:pb-0">
						<span class="text-sm md:text-lg">{item.title}, {item.institution}</span>
						<span class="text-xs text-nowrap md:text-sm">{item.period}</span>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
