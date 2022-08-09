const bcrypt = require("bcryptjs");

const {
  createUser,
  getUserByEmail,
  getAllUsers,
  getUserById,
  updateUsers,
} = require("../services/user.service");

const makeUser = async (req, res) => {
  body = req.body;
  email = body.email;
  if (!body) {
    return res.status(400).json({ message: "body is empty" });
  }

  if (!body.email) {
    return res.status(400).send({ error: "Email is required" });
  }

  const emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  if (!email.match(emailFormat)) {
    return res.status(400).send({ error: "Invalid email" });
  }

  console.log("bodyEmail:", body.email);
  const user = await getUserByEmail(body.email);
  if (user) {
    console.log("userEmail : ", user);
    return res
      .status(400)
      .json({ message: "Account with same email already in the system..." });
  }

  password = body.password;

  const salt = await bcrypt.genSalt(10);
  const hashed_password = await bcrypt.hash(password, salt);

  new_user = await createUser({ ...body, password: hashed_password });
  return res.status(200).json({ message: "user created", data: new_user });
};
const findAllUser = async (req, res) => {
  body = req.body;

  allUser = await getAllUsers();
  return res.status(200).json({ data: allUser });
};
const findUserById = async (req, res) => {
  const user_id = req.params.id;
  if (!user_id) {
    return res.status(400).json({ message: "body is empty" });
  }
  const user = await getUserById(user_id);
  return res.status(200).json({ data: user });
};
const UpdatedUser = async (req, res) => {
  const body = req.body;
  const user_id = req.params.id;
  if (!user_id) {
    return res.status(400).json({ message: "id missing" });
  }

  if (body.password) {
    const salt = await bcrypt.genSalt(10);
    const hashed_password = await bcrypt.hash(req.body.password, salt);
    body.password = hashed_password;
  }

  console.log(body);

  const updatedUser = await updateUsers(user_id, body);
  return res
    .status(200)
    .json({ data: updatedUser, message: "UPDATE SUCCSESSFULLY" });
};

const UpdatedUserhhh = async (req, res) => {
  const body = req.body;
  const user_id = req.params.id;
  console.log("user id : ", user_id);
  if (!user_id) {
    return res.status(400).json({ message: "id missing" });
  }

  if (body) {
    const userUpdated = await updateUsers(user_id, body);
    return res.status(200).json({ message: "successs", data: userUpdated });
  }
};

const ressetPassword = async (req, res) => {
  const body = req.body;
  const user_id = req.params.id;
  console.log("user id : ", user_id);
  if (!user_id) {
    return res.status(400).json({ message: "id missing" });
  }
  if (req.body.password) {
    const salt = await bcrypt.genSalt(10);
    const hashed_password = await bcrypt.hash(req.body.password, salt);
    const userUpdated = await updateUsers(user_id, {
      ...body,
      password: hashed_password,
    });
    return res.status(200).json({ message: "password resset" });
  }
};

module.exports = {
  makeUser,
  findAllUser,
  findUserById,
  UpdatedUser,
  ressetPassword,
};
