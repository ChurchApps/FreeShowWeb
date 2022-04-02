<script>
  import { onMount } from "svelte"

  let loaded = false

  onMount(() => {
    loaded = true
  })
</script>

<div id="donate-button-container" style="margin-top: 10px;">
  <div id="donate-button" />
  <script src="https://www.paypalobjects.com/donate/sdk/donate-sdk.js" charset="UTF-8"></script>
  {#if loaded}
    <script>
      PayPal.Donation.Button({
        env: "production",
        hosted_button_id: "Y9PJC9TN4528A",
        image: {
          src: "https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif",
          alt: "Donate with PayPal button",
          title: "PayPal - The safer, easier way to pay online!",
        },
      }).render("#donate-button")
    </script>
  {/if}
</div>
