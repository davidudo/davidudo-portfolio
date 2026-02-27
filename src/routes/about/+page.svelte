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
	<meta
		name="description"
		content="Learn more about David Udo, a Software Engineer with 4+ years of experience in web, mobile, and desktop development."
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://davidudo.dev/about" />
	<meta property="og:title" content="About - David Udo" />
	<meta
		property="og:description"
		content="Software Engineer architecting and delivering robust solutions across web, mobile, and desktop."
	/>
	<meta property="og:image" content="/davidudo.jpg" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://davidudo.dev/about" />
	<meta property="twitter:title" content="About - David Udo" />
	<meta
		property="twitter:description"
		content="Software Engineer architecting and delivering robust solutions across web, mobile, and desktop."
	/>
	<meta property="twitter:image" content="/davidudo.jpg" />
</svelte:head>

<Hero />
<Bio />
<Skills />
<BioStory />
<Experience />
<Footer />
