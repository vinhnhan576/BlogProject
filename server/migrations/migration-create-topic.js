"use strict";
module.exports = {
	async up(queryInterface, Sequelize) {
		// await queryInterface.createTable("Topics", {
		// 	id: {
		// 		allowNull: false,
		// 		autoIncrement: true,
		// 		primaryKey: true,
		// 		type: Sequelize.INTEGER,
		// 	},
		// 	topicName: {
		// 		type: Sequelize.STRING,
		// 	},
		// 	img: {
		// 		type: Sequelize.STRING,
		// 	},
		// 	quote: {
		// 		type: Sequelize.STRING,
		// 	},
		// 	slug: {
		// 		type: Sequelize.STRING,
		// 	},
		// 	userID: {
		// 		type: Sequelize.INTEGER,
		// 	},
		// 	createdAt: {
		// 		allowNull: false,
		// 		defaultValue: new Date(),
		// 		type: Sequelize.DATE,
		// 	},
		// 	updatedAt: {
		// 		allowNull: false,
		// 		defaultValue: new Date(),
		// 		type: Sequelize.DATE,
		// 	},
		// });
		// await queryInterface.addColumn("Topics", "testID", {
		//   type: Sequelize.INTEGER,
		//   // references: {
		//   //   model: "User",
		//   //   key: "id",
		//   // },
		// });
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("Topics");
	},
};
