<script>
	import TotalStats from '$lib/components/TotalStats.svelte';
	import data from '$lib/data/index.js';
	import { createPopperActions } from 'svelte-popperjs';
	import GearSelector from '$lib/components/GearBuilder/GearSelector.svelte';
	import {
		updateAccessory,
		updateChestplate,
		updateLeggings,
		gearBuild, updateItem,
	} from '$lib/stores/gearBuildStore.js';
	import { SubType } from '$lib/data/base/types.js';
	import GearSorting from '$lib/components/GearBuilder/GearSorting.svelte';
	import { sortItems } from '$lib/utils/gearSorting.js';
	import GearCustomizer from '$lib/components/GearBuilder/GearCustomizer.svelte';
	import { BaseItem } from '$lib/data/base/baseItem.js';

	// TODO: Add enchants
	// TODO: Add filters

	// Cant wait to clean this up more when svelte 5 comes out

	const accessories = data.gear.accessories.getItems();
	const chestplates = data.gear.chestplates.getItems();
	const leggings = data.gear.leggings.getItems();

	const placeholders = {
		leggings: { image: 'leggings', name: 'Leggings' },
		chestplate: { image: 'chestplate', name: 'Chestplate' },
		accessory: { image: 'accessory', name: 'Accessory' }
	};

	const [gearSelectorRef] = createPopperActions({
		placement: 'top',
		strategy: 'fixed'
	});

	let itemSlot = 0;
	let showGearSelector = false;
	let gearSelectorItems = [];
	let forceChange = 0;

	function filterRules(items, index) {
		// Rules:
		// Max 1 of each subType (Amulet, Helmet, Cape)
		// No duplicate items
		let ignoredSubTypes = [];
		let filteredItems = [];
		let newItems = [...items];

		for (let i = 0; i < $gearBuild.accessories.length; i++) {
			const item = $gearBuild.accessories[i];

			if (item && i !== index) {
				// Filter out item subTypes that are already in the build that have a max of 1 (Might change in the future if we add more subTypes)
				item.subTypes.forEach((subType) => {
					if (ignoredSubTypes.includes(subType) || subType === SubType.FAULDS) {
						return;
					}

					ignoredSubTypes.push(subType);
				});

				filteredItems.push(item);
			}
		}

		return newItems.filter((item) => {
			// Filter out item subTypes that are already in the build that have a max of 1
			if (ignoredSubTypes.some((subType) => item.subTypes.includes(subType))) {
				return false;
			}

			// Filter out items that are already in the build
			return !filteredItems.find((filteredItem) => filteredItem.name === item.name);
		});
	}

	function filterItems(items, index) {
		const filteredItemsByRules = filterRules(items, index);

		return sortItems(filteredItemsByRules);
	}

	function getTotalStats(build) {
		let stats = {};

		['accessories', 'chestplate', 'leggings'].forEach((itemType) => {
			if (build[itemType]) {
				let items = Array.isArray(build[itemType]) ? build[itemType] : [build[itemType]];
				items.forEach((item) => {
					if (item) {
						item.getStats().forEach((stat) => {
							if (stats[stat.name]) {
								stats[stat.name].value += stat.value;
							} else {
								stats[stat.name] = { ...stat };
							}
						});
					}
				});
			}
		});

		Object.values(stats).forEach((stat) => {
			stat.displayValue = stat.value;
		});

		return Object.values(stats);
	}

	function changeChestplate() {
		itemSlot = 0;
		showGearSelector = true;
		gearSelectorItems = filterItems(chestplates, itemSlot);
	}

	function changeLeggings() {
		itemSlot = 0;
		showGearSelector = true;
		gearSelectorItems = filterItems(leggings, itemSlot);
	}

	function changeAccessory(index) {
		itemSlot = index;
		showGearSelector = true;
		gearSelectorItems = filterItems(accessories, itemSlot);
	}

	function itemSelected(event) {
		showGearSelector = false;

		const { item } = event.detail;

		const newItem = new BaseItem(
			item.id,
			item.name,
			item.level,
			item.description,
			item.image,
			item.type,
			item.baseStats,
			item.subTypes,
			item.gemSlots
		);

		if (newItem.name === 'None') {
			if (newItem.type === 'accessory') {
				updateAccessory(itemSlot, null);
			} else if (newItem.type === 'chestplate') {
				updateChestplate(null);
			} else if (newItem.type === 'leggings') {
				updateLeggings(null);
			}

			forceChange += 1;
			return;
		}

		updateItem(newItem, itemSlot);

		forceChange += 1;
	}

	function gearChanged() {
		forceChange += 1;
	}
</script>

<svelte:head>
	<title>Arcane Odyssey - Gear Builder</title>
</svelte:head>

<div>
	<div>
		<div use:gearSelectorRef />
		{#if showGearSelector}
			<GearSelector
				items={gearSelectorItems}
				on:close={() => (showGearSelector = false)}
				on:itemSelected={itemSelected}
			/>
		{/if}
	</div>
	<div class="space-y-2">
		<div class="flex space-x-4">
			<GearSorting />
			<!--			<GearFiltering />-->
		</div>
		{#key forceChange}
			<TotalStats stats={getTotalStats($gearBuild)} />
			<div class="flex space-x-2 justify-center">
				<div class="flex flex-col space-y-2">
					{#each [0, 1, 2] as i}
						<GearCustomizer
							item={$gearBuild.accessories[i] ?? null}
							itemSlot={i}
							placeholder={placeholders.accessory}
							on:click={() => changeAccessory(i)}
							on:change={gearChanged}
						/>
					{/each}
				</div>
				<div class="flex flex-col space-y-2">
					<GearCustomizer
						item={$gearBuild.chestplate}
						itemSlot={0}
						placeholder={placeholders.chestplate}
						on:click={changeChestplate}
						on:change={gearChanged}
					/>
					<GearCustomizer
						item={$gearBuild.leggings}
						itemSlot={0}
						placeholder={placeholders.leggings}
						on:click={changeLeggings}
						on:change={gearChanged}
					/>
				</div>
			</div>
		{/key}
	</div>
</div>
