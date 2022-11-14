const express = require("express");
const usersController = require("../../controller/users.controller");

const router = express.Router();

router
  .route("/")
  /**
   * @get api- show random users
   *  */
  .get(usersController.getUserRandom);

module.exports = router;
