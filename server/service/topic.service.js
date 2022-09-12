const db = require("../models");

let getAllTopics = async () => {
	return new Promise(async (resolve, reject) => {
		try {
			await db.Topic.findAll().then((topicList) => {
				if (topicList) {
					resolve(topicList);
				}
				resolve(
					"Cannot fetch the topic list. Maybe the account list is empty!"
				);
			});
		} catch (e) {
			reject("Error fetching topic list: " + e);
		}
	});
};

let getTopicByID = async (id) => {
	return new Promise(async (resolve, reject) => {
		try {
			let account = await db.Account.findByPk(id);
			if (account) resolve(account);
			resolve("Cannot find account with id " + id);
		} catch (e) {
			reject("Error fetching account with id: " + e);
		}
	});
};

let addNewTopic = async (topicReqData) => {
	return new Promise(async (resolve, reject) => {
		try {

			let topic = await db.Topic.create({
				topicName: topicReqData.topicName,
				slug: topicReqData.slug,
				quote: topicReqData?.quote,
				img: topicReqData?.img,
				userID: topicReqData.userID,
			});
			resolve(topic.id.toString());
		} catch (e) {
			reject("Error adding topic: " + e);
		}
	});
};

let updateTopic = async (id, topicReqData) => {
	return new Promise(async (resolve, reject) => {
		try {
			await db.Topic.update(topicReqData, { where: { id: id } }).then(
				(topic) => {
					if (topic) {
						resolve("Updated topic with id " + id + "  successfully!");
					}
					resolve(
						"Cannot update topic with id" +
							id +
							"Maybe the topic cannot be found or the request data is empty!"
					);
				}
			);
		} catch (e) {
			reject("Error updating topic with id " + id + ": " + e);
		}
	});
};

let deleteTopicByID = async (id) => {
	return new Promise(async (resolve, reject) => {
		try {
			await db.Topic.destroy({ where: { id: id } }).then((deletedTopic) => {
				if (deletedTopic) {
					resolve("Deleted topic with id " + id + " successfully!");
				}
				resolve(
					"Cannot delete topic with id " +
						id +
						". Maybe the topic cannot be found!"
				);
			});
		} catch (e) {
			reject("Error deleting topic with id " + id + ": " + e);
		}
	});
};

let getAllTopicsByUserID = async (userID) => {
	return new Promise(async (resolve, reject) => {
		try {
			let topic = await db.Topic.findAll({
				where: {
					userID: userID,
				},
				attributes: [
					"id",
					"topicName",
					"userID",
					"slug",
					// We had to list all attributes... // To add the aggregation...
				],
				include: [{ model: db.Blog, as: "Blog" }],
			});
			if (topic) resolve(topic);
			resolve("Cannot find topic with id " + userId);
		} catch (e) {
			reject(e);
		}
	});
};
let getTopicBySlug = async (slug) => {
	return new Promise(async (resolve, reject) => {
		try {
			let topic = await db.Topic.findOne({
				include: [
					{
						model: db.Blog,
						as: "Blog",
						where: {
							slug: slug,
						},
					},
				],

				// attributes: ["topicName", "img", "quote", "slug", "userID"],
			});
			if (topic) resolve(topic);
			resolve("Cannot find blog with slug " + slug);
		} catch (e) {
			reject(e);
		}
	});
};

module.exports = {
	getAllTopics: getAllTopics,
	getTopicByID: getTopicByID,
	addNewTopic: addNewTopic,
	updateTopic: updateTopic,
	deleteTopicByID: deleteTopicByID,
	getAllTopicsByUserID: getAllTopicsByUserID,
	getTopicBySlug: getTopicBySlug,
};
