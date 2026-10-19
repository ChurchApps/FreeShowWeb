import { createMetaRequestHandler } from '@svelteness/kit-docs/node';
import { docsSlugs } from '$lib/components/scripts/docs';

const CACHE_CONTROL = 'public, max-age=0, s-maxage=86400, stale-while-revalidate=604800';
const metaHandler = createMetaRequestHandler();

export const prerender = true;

export function entries() {
	return docsSlugs.map((slug) => ({ slug: encodeURIComponent(slug) }));
}

export async function GET(event) {
	const response = await metaHandler(event);
	const headers = new Headers(response.headers);

	headers.set('Cache-Control', CACHE_CONTROL);
	headers.set('X-Robots-Tag', 'noindex, nofollow');

	return new Response(response.body, {
		status: response.status,
		statusText: response.statusText,
		headers
	});
}
