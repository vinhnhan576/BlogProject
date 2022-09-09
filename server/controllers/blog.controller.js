const blogService = require("../service/blog.service");

exports.getAllBlogsByUserID = async (req, res) => {
	let blog = await blogService.getAllBlogsByUserID(req.query.userID);
	return res.send(blog);
};

exports.getBlogBySlug = async (req, res) => {
	let blog = await blogService.getBlogBySlug(req.query.slug);
	return res.send(blog);
};

exports.addNewBlog = async (req, res) => {
	let message = await blogService.addNewBlog(req.body);
	return res.send(message);
};

<<<<<<< HEAD
exports.updateBlog = async (req, res) => {
  let message = await blogService.updateBlog(req.params.id, req.body);
  return res.send(message);
};
=======
exports.deleteBlogByID = async (req, res) => {
	let message = await blogService.deleteBlogByID(req.params.id);
	return res.send(message);
};
>>>>>>> df2558a3eb00814dd38ef89c1684e2dd15f45b7a
