<script lang="ts">
	import { fade } from 'svelte/transition';
	import Image from './Image.svelte';
	import Icon from './Icon.svelte';

	export let src: string = '';
	export let thumbnail: string = '';

	let videoElem: any = null;

	let videoPlaying = false;
	function startVideo() {
		if (!videoElem) return;

		videoElem.play();
		videoPlaying = true;
	}

	function keydown(e: any) {
		if (e.key === ' ' || e.key === 'Enter') {
			e.preventDefault();
			startVideo();
		}
	}
</script>

<div class="video">
	{#if thumbnail && !videoPlaying}
		<div
			class="thumbnail"
			tabindex="0"
			on:click={startVideo}
			on:keydown={keydown}
			role="button"
			transition:fade={{ duration: 200 }}
		>
			<div class="play" title="Play video">
				<Icon icon="play" white />
			</div>

			<Image src="thumbnails/{thumbnail}" alt="Video thumbnail" />
		</div>
	{/if}

	<video
		tabindex={thumbnail && !videoPlaying ? -1 : 0}
		src="videos/{src}"
		bind:this={videoElem}
		on:ended={() => (videoPlaying = false)}
		controls
	>
		<track kind="captions" />
	</video>
</div>

<style>
	.video,
	video {
		position: relative;
		width: 100%;
		height: 100%;

		border-radius: var(--border-radius);
	}

	.play {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);

		background-color: var(--secondary);
		padding: 30px;
		border-radius: 50%;

		display: flex;
		justify-content: center;
		align-items: center;
	}
	.play::before {
		content: '';
		position: absolute;

		--spacing: 10px;
		top: calc(var(--spacing) * -1);
		left: calc(var(--spacing) * -1);
		height: 100%;
		width: 100%;

		padding: var(--spacing);
		border-radius: inherit;
		background-color: inherit;

		z-index: -1;
		opacity: 0.5;

		transition: all 0.2s;
	}

	.thumbnail:hover .play::before {
		--spacing: 12px;
	}
	.play:hover::before {
		--spacing: 15px !important;
	}

	.thumbnail {
		position: absolute;
		z-index: 1;

		cursor: pointer;
		transition: filter 0.1s;
	}

	.thumbnail:hover {
		filter: brightness(1.1);
	}
</style>
