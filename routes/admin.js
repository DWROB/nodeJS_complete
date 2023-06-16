const path = require("path");

const express = require("express");

const productsController = require('../controllers/products');

const router = express.Router();

// routes GET
router.get('/add-product', productsController.getAddProduct);
router.get('/products', productsController.getProducts);

// POST
router.post('/add-product', productsController.postAddProduct);

exports.routes = router;
