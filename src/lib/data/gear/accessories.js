import {addStat, Stat} from "../base/stats.js";
import {BaseData} from "../base/baseData.js";
import {Type, SubType} from "$lib/data/base/types.js";

const data = new BaseData(Type.ACCESSORY);

data.addItem(
	'Aereus Hat',
	120,
	'A dark purple hat lined with bronze, obtained from a Dark Sealed Chest.',
	'https://i.imgur.com/NeqZTZV.jpg',
	[
		addStat(Stat.ATTACK_SIZE, 29),
		addStat(Stat.INTENSITY, 20)
	],
	2
);

data.addItem(
	'Agility Amulet [ Dull ]',
	100,
	'Three rugged, amazonite gemstones embedded in a bronze chain necklace. The gemstones seem to give a small amount of agility.',
	'https://i.imgur.com/xnCtmYM.jpg',
	[
		addStat(Stat.AGILITY, 60)
	],
	0,
	[ SubType.AMULET ]
);

data.addItem(
	'Agility Amulet [ Fair ]',
	120,
	'Five amazonite gemstones embedded in a bronze chain necklace. The gemstones seem to give a decent amount of agility.',
	'https://i.imgur.com/jBitY1S.jpg',
	[
		addStat(Stat.AGILITY, 78)
	],
	0,
	[ SubType.AMULET ]
);

data.addItem(
	'Agility Amulet [ Poor ]',
	50,
	'A rugged, amazonite gemstone embedded in a bronze chain necklace. The gemstone seem to give a small amount of agility.',
	'https://i.imgur.com/xnCtmYM.jpg',
	[
		addStat(Stat.AGILITY, 25)
	],
	0,
	[ SubType.AMULET ]
);

data.addItem(
	'Arcanium Bracelet',
	120,
	'A bracelet made out of arcanium metal, capable of conducting magic. It can be worn on the wrist to increase the wearer\'s power.',
	'https://i.imgur.com/w5gO6Mm.jpg',
	[
		addStat(Stat.POWER, 21),
		addStat(Stat.INTENSITY, 6)
	],
	2
);

data.addItem(
	'Archon Quartz Amulet',
	120,
	'A large green quartz gemstone embedded in a polished silver socket, designed to increase the wearer\'s defense and attack speed. It was taken from Cernyx, the Archon of the Greenwish Cult, after he was defeated in combat.',
	'https://i.imgur.com/2FppDYo.jpg',
	[
		addStat(Stat.DEFENSE, 202),
		addStat(Stat.ATTACK_SPEED, 18)
	],
	0,
	[ SubType.AMULET ]
);

data.addItem(
	'Arcsphere',
	120,
	'An arcanium-glass dome capable of conducting magic, meant to be worn on the head.',
	'https://i.imgur.com/6XLzqal.jpg',
	[
		addStat(Stat.POWER, 21)
	],
	2
);

data.addItem(
	'Attack Size Amulet [ Dull ]',
	100,
	'Three rugged, peridot gemstones embedded in a bronze chain necklace. The gemstones seem to increase the size of your attacks slightly.',
	'https://i.imgur.com/ejnwQTF.jpg',
	[
		addStat(Stat.ATTACK_SIZE, 60)
	],
	0,
	[ SubType.AMULET ]
);

data.addItem(
	'Attack Size Amulet [ Fair ]',
	120,
	'Five peridot gemstones embedded in a bronze chain necklace. The gemstones seem to increase the size of your attacks by a decent amount.',
	'https://i.imgur.com/DgEPOxY.jpg',
	[
		addStat(Stat.ATTACK_SIZE, 78)
	],
	0,
	[ SubType.AMULET ]
);

data.addItem(
	'Attack Size Amulet [ Poor ]',
	50,
	'A rugged, peridot gemstone embedded in a bronze chain necklace. The gemstone seem to increase the size of your attacks slightly.',
	'https://i.imgur.com/E0u4EKC.jpg',
	[
		addStat(Stat.ATTACK_SIZE, 25)
	],
	0,
	[ SubType.AMULET ]
);

