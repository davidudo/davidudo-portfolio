<script lang="ts">
	import { onMount } from 'svelte';

	let { oncomplete } = $props<{ oncomplete: () => void }>();

	let count = $state(0);
	let phase = $state<'loading' | 'exiting' | 'complete'>('loading');

	onMount(() => {
		// Counter animation logic
		const duration = 2000;
		const startTime = performance.now();

		const animate = (currentTime: number) => {
			const elapsed = currentTime - startTime;
			const progress = Math.min(elapsed / duration, 1);

			// Easing for counter
			count = Math.floor(progress * 100);

			if (progress < 1) {
				requestAnimationFrame(animate);
			} else {
				// Small pause at 100% before exiting
				setTimeout(() => {
					phase = 'exiting';
				}, 200);
			}
		};

		requestAnimationFrame(animate);
	});

	function handleAnimationEnd() {
		if (phase === 'exiting') {
			phase = 'complete';
			oncomplete();
		}
	}
</script>

{#if phase !== 'complete'}
	<div class="loader-overlay" class:exiting={phase === 'exiting'}>
		<div class="bars-container">
			{#each Array(5) as _, i}
				<div
					class="bar"
					style="--index: {i};"
					onanimationend={i === 4 ? handleAnimationEnd : null}
				></div>
			{/each}
		</div>

		{#if phase === 'loading'}
			<div class="counter-container">
				<span class="counter">{count}%</span>
			</div>
		{/if}
	</div>
{/if}

<style>
	.loader-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 10000; /* Above everything including PageTransition */
		pointer-events: none; /* Block clicks but let's be careful */
		pointer-events: all; /* Actually update to block clicks */
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: transparent; /* Background provided by bars */
	}

	.bars-container {
		position: absolute;
		inset: 0;
		display: flex;
		width: 100%;
		height: 100%;
		z-index: 1;
	}

	.bar {
		flex: 1;
		height: 100%;
		background-color: var(--color-brand-red);
		transform: translateY(0); /* Start fully covered */
		will-change: transform;
	}

	.counter-container {
		position: relative;
		z-index: 2;
		overflow: hidden;
	}

	.counter {
		display: block;
		font-family: var(--font-francois);
		font-size: 8rem;
		font-weight: bold;
		color: white;
		line-height: 1;
		mix-blend-mode: difference; /* Just in case */
		color: #ffffff;
	}

	/* Exit Animation */
	.exiting .bar {
		animation: barExit 0.6s cubic-bezier(0.65, 0, 0.35, 1) forwards;
		animation-delay: calc(var(--index) * 0.08s);
	}

	@keyframes barExit {
		from {
			transform: translateY(0);
		}
		to {
			transform: translateY(100%);
		}
	}

	@media (max-width: 768px) {
		.counter {
			font-size: 4rem;
		}
	}
</style>
