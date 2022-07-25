const mysql = require("mysql");
const express = require("express");
const router = express.Router();

const dbConnection = require("./db.config");

router.get("/createusertable", (req, res) => {
  let sql =
    "CREATE TABLE user(id INT AUTO_INCREMENT, name NVARCHAR(50), alias NVARCHAR(30),gender BOOLEAN, date DATE, tel VARCHAR(11), job VARCHAR(50), address NVARCHAR(50), email VARCHAR(30), profilepic VARCHAR(50), upperpic VARCHAR(50), lowerpic VARCHAR(50), PRIMARY KEY (id))";
  dbConnection.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("user table created");
  });
});

router.get("/createaccounttable", (req, res) => {
  let sql = "";
  dbConnection.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("account table created");
  });
});

router.get("/createtopictable", (req, res) => {
  let sql = "";
  dbConnection.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("topic table created");
  });
});

router.get("/createblogtable", (req, res) => {
  let sql = "";
  dbConnection.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("blog table created");
  });
});

module.exports = router;
