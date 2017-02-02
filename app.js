var express = require('express');
var ejs = require('ejs');

var app = express();

app.set('views', './views');
app.set('view engine', 'ejs')

;
app.use(express.static('public'));

	app.get('/', function (req, res) {
	  	res.render('index.ejs')
	});

	app.get('/:id', function (req, res) {
		var fileName = req.params.id;
	  	res.render(fileName)
	})


	app.use(function(req, res, next) {
	    var err = new Error('Not Found');
	    err.status = 404;
	    next(err);
	});


    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });



app.listen(80)

console.log("I love motorcycles on port 8081")

// exports = module.exports = app;