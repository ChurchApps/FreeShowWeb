<script context="module">
    import { Button } from "@svelteness/kit-docs"

    export const prerender = true
</script>

<svelte:head>
    <title>FreeShow | Contact</title>
</svelte:head>

<div class="mail">
    <div>
        <p>Report a bug or request a feature?</p>
        <Button href="https://github.com/ChurchApps/FreeShow/issues" title="Go to FreeShow issues on GitHub" target="_blank" rel="noreferrer">-> GitHub Issues</Button>
    </div>

    <hr />

    <div>
        <p>Contact developer on mail:</p>
        <Button href="mailto:dev@freeshow.app" title="Send mail to developer">-> dev@freeshow.app</Button>
    </div>

    <!-- social media -->
    <!-- phone number? -->
</div>

<!-- form -->

<!-- <div style="flex-direction: column;">
    <h3>Contact using form</h3>
    <form class="contact" name="contact" action="submitted" method="POST" netlify-honeypot="bot-field" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
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
</div> -->
<style>
    :global(.on-this-page) {
        display: none !important;
    }

    .mail {
        margin: 100px 0;
        text-align: center;
        font-size: 1.5em;
        font-weight: bold;

        display: flex;
        flex-direction: column;
        gap: 50px;
    }

    .mail p {
        font-size: 0.7em;
    }

    @media only screen and (min-width: 1000px) {
        .mail {
            font-size: 4em;
        }
    }

    /* a {
        border-bottom: 1px solid var(--secondary);
        border-top: 1px solid transparent;
    }

    a:hover {
        border-bottom-width: 2px;
        border-top: 0px solid transparent;
    } */

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
</style>
