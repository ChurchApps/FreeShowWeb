<script lang="ts">
	export let style: string = '';
	export let outline: boolean = false;
	export let variant: boolean = false;
	export let bubble: number = 0;
	export let glass: boolean = false;
</script>

<div class="card bubble{bubble}" {style} class:outline class:variant class:glass class:bubble>
	<slot />
</div>

<style>
	.card {
		position: relative;

		border-radius: var(--border-radius);
		padding: var(--card-padding);

		overflow: hidden;
	}

	.card.bubble::after {
		content: '';
		position: absolute;
		z-index: 0;

		width: 150px;
		height: 150px;
		border-radius: 50%;

		box-shadow: 0px -200px 200px 30px blue;
	}
	.card.bubble1::after {
		left: 50%;
		transform: translate(-50%, 200%);
		bottom: 0;

		box-shadow: 0 -200px 200px 30px #613ee3;
	}
	.card.bubble2::after {
		left: 50%;
		transform: translate(-50%, -200%);
		top: 0;

		box-shadow: 0 200px 200px 30px #d71e93;
	}
	.card.bubble3::after {
		background: linear-gradient(
			to right,
			#6937bf,
			rgb(157 51 196 / 0.6),
			rgb(195 25 133 / 0.9),
			rgb(195 25 133 / 0.8)
		);

		opacity: 0.9;

		width: 600px;
		height: 500px;

		left: 20%;
		transform: translate(-50%, 100%);
		bottom: 0;

		box-shadow: 100px 0 200px 10px #c31985;
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

	/* media */

	@media only screen and (min-width: 600px) {
		.card.bubble3::after {
			transform: translate(-50%, 50%);
		}
	}
</style>
