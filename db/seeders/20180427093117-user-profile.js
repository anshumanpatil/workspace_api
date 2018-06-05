'use strict';
let userProfile = require('./data/userProfile');

module.exports = {
  up: function (queryInterface, Sequelize) {
	  return queryInterface.bulkInsert('User_Details', userProfile)    
  },

  down: function (queryInterface, Sequelize) {
	  return queryInterface.bulkDelete('User_Details', null, {});  }
};
