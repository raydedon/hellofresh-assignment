const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
let cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.get('/api/hello', (req, res) => {
	res.send({express: 'Hello From Express'});
});
app.post('/api/world', (req, res) => {
	console.log(req.body);
	res.send(
		`I received your POST request. This is what you sent me: ${req.body.post}`,
	);
});
app.get('/api/recipes', (req, res) => {
	axios.get('https://s3-eu-west-1.amazonaws.com/frontend-dev-test/recipes.json')
		.then(response => {
	  res.send(response.data);
		})
		.catch(error => {
			console.log(error);
		});
});


app.listen(port, () => console.log(`Listening on port ${port}`));