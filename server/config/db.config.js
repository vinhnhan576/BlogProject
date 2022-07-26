const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
	"postgres://tzfszyubqvycsx:17ffefb401715d0a4f808e71d1e751465cb20fb64b82f8476cd05e49bc22c47c@ec2-34-194-40-194.compute-1.amazonaws.com:5432/d2a5i7al1jpuq9",
	{
		dialect: "postgres",
		dialectOptions: {
			ssl: {
				require: true,
				rejectUnauthorized: false,
			},
		},
		logging: false,
		define: {
			timestamps: false,
		},
	}
);

let connectDB = async () =>
	await sequelize
		.authenticate()
		.then(() => console.log("Connection has been established successfully."))
		.catch((err) => console.error("Unable to connect to the database", err));

module.exports = connectDB;
