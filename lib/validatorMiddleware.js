const Joi = require('joi');
const CustomError = require('./customError');
const Extend = require('extend');
const constants = require('./constants')
const jwt = require('jsonwebtoken');

exports.validate =  function(schema, options) {
  let __schema = schema.schema;

  if(!schema.public) __schema.body.userId = Joi.string().required();

  options = options || {};

  return function validateRequest(req, res, next) {

    if(!schema.public){
      jwt.verify(req.headers.authorization, constants.secret, function(err, decoded) {
        req.body.userId = decoded.id;           
      })
    }
    
    var toValidate = {};
    /* ignore if */
    if (!__schema) {
      return next();
    }

    ['params', 'body', 'query'].
    forEach(function (key) {
      if (__schema[key]) {
        toValidate[key] = req[key];
      }
    });
    
    return Joi.validate(toValidate, __schema, options, onValidationComplete);

    function onValidationComplete(err, validated) {
      if (err) {
        return next(CustomError.badRequest(err.message, err.details));
      }

      // copy the validated data to the req object
      
      Extend(req, validated);

      return next();
    }
  }
};