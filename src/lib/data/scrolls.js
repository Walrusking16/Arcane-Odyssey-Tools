import { addStat, Stat } from '$lib/data/base/stats.js';
import { BaseScroll } from '$lib/data/base/baseScroll.js';

export function getMultipliedScrollValue(stat, level) {
	if (stat.multiply) {
		return Math.floor(stat.value * (level / 10));
	}

	return stat.value;
}

export default [
	new BaseScroll('Powerful', [addStat(Stat.POWER, 1)]),
	new BaseScroll('Power', [addStat(Stat.POWER, 0.5)]),
	new BaseScroll('Armored', [addStat(Stat.DEFENSE, 8.667)]),
	new BaseScroll('Hard', [addStat(Stat.DEFENSE, 4.333)]),
	new BaseScroll('Agile', [addStat(Stat.AGILITY, 3)]),
	new BaseScroll('Nimble', [addStat(Stat.AGILITY, 1.5)]),
	new BaseScroll('Amplified', [addStat(Stat.INTENSITY, 1.5)]),
	new BaseScroll('Enhanced', [addStat(Stat.INTENSITY, 3)]),
	new BaseScroll('Bursting', [addStat(Stat.ATTACK_SIZE, 1.5)]),
	new BaseScroll('Explosive', [addStat(Stat.ATTACK_SIZE, 3)]),
	new BaseScroll('Swift', [addStat(Stat.ATTACK_SPEED, 1.5)]),
	new BaseScroll('Brisk', [addStat(Stat.ATTACK_SPEED, 3)]),
	new BaseScroll('Brisk', [addStat(Stat.ATTACK_SPEED, 3)]),
	new BaseScroll('Charged', [addStat(Stat.POWER, 0.65), addStat(Stat.INTENSITY, 1.5)]),
	new BaseScroll('Virtuous', [addStat(Stat.DEFENSE, 4.333), addStat(Stat.WARDING, 1, false)]),
	new BaseScroll('Hasty', [addStat(Stat.ATTACK_SPEED, 1.5), addStat(Stat.AGILITY, 1.5)]),
];