<script>
    import { scale, fade } from "svelte/transition"

    export let active = false
    export let title = ""

    const hide = (/** @type any */ e) => {
        if (e.target.classList.contains("popup")) active = false
    }
</script>

{#if active}
    <div class="popup" transition:fade={{ duration: 100 }} on:click={hide}>
        <div class="card" transition:scale={{ duration: 200 }}>
            <div style="position: relative;">
                <h2 style="text-align: center;margin: 10px 50px;">{title}</h2>
                <!-- <Button style="position: absolute;right: 0;top: 0;height: 100%;min-height: 30px;" on:click={() => (active = false)}>
          <Icon id="close" size={2} />
        </Button> -->
            </div>
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
        background-color: rgb(0 0 0 / 0.5);
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
        background-color: rgb(var(--kd-color-body));
        overflow-y: auto;
        border-radius: 10px;
        border: 2px solid var(--primary-darkest);
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
