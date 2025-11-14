const Blogsuser = require("../models/Blogs.model");
const BlogsService = require("../Services/BlogsService");

async function createBlog(req, res) {
  const body = req.body;
  const { title, content, author } = body;

  //here we have to create an object of blog

  // save this object to database
  try {
    const response = await BlogsService.createBlogService(
      title,
      content,
      author
    );
    res.status(201).json({
      message: "blogs create successfully",
      data: response,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating blog",
      data: error,
    });
  }
}

async function getAllBlog(req, res, next) {
  const response = await Blogsuser.find({});
  const payload = {
    count: response.length,
  };

  try {
    res.status(200).json({
      message: "getting All Blogs Successfull",
      data: response,
      payload: payload,
    });
  } catch (error) {
    res.status(500).json({
      error: "something went wrong please again",
      data: error,
    });
  }
}
async function deleteBlogbyid(req, res, next) {
  try {
    const { id } = req.params;
    const deleteBlog = await Blogsuser.findByIdAndDelete(id);
    if (!deleteBlog) {
      // no blog found in the id
      return res.status(404).json({
        error: "No blog found with the given ID",
      });
    }

    // Successfull
    res.status(201).json({
      message: "blog get deleted successfully",
      data: deleteBlog,
    });
  } catch (error) {
    res.status(500).json({
      error: "please enter correct id",
      details: error.message,
    });
  }
}
async function getBlogById(req, res, next) {
  try {
    const { id } = req.params;
    const getBlogById = await Blogsuser.findById(id);
    res.status(200).json({
      message: "get blog successfully",
      data: getBlogById,
    });
  } catch (error) {
    res.status(500).json({
      message: "No blog found with the given ID",
      data: error,
    });
  }
}

module.exports = { createBlog, getAllBlog, deleteBlogbyid, getBlogById };
