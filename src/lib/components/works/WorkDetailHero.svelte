<script lang="ts">
	import type { Project } from '$lib/data/works';

	let { project } = $props<{ project: Project }>();
</script>

<section class="flex flex-col gap-10 bg-brand-pink px-4 pt-24 pb-4 md:px-8 md:pt-32 lg:pt-50">
	<!-- Top Section -->
	<div class="flex flex-col gap-4">
		<div class="flex items-center gap-2 font-francois text-sm text-brand-red uppercase md:text-2xl">
			<span class="font-medium">{project.title}</span>
		</div>

		<h1 class="max-w-4xl font-instrument-serif text-3xl leading-[1.1] text-brand-red md:text-4xl">
			{project.description}
		</h1>

		<div class="flex items-center gap-3 text-[10px] font-semibold text-brand-red md:text-xs">
			<span>{project.tags.join(', ')}</span>
			<span class="h-1 w-1 rounded-full bg-brand-red"></span>
			<span>{project.year}</span>
			{#if project.link}
				<span class="h-1 w-1 rounded-full bg-brand-red"></span>
				<a
					href={project.link}
					target="_blank"
					rel="noopener noreferrer"
					class="group relative transition-opacity hover:opacity-90"
				>
					View Live
					<span class="absolute -bottom-0.5 left-0 h-[1.5px] w-full bg-brand-red/40"></span>
					<span
						class="absolute -bottom-0.5 left-0 h-[1.5px] w-full origin-left scale-x-0 bg-brand-red transition-transform duration-300 ease-out group-hover:scale-x-100"
					></span>
				</a>
			{/if}
		</div>
	</div>

	<!-- Image Section -->
	<div class="relative aspect-video w-full overflow-hidden bg-gray-100">
		<img src={project.image} alt={project.title} class="h-full w-full object-cover" />
	</div>
</section>
