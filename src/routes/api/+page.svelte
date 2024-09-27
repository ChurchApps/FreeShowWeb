<script lang="ts">
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
	}

	// WIP check/alert connection status

	// let created: boolean = false;
	onMount(initPrism);
	function initPrism() {
		// must be assigned after creation & updates
		let script = document.createElement('script');
		script.src = 'prism/prism.js';
		document.body.appendChild(script);
		// created = true;
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

	<!-- <input type="text" name="" id="" bind:value={url} /> -->
	<input type="number" name="" id="" min={1025} max={65535} bind:value={port} />
	<!-- WIP password -->

	{#key port}
		{getUrl()}
	{/key}

	<div class="list">
		{#each Object.keys(API.actions || {}) as action}
			{@const actionType = API.actions[action]}
			<div class="action">
				<button on:click={() => triggerAPI(action)}>
					{action}

					{#if actionType}
						------- {JSON.stringify(actionType)}
					{/if}
				</button>
			</div>
		{/each}
	</div>

	<div class="head">
		<h2 id="examples">Examples</h2>
	</div>

	<p>Make sure the WebSocket/REST API is active in the FreeShow "Connections" settings!</p>

	<!-- WIP remake this on value update? -->
	<!-- {#key url || port} -->
	<h5>HTTP</h5>
	<pre><code class="language-js">
    {`fetch(\`${getUrl(true)}?action=\${ACTION_ID}&data=\${JSON.stringify(data)}\`)`}
	</code></pre>

	<h5>REST</h5>
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
</Section>

<style>
	pre {
		padding: 0 !important;
		margin: 0 !important;
		background: #05020d !important;

		border-radius: 4px;
	}
</style>
