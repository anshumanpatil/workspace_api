'use strict';
module.exports = function(sequelize, DataTypes) {
  var Workout_Plan = sequelize.define('Workout_Plan', {
      workout_plan_id: {
          allowNull: false,
          primaryKey: true,
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4
        },
        workout_plan_name: {
          allowNull: false,
          type: DataTypes.STRING
        },
        workout_plan_sunday_id: {
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
  return Workout_Plan;
};