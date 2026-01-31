<script>
	import Hero from '$lib/components/about/Hero.svelte';
	import Bio from '$lib/components/about/Bio.svelte';
	import Skills from '$lib/components/about/Skills.svelte';
	import BioStory from '$lib/components/about/BioStory.svelte';
	import Experience from '$lib/components/about/Experience.svelte';
	import Footer from '$lib/components/general/Footer.svelte';
</script>

<svelte:head>
	<title>About - David Udo</title>
</svelte:head>

<Hero />
<Bio />
<Skills />
<BioStory />
<Experience />
<Footer />
