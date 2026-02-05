<script lang="ts">
	const TECH_STACK = [
		{ name: 'JavaScript', icon: 'logos:javascript' },
		{ name: 'TypeScript', icon: 'logos:typescript-icon' },
		{ name: 'Python', icon: 'logos:python' },
		{ name: 'Elixir', icon: 'devicon:elixir' },
		{ name: 'Go', icon: 'logos:go' },
		{ name: 'Dart', icon: 'logos:dart' },
		{ name: 'Clojure', icon: 'devicon:clojure' },
		{ name: 'HTML5', icon: 'devicon:html5' },
		{ name: 'CSS3', icon: 'devicon:css3' },
		{ name: 'React', icon: 'logos:react' },
		{ name: 'Vue', icon: 'logos:vue' },
		{ name: 'Svelte', icon: 'logos:svelte-icon' },
		{ name: 'Next.js', icon: 'logos:nextjs-icon' },
		{ name: 'Nuxt.js', icon: 'logos:nuxt-icon' },
		{ name: 'Flutter', icon: 'logos:flutter' },
		{ name: 'Node.js', icon: 'logos:nodejs-icon' },
		{ name: 'NestJS', icon: 'logos:nestjs' },
		{ name: 'Express', icon: 'devicon:express' },
		{ name: 'Django', icon: 'logos:django-icon' },
		{ name: 'Phoenix', icon: 'logos:phoenix' },
		{ name: 'Tailwind', icon: 'devicon:tailwindcss' },
		{ name: 'PostgreSQL', icon: 'logos:postgresql' },
		{ name: 'MySQL', icon: 'logos:mysql-icon' },
		{ name: 'MongoDB', icon: 'devicon:mongodb' },
		{ name: 'AWS', icon: 'logos:aws' },
		{ name: 'GCP', icon: 'logos:google-cloud' },
		{ name: 'Azure', icon: 'logos:microsoft-azure' },
		{ name: 'Docker', icon: 'logos:docker-icon' },
		{ name: 'Kubernetes', icon: 'logos:kubernetes' },
		{ name: 'Git', icon: 'logos:git-icon' },
		{ name: 'GitHub Actions', icon: 'logos:github-actions' },
		{ name: 'Figma', icon: 'logos:figma' },
		{ name: 'WordPress', icon: 'logos:wordpress-icon' },
		{ name: 'Shopify', icon: 'logos:shopify' },
		{ name: 'Webflow', icon: 'devicon:webflow' },
		{ name: 'GitHub', icon: 'logos:github-icon' }
	];
</script>

<section class="w-full bg-brand-pink px-4 pb-20 text-brand-red md:px-8 md:pb-32">
	<div class="mx-auto max-w-[1800px]">
		<!-- Header -->
		<div class="mb-10 flex flex-col items-center justify-center text-center md:mb-16">
			<h2 class="font-anton text-4xl leading-tight uppercase md:text-5xl">MY TECH STACK</h2>
		</div>

		<!-- Tech Grid - Sharp Corners & Boxed Design -->
		<div
			class="grid grid-cols-2 border-t border-l sm:grid-cols-3 md:grid-cols-4 md:border-brand-red/30 lg:grid-cols-6"
		>
			{#each TECH_STACK as tech}
				<div
					class="relative flex aspect-square flex-col border-r border-b p-6 md:border-brand-red/30 md:p-10"
				>
					<!-- Tech Name (Top Left) -->
					<span class="font-francois text-[10px] text-brand-red/70 uppercase md:text-xs"
						>{tech.name}</span
					>

					<!-- Icon (Center) - Using Iconify for sharp/clean look -->
					<div class="flex flex-1 items-center justify-center">
						<img
							src="https://api.iconify.design/{tech.icon}.svg"
							alt={tech.name}
							class="h-10 w-10 md:h-14 md:w-14"
						/>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
