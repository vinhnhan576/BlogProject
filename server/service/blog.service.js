const db = require("../models");

let getAllBlogs = async () => {
	return new Promise(async (resolve, reject) => {
		try {
			await db.Blog.findAll().then((blogList) => {
				if (blogList) {
					resolve(blogList);
				}
				resolve("Cannot fetch the blog list. Maybe the blog list is empty!");
			});
		} catch (e) {
			reject("Error fetching blog list: " + e);
		}
	});
};

let getAllBlogsByUserID = async (userID) => {
	return new Promise(async (resolve, reject) => {
		try {
			let user = await db.Blog.findAll({
				include: [
					{
						model: db.Topic,
						as: "Topic",
						include: [
							{
								model: db.User,
								as: "User",
							},
						],
						where: {
							userID: userID,
						},
					},
				],

				attributes: [
					"id",
					"title",
					"coverImg",
					"date",
					"content",
					"slug",
					"topicID", // We had to list all attributes... // To add the aggregation...
				],
			});
			if (user) resolve(user);
			resolve("Cannot find user with id " + userID);
		} catch (e) {
			reject(e);
		}
	});
};

let getBlogBySlug = async (slug) => {
	return new Promise(async (resolve, reject) => {
		try {
			console.log(slug);
			let blog = await db.Blog.findOne({
				where: { slug: slug },
				include: [{ model: db.Topic, as: "Topic" }],
			});
			if (blog !== null) resolve(blog);
			resolve(null);
		} catch (e) {
			reject(null);
		}
	});
};

let addNewBlog = async (blogReqData) => {
	return new Promise(async (resolve, reject) => {
		try {
			console.log(blogReqData);
			await db.Blog.create({
				title: blogReqData?.title,
				content: blogReqData?.content,
				coverImg: blogReqData?.coverImg,
				quote: blogReqData?.quote,
				date: blogReqData?.date,
				location: blogReqData?.location,
				slug: blogReqData?.slug,
				topicID: blogReqData.topicID,
			});
			resolve("blog added successfully!");
		} catch (e) {
			reject("Error adding blog: " + e);
		}
	});
};

let updateBlog = async (id, blogReqData) => {
	return new Promise(async (resolve, reject) => {
		try {
			await db.Blog.update(blogReqData, { where: { id: id } }).then((blog) => {
				if (blog) {
					resolve("Blog with id " + id + " updated successfully!");
				}
				resolve("Cannot update blog with id" + id);
			});
		} catch (e) {
			console.log(e);
		}
	});
};

let deleteBlogByID = async (id) => {
	return new Promise(async (resolve, reject) => {
		try {
			await db.Blog.destroy({ where: { id: id } }).then((deletedBlog) => {
				if (deletedBlog) {
					resolve("Deleted blog with id " + id + " successfully!");
				}
				resolve(
					"Cannot delete blog with id " +
						id +
						". Maybe the blog cannot be found!"
				);
			});
		} catch (e) {
			reject("Error deleting blog with id " + id + ": " + e);
		}
	});
};

module.exports = {
	getAllBlogs: getAllBlogs,
	getAllBlogsByUserID: getAllBlogsByUserID,
	getBlogBySlug: getBlogBySlug,
	addNewBlog: addNewBlog,
	updateBlog: updateBlog,
	deleteBlogByID: deleteBlogByID,
};
