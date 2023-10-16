<script lang="ts">
	import Link from '../inputs/Link.svelte';
	import Image from './Image.svelte';

	const hideHeaderPos = 300;
	const hideMargin = 20;
	let hideHeader = false;
	let scrollPercentage = 0;

	let scrollPos = 0;
	let posWhenChanged = 0;
	function scrolling() {
		let direction = 'down';
		if (window.scrollY < scrollPos) direction = 'up';

		scrollPos = window.scrollY;
		let body = document.documentElement || document.body;

		scrollPercentage = (scrollPos / (body.scrollHeight - body.clientHeight)) * 100;

		// show / hide header
		if (
			scrollPos >= hideHeaderPos &&
			direction === 'down' &&
			scrollPos > posWhenChanged + hideMargin
		) {
			posWhenChanged = scrollPos;
			hideHeader = true;
		} else if (direction === 'up' && scrollPos < posWhenChanged - hideMargin) {
			posWhenChanged = scrollPos;
			hideHeader = false;
		}
	}

	// show header when tab focused
	function checkFocus() {
		if (!hideHeader) return;

		let headerContent = document.activeElement?.closest('header');
		if (!headerContent) return;

		posWhenChanged = window.scrollY;
		hideHeader = false;
	}
</script>

<svelte:window on:scroll={scrolling} on:keyup={checkFocus} />

<header class:hideHeader style="--scroll: {scrollPercentage}%;">
	<div class="logo">
		<Link link="/">
			<Image src="favicon.png" alt="FreeShow Logo" />
			<h3>FreeShow</h3>
		</Link>
	</div>

	<div>
		<Link link="mission">Mission</Link>
		<Link link="features">Features</Link>
		<Link link="docs">Docs</Link>
		<Link link="https://github.com/ChurchApps/FreeShow" icon="github" size={1.2} outline />
		<Link link="downloads" primary>Downloads</Link>
	</div>
</header>

<style>
	header {
		position: fixed;
		padding: 20px var(--margin);
		width: 100%;

		background: rgb(0, 0, 0, 0.2);
		background: linear-gradient(0deg, rgba(0, 0, 0, 0) 2%, rgba(0, 0, 0, 0.8) 100%);

		z-index: 10;

		display: flex;
		justify-content: space-between;
		align-items: center;

		transition: 0.5s transform;
	}

	header div {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	/* h3 {
		text-shadow: 0 0 2px rgb(0 0 0 / 50%);
	} */

	.logo {
		height: 35px;
	}

	.hideHeader {
		transform: translateY(-110%);
	}
</style>
