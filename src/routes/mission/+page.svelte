<script>
	import Link from '$lib/components/inputs/Link.svelte';
	import Section from '$lib/components/main/Section.svelte';
</script>

<svelte:head>
	<title>FreeShow | Our Mission</title>
</svelte:head>

<Section
	center
	bubble
	background={{
		src: 'main/mission.webp',
		alt: 'Person using FreeShow at computer',
		filter: 'brightness(0.2);'
	}}
>
	<h1 style="z-index: 1;">Our <span class="gradient">Mission</span></h1>
</Section>

<Section white>
	<div class="text" style="width: 100%;">
		<!-- TODO: more text ?! -->

		<p>
			Every year churches spend hundreds of millions of dollars on the software needed to operate
			effectively and efficiently. We believe that within the Church the talent exists to create all
			the software that churches need and provide it free of charge.
		</p>

		<p>
			Changing how we handle church software can not only save a lot of money, but also bring
			believers together. If we use the skills within our own community, we can make the software
			that the Church needs without the costly expense. This way, more of our funds can go directly
			to the Church's mission instead of overhead. It's about working together, saving money, and
			focusing on what truly matters.
		</p>

		<div class="center">
			<Link link="https://livecs.org/" title="Learn more about our mission" primary>
				Learn More
			</Link>
		</div>
	</div>
</Section>

<style>
	.center {
		align-self: center;
	}
</style>
