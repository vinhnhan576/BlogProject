import React, { useRef } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const CategoryCard = (props) => {
	const params = useParams();
	const bodyImageRef = useRef();
	const onImgLoad = ({ target: img }) => {
		const { offsetHeight, offsetWidth } = img;
		if (offsetWidth > offsetHeight)
			bodyImageRef.current.classList.add("landscape");
		else bodyImageRef.current.classList.add("portrait");
	};

	return (
		<div className="category_container" id={props.id}>
			<Link to={`/${params.alias}/blog/${props.slug}`}>
				<div className="category_container-image" ref={bodyImageRef}>
					<img onLoad={onImgLoad} src={props.urlImage} alt="" />
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
