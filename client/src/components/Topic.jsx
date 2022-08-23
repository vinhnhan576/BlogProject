import React from "react";
import DoiSongImg from "../assets/image/banner/banner.png";
import Topic_Post from "./Topic_Post";
import { useSelector, useDispatch } from "react-redux";
import PostSlice, {
	getAllBlogsByUserIDAsync,
} from "../features/post/PostSlice";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Topic(props) {
	const [userID, setUserID] = useState(2);
	const [topicID, setTopicID] = useState(props.id);
	console.log(topicID)
	const allPosts = useSelector((state) => state.post);
	const allPostsBytopicID = allPosts.find(post => post.topicID === topicID);
	console.log(allPosts);
	console.log(allPostsBytopicID);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllBlogsByUserIDAsync(userID));
	}, [dispatch]);
	const allPostsElements = allPosts.map((post) => {
		return (
			<Topic_Post
				key={post.id}
				id={post.id}
				urlImage={post.coverImg}
				content={post.content}
				title={post.title}
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
