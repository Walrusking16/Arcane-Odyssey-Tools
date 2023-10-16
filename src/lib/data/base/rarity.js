export const rarity = {
	COMMON: 0,
	UNCOMMON: 1,
	RARE: 2,
	EXOTIC: 3,
	LEGENDARY: 4
};

export const getRarityName = (rarity) => {
	switch (rarity) {
		case 0:
			return 'Common';
		case 1:
			return 'Uncommon';
		case 2:
			return 'Rare';
		case 3:
			return 'Exotic';
		case 4:
			return 'Legendary';
		default:
			return 'Unknown';
	}
};
