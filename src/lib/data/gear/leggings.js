import { BaseData } from '$lib/data/base/baseData.js';
import { Type } from '$lib/data/base/types.js';
import { addStat, Stat } from '$lib/data/base/stats.js';

const data = new BaseData(Type.LEGGINGS);

data.addItem(
	'Aereus Pants',
	120,
	'A set of black robe bottoms lined with bronze, obtained from a Dark Sealed Chest.',
	'gear/leggings/aereus_pants.webp',
	[addStat(Stat.ATTACK_SIZE, 29), addStat(Stat.INTENSITY, 20)],
	2
);

data.addItem(
	"Cernyx's Boots",
	120,
	'A pair of rough grey pants with sturdy black boots, made to be worn in the muddy swamp of the Forest of Cernunno.',
	'gear/leggings/cernyx__s_boots.webp',
	[addStat(Stat.DEFENSE, 142), addStat(Stat.ATTACK_SPEED, 18)],
	2
);

data.addItem(
	'Dark Bronze Boots',
	120,
	'A set of finely crafted black iron boots with trims of bronze, obtained from a Dark Sealed Chest.',
	'gear/leggings/dark_bronze_boots.webp',
	[addStat(Stat.DEFENSE, 72), addStat(Stat.ATTACK_SPEED, 26)],
	2
);

data.addItem(
	'Lion of Ravenna Leggings',
	120,
	'A pair of scarlet leggings trimmed in bronze, emblazoned with the symbol of the Ravenna Realm. These leggings were specifically made for General Argos, the Lion of Old Ravenna, and were stolen from him after he was killed in the dungeons of Fort Talos in the Bronze Sea.',
	'gear/leggings/lion_of_ravenna_leggings.webp',
	[addStat(Stat.DEFENSE, 142), addStat(Stat.ATTACK_SIZE, 24)],
	2
);

data.addItem(
	'Ravenna Apostle Leggings',
	120,
	'A pair of sturdy, metal-capped boots with red metal greaves. These leggings were specifically made to be worn by Lady Carina, a noble of the Ravenna Realm, and were stolen from her after she was defeated in the Shining Plains of Ravenna.',
	'gear/leggings/ravenna_apostle_leggings.webp',
	[addStat(Stat.POWER, 15), addStat(Stat.ATTACK_SPEED, 18)],
	2
);

data.addItem(
	'Ravenna Fallen King Boots',
	120,
	'A pair of dark red metal boots trimmed in bronze. They were specifically made for King Calvus IV.',
	'gear/leggings/ravenna_fallen_king_boots.webp',
	[addStat(Stat.POWER, 15), addStat(Stat.AGILITY, 13), addStat(Stat.ATTACK_SIZE, 13)],
	2
);

data.addItem(
	'Ravenna Noble Boots',
	120,
	'A finely crafted set of bronze armor trimmed in gold, with ornate fabric and golden chainmail. This armor was specifically made to be worn by the nobles of the Ravenna Realm, and was stolen from Lord Elius after he was defeated in the sky of the Bronze Sea.',
	'gear/leggings/ravenna_noble_boots.webp',
	[addStat(Stat.POWER, 15), addStat(Stat.AGILITY, 18)],
	2
);

data.addItem(
	'Siren Pants',
	120,
	'A white robe usually worn by Sirens, which are dangerous mythical creatures found in the Dark Sea. They appear as beautiful women, singing, only to lure in sailors and kill them with their wings and fangs.',
	'gear/leggings/siren_pants.webp',
	[addStat(Stat.AGILITY, 14), addStat(Stat.ATTACK_SPEED, 23)],
	2
);

data.addItem(
	'Sunken Iron Boots',
	120,
	'A set of boots made out of arcanium metal that have spent hundreds of years underwater, causing their properties to change. They seem to constantly produce water.',
	'gear/leggings/sunken_iron_boots.webp',
	[addStat(Stat.DEFENSE, 153), addStat(Stat.ATTACK_SIZE, 26)],
	2
);

data.addItem(
	'Theurgist Pants',
	120,
	'The lower part of a robe once worn by a powerful mage, which seems to provide some kind of divine protection when worn. It seems to be designed to fit three socketed jewels instead of two.',
	'gear/leggings/theurgist_pants.webp',
	[addStat(Stat.ATTACK_SPEED, 18), addStat(Stat.WARDING, 1)],
	3
);

data.addItem('Titanium Leggings', 0, '', 'gear/leggings/titanium_leggings.webp', [], 0);

data.addItem(
	'Vatrachos Boots',
	120,
	'A set of brightly colored boots imbued with some strange kind of power, it seems to grant the wearer great power... at a price.',
	'gear/leggings/vatrachos_boots.webp',
	[addStat(Stat.POWER, 28), addStat(Stat.DEFENSE, 72), addStat(Stat.DRAWBACK, 1)],
	2
);

export default data;
