var mongoose = require('mongoose');
var uuid = require('node-uuid');
var Schema = mongoose.Schema;

var workout_planSchema = new Schema({
  _id: { type: String, default: function genUUID() {
      return uuid.v1()
  }},
  mon: [{type: String}],
  tue: [{type: String}],
  wed: [{type: String}],
  thu: [{type: String}],
  fri: [{type: String}],
  sat: [{type: String}],
  sun: [{type: String}]
}, { versionKey: false });

var Workout_Plan = mongoose.model('Workout_Plan', workout_planSchema);

module.exports = Workout_Plan;