const accountController = require("../controllers/account.controller");

const express = require("express");
const router = express.Router();

//get all accounts
router.get("/", accountController.getAllAccounts);

//get account by id
router.get("/:id", accountController.getAccountByID);

//add new account
router.post("/", accountController.addNewUser);

module.exports = router;
