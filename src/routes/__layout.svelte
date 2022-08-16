<script lang="ts">
  import Footer from "../components/Footer.svelte"
  import Header from "../components/Header.svelte"

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
  <Header {top} />

  <section>
    <slot />
  </section>

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

  :global(a) {
    /* color: var(--secondary); */
    color: var(--text);
    opacity: 0.8;
    font-weight: bold;
    /* text-decoration: none; */
    transition: color 0.3s, opacity 0.05s;
  }
  :global(a):hover:not(.badge) {
    /* opacity: 0.9; */
    /* background-color: rgba(45, 49, 59, 0.9); */
    /* background-color: rgb(0 0 0 / 0.3); */
    color: var(--secondary);
    opacity: 1;
  }

  main {
    background-color: var(--primary);
    color: var(--text);
    /* font-family: Roboto, "Segoe UI", Tahoma, sans-serif; */
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    font-size: 1.2em;

    /* display: flex;
    flex-direction: column; */
    /* justify-content: space-between; */
  }

  section {
    min-height: 100vh;
  }
</style>
