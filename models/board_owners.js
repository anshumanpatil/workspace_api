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
			type : DataTypes.INTEGER,
			allowNull: false
		},
		user_id : {
			type : DataTypes.INTEGER,
			allowNull: false
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
	
	Board_Owners.populateUsersById = uid =>{
		let qry = `
		SELECT brd.id, brd.board_title, brd.board_primaryowner, brdowner.user_id 
		FROM public."Boards" AS brd 
		INNER JOIN public."Board_Owners" AS brdowner 
		ON brdowner.board_id = brd.id WHERE brdowner.user_id = 1
		`;
		return sequelize.query(qry)
	}
	
	return Board_Owners;
};