data.addItem(
	'Attack Speed Amulet [ Dull ]',
	100,
	'Three rugged, sapphire gemstones embedded in a bronze chain necklace. The gemstones seem to increase the speed of your attacks slightly.',
	'https://i.imgur.com/bPdHIwT.jpg',
	[
		addStat(Stat.ATTACK_SPEED, 60)
	],
	0,
	[ SubType.AMULET ]
);

data.addItem(
	'Attack Speed Amulet [ Fair ]',
	120,
	'Five sapphire gemstones embedded in a bronze chain necklace. The gemstones seem to increase the speed of your attacks by a decent amount.',
	'https://i.imgur.com/Hxc2Y6i.jpg',
	[
		addStat(Stat.ATTACK_SPEED, 78)
	],
	0,
	[ SubType.AMULET ]
);

data.addItem(
	'Attack Speed Amulet [ Poor ]',
	50,
	'A rugged, sapphire gemstone embedded in a bronze chain necklace. The gemstone seem to increase the speed of your attacks slightly.',
	'https://i.imgur.com/1wOssZU.jpg',
	[
		addStat(Stat.ATTACK_SPEED, 25)
	],
	0,
	[ SubType.AMULET ]
);

data.addItem(
	'Cape of Ravenna Loyalty',
	120,
	'A cape made out of fine orange cloth, emblazoned with the symbol of the Ravenna Realm. It was specifically made for General Argos, the Lion of Old Ravenna, and was stolen from him after he was killed in the dungeons of Fort Talos in the Bronze Sea.',
	'https://i.imgur.com/Hxc2Y6i.jpg',
	[
		addStat(Stat.AGILITY, 24),
		addStat(Stat.INTENSITY, 29)
	],
	2
);

data.addItem(
	'Cernyx\'s Faulds',
	120,
	'Long faulds of green cloth worn around the waist. They were taken from Cernyx, the Archon of the Greenwish Cult, after he was defeated in combat.',
	'https://i.imgur.com/fzZ9FjU.jpg',
	[
		addStat(Stat.DEFENSE, 142),
		addStat(Stat.ATTACK_SPEED, 18)
	],
	2
);

data.addItem(
	'Collared Cape',
	120,
	'A flowing collared cape made out of fine cloth.',
	'https://i.imgur.com/JUIQgS5.jpg',
	[
		addStat(Stat.POWER, 15),
		addStat(Stat.AGILITY, 18)
	],
	2
);

data.addItem(
	'Dark Bronze Helmet',
	120,
	'A finely crafted helmet made of black iron with trims of bronze, obtained from a Dark Sealed Chest.',
	'https://i.imgur.com/PxtJYep.jpg',
	[
		addStat(Stat.DEFENSE, 72),
		addStat(Stat.ATTACK_SPEED, 26)
	],
	2
);

data.addItem(
	'Defense Amulet [ Dull ]',
	100,
	'Three rugged, grey agate gemstones embedded in a bronze chain necklace. The gemstones seem to give a small amount of defense.',
	'https://i.imgur.com/szJpKiY.jpg',
	[
		addStat(Stat.DEFENSE, 178)
	],
	0,
	[ SubType.AMULET ]
);

data.addItem(
	'Defense Amulet [ Fair ]',
	120,
	'Five grey agate gemstones embedded in a bronze chain necklace. The gemstones seem to give a decent amount of defense.',
	'https://i.imgur.com/Ka1PPTD.jpg',
	[
		addStat(Stat.DEFENSE, 233)
	],
	0,
	[ SubType.AMULET ]
);

data.addItem(
	'Defense Amulet [ Poor ]',
	50,
	'One rugged, grey agate gemstone embedded in a bronze chain necklace. The gemstone seem to give a small amount of defense.',
	'https://i.imgur.com/5LF6ZcO.jpg',
	[
		addStat(Stat.DEFENSE, 81)
	],
	0,
	[ SubType.AMULET ]
);

