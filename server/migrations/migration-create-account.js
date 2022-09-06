"use strict";
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("accounts", {
			userID: {
				type: Sequelize.INTEGER,
			},
			username: {
				type: Sequelize.STRING,
				allowNull: false,
				primaryKey: true,
			},
			password: {
				type: Sequelize.STRING,
			},
			createdAt: {
				allowNull: false,
				defaultValue: new Date(),
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				defaultValue: new Date(),
				type: Sequelize.DATE,
			},
		});
		// await queryInterface.addColumn("Accounts", "userID", {
		//   type: Sequelize.INTEGER,
		//   references: {
		//     model: "User",
		//     key: "id",
		//   },
		//   onUpdate: "CASCADE",
		//   onDelete: "SET NULL",
		// });
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("accounts");
	},
};
