<script lang="ts">
	import Button from '$lib/components/inputs/Button.svelte';
	import Icon from '$lib/components/main/Icon.svelte';
	import Section from '$lib/components/main/Section.svelte';
	import api from 'freeshow-api';
	import { onMount } from 'svelte';

	let url: string = 'http://localhost';
	let port: number = 5505;
	let API = api(getUrl());

	// API get status

	$: if (url || port) updateAPI();
	function updateAPI() {
		// API.close(); // if WebSocket is activated it should be closed before creating new
		API = api(getUrl());

		// if (!created) return;

		// document.querySelectorAll('script').forEach((elem) => {
		// 	console.log(elem.src);

		// 	if (elem.src.includes('prism/prism.js')) document.body.removeChild(elem);
		// });

		// // clear timeout..
		// setTimeout(initPrism, 1000);
	}
	function getUrl(addOne: boolean = false) {
		return `${url}:${Number(port) + (addOne ? 1 : 0)}`;
	}

	function triggerAPI(action: string, data: any = {}) {
		API.sendHTTP(action, data);
		// API.sendREST(action, data); needs cors for browser
	}

	// WIP check/alert connection status

	// let created: boolean = false;
	onMount(() => {
		initPrism();

		if (localStorage.getItem('autoFilled')) {
			autoFilled = JSON.parse(localStorage.getItem('autoFilled')!);
		}
	});
	function initPrism() {
		// must be assigned after creation & updates
		let script = document.createElement('script');
		script.src = 'prism/prism.js';
		document.body.appendChild(script);
		// created = true;
	}

	function formatType(type: string) {
		return transformValue(
			JSON.stringify(type).replaceAll('\\', '').replaceAll(':', ': ').replaceAll(',', ', ')
		);
	}
	function transformValue(input: string) {
		let inputString = typeof input === 'string' ? input : JSON.stringify(input, null, 2);

		const transformed = inputString.replace(
			/"(\w+\??)":\s*"((?:[^"]|"(?!,|\s*\}))*)"/g,
			(_match, key, value) => `"${key}": ${value}`
		);

		return transformed;
	}

	const sections: { [key: string]: string } = {
		index_select_project: 'PROJECT',
		name_select_show: 'SHOWS',
		next_slide: 'PRESENTATION',
		id_select_stage_layout: 'STAGE',
		restore_output: 'CLEAR',
		start_camera: 'MEDIA',
		index_select_overlay: 'OVERLAYS',
		change_volume: 'AUDIO',
		name_start_timer: 'TIMERS',
		id_select_output_style: 'VISUAL',
		change_variable: 'OTHER',
		get_shows: 'GET'
	};

	let autoFilled: { [key: string]: string } = {};
	const fillValues: any = {
		start_camera: async (): Promise<string> => {
			return new Promise((resolve) => {
				navigator.mediaDevices
					.getUserMedia({ video: { frameRate: { ideal: 30 } } })
					.then(() => navigator.mediaDevices.enumerateDevices())
					.then((devices) => {
						let cameras = devices
							.filter((a) => a.kind === 'videoinput')
							.map((a) => ({ name: a.label, id: a.deviceId, groupId: a.groupId }));
						const actionString = cameras
							.map((a) => `{"name": "${a.name}", "id": "${a.id}", "groupId": "${a.groupId}"}`)
							.join('\n   ');
						resolve(actionString);
					})
					.catch((err) => {
						console.error('Error accessing media devices:', err);
					});
			});
		}
	};

	async function fillValue(action: any) {
		const value = await fillValues[action]();
		autoFilled[action] = value;

		initPrism();

		// save to local storage
		localStorage.setItem('autoFilled', JSON.stringify(autoFilled));
	}
</script>

<svelte:head>
	<title>FreeShow | API Documentation</title>

	<meta name="description" content="API documentation for FreeShow presentation software." />

	<meta property="og:title" content="FreeShow | API Documentation" />
	<meta property="og:description" content="API documentation for FreeShow presentation software." />

	<link href="prism/prism.css" rel="stylesheet" />
</svelte:head>

