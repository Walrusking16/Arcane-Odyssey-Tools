import {getStatIdByName} from "$lib/data/base/stats.js";

export class BaseBuild {
	constructor(accessories, chestplate, leggings) {
		this.accessories = accessories;
		this.chestplate = chestplate;
		this.leggings = leggings;
		this.gems = [];
	}

	getMaxGemSlots() {
		const items = this.getItems();
		let maxGemSlots = 0;

		for (let i = 0; i < items.length; i++) {
			const item = items[i];
			maxGemSlots += item.gemSlots;
		}

		return maxGemSlots;
	}

	getStats() {
		const items = this.getItems();
		const combinedStats = [];

		for (let i = 0; i < items.length; i++) {
			const item = items[i];
			for (const stat of Object.values(item.stats)) {
				const combinedStat = combinedStats.find((s) => s.name === stat.name);
				if (combinedStat) {
					combinedStat.value += stat.value;
				}
				else {
					combinedStats.push({...stat});
				}
			}
		}

		// get the gem stats
		for (let i = 0; i < this.gems.length; i++) {
			const gem = this.gems[i];
			for (const stat of Object.values(gem.stats)) {
				const combinedStat = combinedStats.find((s) => s.name === stat.name);
				if (combinedStat) {
					combinedStat.value += stat.value;
				}
				else {
					combinedStats.push({...stat});
				}
			}
		}

		return combinedStats;
	}

	verifyStats(stats) {
		const buildStats = this.getStats();

		// make sure all status are within the min and max values from the stats object
		for (let i = 0; i < buildStats.length; i++) {
			const buildStat = buildStats[i];
			const stat = stats.find((s) => s.id === getStatIdByName(buildStat.name));

			if (stat) {
				if (buildStat.value < stat.min || buildStat.value > stat.max) {
					return false;
				}
			}
		}

		return true;
	}

	getItems() {
		return [...this.accessories, this.chestplate, this.leggings];
	}
}