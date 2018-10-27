'use strict';
let models = require('../models');

module.exports = {
    up: function(queryInterface, Sequelize) {
        return models.Workout_Day.sync();
    },
    down: function(queryInterface, Sequelize) {
        return models.Workout_Day.drop();
    }
};