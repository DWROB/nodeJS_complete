

exports.getLogin = (req, res, next) => {
    // NOTE: the bool in cookie is sent at string, so 'false' as string is deemed true.
    const isLoggedIn = req.get('Cookie').split(';')[1].split('=')[1] === 'true';
    res.render('auth/login', {
        path: '/login',
        pageTitle: 'Login Page',
        isAuthenticated: req.isLoggedIn
    });
};

exports.postLogin = (req, res, next) => {
    res.setHeader('Set-Cookie', 'loggedIn=true')
    res.redirect('/');
};