<Section center bubble>
	<h1 style="z-index: 1;"><span class="gradient">API</span> Docs</h1>
</Section>

<Section white column style="gap: 20px;">
	<div class="head">
		<h2 id="actions">Actions</h2>
	</div>

	<div class="url">
		<!-- <input type="text" name="" id="" bind:value={url} /> -->
		<input
			type="number"
			min={1025}
			max={65535}
			title="FreeShow Connection Port"
			bind:value={port}
		/>
		<!-- WIP api password? -->

		{#key port}
			<p style="font-style: italic;">{getUrl()}</p>
		{/key}
	</div>

	<div class="list">
		{#each Object.keys(API.actions || {}) as action}
			{@const actionType = API.actions[action]}

			{#if sections[action]}
				<h3
					id={sections[action].toLowerCase()}
					style="font-size: 1.5em;padding-top: 20px;color: var(--secondary);"
				>
					{sections[action]}
				</h3>
			{/if}

			<div class="action">
				<div>
					{#if !actionType && !action.includes('get_')}
						<Button title="Try sending action to FreeShow" on:click={() => triggerAPI(action)}>
							<Icon icon="play" />
						</Button>
					{/if}

					<b>{action}</b>
				</div>

				{#if actionType}
					<div>
						{#if fillValues[action]}
							<Button title="Auto fill value" on:click={() => fillValue(action)}>
								<!-- autoFilled[action] ? 'refresh' :  -->
								<Icon icon="magic" />
							</Button>
						{/if}

						{#key autoFilled[action]}
							<pre style="line-height: 1.2;flex: 1;"><code
									class="language-js"
									style="tab-size: 0.5;line-height: 1.2;">
						{#if autoFilled[action]}
										{autoFilled[action]}
									{:else}
										{formatType(actionType)}
									{/if}
					</code></pre>
						{/key}
					</div>
				{/if}
			</div>
		{/each}
	</div>

	<hr />

	<div class="head">
		<h2 id="examples">Examples</h2>
	</div>

	<p>
		Make sure the WebSocket/REST API is active in the FreeShow "<a href="/docs/connecting"
			>Connections</a
		>" settings!
	</p>

	<!-- WIP remake this on value update? -->
	<!-- {#key url || port} -->
	<h5>HTTP</h5>
	<pre><code class="language-js">
    {`fetch(\`${getUrl(true)}?action=\${ACTION_ID}&data=\${JSON.stringify(data)}\`)`}
	</code></pre>

	<h5>REST</h5>
	<p>Note: Must be a <b>POST</b> request.</p>
	<pre><code class="language-js">
    {`fetch("${getUrl(
				true
			)}", { method: "POST", body: JSON.stringify({ action: ACTION_ID, ...data }) })`}
	</code></pre>

	<h5>WebSocket</h5>
	<pre><code class="language-js">
    {`let socket = io.connect("${getUrl()}", { transports: ["websocket"] })
    socket.emit("data", JSON.stringify({ action: ACTION_ID, ...data }))`}
    </code></pre>
	<!-- {/key} -->

	<p>
		For Node.js, check out the <a
			href="https://www.npmjs.com/package/freeshow-api"
			target="_blank"
			rel="noreferrer">NPM Helper Package</a
		>.
	</p>
</Section>

<style>
	.url {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	input {
		/* background-color: inherit; */
		background-color: var(--text);
		font-family: inherit;
		font-size: inherit;

		padding: 6px;
		border: 2px solid var(--secondary);
		border-radius: 4px;
	}

	.list {
		display: flex;
		flex-direction: column;
		gap: 6px;
	}
	.list :global(button:hover) {
		/* background-color: rgb(0 0 0 / 0.2) !important; */
		--secondary: var(--text);
	}

	.action {
		display: flex;
		flex-direction: column;
		gap: 5px;

		border-radius: 8px;

		padding: 10px;
		background-color: var(--text);
	}
	.action div {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	hr {
		border: 1px solid rgb(0 0 0 / 0.05);
		margin: 80px 0;
	}

	pre {
		padding: 0 !important;
		margin: 0 !important;
		background: #05020d !important;

		border-radius: 4px;
	}
</style>
