import { writable } from 'svelte/store';

// When true, skips the page transition animation (e.g., when navigating from menu)
export const skipPageTransition = writable(false);
