<script lang="ts">
  import Button from "../../components/Button.svelte"
  import { onMount } from "svelte"
  import Icon from "../../components/Icon.svelte"

  let data: any = null

  onMount(async () => {
    fetch("https://api.github.com/repos/vassbo/freeshow/releases")
      .then((response) => response.json())
      .then((a) => {
        console.log(a)
        let current = a.filter((a) => a.draft === false)[0]
        data = current
      })
      .catch((error) => {
        console.warn(error)
        return []
      })
  })

  let counter: boolean = false

  function convertSize(bytes: number, decimals: number = 0): string {
    if (bytes <= 0) return "0 Bytes"

    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
  }
</script>

<main>
  {#if data}
    <div style="padding: 20px;">
      <h2 on:dblclick={() => (counter = !counter)}>{data.tag_name}</h2>
      <p>{data.published_at}</p>
      {#if data.prerelease}
        This is currently in beta
      {/if}
    </div>
    <div class="assets">
      {#each data.assets.filter((a) => !a.name.includes(".blockmap") && !a.name.includes(".yml") && !a.name.includes(".png")) as asset}
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
                <span>
                  {asset.download_count}
                </span>
              {/if}
            </div>
          </Button>
        </a>
      {/each}
    </div>
  {/if}
</main>

<style>
  h2 {
    color: var(--secondary);
    font-size: 2em;
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
    color: var(--text);
    text-decoration: none;
  }

  @media only screen and (min-width: 1000px) {
    main {
      padding: 20px 300px;
    }
  }
</style>
