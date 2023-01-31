const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.set('view engine', 'pug');

app.set('views', 'views')

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
// static method enter the path of folder to grant access to
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

// catch-all route
app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
  res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

app.listen(3000);
