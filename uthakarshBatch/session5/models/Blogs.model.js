const mongoose = require("mongoose");
const validatelab = require("validator");
const BlogsShema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      require: true,
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
      require: true,
      validate: (value) => {
        return value;
      },
    },
    content: {
      type: String,
      trim: true,
      require: true,
      validate: (value) => {
        return validatelab.isAlphanumeric(value);
      },
    },
  },
  { timestamps: true }
);

const Blogsuser = mongoose.model("Blogsuser", BlogsShema);
module.exports = { Blogsuser };
