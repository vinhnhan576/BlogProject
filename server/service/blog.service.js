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

module.exports = {
  getAllBlogsByUserID: getAllBlogsByUserID,
};
