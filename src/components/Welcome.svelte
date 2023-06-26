<script>
    import { getOS } from "../../src/scripts/getOS"
    import { onMount } from "svelte"
    import Button from "./Button.svelte"
    import Icon from "./Icon.svelte"
    import Overlay from "./Overlay.svelte"
    import { Button as Link } from "@svelteness/kit-docs"
    import Popup from "./Popup.svelte"

    let os = ""

    /** @type any */
    let data = null
    let downloads = 0
    onMount(async () => {
        os = getOS()
        fetch("https://api.github.com/repos/vassbo/freeshow/releases")
            .then((response) => response.json())
            .then((a) => {
                downloads = a.reduce((/** @type number */ total, /** @type any */ data) => {
                    let currentVersionDownloads = data.assets.reduce((/** @type number */ total, /** @type any */ asset) => total + asset.download_count, 0)
                    return total + currentVersionDownloads
                }, 0)

                let current = a.filter((/** @type any */ a) => a.draft === false)[0]
                data = current
            })
            .catch((error) => {
                console.warn(error)
                return []
            })
    })

    function downloading() {
        message = "Thank you! ;)<br><br>Note that on Windows & MacOS you will get a warning when installing currently,<br>because I haven't purchased any code signing keys yet."
        active = true
    }

    let downloadURL = "/downloads"
    /** @type any */
    const extensions = {
        Mac: ".dmg",
        Windows: ".exe",
        Linux: ".AppImage",
    }

    let message = ""
    let active = false

    $: if (data) {
        downloadURL = data.assets.find((/** @type any */ { name }) => name.includes(extensions[os]))?.browser_download_url || ""

        // check version
        const query = window.location.href.split("/?v")
        if (query.length > 1) {
            let oldVersion = data.tag_name.slice(1, data.tag_name.length)
            if (query[1] !== oldVersion) message = "<h2>There is a new update! :D</h2>" + query[1] + " -> " + oldVersion + "<br><br><b>What's new</b>" + data.body.replaceAll("\n", "<br>")
            else message = "You are up to date! ;)"
            active = true
        }
    }
</script>

<Popup {active}>
    {@html message}
    <Button on:click={() => (active = false)} center>Okay</Button>
</Popup>

<section style="height: calc(100dvh - var(--kd--navbar-height));">
    <Overlay color="#2d313b">
        <!-- <img src="./preview/v0.0.1.png" alt="Preview of program" /> -->
        <img src="/program_mac.webp" alt="Preview of program on computer" />
    </Overlay>

    <div class="main">
        <h1 class="title">FreeShow</h1>
        <p style="margin-bottom: 40px;">
            A free and <Link href="https://github.com/vassbo/freeshow" target="_blank" rel="noreferrer" title="View Source Code on GitHub">open-source</Link> presenter built on
            <Link href="https://www.electronjs.org/" target="_blank" rel="noreferrer" title="Electron website">electron</Link> for anyone to use with ease.
        </p>
        <a on:click={downloading} href={downloadURL} class="link" data-disabled={os === "Android" || os === "iOS"}>
            <Button tabindex={-1} disabled={os === "Android" || os === "iOS"} style="width: 100%;" outline big center>
                {#if os === "Android" || os === "iOS"}
                    <Icon id="download" size={1.2} white />
                {:else}
                    <Icon id={os.toLowerCase()} size={1.2} white />
                {/if}
                <span style="font-weight: bold;font-size: 1.5em;padding-left: 10px;">Download</span>
                <span style="opacity: 0.6;font-size: 1.2em;">{data?.tag_name || ""}</span>
            </Button>
        </a>
        <p>Detected {os === "Mac" ? "MacOS" : os}. <Link href="/downloads" title="Downloads page">Download another version.</Link></p>
        <div style="display: flex;justify-content: center;gap: 20px;margin-top: 20px;">
            <!-- <p>Windows, Mac or Linux</p> -->
            <span title="Windows"><Icon id="windows" size={2} white /></span>
            <span title="Mac"><Icon id="mac" size={2} white /></span>
            <span title="Linux"><Icon id="linux" size={2} white /></span>
        </div>
    </div>
</section>

<hr style="height: 10px;position: absolute;left: 0;" />

<section style="align-items: center;line-height: 4em;padding: 40px 0px;">
    <h2 style="line-height: 1.5em;">All time downloads</h2>
    <p class="downloads">{downloads}</p>
</section>

<style>
    section {
        /* height: 100vh; */
        justify-content: center;
        flex-direction: row;

        width: 100%;
        padding: 20px;
        display: flex;
        flex-direction: column;

        overflow: hidden;
    }

    :global(.on-this-page) {
        display: none !important;
    }

    /* popup */
    .popup :global(.not-prose.relative) {
        width: 100%;
    }
    .popup :global(.absolute) {
        left: 0;
    }

    h1 {
        color: var(--secondary);
        text-align: center;
        font-size: 2.5em;
        line-height: initial;
        opacity: 1;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    }

    h2 {
        color: var(--secondary);
        font-size: 1.5em;
    }

    h1.title {
        align-self: center;
        color: rgb(var(--kd-color-inverse));
        transition: color 0.3s;
        /* text-shadow: 1px 1px 5px rgb(0 0 0 / 50%); */
    }
    /* h1.title:hover {
      color: var(--secondary);
    } */

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        user-select: none;
    }

    .main {
        z-index: 1;
        display: flex;
        flex-direction: column;
        align-self: center;
        width: 100%;
        position: relative;
        overflow: auto;
    }

    .link {
        color: var(--text);
        text-decoration: none;
    }

    .downloads {
        font-size: 3em;
        font-weight: bold;
    }

    /* media */

    @media only screen and (min-width: 800px) {
        h1 {
            text-align: initial;
        }

        h1 {
            font-size: 5em;
        }

        h2 {
            font-size: 2em;
        }

        .main {
            width: initial;
        }

        .downloads {
            font-size: 5em;
        }
    }

    @media only screen and (min-width: 1200px) {
        h1 {
            font-size: 8em;
        }
    }

    @media only screen and (max-height: 500px) {
        h1 {
            font-size: 4em;
        }
        .main {
            font-size: 0.8em;
        }
    }
    @media only screen and (max-height: 300px) {
        h1 {
            font-size: 2em;
        }
        .main {
            font-size: 0.6em;
        }
    }
</style>
