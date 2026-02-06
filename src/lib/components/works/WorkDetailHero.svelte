<script lang="ts">
	import type { Project } from '$lib/data/works';

	let { project } = $props<{ project: Project }>();
</script>

<section class="flex flex-col gap-10 bg-brand-pink px-4 pt-24 pb-4 md:px-8 md:pt-32 lg:pt-50">
	<div
		class="mx-auto grid w-full max-w-[1800px] grid-cols-1 justify-between gap-12 md:grid-cols-2 md:gap-24"
	>
		<!-- Left: Title & Description (Original Design) -->
		<div class="flex flex-col gap-4">
			<div
				class="flex items-center gap-2 font-francois text-sm text-brand-red uppercase md:text-2xl"
			>
				<span class="font-medium">{project.title}</span>
			</div>

			<h1 class="max-w-4xl font-instrument-serif text-3xl leading-[1.1] text-brand-red md:text-4xl">
				{project.description}
			</h1>

			<div
				class="mt-auto flex items-center gap-3 text-[10px] font-semibold text-brand-red md:text-xs"
			>
				<span>{project.tags.join(', ')}</span>
				<span class="h-1 w-1 rounded-full bg-brand-red"></span>
				<span>{project.year}</span>
			</div>
		</div>

		<!-- Right: Details List (New Design) -->
		<div class="ml-auto flex w-full max-w-xl flex-col border-t border-brand-red/30 text-brand-red">
			<!-- Client -->
			<div class="flex items-center justify-between border-b border-brand-red/30 py-4">
				<span class="font-francois text-xs font-medium tracking-wide uppercase">Client</span>
				<span class="font-instrument text-xs font-semibold uppercase">
					{project.client || 'Personal'}
				</span>
			</div>

			<!-- Industry -->
			<div class="flex items-center justify-between border-b border-brand-red/30 py-4">
				<span class="font-francois text-xs font-medium tracking-wide uppercase">Industry</span>
				<span class="font-instrument text-xs font-semibold uppercase">
					{project.industry}
				</span>
			</div>

			<!-- Category -->
			<div class="flex items-center justify-between border-b border-brand-red/30 py-4">
				<span class="font-francois text-xs font-medium tracking-wide uppercase">Category</span>
				<span class="font-instrument text-xs font-semibold uppercase">
					{project.tags[0] || 'Development'}
				</span>
			</div>

			<!-- Live Project Link -->
			{#if project.link}
				<div class="flex items-center justify-between border-b border-brand-red/30 py-4">
					<span class="font-francois text-xs font-medium tracking-wide uppercase">Live Project</span
					>
					<a
						href={project.link}
						target="_blank"
						rel="noopener noreferrer"
						class="group flex items-center gap-1 font-instrument text-xs font-semibold uppercase"
					>
						<div class="relative flex h-3.5 flex-col overflow-hidden">
							<span class="transition-transform duration-300 group-hover:-translate-y-full"
								>LIVE PREVIEW</span
							>
							<span
								class="absolute top-full left-0 w-full transition-transform duration-300 group-hover:-translate-y-full"
								>LIVE PREVIEW</span
							>
						</div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="h-4 w-4"
						>
							<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
							<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
						</svg>
					</a>
				</div>
			{/if}
		</div>
	</div>

	<!-- Image Section (2x2 Grid) -->
	<div class="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-4">
		{#each Array(4) as _}
			<div class="aspect-4/3 overflow-hidden bg-gray-100">
				<img src={project.image} alt={project.title} class="h-full w-full object-cover" />
			</div>
		{/each}
	</div>
</section>
