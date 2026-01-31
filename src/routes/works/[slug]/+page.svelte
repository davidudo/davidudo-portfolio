<script lang="ts">
	import { page } from '$app/state';
	import { PROJECTS } from '$lib/data/works';
	import WorkDetailHero from '$lib/components/works/WorkDetailHero.svelte';
	import WorkDetailContent from '$lib/components/works/WorkDetailContent.svelte';
	import NextProjects from '$lib/components/works/NextProjects.svelte';
	import Footer from '$lib/components/general/Footer.svelte';
	import { error } from '@sveltejs/kit';

	const project = $derived(PROJECTS.find((p) => p.slug === page.params.slug));

	$effect(() => {
		if (!project) {
			error(404, 'Project not found');
		}
	});
</script>

<svelte:head>
	<title>{project ? `${project.title} | David Udo` : 'Project Not Found'}</title>
</svelte:head>

{#if project}
	<main class="min-h-dvh">
		<WorkDetailHero {project} />
		<WorkDetailContent {project} />
		<NextProjects currentSlug={project.slug} />
		<Footer />
	</main>
{/if}
