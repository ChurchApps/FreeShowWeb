<script lang="ts">
	import { beforeNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import { sidebar } from '$lib/components/scripts/docs';
	import { searchDocs, highlightContent } from '$lib/components/scripts/search';
	import NoMatchFound from '$lib/components/special/NoMatchFound.svelte';
	import '$lib/styles/kit-docs.css';
	import { KitDocs, KitDocsLayout, createSidebarContext } from '@svelteness/kit-docs';
	import '@svelteness/kit-docs/client/polyfills/index.js';
	import '@svelteness/kit-docs/client/styles/fonts.css';
	import '@svelteness/kit-docs/client/styles/normalize.css';
	import '@svelteness/kit-docs/client/styles/theme.css';
	import { onMount } from 'svelte';

	export let data: any;

	$: ({ meta } = data); // sidebar

	const navbar = { links: [] };
	const { activeCategory } = createSidebarContext(sidebar);

	$: category = $activeCategory ? `${$activeCategory}: ` : '';
	$: title = meta ? `FreeShow Docs | ${category}${meta.title}` : null;
	$: description = meta?.description;

	///// SEARCH /////

	let searchValue: string = '';
	let loading: boolean = false;
	let searchMatches: any[] = [];
	async function search(e: any) {
		searchValue = e.target.value.trim();

		if (!searchValue) {
			clearSearch();
			return;
		}

		// hide small screen drawer on search
		const blurBg = document.querySelectorAll('.backdrop-blur-sm')[1];
		if (blurBg?.checkVisibility() === true) {
			blurBg.classList.remove('backdrop-blur-sm');
			blurBg.classList.remove('dark:bg-body/60');
			blurBg.classList.remove('bg-body/20');

			const sidebar = document.querySelector('#main-sidebar');
			sidebar?.classList.remove('translate-x-0');

			// close virtual keyboard
			(document.activeElement as any)?.blur();
		}

		toggleElements();

		loading = true;

		const value = await searchDocs(searchValue);
		searchMatches = getTextPreviews(value);

		loading = false;
	}

	function clearSearch() {
		searchMatches = [];
		toggleElements(false);
	}

	function addInsiderCode() {
		const insiderCode =
			'<div class="hs-cta-embed hs-cta-simple-placeholder hs-cta-embed-180517799054" style="max-width:100%; max-height:100%; width:350px;height:150px" data-hubspot-wrapper-cta-id="180517799054">' +
			'<a href="https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLKaBAGaXCIIBwzStXCsKTnSaJJ4fi3ZbwxvqULNT2762z%2FiFv4eH2GUygOQb7iwcBqTCS%2FYjbGFncmjgUQV0UzK%2BN2sinyQSCUPU6e1SRDBo66yLw2Bs74GzFA4%2FbCob3a2qHfFPW41pkYudCs2rI802KGibKw9I8kchn%2B%2FUhPmC1xniun40u5ECeOavurpa0GEod8%3D&webInteractiveContentId=180517799054&portalId=20077299" target="_blank" rel="noopener" crossorigin="anonymous">' +
			'<img alt="freeshow insider button" loading="lazy" src="https://no-cache.hubspot.com/cta/default/20077299/interactive-180517799054.png" style="object-fit: fill" onerror="this.style.display=\'none\'" />' +
			'</a>' +
			'</div>';

		if (!document.getElementById('insiderCode')) {
			const insiderElem = document.createElement('div');
			insiderElem.id = 'insiderCode';
			insiderElem.innerHTML = insiderCode;
			//insiderElem.style.marginTop = '100px';
			document.querySelector('.on-this-page')?.prepend(insiderElem);
		}
	}

	function toggleElements(hide: boolean = true) {
		let titleTextElem = document.querySelector('article')?.querySelector('p');
		let navigationElem = document.querySelector('main')?.querySelector('.text-gray-300');
		let thisPageElem = document.querySelector('.on-this-page');

		[titleTextElem, navigationElem, thisPageElem].forEach((elem) => {
			if (elem) elem.setAttribute('style', hide ? 'display: none;' : '');
		});
	}

	beforeNavigate(() => {
		searchValue = '';
		clearSearch();
	});

	// generate preview
	function getTextPreviews(value: any[]) {
		return value
			.map((match) => ({
				...match,
				preview: highlightContent(match.content, searchValue)
			}))
			.filter((a) => a.preview?.length);
	}

	onMount(() => {
		// remove hidden search bar on smaller devices
		document.querySelectorAll('.search')[1]?.parentElement?.classList.remove('hidden');
		// set search bar over other elements
		document
			.querySelector('.scrollbar')
			?.querySelector('.scrollbar')
			?.firstElementChild?.setAttribute('style', 'z-index: 5;');
		// set X over search
		document
			.getElementById('main-sidebar')
			?.querySelector('.sticky')
			?.setAttribute('style', 'z-index: 6;');

		addInsiderCode();
	});
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
			<input type="text" placeholder="Search" value={searchValue} on:change={search} />
		</div>

		{#if searchValue}
			<div class="matches">
				{#if searchMatches.length}
					{#each searchMatches as match}
						<div class="match">
							<h3><a href="/docs/{match.name}">{match.name}</a></h3>
							{#each match.preview as preview}
								<p class="preview">{@html preview}</p>
							{/each}
						</div>
					{/each}
				{:else if loading}
					<p style="text-align: center;padding-top: 4rem;font-size: 1.7em;opacity: 0.9;">
						Loading...
					</p>
				{:else}
					<NoMatchFound />
				{/if}
			</div>
		{:else}
			<slot />
		{/if}
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

	.matches {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.match {
		padding: 25px;
		background: var(--primary);
		border-radius: 10px;
	}
	.match h3 {
		text-transform: capitalize;
		font-weight: bold;
		font-size: 2em;
		margin-top: 0 !important;
	}

	.match .preview {
		margin: 0 !important;
	}
	.match .preview::before,
	.match .preview::after {
		content: '...';
		opacity: 0.6;
	}

	.match :global(.highlight) {
		color: var(--kd-sidebar-border-active);
		font-weight: bold;
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
