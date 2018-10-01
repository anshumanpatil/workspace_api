const httpCodes = require('@lib/http-codes')
module.exports = class WorkoutEndpoint {
    constructor(){

    }

    putWorkout(req, res){
        return res.status(httpCodes.OK)
        .json({
            "success": true,
            "workout": "workout"
        });
    }
}