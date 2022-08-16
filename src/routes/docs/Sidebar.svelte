<script lang="ts">
  import { page } from "$app/stores"
  import { docs } from "./docs"
</script>

<div class="titles">
  <h3>Pages</h3>
  {#each Object.entries(docs) as [id, doc]}
    <a href={`/docs/${id}`} class:active={$page.params.id === id}>{doc.title}</a>
  {/each}
</div>

<style>
  .titles {
    display: flex;
    flex-direction: column;
    background-color: var(--primary-darker);
    height: fit-content;
    /* padding: 20px; */
    /* gap: 5px; */
  }

  h3 {
    padding: 8px 14px;
  }

  a {
    color: white;
    opacity: 0.8;
    padding: 8px 14px;
    text-decoration: none;
    transition: background-color 0.2s;
  }

  a:hover {
    background-color: var(--primary);
  }

  a.active {
    background-color: var(--primary);
    color: var(--secondary);
    opacity: 1;
  }

  @media only screen and (min-width: 800px) {
    .titles {
      min-width: 300px;
    }
  }
</style>
