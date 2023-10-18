<script lang="ts">
	import { scale, fade } from 'svelte/transition';
	import Icon from './Icon.svelte';
	import Button from '../inputs/Button.svelte';
	import { onMount } from 'svelte';

	export let image: any;
	export let index: number;

	let loaded = false;
	onMount(() => {
		setTimeout(() => {
			loaded = true;
		}, 100);
	});

	function close(e: any) {
		if (!loaded || e.target.closest('.arrow')) return;
		index = -1;
	}
</script>

<svelte:window on:click={close} />

<div class="overlay" transition:fade={{ duration: 100 }}>
	<div class="arrow left">
		<Button icon="left" on:click={() => (index = index - 1)} outline />
	</div>

	<img src="images/{image?.src}" alt={image?.alt || ''} transition:scale={{ duration: 200 }} />
	{#if image?.description}
		<p>{image?.description}</p>
	{/if}

	<div class="arrow right">
		<Button icon="right" on:click={() => index++} outline />
	</div>
</div>

<style>
	.overlay {
		background-color: rgb(0 0 0 / 0.7);
		backdrop-filter: blur(5px);
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 40;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
		user-select: none;
	}

	p {
		position: absolute;
		bottom: 0;
		width: 100%;
		padding: 10px;
		background-color: var(--primary);
		opacity: 0.8;
	}

	.overlay .arrow {
		position: absolute;
		/* height: 100%; */
		left: 0;
		/* background-color: var(--focus); */
		opacity: 0.8;

		padding: 10px;
	}
	.overlay .arrow.right {
		right: 0;
		left: initial;
	}
</style>
