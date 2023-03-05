<script>
    import { Button as Link } from "@svelteness/kit-docs"
    import Button from "./Button.svelte"
    import Fullscreen from "./Fullscreen.svelte"

    /** @type number */
    export let index = -1

    const images = [
        {
            src: "/preview/show.webp",
            name: "Show",
            description: "Create a show for lyrics, presentations, events and more. Arrange slides, and create different layouts for the same song.",
        },
        {
            src: "/preview/media.webp",
            name: "Media",
            description: "Show images and videos easily from the drawer. Drag them on your slides to set as background.",
        },
        {
            src: "/preview/edit.webp",
            name: "Edit",
            description: "A powerful editor. Change the text font, size or color. Add outline and shadows, and much more. The possibilities are endless (almost)!",
        },
        {
            src: "/preview/autoplay.webp",
            name: "Autoplay",
            description: "Set timer on slides to continue to next.",
        },
        {
            src: "/preview/timers.webp",
            name: "Timer",
            description: "Add countdowns or a timer.",
        },
        {
            src: "/preview/show_2.webp",
            name: "Layout",
            description: "Resize different areas after your needs.",
        },
        {
            src: "/preview/player_youtube.webp",
            name: "YouTube player",
            description: "No more dragging windows around or downloading videos. Just paste the link and play the video.",
        },
        {
            src: "/preview/player_vimeo.webp",
            name: "Vimeo player",
            description: "Same as YouTube player, just for Vimeo videos.",
        },
        {
            src: "/preview/show_edit.webp",
            name: "Edit mode",
            description: "Edit text on the fly with this mode.",
        },
        {
            src: "/preview/show_lyrics.webp",
            name: "Lyrics mode",
            description: "Sing along with the lyrics mode.",
        },
        {
            src: "/preview/show_text.webp",
            name: "Text mode",
            description: "Easy copy/paste using text mode.",
        },
        {
            src: "/preview/templates.webp",
            name: "Templates",
            description: "Change the style of your slides with the click of a button.",
        },
        {
            src: "/preview/stage.webp",
            name: "Stage",
            description: "Connect from any local device, by entering the IP and a set port. Create and edit multiple stage views.",
        },
        {
            src: "/preview/draw.webp",
            name: "Draw",
            description: "Shine a light on your slides while presenting. Focus the audience, play with particles, or draw a beautiful drawing.",
        },
        {
            src: "/preview/calendar.webp",
            name: "Calendar",
            description: "A calendar for all your events. Select them and create a show with info about upcomming events. Or schedule shows to autoplay.",
        },
        {
            src: "/preview/scripture.webp",
            name: "Scripture",
            description: "Import your own local bibles, or choose from over 200 bibles provided by API.Bible.",
        },
        {
            src: "/preview/output.webp",
            name: "Settings",
            description: "Customize and manage different outputs.",
        },
        {
            src: "/preview/outputs.webp",
            name: "Multiple outputs",
            description: "Easy control of multiple different outputs.",
        },
        // {
        //     src: "/preview/themes_0.webp",
        //     name: "Themes",
        //     description: "Create you own themes, tweak the colors and UI to the extreme.",
        // },
        {
            src: "/preview/themes_1.webp",
            name: "",
            description: "",
        },
        {
            src: "/preview/themes_2.webp",
            name: "",
            description: "",
        },
        {
            src: "/preview/themes_3.webp",
            name: "",
            description: "",
        },
        {
            src: "/preview/themes_4.webp",
            name: "",
            description: "",
        },
        {
            src: "/preview/themes_5.webp",
            name: "",
            description: "",
        },
        // {
        //     src: "/preview/themes_6.webp",
        //     name: "",
        //     description: "",
        // },
        {
            src: "/preview/themes_7.webp",
            name: "",
            description: "",
        },
        {
            src: "/preview/themes_8.webp",
            name: "",
            description: "",
        },
        {
            src: "/preview/themes_9.webp",
            name: "",
            description: "",
        },
        {
            src: "/preview/themes_10.webp",
            name: "",
            description: "",
        },
        {
            src: "/preview/history.webp",
            name: "History",
            description: "See all of the changes made, and revert them.",
        },
        {
            src: "/preview/import.webp",
            name: "Import",
            description: "Import all your old songs.",
        },
        {
            src: "/preview/export.webp",
            name: "Export",
            description: "Export as PDF or another format.",
        },
        {
            src: "/preview/remote_show.webp",
            name: "Remote",
            description: "Connect from any local device, by entering the IP and a set port.",
        },
        // {
        //     src: "/preview/remote_preview.webp",
        //     name: "Remote preview",
        //     description: "",
        // },
        // {
        //     src: "/preview/remote_project.webp",
        //     name: "Remote projects",
        //     description: "",
        // },
        {
            src: "/preview/remote_lyrics.webp",
            name: "Lyrics view",
            description: "Different modes for easy control.",
        },
        {
            src: "/preview/controller.webp",
            name: "Controller",
            description: "Easy presentation controller for anybody to use.",
        },
        // {
        //     src: "/preview/stage_view.webp",
        //     name: "Stage",
        //     description: "Connect to stage from any webbrowser.",
        // },
    ]

    $: if (index >= 0 && !images[index]) index = -1

    let showMore = false
</script>

{#if index >= 0}
    <Fullscreen image={images[index]} bind:index />
{/if}

<h2>Preview</h2>
<div class="previews">
    {#each images as image, i}
        <!-- {#if i > 0}
            <hr />
        {/if} -->
        {#if showMore || i < 18}
            <div>
                <img on:click={() => (index = i)} src={image.src} alt={image.name} loading="lazy" />
                {#if image.name || image.description}
                    <span style="width: 100%;">
                        <h3>{image.name}</h3>
                        <p>{image.description}</p>
                    </span>
                {/if}
            </div>
        {/if}
    {/each}
    <span class="more">
        {#if !showMore}
            <Button on:click={() => (showMore = true)}>Show more</Button>
        {:else}
            <Link href="/docs/features">-> More features</Link>
        {/if}
    </span>
</div>

<style>
    h2 {
        color: var(--secondary);
        /* text-align: center; */
        font-size: 1.5em;
        margin-bottom: 5px;
        text-align: center;
    }

    img {
        width: 100%;
        /* height: 100%; */
        object-fit: cover;
        user-select: none;
    }

    img:hover {
        filter: brightness(1.2);
    }

    .more {
        margin-top: 20px;
    }

    /* hr {
        height: 3px;
        background-color: var(--primary-darker);
        width: 100%;
        border: none;
    } */

    .previews {
        display: flex;
        /* flex-direction: column; */
        flex-wrap: wrap;
        /* gap: 30px; */
        justify-content: center;
    }
    .previews div:nth-child(odd) {
        background-color: rgb(var(--kd-color-elevate));
    }
    .previews div {
        display: flex;
        /* justify-content: space-between; */
        flex-direction: column;
        gap: 10px;
        padding: 10px;
        align-items: center;
        width: 100%;
    }
    .previews span:not(.more),
    .previews img {
        max-height: 300px;
        object-fit: contain;
    }

    .previews span:not(.more) p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .width {
        display: flex;
        justify-content: center;
        gap: 10px;
    }
    /* .width img {
        max-width: 50%;
    } */

    @media only screen and (min-width: 800px) {
        /* h2 {
            text-align: initial;
        } */

        .previews div {
            /* flex-direction: row; */
            width: 33%;
        }

        .previews span:not(.more) p {
            white-space: initial;
        }

        /* .previews span,
        .previews img,
        .width {
            width: 50%;
        } */
        .width img {
            width: initial;
        }
    }
</style>
