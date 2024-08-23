<script>
	import Icon from '$lib/components/main/Icon.svelte';
	import Section from '$lib/components/main/Section.svelte';
	import Compare from '$lib/components/special/Compare.svelte';
	import Gallery from '$lib/components/special/Gallery.svelte';
</script>

<svelte:head>
	<title>FreeShow | Compare features</title>
</svelte:head>

<Section center bubble>
	<h1 style="z-index: 1;">Key <span class="gradient">Features</span></h1>
</Section>

<Section white column style="gap: 20px;">
	<Compare />

	<p class="info">
		Disclaimer: This is a general overview and may not be up to date or entirely accurate.
	</p>
</Section>

<Section center>
	<div class="head">
		<Icon icon="image" />
		<h2>Gallery</h2>
	</div>

	<Gallery />
</Section>

<style>
	.info {
		text-align: center;
		font-size: 0.7em;
		opacity: 0.5;
	}
</style>
