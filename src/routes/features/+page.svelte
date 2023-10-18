<script>
	import Icon from '$lib/components/main/Icon.svelte';
	import Section from '$lib/components/main/Section.svelte';
	import Compare from '$lib/components/special/Compare.svelte';
	import Gallery from '$lib/components/special/Gallery.svelte';
</script>

<Section center bubble>
	<h1 style="z-index: 1;">Key <span class="gradient">Features</span></h1>
</Section>

<Section white>
	<Compare />
</Section>

<Section center>
	<div class="head">
		<Icon icon="image" />
		<h2>Gallery</h2>
	</div>

	<Gallery />
</Section>
