const { json } = require("express");
const {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
} = require("../services/post.service");

const makePost = async (req, res) => {
  body = req.body;
  if (!body || !body.description) {
    return res
      .status(400)
      .send({ error: "Empty body or missing field information" });
  }
  const post = await createPost(body);
  console.log(post);
  return res.status(200).send({ message: post });
};
const findAllPost = async (req, res) => {
  const allPost = await getAllPosts();
  return res.status(200).send({ message: allPost });
};
const findPostById = async (req, res) => {
  const body = req.body;
  const post_id = req.params.id;
  if (!post_id) {
    return res.status(400).send({ error: "missing Id" });
  }
  const post = await getPostById(post_id);
  return res.status(200).send({ message: post });
};
const updatedPost = async (req, res) => {
  const post_id = req.params.id;
  if (!post_id) {
    return res.status(400).send({ error: "Post notfound" });
  }
  const updtpost = await updatePost(post_id, req.body);
  return res.status(200).send({ message: updtpost });
};
module.exports = { makePost, findAllPost, findPostById, updatedPost };
