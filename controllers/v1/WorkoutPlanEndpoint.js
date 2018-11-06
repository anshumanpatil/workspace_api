const {User_Master} = models = require('../../db/models');
const httpCodes = require('../../lib/http-codes')
const constants = require('../../lib/constants');
const errorMessages = require('../../lib/error-spells');

module.exports = class WorkoutPlanEndpoint {
    constructor(){

    }

    workout(req, res){
        return res.status(httpCodes.OK).json({
            "success" : true
        })
    }

    
}