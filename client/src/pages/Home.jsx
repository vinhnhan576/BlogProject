import React from "react";
import CategoryCard from "../components/CategoryCard";
import Helmet from "../components/Helmet";
import Topic from "../components/Topic";
import Category from "./Category";
import { useSelector, useDispatch } from "react-redux";
import PostSlice, {
	getAllTopicsByUserIDAsync,
} from "../features/topic/topicSlice";
import { useState, useEffect } from "react";

function Home(props) {
	const allTopics = useSelector((state) => state.topic);
	const userID = props.blogger.id;
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllTopicsByUserIDAsync(userID));
	}, [dispatch, userID]);
	const allTopicElements = allTopics.map((topic) => {
		return (
			<Topic
				key={topic.id}
				id={topic.id}
				userID={topic.userID}
				topicName={topic.topicName}
				slug={topic.slug}
				blogs={topic.Blog}
			/>
		);
	});
	// console.log(allTopicElements);
	return (
		<div>
			<Helmet title="Trang chủ">{allTopicElements}</Helmet>
		</div>
	);
}

export default Home;
