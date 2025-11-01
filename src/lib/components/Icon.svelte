<script>
	export let name;
	export let size = 16;
	export let color = '#ffffff';
</script>

<span
	class="inline-block icon"
	style="
		width: {size}px;
		height: {size}px;
		background-color: {color};
		--svg: url('/icons/{name}.svg');
		-webkit-mask-image: var(--svg);
		mask-image: var(--svg);
	"
></span>

<style>
	.icon {
		-webkit-mask-repeat: no-repeat;
		mask-repeat: no-repeat;
		-webkit-mask-size: 100% 100%;
		mask-size: 100% 100%;
	}
</style>
