<script>
	import Button from '$lib/components/inputs/Button.svelte';
	import Link from '$lib/components/inputs/Link.svelte';
	import Card from '$lib/components/main/Card.svelte';
	import Feature from '$lib/components/main/Feature.svelte';
	import Icon from '$lib/components/main/Icon.svelte';
	import Image from '$lib/components/main/Image.svelte';
	import Section from '$lib/components/main/Section.svelte';
	import Video from '$lib/components/main/Video.svelte';
</script>

<Section
	height={95}
	background={{ src: 'main/header-bg.png', alt: 'Header image - person using FreeShow at concert' }}
	continueButton
>
	<div
		style="width: var(--full-small-half-big);display: flex;flex-direction: column;align-items: var(--center-small-left-big);"
	>
		<h1>
			<span style="font-weight: 300;">Elevate Your</span>
			<span>Presentations</span>
			<span>with FreeShow</span>
		</h1>
		<p style="padding: 15px 0;">
			A dynamic, user-friendly, and open-source presenter built for all of your presentation.
		</p>

		<div class="download">
			<Button primary icon="windows" big>Download for Windows</Button>

			<p style="opacity: 0.8;font-size: 0.8em;">Download another version:</p>

			<div class="more">
				<Button icon="windows" title="Download for Windows" outline />
				<Button icon="apple" title="Download for MacOS" outline variant />
				<Button icon="linux" title="Download for Linux" outline />
			</div>
		</div>
	</div>
</Section>

<Section white>
	<Card outline variant>
		<div class="image">
			<Image src="main/mission.png" alt="Person using FreeShow at computer" />
		</div>
	</Card>

	<!-- style="justify-content: space-between;" -->
	<div class="text">
		<div class="head">
			<Icon icon="people" />
			<h2>Our <span class="gradient">Mission</span></h2>
		</div>

		<p>
			Every year churches spend hundreds of millions of dollars on the software needed to operate
			effectively and efficiently. We believe that within the Church the talent exists to create all
			the software that churches need and provide it free of charge.
		</p>
		<p>
			Doing so would free up a significant amount of funds that can be spent on accomplishing the
			mission of the Church instead of overhead.
		</p>

		<Link link="mission" primary>Mission</Link>
	</div>
</Section>

<Section white style="padding: 0;">
	<!-- WIP get the correct divider -->
	<Image src="special/divider.png" alt="Divider" />
</Section>

<!-- style="z-index: 0;" -->
<Section white center style="padding-bottom: 0;">
	<div class="head" style="display: flex;flex-direction: column;align-items: center;gap: 15px;">
		<Icon icon="video" />
		<h2>What is <span class="gradient">FreeShow</span></h2>
		<p>Some text here!</p>
	</div>

	<Card
		outline
		glass
		style="width: 80%;overflow: initial;z-index: 1;--primary: rgb(var(--primary-inverted-rgb), 0.6)"
	>
		<!-- TODO: place behind card -->
		<!-- z-index: -1; -->
		<div class="circle" style="position: absolute;top: -50px;left: -50px;width: 150px;">
			<Image src="special/circle-bg.png" alt="Design circle" />
		</div>

		<Video src="Introducing FreeShow.mp4" thumbnail="Introducing FreeShow.jpg" />
	</Card>
</Section>

<Section
	column
	style="z-index: 0;"
	background={{
		src: 'special/features-bg-affix.png',
		alt: 'Distant background of computer running FreeShow',
		top: -120
	}}
>
	<div class="head" style="text-align: center;">
		<Icon icon="key" />
		<h2>FreeShow Key <span class="gradient">Features</span></h2>
	</div>

	<div class="row">
		<div class="text" style="align-self: center;">
			<h4>Powerful Editing</h4>
			<Feature icon="options" title="Limitless Customization">
				A Robust editor to alter text font, size, color, and add outlines, shadows, with almost
				boundless possibilities.
			</Feature>
			<Feature icon="options" title="On-the-Fly Text Editing">
				Make live changes to your text during presentations with the Edit mode.
			</Feature>
		</div>

		<div class="image">
			<Card outline>
				<Image src="main/editing.png" alt="Person editing slides in FreeShow" />
			</Card>
		</div>
	</div>

	<div class="row">
		<div class="image">
			<Card outline variant>
				<Image src="main/automated.png" alt="Person working with FreeShow" />
			</Card>
		</div>

		<div class="text" style="align-self: center;">
			<h4>Timed & Automated Play</h4>
			<Feature icon="options" title="Autoplay">
				Set timers on slides for seamless transitions.
			</Feature>
			<Feature icon="options" title="Countdowns">
				Easily let your congregation know when services will start with built in countdowns.
			</Feature>
			<Feature icon="options" title="Midi Controls">
				Receive Midi commands to advance slides or send midi commands on slide change to trigger
				lighting and other changes.
			</Feature>
		</div>
	</div>
</Section>

