import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBlogBySlugAsync } from "../features/post/blogSlice";
import Helmet from "../components/Helmet";
import Banner from "../components/Banner";
import { useDispatch, useSelector } from "react-redux";
import PageNotFound from "./PageNotFound";
import alt from "../assets/image/blog/alt.jpg";

function Blog({name}) {
	const params = useParams();
	const slug = params.slug;
	const dispatch = useDispatch();
	const blogs = useSelector((state) => state.blog);
	useEffect(() => {
		dispatch(getBlogBySlugAsync(slug));
	}, [dispatch, slug]);
	const blog = Array.isArray(blogs)
		? blogs?.find((blog) => blog.slug === slug)
		: blogs;
	if (
		(typeof blog !== "undefined" && blog.length === 0) ||
		typeof blog === "string"
	)
		return <PageNotFound />;

	if (typeof blog === "object")
		// if (blog)
		return (
			<Helmet title="Blog">
				<div className="blog">
					{blog.coverImg !== "" ? (
						<Banner
							img={require(`../assets/image/blog/${blog.coverImg}`)}
							alt={alt}
							quote={blog.quote}
						/>
					) : (
						<Banner img={alt} alt={alt} quote={blog.quote} />
					)}
					<div className="blog__timestamp">{`${blog.location} - ${blog.date}`}</div>
					<div className="blog__content">
						<div className="blog__content__title">{blog.title}</div>
						<div className="blog__content__body">{blog.content}</div>
						<div className="blog__content__signature">by {name}</div>
					</div>
				</div>
			</Helmet>
		);
}

export default Blog;
