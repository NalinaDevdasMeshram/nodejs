const mongoose = require("mongoose");

const BlogsShema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      require: true,
      minlength: 20,
      maxlength: 100,
    },
    author: {
      type: String,
      trim: true,
      require: true,
    },
    content: {
      type: String,
      trim: true,
      require: true,
    },
  },
  { timestamps: true }
);

const Blogsuser = mongoose.model("Blogsuser", BlogsShema);
module.exports = { Blogsuser };
