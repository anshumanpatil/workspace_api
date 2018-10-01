'use strict';
module.exports = {
    '/workout/plan': {
        get: {
            method: 'getWorkoutPlan',
            public: true
        },
        put: {
            method: 'putWorkoutPlan',
            public: true
        }
    }
};