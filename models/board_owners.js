'use strict';
module.exports = function(sequelize, DataTypes) {
	var Board_Owners = sequelize.define('Board_Owners', {
		id : {
			allowNull : false,
			autoIncrement : true,
			primaryKey : true,
			type : DataTypes.INTEGER
		},
		board_id : {
			type : DataTypes.STRING
		},
		user_id : {
			type : DataTypes.STRING
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
	return Board_Owners;
};