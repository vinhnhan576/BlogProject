const express = require("express");
const router = express.Router();

const blogController = require("../controllers/blog.controller");
// const db = require("../models");

//get all blogs by userID
router.get("/", blogController.getAllBlogsByUserID);

module.exports = router;
