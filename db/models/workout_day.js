'use strict';
module.exports = function(sequelize, DataTypes) {
  var Workout_Day = sequelize.define('Workout_Day', {
      workout_plan_id: {
          allowNull: false,
          primaryKey: true,
          type: DataTypes.UUID
        },
        day_id: {
          allowNull: false,
          type: DataTypes.UUID
        },
        day_month_date: {
          allowNull: false,
          type: DataTypes.STRING
        },
        day_name: {
          allowNull: false,
          type: DataTypes.STRING
        },
        day_type: {
          allowNull: false,
          type: DataTypes.STRING
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
  return Workout_Day;
};