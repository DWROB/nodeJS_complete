const path = require("path");

const express = require("express");

const productsController = require('../controllers/products');

const router = express.Router();

router.get('/', productsController.getProducts);
router.get('/cart', productsController.getProducts);
router.get('/checkout', productsController.getProducts);
router.get('/index', productsController.getProducts);
router.get('/product-description', productsController.getProducts);

module.exports = router;
