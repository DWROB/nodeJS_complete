const path = require("path");

const express = require("express");

const shopController = require('../controllers/shop');
const adminController = require('../controllers/admin');

const router = express.Router();

// routes GET
router.get('/add-product', adminController.getAddProduct);

router.get('/products', adminController.getProducts);

// POST
router.post('/add-product', adminController.postAddProduct);

exports.routes = router;
