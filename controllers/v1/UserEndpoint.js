const {User_Master, User_Profile, User_data} = models = require('@models');
const errorCodes = require('@lib/error-codes')
const constants = require('@lib/constants');
const errorMessages = require('@lib/error-spells');
const jwt = require('jsonwebtoken');

module.exports = class UserEndpoint {
    constructor(){

    }

    putProfile(req, res){
        return User_Profile.createOrEditProfile(req.body)
        .then(result=>{
            res.status(errorCodes.OK).json(result);
        })
    }

    getProfile(req, res){
        User_data.findOne({ 
            where: { user_id : req.body.user_id },
            include : [{model:User_Profile, as: 'profile'}],
            raw : true
        }).then(__profile => {
            console.log("__profile", __profile);
            if(!__profile){
                res.status(errorCodes.NOTFOUND).json({
                    "success": false,
                    "error": errorMessages.PROFILE_NOT_FOUND
                });
            }else{
                res.status(errorCodes.OK).json({
                    "success": true,
                    "profile": __profile
                });
            } 
        })
    }

    login(req, res){
        User_Master.findOne({ 
            where: { user_email : req.body.user_email },
            raw : true
        })
        .then(function (user) {
            if (user && User_Master.validPassword(req.body.user_password, user.user_password)) {
                
                let __userResult = {
                    id : user.id,
                    user_email : user.user_email
                }
                let __token = jwt.sign({ id: user.id }, constants.secret, {
                    expiresIn: 6000 // expires in 10 min
                });
                
                return res.status(errorCodes.OK).json({
                    "success" : true,
                    "token" : __token,
                    "user" : __userResult
                })
            } else if (!user) {
                return res.status(errorCodes.UNAUTHORIZED).json({
                    "success" : false,
                    "error" : errorMessages.USER_NOT_FOUND
                })
            } else if (!User_Master.validPassword(req.body.user_password, user.user_password)) {
                return res.status(errorCodes.UNAUTHORIZED).json({
                    "success" : false,
                    "error" : errorMessages.PASSWORD_ISSMATH
                })
            } else {
                return res.status(errorCodes.FORBIDDEN).json(user)
            }
        });
    }

    register(req, res) {
        models.sequelize.transaction(function(t) {
            return User_Master.findOrCreate({
                where : req.body,
                raw : true,
                transaction : t
            }).spread(function(userResult, created) {
                let __userResult = {
                    id : userResult.id,
                    user_email : userResult.user_email
                }
                if (created) {
                    return {
                        success : true,
                        status: errorCodes.OK,
                        user : __userResult
                    };
                } else {
                    return {
                        success : false,
                        status : errorCodes.CONFLICT,
                        error : errorMessages.USER_ALREADY_EXISTS,
                        user : __userResult
                    };
                }
            }).then(result=>{
                return res.status(result.status).json(result);
            })
        })
    }
}