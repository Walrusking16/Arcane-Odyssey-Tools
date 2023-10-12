<script>
	import {getStatName} from "$lib/data/base/stats.js";
	import {gearStats, updateActiveStat} from "$lib/stores/BuildStore.js";

	export let stat = 0;

	$: label = getStatName(stat);

	let active = false;

	const statObj = $gearStats.find(s => s.id === stat);

	let min = statObj.min;
	let max = statObj.max;

	function validate(value) {
		if (isNaN(value)) {
			return false;
		}

		return value >= 0;
	}

	function toggle() {
		active = !active;

		if (!active) {
			min = 0;
			max = 999;

			updateActiveStat(stat, min, max);
		}
	}

	function onMinChange(event) {
		if (!validate(event.target.value)) {
			event.target.value = 0;
			return;
		}

		min = event.target.value;

		updateActiveStat(stat, min, max);
	}

	function onMaxChange(event) {
		if (!validate(event.target.value)) {
			event.target.value = 0;
			return;
		}

		max = event.target.value;

		updateActiveStat(stat, min, max);
	}
</script>

<div class="flex flex-col">
	<button class="border rounded-xl px-4 py-2 transition-colors {active ? 'bg-sky-700 text-white border-sky-300 hover:bg-sky-500' : 'text-gray-100 border-gray-400 bg-transparent hover:bg-gray-500'}"
	        on:click={toggle}>
		{label}
	</button>

	{#if active}
		<div class="flex flex-col mt-2 space-y-2 w-32">
			<div class="flex items-center bg-gray-600 rounded-lg">
				<p class="text-white px-2">Min</p>
				<input type="number"
				       class="rounded-r-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-gray-600 text-gray-100 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
				       min="0"
				       on:keyup={onMinChange}
				       on:change={onMinChange}
				       bind:value={min}
				/>
			</div>
			<div class="flex items-center bg-gray-600 rounded-lg">
				<p class="text-white px-2">Max</p>
				<input type="number"
				       class="rounded-r-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-gray-600 text-gray-100 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
				       min="0"
				       on:keyup={onMaxChange}
				       on:change={onMaxChange}
				       bind:value={max}
				/>
			</div>
		</div>
	{/if}
</div>