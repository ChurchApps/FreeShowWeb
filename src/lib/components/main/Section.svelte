<script lang="ts">
	import Button from '../inputs/Button.svelte';
	import Image from './Image.svelte';

	export let height: number = 0;
	export let background: { src: string; alt: string; top?: number; filter?: string } | null = null;
	export let continueButton: boolean = false;
	export let white: boolean = false;
	export let center: boolean = false;
	export let bubble: boolean = false;
	export let column: boolean = false;
	export let style: string = '';

	let sectionElem: any = null;
	function goDown() {
		if (!sectionElem) return;

		let nextSection = sectionElem.offsetTop + sectionElem.offsetHeight;
		scrollTo(0, nextSection);
	}
</script>

<section
	bind:this={sectionElem}
	class:white
	class:center
	class:bubble
	class:column
	class:fixedHeight={!!height}
	style="--height: {height}dvh;{style}"
>
	{#if background}
		<div class="background" style="top: {background.top || 0}px;filter: {background.filter || ''};">
			<Image src={background.src} alt={background.alt} draggable={false} borderRadius={false} />
		</div>
	{/if}

	<slot />

	{#if continueButton}
		<div class="down">
			<Button icon="down" on:click={goDown} />
		</div>
	{/if}
</section>

<style>
	section {
		padding: var(--section-padding) var(--margin);
		position: relative;

		display: flex;
		justify-content: space-between;
		flex-direction: var(--column-small-row-big);
		gap: 80px;
	}
	section.column {
		flex-direction: column;
	}

	section :global(.image) {
		min-width: 50%;
	}
	section :global(.text) {
		width: var(--text-div-fill);
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 25px;
	}
	section :global(.row) {
		display: flex;
		flex-direction: var(--column-small-row-big);
		gap: 60px;
	}

	section.white {
		/* for card outline */
		--primary: var(--primary-inverted);

		background-color: var(--primary-inverted);
		color: var(--text-inverted);
	}

	section.center {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	.fixedHeight {
		height: var(--height);

		align-items: center;
	}

	/* bubble */
	section.bubble::after {
		content: '';
		position: absolute;
		z-index: 0;

		width: 150px;
		height: 150px;
		border-radius: 50%;

		left: 30%;
		transform: translate(-50%, 200%);
		bottom: 0;

		box-shadow: 0 -100px 300px 120px #e33e9e;
	}
	section.bubble::before {
		content: '';
		position: absolute;
		z-index: 0;

		width: 150px;
		height: 150px;
		border-radius: 50%;

		right: 10%;
		top: 0;
		transform: translate(50%, -200%);

		box-shadow: 0 100px 300px 100px #833ee3;
	}

	/* background */
	.background {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
	}

	/* down */

	.down {
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translate(-50%, 50%);
		z-index: 10;
	}

	.down :global(button) {
		background-color: var(--secondary);
		color: var(--text);
		border: none;
		border-radius: 14px;
		padding: 3px;
	}
	.down :global(button::before),
	.down :global(button::after) {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		--spacing: 5px;
		top: calc((var(--spacing) * 1.3 + 1px) * -1);
		left: calc(var(--spacing) * -1);

		border-top: 2px solid rgb(var(--secondary-rgb), 0.7);
		border-bottom: 2px solid rgb(var(--secondary-rgb), 0.2);
		border-radius: 22px;

		padding: calc(var(--spacing) * 1.2) var(--spacing);

		z-index: -1;

		transition: all 0.2s;
	}
	.down :global(button::after) {
		--spacing: 10px;
		border-radius: 26px;
	}
	.down :global(button:hover::before) {
		--spacing: 8px;
		border-radius: 24px;
	}
	.down :global(button:hover::after) {
		--spacing: 13px;
		border-radius: 28px;
	}

	.down :global(button span) {
		padding: 9px 2px;
	}
</style>
