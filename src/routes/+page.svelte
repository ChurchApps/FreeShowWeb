<script lang="ts">
	import Link from "$lib/components/inputs/Link.svelte"
	import Card from "$lib/components/main/Card.svelte"
	import Feature from "$lib/components/main/Feature.svelte"
	import Icon from "$lib/components/main/Icon.svelte"
	import Image from "$lib/components/main/Image.svelte"
	import Section from "$lib/components/main/Section.svelte"
	import Video from "$lib/components/main/Video.svelte"
	import Badges from "$lib/components/special/Badges.svelte"
	import Compare from "$lib/components/special/Compare.svelte"
	import Download from "$lib/components/special/Download.svelte"
	import Reviews from "$lib/components/special/Reviews.svelte"
</script>

<Section
	height={95}
	background={{
		src: "main/header-bg.webp",
		alt: "Header image - person using FreeShow at concert"
	}}
	continueButton
>
	<div class="top-content">
		<h1>
			<span style="font-weight: 300;">Elevate Your</span>
			<span>Presentations</span>
			<span>with FreeShow</span>
		</h1>
		<p style="padding: 15px 0;max-width: 370px;">A dynamic, user-friendly, and open-source presenter built for all of your presentations.</p>

		<div class="download">
			<Download main />
		</div>
	</div>
</Section>

<Section white>
	<div class="image">
		<Card outline variant>
			<Image src="main/mission.webp" alt="Person using FreeShow at computer" />
		</Card>
	</div>

	<!-- style="justify-content: space-between;" -->
	<div class="text">
		<div class="head">
			<Icon icon="mission" />
			<h2 id="mission">Our <span class="gradient">Mission</span></h2>
		</div>

		<p>
			Every year churches spend hundreds of millions of dollars on the software needed to operate effectively and efficiently. We believe that within the Church the talent exists to create all the software that churches need and <strong
				>provide it free of charge.</strong
			>
		</p>
		<p>
			Changing how we handle church software can not only save a lot of money, but also bring believers together. If we use the skills within our own community, we can make the software that the Church needs without the costly expense. This
			way, more of our funds can go directly to the Church's mission instead of overhead. It's about working together, saving money, and focusing on what truly matters.
		</p>

		<Link link="https://livecs.org/" title="Learn more about our mission" primary>Learn More</Link>
	</div>
</Section>

<Section white style="padding: 0;">
	<Image src="special/divider.webp" alt="Divider" />
</Section>

<Section white center style="padding-bottom: 0;">
	<div class="head" style="display: flex;flex-direction: column;align-items: center;gap: 15px;">
		<Icon icon="video" />
		<h2 id="video">What is <span class="gradient">FreeShow</span></h2>
		<p>
			Here is a short intro video explaining the basics of this software.
			<br />
			To learn more please head over to our
			<Link link="/docs" inline>documentation</Link>.
		</p>
	</div>

	<div class="center" style="position: relative;width: var(--full-small-80-big);display: flex;justify-content: center;">
		<Card outline glass style="overflow: initial;z-index: 1;--primary: rgb(var(--primary-inverted-rgb), 0.6)">
			<Video src="Introducing FreeShow.mp4" thumbnail="Introducing FreeShow.webp" />
		</Card>

		<div class="circle" style="position: absolute;top: -40px;left: -40px;width: 120px;opacity: 0.7;">
			<Image src="special/circle-bg.webp" alt="Design circle" />
		</div>
	</div>
</Section>

<Section
	column
	style="z-index: 0;"
	background={{
		src: "main/features-bg-affix.webp",
		alt: "Distant background of computer running FreeShow",
		top: -120
	}}
