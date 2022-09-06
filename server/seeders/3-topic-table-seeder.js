"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		const users = await queryInterface.sequelize.query("SELECT id FROM 'Users'");
		const userRows = users[0];

		await queryInterface.bulkInsert(
			"Topics",
			[
				{
					topicName: "Đời sống",
					img: "huonglehere_doi-song.jpg",
					quote: "quote",
					slug: "doi-song",
					userID: userRows[0].id, //userRow[0] = huongle
				},
				{
					topicName: "Du lịch",
					img: "huonglehere_du-lich.jpg",
					quote: "quote",
					slug: "du-lich",
					userID: userRows[0].id, //userRow[0] = huongle
				},
				{
					topicName: "Ăn uống",
					img: "huonglehere_an-uong.jpg",
					quote: "quote",
					slug: "an-uong",
					userID: userRows[0].id, //userRow[0] = huongle
				},
				{
					topicName: "Du lịch",
					img: "",
					quote: "Phải có làm thì mới có ăn không làm đòi có ăn ăn đb ăn c",
					slug: "du-lich",
					userID: userRows[1].id, //userRow[1] = nhan
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("topics", null, {});
	},
};
