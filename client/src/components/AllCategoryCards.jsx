import React from "react";
import CategoryCard from "./CategoryCard";
import Hello from "../assets/image/topic/huonglehere_du-lich.jpg";
import Banner from "./Banner";

const AllCategoryCards = () => {
	// const allCardsElements = allCards.map((card) => {
	//   return (
	//     <CategoryCard
	//       key={post.id}
	//       id={post.id}
	//       urlImage={post.coverImg}
	//       content={post.content}
	//       title={post.title}
	//     />
	//   );
	// });
	return (
		<div className="allCategoryCards">
			<div className="allCategoryCards_banner">
				<Banner img={Hello} width="100" height="440" quote="abc" />
			</div>
			<div className="allCategoryCards_container">
				<CategoryCard
					urlImage={require("../assets/image/blog/huonglehere_du-lich_du-lich-bien-canh-duong.jpg")}
					date="Huế - 22/7/2022"
					title="Biển Tân Cảnh Dương cùng Hương Lê và những người bạn"
					content="Lorem Ipsum is simply dummy teIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. s"
					slug="du-lich-bien-canh-duong"
				/>
				<CategoryCard
					urlImage={Hello}
					date="22/7/2022"
					title="Đầm Sen cùng Hương Lê"
					content="Lorem Ipsum is simply dummy teIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. s"
					slug=""
				/>
				<CategoryCard
					urlImage={Hello}
					date="22/7/2022"
					title="Đầm Sen cùng Hương Lê"
					content="Lorem Ipsum is simply dummy teIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. s"
					slug=""
				/>
				<CategoryCard
					urlImage={Hello}
					date="22/7/2022"
					title="Đầm Sen cùng Hương Lê"
					content="Lorem Ipsum is simply dummy teIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. s"
					slug=""
				/>
				<CategoryCard
					urlImage={Hello}
					date="22/7/2022"
					title="Đầm Sen cùng Hương Lê"
					content="Lorem Ipsum is simply dummy teIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. s"
					slug=""
				/>
				<CategoryCard
					urlImage={Hello}
					date="22/7/2022"
					title="Đầm Sen cùng Hương Lê"
					content="Lorem Ipsum is simply dummy teIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. s"
					slug=""
				/>
				<CategoryCard
					urlImage={Hello}
					date="22/7/2022"
					title="Đầm Sen cùng Hương Lê"
					content="Lorem Ipsum is simply dummy teIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. s"
					slug=""
				/>
				<CategoryCard
					urlImage={Hello}
					date="22/7/2022"
					title="Đầm Sen cùng Hương Lê"
					content="Lorem Ipsum is simply dummy teIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. s"
					slug=""
				/>
			</div>
		</div>
	);
};

export default AllCategoryCards;
