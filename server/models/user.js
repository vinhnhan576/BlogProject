"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models.Account, { as: "Account", foreignKey: "userID" });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      alias: DataTypes.STRING,
      gender: DataTypes.BOOLEAN,
      date: DataTypes.DATE,
      tel: DataTypes.STRING,
      job: DataTypes.STRING,
      address: DataTypes.STRING,
      email: DataTypes.STRING,
      profilepic: DataTypes.TEXT,
      upperpic: DataTypes.TEXT,
      lowerpic: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
