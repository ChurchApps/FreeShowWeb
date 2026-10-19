import { createSidebarRequestHandler, kebabToTitleCase } from '@svelteness/kit-docs/node';
import { docsSidebarDirs } from '$lib/components/scripts/docs';

const CACHE_CONTROL = 'public, max-age=0, s-maxage=86400, stale-while-revalidate=604800';
const sidebarHandler = createSidebarRequestHandler({
	formatCategoryName: (dirname) => kebabToTitleCase(dirname).replace('Api', 'API')
});

export const prerender = true;

export function entries() {
	return docsSidebarDirs.map((dir) => ({ dir }));
}

export async function GET(event) {
	const response = await sidebarHandler(event);
	const headers = new Headers(response.headers);

	headers.set('Cache-Control', CACHE_CONTROL);
	headers.set('X-Robots-Tag', 'noindex, nofollow');

	return new Response(response.body, {
		status: response.status,
		statusText: response.statusText,
		headers
	});
}
