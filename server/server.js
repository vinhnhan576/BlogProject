const express = require("express");
const bodyParser = require("body-parser");
const db = require("./config/db.config");

require("dotenv").config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 8080;

const userRoutes = require("./src/routes/user.routes");
app.use("/api/user", userRoutes);

const createTableRoutes = require("./config/createtable.config");
app.use("/createtable", createTableRoutes);

app.get("/", (req, res) => {
  res.send("hello world");
});

db();

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
