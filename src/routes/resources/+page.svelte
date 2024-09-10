<script>
	import Section from '$lib/components/main/Section.svelte';
	import { backgrounds, scriptures } from '$lib/components/scripts/resources';
</script>

<svelte:head>
	<title>FreeShow | Resource Portal</title>
</svelte:head>

<Section center bubble>
	<h1 style="z-index: 1;"><span class="gradient">Resource</span> Portal</h1>
</Section>

<Section white column style="gap: 20px;">
	<div class="head">
		<h2 id="backgrounds">Backgrounds</h2>
	</div>

	<div class="grid">
		{#each backgrounds as background}
			<div class="card">
				<div class="images">
					{#each background.thumbnails as src}
						<img {src} alt="Media Preview" loading="lazy" />
					{/each}
				</div>

				<div class="text">
					<h4 style="font-size: 1.9em;">
						<a href={background.url} target="_blank" rel="noreferrer">{background.title}</a>
					</h4>
					<p>{background.description}</p>
				</div>
			</div>
		{/each}
	</div>

	<br />

	<div class="head">
		<h2 id="scriptures">Scriptures</h2>
	</div>

	<ul class="list">
		{#each scriptures as scripture}
			<li>
				<p style="display: inline-flex;align-items: baseline;gap: 8px;">
					<span style="font-size: 1.4em;">
						<a href={scripture.url} target="_blank" rel="noreferrer">{scripture.title}</a>:
					</span>

					<span>
						{scripture.description}
					</span>
				</p>
			</li>
		{/each}
	</ul>
</Section>

<Section center>
	<p>Feel free to reach out to us if you have any suggestions to this site! :)</p>
</Section>

<style>
	/* backgrounds */

	.grid {
		--spacing: 15px;

		display: flex;
		flex-wrap: wrap;
		gap: var(--spacing);
	}
	.card {
		width: calc(33.33% - var(--spacing));

		display: flex;
		flex-direction: column;

		background-color: #0e0e0e;
		color: white;

		border-radius: 4px;
		overflow: hidden;
	}

	.card .text {
		padding: 10px;

		width: 100%;
		gap: 5px;
	}

	.card .images {
		display: flex;
		flex-wrap: wrap;
	}
	.card .images img {
		width: 50%;
		aspect-ratio: 16/9;
		object-fit: cover;
	}

	/* scriptures */

	.list {
		display: flex;
		flex-direction: column;

		list-style: inside;
	}
</style>
