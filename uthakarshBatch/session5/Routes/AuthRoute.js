const express = require("express");
const router = express.Router();
const { authRegister, authlogin } = require("../Controllers/AuthController");
router.post("/register", authRegister);
router.post("/login", authlogin);

module.exports = router;
