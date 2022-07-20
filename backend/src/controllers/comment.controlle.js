const { json } = require("express");
const {
  createComment,
  getAllComment,
  getCommentById,
  updateComment,
} = require("../services/comment.service");

const makeComment = async (req, res) => {
  body = req.body;
  if (!body) {
    return res.status(400).send({ error: "Empty body" });
  }
  const post = await createComment(body);
  return res.status(200).send({ message: post });
};
const findAllComment = async (req, res) => {
  const allComment = await getAllComment();
  return res.status(200).send({ message: allComment });
};
const findCommentById = async (req, res) => {
  const body = req.body;
  const post_id = req.params.id;
  if (!post_id) {
    return res.status(400).send({ error: "missing Id" });
  }
  const post = await getCommentById(post_id);
  return res.status(200).send({ message: post });
};
const updatedComment = async (req, res) => {
  body = req.body;
  const comment_id = req.params.id;
  if (!comment_id) {
    return res.status(400).send({ error: "Post notfound" });
  }
  const updtcomment = await updateComment(comment_id, body);
  return res.status(200).send({ message: updtcomment });
};
module.exports = {
  makeComment,
  findAllComment,
  findCommentById,
  updatedComment,
};
