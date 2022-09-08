import adapter from "@sveltejs/adapter-auto"
import preprocess from "svelte-preprocess"

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),
  prerender: {
    crawl: true,
    enabled: true,
    onError: "continue",
    entries: ["*"],
  },
  kit: {
    adapter: adapter(),
  },
}

export default config
