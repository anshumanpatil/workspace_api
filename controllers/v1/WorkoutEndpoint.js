const {User_Master, mongo} = models = require('../../db/models');
const { Workout } = mongo;
const httpCodes = require('../../lib/http-codes')
const errorMessages = require('../../lib/error-spells');
const _ = require('lodash');
module.exports = class WorkoutPlanEndpoint {
    constructor(){

    }

    putExercise(req, res){
        let __wo = req.body;
        Workout.findOneOrCreate(__wo, __wo, (err, workout) => {
            return res.status(((workout.created) ? httpCodes.OK : httpCodes.CONFLICT)).json({
                "success":workout.created ,
                "workout": workout
            });
        });
    }

    getAllExercise(req, res){
        console.log(req.query.id)
        let __woQuery = (req.query.id) ? {_id : req.query.id} : {};
        Workout.find(__woQuery, function(error, result) {
            if(result.length){
                let resultArray = [];
                _.each(result, (v, k)=>{
                    resultArray.push([v.id, v.name])
                })
                return res.status(httpCodes.OK).json({
                    "success": true,
                    "workout": (req.query.id) ? result : resultArray
                });
            }else{
                return res.status(httpCodes.OK).json({
                    "success": false,
                    "workout": result
                });

            }
        })
    }

    deleteExercise(req, res){
        Workout.findOneAndRemove({"_id": req.body.workout_id}, 
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