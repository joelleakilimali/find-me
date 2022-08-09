const { json } = require("express");
const { uploadFile } = require("../helpers/uploadFile");
const { addFile } = require("../services/file.service");
const {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  getCommentofPostById,
} = require("../services/post.service");
const { findAllComment } = require("./comment.controlle");

const makePost = async (req, res) => {
  const user_id = req.params.id;
  req.body.user = user_id;

  body = req.body;

  console.log(body);
  console.log(req.files.image);

  if (!body || !body.description) {
    return res
      .status(400)
      .send({ error: "Empty body or missing field information" });
  }
  if (req.files.image) {
    await uploadFile(req.files.image)
      .then((file) => {
        addFile(file.Location, file.Key)
          .then((response) => {
            body.image = response._id;
            createPost(body)
              .then((post) => {
                return res.status(200).send({ message: post });
              })
              .catch((e) => {
                return res
                  .status(500)
                  .json({ code: 500, message: "unable to create your post " });
              });
          })
          .catch((e) => {
            return res
              .status(500)
              .json({ code: 500, message: "unable to insert your file" });
          });
      })
      .catch((e) => {
        return res.status(500).json({
          code: 500,
          message: "Upload file error " + e,
        });
      });
  } else {
    return res.status(404).json({ code: 404, message: "Image not found " });
  }
};

const findAllPost = async (req, res) => {
  const allPost = await getAllPosts();
  return res.status(200).send({ message: allPost });
};
const findPostById = async (req, res) => {
  const body = req.body;
  const post_id = req.params.id;

  if (!req.params.id) {
    return res.status(400).send({ error: "missing Id" });
  }
  const post = await getPostById(post_id);
  if (!post) {
    return res.status(400).send({ error: "Post doesnt exist " });
  }
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

module.exports = {
  makePost,
  findAllPost,
  findPostById,
  updatedPost,
};
