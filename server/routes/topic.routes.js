const express = require("express");
const router = express.Router();

const topicController = require("../controllers/topic.controller");
const db = require("../models");

//get all users
router.get("/", topicController.getAllTopics);
router.get("/query", topicController.getAllTopicsByUserID);

module.exports = router;
