<script lang="ts">
  export let color: string = "black"
</script>

<div class="overlay" style:background={color}>
  <slot />
</div>

<style>
  .overlay {
    opacity: 0.5;
    position: absolute;
    left: 0;
    top: 0;
  }
</style>
