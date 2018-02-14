'use strict';
module.exports = function(sequelize, DataTypes) {
	var Boards = sequelize.define('Boards', {
		id : {
			allowNull : false,
			autoIncrement : true,
			primaryKey : true,
			type : DataTypes.INTEGER
		},
		board_title : {
			type : DataTypes.STRING
		},
		board_primaryowner: {
            type: DataTypes.INTEGER,
	    },
	    isArchive: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
            validate: {
                min: 0,
                max: 1
            }
	    },
	    createdBy: {
	        type: DataTypes.INTEGER
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
	return Boards;
};