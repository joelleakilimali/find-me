const express = require("express");
const route = express.Router();
const { body, validationResult } = require("express-validator");

const {
  login,
  register,
  activation,
  resendMail,
} = require("../controllers/auth.controller");

route.post("/login", login);

route.post(
  "/register",

  register
);
route.get("/activation/:token", activation);

route.get("/resend-activation-mail/:token", resendMail);

module.exports = route;
