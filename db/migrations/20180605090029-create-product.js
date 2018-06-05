let models = require('../models');

module.exports = {
    up: function(queryInterface, Sequelize) {
        return models.Product.sync();
    },
    down: function(queryInterface, Sequelize) {
        return models.Product.drop();
    }
};