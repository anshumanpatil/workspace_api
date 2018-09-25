'use strict';
module.exports = function(sequelize, DataTypes) {
  var Dept = sequelize.define('Dept', {
        dept_id: {
          allowNull: false,
          primaryKey: true,
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4
        },
        dept_name: {
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
  return Dept;
};