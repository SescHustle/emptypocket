// TODO: implement spending controller methods (getAll and create for first)
const model = require('../Model/Spending');

class SpendingController {
	#model;

	constructor() {
		this.#model = model;
	}

	getAll() {
		return this.#model.getAll();
	}

	getCertain(id) {
		return this.#model.getById(id);
	}

	addNew(spending) {
		return this.#model.add(spending);
	}
}

module.exports = new SpendingController();
