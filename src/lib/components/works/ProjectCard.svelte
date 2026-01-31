<script lang="ts">
	let {
		title,
		tags,
		image,
		hoverImage = '',
		slug
	} = $props<{
		title: string;
		tags: string;
		image: string;
		hoverImage?: string;
		slug: string;
	}>();
</script>

<a href="/works/{slug}" class="flex flex-col gap-3 transition-opacity md:hover:opacity-90">
	<div class="group relative aspect-4/3 w-full overflow-hidden md:hover:cursor-pointer">
		{#if image}
			<img
				src={image}
				alt={title}
				class="h-full w-full object-cover transition-opacity duration-500 ease-in-out {hoverImage
					? 'md:group-hover:opacity-0'
					: ''}"
			/>
		{/if}
		{#if hoverImage}
			<img
				src={hoverImage}
				alt="{title} hover"
				class="absolute inset-0 hidden h-full w-full object-cover opacity-0 transition-opacity duration-500 ease-in-out md:block md:group-hover:opacity-100"
			/>
		{/if}
	</div>
	<div
		class="flex items-center gap-2 font-francois text-[10px] text-brand-red uppercase md:text-xs"
	>
		<span>{title}</span>
		<span class="h-1 w-1 rounded-full bg-brand-red"></span>
		<span>{tags}</span>
	</div>
</a>
