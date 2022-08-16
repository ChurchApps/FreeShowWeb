<script lang="ts">
  import { page } from "$app/stores"
  import Section from "../../components/Section.svelte"
  import { docs } from "./docs"
  import Sidebar from "./Sidebar.svelte"

  $: id = $page.params.id
  $: doc = docs[id] || {}
</script>

<svelte:head>
  <title>{doc.title || ""} | FreeShow Docs</title>
</svelte:head>

<main>
  <Section class="main" style="min-height: 100%;gap: 30px;padding-top: 60px;">
    <Sidebar />

    <div style="flex: 1;">
      <h2>{doc.title || ""}</h2>
      <svelte:component this={doc.comp} />
    </div>
  </Section>
</main>

<style>
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

  @media only screen and (min-width: 800px) {
    main :global(.main) {
      flex-direction: row;
    }
  }
</style>
