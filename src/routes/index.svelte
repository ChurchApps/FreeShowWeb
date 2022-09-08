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
  let downloads: number = 0
  onMount(async () => {
    os = getOS()
    fetch("https://api.github.com/repos/vassbo/freeshow/releases")
      .then((response) => response.json())
      .then((a) => {
        downloads = a.reduce((total, data) => {
          let currentVersionDownloads: number = data.assets.reduce((total, asset) => total + asset.download_count, 0)
          return total + currentVersionDownloads
        }, 0)

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

  <Section style="height: 100vh;justify-content: center;flex-direction: row;position: relative;">
    <Overlay color="#2d313b">
      <!-- <img src="./preview/v0.0.1.png" alt="Preview of program" /> -->
      <img src="/preview/program_mac.jpg" alt="Preview og program on computer" />
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
      <img src="/preview/program_mac.jpg" alt="Preview og program on computer" />
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

  <!-- <Section>
    <h2>More features</h2>
    <Features />
  </Section>

  <hr /> -->

  <Section>
    <h2>Install on Linux with snap</h2>
    <p>Check out FreeShow on <a href="https://snapcraft.io/freeshow" target="_blank">snapcraft</a>.</p>
    <p style="border-left: 2px solid rgb(255 255 255 / 0.2);font-family: monospace;font-size: 1.3em;padding: 0 10px;margin: 10px 0;">sudo snap install freeshow</p>

    <br />
    <br />

    <h2>Available on UbuntuCE</h2>
    <p><a href="https://ubuntuce.com/" target="_blank">UbuntuCE</a> is a a Linux-based free and open source operating system geared towards Christians.</p>
    <p>And it comes preinstalled with many useful softwares and tools, including FreeShow.</p>
  </Section>

  <hr />

  <Section>
    <h2>It's free!</h2>
    <p>Yes you heard it right. It's free for everyone to use anywhere.</p>
    <p>Why? Most of the other programs I have used was either very expensive or hard to use, and had an outdated inerface.</p>
    <p>What are you waiting for? <a href="/downloads">Download it</a> and try it out!</p>
  </Section>

  <hr />

  <Section>
    <h2>Donate?</h2>
    <p>Unfortunatly it's not free to create a program like this! It takes much time, so any donation would help the project continue.</p>
    <p>Here is a list of all of my current expenses:</p>
    <ul style="list-style: inside;">
      <li>Domain: $25 /yr</li>
      <li>Windows code sigining: About $80 /yr (Not purchased yet)</li>
      <li>Mac code sigining: $129 /yr (Not purchased yet)</li>
      <!-- <li>Potential bible api: $X /yr</li> -->
    </ul>
    <p>Total is at least $230 every year</p>
    <br />
    <p>You can currently donate with these methods:</p>
    <ul style="list-style: inside;">
      <li>
        <div style="display: inline-flex;align-items: center;gap: 10px;min-height: 40px;">
          Bank: <span title="My bank account number" style="font-weight: bold;">3335 29 03928</span>
        </div>
      </li>
      <li>
        <div style="display: inline-flex;align-items: center;gap: 10px;min-height: 50px;">
          PayPal: <Donate />
        </div>
      </li>
      <li>
        <div style="display: inline-flex;align-items: center;gap: 10px;min-height: 50px;">
          Patreon: <span class="patreon">
            <a href="https://www.patreon.com/bePatron?u=52787216" data-patreon-widget-type="become-patron-button">Become a Patron!</a>
            <script async src="https://c6.patreon.com/becomePatronButton.bundle.js"></script>
          </span>
        </div>
      </li>
    </ul>
  </Section>

  <hr />

  <Section style="align-items: center;">
    <h2>Total downloads</h2>
    <p class="downloads">{downloads}</p>
  </Section>

  <hr />

  <Section>
    <div class="flex">
      <!-- Capterra -->
      <a class="badge" href="https://www.capterra.com/reviews/251606/FreeShow?utm_source=vendor&utm_medium=badge&utm_campaign=capterra_reviews_badge" target="_blank">
        <img src="https://assets.capterra.com/badge/9d71bff6e2634c97eea1ed5485aacba4.svg?v=2207453&p=251606" alt="FreeShow reviews Capterra" />
      </a>

      <!-- GetApp -->
      <a class="badge" href="https://www.getapp.com/nonprofit-software/a/freeshow/reviews/" target="_blank">
        <img src="https://www.getapp.com/ext/reviews_widget/v1/dark/freeshow-application" alt="FreeShow reviews GetApp" />
      </a>

      <!-- SourceForge -->
      <div class="sf-root badge" data-id="3503885" data-badge="customers-love-us-black" data-variant-id="sf" style="width:125px">
        <a href="https://sourceforge.net/software/product/FreeShow/" target="_blank">FreeShow reviews SourceForge</a>
      </div>

      <!-- Slashdot -->
      <div class="sf-root badge" data-id="3503885" data-badge="users-love-us-new-black" data-variant-id="sd" style="width:125px">
        <a href="https://slashdot.org/software/p/FreeShow/" target="_blank">FreeShow reviews Slashdot</a>
      </div>

      <script>
        ;(function () {
          var p = document.getElementsByTagName("script")[0]
          let badgeId = "https://b.sf-syn.com/badge_js?sf_id=3503885&variant_id="
          // SF
          var sf = document.createElement("script")
          sf.async = true
          sf.src = badgeId + "sf"
          p.parentNode.insertBefore(sf, p)
          // SD
          var sd = document.createElement("script")
          sd.async = true
          sd.src = badgeId + "sd"
          p.parentNode.insertBefore(sd, p)
        })()
      </script>
    </div>
  </Section>
</main>

<style>
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

  .badge {
    text-align: center;
    transition: filter 0.2s;
  }
  .badge:hover {
    filter: brightness(0.5);
  }

  .link {
    color: var(--text);
    text-decoration: none;
  }

  .flex {
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
  }

  .downloads {
    font-size: 3em;
    font-weight: bold;
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

    .flex {
      flex-direction: row;
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
</style>
