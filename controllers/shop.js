const Product = require("../models/product");
// const Order = require("../models/order");

exports.getProducts = (req, res, next) => {
    Product.findAll()
        .then(products => {
            res.render("shop/product-list", {
                prods: products,
                pageTitle: "All Products",
                path: "/products",
            });
        }).catch((err) => {
            console.log(err)
        });
};

