const express = require("express");
const router = express.Router();
const {
  createBlog,
  getAllBlog,
  deleteBlog,
  getBlogById,
} = require("../Controllers/BlogController");

router.post("/newBlog", createBlog);
router.delete("/delete/:id", deleteBlog);
router.get("/getAllBlog", getAllBlog);
router.get("/getBlog/:id", getBlogById);

module.exports = router;
