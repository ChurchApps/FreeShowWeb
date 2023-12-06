type TableContent = {
	content: boolean | string; // content variables: {win}{mac}{linux}
	note?: string;
};

type Features = {
	name: string;
	info?: string;
	programs: {
		fs: TableContent; // freeshow
		pp: TableContent; // propresenter
		ew: TableContent; // easyworship
		vp: TableContent; // videopsalm
		ol: TableContent; // openlp
		pc: TableContent; // proclaim
		ms?: TableContent; // mediashout
		// presenter / powerpoint / ++
	};
}[];

export const features: Features = [
	{
		name: 'Platforms',
		programs: {
			fs: { content: '{win}{mac}{linux}' },
			pp: { content: '{win}{mac}' },
			ew: { content: '{win}' },
			vp: { content: '{win}' },
			ol: { content: '{win}{mac}{linux}' },
			pc: { content: '{win}{mac}' }
		}
	},
	{
		name: 'Price',
		programs: {
			fs: { content: 'Free' },
			pp: { content: '$399', note: 'Starting at $399' },
			ew: { content: '$180/yr', note: 'Starting at $180 yearly' },
			vp: { content: 'Free' },
			ol: { content: 'Free' },
			pc: { content: '$225/yr', note: 'Starting at $255 yearly' }
		}
	},
	{
		name: 'Multiple languages',
		programs: {
			fs: { content: true, note: '12+ languages' },
			pp: { content: true, note: '10 languages' },
			ew: { content: false, note: 'Only english' },
			vp: { content: true, note: 'Around 50 languages' },
			ol: { content: true, note: 'At least 26 languages' },
			pc: { content: true, note: 'English & Spanish' }
		}
	},
	{
		name: 'Cloud Sync',
		programs: {
			fs: {
				content: true,
				note: 'Sync with your Google Drive using your own Google API. Or use a repository linked to your local file system.'
			},
			pp: { content: true, note: 'Use a repository linked to your local file system.' },
			ew: { content: false },
			vp: { content: true, note: 'Use a repository linked to your local file system.' },
			ol: { content: false },
			pc: { content: true, note: 'Build with sync in mind.' }
		}
	},
	{
		name: 'Customer support',
		programs: {
			fs: { content: true, note: 'Via email or GitHub' },
			pp: { content: true },
			ew: { content: true, note: 'With subscription' },
			vp: { content: true, note: 'Via email' },
			ol: { content: true, note: 'Forums' },
			pc: { content: true }
		}
	},
	{
		name: 'Projects',
		info: 'Create and manage multiple projects',
		programs: {
			fs: { content: true },
			pp: { content: true },
			ew: { content: true, note: 'Stored as files on the computer' },
			vp: { content: true, note: 'Stored as files on the computer' },
			ol: { content: true },
			pc: { content: true }
		}
	},
	{
		name: 'Slides',
		info: 'Create and edit slides',
		programs: {
			fs: { content: true },
			pp: { content: true },
			ew: { content: true },
			vp: { content: true },
			ol: { content: true },
			pc: { content: true }
		}
	},
	{
		name: 'Groups',
		info: 'Create groups and reuse slides',
		programs: {
			fs: { content: true },
			pp: { content: true },
			ew: { content: false },
			vp: { content: false },
			ol: { content: true, note: 'Text based' },
			pc: { content: true, note: 'Text based' }
		}
	},
	{
		name: 'Preview',
		info: 'Output preivew and slide preview',
		programs: {
			fs: { content: true },
			pp: { content: true },
			ew: { content: true },
			vp: { content: true, note: 'Only text' },
			ol: { content: true },
			pc: { content: true }
		}
	},
	// { name: "Quick lyrics", programs: { fs: "{y}", pp: "{y}", ew: "{n}", vp: "{n}", ol: "{n}", pc: "{y}" } },
	{
		name: 'RTE',
		info: 'Rich text editor',
		programs: {
			fs: { content: true },
			pp: { content: true },
			ew: { content: true },
			vp: { content: true },
			ol: { content: false },
			pc: { content: true }
		}
	},
	{
		name: 'Text edit',
		info: 'Edit a whole show like a text file',
		programs: {
			fs: { content: true },
			pp: { content: true },
			ew: { content: true },
			vp: { content: true },
			ol: { content: true },
			pc: { content: true }
		}
	},
	{
		name: 'Auto labels',
		info: 'Automatically assign labels like verse and chorus',
		programs: {
			fs: { content: true },
			pp: { content: true },
			ew: { content: false },
			vp: { content: true },
			ol: { content: true },
			pc: { content: false }
		}
	},
	{
		name: 'Chords',
		info: 'Add chords in text',
		programs: {
			fs: { content: true },
			pp: { content: false },
			ew: { content: false },
			vp: { content: true },
			ol: { content: true },
			pc: { content: false }
		}
	},
	{
		name: 'Slide actions',
		info: 'Add actions that execute when a slide is activated',
		programs: {
			fs: { content: true },
			pp: { content: true },
			ew: { content: false },
			vp: { content: false },
			ol: { content: false },
			pc: { content: true }
		}
	},
	{
		name: 'Transitions',
		programs: {
			fs: { content: true },
			pp: { content: true },
			ew: { content: true, note: "Can't be changed easily" },
			vp: { content: true },
			ol: { content: false },
			pc: { content: true }
		}
	},
	{
		name: 'Timers',
		programs: {
			fs: { content: true },
			pp: { content: true },
			ew: { content: true },
			vp: { content: true },
			ol: { content: true },
			pc: { content: true }
		}
	},
	{
		name: 'Media',
		info: 'Preview media and set as background',
		programs: {
			fs: { content: true },
			pp: { content: true },
			ew: { content: true, note: 'Hard to use' },
			vp: { content: true, note: 'Hard to use' },
			ol: { content: true, note: 'Hard to use' },
			pc: { content: true, note: 'Only one background per slideshow' }
		}
	},
	{
		name: 'Overlays',
		programs: {
			fs: { content: true },
			pp: { content: true },
			ew: { content: true },
			vp: { content: true },
			ol: { content: false },
			pc: { content: true }
		}
	},
	{
		name: 'Music',
		info: 'Play audio',
		programs: {
			fs: { content: true },
			pp: { content: true },
			ew: { content: true },
			vp: { content: true },
			ol: { content: false },
			pc: { content: true }
		}
	},
	{
		name: 'Bibles',
		programs: {
			fs: { content: true },
			pp: { content: true },
			ew: { content: true },
			vp: { content: true },
			ol: { content: true },
			pc: { content: true }
		}
	},
	{
		name: 'Calendar',
		info: 'Create events and schedule shows',
		programs: {
			fs: { content: true },
			pp: { content: false },
			ew: { content: false },
			vp: { content: false },
			ol: { content: false },
			pc: { content: true }
		}
	},
	{
		name: 'Multiple outputs',
		programs: {
			fs: { content: true },
			pp: { content: true },
			ew: { content: true },
			vp: { content: false },
			ol: { content: false },
			pc: { content: true }
		}
	},
	{
		name: 'Lock output',
		info: 'Prevent changes to the output',
		programs: {
			fs: { content: true },
			pp: { content: false },
			ew: { content: false },
			vp: { content: false },
			ol: { content: false },
			pc: { content: false }
		}
	},
	{
		name: 'Remote controller',
		programs: {
			fs: { content: true },
			pp: { content: true, note: 'Costs $4.99' },
			ew: { content: true },
			vp: { content: false },
			ol: { content: true },
			pc: { content: true }
		}
	},
	{
		name: 'Stage display',
		programs: {
			fs: { content: true },
			pp: { content: true },
			ew: { content: true },
			vp: { content: true },
			ol: { content: true },
			pc: { content: true }
		}
	},
	{
		name: 'Mirror screen',
		info: 'Show a live mirror of a screen or window on the presenters computer',
		programs: {
			fs: { content: true },
			pp: { content: false },
			ew: { content: false },
			vp: { content: false },
			ol: { content: false },
			pc: { content: false }
		}
	},
	{
		name: 'Cameras',
		programs: {
			fs: { content: true },
			pp: { content: true },
			ew: { content: true },
			vp: { content: true },
			ol: { content: false },
			pc: { content: true }
		}
	},
	{
		name: 'YouTube',
		info: 'Play YouTube videos inside the program',
		programs: {
			fs: { content: true },
			pp: { content: false },
			ew: { content: false },
			vp: { content: false },
			ol: { content: false },
			pc: { content: false }
		}
	},
	{
		name: 'NDI support',
		info: 'Multiple outputs, useful for streaming',
		programs: {
			fs: { content: true },
			pp: { content: true },
			ew: { content: true },
			vp: { content: false },
			ol: { content: false },
			pc: { content: false }
		}
	},
	{
		name: 'MIDI support',
		info: 'MIDI controllers',
		programs: {
			fs: { content: true },
			pp: { content: true },
			ew: { content: true },
			vp: { content: false },
			ol: { content: false },
			pc: { content: true }
		}
	},
	{
		name: 'CCLI',
		info: 'Church Copyright Licensing International',
		programs: {
			fs: { content: true },
			pp: { content: true },
			ew: { content: true },
			vp: { content: true },
			ol: { content: true },
			pc: { content: true }
		}
	},
	
	// { name: "Contigious mode", info: "Show all project elements on one continious page", programs: { fs: "{n}", pp: "{y}", ew: "{n}", vp: "{n}", ol: "{n}", pc: "{y}" } },
	{
		name: 'Draw',
		info: 'Draw/point over output',
		programs: {
			fs: { content: true },
			pp: { content: true },
			ew: { content: false },
			vp: { content: false },
			ol: { content: false },
			pc: { content: false }
		}
	},
	{
		name: 'Themes',
		info: 'Customize the look of the application',
		programs: {
			fs: { content: true },
			pp: { content: false },
			ew: { content: false },
			vp: { content: true, note: 'Skins' },
			ol: { content: false },
			pc: { content: false }
		}
	},
  {
		name: 'Import PowerPoint',
		programs: {
			fs: { content: true },
			pp: { content: true },
			ew: { content: true },
			vp: { content: true },
			ol: { content: true },
			pc: { content: true }
		}
	},
	{
		name: 'Export as PDF',
		programs: {
			fs: { content: true },
			pp: { content: true },
			ew: { content: false },
			vp: { content: false },
			ol: { content: false },
			pc: { content: false }
		}
	}
];
