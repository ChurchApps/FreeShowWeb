<script>
	import Section from '$lib/components/main/Section.svelte';
	import { backgrounds, scriptures, tools } from '$lib/components/scripts/resources';
</script>

<svelte:head>
	<title>FreeShow | Resource Portal</title>

	<meta
		name="description"
		content="Backgrounds, Bibles & more resources to use in your church for free with a presentation software like FreeShow."
	/>

	<meta property="og:title" content="FreeShow — Resource Portal for Backgrounds, Bibles & more!" />
	<meta
		property="og:description"
		content="Backgrounds, Bibles & more resources to use in your church for free with a presentation software like FreeShow."
	/>
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
					<img src={background.preview} alt="Media Preview" loading="lazy" />
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
			<li style="white-space: nowrap;">
				<p>
					<span style="font-size: 1.4em;">
						<a href={scripture.url} target="_blank" rel="noreferrer">{scripture.title}</a>:
					</span>

					<span style="white-space: normal;">
						{scripture.description}
					</span>
				</p>
			</li>
		{/each}
	</ul>

	<br />

	<div class="head">
		<h2 id="tools">Tools</h2>
	</div>

	<ul class="list">
		{#each tools as tool}
			<li style="white-space: nowrap;">
				<p>
					<span style="font-size: 1.4em;">
						<a href={tool.url} target="_blank" rel="noreferrer">{tool.title}</a>:
					</span>

					<span style="white-space: normal;">
						{tool.description}
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
		width: 100%;

		display: flex;
		flex-direction: column;

		background-color: #060606;
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
		width: 100%;
		aspect-ratio: 16/9;
		object-fit: cover;
	}

	/* scriptures */

	.list {
		display: flex;
		flex-direction: column;
		gap: 15px;

		list-style: inside;
	}

	.list li p {
		display: inline-flex;
		flex-direction: column;
		gap: 2px;

		max-width: 95%;
		align-items: baseline;
		white-space: normal;
	}

	/* media */

	@media screen and (min-width: 650px) {
		.card {
			width: calc(50% - var(--spacing));
		}

		.list {
			gap: 5px;
		}

		.list li p {
			flex-direction: row;
			gap: 8px;
			max-width: initial;
			white-space: nowrap !important;
		}
	}

	@media screen and (min-width: 1300px) {
		.card {
			width: calc(33.33% - var(--spacing));
		}
	}
</style>
