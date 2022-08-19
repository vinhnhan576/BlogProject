const accountService = require("../service/account.service");

//get account list
exports.getAllAccounts = async (req, res) => {
	let accountList = await accountService.getAllAccounts();
	return res.send(accountList);
};

//get account by id
exports.getAccountByID = async (req, res) => {
	let account = await accountService.getAccountByUsername(req.params.id);
	return res.send(account);
};

//add new account
exports.addNewAccount = async (req, res) => {
	let message = await accountService.addNewAccount(req.body);
	return res.send(message);
};

//authenticate account
exports.authenticateAccount = async (req, res) => {
	let accountAuth = await accountService.accountAuth(req.body);
	return res.send(accountAuth);
};
