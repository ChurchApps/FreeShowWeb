<script>
    import { scale, fade } from "svelte/transition"
    import Button from "./Button.svelte"
    import Icon from "./Icon.svelte"

    /** @type any */
    export let image
    /** @type number */
    export let index

    function close(/** @type any */ e) {
        console.log(e.target.closest(".change-image"))
        if (e.target.closest(".change-image")) return
        index = -1
    }
</script>

<div class="overlay" on:click={close} transition:fade={{ duration: 100 }}>
    <Button class="change-image left" on:click={() => (index = index - 1)}>
        <Icon id="arrow_left" white />
    </Button>
    <img src={image?.src} alt={image?.alt || ""} transition:scale={{ duration: 200 }} />
    {#if image?.description}
        <p>{image?.description}</p>
    {/if}
    <Button class="change-image right" on:click={() => index++}>
        <Icon id="arrow_right" white />
    </Button>
</div>

<style>
    .overlay {
        background-color: rgb(0 0 0 / 0.7);
        backdrop-filter: blur(5px);
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 40;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        user-select: none;
    }

    p {
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 10px;
        background-color: rgb(var(--kd-color-border));
        opacity: 0.8;
    }

    .overlay :global(.change-image) {
        position: absolute;
        /* height: 100%; */
        left: 0;
        background-color: var(--focus);
        opacity: 0.8;
    }
    .overlay :global(.right) {
        right: 0;
        left: initial;
    }
</style>
