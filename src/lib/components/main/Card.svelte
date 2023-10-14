<script lang="ts">
	export let style: string = '';
	export let outline: boolean = false;
	export let variant: boolean = false;
	export let glass: boolean = false;
</script>

<div class="card" {style} class:outline class:variant class:glass>
	<slot />
</div>

<style>
	.card {
		position: relative;

		border-radius: var(--border-radius);
		padding: var(--card-padding);

		overflow: hidden;
	}

	/* WIP custom outline */
	.card.outline {
		--outline-width: 1.5px;

		background-color: black;
		background: linear-gradient(
			-20deg,
			#d71e93,
			#c31985,
			rgba(151, 13, 100, 0.379),
			rgba(82, 0, 120, 0.104),
			#5c33a3,
			#6937bf
		);

		z-index: 0;

		/* border: var(--outline-width) solid transparent; */
	}
	/* just rotated */
	.card.variant.outline {
		background: linear-gradient(
			140deg,
			#d71e93,
			#c31985,
			rgba(151, 13, 100, 0.379),
			rgba(82, 0, 120, 0.104),
			#5c33a3,
			#6937bf
		);
	}
	.card.outline::before {
		content: '';
		position: absolute;
		top: var(--outline-width);
		right: var(--outline-width);
		bottom: var(--outline-width);
		left: var(--outline-width);

		z-index: -1;

		background-color: var(--primary);
		border-radius: calc(var(--border-radius) - 1px);
	}
	/* .card.outline :global(*) {
		z-index: 0;
	} */

	.card.glass {
		/* too laggy */
		/* backdrop-filter: brightness(0.9) blur(5px); */
		background-color: rgba(163, 0, 163, 0.2);
		/* background-color: rgb(var(--secondary-rgb), 0.1); */
	}
</style>
