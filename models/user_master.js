'use strict';
module.exports = function(sequelize, DataTypes) {
  let User_Master = sequelize.define('User_Master', {
	  	id: {
	        allowNull: false,
	        autoIncrement: true,
	        primaryKey: true,
	        type: DataTypes.INTEGER
	    },
	    username: {
	        type: DataTypes.STRING
	    },
	    password: {
	    	type: DataTypes.STRING
	    },
	    first_name: {
	        type: DataTypes.STRING
	    },
	    last_name: {
	        type: DataTypes.STRING
	    },
	    user_email: {
	        type: DataTypes.STRING
	    },
	    isActive: {
	    	allowNull: false,
            type: DataTypes.INTEGER,
            defaultValue: 1,
            validate: {
                min: 0,
                max: 1
            }
	    },
	    role: {
	        type: DataTypes.STRING
	    },
	    createdBy: {
	        type: DataTypes.INTEGER
	    },
	    emailVerified: {
	    	allowNull: false,
            type: DataTypes.INTEGER,
            defaultValue: 1,
            validate: {
                min: 0,
                max: 1
            }
	    },
	    profile_pic_url: {
	        type: DataTypes.STRING
	    },
	      createdAt: {
	        allowNull: false,
	        type: DataTypes.DATE
	    },
	      updatedAt: {
	        allowNull: false,
	        type: DataTypes.DATE
	    }
  }, {
    classMethods: {
      associate: models => {
        // associations can be defined here
      }
    }
  });
  return User_Master;
};