<script>
	import TotalStats from "$lib/components/TotalStats.svelte";
	import GearSlot from "$lib/components/GearSlot.svelte";

	export let build;

	let stats = build.getStats();
</script>
<div class="space-y-2">
	<TotalStats {stats} />
	<div class="flex space-x-2 justify-center">
		<div class="flex flex-col space-y-2">
			<GearSlot item={build.accessories[0]} />
			<GearSlot item={build.accessories[1]} />
			<GearSlot item={build.accessories[2]} />
		</div>
		<div class="flex flex-col space-y-2">
			<GearSlot item={build.chestplate} />
			<GearSlot item={build.leggings} />
		</div>
	</div>
</div>