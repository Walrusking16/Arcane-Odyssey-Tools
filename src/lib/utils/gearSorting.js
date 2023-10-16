import { sortBy } from '$lib/stores/gearBuildStore.js';
import { SortOrder } from '$lib/data/base/sorting.js';
import { get } from 'svelte/store';

export function sortItems(items) {
	let sortedItems = [...items];
	switch (get(sortBy)) {
		case SortOrder.HIGHEST_STAT: {
			sortedItems = items.sort((a, b) => {
				const aStats = a.baseStats.reduce((acc, stat) => acc + stat.value, 0);
				const bStats = b.baseStats.reduce((acc, stat) => acc + stat.value, 0);

				return bStats - aStats;
			});
			break;
		}

		case SortOrder.LOWEST_STAT: {
			sortedItems = items.sort((a, b) => {
				const aStats = a.baseStats.reduce((acc, stat) => acc + stat.value, 0);
				const bStats = b.baseStats.reduce((acc, stat) => acc + stat.value, 0);

				return aStats - bStats;
			});
			break;
		}

		case SortOrder.NAME: {
			sortedItems = items.sort((a, b) => {
				return a.name.localeCompare(b.name);
			});
			break;
		}

		case SortOrder.SUBTYPE: {
			sortedItems = items.sort((a, b) => {
				if (a.subTypes.length <= 0 && b.subTypes.length <= 1) {
					return -1;
				}

				if (a.subTypes.length <= 0) {
					return -1;
				}

				if (b.subTypes.length <= 0) {
					return 1;
				}

				return a.subTypes[0].localeCompare(b.subTypes[0]);
			});
			break;
		}

		case SortOrder.GEM_SLOTS: {
			sortedItems = items.sort((a, b) => {
				return b.gemSlots - a.gemSlots;
			});
			break;
		}
	}

	return sortedItems;
}
