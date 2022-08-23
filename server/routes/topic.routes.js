const topicController = require("../controllers/topic.controller");

const express = require("express");
const router = express.Router();

//get all topics
router.get("/", topicController.getAllTopics);

//get topic by id
//router.get("/:id", topicController.getTopicByID);

//add new topic
router.post("/", topicController.addNewTopic);

router.get("/query", topicController.getAllTopicsByUserID);

module.exports = router;
