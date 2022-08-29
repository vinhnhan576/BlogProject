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
			await db.Topic.create({
				topicID: topicReqData.topicID,
				name: topicReqData.name,
				maxim: topicReqData.maxim,
				coverimage: topicReqData.coverimage,
			});
			resolve("topic added successfully!");
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
	});
};

let getAllTopicsByUserID = async (userId) => {
	return new Promise(async (resolve, reject) => {
		try {
			let topic = await db.Topic.findAll({
				where: {
					userID: userId,
				},
				attributes: [
					"id",
					"topicName",
					"userID",
					// We had to list all attributes... // To add the aggregation...
				],
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
		  let topic = await db.Topic.findAll({
			include: [
			  {
				model: db.Blog,
				as: "Topic",
				where: {
				  slug: slug,
				},
			  },
			],
	
			attributes: [
				"topicName",
				"img",
				"quote",
				"slug",
				"userID",
			],
		  });
		  if (blog) resolve(blog);
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
	getTopicBySlug:getTopicBySlug,
};
