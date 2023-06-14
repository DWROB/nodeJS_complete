const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

const products = [];

router.get("/add-product", (req, res, next) => {
  res.render("admin/add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
});

router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  products.push({ title: req.body.title });
  res.redirect("/");
});

router.get("/products", (req, res, next) => {
  res.render("admin/products", {
    pageTitle: "Products (admin)",
    path: "/admin/products",
    activeShop: true,
    productCSS: true
  })
});

exports.routes = router;
exports.products = products;
