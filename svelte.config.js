import adapter from "@sveltejs/adapter-netlify"

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: [".svelte", ".md"],

    kit: {
        adapter: adapter(),
        prerender: {
            handleMissingId: "warn",
        },
    },
}

export default config
