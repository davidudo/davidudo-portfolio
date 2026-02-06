<script lang="ts">
	import type { Project } from '$lib/data/works';

	interface Props {
		project: Project;
	}

	let { project }: Props = $props();
</script>

{#if project.metrics || project.testimonial}
	<section class="w-full bg-brand-pink px-4 py-24 text-brand-red md:px-8">
		<div class="mx-auto flex flex-col gap-24">
			{#if project.metrics && project.metrics.length > 0}
				<div class="flex flex-col">
					<h3 class="mb-10 font-instrument text-lg font-medium tracking-widest uppercase">
						Results
					</h3>
					<div class="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
						{#each project.metrics as metric}
							<div class="flex flex-col gap-4">
								<div class="font-instrument text-4xl leading-none md:text-5xl">
									{metric.value}
								</div>
								<div class="max-w-[200px] text-sm leading-relaxed font-medium">
									{metric.label}
								</div>
							</div>
						{/each}
					</div>
				</div>
			{/if}

			{#if project.testimonial}
				<div class="flex flex-col">
					<h3 class="mb-10 font-instrument text-lg font-medium tracking-widest uppercase">
						Client Feedback
					</h3>
					<div class="rounded-sm border border-brand-red/20 bg-brand-red/3 p-10 md:p-14">
						<p class="mb-10 font-instrument text-xl leading-relaxed md:text-2xl lg:max-w-4xl">
							&quot;{project.testimonial.quote}&quot;
						</p>
						<div class="flex items-center gap-4">
							<div
								class="h-12 w-12 shrink-0 overflow-hidden rounded-full border border-brand-red/10"
							>
								{#if project.testimonial.avatar}
									<img
										src={project.testimonial.avatar}
										alt={project.testimonial.name}
										class="h-full w-full object-cover"
									/>
								{:else}
									<div class="h-full w-full bg-brand-red/10"></div>
								{/if}
							</div>
							<div class="flex flex-wrap items-baseline gap-x-2 text-base">
								<span class="font-semibold">{project.testimonial.name},</span>
								<span class="font-medium">{project.testimonial.role}</span>
							</div>
						</div>
					</div>
				</div>
			{/if}
		</div>
	</section>
{/if}
