const express = require('express');
const config = require('../config/config.json');

const app = express();
const {port} = config;
const spendingsRoutes = require('./Router/Spendings');

app.listen(port, () => {
	console.log(`Express app is working at http://localhost:${port}`);
});

app.get('/', (req, res) => {
	res.status(200).send('Hello World!');
});

app.use('/api/spendings', spendingsRoutes);
