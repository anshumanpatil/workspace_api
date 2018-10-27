const {User_Master, User_Profile, User_data} = models = require('../../db/models');
const httpCodes = require('../../lib/http-codes')
const constants = require('../../lib/constants');
const errorMessages = require('../../lib/error-spells');
const jwt = require('jsonwebtoken');

module.exports = class UserEndpoint {
    constructor(){

    }

    putProfile(req, res){
        return User_Profile.createOrEditProfile(req.body)
        .then(result=>{
            User_data.findOne({ 
                where: { user_id : req.body.user_id },
                include : [{model:User_Profile, as: 'profile'}],
                raw : true
            }).then(__profile => {
                if(!__profile){
                    res.status(httpCodes.NOTFOUND).json({
                        "success": false,
                        "error": errorMessages.PROFILE_NOT_FOUND
                    });
                }else{
                    res.status(httpCodes.OK).json({
                        "success": true,
                        "profile": models.commonMethods.cleanResult(__profile)
                    });
                } 
            })
        })
    }

    getProfile(req, res){
        User_data.findOne({ 
            where: { user_id : req.body.user_id },
            include : [{model:User_Profile, as: 'profile'}],
            raw : true
        }).then(__profile => {
            if(!__profile){
                res.status(httpCodes.NOTFOUND).json({
                    "success": false,
                    "error": errorMessages.PROFILE_NOT_FOUND
                });
            }else{
                res.status(httpCodes.OK).json({
                    "success": true,
                    "profile": models.commonMethods.cleanResult(__profile)
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
                
                return res.status(httpCodes.OK).json({
                    "success" : true,
                    "token" : __token,
                    "user" : __userResult
                })
            } else if (!user) {
                return res.status(httpCodes.UNAUTHORIZED).json({
                    "success" : false,
                    "error" : errorMessages.USER_NOT_FOUND
                })
            } else if (!User_Master.validPassword(req.body.user_password, user.user_password)) {
                return res.status(httpCodes.UNAUTHORIZED).json({
                    "success" : false,
                    "error" : errorMessages.PASSWORD_ISSMATH
                })
            } else {
                return res.status(httpCodes.FORBIDDEN).json(user)
            }
        });
    }

    register(req, res) {
        models.sequelize.transaction(function(t) {
            return User_Master.findOne({
                where : {
                    "user_email" : req.body.user_email
                },
                raw : true,
                transaction : t
            }).then(function(userResult) {
                if(userResult){
                    return {
                        'success': false,
                        'user': userResult
                    }
                }else{
                    return User_Master.create(req.body);
                }
                
            }).then(newUser=>{
                if(newUser.hasOwnProperty('success')){
                    return res.status(httpCodes.CONFLICT).json(newUser);
                }else{
                    return res.status(httpCodes.CREATED).json(newUser);
                }
            })
        })
    }
}