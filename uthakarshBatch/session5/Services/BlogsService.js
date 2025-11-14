const Blogsuser = require("../models/Blogs.model");
class BlogsService {
  //here we have to create an object of blog
  static async createBlogService(title, content, author) {
    //here we have to create an object of blog
    const blogsobj = new Blogsuser({
      title,
      content,
      author,
    });

    // save this object to database
    try {
      const response = await blogsobj.save();
      return response;
    } catch (error) {
      throw new error("error" + error);
    }
  }
  //   *********working**
  static async getAllBlogService() {
    const response = await Blogsuser.find({});
    const payload = {
      count: response.length,
    };
  }
  static async getBlogByIdService(id) {
    try {
      const { id } = req.params;
      const getBlog = await Blogsuser.findById(id);
      return getBlog;
    } catch (error) {
      throw new error("error" + error);
    }
  }
}

module.exports = BlogsService;
