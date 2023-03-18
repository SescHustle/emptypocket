// TODO: implement model (create and get all methods for first)
const fs = require('fs');

class SpendingModel {
	#spendings = [];

	constructor() {
		this.#spendings = Array.from(JSON.parse(fs.readFileSync(__dirname + '/spendings.json')));
	}

	getAll() {
		return this.#spendings;
	}

	getById(id) {
		const found = this.#spendings.find((spending) => spending.id === parseInt(id));

		return found || null;
	}

	add(spending) {
		console.log(spending);
		spending.id = this.#spendings.length + 1;
		this.#spendings.push(spending);
		fs.writeFileSync(__dirname + '/spendings.json', JSON.stringify(this.#spendings));

		return spending;
	}
}

module.exports = new SpendingModel();
