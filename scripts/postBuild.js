import fs from 'fs';
import path from 'path';

// Build a JSON file with a text map for docs searching

const docsPath = 'src/routes/docs/';
function getDocFolders() {
	return fs
		.readdirSync(docsPath, { withFileTypes: true })
		.filter((file) => file.isDirectory())
		.map((file) => file.name);
}

function getDocsContent(docFolders) {
	let contents = [];

	for (const docName of docFolders) {
		const docContent = getDocContent(docName);
		if (docContent) {
			contents.push({
				name: docName,
				content: formatDoc(docContent.toString())
			});
		}
	}

	return contents;
}

function getDocContent(name) {
	let docPath = path.join(docsPath, name, '+page.md');
	if (!fs.existsSync(docPath)) return;

	return fs.readFileSync(docPath);
}

function formatDoc(content) {
	// store only letters & numbers!
	return content
		.replace(/\([^)]*\)/g, '')
		.replace(/\n+/g, ' ')
		.replace(/[^a-zA-Z0-9,.!:/ ]+/g, '');
}

const buildPath = 'build/';
function saveToBuild(contents) {
	const searchPath = path.join(buildPath, 'docs', 'search');
	fs.mkdirSync(searchPath);

	const cacheFilePath = path.join(searchPath, 'doc-texts.json');
	fs.writeFileSync(cacheFilePath, JSON.stringify(contents));
}

function createSearchMap() {
	const docFolders = getDocFolders();
	const contents = getDocsContent(docFolders);
	saveToBuild(contents);
}

createSearchMap();
