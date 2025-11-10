const express = require("express");
const router = express.Router();
const {
  getHomeResponse,
  getAboutResponse,
  getContactDetails,
  getFitnessDetails,
} = require("../Controller/HomeController");
const { Authorize } = require("../Middleware/Authorization");
router.get("/", getHomeResponse);
router.get("/about", getAboutResponse);
router.get("/contact", getContactDetails);
router.get("/fitness", Authorize, getFitnessDetails);
module.exports = router;
