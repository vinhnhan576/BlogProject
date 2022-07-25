const mysql = require("mysql");

const dbConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "dbblog",
});

dbConnection.connect((err) => {
  if (!err) {
    console.log("Database is connected");
  } else {
    console.log("Database cannot be connected");
  }
});

module.exports = dbConnection;
