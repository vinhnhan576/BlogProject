const express = require("express");
const router = express.Router();

const userRoutes = require("./user.routes");
router.use("/user", userRoutes);

const accountRoutes = require("./account.routes");
router.use("/account", accountRoutes);

module.exports = router;
