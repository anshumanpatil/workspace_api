const {User_Master, User_Profile, User_data, mongoConnection} = models = require('../../db/models');
const httpCodes = require('../../lib/http-codes')
var Profile = require('../../mongo/schema/profile');
module.exports = class ProfileEndpoint {
    constructor(){

    }
    
    postProfile(req, res){
        let __profile = {user_id:req.headers.user_id, ...req.body};
        
        Profile.findOneOrCreate({user_id:req.headers.user_id},__profile, (err, profile) => {
            res.status(httpCodes.OK).json({
                "success": true,
                "profile": profile
            });
        });
        
    }

    updateProfile(req, res){
        res.status(httpCodes.OK).json({
            "success": true,
            "profile": "Mongo"
        });
    }

    getProfile(req, res){
        
        Profile.find({
            "user_id": req.headers.user_id
        }).lean().limit(1)
        .exec(function(error, result) {
            if (error) { 
                res.status(httpCodes.NOTFOUND).json({
                    "success": false,
                    "error": error
                });
            }else{
                res.status(httpCodes.OK).json({
                    "success": true,
                    "profile": result
                });
            }
        })
    }

    
}