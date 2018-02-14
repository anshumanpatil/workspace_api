'use strict';
module.exports = function(sequelize, DataTypes) {
	var Tasks = sequelize.define('Tasks', {
		id : {
			allowNull : false,
			autoIncrement : true,
			primaryKey : true,
			type : DataTypes.INTEGER
		},
		board_id : {
			type : DataTypes.INTEGER
		},
		task_title : {
			type : DataTypes.STRING
		},
		task_description : {
			type : DataTypes.STRING
		},
		task_owner : {
			type : DataTypes.INTEGER
		},
		status : {
			type : DataTypes.STRING
		},
		createdBy : {
			type : DataTypes.INTEGER
		},
		severity : {
			type : DataTypes.INTEGER
		},
		task_type : {
			type : DataTypes.STRING
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
	return Tasks;
};