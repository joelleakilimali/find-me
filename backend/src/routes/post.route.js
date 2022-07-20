const express = require("express");
const {
  makePost,
  findAllPost,
  findPostById,
  updatedPost,
} = require("../controllers/post.controller");
const route = express.Router();

/**
 * @description create a post
 * @method POST
 * @url /api/users/
 */
route.post("/createpost", makePost);

/**
 * @description getting all pots
 * @method GET
 * @url /api/users/
 */

route.get("/findAllPost", findAllPost);

/**
 * @description get post by id
 * @method GET
 * @url /api/users/
 */

route.get("/getPostById/:id", findPostById);

/**
 * @description update Post
 * @method put
 * @url /api/users/id
 */

route.put("/updatepost/:id", updatedPost);

module.exports = route;
