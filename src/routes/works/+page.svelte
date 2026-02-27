<script lang="ts">
	import Hero from '$lib/components/works/Hero.svelte';
	import ProjectList from '$lib/components/works/ProjectList.svelte';
	import Footer from '$lib/components/general/Footer.svelte';
</script>

<svelte:head>
	<title>Selected Works - David Udo</title>
	<meta
		name="description"
		content="Explore a selected collection of projects and software solutions architected and delivered by David Udo."
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://davidudo.dev/works" />
	<meta property="og:title" content="Selected Works - David Udo" />
	<meta
		property="og:description"
		content="Explore a selected collection of projects and software solutions architected and delivered by David Udo."
	/>
	<meta property="og:image" content="/davidudo.jpg" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://davidudo.dev/works" />
	<meta property="twitter:title" content="Selected Works - David Udo" />
	<meta
		property="twitter:description"
		content="Explore a selected collection of projects and software solutions architected and delivered by David Udo."
	/>
	<meta property="twitter:image" content="/davidudo.jpg" />
</svelte:head>

<main class="min-h-dvh w-full bg-brand-pink font-instrument text-brand-red">
	<Hero />
	<ProjectList />
	<Footer />
</main>
