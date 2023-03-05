<div class="flex">
    <!-- Capterra -->
    <a
        class="badge"
        href="https://www.capterra.com/reviews/251606/FreeShow?utm_source=vendor&utm_medium=badge&utm_campaign=capterra_reviews_badge"
        target="_blank"
        rel="noreferrer"
    >
        <img src="https://assets.capterra.com/badge/9d71bff6e2634c97eea1ed5485aacba4.svg?v=2207453&p=251606" alt="FreeShow reviews Capterra" />
    </a>

    <!-- GetApp -->
    <a class="badge" href="https://www.getapp.com/nonprofit-software/a/freeshow/reviews/" target="_blank" rel="noreferrer">
        <img src="https://www.getapp.com/ext/reviews_widget/v1/dark/freeshow-application" alt="FreeShow reviews GetApp" />
    </a>

    <!-- SourceForge -->
    <div class="sf-root badge" data-id="3503885" data-badge="customers-love-us-black" data-variant-id="sf" style="width:125px">
        <a href="https://sourceforge.net/software/product/FreeShow/" target="_blank" rel="noreferrer">FreeShow reviews SourceForge</a>
    </div>

    <!-- Slashdot -->
    <div class="sf-root badge" data-id="3503885" data-badge="users-love-us-new-black" data-variant-id="sd" style="width:125px">
        <a href="https://slashdot.org/software/p/FreeShow/" target="_blank" rel="noreferrer">FreeShow reviews Slashdot</a>
    </div>

    <script>
        ;(function () {
            var p = document.getElementsByTagName("script")[0]
            let badgeId = "https://b.sf-syn.com/badge_js?sf_id=3503885&variant_id="
            // SF
            var sf = document.createElement("script")
            sf.async = true
            sf.src = badgeId + "sf"
            p.parentNode.insertBefore(sf, p)
            // SD
            var sd = document.createElement("script")
            sd.async = true
            sd.src = badgeId + "sd"
            p.parentNode.insertBefore(sd, p)
        })()
    </script>
</div>

<style>
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        user-select: none;
    }

    .badge {
        text-align: center;
        transition: filter 0.2s;
    }
    .badge:hover {
        filter: brightness(0.5);
    }

    .flex {
        display: flex;
        flex-direction: column;
        gap: 10px;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
    }

    /* media */

    @media only screen and (min-width: 800px) {
        .flex {
            flex-direction: row;
        }
    }
</style>
