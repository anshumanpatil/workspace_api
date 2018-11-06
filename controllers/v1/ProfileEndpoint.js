const {User_Master, User_Profile, User_data, mongoConnection} = models = require('../../db/models');
const httpCodes = require('../../lib/http-codes')
var Profile = require('../../mongo/schema/profile');
module.exports = class ProfileEndpoint {
    constructor(){

    }
    
    postProfile(req, res){
        let __profile = { "user_id" : req.headers.user_id, ...req.body};
        
        Profile.findOneOrCreate({user_id:req.headers.user_id},__profile, (err, profile) => {
            return res.status(((profile.created) ? httpCodes.OK : httpCodes.CONFLICT)).json({
                "success": true,
                "profile": profile
            });
        });
    }

    updateProfile(req, res){
        let __profile = { "user_id" : req.headers.user_id, ...req.body };
        var query = { "user_id" : req.headers.user_id };
        
        Profile.findOneAndUpdate(query, __profile, { upsert : true }, (err, profile) => {
            if (err || !profile) {
                return res.status(httpCodes.NOTFOUND).json({ error : "No profile found" })
            }else{
                return res.status(httpCodes.OK).json({
                    "success": true,
                    "profile": profile
                });
            }
        });
    }

    getProfile(req, res){
        
        Profile.find({
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
                    "profile": result
                });
            }
        })
    }

    
}