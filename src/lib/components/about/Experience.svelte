<script>
	const skills = [
		'Innovative Design Thinking',
		'Branding & Identity',
		'Illustration & Graphics',
		'UI/UX Design',
		'Motion Graphics'
	];

	const workExperience = [
		{
			company: 'Clavmen Studio',
			role: 'Senior UX Designer',
			period: '2022 — Present',
			description: 'Clavmen inspires creativity and makes learning piano fun. The sleek.'
		},
		{
			company: 'Wolff Olins',
			role: 'Creative Director',
			period: '2020 — 2022',
			description:
				'Led creative direction for global brands, focusing on identity and digital strategy.'
		},
		{
			company: 'Pentagram',
			role: 'Art Director',
			period: '2018 — 2020',
			description:
				'Collaborated on high-profile design projects, merging artistic vision with branding.'
		},
		{
			company: 'FutureBrand',
			role: 'Art Director',
			period: '2016 — 2018',
			description: 'Developed brand systems and visual languages for diverse industries.'
		}
	];

	const training = [
		{ title: 'Interaction Design', institution: 'Interaction Design Foundation', period: '2021' },
		{
			title: 'Visual Communication',
			institution: 'University of Fine Arts',
			period: '2015 — 2019'
		},
		{ title: 'Advanced Frontend Development', institution: 'Tech Institute', period: '2020' }
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
					<div class="py-4 first:pt-0 last:pb-0">
						<span class="text-sm md:text-lg">{skill}</span>
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
						<p
							class="mt-2 max-w-md font-instrument text-[10px] leading-relaxed tracking-widest uppercase md:text-xs"
						>
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
