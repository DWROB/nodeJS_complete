const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('../views/admin/edit-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        editing: false
    });
};

exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product(title, imageUrl, description, price);

    product.save();

    res.redirect('/products');
};

exports.getEditProduct = (req, res, next) => {

    const prodId = req.params.productId;
    Product.findById(prodId, product => {
        if (!product) {
            console.log('Product not found')
            return res.redirect('/');
        }
        res.render('../views/admin/edit-product', {
            pageTitle: 'Edit Product',
            path: '/admin/edit-product',
            editing: true,
            product: product
        });

    });
    
};

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('admin/products', {
            prods: products,
            pageTitle: 'Admin Products',
            path: '/admin/products'
        });
    });
};