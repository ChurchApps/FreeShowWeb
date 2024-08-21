type SearchMap = {
	name: string;
	content: string;
};

let SEARCH_MAP: SearchMap[] = [];

async function getSearchMap() {
	// search map requires a search map created with "npm run build"
	const isDev = location.hostname === 'localhost';
	if (isDev) {
		alert("Search only works in build with 'npm run build'");
		return;
	}

	const debugMode = location.hostname === '127.0.0.1';
	const searchMapPath = (debugMode ? '/build' : '') + '/docs/search/doc-texts.json';

	return new Promise((resolve) => {
		fetch(searchMapPath)
			.then((response) => response.json())
			.then((json) => {
				if (Array.isArray(json)) SEARCH_MAP = json;
				resolve(true);
			})
			.catch((err) => {
				console.error(err);
				resolve(false);
			});
	});
}

function clone<T>(object: T): T {
	if (typeof object !== 'object') return object;
	return JSON.parse(JSON.stringify(object));
}

function trimSearchValue(value: string) {
	return value.replace(/[^a-zA-Z0-9 ]+/g, '');
}

// Map to cache occurrences
const occurrenceCache = new Map();

function findMatches(searchValue: string) {
	// sort based on the occurrences of searchValue in content
	return clone(SEARCH_MAP).sort((a, b) => {
		const aValue = calculateTotalScore(a.content, searchValue);
		const bValue = calculateTotalScore(b.content, searchValue);
		return bValue - aValue;
	});

	// calculate the total match score
	function calculateTotalScore(content: string, searchValue: string) {
		const words = searchValue.split(/\s+/); // Split searchValue into individual words
		return words.reduce((total, word) => total + countOccurrences(content, word), 0);
	}

	// count occurrences of searchValue in content
	function countOccurrences(content: string, word: string) {
		const cacheKey = `${content}_${word}`;

		if (occurrenceCache.has(cacheKey)) return occurrenceCache.get(cacheKey);

		const regex = new RegExp(word, 'gi');
		const matches = content.replace(/[,.!:/ ]/g, '').match(regex);
		const count = matches ? matches.length : 0;

		occurrenceCache.set(cacheKey, count);

		return count;
	}
}

export async function searchDocs(searchValue: string) {
	if (!SEARCH_MAP?.length) await getSearchMap();
	if (!SEARCH_MAP?.length) return [];

	searchValue = trimSearchValue(searchValue);
	const sortByMatches = findMatches(searchValue);

	// return the 5 highest matches!
	return sortByMatches.slice(0, 5);
}

// HIGHLIGHT

const MARGIN = 40;
const MAX_SNIPPETS = 3;
const HIGHLIGHT = '<span class="highlight">$1</span>';

export function highlightContent(content: string, searchValue: string) {
	searchValue = trimSearchValue(searchValue);

	const words = searchValue.split(/\s+/).filter(Boolean);
	const regex = new RegExp(`(${words.join('|')})`, 'gi');

	let match;
	const snippets: string[] = [];

	// find all matches in the content
	while ((match = regex.exec(content)) !== null) {
		const start = Math.max(0, match.index - MARGIN);
		const end = Math.min(content.length, match.index + match[0].length + MARGIN);

		let snippet = content.substring(start, end);
		snippet = snippet.replace(regex, HIGHLIGHT);

		// slice completed content
		content = content.slice(end);

		// WIP join with close by
		// if (snippets.length > 0) {
		// 	const lastSnippet: string = snippets[snippets.length - 1];
		// 	const lastEnd: number = content.indexOf(lastSnippet.slice(-20)) + lastSnippet.length;

		// 	// merge with the previous snippet if they overlap or are close
		// 	if (start <= lastEnd + MARGIN) {
		// 		snippets[snippets.length - 1] = lastSnippet + snippet.slice(lastEnd - start);
		// 	} else if (snippet) {
		// 	    snippets.push(snippet);
		// 	}
		// } else if (snippet) {
		// 	snippets.push(snippet);
		// }

		if (snippet) snippets.push(snippet);

		// break if max snippets reached
		if (snippets.length === MAX_SNIPPETS) break;
	}

	return snippets.slice(0, MAX_SNIPPETS);
}
