const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

var db;
connectDb = () => {
  if (!db) {
    db = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
    });
    db.connect((err) => {
      if (!err) {
        console.log("Database is connected");
      } else {
        console.log("Database cannot be connected");
      }
    });
  }
  return db;
};
module.exports = connectDb();

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
    "CREATE TABLE user(id INT AUTO_INCREMENT, name NVARCHAR(50), date DATE, tel VARCHAR(11), job VARCHAR(50), gender BOOLEAN, email VARCHAR(30), address NVARCHAR(50), profilepicture VARCHAR(50), upperpic VARCHAR(50), lowerpic VARCHAR(50), PRIMARY KEY (id))";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("user table created");
  });
});

app.post("/insertuser", (req, res) => {
  console.log(req.body);
  const name = req.body.name;
  const age = req.body.age;
  const date = req.body.date;
  const tel = req.body.tel;
  const job = req.body.job;
  const gender = req.body.gender;
  const email = req.body.email;
  const address = req.body.address;
  const profilepicture = req.body.profilepicture;
  const upperpic = req.body.upperpic;
  const lowerpic = req.body.lowerpic;

  db.query(
    "INSERT INTO user (name, age, date, tel, job, gender, email, address, profilepicture, upperpic, lowerpic) VALUES (?,?,?,?,?,?,?,?,?,?,?)",
    [name, age, date, tel, job, gender, email, address, profilepicture, upperpic, lowerpic],
    (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("User added");
    }
  );
});
