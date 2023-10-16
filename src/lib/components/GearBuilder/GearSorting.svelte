<script>
	import { SortOrder } from '$lib/data/base/sorting.js';
	import { sortBy, updateSortBy } from '$lib/stores/gearBuildStore.js';
	import SelectInput from '$lib/components/GearBuilder/SelectInput.svelte';

	const options = {
		[SortOrder.HIGHEST_STAT]: 'Highest Stat',
		[SortOrder.LOWEST_STAT]: 'Lowest Stat',
		[SortOrder.NAME]: 'Name',
		[SortOrder.SUBTYPE]: 'Type',
		[SortOrder.GEM_SLOTS]: 'Gem Slots'
	};

	let selected = $sortBy ?? SortOrder.HIGHEST_STAT;

	function onChange({ detail }) {
		selected = detail;
		updateSortBy(detail);
	}
</script>

<SelectInput label="Sort By" defaultSelected={selected} {options} on:change={onChange} />
