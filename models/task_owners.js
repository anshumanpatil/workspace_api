'use strict';
module.exports = function(sequelize, DataTypes) {
	var Task_Owners = sequelize.define('Task_Owners', {
		id : {
			allowNull : false,
			autoIncrement : true,
			primaryKey : true,
			type : DataTypes.INTEGER
		},
		task_id : {
			type : DataTypes.INTEGER
		},
		user_id : {
			type : DataTypes.INTEGER
		},
		isActive : {
			allowNull : false,
			type : DataTypes.INTEGER,
			defaultValue : 1,
			validate : {
				min : 0,
				max : 1
			}
		},
		createdBy : {
			type : DataTypes.INTEGER
		},
		createdAt : {
			allowNull : false,
			type : DataTypes.DATE
		},
		updatedAt : {
			allowNull : false,
			type : DataTypes.DATE
		}
	}, {
		classMethods : {
			associate : function(models) {
				// associations can be defined here
			}
		}
	});
	return Task_Owners;
};