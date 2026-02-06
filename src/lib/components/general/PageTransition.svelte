<script lang="ts">
	import { beforeNavigate, afterNavigate, goto } from '$app/navigation';
	import { skipPageTransition } from '$lib/stores/transition';
	import { get } from 'svelte/store';

	let isTransitioning = $state(false);
	let phase = $state<'idle' | 'entering' | 'holding' | 'leaving'>('idle');
	let pendingUrl = $state<string | null>(null);

	// Intercept outgoing navigation
	beforeNavigate(({ to, cancel }) => {
		// If it's an internal navigation and we haven't started transitioning yet
		if (to && to.url && !isTransitioning) {
			// Check if we should skip this transition (e.g., from menu navigation)
			if (get(skipPageTransition)) {
				skipPageTransition.set(false);
				return;
			}

			// Cancel the immediate navigation
			cancel();

			// Store the URL for later
			pendingUrl = to.url.pathname + to.url.search;

			// Start the entering animation on the current page
			isTransitioning = true;
			phase = 'entering';
		}
	});

	// Handle when the new page has loaded
	afterNavigate(() => {
		if (phase === 'holding') {
			// Trigger the leaving animation to reveal the new page
			setTimeout(() => {
				phase = 'leaving';
			}, 300);
		}
	});

	function handleAnimationEnd() {
		if (phase === 'entering') {
			phase = 'holding';
			// Redirection happens only AFTER the coverage animation is complete
			if (pendingUrl) {
				const url = pendingUrl;
				pendingUrl = null;
				goto(url);
			}
		} else if (phase === 'leaving') {
			isTransitioning = false;
			phase = 'idle';
		}
	}
</script>

{#if isTransitioning}
	<div
		class="page-transition-overlay"
		class:entering={phase === 'entering'}
		class:holding={phase === 'holding'}
		class:leaving={phase === 'leaving'}
	>
		<div class="bars-container">
			{#each Array(5) as _, i}
				<div
					class="bar"
					style="--index: {i};"
					onanimationend={i === 4 ? handleAnimationEnd : null}
				></div>
			{/each}
		</div>
		<span
			class="page-transition-name"
			class:visible={phase === 'entering' || phase === 'holding'}
			class:loading={phase === 'holding'}
		>
			David Udo
		</span>
	</div>
{/if}

<style>
	.page-transition-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 9999;
		pointer-events: none;
		overflow: hidden;
	}

	.bars-container {
		position: absolute;
		inset: 0;
		display: flex;
		width: 100%;
		height: 100%;
	}

	.bar {
		flex: 1;
		height: 100%;
		background-color: var(--color-brand-red);
		transform: translateY(100%);
	}

	.page-transition-name {
		position: absolute;
		bottom: 2.5rem;
		right: 1.5rem;
		font-family: var(--font-signature);
		font-size: 1.5rem;
		color: white;
		pointer-events: none;
		opacity: 0;
		transition: opacity 0.3s ease;
		z-index: 10;
	}

	.page-transition-name.visible {
		opacity: 1;
	}

	.page-transition-name.loading {
		animation: pulse 1.5s ease-in-out infinite;
	}

	@keyframes pulse {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.5;
		}
	}

	@media (min-width: 768px) {
		.page-transition-name {
			bottom: 4rem;
			right: 4rem;
			font-size: 2.5rem;
		}
	}

	.entering .bar {
		animation: barEnter 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards;
		animation-delay: calc(var(--index) * 0.05s);
	}

	.holding .bar {
		transform: translateY(0);
	}

	.leaving .bar {
		animation: barExit 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards;
		animation-delay: calc(var(--index) * 0.05s);
		animation-fill-mode: both;
	}

	@keyframes barEnter {
		from {
			transform: translateY(100%);
		}
		to {
			transform: translateY(0);
		}
	}

	@keyframes barExit {
		from {
			transform: translateY(0);
		}
		to {
			transform: translateY(100%);
		}
	}
</style>
