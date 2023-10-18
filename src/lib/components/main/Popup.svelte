<script lang="ts">
	import { scale, fade } from 'svelte/transition';

	export let active: boolean = false;
	// export let title: string = ""

	const hide = (e: any) => {
		if (!e.target.classList.contains('popup')) return;

		active = false;
	};
</script>

<svelte:window on:click={hide} />

{#if active}
	<div class="popup" transition:fade={{ duration: 100 }}>
		<div class="card" transition:scale={{ duration: 200 }}>
			<!-- <div style="position: relative;">
                <h2 style="text-align: center;margin: 10px 50px;">{title}</h2>
            </div> -->

			<div style="display: flex;flex-direction: column;gap: 10px;margin: 30px;">
				<slot />
			</div>
		</div>
	</div>
{/if}

<style>
	.popup {
		position: fixed;
		left: 0;
		top: 0;
		background-color: rgb(255 255 255 / 0.2);
		backdrop-filter: blur(5px);
		/* pointer-events: none; */
		width: 100%;
		height: 100%;
		padding: 10px;
		z-index: 80;

		font-size: 1.2em;

		display: flex;
		align-items: center;
		justify-content: center;
	}

	.card {
		position: relative;
		text-align: left;
		background-color: var(--primary);
		overflow-y: auto;
		border-radius: 10px;
		/* border: 2px solid var(--text); */
		box-shadow: 2px 2px 20px rgb(0 0 0 / 0.2);

		min-width: 50%;
		min-height: 50px;
		max-width: 100%;
		max-height: 100%;
	}

	.popup :global(a) {
		color: var(--secondary);
		font-weight: bold;
		transition: background-color 0.3s;
	}
	.popup :global(a):hover {
		background-color: rgb(0 0 0 / 0.3);
	}

	.popup :global(h2) {
		font-size: 1.5em;
	}
</style>
