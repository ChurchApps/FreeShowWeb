<script lang="ts">
	import Icon from '../main/Icon.svelte';
	import { features } from '../scripts/compare';

	export let maxItems: number = 0;
</script>

<div class="scroll">
	<table>
		<thead>
			<tr>
				<th><h5>Feature</h5></th>
				<th style="text-align: center;"
					><a href="https://freeshow.app/" target="_blank" rel="noreferrer">FreeShow</a></th
				>
				<th style="text-align: center;"
					><a href="https://renewedvision.com/propresenter/" target="_blank" rel="noreferrer"
						>ProPresenter</a
					></th
				>
				<th style="text-align: center;"
					><a href="https://www.easyworship.com/" target="_blank" rel="noreferrer">EasyWorship</a
					></th
				>
				<th style="text-align: center;"
					><a href="https://myvideopsalm.weebly.com/" target="_blank" rel="noreferrer">VideoPsalm</a
					></th
				>
				<th style="text-align: center;"
					><a href="https://openlp.org/" target="_blank" rel="noreferrer">OpenLP</a></th
				>
				<th style="text-align: center;"
					><a href="https://faithlife.com/products/proclaim" target="_blank" rel="noreferrer"
						>ProClaim</a
					></th
				>
			</tr>
		</thead>

		<tbody>
			{#each features as feature, i}
				{#if !maxItems || i < maxItems}
					<tr>
						<td class:info={feature.info}>
							{feature.name}
							{#if feature.info && !maxItems}
								<div class="hidden-info">
									<Icon icon="info" size={0.7} color="rgb(0 0 0 / 0.2)" />
									<div class="hidden">
										{feature.info}
									</div>
								</div>
							{/if}
						</td>

						{#each Object.values(feature.programs) as program}
							<td class:note={program.note && !maxItems}>
								<div class="content">
									{#if typeof program.content === 'boolean'}
										<Icon
											icon={program.content ? 'yes' : 'no'}
											size={1.1}
											color={maxItems ? '' : program.content ? '#13a813' : '#d40f0f'}
											black={!program.content}
										/>
									{:else}
										<!-- TODO: icon borders? -->
										{#if program.content.includes('{win}')}
											<Icon icon="windows" color={maxItems ? '' : '#0078D7'} />
										{/if}
										{#if program.content.includes('{mac}')}
											<Icon icon="apple" color={maxItems ? '' : '#aaaaaa'} />
										{/if}
										{#if program.content.includes('{linux}')}
											<Icon icon="linux" color={maxItems ? '' : '#db1200'} />
										{/if}

										{program.content.replace(/(\{.*?\})/g, '')}
									{/if}
								</div>

								{#if program.note && !maxItems}
									<div class="hidden">
										{program.note}
									</div>
								{/if}
							</td>
						{/each}
					</tr>
				{/if}
			{/each}
		</tbody>
	</table>
</div>

<style>
	.scroll {
		position: relative;
		overflow-x: auto;
		overflow-y: hidden;

		padding: 2px;
		width: 100%;

		z-index: 1;
	}

	table {
		border-spacing: 0;
		/* border-spacing: 10px 0; */
		width: 100%;
		font-size: 0.8em;
	}

	table tbody {
		background-color: white;
		border-radius: var(--border-radius);

		/* TODO: gradient border? */
		outline: 2px solid var(--secondary);
	}

	/* border radius */
	table tbody td {
		display: table-cell;
	}
	table tbody tr:first-child td:first-child {
		border-top-left-radius: var(--border-radius);
	}
	table tbody tr:first-child td:last-child {
		border-top-right-radius: var(--border-radius);
	}
	table tbody tr:last-child td:first-child {
		border-bottom-left-radius: var(--border-radius);
	}
	table tbody tr:last-child td:last-child {
		border-bottom-right-radius: var(--border-radius);
	}

	tr th:first-child,
	tr td:first-child {
		padding: 0 30px;
		text-align: left;
	}
	tr td:first-child {
		border-bottom: 2px solid var(--primary);
	}
	tr td .content {
		border-bottom: 2px solid rgb(var(--primary-rgb), 0.03);
	}
	tbody tr:last-child td,
	tbody tr:last-child .content {
		border-bottom: 0;
	}
	tr td:not(:first-child) {
		border-right: 10px solid white;
		background-color: var(--primary);

		/* 6 softwares */
		width: calc(80% / 6);
		min-width: 110px;
	}

	td {
		height: 35px;
	}

	tr th:not(:first-child) {
		color: white;
		border-right: 10px solid var(--primary);

		font-weight: 500;
	}

	tr th a {
		display: block;
		padding: 10px;
		width: 100%;
		height: 100%;
		border-radius: calc(var(--border-radius) / 1.2) calc(var(--border-radius) / 1.2) 0 0;
		text-decoration: none;

		transition: 0.2s filter;
	}
	tr th:nth-child(odd):not(:first-child) a {
		background-color: var(--text-inverted);
	}
	tr th:nth-child(even) a {
		background-color: var(--secondary);
	}

	tr th a:hover {
		filter: brightness(0.9);
		text-decoration: underline;
	}

	thead tr th:nth-child(2) a {
		background: linear-gradient(20deg, #d71e93, #c32aac, #8a32cd);
	}
	tbody tr td:nth-child(2) .content {
		font-weight: bold;
		/* background-color: rgb(var(--primary-rgb), 0.01); */
		border-left: 1px solid var(--secondary);
		border-right: 1px solid var(--secondary);
	}

	td .content {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 5px;
		height: 100%;
		cursor: default;
	}

	/* info */

	.hidden-info {
		display: inline;
	}

	td.info:hover > div .hidden {
		display: block;
	}

	/* note */

	td.note .content::after {
		content: '*';
		color: rgb(0 0 0 / 0.2);
		/* color: #ff9999; */
		position: absolute;
		right: 10px;
	}
	td.note .content:hover {
		filter: brightness(0.8);
	}

	td {
		position: relative;
	}

	.hidden {
		position: absolute;
		bottom: 0;
		left: 5px;
		transform: translateY(70%);

		padding: 8px;
		background-color: var(--primary);
		box-shadow: 1px 1px 5px rgb(0 0 0 / 0.2);
		font-style: italic;
		white-space: nowrap;
		filter: brightness(0.9);
		display: none;
		z-index: 10;
		pointer-events: none;
		/* opacity: 0; */
		/* transition: 0.2s opacity; */
	}
	td:hover > .hidden {
		display: block;
		/* opacity: 1; */
	}
</style>
