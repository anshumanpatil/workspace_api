var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var _ = require('lodash');
var app = express();
var cors = require('cors');
let colors = require('./lib/colors');
// view engine setup

app.use(cors());
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));

console.log("\n\n")
_.each(require("./config"), function (controller) {
	_.each(require("./config/" + controller), function (verbs, url) {
		_.each(verbs, function (def, verb) {
			if(def.hasOwnProperty("html") && def.html){
				app.get(url, function(req, res) {
					res.render(def.file);
				});
			}else{
				console.log(colors.bg.Blue, colors.fg.White, 'route ' + url + ' - method - ' ,colors.bg.Red, colors.fg.White, verb.toUpperCase(), colors.Reset);
				var method = require("./controllers")[controller][def.method];
				app[verb](url, method);
			}
		})
	})
})
console.log("\n\n")

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  console.log(err)
  
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
