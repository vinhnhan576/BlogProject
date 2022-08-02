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

let getAccountByID = async (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let account = await db.Account.findByPk(id);
      if (account) resolve(account);
      resolve("Cannot find account with id " + id);
    } catch (e) {
      reject("Error fetching account with id: " + e);
    }
  });
};

let addNewAccount = async (accountReqData) => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.Account.create({
        userID: accountReqData.userID,
        username: accountReqData.username,
        password: accountReqData.password,
      });
      resolve("account added successfully!");
    } catch (e) {
      reject("Error adding account: " + e);
    }
  });
};

let updateAccount = async (id, accountReqData) => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.Account.update(accountReqData, { where: { id: id } }).then(
        (account) => {
          if (account) {
            resolve("Updated account with id " + id + "  successfully!");
          }
          resolve(
            "Cannot update account with id" +
              id +
              "Maybe the account cannot be found or the request data is empty!"
          );
        }
      );
    } catch (e) {
      reject("Error updating account with id " + id + ": " + e);
    }
  });
};

let deleteAccountByID = async (id) => {
  return new Promise(async (resolve, reject) => {
    await db.Account.destroy({ where: { id: id } }).then((deletedAccount) => {
      if (deletedAccount) {
        resolve("Deleted account with id " + id + " successfully!");
      }
      resolve(
        "Cannot delete account with id " +
          id +
          ". Maybe the account cannot be found!"
      );
    });
  });
};

module.exports = {
  getAllAccounts: getAllAccounts,
  getAccountByID: getAccountByID,
  addNewAccount: addNewAccount,
  updateAccount: updateAccount,
  deleteAccountByID: deleteAccountByID,
};
