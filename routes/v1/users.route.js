const express = require("express");
const usersController = require("../../controller/users.controller");
const limiter = require("../../middleware/limiter.js");

const router = express.Router();

router
  .route("/")
  /**
   * @get api- show all users
   *  */

  .get(limiter, usersController.getUserAll);

// .post(usersController.postUserSave);

// .put(usersController.userPut)

// .patch(usersController.userPatch)

// .delete(usersController.userDelete);

module.exports = router;
