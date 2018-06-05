'use strict';
let user = require('./data/catagory');

module.exports = {
  up: function (queryInterface, Sequelize) {
	  return queryInterface.bulkInsert('catagories', user)    
  },

  down: function (queryInterface, Sequelize) {
	  return queryInterface.bulkDelete('catagories', null, {});  }
};
