const express = require("express");
const router = express.Router();

const userRoutes = require("./user.routes");
router.use("/user", userRoutes);

const accountRoutes = require("./account.routes");
router.use("/account", accountRoutes);

const blogRoutes = require("./blog.routes");
router.use("/blog", blogRoutes);

const topicRoutes = require("./topic.routes");
router.use("/topic", topicRoutes);

module.exports = router;