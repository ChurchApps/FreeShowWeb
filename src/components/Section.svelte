<section style={$$props.style || null}>
  <slot />
</section>

<style>
  section {
    width: 100%;
    /* display: flex;
    flex-direction: column; */
    background-color: var(--primary);
    padding: 20px;
    display: flex;
    flex-direction: column;
  }

  /* @media only screen and (min-width: 800px) {
    section {
      flex-direction: row;
    }
  } */

  @media only screen and (min-width: 1000px) {
    section {
      padding: 20px 200px;
    }
  }
</style>
