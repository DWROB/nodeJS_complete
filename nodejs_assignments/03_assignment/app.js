const express = require('express');

const path = require('path');

const app = express();

const rootDir = require('./util/path');
const indexRoutes = require('./routes/index');

app.use(express.static(path.join(__dirname, 'public')));

app.use(indexRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});

app.listen(3000);
