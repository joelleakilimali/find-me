const {
  updatedComment,
  makeComment,
  findAllComment,
  findCommentById,
  findCommentOfPost,
} = require("../controllers/comment.controlle");
const express = require("express");
const route = express.Router();

/**
 * @description create a comment
 * @method POST
 * @url /api/comments/
 */
route.post("/createcomment/:id", makeComment);

/**
 * @description getting all comment
 * @method GET
 * @url /api/comments/
 */

route.get("/findAllcomment", findAllComment);

/**
 * @description get comment by id
 * @method GET
 * @url /api/comemnts/
 */

route.get("/getcommentById/:id", findCommentById);

/**
 * @description update comment
 * @method put
 * @url /api/comments/id
 */

route.put("/updatecomment/:id", updatedComment);

/**
 * @description  Get comments of a post
 * @method Get
 * @url /api/comments/findcomment/:id
 */

route.get("/findcommentOfPost/:id", findCommentOfPost);

module.exports = route;
