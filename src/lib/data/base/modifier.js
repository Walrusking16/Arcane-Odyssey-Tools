import { addStat, Stat } from '$lib/data/base/stats.js';

export const Modifier = {
	ATLANTEAN: 'atlantean'
};

export const ModifierData = {
	[Modifier.ATLANTEAN]: {
		stats: [
			addStat(Stat.POWER, 12),
			addStat(Stat.DEFENSE, 107),
			addStat(Stat.ATTACK_SIZE, 36),
			addStat(Stat.ATTACK_SPEED, 36),
			addStat(Stat.AGILITY, 36),
			addStat(Stat.INTENSITY, 36)
		],
		apply: (stats, item) => {
			let statIndex = 0;
			const itemStats = [...item.baseStats, ...item.getGemStats()];
			let statAdded = false;

			while (statIndex < stats.length) {
				const stat = stats[statIndex];

				if (itemStats.find((itemStat) => itemStat.name === stat.name)) {
					statIndex++;
				} else {
					item.extraStats.push(stat);
					statAdded = true;
					break;
				}
			}

			if (!statAdded)
				item.extraStats.push(stats[0]);

			item.extraStats.push(addStat(Stat.INSANITY, 1));

			return item;
		}
	}
};

export function applyModifications(item) {
	item.extraStats = [];

	if (item.modifiers) {
		item.modifiers.forEach((modifier) => {
			item = ModifierData[modifier].apply(ModifierData[modifier].stats, item);
		});
	}

	return item;
}