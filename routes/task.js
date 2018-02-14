var express = require('express');
let models = require('../models');
var router = express.Router();

/* GET all boards listing. */
router.get('/', function(req, res, next) {
	models.Tasks.findAll().then(tasks=>{
		return res.status(200).json(tasks);
	})
});

/* Create Board API
parameter : {
 task_title = "xyz",
 task_description = "hsgcjsgjhg",
 board_id = "vcnscshcg"
}
*/
router.post('/', function(req, res, next) {
	models.Tasks.findOrCreate({
		where: { 'id': req.body.task_id},
		defaults: req.body
	}).then(task=>{
		if(task){
			return res.status(200).json({success: true, task: task});
		}else{
			return res.status(400).json({
				success: false,
				error: 'Unable to create task!'
			});
		}
	}).catch(error=>{
		return res.status(400).json({
			success: false,
			error: error
		});
	})
});

/* Update Task API
parameter : {
 task_id = "jhdgsjdfh"
 task_title = "xyz",
 task_description = "hsgcjsgjhg",
 board_id = "vcnscshcg"
}
*/
router.patch('/', function(req, res, next) {
  models.Tasks.update(req.body
	,{where: { 'id': req.body.task_id}}).then(task=>{
		if(task){
			return res.status(200).json({success: true, task: task});
		}else{
			return res.status(400).json({
				success: false,
				error: 'Unable to update task!'
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
