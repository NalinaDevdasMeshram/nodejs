const express = require("express");

const router = express.Router();
const {
  getUsers,
  getuuidData,
  searchUsers,
} = require("./controllers/users.controller");
router.get("/", getUsers);
router.get("/search", searchUsers);
router.get("/uuid", getuuidData);

module.exports = router;
