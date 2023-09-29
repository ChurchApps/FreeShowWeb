<script>
    import { Button } from "@svelteness/kit-docs"
    import Badges from "../../src/components/Badges.svelte"
    import Preview from "../../src/components/Preview.svelte"
    import Welcome from "../../src/components/Welcome.svelte"
</script>

<svelte:head>
    <title>FreeShow — A free and open source presenter</title>
</svelte:head>

<Welcome />

<hr class="fill" />

<section>
    <Preview />
</section>

<hr />

<section>
    <!-- <h2>Trailer</h2> -->
    <iframe
        style="aspect-ratio: 16/9;width: 100%;"
        src="https://www.youtube.com/embed/6zArghvgUok"
        title="Introducing FreeShow"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
    />
</section>

<hr class="fill" />

<section>
    <h2>Free Forever!</h2>
    <p>Yep that's right. It's free for anyone to use anywhere, forever. <Button href="/docs/introduction">Learn more here.</Button></p>
    <p>What are you waiting for? <Button href="/downloads">Download the program</Button> and try it out!</p>
    <br />
    <h2>Support?</h2>
    <p>Creating a program like this is not free for me, as it takes much of my time.</p>
    <p>So please feel free to <Button href="https://livecs.org/partner">support the developers</Button>, so I can continue working on the program.</p>
    <br />
    <h2>Review?</h2>
    <p>Reviews are a great way for others to find the program. If you like it, I would love if you could give an honest review.</p>
    <p>
        So please feel free to <Button href="https://reviews.capterra.com/new/251606/25c379b8-6a14-4583-bab4-d458913d407c" target="_blank">review FreeShow on Capterra</Button>, and receive a $20 Amazon gift card. Or press any of the badges below.
    </p>
</section>

<hr />

<section>
    <Badges />
</section>

<style>
    h2 {
        color: var(--secondary);
        font-size: 1.5em;
    }

    section {
        padding: 20px;
    }

    hr.fill {
        position: absolute;
        left: 0;
    }

    @media only screen and (min-width: 800px) {
        section {
            padding: 40px 20px;
        }
    }

    @media only screen and (min-width: 1400px) {
        section {
            padding: 80px 20px;
        }
    }
</style>
