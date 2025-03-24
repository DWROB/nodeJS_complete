const bcrypt = require('bcryptjs');

const User = require('../models/user');

exports.getLogin = (req, res, next) => {
    res.render('auth/login', {
        path: '/login',
        pageTitle: 'Login Page',
        isAuthenticated: false
    });
};

exports.getSignup = (req, res, next) => {
    res.render('auth/signup', {
      path: '/signup',
      pageTitle: 'Signup',
      isAuthenticated: false
    });
  };

exports.postLogin = (req, res, next) => {
    User.findById('677aa768b737de3b77b79e34')
    .then(user => {
        req.session.isLoggedIn = true;
        req.session.user = user;
        req.session.save(err => {
            console.log(err);
            res.redirect('/');
        });
    })
    .catch(err => console.log(err));
};

exports.postSignup = (req, res, next) => {
    const email = req.body.email; // could make index on email with unique on mongo.
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword; // ignoring validating user input for now until later.
    User.findOne({email: email})
        .then(userDoc => {
            console.log('hello');
            if (userDoc) {
                return res.redirect('/signup');
            }
            return bcrypt //async process handle a promise
                .hash(password, 12)
                .then(hashedPassword => {
                    const user = new User({
                        email: email,
                        password: hashedPassword,
                        cart: { items: [] }
                    });
                    return user.save();
                })
                .then(userSaveResult => {
                    console.log(userSaveResult);
                    res.redirect('/login');
                })
        })
        .catch(err => {
        console.log(err);
    })
};

exports.postLogout = (req, res, next) => {
    req.session.destroy(err => {
        console.log(err);
        res.redirect('/');
    })
};
