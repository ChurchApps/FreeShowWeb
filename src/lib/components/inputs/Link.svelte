<script lang="ts">
	import Button from './Button.svelte';

	export let link: string = '';

	// button
	export let title: string = '';
	export let icon: string = '';
	export let size: number = 0;
	export let primary: boolean = false;
	export let outline: boolean = false;
	export let variant: boolean = false;
	export let big: boolean = false;
	export let inline: boolean = false;
	export let style: string = '';

	const hasContent = !!$$props.$$slots?.default;
</script>

<a
	tabindex="-1"
	href={link}
	target={link.includes('http') && !link.includes('releases') ? '_blank' : '_self'}
	aria-label={title || 'Link'}
	class:inline
	{style}
>
	<Button {title} {icon} {size} {primary} {outline} {variant} {big} {hasContent}>
		<slot />
	</Button>
</a>

<style>
	a {
		text-decoration: none;
		height: inherit;
	}

	.inline {
		display: inline;
	}
	.inline :global(button span) {
		padding: 2px 0 !important;
		text-decoration: underline;
	}
</style>
