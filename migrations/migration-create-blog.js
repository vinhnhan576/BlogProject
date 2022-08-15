"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Blogs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      coverImg: {
        type: Sequelize.STRING,
      },
      content: {
        type: Sequelize.TEXT,
      },
      userID: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      topicID: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    });
    await queryInterface.addColumn("Blogs", "testID", {
      type: Sequelize.INTEGER,
      // references: {
      //   model: "User",
      //   key: "id",
      // },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Blogs");
  },
};
