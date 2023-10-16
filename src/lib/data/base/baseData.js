import { BaseItem } from './baseItem.js';

export class BaseData {
	constructor(type) {
		this.data = [];
		this.type = type;
	}

	addItem(name, level, description, image, stats, gemSlots, subTypes) {
		gemSlots = gemSlots || 0;
		subTypes = subTypes || [];
		this.data.push(
			new BaseItem(
				this.data.length,
				name,
				level,
				description,
				image,
				this.type,
				stats,
				subTypes,
				gemSlots
			)
		);
	}

	getItem(id) {
		return this.data.find((item) => item.id === id);
	}

	getItems() {
		return this.data;
	}
}
