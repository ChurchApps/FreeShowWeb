<script lang="ts">
  export let preview: boolean
</script>

<div class="overlay" on:click={() => (preview = false)}>
  <img src={$$props.src} alt={$$props.alt || ""} />
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
  }

  img {
    width: 100%;
  }
</style>
