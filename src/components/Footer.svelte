<footer>
  <div>freeshow links social media...</div>
  <div>contact</div>
</footer>

<style>
  footer {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    background-color: var(--primary-darker);
    padding: 20px;
  }
  footer div {
    display: flex;
  }

  @media only screen and (min-width: 600px) {
    footer {
      flex-direction: row;
    }

    footer div {
      flex-direction: column;
    }
  }

  @media only screen and (min-width: 1000px) {
    footer {
      padding: 20px 300px;
    }
  }
</style>
