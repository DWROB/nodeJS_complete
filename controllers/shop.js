const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('../views/shop/product-list', {
      prods: products,
      pageTitle: 'Shop',
      path: req._parsedOriginalUrl.pathname,
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  });
};
