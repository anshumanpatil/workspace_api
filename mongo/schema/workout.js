var mongoose = require('mongoose');
var uuid = require('node-uuid');
var Schema = mongoose.Schema;

var workout_Schema = new Schema({
  _id: { type: String, default: function genUUID() {
      return uuid.v1()
  }},
  name: String,
  imageLinks: [{link: String}]
}, { versionKey: false });

var Workout = mongoose.model('Workout', workout_Schema);

module.exports = Workout;