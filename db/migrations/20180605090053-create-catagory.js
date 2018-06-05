let models = require('../models');

module.exports = {
    up: function(queryInterface, Sequelize) {
        return models.Catagory.sync();
    },
    down: function(queryInterface, Sequelize) {
        return models.Catagory.drop();
    }
};