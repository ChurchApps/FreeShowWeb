<script lang="ts">
	import { scale } from 'svelte/transition';
	import Button from '../inputs/Button.svelte';
	import { reviews } from '../scripts/reviews';
	import Stars from './Stars.svelte';

	let activeReview: number = 0;
	$: review = reviews[activeReview];
</script>

<div class="reviews">
	<Button
		outline
		icon="left"
		size={1}
		coloredIcon
		disabled={activeReview <= 0}
		on:click={() => (activeReview = Math.max(0, activeReview - 1))}
	/>

	<div class="transition">
		{#key review}
			<div class="review" transition:scale>
				<!-- no one has images -->
				<!-- <Card outline style="width: var(--text-div-fill);--card-padding: 8px;--border-radius: 50%;">
					<Image
						src="reviewers/{review.image || 'blank.jpg'}"
						alt="Image of person reviewing"
						style="border-radius: 50%;"
					/>
				</Card> -->

				<!-- flex: 1; -->
				<div class="text" style="width: var(--full-small-half-big);">
					<Stars count={review.stars} />
					<p>{review.description}</p>
					<div class="name">
						<div class="line" />
						{review.name}
					</div>
				</div>
			</div>
		{/key}
	</div>

	<Button
		outline
		icon="right"
		size={0.8}
		coloredIcon
		disabled={activeReview >= reviews.length - 1}
		on:click={() => (activeReview = Math.min(reviews.length - 1, activeReview + 1))}
	/>
</div>

<style>
	.reviews {
		--height: 200px;

		display: flex;
		align-items: center;
		width: 100%;
		gap: 20px;
	}

	.transition {
		width: 100%;
		height: var(--height);
		position: relative;
	}

	.review {
		display: flex;
		text-align: left;
		gap: 20px;
		flex-direction: var(--column-small-row-big);
		flex: 1;

		/* with no image */
		justify-content: center;

		/* don't jump when transitioning */
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.text {
		/* with no image */
		align-items: center;
	}

	.text p {
		font-size: 0.9em;
	}

	.name {
		font-weight: 700;
		letter-spacing: 0.8px;
		font-size: 0.8em;
	}

	.line {
		width: 15px;
		/* with no image */
		margin: auto;
		border-bottom: 3px solid var(--secondary);
		margin-bottom: 10px;
	}

	@media only screen and (min-width: 600px) {
		.text p {
			font-size: 1.3em;
		}
	}
</style>
