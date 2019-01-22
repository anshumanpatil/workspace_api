const {User_Master, mongo} = models = require('../../db/models');
const { Workout_Plan, Workout } = mongo;
const httpCodes = require('../../lib/http-codes')
const errorMessages = require('../../lib/error-spells');
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
        console.log(req.query.all)
        let __woPlanQuery = (req.query.all && req.query.all==true) ? {} : {"user_id": req.headers.user_id};
        Workout_Plan.find(__woPlanQuery)
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