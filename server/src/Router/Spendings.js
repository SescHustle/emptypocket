const express = require('express');
const controller = require('../Controller/Spending');

const router = express.Router();

router.get('/', (req, res) => {
	res.status(200).send(controller.getAll());
});

router.get('/:id', (req, res) => {
	let status = 404;
	let data = 'No spending found for given ID.';
	const spending = controller.getCertain(req.params.id);
	if (spending) {
		status = 200;
		data = spending;
	}
	res.status(status).send(data);
});

router.post('/', (req, res) => {
	const spending = controller.addNew(req.body);
	res.status(200).send(req.body);
});

router.patch('/:id', (req, res) => {
	res.status(200).send(`Update spending with id ${req.params.id}`);
});

router.delete('/:id', (req, res) => {
	res.status(200).send(`Delete spending with id ${req.params.id}`);
});

module.exports = router;
