const { validateInputBlogs } = require("../../Validators/BlogInputValidators");
function BlogInputCheck(req, res, next) {
  const body = req.body;
  const validationResult = validateInputBlogs(body);
  const { error, value } = validationResult;
  if (error) {
    res.status(400).json({ error, message: "please check your input" });
  } else {
    next();
  }
}

module.exports = { BlogInputCheck };
