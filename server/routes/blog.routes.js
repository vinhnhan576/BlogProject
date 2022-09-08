const express = require("express");
const router = express.Router();

const blogController = require("../controllers/blog.controller");
// const db = require("../models");

//get blog by slug
router.get("/getblogbyslug", blogController.getBlogBySlug);

//get all blogs by userID
router.get("/", blogController.getAllBlogsByUserID);

router.post("/", blogController.addNewBlog);
module.exports = router;
