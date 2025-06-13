<script>
	import Link from "$lib/components/inputs/Link.svelte"
	import Section from "$lib/components/main/Section.svelte"
</script>

<svelte:head>
	<title>Downloading...</title>
</svelte:head>

<Section center bubble>
	<h1 style="z-index: 1;">Thank <span class="gradient">You</span></h1>
</Section>

<Section white>
	<div class="text" style="width: 100%;">
		<p style="font-size: 1.2em;">Thank you for choosing FreeShow. Your download should begin shortly...</p>

		<br />

		<h3>Tutorials</h3>

		<p>
			Head over to <a href="/docs" target="_blank">the docs</a> to get a quick introduction, or watch a
			<a href="https://www.youtube.com/@freeshowapp" target="_blank" rel="noreferrer">YouTube video</a>!
		</p>

		<br />

		<h3>Give back</h3>

		<p>We are grateful for all our users. If you like the program, consider donating to help us continue improving it. Thank you! :)</p>

		<div class="center">
			<Link link="https://churchapps.org/partner" primary>Donate</Link>
		</div>
	</div>
</Section>

<style>
	.center {
		align-self: center;
	}
</style>
