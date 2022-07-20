const Comment = require("../models/comment.model");

const createComment = async (param) => {
  return await Comment.create(param);
};
const getAllComment = async () => {
  return Comment.find();
};
const getCommentById = async (id) => {
  return await Comment.findById(id);
};
const updateComment = async (id) => {
  const filter = { _id: id };
  const update = body;
  return await Comment.findOneAndUpdate(filter, update);
};
module.exports = {
  createComment,
  getAllComment,
  getCommentById,
  updateComment,
};
