const db = require("../models");

let getAllAccounts = async () => {
	return new Promise(async (resolve, reject) => {
		try {
			await db.Account.findAll().then((accountList) => {
				if (accountList) {
					resolve(accountList);
				}
				resolve(
					"Cannot fetch the account list. Maybe the account list is empty!"
				);
			});
		} catch (e) {
			reject("Error fetching account list: " + e);
		}
	});
};

let getAccountByUsername = async (username) => {
	return new Promise(async (resolve, reject) => {
		try {
			let account = await db.Account.findByPk(username);
			console.log(account);
			if (account) resolve(account);
			resolve("Cannot find account with username " + username);
		} catch (e) {
			reject("Error fetching account with username " + username + ": " + e);
		}
	});
};

let addNewAccount = async (accountReqData) => {
	return new Promise(async (resolve, reject) => {
		try {
			console.log(accountReqData);
			let user = await db.User.create({
				name: accountReqData.name,
				alias: accountReqData.alias,
				gender: accountReqData.gender,
				date: accountReqData.date,
				tel: accountReqData.tel,
				job: accountReqData.job,
				address: accountReqData.address,
				email: accountReqData.email,
				profilepic: accountReqData.profilepic,
				upperpic: accountReqData.upperpic,
				lowerpic: accountReqData.lowerpic,
			});
			console.log(user.dataValues.id);
			await db.Account.create({
				userID: user.dataValues.id,
				username: accountReqData.username,
				password: accountReqData.password,
			});
			resolve("account added successfully!");
		} catch (e) {
			reject("Error adding account: " + e);
		}
	});
};

let updateAccount = async (username, accountReqData) => {
	return new Promise(async (resolve, reject) => {
		try {
			await db.Account.update(accountReqData, {
				where: { username: username },
			}).then((account) => {
				if (account) {
					resolve(
						"Updated account with username " + username + "  successfully!"
					);
				}
				resolve(
					"Cannot update account with username" +
						username +
						"Maybe the account cannot be found or the request data is empty!"
				);
			});
		} catch (e) {
			reject("Error updating account with username " + username + ": " + e);
		}
	});
};

let deleteAccountByUsername = async (username) => {
	return new Promise(async (resolve, reject) => {
		try {
			await db.Account.destroy({ where: { username: username } }).then(
				(deletedAccount) => {
					if (deletedAccount) {
						resolve(
							"Deleted account with username " + username + " successfully!"
						);
					}
					resolve(
						"Cannot delete account with username " +
							username +
							". Maybe the account cannot be found!"
					);
				}
			);
		} catch (e) {
			reject("Error deleting account with username " + username + ": " + e);
		}
	});
};

let accountAuth = async (accountReqData) => {
	return new Promise(async (resolve, reject) => {
		try {
			let account = await db.Account.findByPk(accountReqData.username);
			console.log(accountReqData.username);
			if (account) {
				if (account.password === accountReqData.password) resolve(account);
				resolve(null);
			}
			resolve(null);
		} catch (e) {
			reject("Error authenticating account: " + e);
		}
	});
};

module.exports = {
	getAllAccounts: getAllAccounts,
	getAccountByUsername: getAccountByUsername,
	addNewAccount: addNewAccount,
	updateAccount: updateAccount,
	deleteAccountByUsername: deleteAccountByUsername,
	accountAuth: accountAuth,
};
