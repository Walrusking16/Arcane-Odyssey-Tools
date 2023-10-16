<script>
	import TotalStats from '$lib/components/TotalStats.svelte';

	export let item;

	const stats = item.getStats();
</script>

<div class="absolute z-10 border border-gray-500 bg-black/80 w-80 p-2 text-center shadow-lg">
	<p class="text-lg font-bold">{item.name}</p>
	<p>{item.description}</p>

	<TotalStats {stats} />
</div>
