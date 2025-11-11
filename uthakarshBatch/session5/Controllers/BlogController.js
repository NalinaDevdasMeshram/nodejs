function createBlog(req, res, next) {
  const body = req.body;
  console.log("body", body);
  res.send(`hello world::`, body);
}
function getAllBlog(req, res, next) {}
function deleteBlog(req, res, next) {}
function getBlogById(req, res, next) {}

module.exports = { createBlog, getAllBlog, deleteBlog, getBlogById };
