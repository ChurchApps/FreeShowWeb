import { sveltekit } from '@sveltejs/kit/vite';
import kitDocs from '@svelteness/kit-docs/node';
import icons from 'unplugin-icons/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [icons({ compiler: 'svelte' }), kitDocs(), sveltekit()]
});
