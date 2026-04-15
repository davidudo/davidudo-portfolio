<script lang="ts">
	import { page } from '$app/state';
	import { PROJECTS } from '$lib/data/works';
	import WorkDetailHero from '$lib/components/works/WorkDetailHero.svelte';
	import WorkDetailContent from '$lib/components/works/WorkDetailContent.svelte';
	import ProjectMetrics from '$lib/components/works/ProjectMetrics.svelte';
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
	<title>{project ? `${project.title} - David Udo` : 'Project Not Found'}</title>
	{#if project}
		<meta name="description" content={project.description} />

		<!-- Open Graph / Facebook -->
		<meta property="og:type" content="article" />
		<meta property="og:url" content="https://davidudo.dev/works/{project.slug}" />
		<meta property="og:title" content="{project.title} - David Udo" />
		<meta property="og:description" content={project.description} />
		<meta property="og:image" content={project.image} />

		<!-- Twitter -->
		<meta property="twitter:card" content="summary_large_image" />
		<meta property="twitter:url" content="https://davidudo.dev/works/{project.slug}" />
		<meta property="twitter:title" content="{project.title} - David Udo" />
		<meta property="twitter:description" content={project.description} />
		<meta property="twitter:image" content={project.image} />

		{#if project.slug === 'aide-delivery-robot'}
			<script type="application/ld+json">
				{
					"@context": "https://schema.org",
					"@type": "SoftwareApplication",
					"@id": "https://davidudo.dev/works/aide-delivery-robot#project",
					"url": "https://davidudo.dev/works/aide-delivery-robot",
					"name": "Aide Robot",
					"description": "Design and development of a package delivery robot. A software and hardware prototype enabling real-time control and monitoring of an autonomous delivery robot.",
					"datePublished": "2023",
					"applicationCategory": "Robotics",
					"author": {
						"@id": "https://davidudo.dev/#person"
					},
					"codeRepository": "https://github.com/davidudo/aide",
					"keywords": "C, JavaScript, HTML, Blender, AutoCAD, Fritzing"
				}
			</script>
		{/if}
	{/if}
</svelte:head>

{#if project}
	<main class="min-h-dvh">
		<WorkDetailHero {project} />
		<WorkDetailContent {project} />
		<ProjectMetrics {project} />
		<NextProjects currentSlug={project.slug} />
		<Footer />
	</main>
{/if}
