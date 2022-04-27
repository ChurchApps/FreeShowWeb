<script lang="ts">
  import { scale, fade } from "svelte/transition"

  export let active: boolean = false
  export let title: string = ""

  const hide = (e: any) => {
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
      <div style="display: flex;flex-direction: column;gap: 10px;margin: 15px 30px;">
        <slot />
      </div>
    </div>
  </div>
{/if}

<style>
  .popup {
    position: fixed;
    background-color: rgb(0 0 0 / 0.8);
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
    background-color: var(--primary);
    overflow-y: auto;

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
</style>
