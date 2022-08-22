import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBlogBySlugAsync, selectPost } from "../features/post/PostSlice";

import testImg from "../assets/image/blog/blog-cover-img.jpg";

import Helmet from "../components/Helmet";
import Banner from "../components/Banner";
import { useDispatch, useSelector } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";

function Blog(props) {
	const params = useParams();
	const slug = params.slug;
	const dispatch = useDispatch();
	const blog = useSelector((state) => state.post);
	useEffect(() => {
		dispatch(getBlogBySlugAsync(slug));
	}, [slug]);
	console.log(blog);

	return (
		<Helmet title="Blog">
			<div className="blog">
						<Banner img={testImg} quote={blog.quote} />
						<div className="blog__timestamp">Huế 14/8/2022</div>
						<div className="blog__content">
							<div className="blog__content__title">{blog.title}</div>
							<div className="blog__content__body">{blog.content}</div>
							<div className="blog__content__signature">Hương Lé thân iu</div>
						</div>
			</div>
		</Helmet>
	);
}

export default Blog;
