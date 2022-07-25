const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controllers");

//get all users
router.get("/", userController.getUserList);

//get user by id
router.get("/:id", userController.getUserByID);

//add new user
router.post("/", userController.addNewUser);

//update user
router.post("/:id", userController.updateUser);

//delete user
router.delete("/:id", userController.deleteUser);

module.exports = router;
