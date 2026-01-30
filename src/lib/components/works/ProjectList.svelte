<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';
	import project01a from '$lib/assets/works/project-01-a.avif';
	import project01b from '$lib/assets/works/project-01-b.svg';

	// Placeholder data based on the design mock
	const PROJECTS = [
		{
			title: 'AURA',
			tags: 'BRANDING, UX',
			image: project01a,
			hoverImage: project01b,
			class: ''
		},
		{
			title: 'AURA',
			tags: 'BRANDING, UX',
			image: project01a,
			hoverImage: project01b,
			class: ''
		},
		{
			title: 'AURA',
			tags: 'BRANDING, UX',
			image: project01a,
			hoverImage: project01b,
			class: ''
		},
		{
			title: 'AURA',
			tags: 'BRANDING, UX',
			image: project01a,
			hoverImage: project01b,
			class: ''
		}
	];
</script>

<section class="mx-auto max-w-[1800px] px-4 pb-20 md:px-8">
	<div class="grid grid-cols-1 gap-x-2 gap-y-8 md:grid-cols-2 md:gap-x-4 md:gap-y-6">
		{#each PROJECTS as project}
			<ProjectCard
				title={project.title}
				tags={project.tags}
				image={project.image}
				hoverImage={project.hoverImage}
				className={project.class}
			/>
		{/each}
	</div>
</section>
