'use strict';
module.exports = function(sequelize, DataTypes) {
	var Product = sequelize.define('Product', {
		id : {
			allowNull : false,
			autoIncrement : true,
			primaryKey : true,
			type : DataTypes.INTEGER
		},
		brand : {
			type : DataTypes.STRING
		},
		genName : {
			type : DataTypes.STRING
		},
		price : {
			type : DataTypes.INTEGER
		},
		catagory_id : {
			type : DataTypes.INTEGER
		}
	}, {
		timestamps : false,
		classMethods : {
			associate : function(models) {
				// associations can be defined here
			}
		}
	});
	
	
	Product.getAllProducts = () => {
		return sequelize.query('SELECT catagories.catagory_name as category, products.brand, products.id, products.genName, products.price FROM products LEFT OUTER JOIN  catagories ON catagories.id = products.catagory_id;')
//		.then(products=>{
//			console.log("\n\n")
//			console.log(products)
//			console.log("\n\n")
//		})
	}
	
	return Product;
};