const userService = require("../service/user.service");

exports.getAllUsers = async (req, res) => {
	let userList = await userService.getAllUsers();
	return res.send(userList);
};

exports.getUserByID = async (req, res) => {
	let user = await userService.getUserByID(req.params.id);
	return res.send(user);
};

exports.addNewUser = async (req, res) => {
	let message = await userService.addNewUser(req.body);
	return res.send(message);
};

exports.updateUser = async (req, res) => {
	let message = await userService.updateUser(req.params.id, req.body);
	return res.send(message);
};

exports.deleteUserByID = async (req, res) => {
	let message = await userService.deleteUserByID(req.params.id);
	return res.send(message);
};

exports.getUserByUsername = async (req, res) => {
	let user = await userService.getUserByUsername(req.body);
	return res.send(user);
};

exports.getUserByAlias = async (req, res) => {
	let user = await userService.getUserByAlias(req.query.alias);
	return res.send(user);
};

// //update user
// exports.updateUser = (req, res) => {
//   const userReqData = new userModel(req.body);
//   console.log("update user ", userReqData);
//   if (req.body.constructor === Object && Object(req.body).length === 0) {
//     res.send(400).send({ success: false, message: "invalid user info" });
//   } else {
//     console.log("valid user info");
//     userModel.updateUser(req.params.id, userReqData, (err, user) => {
//       if (err) res.send(err);
//       res.json({
//         status: true,
//         message: "user updated successfully",
//         data: user,
//       });
//     });
//   }
// };

// //delete user
// exports.deleteUser = (req, res) => {
//   userModel.deleteUser(req.params.id, (err, user) => {
//     if (err) res.send(err);
//     res.json({ success: true, message: "user deleted successfully" });
//   });
// };
