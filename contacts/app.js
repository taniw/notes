// Set up server
var express = require('express');
var methodOverride = require('method-override');
var ejs = require('ejs');
var app = express();
var db = require('./db.js');
var bodyParser = require('body-parser');

app.set('view engine', 'ejs');

app.use(methodOverride('_method'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());



// Listen on port 3000
app.listen(3000);

//Inform about setup in terminal to see if server is running
console.log('Server is running!');

// Set up routes
app.get('/', function(req, res) {
	res.render('index.ejs');
});

app.get('/people', function(req, res) {
	db.query("SELECT * FROM people;", function(err, dbRes) {
		if(!err) {
			res.render('people/index', {people: dbRes.rows});
		}
	});
});

app.get('/people/new', function(req, res) {
	res.render('people/new');
});

app.get('/people/:id', function(req, res) {
	db.query("SELECT * FROM people WHERE id=$1", [req.params.id], function(err, dbRes) {
		if(!err) {
			res.render('people/show', {person: dbRes.rows[0]});
		}
	})
});


app.post('/people', function(req, res) {
	var params = [req.body.name, req.body.phone, req.body.email];

	db.query("INSERT INTO people (name, phone, email) VALUES ($1, $2, $3)", params, function(err, dbRes) {
		if (!err) {
			res.redirect('/people');
		}
	});
});

//**********************

app.get('/people/:id/edit', function(req, res) {
	db.query("SELECT * FROM people WHERE id=$1", [req.params.id], function(err, dbRes) {
		if (!err) {
			res.render('people/edit', { person: dbRes.rows[0] });
		}
	});
});

app.patch('/people/:id', function(req, res) {
	db.query("UPDATE people SET name = $1, phone = $2, email = $3 WHERE id = $4", [req.body.name, req.body.phone, req.body.email, req.params.id], function(err, dbRes) {
		if (!err) {
			res.redirect('/people/' + req.params.id);
		}
	});
});

//**********************


app.delete('/people/:id', function(req, res) {
	db.query("DELETE FROM people WHERE id = $1", [req.params.id], function(err, dbRes) {
		if (!err) {
			res.redirect('/people');
		}
	})
})


























