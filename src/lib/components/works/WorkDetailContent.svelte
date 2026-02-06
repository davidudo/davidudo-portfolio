<script lang="ts">
	import type { Project } from '$lib/data/works';

	let { project } = $props<{ project: Project }>();
</script>

<section class="bg-brand-pink px-4 pb-4 md:px-8">
	<div class="mx-auto">
		{#if project.sections}
			<div class="flex flex-col">
				{#each project.sections as section}
					{@const firstItemTitle = section.items[0]?.title.toLowerCase()}
					<div
						class="flex flex-col"
						class:border-t-0={['problem', 'solution'].includes(firstItemTitle)}
					>
						<div class="divide-y divide-brand-red/50">
							{#each section.items as item, i}
								<div
									class="flex w-full flex-col justify-between gap-4 py-8 md:flex-row md:gap-8 md:py-12"
									class:pb-6={section.items.length > 1 && i === 0}
									class:pt-6={section.items.length > 1 && i > 0}
								>
									<div class="md:col-span-3">
										<h3 class="text-sm font-semibold text-brand-red md:text-base">
											{item.title}
										</h3>
									</div>
									<div class="max-w-2xl md:col-span-9">
										<p
											class="font-instrument text-lg leading-tight font-medium text-brand-red md:text-lg md:leading-tight"
										>
											{item.content}
										</p>
									</div>
								</div>
							{/each}
						</div>

						{#if section.images && section.images.length > 0}
							<div class="mb-12 grid grid-cols-1 gap-4 md:grid-cols-2">
								{#each Array(4) as _, i}
									<div class="aspect-4/3 overflow-hidden bg-gray-100">
										<img
											src={section.images[i % section.images.length]}
											alt="{project.title} section"
											class="h-full w-full object-cover"
										/>
									</div>
								{/each}
							</div>
						{/if}
					</div>
				{/each}
			</div>
		{/if}
	</div>
</section>
