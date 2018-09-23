const bcrypt = require('bcryptjs'); 
'use strict';
module.exports = function(sequelize, DataTypes) {
  var User_Master = sequelize.define('User_Master', {
      id: {
          allowNull: false,
          primaryKey: true,
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4
        },
        user_email: {
          type: DataTypes.STRING
        },
        user_password: {
          type: DataTypes.STRING
        },
        createdAt: {
          allowNull: false,
          type: DataTypes.DATE
        },
        updatedAt: {
          allowNull: false,
          type: DataTypes.DATE
        }
  }, {
    freezeTableName: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  
  User_Master.validPassword = (user_password, hashed_password) => {
    return bcrypt.compareSync(user_password, hashed_password);
  };

  User_Master.beforeCreate((user, options) => {
    return bcrypt.hash(user.user_password, 10)
        .then(hash => {
            user.user_password = hash;
        })
        .catch(err => { 
            throw new Error(); 
        });
  });

  return User_Master;
};