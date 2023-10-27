<script lang="ts">
	import Icon from '../main/Icon.svelte';

	export let title: string = '';
	export let icon: string = '';
	export let size: number = 0;
	export let coloredIcon: boolean = false;
	export let active: boolean = false;
	export let primary: boolean = false;
	export let outline: boolean = false;
	export let variant: boolean = false;
	export let disabled: boolean = false;
	export let style: string = '';

	export let hasContent: boolean = !!$$props.$$slots?.default;

	let big: boolean = false;
</script>

<button
	{title}
	aria-label={title || 'Action button'}
	class:active
	class:primary
	class:outline
	class:variant
	class:big
	class:hasContent
	{disabled}
	{style}
	on:click
>
	<span>
		{#if icon}
			<Icon {icon} size={big ? 2.2 : size} white={!coloredIcon} />
		{/if}

		<p><slot /></p>
	</span>
</button>

<style>
	button {
		font-family: inherit;
		color: inherit;
		letter-spacing: 0.5px;
		height: inherit;

		background-color: transparent;
		border: none;
		border-radius: var(--button-radius);

		position: relative;
		cursor: pointer;
		z-index: 0;

		transition: background-color 0.15s;
	}

	button:disabled {
		opacity: 0.5;
		cursor: default;
	}

	button p {
		display: flex;
		height: inherit;
		align-items: center;
		gap: 5px;
	}

	button span {
		display: flex;
		align-items: center;
		height: inherit;

		padding: 9px 10px;

		transition: padding 0.2s;
	}
	button.hasContent span {
		gap: 5px;
		padding: 8px 12px;
	}

	button.big p {
		font-size: 1.4em;
	}
	button.big.hasContent span {
		gap: 15px;
		padding: 10px 26px;
	}

	/* primary */

	button.primary {
		color: var(--text);
		background-color: var(--secondary);
		background-color: rgb(var(--secondary-rgb), 0.8);
		/* box-shadow: 5px 5px 0px 0px rgba(226, 11, 132, 0.43); */

		--offset: 5px;
		--fixed-offset: 10px;

		margin-bottom: var(--fixed-offset);
	}
	button.primary span {
		font-weight: 500;
		padding: 8px 18px;
		/* looks more centered */
		margin-top: calc(var(--fixed-offset) / 3);
		padding-right: calc(18px - var(--fixed-offset) / 3);
	}
	button.big.hasContent span {
		padding-right: calc(26px - var(--fixed-offset) / 3);
	}

	button.primary::after {
		content: '';
		width: 100%;
		height: 100%;

		border-radius: inherit;
		background-color: rgb(var(--secondary-rgb), 0.7);

		position: absolute;
		bottom: calc(var(--offset) * -1);
		right: calc(var(--offset) * -1);
		z-index: -1;

		transition: all 0.2s;
	}

	/* outline */

	button.outline {
		border-radius: calc(var(--button-radius) * 2);
		background: linear-gradient(
			20deg,
			black,
			black,
			black,
			#d71e93,
			#970d64,
			#6937bf,
			#5c33a3,
			#6937bf,
			#260038,
			#c31985
		);
		background-size: 100% 180px;

		transition: all 0.8s;

		/* transparent background, but no border radius */
		/* border: 10px solid;
		border-image-slice: 1;
		border-width: 5px;
		border-image-source: linear-gradient(to left, #703cc9, #c31985); */
	}
	button.outline.variant {
		background-size: 300% 180px;
		background-position: 0 -60px;
	}
	button.outline::before {
		content: '';
		position: absolute;
		top: 1.5px;
		right: 1.8px;
		bottom: 1.8px;
		left: 1.5px;

		background-color: #1f0025;
		border-radius: calc(var(--button-radius) * 2 - 1px);
	}
	button.outline :global(svg) {
		z-index: 1;
	}

	/* interaction */

	button.outline:hover:not(:disabled),
	button.outline:focus {
		background-color: #120016;
		background-position: 0 -70px;
	}
	button.outline.variant:hover:not(:disabled),
	button.outline.variant:focus {
		background-position: 0 -84px;
	}
	button.outline:active:not(:disabled),
	button.outline.variant:active:not(:disabled) {
		background-color: #09000a;
		background-position: 0 -142px;
	}

	button:hover:not(:disabled),
	button:focus {
		background-color: rgb(var(--secondary-rgb), 0.6);
		--offset: 2px;
	}

	button:active:not(:disabled),
	button.active:not(:disabled) {
		background-color: rgb(var(--secondary-rgb), 0.5);
		--offset: 0px;
	}

	button.active:not(:disabled) {
		background-color: rgb(var(--secondary-rgb), 0.9);
	}

	/* button:hover,
	button:focus {
		background-color: rgb(var(--primary-rgb), 0.5);
	}

	button:active {
		background-color: rgb(var(--primary-rgb), 0.8);
	} */
</style>
