const topicService = require("../service/topic.service");

//get topic list
exports.getAllTopics = async (req, res) => {
	let topicList = await topicService.getAllTopics();
	return res.send(topicList);
};

//get topic by id
exports.getTopicByID = async (req, res) => {
	let topic = await topicService.getTopicByID(req.params.id);
	return res.send(topic);
};

//add new topic
exports.addNewTopic = async (req, res) => {
	let message = await topicService.addNewTopic(req.body);
	return res.send(message);
};

exports.getAllTopicsByUserID = async (req, res) => {
<<<<<<< HEAD
    console.log(req.query.userID);
    let topicList = await topicService.getAllTopicsByUserID(req.query.userID);
  return res.send(topicList);
};
=======
	console.log(req.query.userId);
	let topicList = await topicService.getAllTopicsByUserID(req.query.userId);
	return res.send(topicList);
};
>>>>>>> 91c8cc2a00c859c8d7c99f24833d7eec099f63c0
