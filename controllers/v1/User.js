let models = require('../../db/models');
let colors = require('../../lib/colors');

function register(req, res, next) {
	models.sequelize.transaction(function(t) {
		return models.User_Master.findOrCreate({
			where : req.body,
			transaction : t
		}).spread(function(userResult, created) {
			if (created) {
				return res.status(200).json({
					success : true,
					user : userResult
				});
			} else {
				return res.status(400).json({
					success : false,
					error : 'user already exists!!',
					user: userResult
				});
			}
		});
	})
}

function login(req, res, next) {
	return models.User_Master.find({
		where : req.body,
		include: [
		     { model: models.User_Details }
		  ]
	}).then(userResult=>{
		if(userResult){
			return res.status(200).json({
				success : true,
				user : userResult
			});
		}else{
			console.log(colors.bg.Red, colors.fg.White , 'user not exists!!', colors.Reset);
			return res.status(400).json({
				success : false,
				error : 'user not exists!!'
			});
		}
	})
}

function forget(req, res, next) {
	return models.User_Master.find({
		include: [
		     { model: models.User_Details, where: { user_email: req.body.user_email } }
		  ]
	}).then(userResult=>{
		if(userResult){
			return res.status(200).json({
				success : true,
				user : userResult
			});
		}else{
			console.log(colors.bg.Red, colors.fg.White , 'user not exists!!', colors.Reset);
			return res.status(400).json({
				success : false,
				error : 'user not exists!!'
			});
		}
	})
}

function logout(req, res, next) {
	return res.status(200).json({
		success : true
	});
}

module.exports = {
	register,
	forget,
	login,
	logout
};