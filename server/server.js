const express = require("express");
const bodyParser = require("body-parser");
const connectDb = require("./config/db.config");
const cors = require("cors");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connectDb();

const apiRoutes = require("./routes/api.routes");
app.use("/api", apiRoutes);
const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
	res.send("server index page");
});

if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

// app.get("*", (request, response) => {
// 	response.sendFile(path.join(__dirname, "client/build", "index.html"));
// });

app.listen(process.env.PORT || 8080, () => {
	console.log(`Server started on port ${process.env.PORT || 8080}`);
});
