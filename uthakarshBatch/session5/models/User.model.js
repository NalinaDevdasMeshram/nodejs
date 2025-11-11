const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    age: {
      type: Number,
      required: true,
      min: 18,
      trim: true,
    },
    mobile: {
      type: Number,
      unique: true,
      require: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      require: true,
      trim: true,
      lowercase: true,
    },

    city: {
      type: String,
      trim: true,
      default: "Unknown", // default value if not provided
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = { User };
