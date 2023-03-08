// https://kit-docs.svelteness.dev/docs/default-layout/components

import { redirect } from "@sveltejs/kit"

export const prerender = true

/** @type {import('@sveltejs/kit').PageLoad} */
export async function load() {
    throw redirect(307, `/docs/introduction`)
}
