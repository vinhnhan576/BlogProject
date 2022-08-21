const db = require("../models");

let getAllTopics = async () => {
  return new Promise(async (resolve, reject) => {
    try {
        await db.Topic.findAll({
          attributes: ["id","topicName",],
        }).then((userList) => {
          if (userList) {
            resolve(userList);
          }
          resolve("Cannot fetch the user list. Maybe the user list is empty!");
        });
    } catch (e) {
      reject("Error fetching user: " + e);
    }
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
module.exports = {
  getAllTopics: getAllTopics,
  getAllTopicsByUserID: getAllTopicsByUserID,
};
