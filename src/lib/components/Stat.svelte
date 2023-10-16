<script>
	import { getStatIdByName, Stat } from '$lib/data/base/stats.js';
	import { createPopperActions } from 'svelte-popperjs';
	import { fade } from 'svelte/transition';
	import { base } from '$app/paths';

	export let stat;

	const [statRef, statContent] = createPopperActions({
		placement: 'top'
	});

	let showStatInfo = false;

	function getIconSize(stat) {
		const id = getStatIdByName(stat.name);
		return id === Stat.DRAWBACK || id === Stat.WARDING ? 'w-8' : 'w-10';
	}
</script>

<div>
	<div
		class="flex space-x-2 items-center hover:bg-white/20 rounded p-1"
		use:statRef
		on:pointerenter={() => (showStatInfo = true)}
		on:pointerleave={() => (showStatInfo = false)}
	>
		<img class="{getIconSize(stat)} text-gray-100" src="{base}icons/{stat.image}" alt={stat.name} />
		<p
			class="text-lg"
			style="color: {stat.valueColor};text-shadow: 0 0 1px {stat.valueBorderColor};"
		>
			{stat.displayValue}
		</p>
	</div>

	{#if showStatInfo}
		<div
			class="z-20 text-center"
			use:statContent
			in:fade={{ duration: 100 }}
			out:fade={{ duration: 100 }}
		>
			<div
				class="w-96 space-y-1 bg-black/80 p-2 rounded border"
				style="border-color: {stat.valueColor}"
			>
				<p class="text-lg font-bold">{stat.name}</p>
				<p>{stat.description}</p>
			</div>
		</div>
	{/if}
</div>
