<script lang="ts">
	import PlaygroundHero from '$lib/components/playground/PlaygroundHero.svelte';
	import PlaygroundContent from '$lib/components/playground/PlaygroundContent.svelte';
	import Footer from '$lib/components/general/Footer.svelte';
</script>

<svelte:head>
	<title>Playground - David Udo</title>
	<meta
		name="description"
		content="Explore David Udo's playground - a collection of hobbies, interests, and creative inspirations beyond work."
	/>
</svelte:head>

<main class="min-h-screen">
	<PlaygroundHero />
	<PlaygroundContent />
</main>

<Footer />
