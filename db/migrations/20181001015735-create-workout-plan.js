'use strict';
let models = require('../models');

module.exports = {
    up: function(queryInterface, Sequelize) {
        return models.Workout_Plan.sync();
    },
    down: function(queryInterface, Sequelize) {
        return models.Workout_Plan.drop();
    }
};