<script>
	import Link from '$lib/components/inputs/Link.svelte';
	import Section from '$lib/components/main/Section.svelte';
</script>

<Section
	center
	bubble
	background={{
		src: 'main/mission.png',
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
			Doing so would free up a significant amount of funds that can be spent on accomplishing the
			mission of the Church instead of overhead.
		</p>

		<div class="center">
			<Link link="https://churchapps.org/" primary>Learn more</Link>
		</div>
	</div>
</Section>

<style>
	.center {
		align-self: center;
	}
</style>
