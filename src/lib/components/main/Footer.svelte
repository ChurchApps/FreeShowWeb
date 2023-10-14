<script>
	import Button from '../inputs/Button.svelte';
</script>

<footer>
	<div class="more">
		<Button icon="windows" title="Download for Windows" outline />
		<Button icon="apple" title="Download for MacOS" outline variant />
		<Button icon="linux" title="Download for Linux" outline />
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
		display: flex;
		gap: 12px;
	}

	.rights {
		padding: calc(var(--card-padding) * 1.5);
	}

	.rights span {
		opacity: 0.7;
	}
</style>
