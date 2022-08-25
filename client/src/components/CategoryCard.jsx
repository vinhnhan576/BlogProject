import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const CategoryCard = (props) => {
	const params = useParams();

	return (
		<div className="category_container" id={props.id}>
			<Link to={`/${params.alias}/blog/${props.slug}`}>
				<div className="category_container-image">
					<img src={props.urlImage} alt="" />
				</div>
				<div className="category_container-content">
					<h3>{props.date}</h3>
					<h1>{props.title}</h1>
					<p>{props.content}</p>
				</div>
			</Link>
		</div>
	);
};

export default CategoryCard;
