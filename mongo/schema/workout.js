var mongoose = require('mongoose');
var uuid = require('node-uuid');
var Schema = mongoose.Schema;

var subSchema = Schema({
  link: String
},{ _id : false });

var workout_Schema = new Schema({
  _id: { type: String, default: function genUUID() {
      return uuid.v1()
  }},
  name: String,
  imageLinks: [subSchema]
}, { versionKey: false });


workout_Schema.statics.findOneOrCreate = function (condition, doc, callback) {
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

module.exports = mongoose.model('Workout', workout_Schema);