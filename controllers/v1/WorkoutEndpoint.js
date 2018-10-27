const {Workout_Plan} = models = require('../../db/models');
const httpCodes = require('../../lib/http-codes')
module.exports = class WorkoutEndpoint {
    constructor(){

    }

    getWorkoutPlan(req, res){
        return res.status(httpCodes.OK)
        .json({
            "success": true,
            "workout": "workout"
        });
    }

    putWorkoutPlan(req, res){
        let __body = req.body;
        return models.commonMethods
        .upsert(__body, __body, 'Workout_Plan')
        .then(__newWorkoutPlan => {
            return res.status(httpCodes.OK)
            .json(__newWorkoutPlan);
        })
        
    }
}