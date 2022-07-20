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
  console.log("--------->", user);
  if (user) {
    console.log("userEmail : ", user);
    return res
      .status(400)
      .json({ message: "Account with same email already in the system..." });
  }

  new_user = await createUser(body);
  return res.status(201).json({ data: user });
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
  console.log("user id : ", user_id);
  if (!user_id) {
    return res.status(400).json({ message: "body is empty" });
  }
  const userUpdated = await updateUsers(user_id, body);
  console.log("-------->", userUpdated);
  return res.status(200).json({ data: userUpdated });
};

module.exports = {
  makeUser,
  findAllUser,
  findUserById,
  UpdatedUser,
};
