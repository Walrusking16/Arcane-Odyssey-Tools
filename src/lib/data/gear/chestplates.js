import {BaseData} from "$lib/data/base/baseData.js";
import {Type} from "$lib/data/base/types.js";
import {addStat, Stat} from "$lib/data/base/stats.js";

const data = new BaseData(Type.CHESTPLATE);

data.addItem(
	'Aereus Robes',
	120,
	'A set of dark purple robes lined with bronze, obtained from a Dark Sealed Chest.',
	'gear/chestplates/aereus_robes.webp',
	[
		addStat(Stat.ATTACK_SIZE, 39),
		addStat(Stat.INTENSITY, 27)
	],
	2
);

data.addItem(
	'Cernyx\'s Sleeveless Robe',
	120,
	'A sleeveless robe top made out of fine green fabric, specifically made to fit the large upper body of Cernyx, the Archon of the Greenwish Cult residing in the Forest of Cernunno. It was taken from him after he was defeated in combat.',
	'gear/chestplates/cernyx__s_sleeveless_robe.webp',
	[
		addStat(Stat.DEFENSE, 189),
		addStat(Stat.ATTACK_SPEED, 24)
	],
	2
);

data.addItem(
	'Dark Bronze Armor',
	120,
	'A set of finely crafted black iron armor with trims of bronze, obtained from a Dark Sealed Chest.',
	'gear/chestplates/dark_bronze_armor.webp',
	[
		addStat(Stat.DEFENSE, 96),
		addStat(Stat.ATTACK_SPEED, 36)
	],
	2
);

data.addItem(
	'Lion of Ravenna Armor',
	120,
	'A hulking set of scarlet armor trimmed in bronze, emblazoned with the symbol of the Ravenna Realm. This armor was specifically made for General Argos, the Lion of Old Ravenna, and was stolen from him after he was killed in the dungeons of Fort Talos in the Bronze Sea.',
	'gear/chestplates/lion_of_ravenna_armor.webp',
	[
		addStat(Stat.DEFENSE, 189),
		addStat(Stat.INTENSITY, 32)
	],
	2
);

data.addItem(
	'Ravenna Apostle Gi',
	120,
	'A finely sewn gi that was specifically made to be worn by Lady Carina, a noble of the Ravenna Realm. It was stolen from her after she was defeated in the Shining Plains of Ravenna.',
	'gear/chestplates/ravenna_apostle_gi.webp',
	[
		addStat(Stat.POWER, 21),
		addStat(Stat.ATTACK_SPEED, 24)
	],
	2
);

data.addItem(
	'Ravenna Fallen King Armor',
	120,
	'A set of bronze armor with an ornate scarlet trim. This armor was specifically made for King Calvus IV.',
	'gear/chestplates/ravenna_fallen_king_armor.webp',
	[
		addStat(Stat.POWER, 21),
		addStat(Stat.AGILITY, 18),
		addStat(Stat.ATTACK_SIZE, 18)
	],
	2
);

data.addItem(
	'Ravenna Noble Armor',
	120,
	'A finely crafted set of bronze armor trimmed in gold, with ornate fabric and golden chainmail. This armor was specifically made to be worn by the nobles of the Ravenna Realm, and was stolen from Lord Elius after he was defeated in the sky of the Bronze Sea.',
	'gear/chestplates/ravenna_noble_armor.webp',
	[
		addStat(Stat.POWER, 21),
		addStat(Stat.AGILITY, 24)
	],
	2
);

data.addItem(
	'Siren Top',
	120,
	'A dress top usually worn by Sirens, which are dangerous mythical creatures found in the Dark Sea. They appear as beautiful women, singing, only to lure in sailors and kill them with their wings and fangs.',
	'gear/chestplates/siren_top.webp',
	[
		addStat(Stat.AGILITY, 18),
		addStat(Stat.ATTACK_SPEED, 30)
	],
	2
);

data.addItem(
	'Sunken Iron Armor',
	120,
	'A set of armour made out of arcanium metal that has spent hundreds of years underwater, causing its properties to change. It seems to constantly produce water.',
	'gear/chestplates/sunken_iron_armor.webp',
	[
		addStat(Stat.DEFENSE, 204),
		addStat(Stat.ATTACK_SIZE, 36)
	],
	2
);

data.addItem(
	'Theurgist Robes',
	120,
	'A robe once worn by a powerful mage, which seems to provide some kind of divine protection when worn. It seems to be designed to fit three socketed jewels instead of two.',
	'gear/chestplates/theurgist_robes.webp',
	[
		addStat(Stat.ATTACK_SPEED, 36),
		addStat(Stat.WARDING, 1)
	],
	3
);

data.addItem(
	'Titanium Armor',
	0,
	'',
	'gear/chestplates/titanium_armor.webp',
	[

	],
	0
);

data.addItem(
	'Vatrachos Armor',
	120,
	'A set of brightly colored armor imbued with some strange kind of power, it seems to grant the wearer great power... at a price.',
	'gear/chestplates/vatrachos_armor.webp',
	[
		addStat(Stat.POWER, 37),
		addStat(Stat.DEFENSE, 97),
		addStat(Stat.DRAWBACK, 1)
	],
	2
);

export default data;