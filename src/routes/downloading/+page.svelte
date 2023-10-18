<script>
	import Link from '$lib/components/inputs/Link.svelte';
	import Section from '$lib/components/main/Section.svelte';
</script>

<Section center bubble>
	<h1 style="z-index: 1;">Thank <span class="gradient">You</span></h1>
</Section>

<Section white>
	<div class="text" style="width: 100%;">
		<p>Thank you for choosing FreeShow. Your download should begin shortly...</p>

		<br />

		<h3>Tip</h3>

		<p>
			Head over to the docs to get a quick introduction, or watch
			<a href="https://youtu.be/OmL_DYVNm1k" target="_blank" rel="noreferrer">this video!</a>
		</p>

		<br />

		<div class="center">
			<Link link="docs" primary>Documentation</Link>
		</div>
	</div>
</Section>

<style>
	.center {
		align-self: center;
	}
</style>
