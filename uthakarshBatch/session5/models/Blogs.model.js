const { required } = require("joi");
const mongoose = require("mongoose");
const validatelab = require("validator");
const BlogsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      minlength: 5,
      maxlength: 100,
      unique: true,
      validate: (value) => {
        return validatelab.isAlphanumeric(value);
      },
    },
    author: {
      type: String,
      trim: true,
      required: true,
      validate: (value) => {
        return value;
      },
    },
    content: {
      type: String,
      trim: true,
      required: true,
      validate: (value) => {
        return validatelab.isAlphanumeric(value);
      },
    },
  },
  { timestamps: true }
);

const Blogsuser = mongoose.model("blogsusers", BlogsSchema);
module.exports = Blogsuser;
