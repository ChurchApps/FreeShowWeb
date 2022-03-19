<script lang="ts">
  import { docs } from "./docs"
</script>

<div class="titles">
  <h3>Pages</h3>
  {#each Object.entries(docs) as [id, doc]}
    <a href={`/docs/${id}`}>{doc.title}</a>
  {/each}
</div>

<style>
  .titles {
    display: flex;
    flex-direction: column;
    background-color: var(--primary-darker);
    padding: 20px;
  }

  a {
    color: white;
    opacity: 0.8;
  }

  @media only screen and (min-width: 800px) {
    .titles {
      min-width: 300px;
    }
  }
</style>
