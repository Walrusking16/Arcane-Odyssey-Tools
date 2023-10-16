import { getMultipliedScrollValue } from '$lib/data/scrolls.js';
import { MAX_LEVEL } from '$lib/utils/level.js';

export class BaseScroll {
	constructor(name, stats) {
		this.name = name;
		this.image = '';
		this.stats = stats;
		this.description = `Stats shown are based on level ${MAX_LEVEL} item`;

		this.stats.forEach((stat) => {
			stat.displayValue = getMultipliedScrollValue(stat);
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
