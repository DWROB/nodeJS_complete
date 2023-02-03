const express = require('express');

const app = express();

// set template engine to ejs
app.set("view engine", "ejs");

const usersData = require('./routes/users');

app.use(usersData);

// catch all 404 route
app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" })
});

app.listen(3000);
