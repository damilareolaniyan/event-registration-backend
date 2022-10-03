const express = require("express");

const admin = express.Router();

admin.get("/", (req, res, next) => {
  console.log("This is Admin Route");
});

module.exports = admin;
