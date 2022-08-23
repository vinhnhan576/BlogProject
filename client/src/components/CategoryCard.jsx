import React from "react";

const CategoryCard = (props) => {
	return (
		<div className="category_container" id={props.id}>
			<div className="category_container-image">
				<img src={props.urlImage} alt="" />
			</div>
			<div className="category_container-content">
				<h3>{props.date}</h3>
				<h1>{props.title}</h1>
				<p>{props.content}</p>
			</div>
		</div>
	);
};

export default CategoryCard;
