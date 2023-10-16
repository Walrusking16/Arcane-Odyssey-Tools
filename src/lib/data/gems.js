import { addStat, Stat } from '$lib/data/base/stats.js';
import { BaseGem } from '$lib/data/base/baseGem.js';

export default [
	new BaseGem('Power', ['Ruby', 'Sunstone', 'Zircon'], [addStat(Stat.POWER, 3)]),
	new BaseGem('Defense', ['Amethyst', 'Diamond', 'Onyx'], [addStat(Stat.DEFENSE, 28)]),
	new BaseGem('Attack Speed', ['Sapphire', 'Tanzanite'], [addStat(Stat.ATTACK_SPEED, 9)]),
	new BaseGem('Attack Size', ['Emerald', 'Peridot'], [addStat(Stat.ATTACK_SIZE, 9)]),
	new BaseGem('Agility', ['Aquamarine', 'Tourmaline'], [addStat(Stat.AGILITY, 9)]),
	new BaseGem('Intensity', ['Citrine', 'Topaz'], [addStat(Stat.INTENSITY, 9)]),
	new BaseGem(
		'Attack Speed/Agility',
		['Lapis Lazuli'],
		[addStat(Stat.ATTACK_SPEED, 9), addStat(Stat.AGILITY, 9)]
	),
	new BaseGem(
		'Attack Speed/Intensity',
		['Larimar'],
		[addStat(Stat.ATTACK_SPEED, 9), addStat(Stat.INTENSITY, 9)]
	),
	new BaseGem(
		'Attack Size/Defense',
		['Agate'],
		[addStat(Stat.ATTACK_SIZE, 9), addStat(Stat.DEFENSE, 28)]
	),
	new BaseGem(
		'Attack Size/Power',
		['Malachite'],
		[addStat(Stat.ATTACK_SIZE, 9), addStat(Stat.POWER, 3)]
	),
	new BaseGem(
		'Power/Attack Speed',
		['Candelaria'],
		[addStat(Stat.POWER, 3), addStat(Stat.ATTACK_SPEED, 9)]
	),
	new BaseGem('Power/Agility', ['Morenci'], [addStat(Stat.POWER, 3), addStat(Stat.AGILITY, 9)]),
	new BaseGem(
		'Drawback/Defense',
		['Painite'],
		[addStat(Stat.DRAWBACK, 1), addStat(Stat.DEFENSE, 125)]
	),
	new BaseGem(
		'Agility/Intensity',
		['Kyanite'],
		[addStat(Stat.AGILITY, 9), addStat(Stat.INTENSITY, 9)]
	),
	new BaseGem(
		'Agility/Attack Size',
		['Variscite'],
		[addStat(Stat.AGILITY, 9), addStat(Stat.ATTACK_SIZE, 9)]
	)
];
