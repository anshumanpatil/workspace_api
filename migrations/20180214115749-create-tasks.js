let models = require('../models');

module.exports = {
    up: function(queryInterface, Sequelize) {
        return models.Tasks.sync();
    },
    down: function(queryInterface, Sequelize) {
        return models.Tasks.drop();
    }
};
