'use strict';
module.exports = function(sequelize, DataTypes) {
  var User_data = sequelize.define('User_data', {
      user_data_id: {
          allowNull: false,
          primaryKey: true,
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4
        },
        user_id: {
          allowNull: false,
          primaryKey: true,
          type: DataTypes.UUID
        },
        profile_id: {
          allowNull: false,
          primaryKey: true,
          type: DataTypes.UUID
        }
  }, {
    timestamps: false,
    freezeTableName: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User_data;
};