const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { getUserByEmail, createUser } = require("../services/user.service");
const { check, validationResult } = require("express-validator");

const JWT_KEY = process.env.JWT_KEY;

const register = async (req, res, next) => {
  if (!isValidEmail(req.body.email))
    return res.status(400).json({
      code: 400,
      message: "wrong email address",
    });
  body = req.body;
  if (!body || !body.email || !body.password) {
    return res.status(400).json(" All information are required ");
  }
  //

  [check(req.body.email).isEmail(), check("password").isLength({ min: 5 })];
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  //
  const email = body.email;
  find_user = await getUserByEmail(email);
  if (find_user) {
    return res
      .status(400)
      .json({ message: "Account with same email already in the system..." });
  }
  const password = body.password;
  const salt = await bcrypt.genSalt(10);
  const hashed_password = await bcrypt.hash(password, salt);
  new_user = await createUser({ ...body, password: hashed_password });
  return res.status(200).json({ message: "user created", data: new_user });
};

const login = async (req, res) => {
  body = req.body;
  if (!body || !body.email || !body.password) {
    return res.status(400).json(" All information are required ");
  }
  const email = body.email;
  find_user = await getUserByEmail(email);
  if (!find_user) {
    return res.status(400).json({ message: "invalid Email" });
  }
  const password_verified = await bcrypt.compare(
    body.password,
    find_user.password
  );
  if (password_verified) {
    const token = jwt.sign({ user_id: find_user._id, email }, JWT_KEY, {
      expiresIn: "2h",
    });
    return res
      .status(200)
      .json({ message: "login successes", token, find_user });
  } else {
    return res.status(400).json({ message: "invalid Password" });
  }
};
module.exports = { login, register };

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
