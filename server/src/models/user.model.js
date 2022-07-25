var dbConnection = require("../../config/db.config");

//constructor
var User = function (user) {
  this.name = user.name;
  this.alias = user.alias;
  this.gender = user.gender;
  this.date = user.date;
  this.tel = user.tel;
  this.job = user.job;
  this.address = user.address;
  this.email = user.email;
  this.profilepic = user.profilepic;
  this.upperpic = user.upperpic ? user.upperpic : null;
  this.lowerpic = user.lowerpic ? user.lowerpic : null;
};

//get all users
User.getAllUsers = (result) => {
  let sql = "SELECT * FROM user";
  dbConnection.query(sql, (err, res) => {
    if (!err) {
      console.log("users fetched successfully");
      result(null, res);
    } else {
      console.log("error fetching users");
      result(null, err);
    }
  });
};

//get user by id
User.getUserByID = (id, result) => {
  let sql = "SELECT * FROM user WHERE id = ?";
  dbConnection.query(sql, id, (err, res) => {
    if (!err) {
      console.log("user fetched by id successfully");
      result(null, res);
    } else {
      console.log("error fetching user by id");
      result(null, err);
    }
  });
};

//add new user
User.addNewUser = (userReqData, result) => {
  let sql = "INSERT INTO user SET ?";
  dbConnection.query(sql, userReqData, (err, res) => {
    if (!err) {
      console.log("user added successfully");
      result(null, {
        status: true,
        message: "user added successfully",
        insertID: res.id,
      });
    } else {
      console.log("error adding user");
      result(null, { status: false, message: err });
    }
  });
};

//update user
User.updateUser = (id, userReqData, result) => {
  let sql =
    "UPDATE user SET name=?,alias=?,gender=?,date=?,tel=?,job=?,address=?,email=?,profilepic=?,upperpic=?,lowerpic=? WHERE id = ?";
  dbConnection.query(
    sql,
    [
      userReqData.name,
      userReqData.alias,
      userReqData.gender,
      userReqData.date,
      userReqData.tel,
      userReqData.job,
      userReqData.address,
      userReqData.email,
      userReqData.profilepic,
      userReqData.upperpic,
      userReqData.lowerpic,
      id,
    ],
    (err, res) => {
      if (!err) {
        console.log("user updated successfully");
        result(null, {
          status: true,
          message: "user updated successfully",
          updateID: res.id,
        });
      } else {
        console.log("error updating user");
        result(null, { status: false, message: err });
      }
    }
  );
};

//delete user
User.deleteUser = (id, result) => {
  let sql = "DELETE FROM user WHERE id = ?";
  dbConnection.query(sql, id, (err, res) => {
    if (!err) {
      console.log("user deleted successfully");
      result(null, res);
    } else {
      console.log("error deleting user");
      result(null, err);
    }
  });
};

module.exports = User;
