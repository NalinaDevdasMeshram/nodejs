const joi = require("joi");
const blogSchema = joi.object({
  title: joi
    .string()
    .min(10)
    .max(30)
    .trim()
    .required()
    .pattern(/^[A-Za-z]+$/)
    .messages({
      "string.pattern.base": "Title must contain only alphabetic characters",
    }),

  content: joi.string().min(20).max(1000).required(),
  author: joi
    .string()
    .min(3)
    .max(100)
    .trim()
    .required()
    .pattern(/^[A-Za-z]+$/)
    .messages({
      "string.pattern.base": "Author must contain only alphabetic characters",
    }),
});

function validateInputBlogs(inputpayload) {
  const validationResult = blogSchema.validate(inputpayload);
  return validationResult;
}
module.exports = { blogSchema, validateInputBlogs };
/**
 *we need joi schema for input validation
 *modals are for database validation both are apart
 * */
