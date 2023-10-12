<script>
	import GearTypeButton from "$lib/components/GearTypeButton.svelte";
	import { Stat } from "$lib/data/base/stats.js";
	import { preferBestGems } from "$lib/stores/BuildStore.js";

	let preferBestGemsSetting = true;

	function onPreferBestGemsChange(event) {
		preferBestGemsSetting = event.target.checked;

		preferBestGems.set(preferBestGemsSetting);
	}
</script>

<div class="flex flex-col items-center justify-center space-y-2">
	<div class="grid grid-cols-2 gap-2 md:grid-cols-5 lg:flex md:flex-row lg:space-x-2">
		<GearTypeButton stat={Stat.POWER} />
		<GearTypeButton stat={Stat.DEFENSE} />
		<GearTypeButton stat={Stat.AGILITY} />
		<GearTypeButton stat={Stat.ATTACK_SPEED} />
		<GearTypeButton stat={Stat.ATTACK_SIZE} />
		<GearTypeButton stat={Stat.INTENSITY} />
		<GearTypeButton stat={Stat.INSANITY} />
		<GearTypeButton stat={Stat.WARDING} />
		<GearTypeButton stat={Stat.DRAWBACK} />
	</div>

	<div>
		<label class="flex items-center mb-3 space-x-3">
			<input type="checkbox"
			       class="appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-green-500 checked:border-transparent focus:outline-none"
			       bind:checked={preferBestGemsSetting}
			       on:change={onPreferBestGemsChange}
			/>
			<span class="font-normal text-gray-700 dark:text-white">
        Prefer Best Gems
      </span>
		</label>
	</div>
</div>