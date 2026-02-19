<script>
	import { onMount } from "svelte"

	onMount(() => {
		const urlParams = new URLSearchParams(window.location.search)
		const authCode = urlParams.get("code")

		if (authCode) window.location.href = `http://127.0.0.1:5520/auth_redirect?code=${authCode}`
		else window.location.replace("https://freeshow.app")
	})
</script>

<h1>Redirecting...</h1>
<p>If you are not redirected automatically, please try another browser or check your browser settings.</p>
