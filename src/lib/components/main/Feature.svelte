<script lang="ts">
	import Icon from './Icon.svelte';

	export let icon: string;
	export let title: string;
	export let white: boolean = false;
</script>

<div class="feature">
	<div class="icon">
		<Icon {icon} size={1.4} {white} />
	</div>
	<p>
		<span class="title" class:gradient={!white}>{title}:</span>
		<span class="description"><slot /></span>
	</p>
</div>

<style>
	.feature {
		display: flex;
		gap: 10px;
	}

	.title {
		font-weight: 700;
	}

	.description {
		font-weight: 300;
		opacity: 0.8;
	}
</style>
