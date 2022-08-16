const express = require("express");
const bodyParser = require("body-parser");
const connectDb = require("./config/db.config");
const cors = require("cors");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 8080;

connectDb();

const apiRoutes = require("./routes/api.routes");
app.use("/api", apiRoutes);
const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
	res.send("hello world");
});

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
