import React from "react";
import CategoryCard from "../components/CategoryCard";
import Helmet from "../components/Helmet";
import Topic from "../components/Topic";
import Category from "./Category";
import { useSelector, useDispatch } from "react-redux";
import PostSlice, {
	getAllTopicsByUserIDAsync,
} from "../features/topic/topicSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Home({ blogger }) {
	const allTopics = useSelector((state) => state.topic);
	const user = useSelector((state) => state.user);
	// const userID = blogger.id;
	// const dispatch = useDispatch();
	// useEffect(() => {
	// 	dispatch(getAllTopicsByUserIDAsync(userID));
	// }, [dispatch, userID]);
	var allTopicElements;
	if (blogger) {
		allTopicElements = blogger.Topic.map((topic) => {
			return (
				<Topic
					key={topic.id}
					id={topic.id}
					userID={topic.userID}
					topicName={topic.topicName}
					slug={topic.slug}
					blogs={topic.Blog}
					alias={blogger.alias}
				/>
			);
		});
	}

	const isEqual = (...objects) =>
		objects.every((obj) => JSON.stringify(obj) === JSON.stringify(objects[0]));
	const isLoggedIn = isEqual(user, blogger);

	return (
		<div>
			<Helmet title="Trang chủ">
				{
					<div className="home">
						{isLoggedIn ? (
							<div className="home__new-blog">
								<Link to="/" className="home__link">
									<div className="home__new-blog__pfp">
										<img
											src={require(`../assets/image/user/${blogger.profilepic}`)}
											alt=""
										/>
									</div>
									<div className="home__new-blog__placeholder">
										{"Tạo nguồn cảm hứng mới <3"}
									</div>
								</Link>
							</div>
						) : (
							""
						)}
						<div className="home__topics">{allTopicElements}</div>
					</div>
				}
			</Helmet>
		</div>
	);
}

export default Home;
