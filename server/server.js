const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const port = process.env.port || 5000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

const userRoutes = require("./src/routes/user.routes");
app.use("/api/user", userRoutes);

const createTableRoutes = require("./config/createtable.config");
app.use("/createtable", createTableRoutes);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