<Section column style="padding: 0;gap: 0;">
	<Image src="special/flow-top.png" alt="Esthetic waves start" borderRadius={false} />

	<div class="row" style="padding: 0 var(--margin);background-color: #980057;">
		<div class="text" style="align-self: center;padding: 30px 0;">
			<h4>Multiple Views</h4>
			<Feature icon="options" title="Simultaneous Outputs" white>
				Show the same presentation with different looks for your in-person audience, online audience
				and a stage view for leaders.
			</Feature>
			<Feature icon="options" title="Web Output" white>
				Users can connect to the presentation from their mobile devices. Perfect for pastor sermon
				notes or musicians.
			</Feature>
			<Feature icon="options" title="NDI Support" white>
				We fully support output over NDI. No need for converters or SDI cables to send your lyrics
				to the computer running your online stream.
			</Feature>
			<Feature icon="options" title="Remote Control" white>
				Allow your pastor or worship minister to control the show directly from their mobile device.
				Excellent for rehearsals of for smaller churches.
			</Feature>
		</div>

		<div class="image" style="filter: brightness(0.9);padding-top: 50px;">
			<Image src="special/devices.png" alt="Person working with FreeShow" />
		</div>
	</div>

	<Image src="special/flow-bottom.png" alt="Esthetic waves end" borderRadius={false} />
</Section>

<Section column style="gap: 60px;">
	<div class="circle" style="position: absolute;left: 0;top: 50%;transform: translateY(-15%);">
		<Image src="special/half-circle.png" alt="Esthetic half circle" />
	</div>

	<div class="row">
		<!-- TODO: bubble -->
		<Card outline variant style="--card-padding: 40px;width: var(--full-small-half-big);">
			<div
				class="image"
				style="margin: calc((var(--card-padding) - var(--outline-width)) * -1) calc((var(--card-padding) - var(--outline-width)) * -1) var(--card-padding) 0;"
			>
				<Image src="preview/template.png" alt="Preview of software. Drawer with templates open." />
			</div>

			<div style="display: flex;flex-direction: column;gap: 25px;">
				<h4>Template & Design</h4>
				<Feature icon="options" title="Sleek Templates">
					Modify your slide styles swiftly with a variety of templates.
				</Feature>
				<Feature icon="options" title="Dynamic Layouts">
					Resize and organize your display areas as per your requirement.
				</Feature>
			</div>
		</Card>

		<Card outline style="--card-padding: 40px;width: var(--full-small-half-big);">
			<div style="display: flex;flex-direction: column;gap: 25px;">
				<h4>Create & Show</h4>
				<Feature icon="options" title="Create Impactful Shows">
					Easily arrange slides and layouts for lyrics, presentations, events, and more, ensuring a
					smooth flow in your presentations.
				</Feature>
				<Feature icon="options" title="Dynamic Media Integration">
					Effortlessly drag images and videos into your slides as backgrounds enhancing the visual
					appeal of your presentations.
				</Feature>
			</div>

			<div
				class="image"
				style="margin: var(--card-padding) 0 calc((var(--card-padding) - var(--outline-width)) * -1) 0;"
			>
				<Image src="preview/create.png" alt="Preview of software. Drawer with templates open." />
			</div>
		</Card>
	</div>

	<Card
		outline
		style="--card-padding: 40px;display: flex;flex-direction: var(--column-small-row-big);width: 100%;"
	>
		<div
			class="image"
			style="margin: calc((var(--card-padding) - var(--outline-width)) * -1) var(--card-padding) var(--card-padding) calc((var(--card-padding) - var(--outline-width)) * -1)"
		>
			<Image src="preview/scripture.png" alt="Preview of software. Drawer with templates open." />
		</div>

		<div class="text" style="align-self: center;">
			<h4>Scripture & Lyric Integration</h4>
			<Feature icon="options" title="Scripture Integration">
				Easily look up passages and turn them into slides with one click.
			</Feature>
			<Feature icon="options" title="Lyric Integration">
				It's no longer necessary to manually enter the lyrics to all the songs. Just enter the title
				and click search and be amazed as the slides are automatically created for you.
			</Feature>
		</div>
	</Card>
</Section>

<!-- this should be a different image -->
<Section
	column
	background={{ src: 'main/working.png', alt: 'Distant background of person working on FreeShow' }}
>
	<div class="row">
		<div class="text" style="align-self: center;">
			<h4>Play Well With Others</h4>
			<Feature icon="options" title="Import">
				Import Presentations from PowerPoint, ProPresenter, EasyWorship, OpenSong, and other
				platforms.
			</Feature>
			<Feature icon="options" title="Export">
				You're not locked in and can export your content in multiple formats at any time.
			</Feature>
			<Feature icon="options" title="Cloud Sync">
				Allow multiple people within your church to work on presentations from different computers
				with cloud sync.
			</Feature>
		</div>

		<div class="image">
			<Card outline>
				<Image src="main/plays-well.png" alt="Computer sitting on desk with FreeShow open" />
			</Card>
		</div>
	</div>

	<div class="download" style="align-items: center;">
		<Button primary icon="windows" big>Download for Windows</Button>

		<div class="more">
			<Button icon="windows" title="Download for Windows" outline />
			<Button icon="apple" title="Download for MacOS" outline variant />
			<Button icon="linux" title="Download for Linux" outline />
		</div>
	</div>
</Section>

<Section white>
	<h2>How FreeShow <span class="gradient">Compares</span></h2>
</Section>

<Section>
	<h2>What Others <span class="gradient">are Saying</span></h2>
</Section>

<style>
	h1 {
		display: flex;
		flex-direction: column;
		line-height: 1.1em;
		letter-spacing: 1.2px;
	}

	.download {
		padding: 25px 0;
		display: flex;
		flex-direction: column;
		gap: 12px;
		align-items: var(--center-small-left-big);
	}

	.more {
		display: flex;
		gap: 10px;
	}
</style>
