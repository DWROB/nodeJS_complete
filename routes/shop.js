const path = require("path");

const { Router } = require("express");
const express = require("express");

const rootDir = require("../util/path");
const adminData = require('./admin');

const router = express.Router();

router.get("/", (req, res, next) => {
  // console.log(adminData.products); // rarely used as this data is available for all users.
  // res.sendFile(path.join(rootDir, "views", "shop.html"));

  // we want to use the products.
  const products = adminData.products;

  // we want to render a template
  res.render('shop', { prods: products, docTitle: 'Shop' });
});

module.exports = router;
