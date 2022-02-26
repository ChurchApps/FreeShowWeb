<button
  style={$$props.style || null}
  disabled={$$props.disabled}
  class:colored={$$props.colored}
  class:outline={$$props.outline}
  class:big={$$props.big}
  class:center={$$props.center}
>
  <slot />
</button>

<style>
  button {
    padding: 10px 15px;
    cursor: pointer;
    color: var(--text);
    border: none;
    background-color: var(--primary-darker);
    font-size: inherit;
    display: flex;
    gap: 10px;
    align-items: center;
  }
  button:hover:not(button:disabled) {
    background-color: var(--hover);
  }
  button:active:not(button:disabled) {
    background-color: var(--focus);
  }

  button.center {
    justify-content: center;
  }

  button.colored {
    background-color: var(--secondary);
  }
  button.colored:hover {
    background-color: var(--secondary-opacity);
  }
  button.colored:active {
    background-color: var(--secondary-opacity);
    opacity: 0.8;
  }

  button.outline {
    /* border: 2px solid var(--secondary); */
    color: var(--secondary);
  }

  button.big {
    padding: 10px 25px;
  }

  button:disabled {
    cursor: default;
    opacity: 0.5;
  }

  /* @media only screen and (min-width: 600px) {
    button.big {
      padding: 30px 45px;
    }
  } */
</style>
