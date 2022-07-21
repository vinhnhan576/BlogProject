const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "dbBlog",
});

db.connect((err) => {
  if (err) {
    console.log("error");
    throw err;
  }
  console.log("mysql");
});

app.get("/createdb", (req, res) => {
  let sql = "CREATE DATABASE dbBlog";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("db created");
  });
});

app.get("/createusertable", (req, res) => {
  let sql =
    "CREATE TABLE user(id INT AUTO_INCREMENT, name VARCHAR(50), age INT, PRIMARY KEY (id))";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("table created");
  });
});

app.post("/insertuser", (req, res) => {
  console.log(req.body);
  const name = req.body.name;
  const age = req.body.age;

  db.query(
    "INSERT INTO user (name, age) VALUES (?,?)",
    [name, age],
    (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("User added");
    }
  );
});

app.listen("3001", () => {
  console.log("yay");
});
