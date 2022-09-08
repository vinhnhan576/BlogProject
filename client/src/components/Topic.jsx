import React from "react";
import Topic_Post from "./BlogCard";
import { useSelector, useDispatch } from "react-redux";
import { getAllBlogsByUserIDAsync } from "../features/post/blogSlice";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BlogCard from '../components/BlogCard'

export default function Topic(props) {
	const [userID, setUserID] = useState(1);
	const [topicID, setTopicID] = useState(props.id);
	const allPosts = useSelector((state) => state.blog);
	const allPostsByTopicID = allPosts.find(post=>post.topicID===topicID);
	console.log(allPosts);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllBlogsByUserIDAsync(userID));
	}, [dispatch]);
	const allPostsElements = allPostsByTopicID.map((blog) => {
		return (
			// eslint-disable-next-line react/jsx-pascal-case
			<BlogCard
				key={blog.id}
				id={blog.id}
				urlImage={blog.coverImg}
				content={blog.content}
				title={blog.title}
				slug={blog.slug}
			/>
		);
	});
	return (
		<div className="container" id={props.id}>
			<div className="topic">
				<h2 className="topic-name">
					<Link to={`/topic/params/${props.slug}`}>{props.topicName}</Link>
				</h2>
				<div className="topic-underline"></div>
			</div>
			<div>{allPostsElements}</div>
		</div>
	);
}
