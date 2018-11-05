const {User_Master, User_Profile, User_data, mongoConnection} = models = require('../../db/models');
const httpCodes = require('../../lib/http-codes')
var User = require('../../mongo/schema/user');
module.exports = class UserEndpoint {
    constructor(){

    }

    getMongo(req, res){
        var chris = new User({
            name: 'Chris',
            username: 'sevilayha',
            password: 'password' 
          });
          chris.save(function(err) {
            if (err) throw err;
          
            console.log('User saved successfully!');
            res.status(httpCodes.OK).json({
                "success": true,
                "profile": "Mongo"
            });
          });
        
    }

    putMongo(req, res){
        res.status(httpCodes.OK).json({
            "success": true,
            "profile": "Mongo"
        });
    }

    
}