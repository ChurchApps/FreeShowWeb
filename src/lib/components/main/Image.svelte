<script lang="ts">
	export let src: string;
	export let alt: string;
	export let style: string = '';
	export let draggable: boolean = true;
	export let borderRadius: boolean = true;

	let path = `images/${src}`;
</script>

<img src={path} {alt} {style} {draggable} class:borderRadius />

<style>
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		/* object-position: top; */
	}

	img.borderRadius {
		border-radius: var(--border-radius);
	}
</style>
