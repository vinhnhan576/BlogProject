const blogService = require("../service/blog.service");
const multer = require("multer");
const path = require("path");

exports.getAllBlogsByUserID = async (req, res) => {
	let blog = await blogService.getAllBlogsByUserID(req.query.userID);
	return res.send(blog);
};

exports.getBlogBySlug = async (req, res) => {
	let blog = await blogService.getBlogBySlug(req.query.slug);
	return res.send(blog);
};

exports.addNewBlog = async (req, res) => {
	console.log(__dirname);
	let message = await blogService.addNewBlog(req);
	return res.send(message);
};

exports.updateBlog = async (req, res) => {
	let message = await blogService.updateBlog(req.params.id, req.body);
	return res.send(message);
};

exports.deleteBlogByID = async (req, res) => {
	let message = await blogService.deleteBlogByID(req.params.id);
	return res.send(message);
};

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "image");
	},
	filename: (req, file, cb) => {
		cb(null, Date.now() + path.extname(file.originalname));
	},
});

exports.upload = multer({
	storage: storage,
	limits: { fileSize: "100000" },
	fileFilter: (req, file, cb) => {
		const fileTypes = /jpeg|jpg|png|gif/;
		const mimieType = fileTypes.test(file.mimetype);
		const extname = fileTypes.test(path.extname(file.originalname));

		if (mimieType && extname) {
			return cb(null, true);
		}
		cb("Give proper files format to upload");
	},
}).single("image");
