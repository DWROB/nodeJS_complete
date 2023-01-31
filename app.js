const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.set('view engine', 'pug'); // pug installs itself as opt for express.Not the case for all templ. engines.
// view engine - tells app what dynamic templ. engine using
app.set('views', 'views')
// views - tells expr where to find these dynamic views.
// default value is views so above isn't needed.  If however the html etc is in
// a folder called templates.

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
// static method enter the path of folder to grant access to
app.use(express.static(path.join(__dirname, "public")));

// outsourced routes - admin filtered
app.use("/admin", adminData.routes);
app.use(shopRoutes);

// catch-all route
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
