const express = require("express");
const router = express.Router();
const path = require('path');

const userController = require("../controllers/user.controllers");
const db = require("../models");

//get user by username
router.post("/getuserbyusername/", userController.getUserByUsername);

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
