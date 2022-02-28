<footer>
  <div class="footer">
    <div>
      <!-- links  -->
      <a href="../downloads">Downloads</a>
      <a href="../docs">Docs</a>
      <a href="../about">About</a>
    </div>
    <div>
      <!-- social media -->
      <!-- email -->
      <a href="mailto:kristoffervassbo@gmail.com" title="Send mail">kristoffervassbo@gmail.com</a>
      <!-- phone number -->
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
    gap: 20px;
    background-color: var(--primary-darker);
    padding: 20px;
  }
  footer div {
    display: flex;
  }

  .footer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .copy {
    align-self: center;
    opacity: 0.5;
  }

  @media only screen and (min-width: 600px) {
    .footer {
      flex-direction: row;
    }

    .footer div {
      flex-direction: column;
    }
  }

  @media only screen and (min-width: 1000px) {
    footer {
      padding: 20px 300px;
    }
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
</style>
