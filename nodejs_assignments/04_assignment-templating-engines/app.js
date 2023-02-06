const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// set template engine to ejs
app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
const usersData = require("./routes/users");

app.use(usersData.routes);
// app.use(bodyParser.json());

// catch all 404 route
app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" })
});

app.listen(3000);
