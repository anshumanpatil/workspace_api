const httpCodes = require('@lib/http-codes')
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
        return res.status(httpCodes.OK)
        .json({
            "success": true,
            "workout": "workout"
        });
    }
}