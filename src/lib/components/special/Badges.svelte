<div class="badges">
	<!-- Slashdot -->
	<div
		class="sf-root badge"
		data-id="3503885"
		data-badge="users-love-us-new-black"
		data-variant-id="sd"
		style="width:125px"
	>
		<a href="https://slashdot.org/software/p/FreeShow/" target="_blank" rel="noreferrer"
			>FreeShow reviews Slashdot</a
		>
	</div>

	<!-- Capterra -->
	<a
		class="badge"
		href="https://www.capterra.com/reviews/251606/FreeShow?utm_source=vendor&utm_medium=badge&utm_campaign=capterra_reviews_badge"
		target="_blank"
		rel="noreferrer"
	>
		<img
			src="https://assets.capterra.com/badge/9d71bff6e2634c97eea1ed5485aacba4.svg?v=2207453&p=251606"
			alt="FreeShow reviews Capterra"
		/>
	</a>

	<!-- GetApp -->
	<a
		class="badge"
		href="https://www.getapp.com/nonprofit-software/a/freeshow/reviews/"
		target="_blank"
		rel="noreferrer"
	>
		<img
			src="https://www.getapp.com/ext/reviews_widget/v1/dark/freeshow-application"
			alt="FreeShow reviews GetApp"
		/>
	</a>

	<!-- SourceForge -->
	<div
		class="sf-root badge"
		data-id="3503885"
		data-badge="customers-love-us-black"
		data-variant-id="sf"
		style="width:125px"
	>
		<a href="https://sourceforge.net/software/product/FreeShow/" target="_blank" rel="noreferrer"
			>FreeShow reviews SourceForge</a
		>
	</div>

	<script>
		(function () {
			setTimeout(() => {
				var p = document.getElementsByTagName('script')[0];
				let badgeId = 'https://b.sf-syn.com/badge_js?sf_id=3503885&variant_id=';
				// SF
				var sf = document.createElement('script');
				sf.async = true;
				sf.src = badgeId + 'sf';
				p.parentNode.insertBefore(sf, p);
				// SD
				var sd = document.createElement('script');
				sd.async = true;
				sd.src = badgeId + 'sd';
				p.parentNode.insertBefore(sd, p);
			}, 3000);
		})();
	</script>
</div>

<style>
	.badges {
		display: flex;
		flex-direction: var(--column-small-row-big);
		gap: 40px;
		flex-wrap: wrap;
		justify-content: space-evenly;
		align-items: center;

		filter: grayscale(1);
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		user-select: none;
	}

	.badge {
		--height: 80px;

		text-align: center;
		transition: filter 0.2s;
	}
	.badge :global(img) {
		height: var(--height);
	}
	.badge:hover {
		filter: brightness(0.8);
	}
</style>
