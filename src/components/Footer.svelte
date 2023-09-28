<script>
    import { Button } from "@svelteness/kit-docs"
</script>

<footer>
    <div class="footer">
        <!-- <div>
      <a href="../downloads">Downloads</a>
      <a href="../docs">Docs</a>
    </div> -->
        <div>
            <!-- <span>
                <p>Report a bug or request a feature on&nbsp;</p>
                <a href="https://github.com/ChurchApps/FreeShow/issues" target="_blank" rel="noreferrer">GitHub Issues</a>
            </span> -->
            <span>
                <Button href="/contact">Contact</Button>
            </span>
            <p style="opacity: 0.5;">●</p>
            <span>
                <Button href="https://livecs.org/partner">Support FreeShow</Button>
            </span>
        </div>
    </div>
    <div class="copy" style="font-size: 0.8em;">2023 &copy; <a href="https://livecs.org" target="_blank" rel="noreferrer">Live Church Solutions</a> - A 501(c)(3) organization with EIN 45-5349618</div>
</footer>

<style>
    footer {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        /* background-color: var(--primary-darker); */
        background-color: rgb(var(--kd-color-elevate));
        color: rgb(var(--kd-color-soft));
        padding: 20px;
    }
    footer div:not(.copy) {
        display: flex;
        /* flex-direction: column; */
        gap: 10px;
        justify-content: center;
    }

    .footer {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        /* gap: 40px; */

        width: 100%;
        align-items: center;

        padding-bottom: 20px;
        border-bottom: 3px solid rgb(var(--kd-color-border));
    }

    .copy {
        align-self: center;
        text-align: center;
        opacity: 0.6;
    }

    footer div span {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        /* border-bottom: 2px solid var(--primary-lighter); */

        padding: 5px 0;
        /* gap: 10px; */
        justify-content: center;
    }

    footer a {
        overflow: hidden;
        text-overflow: ellipsis;

        border-bottom: 1px solid var(--secondary);
        border-top: 1px solid transparent;
    }

    footer a:hover {
        border-bottom-width: 2px;
        border-top: 0px solid transparent;
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
