<script lang="ts">
	import Button from '../inputs/Button.svelte';
	import Link from '../inputs/Link.svelte';
	import Image from './Image.svelte';

	const hideHeaderPos = 280;
	const hideMargin = 5;
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

	let menuOpened = false;

	function mousedown(e: any) {
		if (!e.target.closest('header')) menuOpened = false;
	}
</script>

<svelte:window on:scroll={scrolling} on:keyup={checkFocus} on:mousedown={mousedown} />

<header class:hideHeader class:black={menuOpened} style="--scroll: {scrollPercentage}%;">
	<div class="logo">
		<Link link="/">
			<Image src="favicon.png" alt="FreeShow Logo" />
			<h3>FreeShow</h3>
		</Link>
	</div>

	<div class="menu">
		<!-- <Link
			title="Source code"
			link="https://github.com/ChurchApps/FreeShow"
			icon="github"
			size={0.8}
			outline
		/> -->
		<Button on:click={() => (menuOpened = !menuOpened)} icon="lines" white />
	</div>

	<div class="links" class:show={menuOpened}>
		<!-- <Link link="/mission">Mission</Link> -->
		<Link link="/features">Features</Link>
		<Link link="/resources">Resources</Link>
		<Link link="/docs">Docs</Link>
		<!-- <p style="z-index: 1;" class="onlyMenu">Source code</p> -->
		<Link
			title="Source code"
			link="https://github.com/ChurchApps/FreeShow"
			icon="github"
			size={1.2}
			outline
		/>
		<Link link="/downloads" primary>Downloads</Link>
	</div>
</header>

<style>
	header {
		position: fixed;
		padding: 20px var(--margin);
		width: 100%;

		background: rgb(0, 0, 0, 0.2);
		background: linear-gradient(0deg, rgba(0, 0, 0, 0) 2%, rgba(0, 0, 20, 0.8) 100%);
		pointer-events: none;

		z-index: 50;

		display: flex;
		justify-content: space-between;
		align-items: center;

		transition: 0.5s transform, 0.3s background-color;
	}
	header.black {
		background-color: rgb(0, 0, 0, 0.8);
	}

	header div {
		display: flex;
		align-items: center;
		gap: 8px;
		pointer-events: initial;
	}

	/* h3 {
		text-shadow: 0 0 2px rgb(0 0 0 / 50%);
	} */

	.logo {
		height: 35px;
	}

	/* safari fix */
	.logo :global(img) {
		max-width: 50px;
		object-fit: contain;
	}

	.hideHeader {
		transform: translateY(-110%);
	}

	.links {
		/* display: none; */
		opacity: 0;
		pointer-events: none;
		position: absolute;

		transition: 0.3s background-color;
	}
	.menu {
		display: initial;
	}

	.links.show {
		/* display: flex; */
		opacity: 1;
		pointer-events: all;

		flex-direction: column;
		width: 100%;

		padding: 10px;

		left: 0;
		bottom: 0;
		transform: translateY(99.8%);

		background-color: rgb(0, 0, 0, 0.8);
		box-shadow: 0 10px 10px rgb(0 0 0 / 0.2);
	}
	.links.show :global(a),
	.links.show :global(button) {
		width: 100%;
	}
	.links.show :global(button span) {
		justify-content: center;
	}

	/* media */

	@media only screen and (min-width: 900px) {
		.links {
			/* display: flex; */
			opacity: 1;
			pointer-events: all;
			position: relative;
		}
		.menu {
			display: none;
		}

		/* .onlyMenu {
			display: none;
		} */
	}
</style>
