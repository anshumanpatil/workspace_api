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

app.use(cors());
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));

const api_version = [
	'v1'
]

console.log("\n\n")
_.each(require(`./config/${api_version[0]}`), function (controller) {
	_.each(require(`./config/${api_version[0]}/` + controller), function (verbs, url) {
		_.each(verbs, function (def, verb) {
			if(def.hasOwnProperty("html") && def.html){
				app.get(url, function(req, res) {
					res.render(def.file);
				});
			}else{
				console.log(colors.bg.Blue, colors.fg.White, 'route ' + url + ' - method - ' ,colors.bg.Red, colors.fg.White, verb.toUpperCase(), colors.Reset, colors.bg.Blue, colors.fg.White,"From - ./controllers/" + controller + ".js", colors.Reset);
				var method = require(`./controllers/${api_version[0]}`)[controller][def.method];
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