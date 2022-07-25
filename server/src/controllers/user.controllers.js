const User = require("../models/user.model");
const userModel = require("../models/user.model");

//get user list
exports.getUserList = (req, res) => {
  userModel.getAllUsers((err, users) => {
    if (err) {
      res.send(err);
    } else {
      res.send(users);
    }
  });
};

//get user by id
exports.getUserByID = (req, res) => {
  userModel.getUserByID(req.params.id, (err, user) => {
    if (err) {
      res.send(err);
    } else {
      res.send(user);
    }
  });
};

//add new user
exports.addNewUser = (req, res) => {
  const userReqData = new userModel(req.body);
  console.log("add user ", userReqData);
  if (req.body.constructor === Object && Object(req.body).length === 0) {
    res.send(400).send({ success: false, message: "invalid user info" });
  } else {
    console.log("valid user info");
    userModel.addNewUser(userReqData, (err, user) => {
      if (err) res.send(err);
      res.json({
        status: true,
        message: "user added successfully",
        data: user,
      });
    });
  }
};

//update user
exports.updateUser = (req, res) => {
  const userReqData = new userModel(req.body);
  console.log("update user ", userReqData);
  if (req.body.constructor === Object && Object(req.body).length === 0) {
    res.send(400).send({ success: false, message: "invalid user info" });
  } else {
    console.log("valid user info");
    userModel.updateUser(req.params.id, userReqData, (err, user) => {
      if (err) res.send(err);
      res.json({
        status: true,
        message: "user updated successfully",
        data: user,
      });
    });
  }
};

//delete user
exports.deleteUser = (req, res) => {
  userModel.deleteUser(req.params.id, (err, user) => {
    if (err) res.send(err);
    res.json({ success: true, message: "user deleted successfully" });
  });
};
