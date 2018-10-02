'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(module.filename);
var env       = process.env.NODE_ENV || 'development';
var config    = require('../config/config.json')[env];
var db        = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(function(file) {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});



db.User_data.belongsTo(db.User_Profile, { foreignKey:'profile_id' , as: 'profile' });


db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Remove id's from result
db.commonMethods = {
  cleanResult : (res) => {
    let __newResult = Object.assign({}, res);
    let __return = {};
    for (const key in __newResult) {
      let newKey = key.split('.')[1];
      
      if(key.indexOf('_id')<0) {
        __return[newKey] = __newResult[key];
      }
  }
    return __return;
  },
  upsert : (_testAttr, _insertAttr, __modelName ) => {
    return new Promise((acc,rej)=>{
      db[__modelName].findOne({
        where : _testAttr
      }).then(__obj=>{
        if(__obj) { 
          return __obj.update(_insertAttr);
        }
        else { 
            return db[__modelName].create(_insertAttr);
        }
      })
      .then(result=>acc(result))
      .catch(err=>rej(err))
    })
    
  }

}

module.exports = db;
