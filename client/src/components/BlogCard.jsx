import React from "react";
import { useRef } from "react";

export default function BlogCard(props) {
	const bodyImageRef = useRef();

	const onImgLoad = ({ target: img }) => {
		const { offsetHeight, offsetWidth } = img;
		if (offsetWidth > offsetHeight)
			bodyImageRef.current.classList.add("landscape");
		else bodyImageRef.current.classList.add("portrait");
	};

	return (
		<div className="body" id={props.id}>
			<div className="body-image">
				<div className="body-image-container" ref={bodyImageRef}>
					<img onLoad={onImgLoad} src={props.urlImage} alt="" />
				</div>
			</div>
			<div className="body-content">
				<h3>{props.title}</h3>
				<p>{props.content}</p>
			</div>
		</div>
	);
}
