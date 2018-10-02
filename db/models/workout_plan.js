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
        workout_plan_sun_id: {
          allowNull: false,
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4
        },
        workout_plan_mon_id: {
          allowNull: false,
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4
        },
        workout_plan_tue_id: {
          allowNull: false,
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4
        },
        workout_plan_wed_id: {
          allowNull: false,
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4
        },
        workout_plan_thu_id: {
          allowNull: false,
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4
        },
        workout_plan_fri_id: {
          allowNull: false,
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4
        },
        workout_plan_sat_id: {
          allowNull: false,
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4
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