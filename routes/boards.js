var express = require('express');
let models = require('../models');
var router = express.Router();

/* GET all boards listing. */
router.get('/', function(req, res, next) {
	models.Boards.findAll().then(boards=>{
		
		if(boards.length){
			return res.status(200).json(boards);
		}else{
			return res.status(400).json({
				success: false,
				error: 'Error No Board Found!'
			});	
		}
	})
});

/* Create Board API
parameter : {
 board_title = "xyz"
}
*/

router.post('/create', function(req, res, next) {
	models.Boards.findOrCreate({
		where: { 'board_title': req.body.board_title},
		defaults: req.body
	}).then(board=>{
		if(board){
			return res.status(200).json({success: true, board: board});
		}else{
			return res.status(400).json({
				success: false,
				error: 'Unable to create boards!'
			});
		}
	}).catch(error=>{
		return res.status(400).json({
			success: false,
			error: error
		});
	})
});
/* Update Board API
parameter : {
 boardId = "jhdgsadjhg"
 board_title = "xyz"
}
*/
router.patch('/', function(req, res, next) {
  models.Boards.update(req.body
	,{where: { 'id': req.body.boardId}}).then(board=>{
		if(board){
			return res.status(200).json({success: true, board: board});
		}else{
			return res.status(400).json({
				success: false,
				error: 'Unable to update boards!'
			});
		}
	}).catch(error=>{
		return res.status(400).json({
			success: false,
			error: error
		});
	})
});

module.exports = router;
