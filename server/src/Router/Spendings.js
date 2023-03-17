const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
	res.status(200).send('Get all spendings');
});

router.get('/:id', (req, res) => {
	res.status(200).send(`Get spending with id ${req.params.id}`);
});

router.post('/', (req, res) => {
	res.status(200).send('Add new spending');
});

router.patch('/:id', (req, res) => {
	res.status(200).send(`Update spending with id ${req.params.id}`);
});

router.delete('/:id', (req, res) => {
	res.status(200).send(`Delete spending with id ${req.params.id}`);
});

module.exports = router;
