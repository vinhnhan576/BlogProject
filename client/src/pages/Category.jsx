import React from "react";
import Hello from "../assets/image/About/xinchao.png";
import Helmet from "../components/Helmet";
import CategoryCard from "../components/CategoryCard";
import AllCategoryCards from "../components/AllCategoryCards";
import Banner from "../components/Banner";

function Category() {
	return (
		<div>
			<Helmet title="Chủ đề">
				<Banner img={Hello} width="100" height="640" />
				<AllCategoryCards />
			</Helmet>
		</div>
	);
}

export default Category;
