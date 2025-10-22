<script>
	import Button from "$lib/components/inputs/Button.svelte"
	import Link from "$lib/components/inputs/Link.svelte"
	import Popup from "$lib/components/main/Popup.svelte"
	import Section from "$lib/components/main/Section.svelte"
	import { onMount } from "svelte"

	let donatePopup = false
	const ONE_DAY = 24 * 60 * 60 * 1000
	onMount(() => {
		if (typeof localStorage === "undefined") return

		let downloadCount = parseInt(localStorage.getItem("downloadCount") || "0") + 1
		let lastAlertTime = parseInt(localStorage.getItem("lastAlertTime") || "0")
		let hasDonated = localStorage.getItem("hasDonated") === "true"

		const currentTime = Date.now()
		localStorage.setItem("downloadCount", downloadCount.toString())

		// show alert every 3(/10) downloads if more than a month has passed since the last alert)
		if (downloadCount % (hasDonated ? 10 : 3) === 0 && currentTime - lastAlertTime > 30 * ONE_DAY) {
			localStorage.setItem("lastAlertTime", currentTime.toString())
			donatePopup = true
		}
	})
</script>

<svelte:head>
	<title>Downloading...</title>
</svelte:head>

<Popup active={donatePopup}>
	<h5 style="text-align: center;">Thank you for choosing FreeShow!</h5>
	<p style="text-align: center;">If you find it useful, please consider donating to support its development.</p>

	<div style="display: flex;justify-content: center;gap: 10px;margin-top: 20px;">
		<Button
			on:click={() => {
				localStorage.setItem("hasDonated", "false")
				donatePopup = false
			}}
		>
			No, thanks
		</Button>
		<Button
			on:click={() => {
				if (typeof localStorage !== "undefined") {
					localStorage.setItem("hasDonated", "true")
				}
				donatePopup = false
			}}
		>
			I've already donated
		</Button>
		<Button
			on:click={() => {
				if (typeof localStorage !== "undefined") {
					localStorage.setItem("hasDonated", "true")
				}
				window.location.href = "https://churchapps.org/donate"
			}}
			primary
		>
			Donate
		</Button>
	</div>
</Popup>

<Section center bubble>
	<h1 style="z-index: 1;">Thank <span class="gradient">You</span></h1>
</Section>

<Section white>
	<div class="text" style="width: 100%;">
		<p style="font-size: 1.2em;">Thank you for choosing FreeShow. Your download should begin shortly...</p>

		<br />

		<h3>Tutorials</h3>

		<p>
			Head over to <a href="/docs" target="_blank">the docs</a> to get a quick introduction, or watch a
			<a href="https://www.youtube.com/@freeshowapp" target="_blank" rel="noreferrer">YouTube video</a>!
		</p>

		<br />

		<h3>Give back</h3>

		<p>We are grateful for all our users. If you like the program, consider donating to help us continue improving it. Thank you! :)</p>

		<div class="center">
			<Link link="https://churchapps.org/partner" primary>Donate</Link>
		</div>
	</div>
</Section>

<style>
	.center {
		align-self: center;
	}
</style>
