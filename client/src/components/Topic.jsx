import React from "react";
import Topic_Post from "./BlogCard";
import { useSelector, useDispatch } from "react-redux";
import { getAllBlogsByUserIDAsync } from "../features/post/blogSlice";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Topic(props) {
	const dispatch = useDispatch();
	const userID = 10;
	const topicID = props.id;
	console.log(topicID);
	const allBlogs = useSelector((state) => state.blog);
	useEffect(() => {
		dispatch(getAllBlogsByUserIDAsync(userID));
	}, [dispatch, userID]);
	const allBlogsByTopicID = allBlogs.filter((blog) => blog.topicID === topicID);
	console.log(allBlogsByTopicID);

	const allPostsElements = allBlogsByTopicID.map((blog) => {
		return (
			// eslint-disable-next-line react/jsx-pascal-case
			<Topic_Post
				key={blog.id}
				id={blog.id}
				urlImage={require(`../assets/image/blog/${blog.coverImg}`)}
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
