'use strict';

const FoodModel = require('./food');

class ClothesModel extends FoodModel {
	constructor(id, record) {
		super(0, []);
	}
}

module.exports = ClothesModel;
