'use strict';
let models = require('../models');

module.exports = {
    up: function(queryInterface, Sequelize) {
        return models.Dept.sync();
    },
    down: function(queryInterface, Sequelize) {
        return models.Dept.drop();
    }
};