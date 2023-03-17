// TODO: implement model (create and get all methods for first)
const fs = require('fs');

class SpendingModel {
	#spendings;

	constructor() {
		this.#spendings = JSON.parse(fs.readFileSync(__dirname + '/spendings.json'));
	}

	getAll() {
		return this.#spendings;
	}
}

module.exports = new SpendingModel();
