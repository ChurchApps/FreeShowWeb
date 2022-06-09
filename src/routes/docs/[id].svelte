<script lang="ts">
  import { page } from "$app/stores"
  import Features from "./pages/Features.svelte"
  import Footer from "../../components/Footer.svelte"
  import Header from "../../components/Header.svelte"
  import Section from "../../components/Section.svelte"
  import { docs } from "./docs"
  import Drawer from "./pages/Drawer.svelte"
  import FirstShow from "./pages/FirstShow.svelte"
  import GetStarted from "./pages/GetStarted.svelte"
  import Output from "./pages/Output.svelte"
  import Projects from "./pages/Projects.svelte"
  import Styling from "./pages/Styling.svelte"
  import Tips from "./pages/Tips.svelte"
  import Sidebar from "./Sidebar.svelte"
  import Scripture from "./pages/Scripture.svelte"

  // header scroll
  let top: boolean = true
  function scroll() {
    if (window.scrollY === 0) top = true
    else top = false
  }

  $: id = $page.params.id
</script>

<svelte:head>
  <title>FreeShow | Docs - {docs[id]?.title || ""}</title>
</svelte:head>

<svelte:window on:scroll={scroll} />

<main>
  <Header {top} path="../" />

  <Section class="main" style="min-height: 100%;gap: 30px;padding-top: 60px;">
    <Sidebar />

    <div style="flex: 1;">
      <h2>{docs[id]?.title}</h2>
      {#if id === "features"}
        <Features />
      {:else if id === "start"}
        <GetStarted />
      {:else if id === "show"}
        <FirstShow />
      {:else if id === "projects"}
        <Projects />
      {:else if id === "output"}
        <Output />
      {:else if id === "drawer"}
        <Drawer />
      {:else if id === "scripture"}
        <Scripture />
      {:else if id === "tips"}
        <Tips />
      {:else if id === "styling"}
        <Styling />
      {/if}
    </div>
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
    height: 100vh;
    background-color: var(--primary);
    color: var(--text);
    font-family: Roboto, "Segoe UI", Tahoma, sans-serif;
    font-size: 1.2em;
  }

  main h2 {
    color: var(--secondary);
  }

  main div {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  main :global(ul) {
    list-style: inside;
    list-style-type: square;
    /* list-style-type: disclosure-closed; */
  }

  div :global(a) {
    color: var(--secondary);
    font-weight: bold;
    transition: background-color 0.3s;
  }
  div :global(a):hover {
    background-color: rgb(0 0 0 / 0.3);
  }

  @media only screen and (min-width: 800px) {
    main :global(.main) {
      flex-direction: row;
    }
  }
</style>
