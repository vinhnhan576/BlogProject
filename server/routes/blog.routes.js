const express = require("express");
const router = express.Router();

const blogController = require("../controllers/blog.controller");
// const db = require("../models");

//get blog by slug
router.get("/getblogbyslug", blogController.getBlogBySlug);

//get all blogs by userID
router.get("/", blogController.getAllBlogsByUserID);

router.post("/", blogController.addNewBlog);

<<<<<<< HEAD
router.put("/:id", blogController.updateBlog);
=======
router.delete("/:id", blogController.deleteBlogByID);

>>>>>>> df2558a3eb00814dd38ef89c1684e2dd15f45b7a
module.exports = router;
