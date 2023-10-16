export class BaseGem {
	constructor(name, gemNames, stats) {
		this.name = name;
		this.gemNames = gemNames;
		this.stats = stats;
		this.description = `A gem made from ${gemNames.join(", ")} that can be socketed into an item.`;
		this.image = [];

		this.gemNames.forEach((gemName) => {
			this.image.push(`gear/gems/${gemName.toLowerCase().replace(' ', '_')}.webp`);
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

export function emptyGem() {
	return new BaseGem("", [], []);
}