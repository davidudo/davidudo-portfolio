<svelte:head>
	<title>404 | Page Not Found</title>
</svelte:head>

<main class="flex min-h-dvh w-full flex-col items-center justify-center bg-brand-pink px-4 py-20">
	<!-- Large 404 Typography -->
	<h1
		class="flex flex-col items-center font-anton text-[20vw] leading-none font-bold text-brand-red uppercase"
	>
		404
	</h1>

	<!-- Message -->
	<div class="mt-6 flex flex-col items-center gap-4 text-center md:mt-8">
		<p
			class="font-instrument-serif text-sm font-semibold tracking-wider text-brand-red md:text-base"
		>
			PAGE NOT FOUND
		</p>
		<p
			class="mx-auto max-w-[280px] font-francois text-[10px] leading-tight text-brand-red uppercase md:max-w-sm md:text-xs"
		>
			The page you're looking for doesn't exist or has been moved.
		</p>
	</div>

	<!-- Back Home Link -->
	<a
		href="/"
		class="group relative mt-12 flex h-3.5 flex-col overflow-hidden font-francois text-xs text-brand-red uppercase md:mt-16"
	>
		<span class="transition-transform duration-300 group-hover:-translate-y-full">GO HOME</span>
		<span
			class="absolute top-full left-0 w-full transition-transform duration-300 group-hover:-translate-y-full"
			>GO HOME</span
		>
	</a>
</main>
