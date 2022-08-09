const Post = require("../models/post.model");

const createPost = async (param) => {
  return await Post.create(param);
};

const getAllPosts = async () => {
  return Post.find().populate({ path: "image", select: "_id key path" });
};

const getPostById = async (id) => {
  return await Post.findById(id);
};

const getPostById_ = async (id) => {
  return await Post.find({ _id: id });
};

const updatePost = async (id, body) => {
  const filter = { _id: id };
  const update = body;
  return await Post.findOneAndUpdate(filter, update);
};

module.exports = {
  getPostById_,
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
};
