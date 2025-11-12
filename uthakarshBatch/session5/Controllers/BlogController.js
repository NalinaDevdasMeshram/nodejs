function createBlog(req, res, next) {
  const body = req.body;
  const title = req.title;
  const content = req.content;
}
function getAllBlog(req, res, next) {}
function deleteBlog(req, res, next) {}
function getBlogById(req, res, next) {}

module.exports = { createBlog, getAllBlog, deleteBlog, getBlogById };
