const {User_Master, mongo} = models = require('../../db/models');
const httpCodes = require('../../lib/http-codes')
const constants = require('../../lib/constants');
const errorMessages = require('../../lib/error-spells');
const Workout_Plan = require('../../mongo/schema/workout_plan');
const Workout = mongo.mongo.workout;
const _ = require('lodash');
module.exports = class WorkoutPlanEndpoint {
    constructor(){

    }

    workoutPlan(req, res){
        let __workout_plan = { "user_id" : req.headers.user_id, ...req.body};
        Workout_Plan.findOneOrCreate(__workout_plan,__workout_plan, (err, plan) => {
            return res.status(((plan.created) ? httpCodes.OK : httpCodes.CONFLICT)).json({
                "success": plan.created,
                "plan": plan
            });
        });
    }

    getWorkoutPlan(req, res){
        Workout_Plan.find({
            "user_id": req.headers.user_id
        })
        .exec(function(error, result) {
            if (error) { 
                return res.status(httpCodes.NOTFOUND).json({
                    "success": false,
                    "error": error
                });
            }else{
                return res.status(httpCodes.OK).json({
                    "success": true,
                    "plan": result
                });
            }
        })
    }

    deleteWorkoutPlan(req, res){
        Workout_Plan.findOneAndRemove({"user_id": req.headers.user_id}, 
        function(error, result) {
            if (error) { 
                return res.status(httpCodes.NOTFOUND).json({
                    "success": false,
                    "error": error
                });
            }else{
                return res.status(httpCodes.OK).json({
                    "success": true,
                    "plan": result
                });
            }
        })
        
    }

}