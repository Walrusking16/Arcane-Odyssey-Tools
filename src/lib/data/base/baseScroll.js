import { getMultipliedScrollValue } from '$lib/data/scrolls.js';

const MAX_LEVEL = 120;

export class BaseScroll {
	constructor(name, stats) {
		this.name = name;
		this.image = '';
		this.stats = stats;
		this.description = `Stats shown are based on level ${MAX_LEVEL} item`;

		this.stats.forEach((stat) => {
			stat.displayValue = getMultipliedScrollValue(stat, MAX_LEVEL);
		});
	}

	// TODO: This is a duplicate of the getStats() function in BaseItem. Needs to be refactored
	getStats() {
		let stats = {};

		const updateStats = (statArray) => {
			statArray.forEach((stat) => {
				if (stats[stat.name]) {
					stats[stat.name].value += stat.value;
				} else {
					stats[stat.name] = { ...stat };
				}
			});
		};

		updateStats(this.stats);

		return Object.values(stats);
	}
}
