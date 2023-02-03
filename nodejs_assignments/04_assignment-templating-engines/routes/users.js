const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  // render a form that allows user to input their name
  res.send('<p> hello </p>');
});

router.post('/', (req, res, next) => {
  // store name and redirect to /users
});

router.get('/users', (req, res, next) => {
  // render a ul with user names or error text with no users.
  res.send('<p> hello users </p>');
});

module.exports = router;
