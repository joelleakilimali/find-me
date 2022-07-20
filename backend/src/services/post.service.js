const Post = require("../models/post.model");

const createPost = async (param) => {
  return await Post.create(param);
};
const getAllPosts = async () => {
  return Post.find();
};
const getPostById = async (id) => {
  return await Post.findById(id);
};
const updatePost = async (id, body) => {
  const filter = { _id: id };
  const update = body;
  return await Post.findOneAndUpdate(filter, update);
};
module.exports = { createPost, getAllPosts, getPostById, updatePost };
