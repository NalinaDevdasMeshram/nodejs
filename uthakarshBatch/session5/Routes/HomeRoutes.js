const express = require("express");
const router = express.Router();
const {
  HomeResponse,
  AboutResponse,
  ContactResponse,
  DailyResponse,
} = require("../Controllers/HomeController");

router.get("/", HomeResponse);
router.get("/about", AboutResponse);
router.get("/contact", ContactResponse);
router.get("/dailyRoutine", DailyResponse);

module.exports = router;
