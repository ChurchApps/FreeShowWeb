<script lang="ts">
  import { onMount } from "svelte"
  import Button from "../components/Button.svelte"
  import Donate from "../components/Donate.svelte"
  import Features from "../components/Features.svelte"
  import Footer from "../components/Footer.svelte"
  import Header from "../components/Header.svelte"
  import Icon from "../components/Icon.svelte"
  // import Icon from "../components/Icon.svelte"
  import Overlay from "../components/Overlay.svelte"
  import Popup from "../components/Popup.svelte"
  import Preview from "../components/Preview.svelte"
  import Section from "../components/Section.svelte"
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

  function downloading() {
    message =
      "Thank you for downloading! ;)<br><br>Keep in mind that you will get a warning when installing right now,<br>because I have not purchased any code signing keys yet. (Around $200 /yr)<br><br><p>Also, the first people that <a target='_blank' href='https://reviews.capterra.com/new/251606/25c379b8-6a14-4583-bab4-d458913d407c'>review FreeShow on Capterra</a> will get a $20 Amazon gift card by Capterra.<br>Honest reviews are appreciated, it would help other people find the program.</p>"
    active = true
  }

  let downloadURL: string = "/downloads"
  const extensions: any = {
    Mac: ".dmg",
    Windows: ".exe",
    Linux: ".AppImage",
  }

  let message: string = ""
  let active: boolean = false

  $: if (data) {
    downloadURL = data.assets.find((a) => a.name.includes(extensions[os]))?.browser_download_url || ""

    // check version
    const query = window.location.href.split("/?v")
    if (query.length > 1) {
      let oldVersion = data.tag_name.slice(1, data.tag_name.length)
      if (query[1] !== oldVersion)
        message = "<h3>There is a new update! :D</h3>" + query[1] + " -> " + oldVersion + "<br><br><b>What's new</b>" + data.body.replaceAll("\n", "<br>")
      else message = "You are up to date! ;)"
      active = true
    }
  }

  // header scroll
  let top: boolean = true
  function scroll() {
    if (window.scrollY === 0) top = true
    else top = false
  }
</script>

<svelte:head>
  <title>FreeShow — A free and open source presenter</title>
</svelte:head>

<svelte:window on:scroll={scroll} />

<main>
  <Popup {active}>
    {@html message}
    <Button on:click={() => (active = false)} center>Okay</Button>
  </Popup>
  <Header {top} />

  <Section style="height: 100vh;justify-content: center;flex-direction: row;position: relative;">
    <Overlay color="#2d313b">
      <!-- <img src="./preview/v0.0.1.png" alt="Preview of program" /> -->
      <img src="./preview/program_mac.jpg" alt="Preview og program on computer" />
    </Overlay>
    <div class="main">
      <h1 class="title">FreeShow</h1>
      <p>
        A free and <a href="https://github.com/vassbo/freeshow" target="_blank" title="View Source Code on GitHub">open-source</a> presenter built on
        <a href="https://www.electronjs.org/" target="_blank" title="Electron website">electron</a> for anyone to use with ease.
      </p>
      <br />
      <br />
      <a on:click={downloading} class="link" href={downloadURL} disabled={os === "Android" || os === "iOS"}>
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
      <p>Detected {os === "Mac" ? "Mac OS" : os}. <a href="/downloads" title="Downloads page">Download for another OS?</a></p>
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
    <h2>Trailer</h2>
    <iframe
      style="aspect-ratio: 16/9;"
      src="https://www.youtube.com/embed/6zArghvgUok"
      title="Introducing FreeShow"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </Section>

  <hr />

  <Preview />

  <hr />

  <Section>
    <h2>More features</h2>
    <Features />
  </Section>

  <hr />

  <Section>
    <h2>Available on UbuntuCE</h2>
    <p><a href="https://ubuntuce.com/" target="_blank">UbuntuCE</a> is a a Linux-based free and open source operating system geared towards Christians.</p>
    <p>And it comes preinstalled with many useful softwares and tools, including FreeShow.</p>
  </Section>

  <hr />

  <Section>
    <h2>It's free!</h2>
    Yes you heard it right. It's free for everyone to use anywhere.
    <br />
    Why? Becuase all the "good" alternatives was way too expensive and some was hard and time consuming to use.
    <br />
    What are you waiting for? Download it and try it out!
    <!-- Why free? Trustworthy? Donate!? -->
  </Section>

  <hr />

  <Section>
    <h2>Donate?</h2>
    <p>Unfortunatly it's not free to create a program like this! It takes much time, so a small or big donation would help out a lot.</p>
    <p>Here is a list of all of my current expenses:</p>
    <ul style="list-style: inside;">
      <li>Domain: $25 /yr</li>
      <li>Windows code sigining: About $80 /yr (Not purchased yet)</li>
      <li>Mac code sigining: $129 /yr (Not purchased yet)</li>
      <!-- <li>Potential bible api: $X /yr</li> -->
    </ul>
    <p>Total is at least $230 every year</p>
    <p>You can donate directly bank to bank: <span title="My account number" style="font-weight: bold;">3335 29 03928</span>. Or via PayPal:</p>
    <Donate />
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

  /* media */

  @media only screen and (min-width: 800px) {
    h1,
    h2 {
      text-align: initial;
    }

    h1 {
      font-size: 5em;
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
