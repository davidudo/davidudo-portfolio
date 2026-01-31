<script lang="ts">
	import Hero from '$lib/components/works/Hero.svelte';
	import ProjectList from '$lib/components/works/ProjectList.svelte';
	import Footer from '$lib/components/general/Footer.svelte';
</script>

<svelte:head>
	<title>Works | David Udo</title>
</svelte:head>

<main class="min-h-dvh w-full bg-brand-pink font-instrument text-brand-red">
	<Hero />
	<ProjectList />
	<Footer />
</main>
