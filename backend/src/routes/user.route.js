const express = require("express");
const route = express.Router();
const {
  makeUser,
  findAllUser,
  findUserById,
  UpdatedUser,
} = require("../controllers/user.controller");

/**
 * @description create user
 * @method POST
 * @url /api/users/
 */

route.post("/createUser", makeUser);

/**
 * @description getting all users
 * @method GET
 * @url /api/users/
 */

route.get("/getUser", findAllUser);

/**
 * @description get user by id
 * @method GET
 * @url /api/users/
 */

route.get("/getuserById/:id", findUserById);

/**
 * @description update user
 * @method put
 * @url /api/users/id
 */

route.put("/updateUser/:id", UpdatedUser);

module.exports = route;
