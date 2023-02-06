const express = require("express");

const router = express.Router();

const users = [];

router.get("/", (req, res, next) => {
  // render a form that allows user to input their name
  res.render("users_new_form", { pageTitle: "Register New User", path: "/" });
});

router.post("/", (req, res, next) => {
  users.push({ name: req.body.username });
  res.redirect("/users");
});

router.get("/users", (req, res, next) => {
  // render a ul with user names or error text with no users.
  const userIndex = users;
  res.render("users_index", {
    users: userIndex,
    pageTitle: "User Index",
    path: "/users",
  });
});

exports.routes = router;
exports.users = users;
