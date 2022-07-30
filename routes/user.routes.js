const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controllers");
const db = require("../models");

//get all users
router.get("/", userController.getAllUsers);

//get user by id
router.get("/:id", userController.getUserByID);

//add new user
router.post("/", userController.addNewUser);

//update user
router.put("/:id", userController.updateUser);

//delete user
router.delete("/:id", userController.deleteUserByID);

module.exports = router;
