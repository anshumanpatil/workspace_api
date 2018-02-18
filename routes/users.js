var express = require('express');
let models = require('../models');
var router = express.Router();

/* GET all users listing. */
router.get('/', function(req, res, next) {
	models.User_Master.findAll({
		attributes: ['username']
	}).then(users=>{
		return res.status(200).json(users);
	})
});

/* POST login users id and username. */
/*
 * username password
 * 
 */
router.post('/login', function(req, res, next) {
	models.User_Master.findAll({
		where: req.body
	}).then(users=>{
		if(users){
			return res.status(200).json(users);
		}else{
			return res.status(400).json({
				success: false,
				error: 'Error No User Found!'
			});	
		}
	}).catch(error=>{
		return res.status(400).json({
			success: false,
			error: error
		});
	})
});

/* POST register password and username. */
/*
 * username password first_name last_name user_email isActive {0/1} role
 * createdBy {userId} emailVerified {0/1} profile_pic_url
 * 
 */
router.post('/register', function(req, res, next) {
	models.User_Master.findOrCreate({
		where: { 'username': req.body.username, 'password': req.body.password},
		defaults: req.body
	}).then(user=>{
		if(user){
			return res.status(200).json({success: true, user: user});
		}else{
			return res.status(400).json({
				success: false,
				error: 'Error No User Found!'
			});
		}
	}).catch(error=>{
		return res.status(400).json({
			success: false,
			error: error
		});
	})
});

router.get('/:user_id', function(req, res, next) {
		console.log('req ',req.params.user_id);
		models.Boards.findAll({where: {
			board_primaryowner:req.params.user_id
			}}).then(tasks=>{
				return res.status(200).json(tasks);
		})
});
module.exports = router;
