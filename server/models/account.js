"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Account extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			this.belongsTo(models.User, { as: "User", foreignKey: "userID" });
		}
	}
	Account.init(
		{
			username: {
				type: DataTypes.STRING,
				primaryKey: true,
			},
			userID: DataTypes.INTEGER,
			password: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Account",
		}
	);
	return Account;
};
