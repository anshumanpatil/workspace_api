'use strict';
module.exports = function(sequelize, DataTypes) {
  var User_Details = sequelize.define('User_Details', {
	      user_id: {
	    	  allowNull: false,
          primaryKey: true,
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4
	      },
	      user_full_name: {
	    	  type: DataTypes.STRING
	      },
	      user_mobile: {
	    	  type: DataTypes.STRING
	      },
	      user_email: {
	    	  type: DataTypes.STRING
	      },
	      user_address: {
	    	  type: DataTypes.STRING
	      },
	      user_dob: {
	    	  type: DataTypes.DATE
	      },
	      user_doj: {
	    	  type: DataTypes.DATE
	      }
  }, {
	timestamps: false,
	classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User_Details;
};