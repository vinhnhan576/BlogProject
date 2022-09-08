import React from "react";
import Helmet from "../components/Helmet";
import Banner from "../components/Banner";
import { useSelector, useDispatch } from "react-redux";
<<<<<<< HEAD
import { useState, useEffect } from "react";
import { Link,useNavigate, useParams} from "react-router-dom";
=======
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBloggerByAliasAsync } from "../features/user/bloggerSlice";
import CategoryCard from "../components/CategoryCard";
import PageNotFound from "./PageNotFound";
>>>>>>> a10179f03953799fcff24f3aa975a3c7e2c5f2b9

function Category() {
	const dispatch = useDispatch();
	const params = useParams();
	const alias = params.alias;
	const blogger = useSelector((state) => state.blogger);
	useEffect(() => {
		dispatch(getBloggerByAliasAsync(alias));
	}, [dispatch, alias]);
	const topic = blogger.Topic?.find((topic) => topic.slug === params.slug);
	// const allBlogsByTopic = Array.isArray(allBlogs)
	// 	? allBlogs?.filter((blog) => blog.Topic.slug === params.slug)
	// 	: [allBlogs];
	const allBlogsByTopic = topic ? topic.Blog : null;

	if (
		(typeof topic !== "undefined" && topic.length === 0) ||
		typeof topic === "string"
	)
		return <PageNotFound />;

	if (topic)
		return (
			<div>
				<Helmet title="Chủ đề">
					<div className="allCategoryCards">
						<div className="allCategoryCards_banner">
							<Banner
								img={require(`../assets/image/topic/${topic.img}`)}
								width="100"
								height="440"
								quote={topic.quote}
							/>
						</div>
						<div className="allCategoryCards_container">
							{allBlogsByTopic.map((blog, index) => {
								return (
									<CategoryCard
										key={index}
										urlImage={require(`../assets/image/blog/${blog.coverImg}`)}
										date={`${blog.location} - ${blog.date}`}
										title={`${blog.title}`}
										content={`${blog.content}`}
										slug={`${blog.slug}`}
									/>
								);
							})}
						</div>
					</div>
				</Helmet>
			</div>
		);
}

export default Category;
