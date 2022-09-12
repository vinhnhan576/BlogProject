const express = require("express");
const bodyParser = require("body-parser");
const connectDb = require("./config/db.config");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
// app.use(forms.array());

connectDb();

const apiRoutes = require("./routes/api.routes");
app.use("/api", apiRoutes);
const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

app.use("../image/blog", express.static("../image/blog"));

app.get("/", (req, res) => {
	res.send("server index page");
});

if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

app.all("/", function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	next();
});

// app.get("*", (request, response) => {
// 	response.sendFile(path.join(__dirname, "client/build", "index.html"));
// });

app.listen(process.env.PORT || 8080, () => {
	console.log(`Server started on port ${process.env.PORT || 8080}`);
});
