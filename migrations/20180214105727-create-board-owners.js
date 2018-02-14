let models = require('../models');

module.exports = {
    up: function(queryInterface, Sequelize) {
        return models.Board_Owners.sync();
    },
    down: function(queryInterface, Sequelize) {
        return models.Board_Owners.drop();
    }
};