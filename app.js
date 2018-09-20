global.Joi = require('joi');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const _ = require('lodash');
const app = express();
const cors = require('cors');
const Validatior = require('./lib/validatorMiddleware');
const colors = require('./lib/colors');
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
				console.log(colors.bg.Blue, colors.fg.White, 'route ' + url + ' - method - ' ,colors.bg.Red, colors.fg.White, verb.toUpperCase(), colors.Reset, colors.bg.Blue, colors.fg.White,"From - ./controllers/" + controller + ".js", colors.Reset);
				var method = require("./controllers")[controller][def.method];
				if(def.schema) {
					app[verb](url, Validatior.validate(def.schema), method);
				}else{
					app[verb](url, method);
				}
				
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

  if(err.isValidationError){
	  console.log( err.output);
	  return res.status(err.output.statusCode).json(err.output)
	  
  }
  
  
  // render the error page
  res.status(err.status || 500);
  res.render('error', { errorString : err.message });
  
});

module.exports = app;
