<script lang="ts">
  import Icon from "./Icon.svelte"

  export let top: boolean
</script>

<header class:top>
  <div class="menu">
    <div>
      <a href="../" style="padding: 4px;">
        <img src="./icon_x32.png" alt="Logo" style="width: 30px;object-fit: contain;" />
        FreeShow
      </a>
    </div>
    <div>
      <Icon id="menu" white />
    </div>
  </div>
  <div class="buttons">
    <div class="hide">
      <a href="../">
        <img src="./icon_x32.png" alt="Logo" style="width: 30px;object-fit: contain;" />
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
      <!-- blogs -->
      <!-- about -->
      <a href="../media">
        <Icon id="media" />
        <span>Media</span>
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

  .buttons .hide {
    display: none;
  }

  .menu {
    /* align-self: flex-end; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  }
  .menu:hover {
    background-color: var(--primary-darker);
  }

  header.top {
    background-color: transparent;
  }

  .menu:active ~ .buttons,
  .menu:hover ~ .buttons,
  .buttons:hover {
    display: flex;
    background-color: var(--primary);
    height: 100%;
  }

  /* header.top ~ .menu:active,
  .menu:hover ~ header.top {
    background-color: var(--primary);
    height: 100%;
  } */

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

  /* media */

  @media only screen and (min-width: 600px) {
    header {
      height: initial;
    }

    .buttons .hide {
      display: block;
    }

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

    header.top,
    header.top .buttons {
      background-color: transparent;
    }
  }

  @media only screen and (min-width: 1000px) {
    header {
      padding: 0 300px;
      /* flex-direction: row; */
    }
  }
</style>
