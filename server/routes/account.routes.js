const accountController = require("../controllers/account.controller");

const express = require("express");
const router = express.Router();

//get all accounts
router.get("/", accountController.getAccountList);

//get account by id
