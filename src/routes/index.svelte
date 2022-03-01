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

  export let preview: null | string = null

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
    <Fullscreen src="./preview/{preview}.png" alt="Preview of program" bind:preview />
  {/if}

  <Section style="height: 100vh;justify-content: center;flex-direction: row;position: relative;">
    <Overlay color="#2d313b">
      <!-- <img src="./preview/v0.0.1.png" alt="Preview of program" /> -->
      <img src="./preview/program_mac.jpg" alt="Preview og program on computer" />
    </Overlay>
    <div class="main">
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
      <img src="./preview/program_mac.jpg" alt="Preview og program on computer" />
    </div> -->
  </Section>

  <hr style="height: 10px;" />

  <Section>
    <h2>Preview</h2>
    <div class="previews">
      <div>
        <span>
          <h3>Show</h3>
          <p>Create a show for a song, or a slideshow or some information. Add slides and arrange them, or disable them. Preview slides and have full control over the output.</p>
        </span>
        <img on:click={() => (preview = "show")} src="./preview/show.png" alt="Show" />
      </div>
      <hr />
      <div>
        <span>
          <h3>Edit</h3>
          <p>A powerful editor. Resize text, change font family or color, and much more. The posibilities are endless (almost)!</p>
        </span>
        <img on:click={() => (preview = "edit")} src="./preview/edit.png" alt="Edit" />
      </div>
      <hr />
      <div>
        <span>
          <h3>Stage</h3>
          <p>
            Create and edit multiple stage views. Add current and next slide, or a countdown timer. Anyone on the same WiFi can connect from the browser and choose a view, or you
            can disable or add a password to a view.
          </p>
        </span>
        <img on:click={() => (preview = "stage")} src="./preview/stage.png" alt="Stage" />
      </div>
      <hr />
      <div>
        <span>
          <h3>Draw</h3>
          <p>Highlight your slides while presenting, or draw on them.</p>
        </span>
        <img on:click={() => (preview = "draw")} src="./preview/draw.png" alt="Draw" />
      </div>
      <hr />
      <div>
        <span>
          <h3>Calendar</h3>
          <p>A calendar for all your events, select dates and create a show with info about upcomming events. Or schedule shows to play, or timers to start (TBA).</p>
        </span>
        <img on:click={() => (preview = "calendar")} src="./preview/calendar.png" alt="Calendar" />
      </div>
      <!-- groups -->
      <hr />
      <div>
        <span>
          <h3>Media</h3>
          <p>Show images/videos and add them to slides</p>
        </span>
        <img on:click={() => (preview = "media")} src="./preview/media.png" alt="Media" />
      </div>
      <hr />
      <div>
        <span>
          <h3>Stage View</h3>
          <p>Setup stage views on any device.</p>
        </span>
        <img on:click={() => (preview = "stage_view")} src="./preview/stage_view.png" alt="Stage View" />
      </div>
      <hr />
      <div>
        <span>
          <h3>Remote</h3>
          <p>Control your project from your phone</p>
        </span>
        <img on:click={() => (preview = "remote")} src="./preview/remote.png" alt="Remote" />
      </div>
      <hr />
      <div>
        <span>
          <h3>Lyrics</h3>
          <p>View live lyrics from the current show.</p>
        </span>
        <img on:click={() => (preview = "lyrics")} src="./preview/lyrics.png" alt="Lyrics" />
      </div>
    </div>
  </Section>

  <hr />

  <Section>
    <h2>Features (WIP)</h2>
    <Features />
  </Section>

  <hr />

  <Section>
    <h2>It's free!</h2>
    Yes you heard it right. It's free for everyone to use anywhere. Becuase I thought all the "good" alternatives was way too expensive and some was lacking some essential features.
    <br />
    What are you waiting for? Download it and try it out!
    <!-- Why free? Trustworthy? Donate!? -->
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
  h2,
  h3 {
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

  .main {
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-self: center;
    width: 100%;
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

  /* previews */
  .previews {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .previews div {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 10px;
  }
  .previews span,
  .previews img {
    max-height: 300px;
    object-fit: contain;
  }

  /* media */

  @media only screen and (min-width: 800px) {
    h1,
    h2 {
      text-align: initial;
    }

    h1 {
      font-size: 5em;
    }

    .previews div {
      flex-direction: row;
    }
    .previews span,
    .previews img {
      width: 50%;
    }

    .main {
      width: initial;
    }
  }

  @media only screen and (min-width: 1200px) {
    h1 {
      font-size: 8em;
    }
  }
</style>
