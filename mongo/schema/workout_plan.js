var mongoose = require('mongoose');
var uuid = require('node-uuid');
var Schema = mongoose.Schema;

var workout_planSchema = new Schema({
  _id: { type: String, default: function genUUID() {
      return uuid.v1()
  }},
  user_id: String,
  plan_name: String,
  mon: [{index: Number , planId: String}],
  tue: [{index: Number , planId: String}],
  wed: [{index: Number , planId: String}],
  thu: [{index: Number , planId: String}],
  fri: [{index: Number , planId: String}],
  sat: [{index: Number , planId: String}],
  sun: [{index: Number , planId: String}]
}, { versionKey: false });

workout_planSchema.statics.findOneOrCreate = function (condition, doc, callback) {
  console.log(condition, doc)
  const self = this;
  self.findOne(condition,(err, result) => {
    return result 
      ? callback(err, {created:false, ...result.toObject()})
      : self.create(doc, (err, result) => {
        // console.log(result)
        return callback(err, {created:true, ...result.toObject()});
      });
  });
};

var Workout_Plan = mongoose.model('Workout_Plan', workout_planSchema);

module.exports = Workout_Plan;