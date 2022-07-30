const accountModel = require("../models/account.model");

//get account list
exports.getAccountList = (req, res) => {
  accountModel.getAllAccounts((err, accounts) => {
    if (err) {
      res.send(err);
    } else {
      res.send(accounts);
    }
  });
};
