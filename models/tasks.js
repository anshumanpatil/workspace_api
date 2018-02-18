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
			type : DataTypes.INTEGER,
            allowNull: false
		},
		task_title : {
			type : DataTypes.STRING,
            allowNull: false
		},
		task_description : {
			type : DataTypes.STRING,
            allowNull: false
		},
		task_owner : {
			type : DataTypes.INTEGER,
            allowNull: false
		},
		status : {
			type : DataTypes.STRING,
            allowNull: false
		},
		createdBy : {
			type : DataTypes.INTEGER,
            allowNull: false
		},
		severity : {
			type : DataTypes.INTEGER,
            allowNull: false
		},
		task_type : {
			type : DataTypes.STRING,
            allowNull: false
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