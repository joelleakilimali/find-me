const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {
  getUserByEmail,
  createUser,
  updateUsers,
} = require("../services/user.service");
const { check, validationResult } = require("express-validator");
const { sendMail } = require("../helpers/senmail");
const { verifyToken, getEmailFromToken } = require("../helpers/jwt");
const { ACTIVATION_SUCCESS, ACTIVATION_FAILED } = require("../helpers/message");

const JWT_KEY = process.env.JWT_KEY;

const register = async (req, res, next) => {
  const { email, password, firstName, lastName } = req.body;

  if (!email || !password || !firstName || !lastName) {
    return res.status(400).json({ message: " All informations are required " });
  }
  //
  if (!isValidEmail(email))
    return res.status(400).json({
      code: 400,
      message: "email address incorrect",
    });

  [check(email).isEmail(), check("password").isLength({ min: 5 })];
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  //
  find_user = await getUserByEmail(email);
  if (find_user) {
    return res
      .status(400)
      .json({ message: "Account with same email already in the system..." });
  }

  const hashed_password = bcrypt.hashSync(password, 10);

  // const salt = await bcrypt.genSalt(10);
  // const hashed_password = await bcrypt.hash(password, salt);
  new_user = await createUser({ ...req.body, password: hashed_password });

  const token = jwt.sign({ user_id: new_user._id, email }, JWT_KEY, {
    expiresIn: "60000",
  });

  await sendMail(email, "Findme Account creation", firstName, token);

  return res.status(200).json({ message: "user created", data: new_user });
};

const login = async (req, res) => {
  body = req.body;
  if (!body || !body.email || !body.password) {
    return res.status(400).json({ message: " All information are required " });
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
      expiresIn: "24h",
    });

    return res
      .status(200)
      .json({ message: "login successes", token, find_user });
  } else {
    return res.status(400).json({ message: "invalid Password" });
  }
};
const activation = async (req, res) => {
  const { token } = req.params;
  if (!token) return res.status(400).json({ error: "missing token" });
  const verified = await verifyToken(token);
  if (verified != -1) {
    find_user = await getUserByEmail(verified);
    Object.assign(find_user, { verified: true });
    await find_user.save();
    return res.status(200).json({ message: ACTIVATION_SUCCESS });
  }
  return res.status(401).json({ message: ACTIVATION_FAILED });
};

const resendMail = async (req, res) => {
  const { token } = req.params;
  if (!token) return res.status(400).json({ error: "missing token" });
  const email = await getEmailFromToken(token);
  if (email) {
    const find_user = await getUserByEmail(email);
    const token = jwt.sign({ user_id: find_user._id, email }, JWT_KEY, {
      expiresIn: "60000",
    });

    await sendMail(
      email,
      "Findme Account creation",
      find_user.firstName,
      token
    );

    return res.status(200).json({ message: "success " });
  }
};
module.exports = { login, register, activation, resendMail };

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
