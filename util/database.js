const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "outoutout", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
