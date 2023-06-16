const path = require("path");

const express = require("express");

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getProducts);
router.get('/products', shopController.getProducts);
router.get('/cart', shopController.getProducts);
router.get('/checkout', shopController.getProducts);
router.get('/index', shopController.getProducts);
router.get('/product-description', shopController.getProducts);

module.exports = router;
