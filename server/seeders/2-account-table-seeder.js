"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		const users = await queryInterface.sequelize.query("SELECT id FROM Users");
		const userRows = users[0];

		await queryInterface.bulkInsert(
			"Accounts",
			[
				{
					userID: userRows[0].id,
					username: "huonglehere",
					password: "123456",
				},
				{
					userID: userRows[1].id,
					username: "vinhnhn576",
					password: "123456",
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("accounts", null, {});
	},
};
