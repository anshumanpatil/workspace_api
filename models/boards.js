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
			type : DataTypes.STRING,
			allowNull: false
		},
		board_primaryowner: {
            type: DataTypes.INTEGER,
            allowNull: false
	    },
	    isArchive: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false,
            validate: {
                min: 0,
                max: 1
            }
	    },
	    createdBy: {
	        type: DataTypes.INTEGER,
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
				
			}
		}
	});
	return Boards;
};