>
	<div class="head" style="text-align: center;">
		<Icon icon="key" />
		<h2 id="features">FreeShow Key <span class="gradient">Features</span></h2>
	</div>

	<div class="row" style="flex-direction: var(--inverted-column-small-row-big);">
		<div class="text" style="align-self: center;">
			<h4>Powerful Editing</h4>
			<Feature icon="options" title="Limitless Customization">A Robust editor to alter text font, size, color, and add outlines, shadows, with almost boundless possibilities.</Feature>
			<Feature icon="edit" title="On-the-Fly Text Editing">Make live changes to your text during presentations with the Edit mode.</Feature>
		</div>

		<div class="image">
			<Card outline>
				<Image src="main/editing.webp" alt="Person editing slides in FreeShow" />
			</Card>
		</div>
	</div>

	<div class="row">
		<div class="image">
			<Card outline variant>
				<Image src="main/automated.webp" alt="Person working with FreeShow" />
			</Card>
		</div>

		<div class="text" style="align-self: center;">
			<h4>Timed & Automated Play</h4>
			<Feature icon="play" title="Autoplay">Set timers on slides for seamless transitions.</Feature>
			<Feature icon="timer" title="Countdowns">Easily let your congregation know when services will start with built-in countdowns.</Feature>
			<Feature icon="midi" title="MIDI Controls">Receive MIDI commands to advance slides or send MIDI commands on slide change to trigger lighting and other changes.</Feature>
		</div>
	</div>
</Section>

<Section column style="padding: 0;gap: 0;">
	<Image src="special/flow-top.webp" alt="Esthetic waves start" draggable={false} borderRadius={false} />

	<div class="row" style="padding: 0 var(--margin);background-color: #980057;">
		<div class="text" style="align-self: center;padding: 30px 0;">
			<h4 style="text-align: var(--center-small-left-big);width: 100%;">Multiple Views</h4>
			<Feature icon="person" title="Simultaneous Outputs" white>Show the same presentation with different looks for your in-person audience, online audience, and a stage view for leaders.</Feature>
			<Feature icon="tv" title="Web Output" white>Users can connect to the presentation from their mobile devices. Perfect for pastor sermon notes or musicians.</Feature>
			<Feature icon="network" title="NDI Support" white>We fully support output over NDI. No need for converters or SDI cables to send your lyrics to the computer running your online stream.</Feature>
			<Feature icon="mobile" title="Remote Control" white>Allow your pastor or worship minister to control the show directly from their mobile device. Excellent for rehearsals or for smaller churches.</Feature>
		</div>

		<div class="image" style="filter: brightness(0.9);padding-top: 50px;">
			<Image src="special/devices.webp" alt="Person working with FreeShow" style="height: initial;" />
		</div>
	</div>

	<Image src="special/flow-bottom.webp" alt="Esthetic waves end" draggable={false} borderRadius={false} />
</Section>

<Section column style="gap: var(--gap);padding-bottom: calc(var(--section-padding) / 2);">
	<div class="circle" style="position: absolute;left: 0;top: 50%;transform: translateY(-15%);">
		<Image src="special/half-circle.webp" alt="Esthetic half circle" />
	</div>

	<div class="row">
		<Card outline variant bubble={1} style="--card-padding: var(--card-padding-big);width: var(--full-small-half-big);">
			<div class="image" style="margin: calc((var(--card-padding) - var(--outline-width)) * -1) calc((var(--card-padding) - var(--outline-width)) * -1) var(--card-padding) 0;">
				<Image src="preview/main_template.webp" alt="Preview of software. Drawer with templates open." />
			</div>

			<div style="display: flex;flex-direction: column;gap: 25px;position: relative;z-index: 1;">
				<h4>Template & Design</h4>
				<Feature icon="template" title="Sleek Templates">Modify your slide styles swiftly with a variety of templates.</Feature>
				<Feature icon="layout" title="Dynamic Layouts">Resize and organize your display areas as per your requirement.</Feature>
			</div>
		</Card>

		<Card outline bubble={2} style="--card-padding: var(--card-padding-big);width: var(--full-small-half-big);">
			<div style="display: flex;flex-direction: column;gap: 25px;position: relative;z-index: 1;">
				<h4>Create & Show</h4>
				<Feature icon="magic" title="Create Impactful Shows">Easily arrange slides and layouts for lyrics, presentations, events, and more, ensuring a smooth flow in your presentations.</Feature>
				<Feature icon="image" title="Dynamic Media Integration">Effortlessly drag images and videos into your slides as backgrounds, enhancing the visual appeal of your presentations.</Feature>
			</div>

			<div class="image" style="margin: var(--card-padding) 0 calc((var(--card-padding) - var(--outline-width)) * -1) 0;">
				<Image src="preview/main_create.webp" alt="Preview of software. Drawer with templates open." />
			</div>
		</Card>
	</div>

	<Card outline bubble={3} style="--card-padding: var(--card-padding-big);display: flex;flex-direction: var(--column-small-row-big);width: 100%;">
		<div class="image" style="z-index: 1;margin: calc((var(--card-padding) - var(--outline-width)) * -1) var(--card-padding) var(--card-padding) calc((var(--card-padding) - var(--outline-width)) * -1)">
			<Image src="preview/main_scripture.webp" alt="Preview of software. Drawer with templates open." />
		</div>

		<div class="text" style="align-self: center;z-index: 1;">
			<h4>Scripture & Lyric Integration</h4>
			<Feature icon="bible" title="Scripture Integration">Easily look up passages and turn them into slides with one click.</Feature>
			<Feature icon="music" title="Lyric Integration">It's no longer necessary to manually enter the lyrics to all the songs. Just enter the title and click search and be amazed as the slides are automatically created for you.</Feature>
		</div>
	</Card>
