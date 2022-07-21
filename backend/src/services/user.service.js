const User = require("../models/user.model");

const createUser = async (param) => {
  return User.create(param);
};
const getAllUsers = async () => {
  return await User.find();
};
const getUserById = async (id) => {
  return await User.findById(id);
};

const getUserByEmail = async (mail) => {
  return await User.findOne({ email: mail });
};

const updateUsers = async (id, body) => {
  const filter = { _id: id };
  const update = body;
  return await User.findOneAndUpdate(filter, update);
};
module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUsers,
  getUserByEmail,
};
