'use strict';

class FoodModel {
	constructor() {
		this.id = 0;
		this.db = []; // this represents an "in-memory" db
	}

	create(obj) {
		let record = {
			id: ++this.id,
			record: obj,
		};

		this.db.push(record);
		return record;
	}

	read(id) {
		if (id) {
			return this.db.find((record) => record.id === id);
		} else {
			return this.db;
		}
	}

	update(id, obj) {
		if (id) {
			const idx = this.db.indexOf(this.db.find((record) => record.id === id));
			const updatedRecord = {
				id: id,
				record: obj,
			};
			this.db.splice(idx, 1, updatedRecord);
			return this.db[idx];
		}
	}

	// delete(id) {
	// 	if (id) {
	// 		const idx = this.db.indexOf(this.db.find((record) => record.id === id));
	// 		this.db.splice(idx, 1);
	// 		return null;
	// 	}
	// }
	delete(id) {
		let index = this.db.indexOf(this.read(id));
		delete this.db[index];
	}
}

module.exports = FoodModel;
