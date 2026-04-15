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

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://davidudo.dev/playground" />
	<meta property="og:title" content="Playground - David Udo" />
	<meta
		property="og:description"
		content="Explore David Udo's playground - a collection of hobbies, interests, and creative inspirations beyond work."
	/>
	<meta property="og:image" content="/davidudo.jpg" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://davidudo.dev/playground" />
	<meta property="twitter:title" content="Playground - David Udo" />
	<meta
		property="twitter:description"
		content="Explore David Udo's playground - a collection of hobbies, interests, and creative inspirations beyond work."
	/>
	<meta property="twitter:image" content="/davidudo.jpg" />
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "WebPage",
			"@id": "https://davidudo.dev/playground#webpage",
			"url": "https://davidudo.dev/playground",
			"name": "Playground - David Udo",
			"description": "Explore David Udo's playground - a collection of hobbies, interests, and creative inspirations beyond work.",
			"author": {
				"@id": "https://davidudo.dev/#person"
			},
			"isPartOf": {
				"@id": "https://davidudo.dev/#website"
			}
		}
	</script>
</svelte:head>

<main class="min-h-screen">
	<PlaygroundHero />
	<PlaygroundContent />
</main>

<Footer />
