const express = require("express");
const router = express.Router();
const {
  GetAllgender,
  GetAllusers,
  getFirstname,
} = require("../Controller/ActivityController");
const { Authorize } = require("../Middleware/Authorization");
router.get("/", Authorize, GetAllusers);
router.get("/search", Authorize, GetAllgender);
router.get("/:user", Authorize, getFirstname);
module.exports = router;
