let models = require('../db/models');
let colors = require('../lib/colors');

function getCatagories(req, res, next) {
	return models.Catagory.findAll().then(catagoryResult=>{
		return res.status(200).json(catagoryResult);
	})
}

function getProduct(req, res, next) {
	console.log('req.params',req.params)
	return models.Product.find({where: { id: req.params.id }}).then(prodResult=>{
		return res.status(200).json(prodResult);
	})
}

function getProducts(req, res, next) {
	return models.Product.getAllProducts().then(prodResult=>{
		return res.status(200).json(prodResult);
	})
}

function updateProduct(req, res, next) {
	models.Product.find({ where: { id: req.body.id } })
	  .then(product => {
	    if (product) {
	    	product.updateAttributes(req.body)
	      .then((resultedProduct) => {
	    	  return res.status(200).json({
					success : true,
					product : resultedProduct
				});
	      })
	    }
	  })
}

function deleteProduct(req, res, next) {
	
	
	console.log("req.body",req.body)
	models.Product.destroy({ where: { id: req.body.id } })
	  .then(product => {
		  if(product){
			  return res.status(200).json({
				  success : true,
			  });
		  }
	  })
}


function addProduct(req, res, next) {
	models.sequelize.transaction(function(t) {
		return models.Product.findOrCreate({
			where : req.body,
			transaction : t
		}).spread(function(productResult, created) {
			if (created) {
				return res.status(200).json({
					success : true,
					product : productResult
				});
			} else {
				return res.status(200).json({
					success : false,
					error : 'Product already exists!!',
					product: productResult
				});
			}
		});
	})
	
}

module.exports = {
	getCatagories,
	addProduct,
	getProducts,
	getProduct,
	updateProduct,
	deleteProduct
};