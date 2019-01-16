const {User_Master} = models = require('../../db/models');
const httpCodes = require('../../lib/http-codes')
const constants = require('../../lib/constants');
const errorMessages = require('../../lib/error-spells');
var Workout_Plan = require('../../mongo/schema/workout_plan');
module.exports = class WorkoutPlanEndpoint {
    constructor(){

    }

    workout(req, res){
        let __workout_plan = { "user_id" : req.headers.user_id, ...req.body};
        Workout_Plan.findOneOrCreate({user_id:req.headers.user_id},__workout_plan, (err, plan) => {
            return res.status(((plan.created) ? httpCodes.OK : httpCodes.CONFLICT)).json({
                "success": plan.created,
                "plan": plan
            });
        });
    }

    getWorkout(req, res){
        Workout_Plan.find({
            "user_id": req.headers.user_id
        }).lean().limit(1)
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

    
}