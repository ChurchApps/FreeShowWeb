<script lang="ts">
	import { onMount } from 'svelte';
	import Download from '../special/Download.svelte';

	let year: number = 2024;
	onMount(() => {
		let currentYear = new Date().getFullYear();
		if (currentYear) year = currentYear;
	});
</script>

<footer>
	<Download disableMain />

	<!-- TODO: social accounts! -->

	<div class="text">
		<a
			href="https://github.com/ChurchApps/FreeShow/issues"
			title="Go to FreeShow issues on GitHub"
			target="_blank"
			rel="noreferrer"
		>
			Report a bug or request a feature
		</a>
		<span>●</span>
		<a href="https://churchapps.org/partner" title="Give a thanks">Donate</a>
		<span>●</span>
		<a href="mailto:dev@freeshow.app" title="Send mail to the developers">dev@freeshow.app</a>

		<br /><br />

		<span>{year} &copy; </span>
		<a href="https://livecs.org" target="_blank" rel="noreferrer"> Live Church Solutions </a>
		<span> - A 501(c)(3) organization with EIN 45-5349618</span>
	</div>
</footer>

<style>
	footer {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;

		gap: var(--card-padding);
		padding: var(--card-padding);
	}

	footer :global(.more) {
		width: 100%;
		position: relative;
		margin-top: var(--card-padding);

		display: flex;
		justify-content: center;
		gap: 12px;
	}
	footer :global(.more)::after {
		display: var(--hide-small-show-big);

		content: '';
		position: absolute;
		top: 50%;
		left: 0;
		width: 100%;

		--border-width: 1px;
		transform: translateY(calc(var(--border-width) / 2 * -1));

		border-bottom: var(--border-width) solid var(--secondary);
		border-image-slice: 1;
		border-image-source: linear-gradient(
			to right,
			transparent,
			transparent,
			#6937bf,
			#d71e93,
			transparent,
			transparent,
			#d71e93,
			#6937bf,
			transparent,
			transparent
		);
	}

	.text {
		padding: var(--card-padding) 0;
	}

	.text span {
		opacity: 0.7;
	}

	/* media */

	@media only screen and (min-width: 900px) {
		.text {
			padding: calc(var(--card-padding) * 1.5);
		}
	}
</style>
