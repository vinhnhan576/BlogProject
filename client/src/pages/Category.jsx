import React from "react";
import Helmet from "../components/Helmet";
import AllCategoryCards from "../components/AllCategoryCards";
import Banner from "../components/Banner";
import { useSelector, useDispatch } from "react-redux";
import PostSlice, {
	getAllBlogsByUserIDAsync,
} from "../features/post/blogSlice";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getBloggerByAliasAsync } from "../features/user/bloggerSlice";
import CategoryCard from "../components/CategoryCard";

function Category() {
	const dispatch = useDispatch();
	const params = useParams();
	const alias = params.alias;
	const allBlogs = useSelector((state) => state.blog);
	const blogger = useSelector((state) => state.blogger);
	useEffect(() => {
		dispatch(getBloggerByAliasAsync(alias));
		dispatch(getAllBlogsByUserIDAsync(blogger.id));
	}, [dispatch, blogger.id, alias]);
	const allBlogsByTopicID = allBlogs?.filter(
		(blog) => blog.Topic.slug === params.slug
	);
	const topic = blogger.Topic?.find((topic) => topic.slug === params.slug);

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
						{allBlogsByTopicID.map((blog, index) => {
							return (
								<CategoryCard
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

				{/* <AllCategoryCards /> */}
			</Helmet>
		</div>
	);
}

export default Category;
