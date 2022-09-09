const db = require("../models");

let getAllUsers = async () => {
	return new Promise(async (resolve, reject) => {
		try {
			await db.User.findAll({
				include: [{ model: db.Account, as: "Account" }],
			}).then((userList) => {
				if (userList) {
					resolve(userList);
				}
				resolve("Cannot fetch the user list. Maybe the user list is empty!");
			});
		} catch (e) {
			reject("Error fetching user: " + e);
		}
	});
};

let getUserByID = async (id) => {
	return new Promise(async (resolve, reject) => {
		try {
			let user = await db.User.findByPk(id, {
				include: [{ model: db.Account, as: "Account" }],
			});
			if (user) resolve(user);
			resolve("Cannot find user with id " + id);
		} catch (e) {
			reject("Error fetching user by id: " + e);
		}
	});
};

let addNewUser = async (userReqData) => {
	return new Promise(async (resolve, reject) => {
		try {
			await db.User.create({
				name: userReqData.name,
				alias: userReqData.alias,
				gender: userReqData.gender === "1" ? true : false,
				date: userReqData.date,
				tel: userReqData.tel,
				job: userReqData.job,
				address: userReqData.address,
				email: userReqData.email,
				profilepic: userReqData.profilepic,
				upperpic: userReqData.upperpic,
				lowerpic: userReqData.lowerpic,
			});
			resolve("user added successfully!");
		} catch (e) {
			reject("Error adding user: " + e);
		}
	});
};

let updateUser = async (id, userReqData) => {
	return new Promise(async (resolve, reject) => {
		try {
			await db.User.update(userReqData, { where: { id: id } }).then((user) => {
				if (user) {
					resolve("User with id " + id + " updated successfully!");
				}
				resolve(
					"Cannot update user with id" +
						id +
						"Maybe the user cannot be found or the request data is empty!"
				);
			});
		} catch (e) {
			reject("Error updating user with id " + id + ": " + e);
		}
	});
};

let deleteUserByID = async (id) => {
	return new Promise(async (resolve, reject) => {
		try {
			await db.User.destroy({ where: { id: id } }).then((deletedUser) => {
				if (deletedUser) {
					resolve("Deleted user with id " + id + " successfully!");
				}
				resolve(
					"Cannot delete user with id " +
						id +
						". Maybe the user cannot be found!"
				);
			});
		} catch (e) {
			reject("Error deleting user with id " + id + ": " + e);
		}
	});
};

let getUserByUsername = async (userReqData) => {
	return new Promise(async (resolve, reject) => {
		try {
			console.log(userReqData);
			const username = userReqData.username;

			await db.User.findOne({
				include: [
					{
						model: db.Account,
						as: "Account",
						where: { username: username },
						attributes: [],
					},
					{
						model: db.Topic,
						as: "Topic",
						include: [{ model: db.Blog, as: "Blog" }],
					},
				],
			}).then((user) => {
				if (user) {
					resolve(user);
				}
				resolve("Cannot find user with username " + userReqData.username);
			});
		} catch (e) {
			reject(
				"Error finding user with username " + userReqData.username + ": " + e
			);
		}
	});
};

let getUserByAlias = async (alias) => {
	return new Promise(async (resolve, reject) => {
		try {
			await db.User.findOne({
				include: [
					{
						model: db.Topic,
						as: "Topic",
						include: [{ model: db.Blog, as: "Blog" }],
					},
				],
				where: { alias: alias },
			}).then((user) => {
				if (user) {
					resolve(user);
				}
				resolve("Cannot find user with alias " + alias);
			});
		} catch (e) {
			reject("Error finding user with alias " + alias + ": " + e);
		}
	});
};

module.exports = {
	getAllUsers: getAllUsers,
	getUserByID: getUserByID,
	addNewUser: addNewUser,
	updateUser: updateUser,
	deleteUserByID: deleteUserByID,
	getUserByUsername: getUserByUsername,
	getUserByAlias: getUserByAlias,
};
