const express = require("express");
const router = express.Router();
const {
  createBlog,
  getAllBlog,
  deleteBlogbyid,
  getBlogById,
} = require("../Controllers/BlogController");
const {
  BlogInputCheck,
} = require("../Middleware/inputCheckValidators/BlogsInputCheck");

router.post("/newBlog", BlogInputCheck, createBlog);
router.delete("/delete/:id", deleteBlogbyid);
router.get("/getAllBlog", getAllBlog);
router.get("/getBlog/:id", getBlogById);

module.exports = router;
