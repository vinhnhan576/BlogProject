import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBlogBySlugAsync } from "../features/post/blogSlice";

import Helmet from "../components/Helmet";
import Banner from "../components/Banner";
import { useDispatch, useSelector } from "react-redux";
import PageNotFound from "./PageNotFound";

function Blog(props) {
	const params = useParams();
	const slug = params.slug;
	const dispatch = useDispatch();
	const blog = useSelector((state) => state.blog);
	useEffect(() => {
		dispatch(getBlogBySlugAsync(slug));
	}, [dispatch, slug]);
	console.log(blog.coverImg)
	if (
		(typeof blog !== "undefined" && blog.length === 0) ||
		typeof blog === "string"
	)
		return <PageNotFound />;

	return (
		<Helmet title="Blog">
			<div className="blog">
				<Banner
					img={require(`../assets/image/blog/${blog.coverImg}`)}
					quote={blog.quote}
				/>
				<div className="blog__timestamp">{`${blog.location} - ${blog.date}`}</div>
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
