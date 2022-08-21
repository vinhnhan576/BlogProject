const db = require("../models");
const Op = require("sequelize");

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
		console.log(slug)
		let blog = await db.Blog.findOne({ where: { slug: slug }});
		if (blog !== null) resolve(blog);
		resolve("Cannot find blog with slug " + slug);
	  } catch (e) {
		reject("Error fetching blog by slug: " + e);
	  }
	});
};
module.exports = {
	getAllBlogsByUserID: getAllBlogsByUserID,
	getBlogBySlug:getBlogBySlug,
};
