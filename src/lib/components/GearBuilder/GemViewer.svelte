<script>
	import GearSlot from '$lib/components/GearBuilder/GearSlot.svelte';
	import GearSelector from '$lib/components/GearBuilder/GearSelector.svelte';
	import { createPopperActions } from 'svelte-popperjs';
	import gems from '$lib/data/gems.js';
	import { createEventDispatcher } from 'svelte';
	import { emptyGem } from '$lib/data/base/baseGem.js';
	import { updateItem } from '$lib/stores/gearBuildStore.js';

	export let item;
	export let itemSlot;

	const placeholder = {
		name: 'Gem',
		image: 'gem'
	};

	const [gemSelectorRef] = createPopperActions({
		placement: 'top',
		strategy: 'fixed'
	});

	const dispatch = createEventDispatcher();

	let showGemSelector = false;
	let gemSlot = 0;

	function onClick(index) {
		gemSlot = index;
		showGemSelector = true;
	}

	function itemSelected({ detail }) {
		const newItem = detail.item;

		item.gems[gemSlot] = newItem.name === 'None' ? emptyGem() : newItem;

		updateItem(item, itemSlot);

		dispatch('change', item);
	}
</script>

<div>
	<div>
		<div use:gemSelectorRef />
		{#if showGemSelector}
			<GearSelector
				label="Select a Gem"
				showLabels={true}
				items={gems}
				on:close={() => (showGemSelector = false)}
				on:itemSelected={itemSelected}
			/>
		{/if}
	</div>
	<div class="grid grid-cols-2 gap-2">
		{#each item?.gems ?? [] as gem, i}
			<div>
				<GearSlot item={gem} {placeholder} showName={true} on:click={() => onClick(i)} />
			</div>
		{/each}
	</div>
</div>