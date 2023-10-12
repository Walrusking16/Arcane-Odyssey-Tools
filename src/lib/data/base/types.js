export const Type = {
	ACCESSORY: "accessory",
	CHESTPLATE: "chestplate",
	LEGGINGS: "leggings",
	GEM: "gem",
}

export const SubType = {
	AMULET: "amulet",
}

export const typeToImagePath = (type) => {
	switch (type) {
		case Type.ACCESSORY:
			return "accessories";
		case Type.CHESTPLATE:
			return "chestplates";
		case Type.LEGGINGS:
			return "leggings";
	}
}