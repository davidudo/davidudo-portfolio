<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';
	import { PROJECTS } from '$lib/data/works';
</script>

<section class="mx-auto max-w-[1800px] px-4 pb-20 md:px-8">
	<div class="grid grid-cols-1 gap-x-2 gap-y-8 md:grid-cols-2 md:gap-x-4 md:gap-y-6">
		{#each PROJECTS as project}
			<ProjectCard
				title={project.title}
				tags={project.tags.join(', ')}
				image={project.image}
				hoverImage={project.hoverImage}
				slug={project.slug}
			/>
		{/each}
	</div>
</section>
