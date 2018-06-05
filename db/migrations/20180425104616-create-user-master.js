let models = require('../models');

module.exports = {
    up: function(queryInterface, Sequelize) {
        return models.User_Master.sync();
    },
    down: function(queryInterface, Sequelize) {
        return models.User_Master.drop();
    }
};