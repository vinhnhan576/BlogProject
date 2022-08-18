"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Topic extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			this.hasMany(models.Blog, { as: "Blog", foreignKey: "topicID" });
			this.belongsTo(models.User, { as: "User", foreignKey: "userID" });
		}
	}
	Topic.init(
		{
			topicName: DataTypes.STRING,
			img: DataTypes.STRING,
			quote: DataTypes.STRING,
			slug: DataTypes.STRING,
			userID: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "Topic",
		}
	);
	return Topic;
};
