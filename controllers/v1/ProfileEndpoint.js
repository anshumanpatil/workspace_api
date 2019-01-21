const { mongo } = models = require('../../db/models');
const { User_Profile } = mongo;

const httpCodes = require('../../lib/http-codes')

module.exports = class ProfileEndpoint {
    constructor(){

    }
    
    postProfile(req, res){
        let __profile = { "user_id" : req.headers.user_id, ...req.body};
        
        User_Profile.findOneOrCreate({user_id:req.headers.user_id},__profile, (err, profile) => {
            return res.status(((profile.created) ? httpCodes.OK : httpCodes.CONFLICT)).json({
                "success": profile.created,
                "profile": profile
            });
        });
    }

    updateProfile(req, res){
        let __profile = { "user_id" : req.headers.user_id, ...req.body };
        var query = { "user_id" : req.headers.user_id };
        
        User_Profile.findOneAndUpdate(query, __profile, { upsert : true }, (err, profile) => {
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
        
        User_Profile.find({
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