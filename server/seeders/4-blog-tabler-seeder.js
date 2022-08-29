"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		const topics = await queryInterface.sequelize.query(
			"SELECT id FROM TOPICS"
		);
		const huongleTopicRows = topics[0]; // topic cua huongle
		const vnhanTopicRows = topics[1];

		await queryInterface.bulkInsert(
			"Blogs",
			[
				{
					title: "Đánh bài cùng Hương Lê và những người bạn",
					coverImg: "huonglehere_doi-song_danh-bai.jpg",
					quote: "đây là một dòng quote",
					date: new Date(21, 1, 2022),
					location: "Huế",
					content:
						"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed maxime provident dolor doloribus sequi, corporis architecto, molestias similique reprehenderit nostrum quis deserunt eum animi fugit? Asperiores eligendi quia voluptas autem voluptates ipsa voluptate labore sunt, deserunt unde iure recusandae possimus, quam praesentium officia. Similique ullam quos quo molestiae autem? Ab culpa obcaecati amet adipisci quasi odio eveniet libero praesentium repellendus magnam beatae quas harum maiores, impedit laboriosam. Quia accusantium inventore doloribus! Eligendi facilis corrupti quaerat magnam, alias doloremque obcaecati, laborum possimus unde saepe sit libero dolorem repudiandae velit sunt modi ullam distinctio quas maiores iste. Reprehenderit asperiores labore corrupti! Totam cum eius illo rerum laboriosam quos architecto repellendus. Sunt eveniet tempore recusandae nihil unde assumenda? Voluptate consequatur tempora vero, maiores ea dignissimos blanditiis nisi repellat, adipisci, aperiam ex eveniet. Rerum vitae itaque ipsa unde adipisci deserunt, non vel molestiae veniam praesentium minus suscipit saepe! Ut ipsum fugit dolores dolorum nulla. Est, ipsum magni! Sapiente corrupti dignissimos libero dolores error aperiam?",
					slug: "danh-bai",
					topicID: huongleTopicRows[0].id, //topic doi song
				},
				{
					title: "Tốt nghiệp cấp 3 đầy nước mắt",
					coverImg: "huonglehere_doi-song_tot-nghiep-cap-3.jpg",
					quote: "đây là một dòng quote",
					date: new Date(1, 7, 2019),
					location: "Huế",
					content:
						"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed maxime provident dolor doloribus sequi, corporis architecto, molestias similique reprehenderit nostrum quis deserunt eum animi fugit? Asperiores eligendi quia voluptas autem voluptates ipsa voluptate labore sunt, deserunt unde iure recusandae possimus, quam praesentium officia. Similique ullam quos quo molestiae autem? Ab culpa obcaecati amet adipisci quasi odio eveniet libero praesentium repellendus magnam beatae quas harum maiores, impedit laboriosam. Quia accusantium inventore doloribus! Eligendi facilis corrupti quaerat magnam, alias doloremque obcaecati, laborum possimus unde saepe sit libero dolorem repudiandae velit sunt modi ullam distinctio quas maiores iste. Reprehenderit asperiores labore corrupti! Totam cum eius illo rerum laboriosam quos architecto repellendus. Sunt eveniet tempore recusandae nihil unde assumenda? Voluptate consequatur tempora vero, maiores ea dignissimos blanditiis nisi repellat, adipisci, aperiam ex eveniet. Rerum vitae itaque ipsa unde adipisci deserunt, non vel molestiae veniam praesentium minus suscipit saepe! Ut ipsum fugit dolores dolorum nulla. Est, ipsum magni! Sapiente corrupti dignissimos libero dolores error aperiam?",
					slug: "tot-nghiep-cap-3",
					topicID: huongleTopicRows[0].id, //topic doi song
				},
				{
					title: "Thăm nhà bạn Thảo Quyên",
					coverImg: "huonglehere_doi-song_tham-nha-ban-Thao-Quyen.png",
					quote: "đây là một dòng quote",
					date: new Date(1, 7, 2019),
					location: "Huế",
					content:
						"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed maxime provident dolor doloribus sequi, corporis architecto, molestias similique reprehenderit nostrum quis deserunt eum animi fugit? Asperiores eligendi quia voluptas autem voluptates ipsa voluptate labore sunt, deserunt unde iure recusandae possimus, quam praesentium officia. Similique ullam quos quo molestiae autem? Ab culpa obcaecati amet adipisci quasi odio eveniet libero praesentium repellendus magnam beatae quas harum maiores, impedit laboriosam. Quia accusantium inventore doloribus! Eligendi facilis corrupti quaerat magnam, alias doloremque obcaecati, laborum possimus unde saepe sit libero dolorem repudiandae velit sunt modi ullam distinctio quas maiores iste. Reprehenderit asperiores labore corrupti! Totam cum eius illo rerum laboriosam quos architecto repellendus. Sunt eveniet tempore recusandae nihil unde assumenda? Voluptate consequatur tempora vero, maiores ea dignissimos blanditiis nisi repellat, adipisci, aperiam ex eveniet. Rerum vitae itaque ipsa unde adipisci deserunt, non vel molestiae veniam praesentium minus suscipit saepe! Ut ipsum fugit dolores dolorum nulla. Est, ipsum magni! Sapiente corrupti dignissimos libero dolores error aperiam?",
					slug: "tham-nha-ban-Thao-Quyen",
					topicID: huongleTopicRows[0].id, //topic doi song
				},
				{
					title: "Biển Tân Cảnh Dương cùng Hương Lê và những người bạn",
					coverImg: "huonglehere_du-lich_du-lich-bien-canh-duong.jpg",
					quote: "đây là một dòng quote",
					date: new Date(19, 8, 2022),
					location: "Huế",
					content:
						"Biển Cảnh Dương ở đâu? Tọa lạc ở thông Cảnh Dương, xã Lộc Vĩnh, huyện Phú Lộc, tỉnh Thừa Thiên Huế. Khu cắm trại nổi tiếng này nằm trên bãi biển nguyên sơ tuyệt đẹp, tới đây bạn sẽ có trải nghiệm mới, gần gũi với thiên nhiên và cùng hòa mình với các hoạt động vui chơi thể thao, giải trí hấp dẫn. <br/> Cách trung tâm thành phố Huế & Đà Nẵng 50km, thời gian di chuyển khoảng 1 giờ đồng hồ lái xe. Tại khu du lịch này có nhà hàng, quán bar, khu vui chơi trẻ em, khu vệ sinh công cộng sạch sẽ, các dụng cụ để cắm trại. Cùng những hoạt động vui chơi, giải trí như: Bóng chuyền, đá bóng, bơi, bi lắc… <br/> Cảnh Dương Beachcamp có gì chơi? Bạn sẽ được tự do tắm biển, nghỉ ngơi và thư giãn để tránh xa sự ồn ào náo nhiệt của chốn đô thị xô bồ. Ngoài ra, bạn còn được tham gia nhiều hoạt động vui chơi, thú vị như: Kéo co, bắt vịt, bịt mắt… ",
					slug: "du-lich-bien-canh-duong",
					topicID: huongleTopicRows[1].id, //topic du lich
				},
				{
					title: "Chè Huế có gì ngon?",
					coverImg: "huonglehere_an-uong_che-hue-co-gi-ngon.jpg",
					quote: "đây là một dòng quote",
					date: new Date(19, 8, 2022),
					location: "Huế",
					content:
						"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed maxime provident dolor doloribus sequi, corporis architecto, molestias similique reprehenderit nostrum quis deserunt eum animi fugit? Asperiores eligendi quia voluptas autem voluptates ipsa voluptate labore sunt, deserunt unde iure recusandae possimus, quam praesentium officia. Similique ullam quos quo molestiae autem? Ab culpa obcaecati amet adipisci quasi odio eveniet libero praesentium repellendus magnam beatae quas harum maiores, impedit laboriosam. Quia accusantium inventore doloribus! Eligendi facilis corrupti quaerat magnam, alias doloremque obcaecati, laborum possimus unde saepe sit libero dolorem repudiandae velit sunt modi ullam distinctio quas maiores iste. Reprehenderit asperiores labore corrupti! Totam cum eius illo rerum laboriosam quos architecto repellendus. Sunt eveniet tempore recusandae nihil unde assumenda?",
					slug: "che-hue-co-gi-ngon",
					topicID: huongleTopicRows[2].id, //topic an uong
				},
				{
					title: "Cùng Hương Lê vào bếp",
					coverImg: "huonglehere_an-uong_huong-le-vao-bep.jpg",
					quote: "đây là một dòng quote",
					date: new Date(19, 8, 2022),
					location: "Huế",
					content:
						"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed maxime provident dolor doloribus sequi, corporis architecto, molestias similique reprehenderit nostrum quis deserunt eum animi fugit? Asperiores eligendi quia voluptas autem voluptates ipsa voluptate labore sunt, deserunt unde iure recusandae possimus, quam praesentium officia. Similique ullam quos quo molestiae autem? Ab culpa obcaecati amet adipisci quasi odio eveniet libero praesentium repellendus magnam beatae quas harum maiores, impedit laboriosam. Quia accusantium inventore doloribus! Eligendi facilis corrupti quaerat magnam, alias doloremque obcaecati, laborum possimus unde saepe sit libero dolorem repudiandae velit sunt modi ullam distinctio quas maiores iste. Reprehenderit asperiores labore corrupti! Totam cum eius illo rerum laboriosam quos architecto repellendus. Sunt eveniet tempore recusandae nihil unde assumenda?",
					slug: "huong-le-vao-bep",
					topicID: huongleTopicRows[2].id, //topic an uong
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
