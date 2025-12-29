<script lang="ts">
	import { beforeNavigate } from "$app/navigation"
	import { page } from "$app/stores"
	import { sidebar } from "$lib/components/scripts/docs"
	import { searchDocs, highlightContent } from "$lib/components/scripts/search"
	import NoMatchFound from "$lib/components/special/NoMatchFound.svelte"
	import "$lib/styles/kit-docs.css"
	import { KitDocs, KitDocsLayout, createSidebarContext } from "@svelteness/kit-docs"
	import "@svelteness/kit-docs/client/polyfills/index.js"
	import "@svelteness/kit-docs/client/styles/fonts.css"
	import "@svelteness/kit-docs/client/styles/normalize.css"
	import "@svelteness/kit-docs/client/styles/theme.css"
	import { onMount } from "svelte"

	export let data: any

	$: ({ meta } = data) // sidebar

	const navbar = { links: [] }
	const { activeCategory } = createSidebarContext(sidebar)

	$: category = $activeCategory ? `${$activeCategory}: ` : ""
	$: title = meta ? `FreeShow Docs | ${category}${meta.title}` : null
	$: description = meta?.description

	///// SEARCH /////

	let searchValue: string = ""
	let loading: boolean = false
	let searchMatches: any[] = []
	async function search(e: any) {
		searchValue = e.target.value.trim()

		if (!searchValue) {
			clearSearch()
			return
		}

		// hide small screen drawer on search
		const blurBg = document.querySelectorAll(".backdrop-blur-sm")[1]
		if (blurBg?.checkVisibility() === true) {
			blurBg.classList.remove("backdrop-blur-sm")
			blurBg.classList.remove("dark:bg-body/60")
			blurBg.classList.remove("bg-body/20")

			const sidebar = document.querySelector("#main-sidebar")
			sidebar?.classList.remove("translate-x-0")

			// close virtual keyboard
			;(document.activeElement as any)?.blur()
		}

		toggleElements()

		loading = true

		const value = await searchDocs(searchValue)
		searchMatches = getTextPreviews(value)

		loading = false
	}

	function clearSearch() {
		searchMatches = []
		toggleElements(false)
	}

	function addInsiderCode() {
		const insiderCode =
			'<a href="https://churchapps.org/freeshow-insiders#join-form" target="_blank" style="display: flex;align-items: center;gap: 5px;max-width: 180px;padding: 6px 10px;text-align: center;font-size: 14px;border: 1px solid rgb(255 255 255 / 0.12);border-radius: 4px;margin-bottom: 10px;">' +
			'<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="40px" viewBox="0 0 24 24" width="40px" fill="#ffffff"><rect fill="none" height="24" width="24"/><g><path d="M12,12.75c1.63,0,3.07,0.39,4.24,0.9c1.08,0.48,1.76,1.56,1.76,2.73L18,18H6l0-1.61c0-1.18,0.68-2.26,1.76-2.73 C8.93,13.14,10.37,12.75,12,12.75z M4,13c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2C2,12.1,2.9,13,4,13z M5.13,14.1 C4.76,14.04,4.39,14,4,14c-0.99,0-1.93,0.21-2.78,0.58C0.48,14.9,0,15.62,0,16.43V18l4.5,0v-1.61C4.5,15.56,4.73,14.78,5.13,14.1z M20,13c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2C18,12.1,18.9,13,20,13z M24,16.43c0-0.81-0.48-1.53-1.22-1.85 C21.93,14.21,20.99,14,20,14c-0.39,0-0.76,0.04-1.13,0.1c0.4,0.68,0.63,1.46,0.63,2.29V18l4.5,0V16.43z M12,6c1.66,0,3,1.34,3,3 c0,1.66-1.34,3-3,3s-3-1.34-3-3C9,7.34,10.34,6,12,6z"/></g></svg>' +
			"<strong>Join the FreeShow Insiders Group!</strong></a>" +
			"<style>#insiderCode a:hover { box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); background-color: rgb(255 255 255 / 0.1); transform: translateY(-2px); transition: all 0.3s ease; }</style>"

		if (!document.getElementById("insiderCode")) {
			const insiderElem = document.createElement("div")
			insiderElem.id = "insiderCode"
			insiderElem.innerHTML = insiderCode
			document.querySelector(".on-this-page")?.prepend(insiderElem)
		}
	}

	function toggleElements(hide: boolean = true) {
		let titleTextElem = document.querySelector("article")?.querySelector("p")
		let navigationElem = document.querySelector("main")?.querySelector(".text-gray-300")
		let thisPageElem = document.querySelector(".on-this-page")

		;[titleTextElem, navigationElem, thisPageElem].forEach((elem) => {
			if (elem) elem.setAttribute("style", hide ? "display: none;" : "")
		})
	}

	beforeNavigate(() => {
		searchValue = ""
		clearSearch()
	})

	// generate preview
	function getTextPreviews(value: any[]) {
		return value
			.map((match) => ({
				...match,
				preview: highlightContent(match.content, searchValue)
			}))
			.filter((a) => a.preview?.length)
	}

	onMount(() => {
		// remove hidden search bar on smaller devices
		document.querySelectorAll(".search")[1]?.parentElement?.classList.remove("hidden")
		// set search bar over other elements
		document.querySelector(".scrollbar")?.querySelector(".scrollbar")?.firstElementChild?.setAttribute("style", "z-index: 5;")
		// set X over search
		document.getElementById("main-sidebar")?.querySelector(".sticky")?.setAttribute("style", "z-index: 6;")

		addInsiderCode()
	})
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
					<p style="text-align: center;padding-top: 4rem;font-size: 1.7em;opacity: 0.9;">Loading...</p>
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
		content: "...";
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

	/* custom styles */

	:global(.code-fence .overflow-scroll) {
		overflow: auto;
	}
</style>
