<script>
	import Hero from '$lib/components/home/Hero.svelte';
	import About from '$lib/components/home/About.svelte';
	import SelectedWorks from '$lib/components/home/SelectedWorks.svelte';
	import WorkExperience from '$lib/components/home/WorkExperience.svelte';
	import WhatIDo from '$lib/components/home/WhatIDo.svelte';
	import TechStack from '$lib/components/home/TechStack.svelte';
	import Testimonials from '$lib/components/home/Testimonials.svelte';
	import FAQ from '$lib/components/home/FAQ.svelte';
	import Profile from '$lib/components/home/Profile.svelte';
	import Footer from '$lib/components/home/Footer.svelte';
</script>

<svelte:head>
	<title>David Udo - Software Engineer</title>
	<meta
		name="description"
		content="David Udo is a Software Engineer with 4+ years of experience architecting and delivering robust solutions for web, mobile, and desktop."
	/>
	<meta
		name="keywords"
		content="David Udo, Software Engineer, Full Stack Developer, Svelte, TypeScript, Flutter, Python"
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://davidudo.dev/" />
	<meta property="og:title" content="David Udo - Software Engineer" />
	<meta
		property="og:description"
		content="Software Engineer architecting and delivering robust solutions across web, mobile, and desktop."
	/>
	<meta property="og:image" content="/davidudo.jpg" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://davidudo.dev/" />
	<meta property="twitter:title" content="David Udo - Software Engineer" />
	<meta
		property="twitter:description"
		content="Software Engineer architecting and delivering robust solutions across web, mobile, and desktop."
	/>
	<meta property="twitter:image" content="/davidudo.jpg" />
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@graph": [
				{
					"@type": "Person",
					"@id": "https://davidudo.dev/#person",
					"name": "David Udo",
					"givenName": "David",
					"familyName": "Udo",
					"jobTitle": "Software Engineer",
					"description": "Software Engineer with 4+ years of experience architecting and delivering robust solutions for web, mobile, and desktop.",
					"url": "https://davidudo.dev",
					"email": "dave.etim.udo@gmail.com",
					"telephone": "+2348107587015",
					"sameAs": ["https://linkedin.com/in/davidudo", "https://github.com/davidudo"],
					"knowsAbout": [
						"JavaScript",
						"TypeScript",
						"Python",
						"Elixir",
						"Go",
						"Dart",
						"React",
						"Vue",
						"Svelte",
						"Next.js",
						"Flutter",
						"Node.js",
						"NestJS",
						"Django",
						"Phoenix",
						"PostgreSQL",
						"MongoDB",
						"AWS",
						"Docker",
						"Kubernetes"
					]
				},
				{
					"@type": "WebSite",
					"@id": "https://davidudo.dev/#website",
					"url": "https://davidudo.dev",
					"name": "David Udo - Software Engineer",
					"description": "Portfolio of David Udo, a Software Engineer with 4+ years of experience in web, mobile, and desktop development.",
					"author": {
						"@id": "https://davidudo.dev/#person"
					}
				},
				{
					"@type": "ProfilePage",
					"@id": "https://davidudo.dev/#profilepage",
					"url": "https://davidudo.dev",
					"name": "David Udo - Software Engineer",
					"description": "Software Engineer architecting and delivering robust solutions across web, mobile, and desktop.",
					"mainEntity": {
						"@id": "https://davidudo.dev/#person"
					},
					"isPartOf": {
						"@id": "https://davidudo.dev/#website"
					}
				}
			]
		}
	</script>
</svelte:head>

<Hero />
<About />
<SelectedWorks />
<WorkExperience />
<WhatIDo />
<TechStack />
<Testimonials />
<FAQ />
<Profile />
<Footer />
