const { json } = require("express");
const {
  createComment,
  getAllComment,
  getCommentById,
  updateComment,
  getCommentOfPostById,
} = require("../services/comment.service");
const { updatePost, getPostById } = require("../services/post.service");

const makeComment = async (req, res) => {
  body = req.body;
  if (!body || !body.content) {
    return res.status(400).send({ error: "Empty body" });
  }
  const comment = await createComment({ ...body, post: req.params.id });
  // await updatePost( req.params.id);
  return res.status(200).send({ message: comment });
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

const findCommentOfPost = async (req, res) => {
  postId = req.params.id;

  if (!postId.match(/^[0-9a-fA-F]{24}$/)) {
    return res.status(400).send({ error: "Invalid Post id" });
  }

  post = await getPostById(postId);
  if (!post) {
    return res.status(404).send({ error: "post doesnt exist" });
  }
  const commentsList = await getCommentOfPostById(postId);
  return res.status(200).send({ data: commentsList });
};

module.exports = {
  makeComment,
  findAllComment,
  findCommentById,
  updatedComment,
  findCommentOfPost,
};
