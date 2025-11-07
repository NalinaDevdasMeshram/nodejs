const Joi = require("joi");
const possibleGenders = require("../config");

const searchUserSchema = Joi.object({
  gender: Joi.string().valid(...possibleGenders),
  gender: Joi.string().valid("male", "female"),
  age: Joi.number().integer().min(0).max(100),
}).or("gender", "age");
module.exports(searchUserSchema);
