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
		type Release
	} from '../scripts/releases';
	import Popup from '../main/Popup.svelte';

	export let disableMain: boolean = false;

	let latest: Release | null = null;
	let currentAssets: Asset[] = [];
	let activeOS: string = '';

	onMount(async () => {
		activeOS = getOS();

		let releases = await getReleases();
		latest = getLatest(releases);
		currentAssets = getAssets(latest, activeOS);

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

	function startDownload(redirect: boolean = true) {
		let downloadURL = currentAssets[0]?.browser_download_url;
		console.log(downloadURL);

		if (!downloadURL) return;
		// TODO: uncomment
		window.open(downloadURL, '_self');

		if (redirect) goto('downloading');
	}
</script>

<Popup bind:active>
	{@html message}
	<Button
		on:click={() => (active = false)}
		style="align-self: center;border: 2px solid var(--text);">Okay</Button
	>
</Popup>

{#if !disableMain}
	<Button on:click={() => startDownload()} primary icon="windows" disabled={!activeOS} big>
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
