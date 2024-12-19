<script>
    import { browser } from '$app/environment';

    // some cache issue or something causes this (/project & /show) to not render as it should!
    // only when the page is at one of those paths for some reason
    if (browser) {
        window.location = "show-type"
    }
</script>

[Show](./show-type)
