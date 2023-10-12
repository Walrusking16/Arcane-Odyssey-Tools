import { writable } from 'svelte/store';
import {Stat} from "$lib/data/base/stats.js";

export const gearStats = writable([
	{id: Stat.POWER, min: 0, max: 999},
	{id: Stat.DEFENSE, min: 0, max: 999},
	{id: Stat.AGILITY, min: 0, max: 999},
	{id: Stat.ATTACK_SPEED, min: 0, max: 999},
	{id: Stat.ATTACK_SIZE, min: 0, max: 999},
	{id: Stat.INTENSITY, min: 0, max: 999},
	{id: Stat.INSANITY, min: 0, max: 999},
	{id: Stat.WARDING, min: 0, max: 999},
	{id: Stat.DRAWBACK, min: 0, max: 999},
]);

export const preferBestGems = writable(true);

export const updateActiveStat = (id, min, max) => {
	gearStats.update(stats => {
		const stat = stats.find(stat => stat.id === id);

		if (!stat) {
			return stats;
		}

		stats[stats.indexOf(stat)] = {...stat, min, max};

		return stats;
	});
}