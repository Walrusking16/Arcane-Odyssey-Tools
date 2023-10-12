export class BaseItem {
	constructor(id, name, level, description, image, type, stats, subTypes, gemSlots) {
		this.id = id;
		this.name = name;
		this.level = level;
		this.description = description;
		this.image = image;
		this.type = type;
		this.stats = stats;
		this.subTypes = subTypes;
		this.gemSlots = gemSlots;
	}
}