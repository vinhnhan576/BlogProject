import React from "react";
import { useParams } from "react-router-dom";

import testImg from "../assets/image/banner/banner.png";

import Helmet from "../components/Helmet";
import Banner from "../components/Banner";

function Blog(props) {
	const slug = useParams();
	var blog;

	return (
		<Helmet title="Blog">
			<div className="blog">
				<Banner img={testImg} height="400" quote="sup bitch" />
				<div className="blog__timestamp">Huế 14/8/2022</div>
				<div className="blog__content">
					<div className="blog__content__title">hi</div>
					<div className="blog__content__body">abcdefg</div>
					<div className="blog__content__signature">bai</div>
				</div>
			</div>
		</Helmet>
	);
}

export default Blog;
