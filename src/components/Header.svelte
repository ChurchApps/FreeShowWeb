<script lang="ts">
  import Icon from "./Icon.svelte"

  export let top: boolean
</script>

<header class:top>
  <div class="menu">
    <Icon id="menu" white />
  </div>
  <div class="buttons">
    <div>
      <a href="../">
        <img src="../../static/icon_x32.png" alt="Logo" style="width: 30px;object-fit: contain;" />
        FreeShow
      </a>
    </div>
    <div>
      <a href="../downloads">
        <Icon id="download" />
        <span>Downloads</span>
      </a>
      <a href="../docs">
        <Icon id="docs" />
        <span>Docs</span>
      </a>
      <!-- <a href="../">Blogs</a> -->
      <a href="../about">
        <Icon id="info" />
        <span>About</span>
      </a>
    </div>
  </div>
</header>

<style>
  header {
    position: fixed;
    /* top: 0; */
    z-index: 10;
  }

  header.top,
  header.top .buttons {
    background-color: transparent;
  }

  header,
  .buttons {
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: var(--primary);
    transition: background-color 0.3s;
  }
  .buttons {
    display: none;
    justify-content: space-between;
    /* position: absolute; */
  }
  .buttons div {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }

  .menu {
    align-self: flex-end;
    padding: 10px;
  }
  .menu:hover {
    background-color: var(--primary-darker);
  }

  .menu:active ~ .buttons,
  .menu:hover ~ .buttons,
  .buttons:hover {
    display: flex;
  }

  a {
    padding: 18px 14px;
    color: var(--text);
    text-decoration: none;

    display: flex;
    align-items: center;
    gap: 10px;
  }

  a:hover {
    background-color: var(--hover);
  }

  @media only screen and (min-width: 600px) {
    .menu {
      display: none;
    }
    .buttons {
      display: flex;
      flex-direction: row;
      /* position: initial; */
    }

    .buttons div {
      flex-direction: row;
    }
  }

  @media only screen and (min-width: 1000px) {
    header {
      padding: 0 300px;
      /* flex-direction: row; */
    }
  }
</style>
