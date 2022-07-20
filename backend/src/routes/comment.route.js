const {
  updatedComment,
  makeComment,
  findAllComment,
  findCommentById,
} = require("../controllers/comment.controlle");
const express = require("express");
const route = express.Router();

/**
 * @description create a comment
 * @method POST
 * @url /api/comments/
 */
route.post("/createcomment", makeComment);

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

module.exports = route;
