const {User_Master, User_Details} = models = require('@models');
const errorCodes = require('@lib/error-codes')
const constants = require('@lib/constants')
const jwt = require('jsonwebtoken');

module.exports = class UserEndpoint {
    constructor(){

    }

    getProfile(req, res){
        User_Details.findOne({ 
            where: { user_id : req.body.userId },
            raw : true
        })
        .then(function (profile) {
            if(!profile){
                res.status(errorCodes.NOTFOUND).json({
                    "success": false,
                    "error": "Not Found!"
                });
            }else{
                res.status(errorCodes.OK).json({
                    "success": true,
                    "profile": profile
                });
            }
            
        })
        
    }

    login(req, res){
        User_Master.findOne({ 
            where: { user_email : req.body.user_email },
            //attributes: ['user_email'],
            raw : true
        })
        .then(function (user) {
            if (user && User_Master.validPassword(req.body.user_password, user.user_password)) {
                
                let __userResult = {
                    id : user.id,
                    user_email : user.user_email
                }
                let __token = jwt.sign({ id: user.id }, constants.secret, {
                    expiresIn: 86400 // expires in 24 hours
                });
                
                return res.status(errorCodes.OK).json({
                    "success" : true,
                    "token" : __token,
                    "user" : __userResult
                })
            } else if (!user) {
                return res.status(errorCodes.UNAUTHORIZED).json({
                    "success" : false,
                    "error" : "User not found!"
                })
            } else if (!User_Master.validPassword(req.body.user_password, user.user_password)) {
                return res.status(errorCodes.UNAUTHORIZED).json({
                    "success" : false,
                    "error" : "Password missmath!"
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
                        error : 'User already exists!!',
                        user : __userResult
                    };
                }
            }).then(result=>{
                return res.status(result.status).json(result);
            })
        })
    }
}