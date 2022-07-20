const { body, validationResult } = require("express-validator");

const validFormat = async (req, res, next) => {
  [body("password").isLength({ min: 5 }), body("username").isEmail()];
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = { validFormat };
