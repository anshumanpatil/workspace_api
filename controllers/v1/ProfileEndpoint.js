const {User_Master, User_Profile, User_data} = models = require('../../db/models');
const httpCodes = require('../../lib/http-codes')
module.exports = class ProfileEndpoint {
    constructor(){

    }
    
    postProfile(req, res, next){
        res.status(200).json({
            method : "postProfile"
        })
    }

    updateProfile(req, res, next){
        res.status(200).json({
            method : "updateProfile"
        })
    }

    getProfile(req, res, next){
        res.status(200).json({
            method : "getProfile"
        })
    }

    
}