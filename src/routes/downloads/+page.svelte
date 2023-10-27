<script lang="ts">
	import Button from '$lib/components/inputs/Button.svelte';
	import Link from '$lib/components/inputs/Link.svelte';
	import Icon from '$lib/components/main/Icon.svelte';
	import Section from '$lib/components/main/Section.svelte';
	import {
		convertSize,
		getOS,
		getReleases,
		toDate,
		type Asset,
		type Release,
		getLatest,
		getAssets,
		osIcons
	} from '$lib/components/scripts/releases';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	onMount(async () => {
		activeOS = getOS(true);

		let releases = await getReleases();
		readReleases(releases);
	});

	$: if (activeOS) updateOS();
	function updateOS() {
		currentAssets = getAssets(latest, activeOS);

		if (typeof localStorage === 'undefined') return;
		localStorage.setItem('os', activeOS);
	}

	let latest: Release | null = null;
	let currentAssets: Asset[] = [];
	let totalDownloads: number = 0;
	let activeOS: string = '';
	let showIndividualDownloads: boolean = false;
	let changelogOpened: boolean = false;

	function readReleases(releases: Release[]) {
		latest = getLatest(releases);
		currentAssets = getAssets(latest, activeOS);
		countDownloads(releases);
	}

	function countDownloads(releases: any[]) {
		totalDownloads = releases.reduce((total: number, data: any) => {
			let currentVersionDownloads = data.assets.reduce(
				(total: number, asset: any) => total + asset.download_count,
				0
			);
			return total + currentVersionDownloads;
		}, 0);
	}
</script>

<svelte:head>
	<title>FreeShow | All downloads</title>
	<meta name="description" content="Download FreeShow software for Windows, macOS or Linux." />
</svelte:head>

<Section center bubble>
	<h1 style="z-index: 1;">Latest <span class="gradient">Release</span></h1>
</Section>

<Section white column>
	<div class="row" style="width: 100%;justify-content: space-between;align-items: center;">
		<h2 on:dblclick={() => (showIndividualDownloads = !showIndividualDownloads)}>
			{latest?.tag_name || 'v0.0.0'}
			<span style="opacity: 0.5;font-size: 0.6em;font-weight: normal;">
				{toDate(latest?.published_at || '')}
			</span>
		</h2>

		<div class="os" style="background-color: var(--text-inverted);">
			<Button
				title="Select Windows"
				active={activeOS === 'Windows'}
				style="border-radius: 0;"
				on:click={() => (activeOS = 'Windows')}
			>
				<Icon icon="windows" size={2.5} white />
			</Button>
			<Button
				title="Select MacOS"
				active={activeOS === 'MacOS'}
				style="border-radius: 0;"
				on:click={() => (activeOS = 'MacOS')}
			>
				<Icon icon="apple" size={2.5} white />
			</Button>
			<Button
				title="Select Linux"
				active={activeOS === 'Linux'}
				style="border-radius: 0;"
				on:click={() => (activeOS = 'Linux')}
			>
				<Icon icon="linux" size={2.5} white />
			</Button>
		</div>
	</div>

	<div class="assets">
		{#if currentAssets.length}
			{#each currentAssets as asset, i}
				<Link
					title="Download"
					link={asset.browser_download_url}
					style="width: 100%;"
					outline={i === 0}
				>
					<div
						class="flex"
						style="display: flex;justify-content: space-between;align-items: center;width: 100%;z-index: 1;"
					>
						<div class="name" style="display: flex;align-items: center;gap: 10px;">
							<Icon icon={osIcons[activeOS]} />
							{asset.name}
						</div>

						<div class="size">
							{convertSize(asset.size)}
							{#if showIndividualDownloads}
								<span style="min-width: 50px;text-align: right;">
									- {asset.download_count} downloads
								</span>
							{/if}
						</div>
					</div>
				</Link>
			{/each}
		{:else}
			<p style="text-align: center;opacity: 0.8;">Getting releases! Please wait...</p>
		{/if}

		<Link
			link="https://github.com/ChurchApps/FreeShow/releases"
			target="_blank"
			style="margin-top: 10px;"
		>
			<div class="center">
				<Icon icon="tags" white />
				See all releases
			</div>
		</Link>
	</div>

	{#if changelogOpened}
		<div class="changelog" transition:fade>
			<h3 style="font-weight: bold;font-size: 1.8em;">What's new</h3>
			{@html latest?.body?.replaceAll('\n', '<br>') || ''}
		</div>
	{:else}
		<Button on:click={() => (changelogOpened = true)} style="align-self: center;" primary>
			View Changelog
		</Button>
	{/if}
</Section>

<Section column center style="gap: 10px;padding-bottom: 40px;">
	<h2>All time downloads</h2>
	<p class="downloads"><span class="gradient">{totalDownloads}</span></p>
</Section>

<style>
	.os {
		display: flex;

		border-radius: var(--border-radius);
		overflow: hidden;
		/* border: 5px solid var(--secondary); */
	}

	.assets {
		display: flex;
		flex-direction: column;
		gap: 5px;

		margin: 0 var(--margin);
		background-color: var(--text-inverted);
		padding: var(--card-padding);
		border-radius: var(--border-radius);
		color: var(--text);
	}

	.assets :global(button),
	.assets :global(button p) {
		width: 100%;
	}
	.assets .center {
		display: flex;
		justify-content: center;
		align-items: center;

		width: 100%;
		gap: 10px;
	}

	.name {
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.downloads {
		font-size: 4em;
		font-weight: bold;
	}

	/* media */

	@media only screen and (min-width: 900px) {
		.downloads {
			font-size: 8em;
		}
	}
</style>
