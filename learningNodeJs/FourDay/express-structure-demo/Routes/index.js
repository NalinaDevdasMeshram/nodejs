const express = require("express");
const router = express.Router();
const homecontroller = require("../controllers/homecontroller");

//Home router
router.get("/", homecontroller.getHome);

module.exports = router;
