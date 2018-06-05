'use strict';
module.exports = function(sequelize, DataTypes) {
	var Catagory = sequelize.define('Catagory', {
		id : {
			allowNull : false,
			autoIncrement : true,
			primaryKey : true,
			type : DataTypes.INTEGER
		},
		catagory_name : {
			type : DataTypes.STRING
		}
	}, {
		timestamps: false,
		classMethods : {
			associate : function(models) {
				// associations can be defined here
			}
		}
	});
	return Catagory;
};