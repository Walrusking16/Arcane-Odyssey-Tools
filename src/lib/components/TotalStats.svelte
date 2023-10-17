<script>
	import Stat from '$lib/components/Stat.svelte';

	export let stats = [];
</script>

<div class="shrink bg-black/50 rounded p-2">
	{#if stats.length === 0}
		<p class="text-gray-100 text-center text-lg">No stats</p>
	{:else}
		<div class="grid justify-items-center grid-cols-1 xl:grid-cols-3 gap-2">
			{#each stats as stat}
				<Stat {stat} />
			{/each}
		</div>
	{/if}
</div>
