<script lang="ts">
  import Fullscreen from "../components/Fullscreen.svelte"
  import { onMount } from "svelte"
  import Button from "../components/Button.svelte"
  import Features from "../components/Features.svelte"
  import Footer from "../components/Footer.svelte"
  import Header from "../components/Header.svelte"
  // import Icon from "../components/Icon.svelte"
  import Overlay from "../components/Overlay.svelte"
  import Section from "../components/Section.svelte"
  import Icon from "../components/Icon.svelte"
  import { getOS } from "../scripts/getOS"

  let os: string = ""

  let data: any = null
  onMount(async () => {
    os = getOS()
    fetch("https://api.github.com/repos/vassbo/freeshow/releases")
      .then((response) => response.json())
      .then((a) => {
        let current = a.filter((a) => a.draft === false)[0]
        data = current
      })
      .catch((error) => {
        console.warn(error)
        return []
      })
  })

  let downloadURL: string = "https://github.com/vassbo/freeshow/releases"
  const extensions: any = {
    MacOS: ".dmg",
    Windows: ".exe",
    Linux: ".AppImage",
  }
  $: if (data) {
    downloadURL = data.assets.find((a) => a.name.includes(extensions[os]))?.browser_download_url || ""
  }

  export let preview: boolean = false

  // header scroll
  let top: boolean = true
  function scroll() {
    if (window.scrollY === 0) top = true
    else top = false
  }
</script>

<svelte:window on:scroll={scroll} />

<main>
  <Header {top} />

  {#if preview}
    <Fullscreen src="../../static/preview/v0.0.1.png" alt="Preview of program" bind:preview />
  {/if}

  <Section style="height: 100vh;justify-content: center;flex-direction: row;position: relative;">
    <Overlay color="#2d313b">
      <!-- <img src="../../static/preview/v0.0.1.png" alt="Preview of program" /> -->
      <img src="../../static/preview/program_mac.jpg" alt="Preview og program on computer" />
    </Overlay>
    <div style="z-index: 1;display: flex;flex-direction: column;align-self: center;">
      <h1 class="title">FreeShow</h1>
      <p>A free and <a href="https://github.com/vassbo/freeshow" target="_blank" title="View Source Code on GitHub">open source</a> presenter for anyone to use with ease.</p>
      <br />
      <br />
      <a class="link" href={downloadURL} disabled={os === "Android" || os === "iOS"}>
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
      <p>Detected {os === "Mac" ? "Mac OS" : os}. <a href="/downloads">Download for another OS?</a></p>
      <br />
      <div style="display: flex;justify-content: center;gap: 20px;">
        <!-- <p>Windows, Mac or Linux</p> -->
        <span title="Windows"><Icon id="windows" size={2} white /></span>
        <span title="Mac"><Icon id="mac" size={2} white /></span>
        <span title="Linux"><Icon id="linux" size={2} white /></span>
      </div>
    </div>
    <!-- <div>
      <img src="../../static/preview/program_mac.jpg" alt="Preview og program on computer" />
    </div> -->
  </Section>

  <hr style="height: 10px;" />

  <Section>
    <h2>Preview</h2>
    <div on:click={() => (preview = true)}>
      <img src="../../static/preview/v0.0.1.png" alt="Preview of program" />
    </div>
  </Section>

  <hr />

  <Section>
    <h2>Features</h2>
    <Features />
  </Section>

  <hr />

  <Section>
    <h2>It's free!</h2>
    Why free? Trustworthy? Donate!?
  </Section>

  <Footer />
</main>

<style>
  :global(:root) {
    --primary: #2d313b;
    --primary-lighter: #41444c;
    --primary-darker: #202129;
    --primary-darkest: #191923;
    --text: #f0f0ff;
    --textInvert: #131313;
    --secondary: #e6349c;
    --secondary-opacity: rgba(230, 52, 156, 0.5);
    --secondary-text: #f0f0ff;

    --hover: rgb(255 255 255 / 0.05);
    --focus: rgb(255 255 255 / 0.1);
    /* --active: rgb(230 52 156 / .8); */
  }

  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  main {
    /* width: 100vw;
    height: 100vh; */
    background-color: var(--primary);
    color: var(--text);
    font-family: Roboto, "Segoe UI", Tahoma, sans-serif;
    font-size: 1.2em;

    /* display: flex;
    flex-direction: column; */
    /* justify-content: space-between; */
  }

  h1,
  h2 {
    color: var(--secondary);
    text-align: center;
  }
  h1 {
    font-size: 2.5em;
  }

  h1.title {
    align-self: center;
    color: white;
    transition: color 0.3s;
    /* text-shadow: 1px 1px 5px rgb(0 0 0 / 50%); */
  }
  /* h1.title:hover {
    color: var(--secondary);
  } */

  @media only screen and (min-width: 800px) {
    h1,
    h2 {
      text-align: initial;
    }

    h1 {
      font-size: 5em;
    }
  }

  @media only screen and (min-width: 1200px) {
    h1 {
      font-size: 8em;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    user-select: none;
  }

  hr {
    height: 3px;
    background-color: var(--primary-darker);
    width: 100%;
    border: none;
  }

  a {
    color: var(--secondary);
    font-weight: bold;
    transition: background-color 0.3s;
  }
  a:hover {
    /* opacity: 0.9; */
    /* background-color: rgba(45, 49, 59, 0.9); */
    background-color: rgb(0 0 0 / 0.3);
  }

  .link {
    color: var(--text);
    text-decoration: none;
  }
</style>
