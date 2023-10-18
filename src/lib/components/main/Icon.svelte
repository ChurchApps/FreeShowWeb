<script lang="ts">
	// @ts-ignore
	import SvelteIcon from 'svelte-icons-pack/Icon.svelte';
	import { icons } from '../scripts/icons';

	export let icon: string;
	export let white: boolean = false;
	export let black: boolean = false;
	export let color: string = '';
	export let size = 0;
</script>

<!-- fade in ? -->
<div class="icon" class:white class:black style={color ? `--secondary: ${color};` : ''}>
	<SvelteIcon src={icons[icon] || { a: {} }} size="{size || 1.6}em" />
</div>

<style>
	.icon {
		display: contents;
	}

	.icon.white {
		--secondary: var(--text);
	}
	.icon.black {
		--secondary: var(--text-inverted);
	}

	.icon :global(svg),
	.icon :global(svg path) {
		/* stroke: var(--secondary); */
		fill: var(--secondary);
	}
</style>