data.addItem(
	'Intensity Amulet [ Dull ]',
	100,
	'Three rugged, goshenite gemstones embedded in a bronze chain necklace. The gemstones seem to increase your intensity slightly.',
	'https://i.imgur.com/pDH6zon.jpg',
	[
		addStat(Stat.INTENSITY, 60)
	],
	0,
	[ SubType.AMULET ]
);

data.addItem(
	'Intensity Amulet [ Fair ]',
	120,
	'Five goshenite gemstones embedded in a bronze chain necklace. The gemstones seem to increase your intensity by a decent amount.',
	'https://i.imgur.com/24TDE2K.jpg',
	[
		addStat(Stat.INTENSITY, 78)
	],
	0,
	[ SubType.AMULET ]
);

data.addItem(
	'Intensity Amulet [ Poor ]',
	50,
	'One rugged, goshenite gemstone embedded in a bronze chain necklace. The gemstone seem to increase your intensity slightly.',
	'https://i.imgur.com/3zLlEI1.jpg',
	[
		addStat(Stat.INTENSITY, 25)
	],
	0,
	[ SubType.AMULET ]
);

data.addItem(
	'Lion of Ravenna Helmet',
	120,
	'A heavy bronze helmet specifically made for General Argos, the Lion of Old Ravenna, and was stolen from him after he was killed in the dungeons of Fort Talos in the Bronze Sea.',
	'https://i.imgur.com/xMss19W.jpg',
	[
		addStat(Stat.DEFENSE, 142),
		addStat(Stat.INTENSITY, 24)
	],
	2
);

data.addItem(
	'Mantello of Ravenna\'s Fallen King',
	120,
	'A cape made out of fine red cloth with an orange fur collar, emblazoned with the symbol of the Ravenna Realm. It was specifically made for King Calvus IV, the Third King of Ravenna, and was stolen from him after he was killed in Ravenna Castello, at the heart of Ravenna Realm in the Bronze Sea.',
	'https://i.imgur.com/p3ljTRo.jpg',
	[
		addStat(Stat.POWER, 15),
		addStat(Stat.AGILITY, 13),
		addStat(Stat.ATTACK_SIZE, 13)
	],
	2
);

data.addItem(
	'Power Amulet [ Dull ]',
	100,
	'Three rugged, orange zircon gemstones embedded in a bronze chain necklace. The gemstones seem to give a small amount of power.',
	'https://i.imgur.com/xZckXsl.jpg',
	[
		addStat(Stat.POWER, 20)
	],
	0,
	[ SubType.AMULET ]
);

data.addItem(
	'Power Amulet [ Fair ]',
	120,
	'Five orange zircon gemstones embedded in a bronze chain necklace. The gemstones seem to give a decent amount of power.',
	'https://i.imgur.com/NBSMPEw.jpg',
	[
		addStat(Stat.POWER, 26)
	],
	0,
	[ SubType.AMULET ]
);

data.addItem(
	'Power Amulet [ Poor ]',
	50,
	'A rugged, orange zircon gemstone embedded in a bronze chain necklace. The gemstone seem to give a small amount of power.',
	'https://i.imgur.com/IhnCS7Y.jpg',
	[
		addStat(Stat.POWER, 9)
	],
	0,
	[ SubType.AMULET ]
);

data.addItem(
	'Ravenna Apostle Bracelets',
	120,
	'Colorful metal bracelets that were specifically made to be worn by Lady Carina, a noble of the Ravenna Realm. They were stolen from her after she was defeated in the Shining Plains of Ravenna.',
	'https://i.imgur.com/vAK4RMn.jpg',
	[
		addStat(Stat.POWER, 15),
		addStat(Stat.ATTACK_SPEED, 18)
	],
	2
);

