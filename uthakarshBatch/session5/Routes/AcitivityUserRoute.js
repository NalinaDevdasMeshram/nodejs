const express = require("express");
const router = express.Router(); // it help to create mini version express route
const {
  getAlluser,
  getAllUserByfirstName,
  getAllUserByGender,
} = require("../Controllers/ActivityUserController");
router.get("/", getAlluser);

router.get("/search", getAllUserByGender);

router.get("/:users", getAllUserByfirstName);
module.exports = router;
