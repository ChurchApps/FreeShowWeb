<script lang="ts">
	import Icon from '../main/Icon.svelte';

	export let count: number = 5;

	$: numberOfStars = Math.floor(count);
	$: addHalfStar = Math.round(count) !== numberOfStars;
</script>

<div class="stars">
	{#each { length: numberOfStars } as _}
		<Icon icon="star" />
	{/each}

	{#if addHalfStar}
		<Icon icon="star_half" />
	{/if}
</div>

<style>
	.stars {
		display: flex;
	}
</style>
