const {User_Master} = models = require('../../db/models');
const httpCodes = require('../../lib/http-codes')
const constants = require('../../lib/constants');
const errorMessages = require('../../lib/error-spells');
var Workout_Plan = require('../../mongo/schema/workout_plan');
module.exports = class WorkoutPlanEndpoint {
    constructor(){

    }

    putExercise(req, res){
        return res.status(200).json({
            "success": true,
            "workout": "workout"
        });
    }

    getExercise(req, res){
        return res.status(200).json({
            "success": true,
            "workout": "workout"
        });
    }

    
}