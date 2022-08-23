import React from "react";
import Helmet from "../components/Helmet";
import AllCategoryCards from "../components/AllCategoryCards";
import Banner from "../components/Banner";

function Category() {
	return (
		<div>
			<Helmet title="Chủ đề">
				<AllCategoryCards />
			</Helmet>
		</div>
	);
}

export default Category;
