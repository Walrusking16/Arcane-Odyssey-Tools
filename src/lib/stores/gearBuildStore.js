import { writable } from 'svelte/store';
import { SortOrder } from '$lib/data/base/sorting.js';
import { applyModifications } from '$lib/data/base/modifier.js';
import { getMultipliedScrollValue } from '$lib/data/scrolls.js';

export const gearBuild = writable({
	accessories: [],
	chestplate: null,
	leggings: null
});

export const sortBy = writable(SortOrder.HIGHEST_STAT);

export const filterBy = writable([]);

function recalculateItem(item) {
	if (!item) {
		return;
	}

	item = applyModifications(item);

	if (item.enchant) {
		item.enchant.stats.forEach((stat) => {
			if (!stat.multiply) {
				item.extraStats.push(stat);
			}

			item.extraStats.push({...stat, value: getMultipliedScrollValue(stat, item.level)});
		});
	}

	return item;
}

export function updateAccessory(index, accessory) {
	gearBuild.update((build) => {
		build.accessories[index] = accessory;

		build.accessories[index] = recalculateItem(build.accessories[index]);

		return build;
	});
}

export function updateItem(item, index) {
	if (item.type === 'accessory') {
		updateAccessory(index, item);
	} else if (item.type === 'chestplate') {
		updateChestplate(item);
	} else if (item.type === 'leggings') {
		updateLeggings(item);
	}
}

export function updateChestplate(chestplate) {
	gearBuild.update((build) => {
		build.chestplate = chestplate;

		build.chestplate = recalculateItem(build.chestplate);
		return build;
	});
}

export function updateLeggings(leggings) {
	gearBuild.update((build) => {
		build.leggings = leggings;

		build.leggings = recalculateItem(build.leggings);
		return build;
	});
}

export function updateSortBy(sortOrder) {
	sortBy.update((sortBy) => {
		sortBy = sortOrder;
		return sortBy;
	});
}

export function updateFilterBy(filterByArray) {
	filterBy.update((filterBy) => {
		filterBy = filterByArray;
		return filterBy;
	});
}