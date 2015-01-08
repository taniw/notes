var express = require('express');
var app = express();
var request = require('request');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());


app.get('/', function(req, res) {
	res.render('index.ejs');
	});
	

app.get('/results', function(req, res) {
	var title1 = req.query['title'];
	request('http://omdbapi.com/?t=' + title1, function(error, response, body) {
		if(!error) {

			var movies = JSON.parse(body);
			// res.send(movies);
			res.render('results.ejs', {name: movies});
		}	
	});
});

app.listen(8000, function() {
	console.log("app is running");
});

