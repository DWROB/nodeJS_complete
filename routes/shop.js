const path = require("path");

const { Router } = require("express");
const express = require("express");

const rootDir = require("../util/path");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  const products = adminData.products;
  res.render("shop/product-list", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
});

router.get("/product-list", (req, res, next) => {
  const products = 1;
  res.render("shop/product-list", {
    prods: products,
    pageTitle: "Shop",
    path: "/product-list",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
});

router.get("/cart", (req, res, next) => {

  res.render("shop/cart", {
    pageTitle: "Your Shopping Cart",
    path: "/cart",
    activeShop: true,
    productCSS: true
  });
});

module.exports = router;
