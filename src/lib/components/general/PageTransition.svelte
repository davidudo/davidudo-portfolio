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
				skipPageTransition.set(false); // Reset for next navigation
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
			}, 300); // Small delay to ensure the new content is painted
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
		onanimationend={handleAnimationEnd}
	>
		<span class="page-transition-name">David Udo</span>
	</div>
{/if}

<style>
	.page-transition-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: var(--color-brand-red);
		z-index: 9999;
		pointer-events: none;
		overflow: hidden;
		transform: translateY(100%); /* Hidden at bottom by default */
	}

	.page-transition-name {
		position: absolute;
		bottom: 2.5rem;
		right: 1.5rem;
		font-family: var(--font-signature);
		font-size: 1.5rem;
		color: white;
		pointer-events: none;
	}

	@media (min-width: 768px) {
		.page-transition-name {
			bottom: 4rem;
			right: 4rem;
			font-size: 2rem;
		}
	}

	.entering {
		animation: enterFromBottom 1s cubic-bezier(0.65, 0, 0.35, 1) forwards;
	}

	.holding {
		transform: translateY(0);
	}

	.leaving {
		animation: exitToBottom 1s cubic-bezier(0.65, 0, 0.35, 1) forwards;
	}

	/* Enter: Rise from bottom to cover screen (current page) */
	@keyframes enterFromBottom {
		from {
			transform: translateY(100%);
		}
		to {
			transform: translateY(0);
		}
	}

	/* Exit: Slide down to reveal new content (new page) */
	@keyframes exitToBottom {
		from {
			transform: translateY(0);
		}
		to {
			transform: translateY(100%);
		}
	}
</style>
