<script lang="ts">
	import ProjectCard from '$lib/components/works/ProjectCard.svelte';
	import { PROJECTS } from '$lib/data/works';

	const displayedProjects = PROJECTS.slice(0, 4);
</script>

<section class="bg-brand-pink px-4 pt-20 text-brand-red md:px-8 md:pt-32">
	<div class="mx-auto">
		<!-- Header -->
		<div class="mb-12 flex w-full max-w-md flex-col gap-4 md:mb-16">
			<h2 class="font-francois text-xs font-medium uppercase">SELECTED WORKS</h2>
			<p class="max-w-md font-instrument text-lg leading-tight font-medium">
				They are my way of leaving a positive mark on the world, one project at a time.
			</p>
		</div>

		<!-- Projects Grid -->
		<div class="grid grid-cols-1 gap-x-2 gap-y-8 md:grid-cols-2 md:gap-x-4 md:gap-y-6">
			{#each displayedProjects as project}
				<ProjectCard
					title={project.title}
					tags={project.tags.join(', ')}
					image={project.image}
					hoverImage={project.hoverImage}
					slug={project.slug}
				/>
			{/each}
		</div>

		<!-- View All Link -->
		<div class="mt-12 flex justify-center md:mt-16">
			<a
				href="/works"
				class="group relative flex h-3.5 flex-col overflow-hidden font-francois text-xs text-brand-red uppercase"
			>
				<span class="transition-transform duration-300 group-hover:-translate-y-full"
					>VIEW ALL WORKS</span
				>
				<span
					class="absolute top-full left-0 w-full transition-transform duration-300 group-hover:-translate-y-full"
					>VIEW ALL WORKS</span
				>
			</a>
		</div>
	</div>
</section>
