const express = require("express");
const usersController = require("../../controller/users.controller");

const router = express.Router();

router
  .route("/:id") //params hisabe id nilam
  /**
   * @get api- user save by post
   *  */

  .delete(usersController.deleteUser);

module.exports = router;
