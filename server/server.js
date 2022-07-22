const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use("/api/user", require("./routes/users"));
app.use("/api/post", require("./routes/posts"));

const port = 5000;

app.listen(port, () => {
  console.log("Server started on port ${port}");
});
