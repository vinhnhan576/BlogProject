import React from "react";
import Topic_Post from "./BlogCard";
import { useSelector, useDispatch } from "react-redux";
import { getAllBlogsByUserIDAsync } from "../features/post/blogSlice";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Topic(props) {
<<<<<<< HEAD
	const [userID, setUserID] = useState(2);
	const [topicID, setTopicID] = useState(props.id);
	console.log(topicID)
	const allPosts = useSelector((state) => state.post);
	const allPostsBytopicID = allPosts.find(post => post.topicID === topicID);
=======
	const [userID, setUserID] = useState(1);
	const [topicID, setTopicID] = useState(1);
	const allPosts = useSelector((state) => state.blog);
>>>>>>> 91c8cc2a00c859c8d7c99f24833d7eec099f63c0
	console.log(allPosts);
	console.log(allPostsBytopicID);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllBlogsByUserIDAsync(userID));
	}, [dispatch]);
	const allPostsElements = allPosts.map((blog) => {
		return (
			// eslint-disable-next-line react/jsx-pascal-case
			<Topic_Post
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
<<<<<<< HEAD
					<Link to={`/topic/params/${props.slug}`}>{props.topicName}</Link>
=======
					<Link to={`/topic/${topicID}`}>{props.topicName}</Link>
>>>>>>> 91c8cc2a00c859c8d7c99f24833d7eec099f63c0
				</h2>
				<div className="topic-underline"></div>
			</div>
			<div>{allPostsElements}</div>
		</div>
	);
}
