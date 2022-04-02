<footer>
  <div class="footer">
    <div>
      <!-- links  -->
      <a href="../downloads">Downloads</a>
      <a href="../docs">Docs</a>
      <a href="../media">Media</a>
      <!-- <a href="../about">About</a> -->
    </div>
    <div>
      <!-- social media -->
      <!-- email -->
      <span>
        <p>Send feedback to:</p>
        <a href="mailto:dev@freeshow.app" title="Send mail">dev@freeshow.app</a>
      </span>
      <!-- phone number -->
      <!-- github -->
      <span>
        <p>Report a bug or request a feature on:</p>
        <a href="https://github.com/vassbo/freeshow/issues" target="_blank">GitHub Issues</a>
      </span>
      <span>
        <p>Donate on:</p>
        <a href="https://www.paypal.com/donate/?hosted_button_id=Y9PJC9TN4528A" target="_blank">PayPal</a>
      </span>
    </div>
    <div style="flex-direction: column;">
      <!-- form -->
      <h3>Contact</h3>
      <form class="contact" name="contact" netlify>
        <div>
          <label>Name <input type="text" name="name" /></label>
        </div>
        <div>
          <label>Email <input type="email" name="email" /></label>
        </div>
        <div>
          <label>Message <textarea rows={3} name="message" /></label>
        </div>
        <div>
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  </div>
  <div class="copy">&copy; FreeShow — Kristoffer Vassbø 2022</div>
</footer>

<style>
  footer {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    background-color: var(--primary-darker);
    padding: 30px 20px;
  }
  footer div {
    display: flex;
    flex-direction: column;
  }

  .footer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 40px;
  }

  .copy {
    align-self: center;
    text-align: center;
    opacity: 0.5;
  }

  a {
    color: white;
    opacity: 0.8;
    transition: opacity 0.2s;
  }
  a:hover {
    opacity: 1;
  }

  .contact {
    display: flex;
    gap: 5px;
    flex-direction: column;
  }
  .contact label {
    display: flex;
    gap: 10px;
    justify-content: space-between;
    align-items: center;
  }

  footer div span {
    display: flex;
    gap: 10px;
    align-items: center;
    padding: 10px 0;
    border-bottom: 2px solid var(--primary-lighter);
  }

  /* form */

  input,
  textarea,
  button {
    background-color: transparent;
    border: none;
    /* border: 2px solid rgb(255 255 255 / 0.1); */
    border-bottom: 2px solid var(--secondary);
    padding: 2px 5px;
    color: var(--text);
    font-size: inherit;
    font-family: inherit;
    transition: background-color 0.3s;
    width: 100%;
  }
  input:hover {
    background-color: rgb(255 255 255 / 0.1);
  }

  button {
    border: 2px solid var(--secondary);
    background-color: var(--secondary-opacity);
    transition: background-color 0.3s;
    cursor: pointer;
  }
  button:hover {
    background-color: var(--secondary);
  }

  /* media */

  @media only screen and (min-width: 600px) {
    .footer {
      flex-direction: row;
    }

    /* .footer div {
      flex-direction: column;
    } */
  }

  @media only screen and (min-width: 800px) {
    footer {
      padding: 20px 40px;
    }
  }

  @media only screen and (min-width: 1400px) {
    footer {
      padding: 20px 200px;
    }

    footer div span {
      padding: 0;
      border-bottom: none;
    }
  }
</style>
