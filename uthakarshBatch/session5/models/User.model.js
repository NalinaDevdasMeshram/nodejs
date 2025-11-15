const { required } = require("joi");
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    age: {
      type: Number,
      min: 18,
      required: true,
      trim: true,
    },
    mobile: {
      type: Number,
      unique: true,
      required: true,
      trim: true,
      length: 10,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowercase: true,
    },

    password: {
      type: String,
      trim: true,
      required: true,
    },
  },
  { timestamps: true }
);

const Usermodel = mongoose.model("user", userSchema);
module.exports = Usermodel;
