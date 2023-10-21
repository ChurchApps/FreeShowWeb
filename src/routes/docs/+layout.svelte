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
	<KitDocsLayout {navbar} {sidebar}>
		<!-- <input type="text" placeholder="Search documentation" slot="search" /> -->

		<slot />
	</KitDocsLayout>
</KitDocs>
