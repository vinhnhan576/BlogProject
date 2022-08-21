const topicService = require("../service/topic.service");

exports.getAllTopics = async (req, res) => {
  let topicList = await topicService.getAllTopics();
  return res.send(topicList);
};

exports.getAllTopicsByUserID = async (req, res) => {
    console.log(req.query.userId);
    let topicList = await topicService.getAllTopicsByUserID(req.query.userId);
  return res.send(topicList);
};



