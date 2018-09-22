let models = require('@models');
let errorCodes = require('@lib/error-codes')
module.exports = class UserEndpoint {
    constructor(){

    }

    login(req, res){
        models.User_Master.findOne({ 
            where: { user_email : req.body.user_email },
            raw : true
        })
        .then(function (user) {
            if (user && models.User_Master.validPassword(req.body.user_password, user.user_password)) {
                delete user.user_password
                return res.status(errorCodes.OK).json(user)
            } else if (!user) {
                return res.status(errorCodes.UNAUTHORIZED).json({
                    "error":"User not found!"
                })
            } else if (!models.User_Master.validPassword(req.body.user_password, user.user_password)) {
                return res.status(errorCodes.UNAUTHORIZED).json({
                    "error":"Password missmath!"
                })
            } else {
                return res.status(errorCodes.FORBIDDEN).json(user)
            }
        });
    }
    

    register(req, res) {
        models.sequelize.transaction(function(t) {
            return models.User_Master.findOrCreate({
                where : req.body,
                transaction : t
            }).spread(function(userResult, created) {
                if (created) {
                    return {
                        success : true,
                        status: errorCodes.OK,
                        user : userResult
                    };
                } else {
                    return {
                        success : false,
                        status : errorCodes.CONFLICT,
                        error : 'user already exists!!',
                        user : userResult
                        
                    };
                }
            }).then(result=>{
                return res.status(result.status).json(result);
            })
        })
    }
}