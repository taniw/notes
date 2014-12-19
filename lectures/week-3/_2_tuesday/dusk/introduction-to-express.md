#Introduction to Express

##Example web server with Node
The below is to demonstrate how Node can be used to create network applications. You can specify exactly how the behavior is.

**server.js**

```
var http = require("http");

function doStuff(req, res) {
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.write("Hello World");
  res.end();
}

var server = http.createServer(doStuff);

server.listen(3000);

```

diffrent ways to terminate a connection

```
curl -i localhost:3000
```

##Our first Express App

###Setting up a project
1. Create a new folder for use with the project using `mkdir node_calculator`, and cd into `cd node_calculator`

First we want to start a new project by going `npm init`
Follow the instructions, clicking `enter` through the statements. you many want to specify a version number, but most default options should 
be fine. It will also specify an initial file, usually index.js to use



```
npm install --save express
touch index.js
```

###Installing nodemon
`npm install -g nodemon`

If we just ran `node nameOfFile.js`, node will not update its responses after the server has made.

###index.js

The following example, shows a few different ways to get routes working in Node. A `route` is a combination of a url pattern + HTTP Verb (get, post, delete, update)

```
var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('hello delmer');
});

app.get("/greet/:name/:lastname", function(req, res) {
  res.send("Hello " + req.params.name + " " + req.params.lastname)
})

app.get("/multiply/:x/:y", function(req, res) {
  res.send("The answer is: " + (req.params.x * req.params.y));
})

app.get("/add/:x/:y", function(req, res) {
  res.send("The answer is: " + (parseInt(req.params.x) + parseInt(req.params.y)));
})

app.listen(3000);
```
In addition to having routes where diffrent portions of the url are diffrent paramaters. We can use the generic string of the url in our route logic.

```
app.get("/add/*", function(req, res) {
  var myParams = req.params[0].split("/")
  var result = myParams.reduce( function(total, num){ return total + parseInt(num) }, 0)
  res.send("The answer is  " + result);
})
```
This will give you a url like `http://localhost:3000/add/5/3/3/2/3` and give you an answer.


###Running your Project
If `"main": "index.js"` is in your `package.json`, then running `nodemon` will automatically start your project and serving your file.

# More Express
## Views and Post Data


## Baseline

Let's start with what we had this morning:

`app.js`

```
var express = require('express'),
  app = express();

app.get('/', function(req, res){
  res.send('Hello world!');
});

```

### Views 

Fistly, we cannot keep using `res.send` to send a response. It would be much more efficient to store them in files. Let's make a folder, `/views`, and create an `index.html` page inside.

```
<!doctype html>

<html>
  <head>
  </head>
  <body>
    Hello world!
  </body>
</html>
```

and let's modify the `app.js` to use this file via `app#render`.

`app.js`

```
var express = require('express'),
  app = express();

app.get('/', function(req, res){
  // use a render
  res.render('index.html');
});

```

without setting the `view engine` this will cause an error.

### BodyParser

The next thing we need to get ready for is parsing params from a form, which you need an external module for called `body-parser`.

`app.js`

```
var express = require('express'),
  bodyParser = require('body-parser'),
  app = express();

// tell your app to use the module
app.use(bodyParser.urlencoded())

app.get('/', function(req, res){
  // use a render
  res.render('index.html');
});

```


### Templating

We might need to render some data into our views, so we'll also need a module for this, `ejs`. To do this change `index.html` to `index.ejs`.


`app.js`

```
var express = require('express'),
  bodyParser = require('body-parser'),
  ejs = require('ejs'),
  app = express();

// tell your app to use the module
app.use(bodyParser.urlencoded())

app.set('view engine', 'ejs');

app.get('/', function(req, res){
  // use a render
  res.render('index.ejs', {name: "Ruby Rud"});
});

```

then we need to update our `index.ejs` to use a templating variable.

`index.ejs`

```
<!doctype html>

<html>
  <head>
  </head>
  <body>
    Hello, <%= name %>!
  </body>
</html>
```