const db = require('../models')
const Op = require("sequelize")

let getAllBlogsByUserID = async (userID) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.Blog.findAll({
        //include:[{Model:db.Topic}],
        where: {
          UserID: userID,
        },

         attributes: [
          'id','title', 'content','coverImg' // We had to list all attributes... // To add the aggregation...
         ]
      });
      if (user) resolve(user);
      resolve("Cannot find blog with id " + userID);
    } catch (e) {
      reject(e)
    }
  });
};

module.exports = {
  getAllBlogsByUserID: getAllBlogsByUserID,
};