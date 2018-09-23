let models = require('../models');

module.exports = {
    up: function(queryInterface, Sequelize) {
        return models.User_Profile.sync();
    },
    down: function(queryInterface, Sequelize) {
        return models.User_Profile.drop();
    }
};