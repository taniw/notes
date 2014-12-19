//Set up server
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

app.use(express.static(__dirname + "/views"));

//Listen on port 3000
app.listen(3000);

//Setup in terminal to see if server is running
console.log('I work!');

//Set up routes
app.get('/', function(req, res) {
	res.render('index.ejs');
});

app.get('/entries', function(req, res) {
	db.query("SELECT * FROM posts;", function(err, dbRes) {
		if(!err) {
			console.log(dbRes.rows[0].title)
			
			res.render('pages/index', {entries: dbRes.rows});
		}
	});
});

app.get('/entries/new', function(req, res) {
	res.render('pages/new');
});

app.get('/entries/:id', function(req, res) {
	db.query("SELECT * FROM posts WHERE id=$1", [req.params.id], function(err, dbRes) {
		if(!err) {
			res.render('pages/show', {blogpost: dbRes.rows[0]});
		}
	})
});

app.post('/entries', function(req, res) {
	var params = [req.body.date, req.body.title, req.body.post];

	db.query("INSERT INTO posts (date, title, post) VALUES ($1, $2, $3)", params, function(err, dbRes) {
		if (!err) {
			res.redirect('/entries');
		}
	});
});

app.get('/entries/:id/edit', function(req, res) {
	db.query("SELECT * FROM posts WHERE id=$1", [req.params.id], function(err, dbRes) {
		if (!err) {
			res.render('pages/edit', {blogpost: dbRes.rows[0] });
		}
	});
});

app.patch('/entries/:id', function(req, res) {
	db.query("UPDATE posts SET date=$1, title=$2, post=$3 WHERE id=$4", [req.body.date, req.body.title, req.body.post, req.params.id], function(err, dbRes) {
		if (!err) {
			res.redirect('/entries/' + dreq.params.id);
		}
	});
});

app.delete('/entries/:id', function(req, res) {
	db.query("DELETE FROM posts WHERE id=$1", [req.params.id], function(err, dbRes) {
		if(!err) {
			res.redirect('/entries');
		}
	});
});




































