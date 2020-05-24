/* === Dependencies === */
const router = require("express").Router();
const productController = require("../../controllers/productController");

/* Matches with "/api/products" */
router.route("/all")
  .get(productController.getProducts);

  module.exports = router;