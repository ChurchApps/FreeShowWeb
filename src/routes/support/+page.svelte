<script>
    import { Button } from "@svelteness/kit-docs"
    import Donate from "../../../src/components/Donate.svelte"
</script>

<svelte:head>
    <title>FreeShow | Support the developer</title>
</svelte:head>

<main>
    <br />
    <h2>Support the developer?</h2>
    <p>Unfortunatly it's not free to create a program like this! It takes much time, so any donation would help the project continue.</p>
    <br />
    <p>Here is a list of all of my current expenses:</p>
    <ul style="list-style: inside;">
        <li><strong>Domain:</strong> $25 /yr</li>
        <li><strong>Windows code sigining:</strong> About $80 /yr <em>(Not purchased yet)</em></li>
        <li><strong>Mac code sigining:</strong> $129 /yr <em>(Not purchased yet)</em></li>
        <!-- <li>Potential bible api: $X /yr</li> -->
    </ul>
    <p>Total is at least <u>$230 every year</u>, plus countless hours!</p>
    <br />
    <p>You can currently choose one of these methods:</p>
    <br />
    <div class="donate">
        <div>
            <Button href="https://www.paypal.com/donate/?hosted_button_id=Y9PJC9TN4528A" target="_blank">
                <h4 style:color="#3b7bbf">-> PayPal</h4>
            </Button>
            <Donate />
        </div>
        <div>
            <Button href="https://www.patreon.com/freeshowapp" target="_blank">
                <h4 style:color="#f96854">-> Patreon</h4>
            </Button>
            <span class="patreon">
                <a href="https://www.patreon.com/bePatron?u=52787216" data-patreon-widget-type="become-patron-button">Become a Patron!</a>
                <script async src="https://c6.patreon.com/becomePatronButton.bundle.js"></script>
            </span>
        </div>
    </div>
</main>

<style>
    :global(.on-this-page) {
        display: none !important;
    }

    main {
        padding: 20px;
    }

    h2 {
        color: var(--secondary);
        font-size: 2em;
    }

    .donate {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .donate h4 {
        font-size: 2em;
        line-height: 2em;
    }

    .donate div {
        border: 6px dashed rgb(var(--kd-color-soft));
        background-color: rgb(var(--kd-color-elevate));
        padding: 30px;
        padding-bottom: 40px;
        flex: 1;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        min-height: 50px;
    }

    @media only screen and (min-width: 800px) {
        .donate {
            flex-direction: row;
        }
    }
</style>
