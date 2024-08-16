<script lang="ts">
	import { page } from '$app/stores';
	import { sidebar } from '$lib/components/scripts/docs';
	import '$lib/styles/kit-docs.css';
	import { KitDocs, KitDocsLayout, createSidebarContext } from '@svelteness/kit-docs';
	import '@svelteness/kit-docs/client/polyfills/index.js';
	import '@svelteness/kit-docs/client/styles/fonts.css';
	import '@svelteness/kit-docs/client/styles/normalize.css';
	import '@svelteness/kit-docs/client/styles/theme.css';

	export let data: any;

	$: ({ meta } = data); // sidebar

	const navbar = { links: [] };
	const { activeCategory } = createSidebarContext(sidebar);

	$: category = $activeCategory ? `${$activeCategory}: ` : '';
	$: title = meta ? `FreeShow Docs | ${category}${meta.title}` : null;
	$: description = meta?.description;
</script>

<svelte:head>
	{#key $page.url.pathname}
		{#if title}
			<title>{title}</title>
		{/if}
		{#if description}
			<meta name="description" content={description} />
		{/if}
	{/key}
</svelte:head>

<KitDocs {meta}>
	<KitDocsLayout {navbar} {sidebar} search>
		<div class="search" slot="search">
			<svg width="16" height="16" class="DocSearch-Search-Icon" viewBox="0 0 20 20"
				><path
					d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
					stroke="currentColor"
					fill="none"
					fill-rule="evenodd"
					stroke-linecap="round"
					stroke-linejoin="round"
				/></svg
			>
			<input type="text" placeholder="Search" />
		</div>

		<slot />
	</KitDocsLayout>
</KitDocs>

<style>
	.search {
		position: relative;
		border-radius: 0.375rem;

		--tw-border-opacity: 1;
		border-width: 1px;
		border-color: rgb(var(--kd-color-border) / var(--tw-border-opacity));

		--tw-bg-opacity: 1;
		background-color: rgb(var(--kd-color-elevate) / var(--tw-bg-opacity));
	}

	svg {
		fill: white;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left: 12px;
		stroke-width: 1.5px;
	}

	input {
		padding: 0.5rem 0.75rem;
		padding-left: 35px;
		border: none;

		font-size: 0.9em;
		font-weight: 500;

		background-color: transparent;
		--tw-text-opacity: 1;
		color: rgb(var(--kd-color-soft) / var(--tw-text-opacity));
	}
	input::placeholder {
		--tw-text-opacity: 0.7;
		color: rgb(var(--kd-color-soft) / var(--tw-text-opacity));
	}
</style>
