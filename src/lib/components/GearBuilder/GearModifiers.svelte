<script>
	import SelectInput from '$lib/components/GearBuilder/SelectInput.svelte';
	import { Modifier } from '$lib/data/base/modifier.js';
	import { updateItem } from '$lib/stores/gearBuildStore.js';
	import { createEventDispatcher } from 'svelte';

	export let item;
	export let itemSlot;

	const dispatch = createEventDispatcher();

	let selected = item?.modifiers?.[0];

	const options = {
		'': 'None',
		[Modifier.ATLANTEAN]: 'Atlantean'
	};

	function onChange({ detail }) {
		selected = detail;

		if (!selected) {
			item.modifiers = [];
			item.extraStats = [];
			dispatch('change', item);
			return;
		}

		item.modifiers = [selected];

		updateItem(item, itemSlot);

		dispatch('change', item);
	}
</script>

<div>
	<SelectInput label="Modifier" defaultSelected={selected} {options} on:change={onChange} />
</div>
