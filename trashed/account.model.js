var db = require("../../config/db.config");

//constructor
var Account = function (account) {
  this.username = account.username;
  this.password = account.password;
};

//get all accounts
Account.getAllAccounts = (result) => {
  let sql = "SELECT * FROM account";
  db.query(sql, (err, res) => {
    if (!err) {
      console.log("accounts fetched successfully");
      result(null, res);
    } else {
      console.log("error fetching accounts");
      result(null, err);
    }
  });
};
