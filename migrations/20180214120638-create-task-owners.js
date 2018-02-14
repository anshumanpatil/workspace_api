let models = require('../models');

module.exports = {
    up: function(queryInterface, Sequelize) {
        return models.Task_Owners.sync();
    },
    down: function(queryInterface, Sequelize) {
        return models.Task_Owners.drop();
    }
};
