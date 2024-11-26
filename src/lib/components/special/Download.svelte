<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import Button from '../inputs/Button.svelte';
	import {
		getAssets,
		getLatest,
		getOS,
		getReleases,
		type Asset,
		type Release,
		osIcons
	} from '../scripts/releases';
	import Popup from '../main/Popup.svelte';

	export let main: boolean = false;
	export let disableMain: boolean = false;

	let latest: Release | null = null;
	let currentAssets: Asset[] = [];
	let activeOS: string = '';

	onMount(async () => {
		if (disableMain) return;

		activeOS = getOS();

		let releases = await getReleases();
		latest = getLatest(releases);
		currentAssets = getAssets(latest, activeOS);

		if (!main) return;
		checkQuery();
	});

	let message: string = '';
	let active: boolean = false;
	function checkQuery() {
		const query = window.location.href.split('/?')[1] || '';
		if (!query) return;

		// /?v0.1.0
		if (latest && query[0] === 'v' && query.length > 2 && query.length < 8) {
			let newVersion = latest.tag_name;
			if (query !== newVersion)
				message = `
                    <h2>There is a new update! :D</h2>${query} -> ${newVersion}
                    <br><br><b>What's new</b>
                    ${latest.body.replaceAll('\n', '<br>')}
                `;
			else message = 'You are up to date! ;)';
			active = true;
		}

		// /?download
		if (query === 'download') {
			startDownload();
		}

		// /?payment_successful
		if (query === 'payment_successful') {
			localStorage.setItem('purchased', 'true');
			startDownload(false);
			message = '<h2>Thank you for being awesome! :)</h2>Your download should begin shortly.<br>';
			active = true;
		}
	}

	// download

	function anotherVersion(os: string) {
		if (typeof localStorage !== 'undefined') {
			localStorage.setItem('os', os);
		}

		goto('downloads');
	}

	function startDownload(redirect: boolean = true, arch: string = '') {
		// get architecture
		if (activeOS === 'MacOS' && !arch) return chooseArchMac();

		let downloadURL = getDownloadURL(arch);
		if (!downloadURL) return;

		window.open(downloadURL, '_self');
		if (redirect) goto('downloading');
	}

	function getDownloadURL(arch: string = '') {
		let URL = currentAssets[0]?.browser_download_url;

		if (arch) {
			URL = currentAssets.find((a) => a.name.includes(arch))?.browser_download_url || '';
		}

		return URL;
	}

	// MULTIPLE ARCHITECTURES

	// WIP auto find: https://stackoverflow.com/a/75177111/10803046
	let macArchPopup = false;
	function chooseArchMac() {
		if (getExistingArch()) return;

		macArchPopup = true;
	}

	function getExistingArch() {
		if (typeof localStorage === 'undefined') return false;

		let savedArch = localStorage.getItem('arch') || '';
		if (!savedArch) return false;

		startDownload(true, savedArch);
		return true;
	}

	function selectArch(arch: string) {
		startDownload(true, arch);

		if (typeof localStorage !== 'undefined') {
			localStorage.setItem('arch', arch);
		}
	}
</script>

<Popup bind:active>
	{@html message}
	<Button
		on:click={() => (active = false)}
		style="align-self: center;border: 2px solid var(--text);">Okay</Button
	>
</Popup>

<Popup bind:active={macArchPopup}>
	<p style="text-align: center;">
		Please choose the version supported on your device, due to different MacOS architectures.
		<br />
		Macs produced before 2021 should be x64, and newer ones are arm64 based.
	</p>
	<div style="align-self: center;">
		<Button
			on:click={() => selectArch('x64')}
			style="align-self: center;border: 2px solid var(--text);"
			>x64 (Intel CPUs)
		</Button>
		<Button
			on:click={() => selectArch('arm')}
			style="align-self: center;border: 2px solid var(--text);"
			>arm64 (Apple Silicon M chips)
		</Button>
	</div>
</Popup>

{#if !disableMain}
	<Button
		on:click={() => startDownload()}
		title="Download FreeShow {latest?.tag_name} for {activeOS || 'OS'}"
		primary
		icon={osIcons[activeOS]}
		disabled={!activeOS}
		big
	>
		Download{activeOS ? ` for ${activeOS}` : ''}
	</Button>

	<p style="opacity: 0.8;font-size: 0.8em;">Download another version:</p>
{/if}

<div class="more">
	<Button
		on:click={() => anotherVersion('Windows')}
		icon="windows"
		title="Download for Windows"
		outline
	/>
	<Button
		on:click={() => anotherVersion('MacOS')}
		icon="apple"
		title="Download for MacOS"
		outline
		variant
	/>
	<Button
		on:click={() => anotherVersion('Linux')}
		icon="linux"
		title="Download for Linux"
		outline
	/>
</div>

<style>
	.more {
		display: flex;
		gap: 10px;
	}
</style>
