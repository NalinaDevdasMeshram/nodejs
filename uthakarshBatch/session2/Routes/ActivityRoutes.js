const express = require("express");
const router = express.Router();
const {
  GetAllusers,
  GetUserByFirstName,
  GetUserByGender,
} = require("../Controller/ActivityController");

// get All user
router.get("/users", GetAllusers);

// get user by gender
// QUERY PARAMS - https://www.google.com/search?q=sachin anything after ? is query params
router.get("/users/search", GetUserByGender);

// get user by firstName
// ROUTE PARAMS
// example: https://pokeapi.co/api/v2/pokemon/pikachu ; https://pokeapi.co/api/v2/pokemon/ditto
router.get("/users/:firstname", GetUserByFirstName);

module.exports = router;
