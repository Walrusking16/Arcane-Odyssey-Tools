<script>
	import {addStat, getStatIdByName} from "$lib/data/base/stats.js";
	import {Stat} from "$lib/data/base/stats.js";

	export let stats = [];

	function getIconSize(stat) {
		const id = getStatIdByName(stat.name);
		return (id === Stat.DRAWBACK || id === Stat.WARDING) ? 'w-8' : 'w-10'
	}
</script>

<div class="bg-black/50 rounded p-2">
	{#if stats.length === 0}
		<p class="text-gray-100 text-center text-lg">No stats</p>
	{:else}
		<div class="grid justify-items-center grid-cols-2 md:grid-cols-3 gap-2">
			{#each stats as stat}
				<div class="flex space-x-2 items-center">
					<img class="{getIconSize(stat)} text-gray-100" src="icons/{stat.image}" alt={stat.name}>
					<p class="text-lg" style="color: {stat.valueColor};text-shadow: 0 0 1px {stat.valueBorderColor};">{stat.value}</p>
				</div>
			{/each}
		</div>
	{/if}
</div>