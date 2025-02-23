const User = require('../models/user');

exports.getLogin = (req, res, next) => {

    res.render('auth/login', {
        path: '/login',
        pageTitle: 'Login Page',
        isAuthenticated: req.session.user
    });
};

exports.postLogin = (req, res, next) => {
    let session = req.session;
    User.findById('677aa768b737de3b77b79e34')
    .then(user => {
        session.user = user;
        session.save();
        res.redirect('/');
    })
    .catch(err => console.log(err));
};

exports.postLogout = (req, res, next) => {
    req.session.destroy(err => {
        console.log(err);
        res.redirect('/');
    })
};
