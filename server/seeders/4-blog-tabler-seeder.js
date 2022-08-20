"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		const topics = await queryInterface.sequelize.query(
			"SELECT id FROM TOPICS"
		);
		const topicRows = topics[0]; // topic cua huongle

		await queryInterface.bulkInsert(
			"Blogs",
			[
				{
					title: "Đầm Sen cùng Hương Lê",
					coverImg: "",
					quote: "đây là một dòng quote",
					date: new Date(19, 8, 2022),
					content:
						"Biển Cảnh Dương ở đâu? Tọa lạc ở thông Cảnh Dương, xã Lộc Vĩnh, huyện Phú Lộc, tỉnh Thừa Thiên Huế. Khu cắm trại nổi tiếng này nằm trên bãi biển nguyên sơ tuyệt đẹp, tới đây bạn sẽ có trải nghiệm mới, gần gũi với thiên nhiên và cùng hòa mình với các hoạt động vui chơi thể thao, giải trí hấp dẫn. <br/> Cách trung tâm thành phố Huế & Đà Nẵng 50km, thời gian di chuyển khoảng 1 giờ đồng hồ lái xe. Tại khu du lịch này có nhà hàng, quán bar, khu vui chơi trẻ em, khu vệ sinh công cộng sạch sẽ, các dụng cụ để cắm trại. Cùng những hoạt động vui chơi, giải trí như: Bóng chuyền, đá bóng, bơi, bi lắc… <br/> Cảnh Dương Beachcamp có gì chơi? Bạn sẽ được tự do tắm biển, nghỉ ngơi và thư giãn để tránh xa sự ồn ào náo nhiệt của chốn đô thị xô bồ. Ngoài ra, bạn còn được tham gia nhiều hoạt động vui chơi, thú vị như: Kéo co, bắt vịt, bịt mắt… ",
					slug: "du-lich-bien-canh-duong",
					topicID: topicRows[1].id, //topic du lich
				},
				{
					title: "test",
					coverImg: "",
					quote: "đây là một dòng quote",
					date: new Date(19, 8, 2022),
					content: "test",
					slug: "du-lich-bien-canh-duong",
					topicID: 23, //topic du lich
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Blogs", null, {});
	},
};