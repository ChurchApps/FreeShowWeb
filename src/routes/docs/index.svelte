<script lang="ts">
  import Section from "../../components/Section.svelte"
  import Footer from "../../components/Footer.svelte"
  import Header from "../../components/Header.svelte"
  import Sidebar from "./Sidebar.svelte"

  // header scroll
  let top: boolean = true
  function scroll() {
    if (window.scrollY === 0) top = true
    else top = false
  }
</script>

<svelte:head>
  <title>FreeShow | Docs</title>
</svelte:head>

<svelte:window on:scroll={scroll} />

<main>
  <Header {top} />

  <Section style="min-height: 100%;padding-top: 60px;align-items: center;">
    <br />
    <h3>Welcome to FreeShow docs. Choose a topic to continue:</h3>
    <br />
    <Sidebar />
  </Section>

  <!-- FreeShow Guides, Tutorials -->

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
</style>
