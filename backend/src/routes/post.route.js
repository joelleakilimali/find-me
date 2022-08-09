const express = require("express");
const {
  makePost,
  findAllPost,
  findPostById,
  updatedPost,
  findCommentofPost,
} = require("../controllers/post.controller");
const route = express.Router();

/**
 * @description create a post
 * @method POST
 * @url /api/posts/
 */
route.post("/createpost/:id", makePost);

/**
 * @description getting all pots
 * @method GET
 * @url /api/posts/
 */

route.get("/findAllPost", findAllPost);

/**
 * @description get post by id
 * @method GET
 * @url /api/posts/
 */

route.get("/getPostById/:id", findPostById);

/**
 * @description update Post
 * @method put
 * @url /api/posts/id
 */

route.put("/updatepost/:id", updatedPost);

module.exports = route;
