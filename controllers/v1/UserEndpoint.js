const {User_Master} = models = require('../../db/models');
const httpCodes = require('../../lib/http-codes')
const jwtConfig = require('../../config/env').get('jwt');
const errorMessages = require('../../lib/error-spells');
const jwtManager = require('../../lib/jwtManager')(jwtConfig);

module.exports = class UserEndpoint {
    constructor(){

    }

    login(req, res){
        User_Master.findOne({ 
            where: { user_email : req.body.user_email },
            raw : true
        })
        .then(async function (user) {
            if (user && User_Master.validPassword(req.body.user_password, user.user_password)) {
                
                let __userResult = {
                    id : user.id,
                    user_email : user.user_email
                }

                let __token = await jwtManager.getToken(user.id, 6000);

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