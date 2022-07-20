const express = require("express");
const route = express.Router();
const { body, validationResult } = require("express-validator");

const { login, register } = require("../controllers/auth.controller");

route.post("/login", login);

route.post(
  "/register",

  register
);

module.exports = route;
