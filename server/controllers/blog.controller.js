const blogService = require("../service/blog.service");

exports.getAllBlogsByUserID = async (req, res) => {
  let blog = await blogService.getAllBlogsByUserID(req.query.userID);
    return res.send(blog);
};
