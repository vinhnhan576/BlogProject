'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    id: DataTypes.STRING,
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
    accountid: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};