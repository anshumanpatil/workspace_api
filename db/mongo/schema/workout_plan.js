var mongoose = require('mongoose');
var uuid = require('node-uuid');
var Schema = mongoose.Schema;


var subSchema = Schema({
  index: Number, 
  workoutId: String
},{ _id : false });

var workout_planSchema = new Schema({
  _id: { type: String, default: function genUUID() {
      return uuid.v1()
  }},
  user_id: String,
  plan_name: String,
  mon: [subSchema],
  tue: [subSchema],
  wed: [subSchema],
  thu: [subSchema],
  fri: [subSchema],
  sat: [subSchema],
  sun: [subSchema]
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

module.exports = mongoose.model('Workout_Plan', workout_planSchema);