const Product = require("../models/product");

module.exports = {
	getProducts: function (req, res) {
			Product.find({})
				.then(products => {
					console.log(products);
					return res.status(200).json({products})
				})
	}
};