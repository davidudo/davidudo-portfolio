<script lang="ts">
	import { PROJECTS } from '$lib/data/works';
	import ProjectCard from './ProjectCard.svelte';

	let { currentSlug } = $props<{ currentSlug: string }>();

	const otherProjects = PROJECTS.filter((p) => p.slug !== currentSlug).slice(0, 2);
</script>

<section class="bg-brand-pink px-4 pt-4 pb-10 md:px-8">
	<div class="mx-auto">
		<h2
			class="mb-10 text-center font-francois text-2xl font-medium text-brand-red uppercase md:mb-18 md:text-3xl"
		>
			Next Projects
		</h2>

		<div class="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-2">
			{#each otherProjects as project}
				<ProjectCard
					title={project.title}
					slug={project.slug}
					tags={project.tags.join(' , ')}
					image={project.image}
					hoverImage={project.hoverImage}
				/>
			{/each}
		</div>
	</div>
</section>
