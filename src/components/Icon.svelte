<script lang="ts">
  import { icons } from "../icons"

  export let id: string
  export let size: number = 1
  export let white: boolean = false
  $: icon = icons[id]
</script>

<svg class:white xmlns="http://www.w3.org/2000/svg" height="{24 * size}px" viewBox="0 0 24 24" width="{24 * size}px" fill="#000000">{@html icon}</svg>

<style>
  svg {
    fill: var(--secondary);
    display: flex;
  }
  svg.white {
    fill: var(--text);
  }
</style>
