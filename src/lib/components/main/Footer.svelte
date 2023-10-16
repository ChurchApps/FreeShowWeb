<script>
	import Button from '../inputs/Button.svelte';
</script>

<footer>
	<div class="more">
		<div class="center">
			<Button icon="windows" title="Download for Windows" outline />
			<Button icon="apple" title="Download for MacOS" outline variant />
			<Button icon="linux" title="Download for Linux" outline />
		</div>
	</div>

	<div class="rights">
		<span>2023 &copy; </span><a href="https://livecs.org" target="_blank" rel="noreferrer"
			>Live Church Solutions</a
		>
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

	.more {
		width: 100%;
		position: relative;
	}
	.more .center {
		display: flex;
		justify-content: center;
		gap: 12px;
	}
	.more::after {
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

	.rights {
		padding: calc(var(--card-padding) * 1.5);
	}

	.rights span {
		opacity: 0.7;
	}
</style>
