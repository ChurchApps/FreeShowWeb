<script lang="ts">
	import Button from '../inputs/Button.svelte';
	import Fullscreen from '../main/Fullscreen.svelte';
	import { images } from '../scripts/gallery';

	export let index = -1;

	$: if (index >= 0 && !images[index]) index = -1;

	let showMore = false;
</script>

{#if index >= 0}
	<Fullscreen image={images[index]} bind:index />
{/if}

<div class="previews">
	{#each images as image, i}
		{#if showMore || i < 18}
			<div>
				<input
					class="image"
					on:click={() => (index = i)}
					type="image"
					src="images/{image.src}"
					alt={image.name}
				/>

				{#if image.name || image.description}
					<span style="width: 100%;text-align: left;">
						<h5>{image.name}</h5>
						<p>{image.description}</p>
					</span>
				{/if}
			</div>
		{/if}
	{/each}

	<span class="more">
		{#if !showMore}
			<Button on:click={() => (showMore = true)} style="border: 2px solid white;">Show more</Button>
		{/if}
	</span>
</div>

<style>
	:global(body) {
		/* scroll for some reason on phones */
		overflow-x: hidden;
	}

	.image {
		width: 100%;
		object-fit: cover;
		user-select: none;
	}
	.image:hover {
		filter: brightness(1.2);
	}

	.more {
		margin-top: 20px;
	}

	.previews {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		width: 100%;
	}
	.previews div:nth-child(odd) {
		background-color: rgb(255 255 255 / 0.08);
	}
	.previews div {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
		padding: 10px;
		width: 100%;
	}

	.previews span:not(.more),
	.previews .image {
		max-height: 300px;
		object-fit: contain;
	}

	.previews span:not(.more) p {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	/* media */

	@media only screen and (min-width: 800px) {
		.previews div {
			width: 33%;
		}

		.previews span:not(.more) p {
			white-space: initial;
		}
	}
</style>
