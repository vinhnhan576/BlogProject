const express = require("express");
const bodyParser = require("body-parser");
const connectDb = require("./config/db.config");

require("dotenv").config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 8080;

connectDb();

const apiRoutes = require("./routes/api.routes");
app.use("/api", apiRoutes);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
