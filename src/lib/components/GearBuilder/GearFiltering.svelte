<script>
	import { filterBy, updateSortBy } from '$lib/stores/gearBuildStore.js';
	import { Stat } from '$lib/data/base/stats.js';

	const options = {
		[Stat.POWER]: 'Power',
		[Stat.DEFENSE]: 'Defense',
		[Stat.AGILITY]: 'Agility',
		[Stat.ATTACK_SPEED]: 'Attack Speed',
		[Stat.ATTACK_SIZE]: 'Attack Size',
		[Stat.INTENSITY]: 'Intensity',
		[Stat.INSANITY]: 'Insanity',
		[Stat.WARDING]: 'Warding',
		[Stat.DRAWBACK]: 'Drawback'
	};

	let selected = $filterBy;

	$: updateSortBy(selected);
</script>

<div>
	{#each Object.entries(options) as [key, value]}
		<label>
			<input type="radio" bind:group={selected} value={key} />
			{value}
		</label>
	{/each}
</div>