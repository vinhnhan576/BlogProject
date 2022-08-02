const accountService = require("../service/account.service");

//get account list
exports.getAllAccounts = async (req, res) => {
  let accountList = await accountService.getAllAccounts();
  return res.send(accountList);
};

//get account by id
exports.getAccountByID = async (req, res) => {
  let account = await accountService.getAccountByID(req.params.id);
  return res.send(account);
};

//add new account
exports.addNewUser = async (req, res) => {
  let message = await accountService.addNewAccount(req.body);
  return res.send(message);
};
