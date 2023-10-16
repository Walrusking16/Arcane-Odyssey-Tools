import { emptyGem } from '$lib/data/base/baseGem.js';

export class BaseItem {
	constructor(id, name, level, description, image, type, stats, subTypes, gemSlots) {
		this.id = id;
		this.name = name;
		this.level = level;
		this.description = description;
		this.image = image;
		this.type = type;
		this.baseStats = stats;
		this.subTypes = subTypes;
		this.gemSlots = gemSlots;
		this.extraStats = [];
		this.gems = [];
		this.enchant = null;

		for (let i = 0; i < gemSlots; i++) {
			this.gems.push(emptyGem());
		}
	}

	getGemStats() {
		let stats = {};

		this.gems.forEach((gem) => {
			gem.stats.forEach((stat) => {
				if (stats[stat.name]) {
					stats[stat.name].value += stat.value;
				} else {
					stats[stat.name] = { ...stat };
				}
			});
		});

		return Object.values(stats);
	}

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

		updateStats(this.baseStats);
		updateStats(this.extraStats);
		updateStats(this.getGemStats());

		return Object.values(stats);
	}
}
