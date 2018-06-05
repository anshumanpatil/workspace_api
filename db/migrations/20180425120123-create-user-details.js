let models = require('../models');

module.exports = {
    up: function(queryInterface, Sequelize) {
        return models.User_Details.sync();
    },
    down: function(queryInterface, Sequelize) {
        return models.User_Details.drop();
    }
};