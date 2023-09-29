<script>
    import Button from "../../components/Button.svelte"
    import Icon from "../../components/Icon.svelte"
    import { onMount } from "svelte"
    import { Button as Link } from "@svelteness/kit-docs"

    /** @type any */
    let data = null

    onMount(async () => {
        fetch("https://api.github.com/repos/ChurchApps/FreeShow/releases")
            .then((response) => response.json())
            .then((a) => {
                console.log(a)
                let current = a.filter((/** @type any */ a) => a.draft === false && a.prerelease === false)[0]
                data = current
            })
            .catch((error) => {
                console.warn(error)
                return []
            })
    })

    /** @type boolean */
    let counter = false

    function convertSize(/** @type number */ bytes, decimals = 0) {
        if (bytes <= 0) return "0 Bytes"

        const k = 1024
        const dm = decimals < 0 ? 0 : decimals
        const sizes = ["Bytes", "KB", "MB", "GB"]
        const i = Math.floor(Math.log(bytes) / Math.log(k))
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
    }

    function toDate(/** @type string */ d) {
        /** @type Date */
        let date = new Date(d)
        let year = date.getFullYear()
        let month = ("0" + (date.getMonth() + 1)).slice(-2)
        let day = ("0" + date.getDate()).slice(-2)
        return `${day}.${month}-${year}`
    }
</script>

<svelte:head>
    <title>FreeShow | All downloads</title>
</svelte:head>

<main style="padding-top: 60px;min-height: 100%;">
    {#if data}
        <div style="padding: 20px;">
            <h2 on:dblclick={() => (counter = !counter)}>
                {data.tag_name}
                <span style="color: rgb(var(--kd-color-inverse));opacity: 0.5;font-size: 0.5em;font-weight: normal;">{toDate(data.published_at)}</span>
            </h2>
        </div>
        <div class="assets">
            {#each data.assets.filter((/** @type any */ a) => !a.name.includes(".blockmap") && !a.name.includes(".yml") && !a.name.includes(".png")) as asset}
                <a href={asset.browser_download_url}>
                    <Button style="width: 100%;">
                        <div style="flex: 1;">
                            <span>
                                {#if asset.name.includes("mac") || asset.name.includes(".dmg")}
                                    <Icon id="mac" />
                                {:else if asset.name.includes("linux") || asset.name.includes(".AppImage") || asset.name.includes(".deb")}
                                    <Icon id="linux" />
                                {:else if asset.name.includes("windows") || asset.name.includes(".exe")}
                                    <Icon id="windows" />
                                {:else}
                                    <Icon id="download" />
                                {/if}
                            </span>
                            <span class="name">
                                {asset.name}
                            </span>
                        </div>
                        <div>
                            {convertSize(asset.size)}
                            {#if counter}
                                <span style="min-width: 50px;text-align: right;">
                                    {asset.download_count}
                                </span>
                            {/if}
                        </div>
                    </Button>
                </a>
            {/each}

            <span style="margin-top: 10px;margin-left: 10px;">
                <Link href="https://github.com/ChurchApps/FreeShow/releases" target="_blank">-> See all releases</Link>
            </span>
        </div>
        <br />
        <div class="changelog">
            <h3 style="font-weight: bold;font-size: 1.8em;">What's new</h3>
            {@html data.body.replaceAll("\n", "<br>")}
        </div>
        <br />
    {:else}
        <div style="text-align: center;font-size: 1.3em;margin: 20px;">Loading version...</div>

        <span style="margin-top: 10px;">
            <Link href="https://github.com/ChurchApps/FreeShow/releases" target="_blank">-> See all releases</Link>
        </span>
    {/if}
</main>

<style>
    h2 {
        color: var(--secondary);
        font-size: 2em;
        font-weight: bold;
        /* text-align: center; */
    }

    main :global(button) {
        justify-content: space-between;
    }
    main :global(button div) {
        display: flex;
        overflow: hidden;
        white-space: nowrap;
        gap: 10px;
    }

    .name {
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .assets {
        display: flex;
        flex-direction: column;
    }

    a {
        text-decoration: none;
        opacity: 1;
    }

    .changelog {
        padding: 15px;
    }

    /* @media only screen and (min-width: 1000px) {
        main {
            padding: 20px 300px;
        }
    } */
</style>
