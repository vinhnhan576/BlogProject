const express = require("express");
const router = express.Router();

const blogController = require("../controllers/blog.controller");
// const db = require("../models");

//get blog by slug
router.get("/:slug", blogController.getBlogBySlug);

//get all blogs by userID
router.get("/", blogController.getAllBlogsByUserID);

module.exports = router;
