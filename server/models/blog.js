"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Blog extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// this.belongsTo(models.User, { as: "User", foreignKey: "userID" });
			this.belongsTo(models.Topic, { as: "Topic", foreignKey: "topicID" });
		}
	}
	Blog.init(
		{
			title: DataTypes.STRING,
			coverImg: DataTypes.STRING,
			quote: DataTypes.STRING,
			date: DataTypes.DATE,
			location: DataTypes.STRING,
			content: DataTypes.TEXT,
			slug: DataTypes.STRING,
			signature: DataTypes.STRING,
			// userID: DataTypes.STRING,
			topicID: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "Blog",
		},
		{
			timestamps: false,
		}
	);
	return Blog;
};
