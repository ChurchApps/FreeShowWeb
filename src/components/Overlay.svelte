<script>
    export let color = "black"
</script>

<div class="overlay" style:background={color}>
    <slot />
</div>

<style>
    .overlay {
        opacity: 0.3;
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        pointer-events: none;
    }
</style>
