export const Stat = {
	POWER: 0,
	DEFENSE: 1,
	AGILITY: 2,
	ATTACK_SPEED: 3,
	ATTACK_SIZE: 4,
	INTENSITY: 5,
	INSANITY: 6,
	WARDING: 7,
	DRAWBACK: 8
};

export const stats = {
	[Stat.POWER]: newStat(
		'Power',
		'Power increases the damage done by player (Spells, Weapon Skills, Fighting Style Skills), which each point of power increasing damage by a flat amount.',
		'Power_Icon.webp',
		'#ff8400'
	),
	[Stat.DEFENSE]: newStat(
		'Defense',
		'Defense increases your maximum HP and health regeneration. Unlike most stats, it is not percentage based - each point of defense will increase maximum health by 1, and as health regeneration is proportional to maximum health, this also increases health regeneration by 0.01.',
		'Defense_Icon.webp',
		'#737373'
	),
	[Stat.AGILITY]: newStat(
		'Agility',
		'Agility increases your movement speed, dash length and jump power.',
		'Agility_Icon.webp',
		'#f9fffd',
		'#adced5'
	),
	[Stat.ATTACK_SPEED]: newStat(
		'Attack Speed',
		'Attack Speed increases the speed that attacks travel at, decreases the startup time for attacks, decreases the endlag for attacks, and increases the fire rate of multi-attack spells. It does not scale linearly, so its exact scaling is currently unknown.',
		'Speed_Icon.webp',
		'#f9ffff',
		'#798ccf'
	),
	[Stat.ATTACK_SIZE]: newStat(
		'Attack Size',
		'Attack size increases the size of all kinds of attacks. It is a percentage based stats, so its exact scaling is currently unknown.',
		'Size_Icon.webp',
		'#00ff00'
	),
	[Stat.INTENSITY]: newStat(
		'Intensity',
		'Intensity increases the duration of Status Effects inflicted by the player, increases the strength of the effects from Focus and Aura, increases the size of Magic rubble, puddles and clouds, and reduces the cooldown of Ultimate Art attacks.',
		'Intensity_Icon.webp',
		'#d39b00'
	),
	[Stat.INSANITY]: newStat(
		'Insanity',
		'Insanity is a negative stat that can be found on armor, which, as a stat, can only be found on items found in the Dark Sea (and as a result, other stats will be increased or added).',
		'Insanity_Icon.webp',
		'#8528de'
	),
	[Stat.WARDING]: newStat(
		'Warding',
		'Warding is a stat that counteracts Insanity. It will delay insanity effects at a rate of 1+((Warding x 2)*0.1), and also adds on the Warding value to the base wait time in between effects. (Meaning if the base wait time is 0 and you have Warding 6, the base wait time would be 6).',
		'Warding.webp',
		'#ffffff',
		'#cbcb45'
	),
	[Stat.DRAWBACK]: newStat(
		'Drawback',
		'Drawback causes the user to take 3% of their current health in damage whenever they use an attack. In exchange, the item gives you a large amount of other stats.',
		'Drawback.webp',
		'#dc4040'
	)
};

export const getStatName = (id) => {
	switch (id) {
		case Stat.POWER:
			return 'Power';
		case Stat.DEFENSE:
			return 'Defense';
		case Stat.AGILITY:
			return 'Agility';
		case Stat.ATTACK_SPEED:
			return 'Attack Speed';
		case Stat.ATTACK_SIZE:
			return 'Attack Size';
		case Stat.INTENSITY:
			return 'Intensity';
		case Stat.INSANITY:
			return 'Insanity';
		case Stat.WARDING:
			return 'Warding';
		case Stat.DRAWBACK:
			return 'Drawback';
		default:
			return 'Unknown Stat';
	}
};

export const getStatIdByName = (name) => {
	switch (name) {
		case 'Power':
			return Stat.POWER;
		case 'Defense':
			return Stat.DEFENSE;
		case 'Agility':
			return Stat.AGILITY;
		case 'Attack Speed':
			return Stat.ATTACK_SPEED;
		case 'Attack Size':
			return Stat.ATTACK_SIZE;
		case 'Intensity':
			return Stat.INTENSITY;
		case 'Insanity':
			return Stat.INSANITY;
		case 'Warding':
			return Stat.WARDING;
		case 'Drawback':
			return Stat.DRAWBACK;
		default:
			return -1;
	}
};

export const addStat = (id, value, multiply) => {
	multiply = multiply ?? true;

	const stat = stats[id];

	if (!stat) {
		console.error(`Stat with id ${id} does not exist.`);
		return {};
	}

	return {
		...stat,
		value,
		multiply,
		displayValue: value
	};
};

function newStat(name, description, image, valueColor, valueBorderColor) {
	return {
		name,
		description,
		image,
		valueColor,
		valueBorderColor: valueBorderColor ?? '',
		value: 0
	};
}
