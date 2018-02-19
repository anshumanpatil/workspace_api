var express = require('express');
let models = require('../models');
var router = express.Router();

/**
 * @api {get} / getAllUsers
 * @apiName Get getAllUsers
 * @apiGroup Users
 * @apiDescription Get all User List.
 * @apiSuccess (200 OK) {Array} array of users.
 * @apiSuccessExample {json} Successful Response:
 *     HTTP/1.1 200 OK
 * [
 *     {
 *         "id": 1,
 *         "username": "demo",
 *         "password": "demo",
 *         "first_name": "anshu",
 *         "last_name": "patil",
 *         "user_email": "asdf@aaa.com",
 *         "isActive": 1,
 *         "role": "master",
 *         "createdBy": 1,
 *         "emailVerified": 1,
 *         "profile_pic_url": "anshu.jpg",
 *         "createdAt": "2018-02-19T07:26:40.934Z",
 *         "updatedAt": "2018-02-19T07:26:40.934Z"
 *     },
 *     {
 *         "id": 2,
 *         "username": "anshu",
 *         "password": "anshu",
 *         "first_name": "anshu",
 *         "last_name": "patil",
 *         "user_email": "asdf@aaa.com",
 *         "isActive": 1,
 *         "role": "master",
 *         "createdBy": 1,
 *         "emailVerified": 1,
 *         "profile_pic_url": "anshu.jpg",
 *         "createdAt": "2018-02-19T07:36:33.282Z",
 *         "updatedAt": "2018-02-19T07:36:33.282Z"
 *     }
 * ]     
 */
router.get('/', function(req, res, next) {
	models.User_Master.findAll().then(users=>{
		return res.status(200).json(users);
	})
});

/**
 * @api {post} /login Login
 * @apiName Get Logged User
 * @apiGroup Users
 * @apiDescription Get User Login Info.
 * @apiParam {string} username username of login user.
 * @apiParam {string} password password of login user.
 * @apiSuccess (200 OK) {Array} array Array of user info.
 * @apiSuccessExample {json} Successful Response:
 *     HTTP/1.1 200 OK
 * [
 *     {
 *         "id": 1,
 *         "username": "demo",
 *         "password": "demo",
 *         "first_name": "anshu",
 *         "last_name": "patil",
 *         "user_email": "asdf@aaa.com",
 *         "isActive": 1,
 *         "role": "master",
 *         "createdBy": 1,
 *         "emailVerified": 1,
 *         "profile_pic_url": "anshu.jpg",
 *         "createdAt": "2018-02-19T07:26:40.934Z",
 *         "updatedAt": "2018-02-19T07:26:40.934Z"
 *     }
 * ]
 */
router.post('/login', function(req, res, next) { //multiple user validation remaining
	models.User_Master.findAll({
		where: req.body
	}).then(users=>{
		if(users.length){
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
/**
 * @api {post} /register Register
 * @apiName Register User
 * @apiGroup Users
 * @apiDescription Create User Login.
 * @apiParam {string} username username of new user.
 * @apiParam {string} password password of new user.
 * @apiParam {string} first_name first_name of new user.
 * @apiParam {string} last_name last_name of new user.
 * @apiParam {string} user_email user_email of new user.
 * @apiParam {number} isActive isActive of new user[0 or 1].
 * @apiParam {string} role role of new user.
 * @apiParam {number} createdBy createdBy of new user[user_id].
 * @apiParam {number} emailVerified emailVerified of new user[0 or 1].
 * @apiSuccess (200 OK) {Object} Object Object of new user info.
 * @apiSuccessExample {json} Successful Response:
 *     HTTP/1.1 200 OK
 * {
 *     "success": true,
 *     "user": [
 *         {
 *             "id": 2,
 *             "username": "anshu",
 *             "password": "anshu",
 *             "first_name": "anshu",
 *             "last_name": "patil",
 *             "user_email": "asdf@aaa.com",
 *             "isActive": 1,
 *             "role": "master",
 *             "createdBy": 1,
 *             "emailVerified": 1,
 *             "profile_pic_url": "anshu.jpg",
 *             "createdAt": "2018-02-19T07:36:33.282Z",
 *             "updatedAt": "2018-02-19T07:36:33.282Z"
 *         },
 *         false
 *     ]
 * }
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

router.post('/userInfo', function(req, res, next) {
	models.User_Master.findOne({where : {id : req.body.user_id}})
	.then(user=>{
		return user;
	}).then(userInfo=>{
		return models.Boards.findAll({where: {
			board_primaryowner:userInfo.id
		}}).then(boards=>{
			return {user: userInfo, board : boards};
		})
	}).then(allInfo=>{
		return res.status(200).json(allInfo);
	})
});

router.post('/getAllBoards', function(req, res, next) {
	models.Board_Owners.findAll({where : {user_id : req.body.user_id}})
	.then(boardOwners=>{
		return res.status(200).json(boardOwners);
	})
});

module.exports = router;
