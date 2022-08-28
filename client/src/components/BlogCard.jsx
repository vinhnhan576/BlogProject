import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";

export default function BlogCard(props) {
	const bodyImageRef = useRef();

	const onImgLoad = ({ target: img }) => {
		const { offsetHeight, offsetWidth } = img;
		if (offsetWidth > offsetHeight)
			bodyImageRef.current.classList.add("landscape");
		else bodyImageRef.current.classList.add("portrait");
	};

	return (
		<Link to={`/${props.alias}/blog/${props.slug}`}>
			<div className="blog-card" id={props.id}>
				<div className="blog-card__image">
					<div className="blog-card__image__container" ref={bodyImageRef}>
						<img onLoad={onImgLoad} src={props.urlImage} alt="" />
					</div>
				</div>
				<div className="blog-card__content">
					<div className="blog-card__content__border"></div>
					<h3>{props.title}</h3>
					<p>{props.content}</p>
				</div>
			</div>
		</Link>
	);
}
