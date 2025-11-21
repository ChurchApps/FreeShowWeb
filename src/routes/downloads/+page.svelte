<script lang="ts">
	import Button from "$lib/components/inputs/Button.svelte"
	import Link from "$lib/components/inputs/Link.svelte"
	import Icon from "$lib/components/main/Icon.svelte"
	import Section from "$lib/components/main/Section.svelte"
	import { convertSize, getOS, getReleases, toDate, type Asset, type Release, getLatest, getLatestPrerelease, getAssets, osIcons } from "$lib/components/scripts/releases"
	import { onMount } from "svelte"
	import { fade } from "svelte/transition"

	onMount(async () => {
		activeOS = getOS(true)

		let releases = await getReleases()
		readReleases(releases)

		getExistingArch()

		// reset this in case it's the wrong arch (because user opened the downloads page)
		if (typeof localStorage === "undefined") return
		localStorage.removeItem("arch")
	})

	$: if (activeOS) updateOS()
	function updateOS() {
		currentAssets = getAssets(latest, activeOS)

		if (typeof localStorage === "undefined") return
		localStorage.setItem("os", activeOS)
	}

	let latest: Release | null = null
	let currentAssets: Asset[] = []
	let totalDownloads: number = 0
	let activeOS: string = ""
	let showIndividualDownloads: boolean = false
	let changelogOpened: boolean = false
	let prerelease: Release | null = null

	function readReleases(releases: Release[]) {
		latest = getLatest(releases)
		prerelease = getLatestPrerelease(releases)
		currentAssets = getAssets(latest, activeOS)
		countDownloads(releases)
	}

	function countDownloads(releases: any[]) {
		totalDownloads = releases.reduce((total: number, data: any) => {
			let currentVersionDownloads = data.assets.reduce((total: number, asset: any) => total + asset.download_count, 0)
			return total + currentVersionDownloads
		}, 0)
	}

	let currentArch = "x64"
	function getExistingArch() {
		if (typeof localStorage === "undefined") return

		currentArch = localStorage.getItem("arch") || "x64"
	}

	function setArchitecture(arch: string) {
		// if (typeof localStorage === "undefined") return
		// localStorage.setItem("arch", arch)

		currentArch = arch
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
			{latest?.tag_name || "v0.0.0"}
			<span style="opacity: 0.5;font-size: 0.6em;font-weight: normal;">
				{toDate(latest?.published_at || "")}
			</span>
		</h2>

		<div class="os" style="background-color: var(--text-inverted);">
			<Button title="Select Windows" active={activeOS === "Windows"} style="border-radius: 0;" on:click={() => (activeOS = "Windows")}>
				<Icon icon="windows" size={2.5} white />
			</Button>
			<Button title="Select MacOS" active={activeOS === "MacOS"} style="border-radius: 0;" on:click={() => (activeOS = "MacOS")}>
				<Icon icon="apple" size={2.5} white />
			</Button>
			<Button title="Select Linux" active={activeOS === "Linux"} style="border-radius: 0;" on:click={() => (activeOS = "Linux")}>
				<Icon icon="linux" size={2.5} white />
			</Button>
		</div>
	</div>

	<div class="assets">
		{#if currentAssets.length}
			{#if activeOS !== "Windows"}
				<div class="tabs">
					Architecture:
					<Button active={currentArch === "x64"} on:click={() => setArchitecture("x64")}>{activeOS === "MacOS" ? "Intel (x64)" : "x86_64"}</Button>
					<Button active={currentArch === "arm"} on:click={() => setArchitecture("arm")}>{activeOS === "MacOS" ? "Silicon (ARM)" : "arm64"}</Button>
				</div>
			{/if}

			{#each currentAssets as asset, i}
				{#if activeOS === "Windows" || (currentArch === "arm" ? asset.name.includes("arm64") || asset.name.includes("aarch64") : !asset.name.includes("arm64") && !asset.name.includes("aarch64"))}
					<Link title="Download" link={asset.browser_download_url} style="width: 100%;" outline={i === 0 || asset.name.includes(".dmg") || asset.name.includes(".AppImage")}>
						<div class="flex" style="display: flex;justify-content: space-between;align-items: center;width: 100%;z-index: 1;">
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
				{/if}
			{/each}
		{:else}
			<p style="text-align: center;opacity: 0.8;">Getting releases! Please wait...</p>
		{/if}

		<!-- Download the last supported version for macOS 10.15 (Catalina) -->
		{#if currentAssets.length && activeOS === "MacOS"}
			<Link link="https://github.com/ChurchApps/FreeShow/releases/tag/v1.4.9" target="_blank">
				<div class="center" style="justify-content: left;">
					<Icon icon="archive" size={1.2} />
					<p style="text-align: left;">
						macOS 10.15
						<span style="font-size: 0.9em;opacity: 0.8;padding-left: 5px;"> Use this version if you need FreeShow on an old OS! </span>
					</p>
				</div>
			</Link>
		{/if}
		<!-- Download the last supported version for Windows 7/8, and macOS 10.13 & 10.14 -->
		<!-- || activeOS === "MacOS" -->
		{#if currentAssets.length && activeOS === "Windows"}
			<Link link="https://github.com/ChurchApps/FreeShow/releases/tag/v1.2.4" target="_blank">
				<div class="center" style="justify-content: left;">
					<Icon icon="archive" size={1.2} />
					<p style="text-align: left;">
						{activeOS === "Windows" ? "Windows 7/8" : "macOS 10.13 & 10.14"}
						<span style="font-size: 0.9em;opacity: 0.8;padding-left: 5px;"> Use this version if you need FreeShow on an old OS! </span>
					</p>
				</div>
			</Link>
		{/if}

		<!-- Download pre-release/beta if available -->
		{#if !!prerelease}
			<Link link={prerelease.html_url} target="_blank">
				<div class="center" style="justify-content: left;">
					<Icon icon="beta" size={1.2} />
					<p style="text-align: left;">
						Prerelease <span>{prerelease.tag_name}</span> available!
						<span style="font-size: 0.9em;opacity: 0.8;padding-left: 5px;"> Might have breaking changes, but has more features & should be more stable </span>
					</p>
				</div>
			</Link>
		{/if}

		<Link link="https://github.com/ChurchApps/FreeShow/releases" target="_blank" style="margin-top: 10px;">
			<div class="center">
				<Icon icon="tags" white />
				See all releases
			</div>
		</Link>
	</div>

	{#if changelogOpened}
		<div class="changelog" transition:fade>
			<h3 style="font-weight: bold;font-size: 1.8em;">What's new</h3>
			{@html latest?.body?.replaceAll("\n", "<br>") || ""}
		</div>
	{:else}
		<Button on:click={() => (changelogOpened = true)} style="align-self: center;" primary>View Changelog</Button>
	{/if}
</Section>

<Section column center style="gap: 10px;padding-bottom: 40px;">
	<h2>All time downloads</h2>
	<p class="downloads">
		<span class="gradient" class:highlight={totalDownloads > 999999 && totalDownloads < 1010000}>{totalDownloads}</span>
	</p>
</Section>

<style>
	.os {
		display: flex;

		border-radius: var(--border-radius);
		overflow: hidden;
		/* border: 5px solid var(--secondary); */
	}

	.tabs {
		display: flex;
		align-items: center;
		gap: 10px;
		margin-bottom: 10px;
		padding: 0 100px;
	}
	.tabs :global(button span p) {
		justify-content: center;
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

	.assets :global(.icon svg) {
		min-width: 22px;
	}

	.name {
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.downloads {
		font-size: 4em;
		font-weight: bold;
		letter-spacing: 2px;
	}

	.downloads .gradient.highlight {
		background: linear-gradient(120deg, #ec4985 30%, #ffd3a1 50%, #ff62ea 70%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;

		background-size: 200% 200%;
		animation: Move 8s ease infinite;
	}
	@keyframes Move {
		0% {
			background-position: 10% 0%;
		}
		50% {
			background-position: 90% 100%;
		}
		100% {
			background-position: 10% 0%;
		}
	}

	/* media */

	@media only screen and (min-width: 900px) {
		.downloads {
			font-size: 8em;
		}
	}
</style>
