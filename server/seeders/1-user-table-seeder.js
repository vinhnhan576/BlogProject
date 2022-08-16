"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Users",
			[
				{
					name: "Lê Ngọc Thanh Hương",
					alias: "huongleehere",
					gender: false,
					date: new Date(4, 28, 2002),
					tel: "0123456789",
					job: "tutor",
					address: "Thủy Dương, Huế",
				},
				{
					name: "Lê Văn Vĩnh Nhân",
					alias: "vnhxn",
					gender: true,
					date: new Date(3, 6, 2002),
					tel: "0708182526",
					job: "undergraduate",
					address: "Thủy Châu, Huế",
					email: "vinhnhan576@gmail.com",
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Users", null, {});
	},
};
