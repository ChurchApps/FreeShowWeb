<script lang="ts">
  import { scale, fade } from "svelte/transition"
  export let preview: string | null
</script>

<div class="overlay" on:click={() => (preview = null)} transition:fade={{ duration: 100 }}>
  <img src={$$props.src} alt={$$props.alt || ""} transition:scale={{ duration: 200 }} />
</div>

<style>
  .overlay {
    background-color: rgb(0 0 0 / 0.8);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 20;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    user-select: none;
  }
</style>
