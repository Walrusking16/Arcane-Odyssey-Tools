import {rarity as Rarity} from "$lib/data/base/rarity.js";
import {addStat, Stat} from "$lib/data/base/stats.js";
import {BaseGem} from "$lib/data/base/baseGem.js";

export default [
	new BaseGem(
		"Power",
		Rarity.RARE,
		[addStat(Stat.POWER, 3)]
	),
	new BaseGem(
		"Defense",
		Rarity.RARE,
		[addStat(Stat.DEFENSE, 28)]
	),
	new BaseGem(
		"Attack Speed",
		Rarity.RARE,
		[addStat(Stat.ATTACK_SPEED, 9)]
	),
	new BaseGem(
		"Attack Size",
		Rarity.RARE,
		[addStat(Stat.ATTACK_SIZE, 9)]
	),
	new BaseGem(
		"Agility",
		Rarity.RARE,
		[addStat(Stat.POWER, 9)]
	),
	new BaseGem(
		"Intensity",
		Rarity.RARE,
		[addStat(Stat.INTENSITY, 9)]
	),
	new BaseGem(
		"Attack Speed/Agility",
		Rarity.EXOTIC,
		[addStat(Stat.ATTACK_SPEED, 9), addStat(Stat.AGILITY, 9)]
	),
	new BaseGem(
		"Attack Speed/Intensity",
		Rarity.EXOTIC,
		[addStat(Stat.ATTACK_SPEED, 9), addStat(Stat.INTENSITY, 9)]
	),
	new BaseGem(
		"Attack Size/Defense",
		Rarity.EXOTIC,
		[addStat(Stat.ATTACK_SIZE, 9), addStat(Stat.DEFENSE, 28)]
	),
	new BaseGem(
		"Attack Size/Power",
		Rarity.EXOTIC,
		[addStat(Stat.ATTACK_SIZE, 9), addStat(Stat.POWER, 3)]
	),
	new BaseGem(
		"Power/Attack Speed",
		Rarity.EXOTIC,
		[addStat(Stat.POWER, 3), addStat(Stat.ATTACK_SPEED, 9)]
	),
	new BaseGem(
		"Power/Agility",
		Rarity.EXOTIC,
		[addStat(Stat.POWER, 3), addStat(Stat.AGILITY, 9)]
	),
	new BaseGem(
		"Drawback/Defense",
		Rarity.EXOTIC,
		[addStat(Stat.DRAWBACK, 1), addStat(Stat.DEFENSE, 125)]
	),
	new BaseGem(
		"Agility/Attack Size",
		Rarity.EXOTIC,
		[addStat(Stat.AGILITY, 9), addStat(Stat.ATTACK_SIZE, 9)]
	),
]