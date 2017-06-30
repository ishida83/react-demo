const express = require('express');
const path = require('path');

const page = require("../dist/page.generator.js").page;

const app = express();
const port = 9090;

app.use(express.static(path.join(__dirname, '..', 'dist')));

app.get('/', function (req, res) {
	let props = {
		initialCount: 9
	};
	let html = page(props);
	res.end(html);
});

app.listen(port, function () {
	console.log('Listening on port %d', port);
});