data.addItem(
	'Ravenna Apostle Faulds',
	120,
	'Faulds of fine cloth to be worn around the wasit. They were specifically made to be worn by Lady Carina, a noble of the Ravenna Realm, and were stolen from her after she was defeated in the Shining Plains of Ravenna.',
	'https://i.imgur.com/xANT1CO.jpg',
	[
		addStat(Stat.POWER, 15),
		addStat(Stat.ATTACK_SPEED, 18)
	],
	2
);

data.addItem(
	'Ravenna Apostle Pauldrons',
	120,
	'Lightweight metal pauldrons that were specifically made to be worn by Lady Carina, a noble of the Ravenna Realm, and were stolen from her after she was defeated in the Shining Plains of Ravenna.',
	'https://i.imgur.com/M1YATlb.jpg',
	[
		addStat(Stat.POWER, 15),
		addStat(Stat.ATTACK_SPEED, 18)
	],
	2
);

data.addItem(
	'Shroud',
	120,
	'A bandana made out of fine cloth.',
	'https://i.imgur.com/XjlFXQy.jpg',
	[
		addStat(Stat.POWER, 15),
		addStat(Stat.AGILITY, 18)
	],
	2
);

data.addItem(
	'Sunken Iron Helmet',
	120,
	'A helmet made out of arcanium metal that has spent hundreds of years underwater, causing its properties to change. It seems to constantly produce water.',
	'https://i.imgur.com/fg5aYLT.jpg',
	[
		addStat(Stat.DEFENSE, 153),
		addStat(Stat.ATTACK_SIZE, 18)
	],
	2
);

data.addItem(
	'The Lost Crown of Ravenna',
	120,
	'A crown made out of sun-forged bronze, a technique invented by the Samerians. It was specifically made for King Calvus IV, the Third King of Ravenna, and was stolen from him after he was killed in Ravenna Castello, at the heart of the Ravenna Realm in the Bronze Sea.',
	'https://i.imgur.com/2Fxep24.jpg',
	[
		addStat(Stat.POWER, 15),
		addStat(Stat.AGILITY, 13),
		addStat(Stat.ATTACK_SIZE, 13)
	],
	2
);

data.addItem(
	'Theurgist Cloak',
	120,
	'A cloak once worn by a powerful mage, which seems to provide some kind of divine protection when worn. It seems to be designed to fit three socketed jewels instead of two.',
	'https://i.imgur.com/L40oIiI.jpg',
	[
		addStat(Stat.ATTACK_SPEED, 18),
		addStat(Stat.WARDING, 1)
	],
	3
);

data.addItem(
	'Theurgist Hat',
	120,
	'A hat once worn by a powerful mage, which seems to provide some kind of divine protection when worn. It seems to be designed to fit three socketed jewels instead of two.',
	'https://i.imgur.com/ppOrR0Z.jpg',
	[
		addStat(Stat.ATTACK_SPEED, 18),
		addStat(Stat.WARDING, 1)
	],
	3
);

data.addItem(
	'Titanium Helmet',
	0,
	'',
	'',
	[

	],
	0
);

data.addItem(
	'Vatrachos Cape',
	120,
	'A brightly colored cape imbued with some strange kind of power, it seems to grant the wearer great power... at a price.',
	'https://i.imgur.com/qaZpDtM.jpg',
	[
		addStat(Stat.POWER, 28),
		addStat(Stat.DEFENSE, 72),
		addStat(Stat.DRAWBACK, 1)
	],
	2
);

data.addItem(
	'Vatrachos Helmet',
	120,
	'A brightly colored helmet imbued with some strange kind of power, it seems to grant the wearer great power... at a price.',
	'https://i.imgur.com/2ekcbpz.jpg',
	[
		addStat(Stat.POWER, 28),
		addStat(Stat.DEFENSE, 72),
		addStat(Stat.DRAWBACK, 1)
	],
	2
);

export default data;