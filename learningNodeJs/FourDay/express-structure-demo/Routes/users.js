const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// /users route
router.get("/", userController.listUsers);

module.exports = router;
