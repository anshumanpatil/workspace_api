let models = require('../models');

module.exports = {
    up: function(queryInterface, Sequelize) {
        return models.Boards.sync();
    },
    down: function(queryInterface, Sequelize) {
        return models.Boards.drop();
    }
};