'use strict';
let user = require('./data/user');

module.exports = {
  up: function (queryInterface, Sequelize) {
	  return queryInterface.bulkInsert('User_Masters', user)    
  },

  down: function (queryInterface, Sequelize) {
	  return queryInterface.bulkDelete('User_Masters', null, {});  }
};
