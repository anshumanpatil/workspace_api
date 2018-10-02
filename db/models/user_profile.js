const moment = require('moment');
//const models  = require('./user_data');
'use strict';
module.exports = function(sequelize, DataTypes) {
  var User_Profile = sequelize.define('User_Profile', {
			profile_id: {
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
	      user_address: {
	    	  type: DataTypes.STRING
	      },
	      user_dob: {
					type: DataTypes.DATEONLY,
					get: function() {
						return moment.utc(this.getDataValue('user_dob')).format('YYYY-MM-DD');
					}
	      },
	      user_doj: {
					type: DataTypes.DATEONLY,
					get: function() {
						return moment.utc(this.getDataValue('user_doj')).format('YYYY-MM-DD');
					}
	      }
  }, {
	timestamps: false,
	freezeTableName: true,
	classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
	});
	
	User_Profile.createOrEditProfile = __body => {
		
		let __attributes = Object.assign({},__body);
		let user_id = __attributes.user_id;
		delete __attributes.user_id;

		return User_Profile.findOne({ 
			where: __attributes 
		})
		.then(profile => {
				if(profile) { // update
						return profile.update(__body);
				}
				else { // insert
						return User_Profile.create(__body);
				}
		})
		.then(createdProfile => {
			return models.User_data.findOrCreate({
				where : { 
					"user_id" : user_id,
					"profile_id" : createdProfile.profile_id
				}
			})
		})
		.spread((userData, created)=>{
			return userData;
		})

		
	}

  return User_Profile;
};