</Section>

<!-- this should be a different image -->
<Section column background={{ src: "main/working.webp", alt: "Distant background of person working on FreeShow" }} style="padding-top: calc(var(--section-padding) / 2);">
	<div class="row" style="flex-direction: var(--inverted-column-small-row-big);">
		<div class="text" style="align-self: center;">
			<h4>Plays Well With Others</h4>
			<Feature icon="import" title="Import">Import Presentations from PowerPoint, ProPresenter, EasyWorship, OpenSong, and other platforms.</Feature>
			<Feature icon="export" title="Export">You're not locked in and can export your content in multiple formats at any time.</Feature>
			<Feature icon="cloud" title="Cloud Sync">Allow multiple people within your church to work on presentations from different computers with cloud sync.</Feature>
		</div>

		<div class="image">
			<Card outline>
				<Image src="main/plays-well.webp" alt="Computer sitting on desk with FreeShow open" />
			</Card>
		</div>
	</div>

	<div class="download" style="align-items: center;">
		<Download />
	</div>
</Section>

<Section white column>
	<div class="row" style="align-items: center;">
		<div class="head" style="width: var(--text-div-fill);text-align: var(--center-small-left-big);">
			<Icon icon="compare" />
			<h2 id="compares">How FreeShow <span class="gradient">Compares</span></h2>
		</div>

		<p style="width: 100%;">
			Unlike other presentation software providers, we are not a business. We are a non-profit that exists solely to serve churches. Our biggest difference is in the name. FreeShow is and always will be free. This is possible due to the
			generous support of donors.
			<a href="https://churchapps.org/contribute" target="_blank">Learn more.</a>
			That isn't the only way FreeShow stands above the alternatives. It is also a very feature-rich application. Here is how we stack up.
		</p>
	</div>

	<div class="compare" style="position: relative;">
		<Compare maxItems={14} />

		<div class="circle" style="position: absolute;bottom: -45px;right: -45px;width: 120px;opacity: 0.7;">
			<Image src="special/circle-bg.webp" alt="Design circle" />
		</div>
	</div>

	<Link link="/features" title="See more features of this program" primary style="align-self: center;">View All</Link>
</Section>

<Section style="padding-bottom: calc(var(--section-padding) / 2);" center>
	<div class="head" style="align-self: center;">
		<Icon icon="quote" />
		<h2 id="reviews">What Others <span class="gradient">are Saying</span></h2>
	</div>

	<Reviews />
</Section>

<!-- <Section style="padding: 0;"> -->
<Image src="special/footer-divider-bg.webp" alt="Divider" />

<!-- </Section> -->

<Section style="padding: calc(var(--section-padding) / 2) var(--margin);" center>
	<Badges />
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
		align-items: var(--center-small-start-big);
	}

	.top-content {
		width: var(--full-small-half-big);
		display: flex;
		flex-direction: column;
		align-items: var(--center-small-start-big);
		text-align: var(--center-small-left-big);
		padding-top: 30px;
	}

	/* media */

	@media only screen and (min-width: 400px) {
		.top-content {
			padding-top: 10px;
		}

		.image {
			max-width: 50%;
		}
	}
</style>
