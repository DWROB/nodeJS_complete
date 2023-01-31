const path = require('path');

const express = require('express');

const router = express.Router();

const rootDir = require('../util/path');

router.get('/users', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'users.html'))
});

router.get('/', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'root.html'))
});

module.exports = router;
