import type { SidebarConfig } from '@svelteness/kit-docs';

export const sidebar: SidebarConfig = {
	links: {
		'Getting started': [
			{ title: 'Introduction', slug: '/docs/introduction' },
			{ title: 'Features', slug: '/docs/features' }
			// { title: "Application", slug: "/docs/application" },
		],
		Installation: [
			{ title: 'Windows', slug: '/docs/windows' },
			{ title: 'macOS', slug: '/docs/macos' },
			{ title: 'Linux', slug: '/docs/linux' }
		],
		Projects: [
			{ title: 'Projects', slug: '/docs/projects' },
			{ title: 'Project', slug: '/docs/project-list' }
		],
		Show: [
			{ title: 'Shows', slug: '/docs/show-type' },
			{ title: 'Views', slug: '/docs/views' },
			{ title: 'Editing', slug: '/docs/editing' },
			{ title: 'Items', slug: '/docs/items' },
			{ title: 'Chords', slug: '/docs/chords' },
			{ title: 'Groups', slug: '/docs/groups' },
			{ title: 'Layouts', slug: '/docs/layouts' },
			{ title: 'Tools', slug: '/docs/tools' },
			{ title: 'Slide Actions', slug: '/docs/actions' }
		],
		Drawer: [
			{ title: 'Drawer', slug: '/docs/drawer' },
			{ title: 'Media', slug: '/docs/media' },
			{ title: 'Overlays', slug: '/docs/overlays' },
			{ title: 'Templates', slug: '/docs/templates' },
			{ title: 'Scripture', slug: '/docs/scripture' },
			{ title: 'Calendar', slug: '/docs/calendar' }
		],
		Outputs: [
			{ title: 'Output', slug: '/docs/output' },
			{ title: 'NDI®', slug: '/docs/ndi' },
			{ title: 'Multiple outputs', slug: '/docs/outputs' },
			{ title: 'Styles', slug: '/docs/styles' }
		],
		Remote: [
			{ title: 'Connecting', slug: '/docs/connecting' },
			{ title: 'RemoteShow', slug: '/docs/remote' },
			{ title: 'StageShow', slug: '/docs/stage' },
			{ title: 'ControlShow', slug: '/docs/controller' },
			{ title: 'OutputShow', slug: '/docs/outputstream' },
			{ title: 'Bitfocus Companion', slug: '/docs/companion' }
		],
		Cloud: [
			{ title: 'Drive API', slug: '/docs/drive' },
			{ title: 'Integrations', slug: '/docs/integrations' }
		],
		Actions: [
			{ title: 'MIDI', slug: '/docs/midi' },
			{ title: 'Importing', slug: '/docs/importing' },
			{ title: 'Exporting', slug: '/docs/exporting' }
		],
		Advanced: [
			{ title: 'Mirrors', slug: '/docs/mirrors' },
			{ title: 'Data storage', slug: '/docs/data' },
			{ title: 'Troubleshooting', slug: '/docs/troubleshooting' }
		],
		Tips: [
			// { title: "Roadmap", slug: "/docs/roadmap" },
			{ title: 'Styling', slug: '/docs/styling' },
			{ title: 'Keyboard Shortcuts', slug: '/docs/shortcuts' },
			{ title: 'FAQ', slug: '/docs/faq' }
		],
		Formats: [
			{ title: '.show', slug: '/docs/format-show' },
			{ title: '.project', slug: '/docs/format-project' },
			// { title: '.template', slug: '/docs/format-template' }, // "fstemplate", "fst", "template", "json"
			// { title: '.theme', slug: '/docs/format-theme' }, // "fstheme", "theme", "json"
			{ title: '.fsb', slug: '/docs/format-bible' }
		]
	}
};
