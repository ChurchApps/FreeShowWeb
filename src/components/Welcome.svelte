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
    onMount(() => {
        os = getOS()

        fetch("https://api.github.com/repos/vassbo/freeshow/releases?per_page=200")
            .then((response) => response.json())
            .then((a) => {
                if (Array.isArray(a)) countDownloads(a)
            })
            .catch((error) => {
                console.warn(error)
                return []
            })

        function countDownloads(/** @type any[] */ releases) {
            downloads = releases.reduce((/** @type number */ total, /** @type any */ data) => {
                let currentVersionDownloads = data.assets.reduce((/** @type number */ total, /** @type any */ asset) => total + asset.download_count, 0)
                return total + currentVersionDownloads
            }, 0)

            let current = releases.filter((/** @type any */ a) => a.draft === false)[0]
            data = current
        }
    })

    function startDownload() {
        if (!localStorage.getItem("purchased")) return (chooseCustomPrice = true)

        window.open(downloadURL, "_self")
        downloading()
    }

    function download() {
        if (!chosenOption) return
        if (chosenOption === "pay") return window.open("https://buy.stripe.com/aEU8zL9s38X0bxmbIJ", "_self")
        if (chosenOption === "yearly") return window.open("https://buy.stripe.com/cN26rDcEfa14cBq5km", "_self")

        chooseCustomPrice = false
        window.open(downloadURL, "_self")
        downloading()
    }

    function downloading(msg = "<h2>Thank you for choosing FreeShow! ;)</h2>") {
        message = msg
        if (os === "Mac") message += '<span style="font-size: 0.8em;opacity: 0.6;">Note that on MacOS you will get a warning when installing currently,<br>because I have not purchased any code signing keys yet.</span>'
        if (os === "Windows") message += '<span style="font-size: 0.8em;opacity: 0.6;">Note that on Windows you will get a warning when installing currently,<br>because I have not purchased any code signing keys yet.</span>'
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
        const query = window.location.href.split("/?")[1] || ""

        // /?v0.1.0
        if (query[0] === "v" && query.length > 2 && query.length < 8) {
            let newVersion = data.tag_name
            if (query !== newVersion) message = "<h2>There is a new update! :D</h2>" + query + " -> " + newVersion + "<br><br><b>What's new</b>" + data.body.replaceAll("\n", "<br>")
            else message = "You are up to date! ;)"
            active = true
        }

        // /?download
        if (query === "download") {
            startDownload()
        }

        // /?payment_successful
        if (query === "payment_successful") {
            localStorage.setItem("purchased", "true")
            window.open(downloadURL, "_self")
            downloading("<h2>Thank you for being awesome! :)</h2>Your download should begin shortly.<br>")
        }
    }

    let chooseCustomPrice = false
    let chosenOption = ""
</script>

<Popup bind:active>
    {@html message}
    <Button on:click={() => (active = false)} center>Okay</Button>
</Popup>

<Popup bind:active={chooseCustomPrice}>
    <h2 style="text-align: center;color: var(--text);font-size: 2em;">Download FreeShow</h2>

    <div class="choose">
        <Button style="border: 4px solid var(--primary-darkest);padding: 5px;" border={chosenOption === "pay"} on:click={() => (chosenOption = "pay")}>
            <span><h3 style="color: var(--secondary);font-size: 1.7em;min-width: 110px;">$19</h3></span>
            <span style="text-align: left;max-width: 40vw;">
                <h6 style="margin-bottom: 2px;">Custom price</h6>
                <p style="opacity: 0.7;font-size: 0.7em;">Pay what you think this software is actually worth, <br />and support the development of this software.</p>
            </span>
        </Button>
        <Button style="border: 4px solid var(--primary-darkest);padding: 5px;" border={chosenOption === "yearly"} on:click={() => (chosenOption = "yearly")}>
            <span><h3 style="color: var(--secondary);font-size: 1.7em;min-width: 110px;">$25</h3></span>
            <span style="text-align: left;max-width: 40vw;">
                <h6 style="margin-bottom: 2px;">Yearly subscription</h6>
                <p style="opacity: 0.7;font-size: 0.7em;">Ensure the continued development of this software, <br />and support the developer yearly.</p>
            </span>
        </Button>
        <Button style="border: 4px solid var(--primary-darkest);padding: 5px;" border={chosenOption === "free"} on:click={() => (chosenOption = "free")}>
            <span><h3 style="color: var(--secondary);font-size: 1.7em;min-width: 110px;">$0</h3></span>
            <span style="text-align: left;max-width: 40vw;">
                <h6 style="margin-bottom: 5px2">Get for free</h6>
                <p style="opacity: 0.7;font-size: 0.7em;">This software will always be free to download, <br />but you will not support the development.</p>
            </span>
        </Button>
    </div>

    <Button disabled={!chosenOption} on:click={download} center>{chosenOption === "pay" ? "Purchase" : chosenOption === "yearly" ? "Subscribe" : chosenOption === "free" ? "Download" : "Choose an option"}</Button>
</Popup>

<section style="height: calc(100dvh - var(--kd--navbar-height));">
    <Overlay color="#292c36">
        <!-- <img src="./preview/v0.0.1.png" alt="Preview of program" /> -->
        <img src="/program_mac.webp" alt="Preview of program on computer" />
    </Overlay>

    <div class="main">
        <h1 class="title">FreeShow</h1>
        <p style="margin-bottom: 40px;">
            A user-friendly and <Link href="https://github.com/vassbo/freeshow" target="_blank" rel="noreferrer" title="View Source Code on GitHub">open-source</Link> presenter built on
            <Link href="https://www.electronjs.org/" target="_blank" rel="noreferrer" title="Electron website">electron</Link>.
        </p>
        <!-- <a href={downloadURL} class="link" data-disabled={os === "Android" || os === "iOS"}> -->
        <Button on:click={startDownload} tabindex={-1} disabled={os === "Android" || os === "iOS"} style="width: 100%;" outline big center>
            {#if os === "Android" || os === "iOS"}
                <Icon id="download" size={1.2} white />
            {:else}
                <Icon id={os.toLowerCase()} size={1.2} white />
            {/if}
            <span style="font-weight: bold;font-size: 1.5em;padding-left: 10px;">Download</span>
            <span style="opacity: 0.6;font-size: 1.2em;">{data?.tag_name || ""}</span>
        </Button>
        <!-- </a> -->
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

    /* .link {
        color: var(--text);
        text-decoration: none;
    } */

    .downloads {
        font-size: 3em;
        font-weight: bold;
    }

    .choose {
        display: flex;
        flex-direction: column;
        gap: 5px;
        margin: 20px 0;
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
