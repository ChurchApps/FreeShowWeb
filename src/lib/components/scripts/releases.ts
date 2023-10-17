export type Release = {
	assets: Asset[];
	assets_url: string;
	author: any;
	body: string;
	created_at: string;
	draft: boolean;
	html_url: string;
	id: number;
	name: string;
	node_id: string;
	prerelease: boolean;
	published_at: string;
	tag_name: string;
	tarball_url: string;
	target_commitish: string;
	upload_url: string;
	url: string;
	zipball_url: string;
};

export type Asset = {
	browser_download_url: string;
	content_type: string;
	created_at: string;
	download_count: number;
	id: number;
	label: string;
	name: string;
	node_id: string;
	size: number;
	state: string;
	updated_at: string;
	uploader: any;
	url: string;
};

export async function getReleases(countedReleases = 200): Promise<Release[]> {
	return new Promise((resolve) => {
		fetch('https://api.github.com/repos/ChurchApps/FreeShow/releases?per_page=' + countedReleases)
			.then((response) => response.json())
			.then((data) => {
				if (Array.isArray(data)) resolve(data);
			})
			.catch((error) => {
				console.warn(error);
			});
	});
}

export function convertSize(bytes: number, decimals = 0) {
	if (bytes <= 0) return '0 Bytes';

	const k = 1024;
	const dm = decimals < 0 ? 0 : decimals;
	const sizes = ['Bytes', 'KB', 'MB', 'GB'];
	const i = Math.floor(Math.log(bytes) / Math.log(k));

	return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

export function toDate(d: string) {
	if (!d) return '00.00-0000';

	let date: Date = new Date(d);
	let year = date.getFullYear();
	let month = ('0' + (date.getMonth() + 1)).slice(-2);
	let day = ('0' + date.getDate()).slice(-2);

	return `${day}.${month}-${year}`;
}

export function getOS() {
	let platform = window.navigator.platform;

	// desktop
	if (platform.includes('Win')) return 'Windows'; // "Win32", "Win64", "Windows", "WinCE"
	if (platform.includes('Mac')) return 'MacOS'; // "Macintosh", "MacIntel", "MacPPC", "Mac68K"
	if (platform.includes('Linux')) return 'Linux';

	// mobile
	// if (platform.includes('iP')) return 'iOS'; // "iPhone", "iPad", "iPod"
	// let userAgent = window.navigator.userAgent;
	// if (userAgent.includes('Android')) return 'Android';

	return '';
}
